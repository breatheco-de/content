---
title: "OTA Updates and Hardening in React Native CLI"
description: "How to combine OTA updates and hardening to keep your React Native apps secure, fast to iterate, and resilient against real-world threats. Learn how to deploy JavaScript changes in minutes while implementing the security layers needed to protect your code, your users, and your infrastructure"
authors:
    - rosinni_rodriguez
tags: ["react-native", "ota-updates", "codepush", "eas-update", "mobile-security", "hardening", "ci-cd", "devops"]
---

Imagine you just launched your mobile app and discover a critical bug. In the traditional model, you’d have to fix the code, recompile the entire app, upload it to the app stores, wait for review (which can take days on iOS), and then wait for your users to manually update. This process can take days or even weeks, during which your users are experiencing the issue.

This is where OTA (Over-The-Air) updates and app hardening come in. These techniques let you solve problems quickly while keeping your app secure.

## Understanding OTA Updates

Over-The-Air (OTA) updates are a mechanism that lets you update your React Native app’s JavaScript code without going through the app stores. Think of it as updating your app’s “brain” while keeping the “body” (native code) intact.

When working with React Native, it’s important to understand your app is made of two parts: native code (Java/Kotlin for Android, Objective-C/Swift for iOS) and JavaScript code (your business logic, React components, etc.). OTA updates can only modify the JavaScript part, which represents most of your app.

### Why are they important?

OTA updates let you fix bugs in minutes instead of days. Your users get the update automatically without doing anything, meaning you can iterate quickly, test new features, get instant feedback, and even roll back if something goes wrong. This agility is essential in modern mobile development.

### Limitations you should know

Before implementing OTA updates, you need to understand their restrictions. You can’t update native code via OTA, so if you change dependencies that modify iOS or Android code, you’ll need a traditional update through the stores. You also can’t change native permissions (camera, location, etc.) or modify native project configuration.

This restriction exists for technical and security reasons. Native code is compiled and signed during the store publishing process, and Apple and Google policies don’t allow this code to change without their review. However, most day-to-day changes are in JavaScript, so OTA covers 80-90% of your update needs.

## OTA Solutions for React Native CLI

There are mainly two solutions for OTA updates in React Native: Microsoft’s CodePush and Expo’s EAS Update. While CodePush was traditionally the default for CLI projects, EAS Update now also supports bare React Native (CLI) projects, offering a modern and well-maintained alternative.

### CodePush: The traditional option

CodePush was developed by Microsoft and has been the most popular OTA solution for React Native CLI for years. It lets you publish updates directly to specific user groups, do staged rollouts, and instantly revert problematic updates.

The main advantage of CodePush is its maturity and extensive documentation. Many teams have used it successfully in production for years. However, Microsoft has reduced active development on CodePush, so new features are less frequent.

### EAS Update: The modern alternative

EAS Update, developed by Expo, is the most modern and actively maintained solution. While Expo was traditionally associated with the managed workflow, EAS Update now works perfectly with React Native CLI (bare workflow) projects. It offers native integration with the Expo ecosystem, better debugging, and faster updates thanks to its optimized infrastructure.

If you’re starting a new project, EAS Update is generally the best choice. If you already have CodePush implemented and it works well, migration isn’t urgent, but consider EAS Update for future projects.

## Implementing OTA with CodePush

Let’s implement OTA updates using CodePush so you understand how this technology works from the ground up. Once you grasp the concepts here, migrating to EAS Update will be easy if you wish.

### Preparing your environment

First, install the App Center CLI, which manages CodePush. App Center is Microsoft’s platform that hosts and distributes your updates. Install it globally using npm:

```bash
npm install -g appcenter-cli
```

Once installed, authenticate with your Microsoft account. Run the login command and follow the process in your browser:

```bash
appcenter login
```

This command will open your browser where you can sign in with your Microsoft account (or create one if you don’t have it). Once authenticated, you’ll get a token saved locally on your machine.

