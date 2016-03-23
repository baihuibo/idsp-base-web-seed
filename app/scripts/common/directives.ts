//Created by baihuibo on 16/1/26.
import app from "app";

app.directive("helloWord", function () {
    return function (scope, el, attr) {
        el.text('hello seed');
    }
});
