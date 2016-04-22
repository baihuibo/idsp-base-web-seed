// Created by baihuibo on 16/3/29.
import app from "app";
import {MenuItem} from "./typings/MenuItem";
import {isString} from "lodash";

interface MenuList extends Array<any> {
    $promise?:Promise<any>
}

/**
 * @example
 * <example>
 *     <file name="boot.ts">
 *         class Config{
 *          constructor(menuProvider){
 *              menuProvider.setDataUrl('host/path/menu.shtml?method=true');
 *          }
 *         }
 *
 *         class Boot{
 *          constructor(menu){// get host/path/menu.shtml
 *          }
 *         }
 *     </file>
 *
 * </example>
 */
app.provider("menu", class menu {
    private menus:MenuItem[] = [];
    private dataUrl:string = 'data/menu.yaml';

    setDataUrl(url:string) {
        this.dataUrl = url;
    }

    _query(list, route):boolean {
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var path = item.route;
            if (path) {
                var path2 = (path[path.length - 1] == '/') ? path.substr(0, path.length - 1) : path + '/';
                if (path === route || path2 === route) {
                    return true;
                }
            }

            if (item.childs && this._query(item.childs, route)) {
                return true;
            }
        }
        return false;
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

        ret.$promise = $http.get(this.dataUrl).success((res) => {
            if (isString(res)) {
                try {
                    res = JSON.parse(res);
                } catch (e) {
                    res = jsyaml.load(res);
                }
            }
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
