// Created by baihuibo on 16/3/22.
import "./common/provider";
import "./common/filters";
import "./common/directives";
import "./common/services";
import "./views/all";
import {BeforeRun} from 'annotation';
import {uppercase} from "util";

@BeforeRun
class Start {
    constructor($rootScope) {
        var str = uppercase("HelloWord");
        console.log(str);
    }
}

angular.bootstrap(document, ['app']);
