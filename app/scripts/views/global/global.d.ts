// Created by baihuibo on 16/3/23.

/**
 * 全局Scope
 */
interface IScope extends ng.IRootScopeService {
    //标题
    pageTitle:string;

    //菜单列表
    menus:MenuItem[]

    //当前页面是否激活
    isActive(route:string):boolean;

    //设置标题
    setTitle(title:string)
}