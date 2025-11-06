---
title: "APIs Nativas en React Native: Del JavaScript al Metal del Dispositivo"
author: rosinni
description: "Guía práctica para usar cámara, biometría, permisos y crear bridges de código nativo (módulos nativos). Para desarrolladores que vienen de Kotlin/Swift."
tags: ["react-native","react-native-cli","native-modules","bridging","permissions","camera","biometrics","turbomodules","jsi","kotlin","swift"]
---

Si vienes de desarrollo nativo mobile, ya sabes que el verdadero poder de una app está en acceder al hardware: cámara, sensores, biometría, almacenamiento seguro. En React Native, esto funciona mediante **bridging**: conectar tu JavaScript con código nativo del dispositivo.

## ¿Qué es "hacer bridging"?

Cuando escuches "bridging" o "crear un bridge", realmente estamos hablando de **crear un Native Module**: un pedazo de código nativo (Kotlin/Swift) que expones a JavaScript. **No estás creando el bridge en sí** - ese mecanismo de comunicación ya existe en React Native. Lo que haces es:

1. Escribir código en Kotlin (Android) o Swift (iOS)
2. "Exponerlo" a JavaScript con decoradores especiales
3. React Native se encarga de la comunicación por ti

**Dos formas de hacer bridging:**

| Forma | ¿Qué usa? | Estado |
|-------|-----------|--------|
| **Native Modules (tradicional)** | Bridge (JSON) | Funciona, pero más lento |
| **TurboModules (nuevo)** | JSI (directo) | Más rápido, carga bajo demanda |

Ambos logran lo mismo, conectar JS con código nativo. La diferencia es el mecanismo interno de comunicación.

En este articulo verás cómo usar las APIs del dispositivo y, cuando sea necesario, crear tus propios bridges (módulos nativos). Piensa en esto como el equivalente a cuando en Android escribes código Kotlin que interactúa con el sistema, o en iOS cuando usas Swift para acceder a frameworks nativos.

## El Sistema de Permisos

En mobile, cualquier acceso a recursos sensibles necesita permisos explícitos del usuario. No puedes simplemente acceder a la cámara sin preguntar primero. React Native maneja esto similar a cómo lo haces en Android o iOS, pero con una API unificada. Vamos a usar `react-native-permissions`, la librería estándar para esto:

```bash
npm install react-native-permissions
cd ios && pod install
```

### Configura los permisos en iOS

Abre el archivo **`ios/TuApp/Info.plist`** (donde "TuApp" es el nombre de tu proyecto) y agrega las descripciones que verá el usuario cuando pidas permisos:

```xml
<key>NSCameraUsageDescription</key>
<string>Necesitamos acceso a tu cámara para tomar fotos</string>

<key>NSPhotoLibraryUsageDescription</key>
<string>Necesitamos acceso a tus fotos para seleccionar imágenes</string>

<key>NSMicrophoneUsageDescription</key>
<string>Necesitamos acceso al micrófono para grabar audio</string>

<key>NSLocationWhenInUseUsageDescription</key>
<string>Necesitamos tu ubicación para mostrarte contenido cercano</string>

<key>NSFaceIDUsageDescription</key>
<string>Usa Face ID para acceder de forma segura</string>
```

### Configura los permisos en Android

Abre el archivo **`android/app/src/main/AndroidManifest.xml`** y declara los permisos que necesitarás:

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

### Solicita permisos en runtime

Ahora viene la parte interesante. Pedirle al usuario permiso en el momento adecuado. Crea un archivo **`src/utils/permissions.js`** (o donde tengas tus utilidades):

