import "./common/directives";
import "./common/filters";
import "./common/servers";

import {uppercase} from "./common/util";
import {BeforeRun} from "./common/annotation";
import {IScope} from "./typings/common/IScope";
import {MenuItem} from "./__base/typings/MenuItem";
import './views/all';

@BeforeRun
class Global {
    constructor($rootScope:IScope, menu:MenuItem[]) {
        //菜单注入
        $rootScope.menus = menu;

        //设置标题
        $rootScope.setTitle = (title:string) => {
            $rootScope.pageTitle = title;
        };

        $rootScope.$on('$routeChangeStart', (e, route) => {
            $rootScope.setTitle(null);
        });

        var activeRoute:string = '';
        $rootScope.$on('$routeChangeSuccess', (e, current:any) => {
            if (current.$$route) {
                activeRoute = current.$$route.originalPath;
            }
        });

        //页面是否激活
        $rootScope.isActive = (route:string) => {
            return activeRoute === route;
        };
    }
}

console.log(uppercase);

angular.bootstrap(document, ['app']);
