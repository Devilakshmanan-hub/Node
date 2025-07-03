 var F = require('fs');
// F.mkdir('MyFolder',(err)=>{
//     F.writeFile('MyFolder/document.txt','Hello Async file is updated',(err)=>{
//         if (err) throw err;
//     console.log("File written");
//     })
//     if (err) throw err;
//     console.log("Folder created");
// })
// F.unlink('MyFolder/document.txt',(err)=>{
//     if(err) throw err;
//     console.log("File deleted");
//  })

// F.rmdir('MyFolder',(err)=> {
//        if (err) throw err;
//        console.log("Folder deleted");
// })

// F.readFile('MyFolder/document.txt','utf8',(err,data)=>{
//        if (err) throw err;
//             console.log("Async read:", data);
//     })
//     console.log("After readfile");
//  var data=F.readFileSync('MyFolder/document.txt','utf8')
//     console.log("Sync read",data);
//     console.log("after read");
  F.writeFileSync('MyFolder/document.txt','sync file gets updated',(err)=>{
        if (err) throw err;
             console.log("File written");
    })