### Registering your app in App Center

Before you can send updates, you need to register your app in App Center. This is done separately for iOS and Android since they’re technically two different apps. Create the apps using these commands:

```bash
appcenter apps create -d MyApp-iOS -o iOS -p React-Native
appcenter apps create -d MyApp-Android -o Android -p React-Native
```

Here, `-d` specifies the display name, `-o` is the OS, and `-p` indicates it’s a React Native project. You can change “MyApp” to your actual app name.

Now create the deployment keys, which your app uses to identify itself with CodePush. Typically, you work with two environments: Staging (for testing) and Production (for end users):

```bash
appcenter codepush deployment add -a <user>/MyApp-iOS Staging
appcenter codepush deployment add -a <user>/MyApp-iOS Production
appcenter codepush deployment add -a <user>/MyApp-Android Staging
appcenter codepush deployment add -a <user>/MyApp-Android Production
```

Replace `<user>` with your App Center username. These commands will generate deployment keys you’ll need in the next step.

### Installing and configuring the SDK

Now install the CodePush package in your React Native project:

```bash
npm install --save react-native-code-push
```

For React Native 0.60 and above, linking is automatic thanks to autolinking, but you still need additional native configuration.

On iOS, open your `ios/MyApp/AppDelegate.mm` file and modify it to import CodePush and configure the bundle URL. Find the line where `sourceURLForBridge` is defined and replace it with:

```objc
#import <CodePush/CodePush.h>

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  #if DEBUG
    return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
  #else
    return [CodePush bundleURL];
  #endif
}
```

This tells your app to use the metro bundler in debug mode (for hot reloading) and CodePush in release mode to get the bundle.

On Android, open `android/app/src/main/java/com/<yourapp>/MainApplication.java` and add CodePush as a React Package. Modify the `getJSBundleFile()` method:

```java
import com.microsoft.codepush.react.CodePush;

@Override
protected String getJSBundleFile() {
    return CodePush.getJSBundleFile();
}
```

Now add your deployment keys to the configuration. On iOS, open `ios/MyApp/Info.plist` and add:

```xml
<key>CodePushDeploymentKey</key>
<string>YOUR_IOS_DEPLOYMENT_KEY</string>
```

On Android, open `android/app/src/main/res/values/strings.xml` and add:

```xml
<string name="CodePushDeploymentKey">YOUR_ANDROID_DEPLOYMENT_KEY</string>
```

You can get your deployment keys by running:

```bash
appcenter codepush deployment list -a <user>/MyApp-iOS --displayKeys
appcenter codepush deployment list -a <user>/MyApp-Android --displayKeys
```

### Integrating CodePush in your React code

Now that the native configuration is ready, integrate CodePush in your JavaScript code. The simplest way is to wrap your main component with the CodePush HOC (Higher Order Component).

In your `App.js` or `App.tsx`:

```javascript
import React from 'react';
import { Text, View } from 'react-native';
import codePush from 'react-native-code-push';

function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My App with CodePush</Text>
    </View>
  );
}

// Basic CodePush configuration
const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
};

export default codePush(codePushOptions)(App);
```

This basic configuration checks for updates every time the user resumes the app. There are three main strategies: `ON_APP_START` (on launch), `ON_APP_RESUME` (on resume), and `MANUAL` (when you decide).

### Publishing your first update

Now for the exciting part: publishing your first OTA update. Make a change in your code, for example, modify the text in your App.js. Then run:

```bash
appcenter codepush release-react -a <user>/MyApp-iOS -d Staging
appcenter codepush release-react -a <user>/MyApp-Android -d Staging
```

This command does several things automatically: generates the production bundle of your JavaScript code, packages it with assets, uploads it to App Center servers, and marks it as available for the specified deployment (Staging in this case).

The `-d` flag specifies the deployment target. Always test in Staging first, and when you’re sure, publish to Production:

