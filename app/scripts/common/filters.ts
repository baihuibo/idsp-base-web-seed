// Created by baihuibo on 16/3/29.
import app from "./app";

app.filter('testFilter', function () {
    return function (input) {
        return 'output_' + input
    }
});