```javascript
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Platform } from 'react-native';

async function requestCameraPermission() {
  // Selecciona el permiso según la plataforma
  const permission = Platform.select({
    ios: PERMISSIONS.IOS.CAMERA,
    android: PERMISSIONS.ANDROID.CAMERA,
  });

  // Primero verifica el estado actual
  const result = await check(permission);
  
  switch (result) {
    case RESULTS.UNAVAILABLE:
      console.log('Esta funcionalidad no está disponible en este dispositivo');
      return false;
      
    case RESULTS.DENIED:
      console.log('Permiso denegado, vamos a pedirlo...');
      const requestResult = await request(permission);
      return requestResult === RESULTS.GRANTED;
      
    case RESULTS.LIMITED:
      console.log('Permiso limitado (solo iOS 14+)');
      return true;
      
    case RESULTS.GRANTED:
      console.log('Ya tienes el permiso, todo bien');
      return true;
      
    case RESULTS.BLOCKED:
      console.log('El permiso está bloqueado, el usuario debe ir a Ajustes');
      // Aquí podrías mostrar un diálogo para ir a Settings
      return false;
  }
}
```

**Si vienes de nativo, esto te sonará familiar:**

En **Kotlin/Android**:
```kotlin
if (ContextCompat.checkSelfPermission(context, Manifest.permission.CAMERA) 
    != PackageManager.PERMISSION_GRANTED) {
    ActivityCompat.requestPermissions(activity, 
        arrayOf(Manifest.permission.CAMERA), REQUEST_CODE)
}
```

En **Swift/iOS**:
```swift
AVCaptureDevice.requestAccess(for: .video) { granted in
    if granted {
        // Permiso concedido
    }
}
```

La abstracción es genial: una sola API funciona en ambas plataformas.

## Accede a la Cámara

Vamos a usar `react-native-vision-camera`, que es la librería más moderna y performante para trabajar con la cámara. Olvídate del viejo `react-native-camera`, Vision Camera es el nuevo estándar.

### Instálala

```bash
npm install react-native-vision-camera
cd ios && pod install
```

### Configura los permisos

Ya sabes el drill. Primero los textos que verá el usuario:

**iOS:** En tu **`ios/TuApp/Info.plist`**:
```xml
<key>NSCameraUsageDescription</key>
<string>Necesitamos la cámara para tomar fotos</string>
```

**Android:** En tu **`android/app/src/main/AndroidManifest.xml`**:
```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-feature android:name="android.hardware.camera" android:required="false" />
```

### Crea tu componente de cámara

Ahora viene lo bueno. Vamos a hacer una cámara funcional en menos de 100 líneas. Crea el archivo **`src/screens/CameraScreen.js`** (o **`.tsx`** si usas TypeScript):

```javascript
import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';

export default function CameraScreen() {
  const camera = useRef(null);
  const device = useCameraDevice('back');
  const { hasPermission, requestPermission } = useCameraPermission();
  const [photo, setPhoto] = useState(null);

  // Solicitar permiso si no lo tenemos
  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>Necesitamos acceso a tu cámara</Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Conceder Permiso</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Verificar que hay una cámara disponible
  if (!device) {
    return (
      <View style={styles.container}>
        <Text>No se encontró cámara</Text>
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
      console.log('Foto tomada:', photo.path);
    }
  };

  // Si ya tomamos una foto, mostrarla
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
          <Text style={styles.buttonText}>Tomar otra</Text>
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

**Lo que está pasando aquí:**

1. **`useCameraPermission()`** - Maneja el estado del permiso automáticamente
2. **`useCameraDevice('back')`** - Selecciona la cámara trasera (puedes usar 'front' también)
3. **`camera.current`** - Referencia para controlar la cámara programáticamente
4. **`takePhoto()`** - Retorna una promesa con la ruta del archivo donde se guardó la foto

Si usaste `AVFoundation` en iOS o `Camera2 API` en Android, esto te resultará muy natural. La diferencia es que aquí escribes una vez y funciona en ambas plataformas.

## Autenticación Biométrica

Face ID, Touch ID, huella digital... la biometría es estándar hoy en día. Vamos a implementarla.

### Instala la librería

```bash
npm install react-native-biometrics
cd ios && pod install
```

### Verifica qué hay disponible

Primero necesitas saber si el dispositivo soporta biometría y qué tipo. Crea un archivo **`src/utils/biometrics.js`**:

```javascript
import ReactNativeBiometrics from 'react-native-biometrics';