```bash
appcenter codepush release-react -a <user>/MyApp-iOS -d Production
appcenter codepush release-react -a <user>/MyApp-Android -d Production
```

### Advanced update handling

The basic configuration works, but for optimal user experience you’ll want more control. CodePush lets you customize how and when updates are downloaded and installed.

You can create a loading screen while the update downloads:

```javascript
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import codePush from 'react-native-code-push';

function App() {
  const [updateProgress, setUpdateProgress] = useState(null);

  useEffect(() => {
    codePush.sync(
      {
        installMode: codePush.InstallMode.IMMEDIATE,
        updateDialog: {
          title: "Update available",
          optionalUpdateMessage: "A new version is available. Do you want to update?",
          optionalInstallButtonLabel: "Yes",
          optionalIgnoreButtonLabel: "Later",
        },
      },
      (status) => {
        switch (status) {
          case codePush.SyncStatus.DOWNLOADING_PACKAGE:
            // Update downloading
            break;
          case codePush.SyncStatus.INSTALLING_UPDATE:
            // Update installing
            break;
        }
      },
      ({ receivedBytes, totalBytes }) => {
        setUpdateProgress({ receivedBytes, totalBytes });
      }
    );
  }, []);

  if (updateProgress) {
    const percent = (updateProgress.receivedBytes / updateProgress.totalBytes) * 100;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Downloading update: {percent.toFixed(0)}%</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My App</Text>
    </View>
  );
}

export default App;
```

This implementation shows visual progress of the update and gives users control over when to install optional updates.

### Progressive rollout strategies

A recommended practice is not to release updates to 100% of your users immediately. CodePush lets you do progressive rollouts. For example, you can release first to 25% of users:

```bash
appcenter codepush release-react -a <user>/MyApp-iOS -d Production --rollout 25
```

If all goes well after monitoring, you can increase the percentage:

```bash
appcenter codepush patch -a <user>/MyApp-iOS Production --rollout 100
```

This strategy gives you time to detect issues before they affect all your users.

## Hardening in React Native

Now that you understand how OTA updates work, you need to make sure your app is secure. This is where hardening comes in. **Hardening is the process of securing your app against threats and vulnerabilities.** When you publish a mobile app, you’re distributing your code to millions of devices you don’t control. Malicious users may try to reverse engineer your app, modify its behavior, or extract sensitive information.

Hardening isn’t about making your app “100% impossible to hack” (that doesn’t exist), but about significantly increasing the cost and effort required to compromise it. Think of it like your house locks: not impenetrable, but they deter most intruders.

### Why is it important in the context of OTA?

OTA updates introduce an additional attack vector: if someone intercepts or manipulates your updates, they could inject malicious code into your users’ apps. That’s why OTA solutions like CodePush and EAS Update implement cryptographic verification of updates, but your responsibility doesn’t end there.

You need to protect API keys, secrets, and sensitive data your app handles. You need to detect when your app is running in a compromised environment (rooted/jailbroken device). And you need to obfuscate your code to make reverse engineering harder.

## Fundamental hardening techniques

### Protecting secrets and API keys

The most common mistake in React Native apps is storing API keys directly in JavaScript code. This is problematic because anyone can decompile your JavaScript bundle and read those keys in plain text.

The solution is to never store secrets in JavaScript code. Instead, use environment variables during build and store sensitive values in native code. This is where `react-native-config` helps.

First, install the library:

```bash
npm install react-native-config
```

Create a `.env` file at your project root (and add it to `.gitignore`):

```bash
API_KEY=your_secret_api_key
API_ENDPOINT=https://example.com
```

Now you can access these variables in your JavaScript code safely:

```javascript
import Config from 'react-native-config';

const apiKey = Config.API_KEY;
const endpoint = Config.API_ENDPOINT;
```

The key point is these variables are injected at build time, not runtime. This means they’re not in the JavaScript bundle distributed with your app, but in compiled native code, which is much harder to extract.

### Detecting compromised environments

