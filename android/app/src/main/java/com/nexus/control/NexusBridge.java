package com.nexus.control;

import android.content.Context;
import android.content.SharedPreferences;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * Small native bridge used by the dashboard when it runs inside the APK.
 *
 * The endpoint is intentionally configurable. The app does not try to run a
 * Java Minecraft process on Android; it sends authenticated control commands
 * to the server controller that owns the Minecraft instance.
 */
public final class NexusBridge {
    private static final String PREFS = "nexus_control";
    private static final String ENDPOINT_KEY = "endpoint";
    private static final String TOKEN_KEY = "token";

    private final Context context;
    private final WebView webView;
    private final ExecutorService executor = Executors.newSingleThreadExecutor();
    private final SharedPreferences preferences;

    NexusBridge(Context context, WebView webView) {
        this.context = context.getApplicationContext();
        this.webView = webView;
        this.preferences = this.context.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
    }

    @JavascriptInterface
    public boolean isNativeApp() {
        return true;
    }

    @JavascriptInterface
    public String getEndpoint() {
        return preferences.getString(ENDPOINT_KEY, "");
    }

    @JavascriptInterface
    public void configure(String endpoint, String token) {
        preferences.edit().putString(ENDPOINT_KEY, endpoint == null ? "" : endpoint.trim()).putString(TOKEN_KEY, token == null ? "" : token.trim()).apply();
        dispatch("success", "Control endpoint saved");
    }

    @JavascriptInterface
    public void startServer(String serverId) {
        sendServerAction(serverId, "start");
    }

    @JavascriptInterface
    public void stopServer(String serverId) {
        sendServerAction(serverId, "stop");
    }

    private void sendServerAction(String serverId, String action) {
        String endpoint = getEndpoint();
        if (endpoint.isEmpty()) {
            dispatch("success", "Demo mode: " + action + " request accepted for " + serverId);
            return;
        }

        executor.execute(() -> {
            HttpURLConnection connection = null;
            try {
                String base = endpoint.endsWith("/") ? endpoint.substring(0, endpoint.length() - 1) : endpoint;
                URL url = new URL(base + "/api/servers/" + serverId + "/" + action);
                connection = (HttpURLConnection) url.openConnection();
                connection.setRequestMethod("POST");
                connection.setConnectTimeout(8000);
                connection.setReadTimeout(12000);
                connection.setDoOutput(true);
                connection.setRequestProperty("Content-Type", "application/json");
                String token = preferences.getString(TOKEN_KEY, "");
                if (!token.isEmpty()) connection.setRequestProperty("Authorization", "Bearer " + token);
                try (OutputStream output = connection.getOutputStream()) {
                    output.write("{}".getBytes(StandardCharsets.UTF_8));
                }
                int code = connection.getResponseCode();
                if (code >= 200 && code < 300) {
                    dispatch("success", "Server " + action + " request completed");
                } else {
                    dispatch("error", "Control endpoint returned HTTP " + code);
                }
            } catch (Exception exception) {
                dispatch("error", "Could not reach the control endpoint");
            } finally {
                if (connection != null) connection.disconnect();
            }
        });
    }

    private void dispatch(String status, String message) {
        try {
            JSONObject detail = new JSONObject();
            detail.put("status", status);
            detail.put("message", message);
            String script = "window.dispatchEvent(new CustomEvent('nexus-native-status', {detail:" + detail + "}));";
            webView.post(() -> webView.evaluateJavascript(script, null));
        } catch (Exception ignored) {
            // The web UI remains usable if a native status event cannot be delivered.
        }
    }
}
