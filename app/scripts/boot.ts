// Created by baihuibo on 16/3/22.
import "./common/provider";
import "./common/filters";
import "./common/directives";
import "./common/services";

import "./views/all";//全部页面

import {BeforeRun, BeforeConfig} from 'annotation';
import {uppercase} from "util";
import config from 'config';

@BeforeConfig
class Config {
    constructor($routeProvider) {
        //设置默认访问页面
        $routeProvider.otherwise('/manage');
    }
}

@BeforeRun
class Start {
    constructor($rootScope) {
        console.log('config', config);
        var str:string = uppercase("HelloWord");
        console.log(str);
    }
}

angular.bootstrap(document, ['app']);
