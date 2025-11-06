---
title: "Native APIs in React Native: From JavaScript to Device Metal"
author: rosinni
description: "Practical guide to using camera, biometrics, permissions, and creating native code bridges (native modules). For developers coming from Kotlin/Swift."
tags: ["react-native","react-native-cli","native-modules","bridging","permissions","camera","biometrics","turbomodules","jsi","kotlin","swift"]
---

If you come from native mobile development, you already know that the true power of an app lies in accessing hardware: camera, sensors, biometrics, secure storage. In React Native, this works through **bridging**: connecting your JavaScript with device native code.

## What is "bridging"?

When you hear "bridging" or "creating a bridge," we're really talking about **creating a Native Module**: a piece of native code (Kotlin/Swift) that you expose to JavaScript. **You're not creating the bridge itself** - that communication mechanism already exists in React Native. What you do is:

1. Write code in Kotlin (Android) or Swift (iOS)
2. "Expose" it to JavaScript with special decorators
3. React Native handles the communication for you

**Two ways to do bridging:**

| Method | What does it use? | Status |
|--------|-------------------|--------|
| **Native Modules (traditional)** | Bridge (JSON) | Works, but slower |
| **TurboModules (new)** | JSI (direct) | Faster, on-demand loading |

Both achieve the same thing, connecting JS with native code. The difference is the internal communication mechanism.

In this article you'll see how to use device APIs and, when necessary, create your own bridges (native modules). Think of this as the equivalent of when in Android you write Kotlin code that interacts with the system, or in iOS when you use Swift to access native frameworks.

## The Permissions System

In mobile, any access to sensitive resources needs explicit user permissions. You can't just access the camera without asking first. React Native handles this similar to how you do it in Android or iOS, but with a unified API. Let's use `react-native-permissions`, the standard library for this:

```bash
npm install react-native-permissions
cd ios && pod install
```

### Configure permissions on iOS

Open the **`ios/YourApp/Info.plist`** file (where "YourApp" is your project name) and add the descriptions the user will see when you request permissions:

```xml
<key>NSCameraUsageDescription</key>
<string>We need access to your camera to take photos</string>

<key>NSPhotoLibraryUsageDescription</key>
<string>We need access to your photos to select images</string>

<key>NSMicrophoneUsageDescription</key>
<string>We need access to the microphone to record audio</string>

<key>NSLocationWhenInUseUsageDescription</key>
<string>We need your location to show you nearby content</string>

<key>NSFaceIDUsageDescription</key>
<string>Use Face ID for secure access</string>
```

### Configure permissions on Android

Open the **`android/app/src/main/AndroidManifest.xml`** file and declare the permissions you'll need:

```xml
<manifest>
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.USE_BIOMETRIC" />
</manifest>
```

### Request permissions at runtime

Now comes the interesting part. Asking the user for permission at the right moment. Create a **`src/utils/permissions.js`** file (or wherever you have your utilities):

```javascript
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Platform } from 'react-native';

async function requestCameraPermission() {
    // Select permission based on platform
    const permission = Platform.select({
        ios: PERMISSIONS.IOS.CAMERA,
        android: PERMISSIONS.ANDROID.CAMERA,
    });

    // First check current status
    const result = await check(permission);
    
    switch (result) {
        case RESULTS.UNAVAILABLE:
            console.log('This feature is not available on this device');
            return false;
            
        case RESULTS.DENIED:
            console.log('Permission denied, let\'s request it...');
            const requestResult = await request(permission);
            return requestResult === RESULTS.GRANTED;
            
        case RESULTS.LIMITED:
            console.log('Limited permission (iOS 14+ only)');
            return true;
            
        case RESULTS.GRANTED:
            console.log('You already have permission, all good');
            return true;
            
        case RESULTS.BLOCKED:
            console.log('Permission is blocked, user must go to Settings');
            // Here you could show a dialog to go to Settings
            return false;
    }
}
```

**If you come from native, this will sound familiar:**

In **Kotlin/Android**:
```kotlin
if (ContextCompat.checkSelfPermission(context, Manifest.permission.CAMERA) 
        != PackageManager.PERMISSION_GRANTED) {
        ActivityCompat.requestPermissions(activity, 
                arrayOf(Manifest.permission.CAMERA), REQUEST_CODE)
}
```

In **Swift/iOS**:
```swift
AVCaptureDevice.requestAccess(for: .video) { granted in
        if granted {
                // Permission granted
        }
}
```

The abstraction is great: one API works on both platforms.

## Accessing the Camera

Let's use `react-native-vision-camera`, which is the most modern and performant library for working with the camera. Forget about the old `react-native-camera`, Vision Camera is the new standard.