async function checkBiometrics() {
  const rnBiometrics = new ReactNativeBiometrics();
  
  const { available, biometryType } = await rnBiometrics.isSensorAvailable();
  
  if (available) {
    switch (biometryType) {
      case 'FaceID':
        console.log('Face ID disponible');
        break;
      case 'TouchID':
        console.log('Touch ID disponible');
        break;
      case 'Biometrics':
        console.log('Biometría disponible (Android)');
        break;
    }
  } else {
    console.log('Biometría no disponible');
  }
  
  return available;
}
```

### Autentica al usuario

Ahora sí, vamos a pedirle al usuario que se autentique. Crea **`src/screens/BiometricLoginScreen.js`**:

```javascript
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

export default function BiometricLogin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = async () => {
    try {
      const rnBiometrics = new ReactNativeBiometrics();
      
      // Verificar si hay biometría disponible
      const { available } = await rnBiometrics.isSensorAvailable();
      
      if (!available) {
        Alert.alert('Error', 'Biometría no disponible en este dispositivo');
        return;
      }

      // Solicitar autenticación
      const { success } = await rnBiometrics.simplePrompt({
        promptMessage: 'Autentícate para continuar',
        cancelButtonText: 'Cancelar',
      });

      if (success) {
        setIsAuthenticated(true);
        Alert.alert('Éxito', '¡Autenticación exitosa!');
      } else {
        Alert.alert('Error', 'Autenticación cancelada o fallida');
      }
    } catch (error) {
      console.error('Error en autenticación:', error);
      Alert.alert('Error', 'Hubo un problema con la autenticación');
    }
  };

  if (isAuthenticated) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>✓ Autenticado</Text>
        <Text style={styles.subtitle}>Bienvenido de vuelta</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => setIsAuthenticated(false)}
        >
          <Text style={styles.buttonText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔒 Inicio de Sesión</Text>
      <Text style={styles.subtitle}>Usa biometría para acceder</Text>
      
      <TouchableOpacity style={styles.button} onPress={authenticate}>
        <Text style={styles.buttonText}>Autenticar</Text>
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

## Almacenamiento Seguro

Nunca, pero NUNCA, guardes passwords o tokens en `AsyncStorage`. Eso es texto plano. Para datos sensibles, usa el keychain (iOS) y el Keystore (Android).

### Instala react-native-keychain

```bash
npm install react-native-keychain
cd ios && pod install
```

### Guarda y recupera credenciales

Así es como guardas datos de forma segura. Crea **`src/utils/secureStorage.js`**:

```javascript
import * as Keychain from 'react-native-keychain';

// Guardar credenciales
async function saveCredentials(username, password) {
  try {
    await Keychain.setGenericPassword(username, password, {
      service: 'com.myapp.auth',
      accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
    });
    console.log('Credenciales guardadas de forma segura');
    return true;
  } catch (error) {
    console.error('Error al guardar:', error);
    return false;
  }
}

// Recuperar credenciales
async function getCredentials() {
  try {
    const credentials = await Keychain.getGenericPassword({
      service: 'com.myapp.auth',
    });
    
    if (credentials) {
      console.log('Usuario:', credentials.username);
      console.log('Password:', credentials.password);
      return credentials;
    } else {
      console.log('No hay credenciales guardadas');
      return null;
    }
  } catch (error) {
    console.error('Error al recuperar:', error);
    return null;
  }
}

// Eliminar credenciales
async function deleteCredentials() {
  try {
    await Keychain.resetGenericPassword({
      service: 'com.myapp.auth',
    });
    console.log('Credenciales eliminadas');
    return true;
  } catch (error) {
    console.error('Error al eliminar:', error);
    return false;
  }
}
```

### Ejemplo real: Login con almacenamiento seguro

Vamos a juntar todo en un login funcional que persiste las credenciales. Crea **`src/screens/SecureLoginScreen.js`**:

```javascript
import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import * as Keychain from 'react-native-keychain';

export default function SecureLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Al montar, verificar si hay credenciales guardadas
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
      console.error('Error al verificar credenciales:', error);
    }
  };

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    // Aquí harías tu llamada al API
    // Por ahora, simulamos un login exitoso
    
    try {
      await Keychain.setGenericPassword(username, password);
      setIsLoggedIn(true);
      Alert.alert('Éxito', 'Credenciales guardadas de forma segura');
    } catch (error) {
      Alert.alert('Error', 'No se pudieron guardar las credenciales');
    }
  };

  const handleLogout = async () => {
    try {
      await Keychain.resetGenericPassword();
      setIsLoggedIn(false);
      setUsername('');
      setPassword('');
      Alert.alert('Sesión cerrada', 'Credenciales eliminadas');
    } catch (error) {
      Alert.alert('Error', 'No se pudo cerrar sesión');
    }
  };

  if (isLoggedIn) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>¡Bienvenido, {username}!</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión Seguro</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
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

## Cómo Funciona el Bridging: JavaScript ↔ Nativo

Aquí viene la parte interesante. React Native funciona con dos "mundos" que se comunican:

```
┌─────────────────┐         ┌──────────────────┐
│   JavaScript    │ Bridging│   Código Nativo  │
│   (Tu código)   │ ←─────→ │  (Kotlin/Swift)  │
└─────────────────┘         └──────────────────┘
```

Ese "bridging" (conexión) puede funcionar de dos formas:

### **El Bridge tradicional (la forma vieja)**

Es el mecanismo original de comunicación:

- Los mensajes van de forma **asíncrona**
- Los datos se serializan a JSON para cruzar
- Puede haber latencia si mandas muchos mensajes
- Todos los Native Modules se cargan al inicio (aunque no los uses)

```javascript
// Native Module tradicional
NativeModules.MyModule.doSomething(); // Siempre asíncrono
```

### **JSI + TurboModules (la forma nueva)**

La nueva arquitectura cambia el juego, porque tiene la comunicación **síncrona** cuando la necesitas, nada de serialización JSON innecesaria,  los módulos se cargan bajo demanda (lazy loading) y es mucho, mucho más rápido.

```javascript
// TurboModule
const result = TurboModules.MyModule.doSomething(); // Puede ser síncrono!
```

**En resumen:**
- **Bridge** = El canal de comunicación viejo (JSON, async)
- **JSI** = El canal de comunicación nuevo (directo, sync cuando se necesita)
- **Native Modules** = Módulos que usan el Bridge
- **TurboModules** = Módulos que usan JSI

Ambos logran lo mismo, conectar JS con código nativo. La diferencia es el mecanismo interno.

## TurboModules y JSI: La Nueva Arquitectura

**JSI (JavaScript Interface)** es la capa que permite que JavaScript y C++ hablen directamente, sin el bridge JSON de por medio. Reemplaza al Bridge tradicional. **Lo que te da que** puedes hacer llamadas síncronas (cuando las necesitas), estar sin overhead de serialización/deserialización, te permite acceso directo a objetos nativos desde JS y rendimiento significativamente mejor.

### ¿Qué son los TurboModules?

Son módulos nativos construidos sobre JSI (no sobre el Bridge). Si alguna vez creaste un Native Module, los TurboModules son básicamente lo mismo pero mejor.

**Las diferencias clave:**

| Aspecto | Native Modules (viejo) | TurboModules (nuevo) |
|---------|----------------------|---------------------|
| Carga | Todos al inicio | Bajo demanda |
| Tipo de llamadas | Solo asíncronas | Síncronas y asíncronas |
| Rendimiento | Bridge JSON | JSI directo |
| Definición de tipos | Manual | Automática (Codegen) |

En la práctica, los Native Modules tradicionales siguen funcionando perfectamente. Pero si estás empezando un proyecto nuevo o creando una librería, vale la pena usar TurboModules.

## Crea tu Propio Módulo Nativo (Bridging)

Vamos a crear algo simple pero útil: un módulo que te da información del dispositivo. Esto te enseñará el flujo completo de hacer bridging entre JS y código nativo.

**Estructura de archivos que crearemos:**

```
tu-proyecto/
├── specs/
│   └── NativeDeviceInfo.ts          # Definición TypeScript
├── ios/
│   ├── DeviceInfo.swift             # Implementación iOS
│   └── DeviceInfo.m                 # Bridge Objective-C
└── android/app/src/main/java/com/tuapp/
    ├── DeviceInfoModule.kt          # Implementación Android
    └── DeviceInfoPackage.kt         # Registro del módulo
```

### Paso 1: Define la interfaz en TypeScript

Primero le dices a React Native qué métodos va a tener tu módulo.

Crea el archivo **`specs/NativeDeviceInfo.ts`** en la raíz de tu proyecto:

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

### Paso 2: Implementa el módulo en iOS (Swift)

Ahora vamos con el código nativo para iOS.

Crea el archivo **`ios/DeviceInfo.swift`**:

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
      reject("ERROR", "No se pudo obtener nivel de batería", nil)
    } else {
      resolve(Double(batteryLevel * 100))
    }
  }
  
  @objc
  func vibrate(_ duration: NSNumber) {
    // iOS solo soporta vibración fija
    AudioServicesPlaySystemSound(kSystemSoundID_Vibrate)
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
```

Ahora crea el bridge de Objective-C en **`ios/DeviceInfo.m`**:

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

### Paso 3: Implementa el módulo en Android (Kotlin)

Y ahora el código para Android.

Crea el archivo **`android/app/src/main/java/com/tuapp/DeviceInfoModule.kt`** (reemplaza "tuapp" con el nombre de tu app):

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
            promise.reject("ERROR", "No se pudo obtener nivel de batería", e)
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

Ahora crea el Package en **`android/app/src/main/java/com/tuapp/DeviceInfoPackage.kt`**:

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

No olvides registrar el paquete en **`android/app/src/main/java/com/tuapp/MainApplication.kt`**:

```kotlin
override fun getPackages(): List<ReactPackage> {
    return PackageList(this).packages.apply {
        add(DeviceInfoPackage())
    }
}
```

### Paso 4: Úsalo desde JavaScript

Y ahora la magia. Desde tu JavaScript puedes llamar ese código nativo.

Crea **`src/screens/DeviceInfoScreen.js`**:

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
    // Método síncrono
    const model = DeviceInfo.getDeviceModel();
    setDeviceModel(model);

    // Método asíncrono (Promise)
    const battery = await DeviceInfo.getBatteryLevel();
    setBatteryLevel(battery);
  };

  const handleVibrate = () => {
    // Método void (sin retorno)
    DeviceInfo.vibrate(500); // 500ms
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información del Dispositivo</Text>
      
      <View style={styles.info}>
        <Text style={styles.label}>Modelo:</Text>
        <Text style={styles.value}>{deviceModel}</Text>
      </View>
      
      <View style={styles.info}>
        <Text style={styles.label}>Batería:</Text>
        <Text style={styles.value}>{batteryLevel.toFixed(0)}%</Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleVibrate}>
        <Text style={styles.buttonText}>Vibrar</Text>
      </TouchableOpacity>
    </View>
  );
}
```

## Mejores Prácticas (Para Que no te Compliques)

### 1. Siempre maneja los errores

No asumas que todo va a funcionar:

```javascript
try {
  const result = await NativeModule.someMethod();
} catch (error) {
  console.error('Error en módulo nativo:', error);
  // Maneja el error en la UI
}
```

### 2. Verifica si el dispositivo soporta la feature

No todos los dispositivos tienen todas las capacidades:

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

### 3. TypeScript es tu amigo

Define los tipos de tu módulo nativo para evitar errores:

```typescript
interface DeviceInfoModule {
  getDeviceModel(): string;
  getBatteryLevel(): Promise<number>;
  vibrate(duration: number): void;
}

const DeviceInfo = NativeModules.DeviceInfo as DeviceInfoModule;
```

Con estas herramientas puedes construir apps que se sienten tan nativas como si las hubieras escrito en Kotlin o Swift puro. La diferencia es que con React Native escribes una vez y funciona en ambas plataformas. Y sí, cuando necesitas performance extremo o acceso a APIs muy específicas, todavía puedes escribir código nativo. React Native no te limita, te da opciones.
