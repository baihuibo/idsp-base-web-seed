// Created by baihuibo on 16/3/22.
import app from "app";
import _ from 'lodash';

//设置provider
export function Provider(strOrFun) {
    if (_.isString(strOrFun)) {
        return function (target) {
            app.provider(strOrFun, target);
        }
    } else if (_.isFunction(strOrFun)) {
        app.provider(strOrFun.name, strOrFun);
    }
}

//运行
export function BeforeRun(target) {
    app.run(target);
}

//config
export function BeforeConfig(target) {
    app.config(target);
}

//设置路由
export function Route(option:RouteOption) {
    return function (target:Function) {
        if (!option.controller) {
            option.controller = target.name;
        }
        app.config(function ($routeProvider) {
            $routeProvider.when(option.route, option);
        });
    }
}

//设置为controller
export function Controller(strOrFunc) {
    if (_.isString(strOrFunc)) {
        return function (target) {
            app.controller(strOrFunc, target);
        }
    } else if (_.isFunction(strOrFunc)) {
        app.controller(strOrFunc.name, strOrFunc);
    } else {
        throw Error("@Controller 必须标注在 function or Class");
    }
}

export function Test() {
    
}