### Install it

```bash
npm install react-native-vision-camera
cd ios && pod install
```

### Configure permissions

You know the drill. First the texts the user will see:

**iOS:** In your **`ios/YourApp/Info.plist`**:
```xml
<key>NSCameraUsageDescription</key>
<string>We need the camera to take photos</string>
```

**Android:** In your **`android/app/src/main/AndroidManifest.xml`**:
```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-feature android:name="android.hardware.camera" android:required="false" />
```

### Create your camera component

Now comes the good part. Let's make a functional camera in less than 100 lines. Create the **`src/screens/CameraScreen.js`** file (or **`.tsx`** if you use TypeScript):

```javascript
import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';

export default function CameraScreen() {
    const camera = useRef(null);
    const device = useCameraDevice('back');
    const { hasPermission, requestPermission } = useCameraPermission();
    const [photo, setPhoto] = useState(null);

    // Request permission if we don't have it
    if (!hasPermission) {
        return (
            <View style={styles.container}>
                <Text>We need access to your camera</Text>
                <TouchableOpacity style={styles.button} onPress={requestPermission}>
                    <Text style={styles.buttonText}>Grant Permission</Text>
                </TouchableOpacity>
            </View>
        );
    }

    // Check that there's an available camera
    if (!device) {
        return (
            <View style={styles.container}>
                <Text>No camera found</Text>
            </View>
        );
    }

    const takePhoto = async () => {
        if (camera.current) {
            const photo = await camera.current.takePhoto({
                qualityPrioritization: 'balanced',
                flash: 'auto',
            });
            
            setPhoto(photo);
            console.log('Photo taken:', photo.path);
        }
    };

    // If we already took a photo, show it
    if (photo) {
        return (
            <View style={styles.container}>
                <Image 
                    source={{ uri: `file://${photo.path}` }} 
                    style={styles.preview} 
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => setPhoto(null)}
                >
                    <Text style={styles.buttonText}>Take another</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Camera
                ref={camera}
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
                photo={true}
            />
            
            <View style={styles.controls}>
                <TouchableOpacity style={styles.captureButton} onPress={takePhoto}>
                    <View style={styles.captureButtonInner} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    controls: {
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
    },
    captureButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    captureButtonInner: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
    },
    preview: {
        width: '100%',
        height: '80%',
    },
    button: {
        backgroundColor: '#2196F3',
        padding: 15,
        borderRadius: 8,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});
```

**What's happening here:**

1. **`useCameraPermission()`** - Manages permission state automatically
2. **`useCameraDevice('back')`** - Selects the back camera (you can use 'front' too)
3. **`camera.current`** - Reference to control the camera programmatically
4. **`takePhoto()`** - Returns a promise with the file path where the photo was saved

If you've used `AVFoundation` on iOS or `Camera2 API` on Android, this will feel very natural. The difference is that here you write once and it works on both platforms.

## Biometric Authentication

Face ID, Touch ID, fingerprint... biometrics is standard nowadays. Let's implement it.

### Install the library

```bash
npm install react-native-biometrics
cd ios && pod install
```

### Check what's available

First you need to know if the device supports biometrics and what type. Create a **`src/utils/biometrics.js`** file:

```javascript
import ReactNativeBiometrics from 'react-native-biometrics';

async function checkBiometrics() {
    const rnBiometrics = new ReactNativeBiometrics();
    
    const { available, biometryType } = await rnBiometrics.isSensorAvailable();
    
    if (available) {
        switch (biometryType) {
            case 'FaceID':
                console.log('Face ID available');
                break;
            case 'TouchID':
                console.log('Touch ID available');
                break;
            case 'Biometrics':
                console.log('Biometrics available (Android)');
                break;
        }
    } else {
        console.log('Biometrics not available');
    }
    
    return available;
}
```

### Authenticate the user

Now yes, let's ask the user to authenticate. Create **`src/screens/BiometricLoginScreen.js`**:

```javascript
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

