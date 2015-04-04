var fs = require("fs");
fs.readFile('./myModule.js', function (err, data) {
   if (err) throw err;
   if (data)
      console.info("read successfully", data);
});
console.info("testAsync...");