Rooted (Android) or jailbroken (iOS) devices are risky because they allow privileged access to the OS. In these environments, an attacker can more easily intercept network traffic, modify your app’s behavior, or extract stored data.

Use `jail-monkey` to detect these environments:

```bash
npm install jail-monkey
```

Implement checks at app startup:

```javascript
import JailMonkey from 'jail-monkey';

function AppSecurityCheck() {
  useEffect(() => {
    if (JailMonkey.isJailBroken()) {
      Alert.alert(
        'Unsecure device',
        'This app cannot run on modified devices for security reasons.',
        [{ text: 'OK', onPress: () => BackHandler.exitApp() }]
      );
    }
  }, []);

  // rest of your app
}
```

This check isn’t foolproof (it can be bypassed), but adds a layer of protection and deters casual attacks. For apps handling very sensitive data (fintech, health), you could also check for debugging or hooking tools:

```javascript
if (JailMonkey.hookDetected()) {
  // The app is being modified at runtime
}

if (JailMonkey.canMockLocation()) {
  // GPS can be faked
}
```

### Obfuscating your JavaScript code

Even though your JavaScript bundle is minified in production, it’s still relatively easy to read for a determined person. Obfuscation makes your code much harder to understand without affecting functionality.

Metro, React Native’s bundler, doesn’t offer obfuscation by default. You need to use `metro-transform-plugins` or tools like `javascript-obfuscator`. Here’s how to integrate obfuscation into your build process.

Install the obfuscator:

```bash
npm install --save-dev javascript-obfuscator metro-transform-plugins
```

Create a `metro.config.js` file if you don’t have one, and configure the transformer:

```javascript
const { getDefaultConfig } = require('@react-native/metro-config');
const JavaScriptObfuscator = require('javascript-obfuscator');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  
  return {
    ...defaultConfig,
    transformer: {
      ...defaultConfig.transformer,
      minifierPath: 'metro-minify-terser',
      minifierConfig: {
        // Production config
        compress: {
          drop_console: true, // Remove console.logs
        },
      },
    },
  };
})();
```

For more aggressive obfuscation, you can create a custom plugin to process your bundle after compilation:

```javascript
// obfuscator-plugin.js
const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');

function obfuscateBundle(bundlePath) {
  const code = fs.readFileSync(bundlePath, 'utf8');
  
  const obfuscated = JavaScriptObfuscator.obfuscate(code, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.75,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 0.4,
    debugProtection: false, // true in production may affect performance
    debugProtectionInterval: 0,
    disableConsoleOutput: true,
    identifierNamesGenerator: 'hexadecimal',
    log: false,
    renameGlobals: false,
    rotateStringArray: true,
    selfDefending: true,
    stringArray: true,
    stringArrayEncoding: ['base64'],
    stringArrayThreshold: 0.75,
    unicodeEscapeSequence: false,
  });
  
  fs.writeFileSync(bundlePath, obfuscated.getObfuscatedCode());
}

module.exports = { obfuscateBundle };
```

Note that aggressive obfuscation can increase bundle size and slightly affect performance. Find the right balance for your app by testing.

### Securing network communication

All communication between your app and servers must be encrypted using HTTPS/TLS. But that’s not enough: you also need to implement SSL Pinning to prevent man-in-the-middle attacks.

SSL Pinning means your app only accepts specific certificates you define, even if the device has fake certificates installed. Use `react-native-ssl-pinning` to implement it:

```bash
npm install react-native-ssl-pinning
```

Configure pinning in your code:

```javascript
import { fetch } from 'react-native-ssl-pinning';

const response = await fetch('https://example.com/data', {
  method: 'GET',
  timeoutInterval: 10000,
  pkPinning: true,
  sslPinning: {
    certs: ['my-certificate'], // name of the .cer file in your bundle
  },
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});
```

Place your certificate file (.cer) in:
- iOS: `ios/MyApp/my-certificate.cer`
- Android: `android/app/src/main/assets/my-certificate.cer`

