# Nexus Control Android app

This module packages the root dashboard into a native Android WebView and
exposes a small `NexusBridge` for server control.

## Build

Open the `android` folder in Android Studio, or run:

```bash
./gradlew assembleDebug
```

The debug APK is generated at:

```text
app/build/outputs/apk/debug/app-debug.apk
```

## Server controller contract

The app sends these requests when an API endpoint is configured:

```text
POST {endpoint}/api/servers/{serverId}/start
POST {endpoint}/api/servers/{serverId}/stop
```

If no endpoint is configured, the dashboard uses demo mode. The Android bridge
supports a bearer token and keeps endpoint settings in private app storage.

The current workspace does not include a Minecraft control backend yet. The APK
shell is ready for that API, while the browser version continues to work with
simulated data.