export default function BiometricLogin() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const authenticate = async () => {
        try {
            const rnBiometrics = new ReactNativeBiometrics();
            
            // Check if biometrics is available
            const { available } = await rnBiometrics.isSensorAvailable();
            
            if (!available) {
                Alert.alert('Error', 'Biometrics not available on this device');
                return;
            }

            // Request authentication
            const { success } = await rnBiometrics.simplePrompt({
                promptMessage: 'Authenticate to continue',
                cancelButtonText: 'Cancel',
            });

            if (success) {
                setIsAuthenticated(true);
                Alert.alert('Success', 'Authentication successful!');
            } else {
                Alert.alert('Error', 'Authentication cancelled or failed');
            }
        } catch (error) {
            console.error('Authentication error:', error);
            Alert.alert('Error', 'There was a problem with authentication');
        }
    };

    if (isAuthenticated) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>✓ Authenticated</Text>
                <Text style={styles.subtitle}>Welcome back</Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => setIsAuthenticated(false)}
                >
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🔒 Login</Text>
            <Text style={styles.subtitle}>Use biometrics to access</Text>
            
            <TouchableOpacity style={styles.button} onPress={authenticate}>
                <Text style={styles.buttonText}>Authenticate</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#2196F3',
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
});
```

## Secure Storage

Never, but NEVER, save passwords or tokens in `AsyncStorage`. That's plain text. For sensitive data, use the keychain (iOS) and Keystore (Android).

### Install react-native-keychain

```bash
npm install react-native-keychain
cd ios && pod install
```

### Save and retrieve credentials

This is how you save data securely. Create **`src/utils/secureStorage.js`**:

```javascript
import * as Keychain from 'react-native-keychain';

// Save credentials
async function saveCredentials(username, password) {
    try {
        await Keychain.setGenericPassword(username, password, {
            service: 'com.myapp.auth',
            accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
        });
        console.log('Credentials saved securely');
        return true;
    } catch (error) {
        console.error('Error saving:', error);
        return false;
    }
}

// Retrieve credentials
async function getCredentials() {
    try {
        const credentials = await Keychain.getGenericPassword({
            service: 'com.myapp.auth',
        });
        
        if (credentials) {
            console.log('Username:', credentials.username);
            console.log('Password:', credentials.password);
            return credentials;
        } else {
            console.log('No saved credentials');
            return null;
        }
    } catch (error) {
        console.error('Error retrieving:', error);
        return null;
    }
}

// Delete credentials
async function deleteCredentials() {
    try {
        await Keychain.resetGenericPassword({
            service: 'com.myapp.auth',
        });
        console.log('Credentials deleted');
        return true;
    } catch (error) {
        console.error('Error deleting:', error);
        return false;
    }
}
```

### Real example: Login with secure storage

Let's put everything together in a functional login that persists credentials. Create **`src/screens/SecureLoginScreen.js`**:

```javascript
import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import * as Keychain from 'react-native-keychain';

export default function SecureLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // On mount, check for stored credentials
    useEffect(() => {
        checkStoredCredentials();
    }, []);

    const checkStoredCredentials = async () => {
        try {
            const credentials = await Keychain.getGenericPassword();
            if (credentials) {
                setUsername(credentials.username);
                setIsLoggedIn(true);
            }
        } catch (error) {
            console.error('Error checking credentials:', error);
        }
    };

    const handleLogin = async () => {
        if (!username || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        // Here you would make your API call
        // For now, we simulate a successful login
        
        try {
            await Keychain.setGenericPassword(username, password);
            setIsLoggedIn(true);
            Alert.alert('Success', 'Credentials saved securely');
        } catch (error) {
            Alert.alert('Error', 'Could not save credentials');
        }
    };

    const handleLogout = async () => {
        try {
            await Keychain.resetGenericPassword();
            setIsLoggedIn(false);
            setUsername('');
            setPassword('');
            Alert.alert('Session closed', 'Credentials deleted');
        } catch (error) {
            Alert.alert('Error', 'Could not logout');
        }
    };

    if (isLoggedIn) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Welcome, {username}!</Text>
                <TouchableOpacity style={styles.button} onPress={handleLogout}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Secure Login</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />
            
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    input: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    button: {
        backgroundColor: '#2196F3',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});