This technique prevents someone from intercepting your traffic by installing a fake certificate on the device, which is common in corporate environments or compromised devices.

### Secure data storage

Never use `AsyncStorage` for sensitive data. AsyncStorage isn’t encrypted and can be easily read on rooted devices or via backup. For sensitive data, use the native keychain.

Install `react-native-keychain`:

```bash
npm install react-native-keychain
```

Store sensitive data securely:

```javascript
import * as Keychain from 'react-native-keychain';

// Save
await Keychain.setGenericPassword('username', 'password', {
  service: 'com.myapp',
  accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
  accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
});

// Retrieve
const credentials = await Keychain.getGenericPassword({
  service: 'com.myapp',
});

if (credentials) {
  console.log('User:', credentials.username);
  console.log('Password:', credentials.password);
}
```

Data stored with Keychain uses the device’s Secure Enclave and is protected with hardware encryption. You can also require biometric authentication to access it.

## Integrating hardening with OTA updates

Now that you understand both OTA and hardening separately, let’s talk about how they work together and special considerations you need.

### Update integrity verification

CodePush and EAS Update implement cryptographic verification of updates by default. Each update is signed with private keys on the servers and your app verifies the signature before installing. This prevents someone from injecting malicious code.

However, make sure your deployment keys are protected. Never commit them to your Git repo and use environment variables to manage them:

```bash
# .env.production
CODEPUSH_KEY_IOS=your_ios_key
CODEPUSH_KEY_ANDROID=your_android_key
```

In your CI/CD pipeline, inject these variables as encrypted secrets. If using GitHub Actions:

```yaml
- name: Release CodePush Update
  env:
    CODEPUSH_KEY: ${{ secrets.CODEPUSH_KEY_IOS }}
  run: |
    appcenter codepush release-react \
      -a user/MyApp-iOS \
      -d Production \
      --deployment-key $CODEPUSH_KEY
```

### Safe rollback

A key advantage of OTA is instant rollback if you detect a problem. You can revert to a previous version in seconds:

```bash
appcenter codepush rollback -a <user>/MyApp-iOS Production
```

Implement active error monitoring (using Sentry or similar) to detect issues quickly after a release:

```javascript
import * as Sentry from '@sentry/react-native';
import codePush from 'react-native-code-push';

// Report CodePush version to Sentry
codePush.getUpdateMetadata().then((metadata) => {
  if (metadata) {
    Sentry.setTag('codepush.version', metadata.label);
    Sentry.setTag('codepush.deployment', metadata.deploymentKey);
  }
});
```

This lets you correlate errors with specific bundle versions and do informed rollbacks.

### Forced vs optional updates

For critical security bugs, you’ll want to force the update. CodePush supports mandatory updates:

```bash
appcenter codepush release-react \
  -a <user>/MyApp-iOS \
  -d Production \
  --mandatory true
```

In your code, mandatory updates are installed automatically:

```javascript
codePush.sync({
  installMode: codePush.InstallMode.IMMEDIATE,
  mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
});
```

Use this option carefully. Mandatory immediate updates restart the app automatically, which can frustrate users in the middle of a task. For most updates, it’s better to use `ON_NEXT_RESTART`.

## Best practices for a robust OTA+Hardening system

### Implement strict semantic versioning

Maintain a clear versioning scheme that differentiates between app store versions and OTA versions. A common convention is:

```
[appstore_version].[codepush_version]

Example: 1.2.0.5
- 1.2.0 is the App Store version
- 5 is the fifth OTA update on that base version
```

Store this info in your app for debugging:

```javascript
import { getVersion, getBuildNumber } from 'react-native-device-info';
import codePush from 'react-native-code-push';

export async function getAppVersion() {
  const cpMetadata = await codePush.getUpdateMetadata();
  const storeVersion = getVersion(); // 1.2.0
  const buildNumber = getBuildNumber(); // 42
  const cpLabel = cpMetadata?.label || 'none'; // v5
  
  return {
    full: `${storeVersion}.${cpLabel}`,
    store: storeVersion,
    build: buildNumber,
    codePush: cpLabel,
  };
}
```

