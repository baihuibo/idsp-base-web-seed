//Created by baihuibo on 16/1/26.

import app from "app";

app.factory('server', function ($resource) {
    return $resource('path/to/action.do');
});