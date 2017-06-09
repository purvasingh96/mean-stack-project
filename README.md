# 1. **MongoDb not running properly:**  
**Solution:** For this, goto: cmd then type: `c:/program files/mongodb/server/3.4/bin/mongod.exe ` 
This will start mongodb and keep this cmd running in background and start your _server.js_ file by opening another cmd and type `c:/users/purva singh/desktop/timetable project/npm start server.js ` 
  
# 2. **Ng-Route not working properly:**  
## 2.a. **It shows localhost:/#!/faculty_login.html instead of localhost:8080/faculty_login.html**  
**Solution:** Add `<base href="/">` to your _index.html_ file after head tag and add `$locationProvider.html5Mode({ enabled: true, requireBase: false });` in your_ route.js_ file at the end.  
## 2.b. **On refreshing localhost:8080 page becomes unresponsive and shows error RangeError: Maximum call stack size exceeded.**  
**Solution:** This is because you made a route in _route.js_ file to a page that you probably didnt even create. For example if you have written `.when('/register',{templateurl: 'faculty_register.html'});` and have not created faculty_register.html page yet then you are likely to get stack size exceeded error and _page will become unresponsive_.  

# 3. **res.json() not working properly:**  
**Solution:** Make sure to install express, mongoose, morgan and body-parser by running the command `npm install express, mongoose, morgan, body-parser --save` in cmd. 
