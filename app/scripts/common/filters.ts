//Created by baihuibo on 16/1/26.

import app from "app";

app.filter('test', function () {
    return function (input) {
        return "test" + input;
    }
});