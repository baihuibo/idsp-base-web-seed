import "./common/directives";
import "./common/filters";
import "./common/servers";

import {BeforeRun} from "./common/annotation";
import {IScope} from "./typings/common/IScope";
import './views/all';

@BeforeRun
class Run {
    constructor($rootScope:IScope, menu) {
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
            if (current && current.$$route) {
                activeRoute = current.$$route.originalPath;
            }
        });

        //页面是否激活
        $rootScope.isActive = (route:string) => {
            return activeRoute === route;
        };
    }
}

angular.bootstrap(document, ['app']);
