import "./common/directives";
import "./common/filters";
import "./common/servers";

import {BeforeRun} from "./common/annotation";
import {IScope} from "./typings/common/IScope";
import './views/all';

@BeforeRun
class Run {
    constructor($rootScope:IScope, $route, MenuServer) {
        //菜单注入
        $rootScope.menus = MenuServer.query();
        $rootScope.menus.$promise.then(function (list) {

            angular.forEach($route.routes, function (option, route) {
                if (!query(list, route)) {
                    delete $route.routes[route];
                }
            });

            function query(list, route) {
                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                    var path = item.route;
                    if (path) {
                        var path2 = (path[path.length - 1] == '/') ? path.substr(0, path.length - 1) : path + '/';
                        if (path === route || path2 === route) {
                            return item;
                        }
                    }

                    if (item.childs) {
                        return query(item.childs, route);
                    }
                }
                return null;
            }
        });

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

angular.bootstrap(document, ['app']);
