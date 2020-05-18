## Overview

Experimenting with Single Sign on with Cordova and Windows 10 Universal Windows
Platform (UWP) apps.

## Setup

### Installing Node

* Installing [Node.js](https://nodejs.org/en/)
* May also need to follow [instructions for compiling native components](https://github.com/nodejs/node-gyp#on-windows)
* Created skeleton package.json file

```
{
  "name": "cordova_test_app",
  "description": "Basic Cordova App to test SSO",
  "version": "0.1.0",
  "private": true,
  "engines": {
    "node": "12.16.x"
  },
  "scripts": {},
  "dependencies": {},
  "devDependencies": {
  }
}
```


### Setting up Cordova

* Add Cordova packages

```
npm install cordova --save-dev
```

* Create a sample application

```
npx cordova create TestSSOApp com.example.test.sso TestSSO
```

* Installing the Windows platform

```
cd TestSSOApp
npx cordova platform add windows
```

* Changing the config.xml to add this line

```
    <preference name="windows-target-version" value="10.0" />
```

* Building for windows

```
npx cordova build windows
```

* This generates output like this (Since Visual Studio 2017 was already installed)

```
Building project: C:\Users\fiona\wd\nps\cordova_test_app\TestSSOApp\platforms\windows\CordovaApp.Windows10.jsproj
        Configuration : debug
        Platform      : anycpu
        Buildflags    : /p:AppxBundle=Never
        MSBuildTools  : C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\MSBuild\15.0\Bin
buildProject spawn: C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\MSBuild\15.0\Bin\msbuild [
  'C:\\Users\\fiona\\wd\\nps\\cordova_test_app\\TestSSOApp\\platforms\\windows\\CordovaApp.Windows10.jsproj',
  '/clp:NoSummary;NoItemAndPropertyList;Verbosity=minimal',
  '/nologo',
  '/p:Configuration=debug',
  '/p:Platform=anycpu',
  '/p:AppxBundle=Never'
] { stdio: 'inherit' }
  prebuild.js: Patching platform `10`
  - Injected `base.js` reference to `/www/index.html`
  - Removing /( *)(<script\s+(?:type="text\/javascript"\s+)?src="\/\/Microsoft.WinJS.2.0\/js\/base.js">\s*<\/script>)(\
  s*)/ from /www/index.html
  - Removing /( *)(<script\s+(?:type="text\/javascript"\s+)?src="\/\/Microsoft.Phone.WinJS.2.1\/js\/base.js">\s*<\/scri
  pt>)(\s*)/ from /www/index.html
  CordovaApp.Windows10 -> C:\Users\fiona\wd\nps\cordova_test_app\TestSSOApp\platforms\windows\AppPackages\CordovaApp.Wi
  ndows10_1.0.0.0_anycpu_debug_Test\CordovaApp.Windows10_1.0.0.0_anycpu_debug.appx
```

* Attempting to build the windows app

```
npx cordova build windows
```

* This seemed to work but didn't do much, trying to run

```
npx cordova run windows
```

* To install the application it needs to turn on developer mode and add a license
* Developer accounts incur a one-off [setup fee](https://docs.microsoft.com/en-gb/windows/uwp/publish/account-types-locations-and-fees)
* Trying to run in Visual Studio 2015 instead
* Actually seems to need full "developer mode" switching on
* Also doing this installs "Windows Developer Mode" optional packages
* After restarting the process of running the app locally it does indeed work
* The Cordova App Windows appears showing the contents of the index.html file

### Adding In-app Browser

* Following the [instructions on the github page](https://github.com/apache/cordova-plugin-inappbrowser)

* Running command to add the plugin

```
npx cordova plugin add cordova-plugin-inappbrowser
```



## References

### Node/NPM

* [Why you shouldn't globally install npm packages](https://medium.com/@rajeshnaroth/never-do-npm-global-install-1201c44334bf)

### Cordova

* [Cordova Windows Build](https://cordova.apache.org/docs/en/latest/guide/platforms/windows/index.html#requirements-and-support)
* [In-app browser](https://cordova.apache.org/docs/en/2.4.0/cordova/inappbrowser/inappbrowser.html)
* [In-app browser github](https://github.com/apache/cordova-plugin-inappbrowser)
* [Cordova whitelist and CSP](https://docs.microsoft.com/en-us/visualstudio/cross-platform/tools-for-cordova/security/whitelists?view=toolsforcordova-2017)


### Windows

* [Xamarin WebView](https://docs.microsoft.com/en-us/xamarin/xamarin-forms/user-interface/webview?tabs=windows)

### HTML

* The [HTML link target tag](https://www.w3schools.com/tags/att_a_target.asp)
* [W3C Content Security Policy 2](https://www.w3.org/TR/CSP2/)