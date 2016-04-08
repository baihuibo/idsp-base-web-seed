// Created by baihuibo on 16/3/29.
import app from "app";
import {MenuItem} from "./typings/MenuItem";

interface MenuList extends Array<any> {
    $promise?:Promise<any>
}

app.provider("menu", class menu {
    private menus:MenuItem[] = [];

    register(menu:MenuItem) {
        //menu && this.menus.push(menu);
    }

    _query(list, route) {
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
                return this._query(item.childs, route);
            }
        }
        return null;
    }

    _format(list, routes) {
        angular.forEach(routes, (option, route) => {
            if (!this._query(list, route)) {
                delete routes[route];
            }
        });
    }

    $get($http, $route):MenuItem[] {//提供给angular调用的方法,用来返回值
        var ret:MenuList = [];

        ret.$promise = $http.get('data/menu.yaml').success((res) => {
            res = jsyaml.load(res);
            if (res.menus) {
                res.menus.forEach((item) => {
                    ret.push(item);
                });
            }
            var other = [];
            if (res.others) {
                res.others.forEach((item) => {
                    other.push(item);
                });
            }
            this._format([].concat(other, ret), $route.routes);
        });
        return ret;
    }
});
