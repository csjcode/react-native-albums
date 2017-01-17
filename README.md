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

---------------------------------

### 5.20 Application Outline

see images in research/


---------------------------------

### 5.21 Header Component

* Always do one component per file
* Make src and component folder
* /src/component
* inside make header.js
* Add boilerplate component code to header.js
* note: AppRegistry is only for the root component - for the rest of the child components use `export default ComponentName`

---------------------------------

### 5.22 Consuming File Exports

* Import header
* Nest inside app
* test - should show the knew Header component text message

---------------------------------

### 6.23 Styling with React Native

* separate style file
* Under component add a const styles
* CSS in React Native use camecase rather than dashs. So font-size is now fontSize
* to show the styles, use a new destrucured const in the component return.
* `const { textStyle } = styles;`
* Note: now that we have added more code in the return statement, change to curly braces

---------------------------------

### 6.24 More on Styling Components

* With React Native to move things around (liek a div) we can use the View tag which is a pimitive element imported from Reat Native.
* Add parentheses for multiline return
* Wrap the Text with the View tag.
* Add styling with viewStyle
* Add viewStyle prop to component similar to destructuring used on the textStyle

---------------------------------

### 6.25 Introduction to Flexbox

* Flexbox is a system of positioning elements within a container
* Flexbox properties we use:
* justifyContent (vertical position - flex-start, flex-end, center) and
* alignItems (flex-start, flex-end, center)

---------------------------------

### 6.26 Header Styling

* flexbox will be added to the View tag
* add a shadow `shadowColor: '#000'  ` IMPORTANT: only works in iOS, need elevation for Android  
* add elevation

---------------------------------

### 6.27 Making the Header Reusable

* Take out the hard coded Albums, make it reconfigurable
* App component will decide what the text in the Header is
* (1) First, identify the value in the Header that we want from the parent App component
* `const Header = (props) => {`
* (2) Make sure child component ie. Header is taking the "props" object (a "contract" that the prop will be supplied)
* `<Text style={textStyle}>{props.headerText}</Text>`
* (3) Make sure the parent provides that prop
* In App component `<Header headerText={'Albums'} />`


---------------------------------

### 6.27 Sourcing Header Data

* Retrieve an album list from an API. We don't want to hard code the album data.
* (1) AlbumList: We need to fetch the data and build a list
* (2) AlbumDetail: We need to print the detail for the album

---------------------------------

### 7.29 List Component Boilerplate

* see pic of Fetch Album List
* Use boiler plate to create AlbumList
* Add import into App component (index.android.js)
* In React Native there can only be 1 Top Level tag, other tags must be nested, no 2 top level tags
*






.
