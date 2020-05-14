## Overview

## Setup Node

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



## References

* [Why you shouldn't globally install npm packages](https://medium.com/@rajeshnaroth/never-do-npm-global-install-1201c44334bf)
* [Cordova Windows Build](https://cordova.apache.org/docs/en/latest/guide/platforms/windows/index.html#requirements-and-support)