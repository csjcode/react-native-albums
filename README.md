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

`> packager.bat`
`> react-native run-android`

CTRL - M opens up menu on emulator
