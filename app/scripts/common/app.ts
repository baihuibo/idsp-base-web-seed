//Created by baihuibo on 16/1/26.
import "../__base/base-module";
import config from "config";

var app = angular.module('app', ['base-module']);

app.value('config', config);

app.config(() => {
    //配置
});

export default app;