```

## How Bridging Works: JavaScript ↔ Native

Here comes the interesting part. React Native works with two "worlds" that communicate:

```
┌─────────────────┐         ┌──────────────────┐
│   JavaScript    │ Bridging│   Native Code    │
│   (Your code)   │ ←─────→ │  (Kotlin/Swift)  │
└─────────────────┘         └──────────────────┘
```

That "bridging" (connection) can work in two ways:

### **The traditional Bridge (the old way)**

It's the original communication mechanism:

- Messages go **asynchronously**
- Data is serialized to JSON to cross
- There can be latency if you send many messages
- All Native Modules load at startup (even if you don't use them)

```javascript
// Traditional Native Module
NativeModules.MyModule.doSomething(); // Always asynchronous
```

### **JSI + TurboModules (the new way)**

The new architecture changes the game, because it has **synchronous** communication when you need it, no unnecessary JSON serialization, modules load on demand (lazy loading) and it's much, much faster.

```javascript
// TurboModule
const result = TurboModules.MyModule.doSomething(); // Can be synchronous!
```

**In summary:**
- **Bridge** = The old communication channel (JSON, async)
- **JSI** = The new communication channel (direct, sync when needed)
- **Native Modules** = Modules that use the Bridge
- **TurboModules** = Modules that use JSI

Both achieve the same thing, connecting JS with native code. The difference is the internal mechanism.

## TurboModules and JSI: The New Architecture

**JSI (JavaScript Interface)** is the layer that allows JavaScript and C++ to talk directly, without the JSON bridge in between. It replaces the traditional Bridge. **What it gives you** is you can make synchronous calls (when you need them), be without serialization/deserialization overhead, have direct access to native objects from JS and significantly better performance.

### What are TurboModules?

They are native modules built on JSI (not on the Bridge). If you've ever created a Native Module, TurboModules are basically the same but better.

**The key differences:**

| Aspect | Native Modules (old) | TurboModules (new) |
|--------|----------------------|---------------------|
| Loading | All at startup | On demand |
| Call types | Only asynchronous | Synchronous and asynchronous |
| Performance | JSON Bridge | Direct JSI |
| Type definition | Manual | Automatic (Codegen) |

In practice, traditional Native Modules still work perfectly. But if you're starting a new project or creating a library, it's worth using TurboModules.

## Create Your Own Native Module (Bridging)

Let's create something simple but useful: a module that gives you device information. This will teach you the complete flow of bridging between JS and native code.

**File structure we'll create:**

```
your-project/
├── specs/
│   └── NativeDeviceInfo.ts          # TypeScript definition
├── ios/
│   ├── DeviceInfo.swift             # iOS implementation
│   └── DeviceInfo.m                 # Objective-C bridge
└── android/app/src/main/java/com/yourapp/
        ├── DeviceInfoModule.kt          # Android implementation
        └── DeviceInfoPackage.kt         # Module registration
```

### Step 1: Define the interface in TypeScript

First you tell React Native what methods your module will have.

Create the **`specs/NativeDeviceInfo.ts`** file in your project root:

```javascript
// specs/NativeDeviceInfo.ts
import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
    getDeviceModel(): string;
    getBatteryLevel(): Promise<number>;
    vibrate(duration: number): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('DeviceInfo');
```

### Step 2: Implement the module on iOS (Swift)

Now let's go with the native code for iOS.

Create the **`ios/DeviceInfo.swift`** file:

```swift
// ios/DeviceInfo.swift
import Foundation
import UIKit

@objc(DeviceInfo)
class DeviceInfo: NSObject {
    
    @objc
    func getDeviceModel() -> String {
        return UIDevice.current.model
    }
    
    @objc
    func getBatteryLevel(_ resolve: @escaping RCTPromiseResolveBlock,
                                             rejecter reject: @escaping RCTPromiseRejectBlock) {
        UIDevice.current.isBatteryMonitoringEnabled = true
        let batteryLevel = UIDevice.current.batteryLevel
        
        if batteryLevel < 0 {
            reject("ERROR", "Could not get battery level", nil)
        } else {
            resolve(Double(batteryLevel * 100))
        }
    }
    
    @objc
    func vibrate(_ duration: NSNumber) {
        // iOS only supports fixed vibration
        AudioServicesPlaySystemSound(kSystemSoundID_Vibrate)
    }
    
    @objc
    static func requiresMainQueueSetup() -> Bool {
        return false
    }
}
```

Now create the Objective-C bridge in **`ios/DeviceInfo.m`**:

```objc
// ios/DeviceInfo.m
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(DeviceInfo, NSObject)

