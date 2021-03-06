//Created by baihuibo on 16/3/23.

var copy = require('copy');
var async = require('async');
var fs = require('fs');
var remove = require('remove');

var first = [
    {//入口文件
        path: './app/*.*',
        to: '../../app/',
        overwrite: false
    },
    {//基础目录结构
        path: './app/scripts/common/**/*.*',
        to: '../../app/scripts/common/',
        overwrite: false
    },
    {//typings
        path: './app/scripts/typings/**/*.*',
        to: '../../app/scripts/typings/',
        overwrite: false
    },
    {//基础样式
        path: './app/styles/*.*',
        to: '../../app/styles/',
        overwrite: false
    },
    {//基础视图模块
        path: './app/scripts/views/**/*.*',
        to: '../../app/scripts/views/',
        overwrite: false
    },
    {
        path: './app/scripts/*.*',
        to: '../../app/scripts/',
        overwrite: false
    }
];

var update = [
    {//复制接口描述
        path: './typings/**/*.*',
        to: '../../typings/',
        overwrite: true
    }, {//tsconfig.json
        path: './tsconfig.json',
        to: '../../',
        overwrite: true
    },

    {//样例文件
        path: './examples/**/*.*',
        to: '../../examples/',
        overwrite: true
    },

    {//data
        path: './app/data/*.*',
        to: '../../app/data/',
        overwrite: false
    },
    {//基础模块
        path: './app/scripts/__base/**/*.*',
        to: '../../app/scripts/__base/',
        overwrite: true
    },
    {//全局样式
        path: './app/styles/__base/**/*.*',
        to: '../../app/styles/__base/',
        overwrite: true
    }
];

var list = [];
if (fs.existsSync('../../app')) {//update
    list = list.concat(update);
} else {//first
    list = list.concat(update, first);
}

var copyEach = copy.each;

async.eachSeries(list, function (item, next) {
    var fn;
    if (Array.isArray(item.path)) {
        fn = copyEach;
    } else {
        fn = copy;
    }

    fn(item.path, item.to, {overwrite: item.overwrite}, function (err, file) {
        if (err) {
            return console.error(err);
        }
        next();
    });
}, function done() {
    console.log('copy file is done.');
    var removePaths = ['./typings', './app', './examples'];

    removePaths.forEach(function (path) {
        remove(path, function (err) {
            if (err) {
                console.error(err);
            }
        });
    });
});