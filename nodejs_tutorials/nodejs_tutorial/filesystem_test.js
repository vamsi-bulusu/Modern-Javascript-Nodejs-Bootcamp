const fs = require('fs');


//creating a file
// fs.writeFile('fs_test.txt', "This is a fs test file", (err) =>{
//     if(err) console.log(err);
//     else {
//         console.log('File is created succesfully');
//         fs.readFile('fs_test.txt','utf8',(err, file)=>{
//             if(err) console.log(err);
//             else console.log(file);
//         });
//     }
// });

fs.rename('fs_test.txt', 'file_system_test.txt',(err) =>{
    if(err) console.log(err);
    else console.log('file renamed succesfully');
});

