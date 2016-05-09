/**
 * Created by thientk on 5/9/16.
 */
/**
 * Created by thientk on 5/9/16.
 */
var fs = require('fs');
var path = require('path');

var processData = process.argv;
var fileName = processData[2];
var dirName = processData[3];

fs.readdir(dirName, function (err, listFiles) {

    var check = false;

    for (var i = 0; i < listFiles.length; i++) {
        if (listFiles[i] == fileName) {
            check = true;
            break;
        }
    }

    if (check) {
        console.log('file nay ton tai trong thu muc ' + __dirname);
    } else {
        console.log('file nay KHONG ton tai trong thu muc ' + __dirname);
    }

});

// $node variblesFromCommanline 123.js /Users/thientk/Desktop/node/path_fs