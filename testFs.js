var fs = require("fs");
fs.unlink('./deleteFile', function (err) {
   if (err) {
      fs.writeFileSync("./deleteFile",'Hello World!');
      throw err;
   }
   console.info("file deleteFile deleted successfully.");
});
