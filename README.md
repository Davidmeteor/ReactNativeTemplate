# ReactNativeTemplate

01/09: Fix the error when user clicks the Login/SignUp button in the main page. 
```javascript
// in the src/components/LoginForm/index.js

<Form ref={ref => { this.form = ref }}
===>
<Form ref={ref => { t.form = ref }}
```

