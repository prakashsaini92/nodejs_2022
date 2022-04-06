const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "curd");

/// files created in loop
// for(let i = 0; i<=5; i++) {
//   fs.writeFile(`${dirPath}/hello${i}.txt`, `hello this is file new data ${i}`, (err) => {
//     console.log("file is created");
//   })
// }

fs.readdir(dirPath, (err, files) => {
  files.forEach((value, i) => {
   //// update file
  //   fs.appendFile(`${dirPath}/${value}`, `this is my new text updated`, (err) => {
  //  console.log("file is updated");
  //   })
//// rename file
  // fs.rename(`${dirPath}/${value}`, `${dirPath}/prakash${i}.txt`, (err => {
  //   console.log("file is rename");
  // }))
   
  /// remove file in loop
  // fs.unlink(`${dirPath}/${value}`, (err) => {
  //   console.log("file removed");
  // })

  })
})