RCT_EXTERN_METHOD(getDeviceModel)
RCT_EXTERN_METHOD(getBatteryLevel:(RCTPromiseResolveBlock)resolve
                                    rejecter:(RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(vibrate:(nonnull NSNumber *)duration)

@end
```

### Step 3: Implement the module on Android (Kotlin)

And now the code for Android.

Create the **`android/app/src/main/java/com/yourapp/DeviceInfoModule.kt`** file (replace "yourapp" with your app name):

```kotlin
// android/app/src/main/java/com/yourapp/DeviceInfoModule.kt
package com.yourapp

import android.os.Build
import android.os.VibrationEffect
import android.os.Vibrator
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.os.BatteryManager
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class DeviceInfoModule(reactContext: ReactApplicationContext) : 
        ReactContextBaseJavaModule(reactContext) {

        override fun getName(): String {
                return "DeviceInfo"
        }

        @ReactMethod
        fun getDeviceModel(): String {
                return Build.MODEL
        }

        @ReactMethod
        fun getBatteryLevel(promise: Promise) {
                try {
                        val batteryStatus: Intent? = reactApplicationContext.registerReceiver(
                                null,
                                IntentFilter(Intent.ACTION_BATTERY_CHANGED)
                        )
                        
                        val level = batteryStatus?.getIntExtra(BatteryManager.EXTRA_LEVEL, -1) ?: -1
                        val scale = batteryStatus?.getIntExtra(BatteryManager.EXTRA_SCALE, -1) ?: -1
                        
                        val batteryPct = level * 100 / scale.toFloat()
                        promise.resolve(batteryPct.toDouble())
                } catch (e: Exception) {
                        promise.reject("ERROR", "Could not get battery level", e)
                }
        }

        @ReactMethod
        fun vibrate(duration: Double) {
                val vibrator = reactApplicationContext
                        .getSystemService(Context.VIBRATOR_SERVICE) as Vibrator
                
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                        vibrator.vibrate(
                                VibrationEffect.createOneShot(
                                        duration.toLong(),
                                        VibrationEffect.DEFAULT_AMPLITUDE
                                )
                        )
                } else {
                        @Suppress("DEPRECATION")
                        vibrator.vibrate(duration.toLong())
                }
        }
}
```

Now create the Package in **`android/app/src/main/java/com/yourapp/DeviceInfoPackage.kt`**:

```kotlin
// android/app/src/main/java/com/yourapp/DeviceInfoPackage.kt
package com.yourapp

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager

class DeviceInfoPackage : ReactPackage {
        override fun createNativeModules(reactContext: ReactApplicationContext): 
                List<NativeModule> {
                return listOf(DeviceInfoModule(reactContext))
        }

        override fun createViewManagers(reactContext: ReactApplicationContext): 
                List<ViewManager<*, *>> {
                return emptyList()
        }
}
```

Don't forget to register the package in **`android/app/src/main/java/com/yourapp/MainApplication.kt`**:

```kotlin
override fun getPackages(): List<ReactPackage> {
        return PackageList(this).packages.apply {
                add(DeviceInfoPackage())
        }
}
```

### Step 4: Use it from JavaScript

And now the magic. From your JavaScript you can call that native code.

Create **`src/screens/DeviceInfoScreen.js`**:

```javascript
import { NativeModules } from 'react-native';
const { DeviceInfo } = NativeModules;

export default function DeviceInfoScreen() {
    const [deviceModel, setDeviceModel] = useState('');
    const [batteryLevel, setBatteryLevel] = useState(0);

    useEffect(() => {
        loadDeviceInfo();
    }, []);

    const loadDeviceInfo = async () => {
        // Synchronous method
        const model = DeviceInfo.getDeviceModel();
        setDeviceModel(model);

        // Asynchronous method (Promise)
        const battery = await DeviceInfo.getBatteryLevel();
        setBatteryLevel(battery);
    };

    const handleVibrate = () => {
        // Void method (no return)
        DeviceInfo.vibrate(500); // 500ms
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Device Information</Text>
            
            <View style={styles.info}>
                <Text style={styles.label}>Model:</Text>
                <Text style={styles.value}>{deviceModel}</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.label}>Battery:</Text>
                <Text style={styles.value}>{batteryLevel.toFixed(0)}%</Text>
            </View>
            
            <TouchableOpacity style={styles.button} onPress={handleVibrate}>
                <Text style={styles.buttonText}>Vibrate</Text>
            </TouchableOpacity>
        </View>
    );
}
```

## Best Practices (So You Don't Complicate Things)

### 1. Always handle errors

Don't assume everything will work:

```javascript
try {
    const result = await NativeModule.someMethod();
} catch (error) {
    console.error('Error in native module:', error);
    // Handle the error in the UI
}
```

### 2. Check if the device supports the feature

Not all devices have all capabilities:

```javascript
import { Platform, NativeModules } from 'react-native';

function isFeatureAvailable() {
    if (Platform.OS === 'ios') {
        return Platform.Version >= 13; // iOS 13+
    } else {
        return Platform.Version >= 23; // Android 6.0+
    }
}
```

### 3. TypeScript is your friend

Define the types of your native module to avoid errors:

```typescript
interface DeviceInfoModule {
    getDeviceModel(): string;
    getBatteryLevel(): Promise<number>;
    vibrate(duration: number): void;
}

const DeviceInfo = NativeModules.DeviceInfo as DeviceInfoModule;
```

With these tools you can build apps that feel as native as if you had written them in pure Kotlin or Swift. The difference is that with React Native you write once and it works on both platforms. And yes, when you need extreme performance or access to very specific APIs, you can still write native code. React Native doesn't limit you, it gives you options.