### Automate your release pipeline

Never do manual releases. Automate the entire process to avoid human errors and ensure consistency. An example with GitHub Actions:

```yaml
name: Release OTA Update

on:
  push:
    branches:
      - main

jobs:
  release-codepush:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Install AppCenter CLI
        run: npm install -g appcenter-cli
      
      - name: Login to AppCenter
        run: appcenter login --token ${{ secrets.APPCENTER_TOKEN }}
      
      - name: Release to CodePush Staging
        run: |
          appcenter codepush release-react \
            -a ${{ secrets.APPCENTER_APP_IOS }} \
            -d Staging \
            --description "Auto-release: ${{ github.event.head_commit.message }}"
```

This workflow runs tests, then automatically publishes to Staging every time you push to main. You can extend it with additional steps to publish to Production after validation.

### Implement feature flags

Feature flags let you enable or disable features remotely without a new release. This is especially powerful combined with OTA. You can deploy new code but keep it disabled, test it internally, and activate it gradually.

Use a library like `react-native-config-reader` or services like LaunchDarkly:

```javascript
import { getFeatureFlag } from './featureFlags';

function MyFeature() {
  const isEnabled = getFeatureFlag('new_feature');
  
  if (!isEnabled) {
    return <LegacyFeature />;
  }
  
  return <NewFeature />;
}
```

This gives you an instant “kill switch”: if a new feature causes problems, you disable it without rolling back the entire code.

### Monitoring and observability

Implement comprehensive telemetry to understand how your updates behave in the field. Besides crash reporting, monitor:

```javascript
// Track update adoption
codePush.getUpdateMetadata().then((metadata) => {
  if (metadata) {
    analytics.track('CodePush Update Installed', {
      label: metadata.label,
      appVersion: metadata.appVersion,
      deploymentKey: metadata.deploymentKey,
      description: metadata.description,
      isFirstRun: metadata.isFirstRun,
    });
  }
});

// Track download time
const startTime = Date.now();
codePush.sync(
  { ... },
  (status) => {
    if (status === codePush.SyncStatus.UPDATE_INSTALLED) {
      const downloadTime = Date.now() - startTime;
      analytics.track('Update Download Time', {
        milliseconds: downloadTime,
      });
    }
  }
);
```

This info helps you optimize your bundle size and understand adoption patterns.

## Pre-production security checklist

Before launching your app with OTA enabled, make sure you meet these security requirements:

**Secret protection:**
- No API key or secret in JavaScript code
- Environment variables for sensitive configuration
- CodePush/EAS Update deployment keys in CI/CD secrets

**Compromise detection:**
- Jailbreak/root check at startup
- Debugging tool detection in production
- Alerts when the app runs in an unsecure environment

**Code obfuscation and protection:**
- JavaScript bundle obfuscated in production
- Console.logs removed from final bundle
- Source maps protected (not public)

**Secure communication:**
- All traffic over HTTPS/TLS
- SSL Pinning implemented for critical endpoints
- Timeout and retry logic for network requests

**Storage:**
- Sensitive data in native Keychain
- AsyncStorage only for non-sensitive data
- Additional encryption for PII if needed

**OTA-specific:**
- Staged rollouts configured (25% → 50% → 100%)
- Active error monitoring post-release
- Documented and tested rollback plan
- Mandatory updates only for critical security

In conclusion, OTA updates give you incredible agility to iterate and fix issues quickly. Hardening ensures this agility doesn’t compromise your users’ security. These two practices don’t conflict—they complement each other.

Remember, security is a continuous process, not a final state. Stay updated on new vulnerabilities, update your dependencies regularly, and review your security implementation with every major release.
