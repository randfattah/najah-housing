const mysql = require('mysql2');
import express from"express"
let app=express()
// 1. إعداد بيانات الاتصال
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',      
  password: '',    
  database: 'test'  
});

// 2. تنفيذ الاتصال
connection.connect((err) => {
  if (err) {
    console.error('خطأ في الاتصال: ' + err.stack);
    return;
  }
  console.log('تم الاتصال بقاعدة البيانات بنجاح!');
});

// 3. تجربة استعلام بسيط
connection.query('SELECT "Hello World" AS message', (err, results) => {
  if (err) throw err;
  console.log(results[0].message); // سيطبع Hello World
});
console.log("hello, this is DB sample");