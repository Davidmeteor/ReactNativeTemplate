# ReactNativeTemplate

# How to rename the project structure
* Remove the build folder in the IOS/Android folder
* Rename all the file name which is myTemplate
* Search all "myTemplate" and replace it by your project name
* Open the Xcode. Change the name of Scheme to your project

# History
01/09: Fix the error when user clicks the Login/SignUp button in the main page. 
```javascript
// in the src/components/LoginForm/index.js

<Form ref={ref => { this.form = ref }}
===>
<Form ref={ref => { t.form = ref }}
```



