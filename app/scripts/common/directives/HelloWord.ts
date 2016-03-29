// Created by baihuibo on 16/3/29.
import app from "app";

app.directive("helloWord", function () {
    return {
        link: function (scope, el, attr) {
            el.text('hello seed');
        }
    }
});