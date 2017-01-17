# react-native-albums

### Install process

* The main install problem I had was Gradle was not linked properly (see further down).
* Install Node JS
* Install Python 2
* Android Studio
* >npm install -g react-native-cli
* Install JDK 8.1
* Run Android Studio - ADV, create a virtual device with Marshmallow API image
* Add to Environment Variables: (1) java 1.8 (2) platform tools
* ERRORS: There were some problems, but the main problem was
* MUST USE x86 image NOT x86_64

* start emulator

Start up Android Studio go to project
Start AVD, start emulator

`C:\Users\CS\AppData\Local\Android\sdk\"AVD Manager.exe"`  

Start Administrative Command line

`> cd C:\Users\CS\Documents\Web Development\react-native\albums`  

`> C:\Users\CS\Documents\Web Development\react-native\albums\node_modules\react-native\packager\packager.sh `  
`> react-native run-android`  

CTRL - M opens up menu on emulator

Install eslint rules

`> npm install --save-dev eslint-config-rallycoding`

Add new eslintrc file to main directory - to hold project-specific rules

New file: `.eslintrc`


------------------------

### Walkthrough of directories

Used for for each Android and iOS (not using these much)

```
android  
ios
```
Were mostly concerned with what is outside those folders.

configuration and install dependencies.

```
node_modules
```

We'll be mostly concerned with these "entry points" to our application:
```
index.android.js
index.ios.js
```
These files are pretty close to identical but can be modified for each platform.


For the purpose of this course, if you are developing for android us index.android.js

---------------------------------

### 5.15 Import libraries React, ReactNative

* Wipe out the index.android.js file and start from scratch
* Let's get a component started
* Import React and ReactNative

---------------------------------

### 5.17 Create a Component

```javascript
// Create a component

const App = () => {
  return (
    <Text>Some Text</Text>
  );
};

```

Above JSX is the same as

```javascript
"use strict";

var App = function App() {
  return React.createElement(
    Text,
    null,
    "Some Text"
  );
};
```

source: https://babeljs.io/

---------------------------------

### 5.18 Registering (Render) a Component


For any application we create we have to register at least one component.

```javascript
// Render it to a device.
ReactNative.AppRegistry.registerComponent('albums', () => App);
```

---------------------------------

### 5.19 Destrucuring Imports and Const

Change code to destructure ReactNative:

`import { Text, AppRegistry } from 'react-native';`  

`AppRegistry.registerComponent('albums', () => App);`

With ES6 the const App can be reduced to

```javascript
const App = () => (
    <Text>Some Text</Text>
  );
```
.
