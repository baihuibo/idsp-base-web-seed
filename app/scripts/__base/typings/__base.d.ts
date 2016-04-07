///<reference path="../../../../typings/lodash/lodash.d.ts"/>
///<reference path="../../../../typings/jquery/jquery.d.ts"/>
///<reference path="../../../../typings/angularjs/angular.d.ts"/>
///<reference path="../../../../typings/systemjs/systemjs.d.ts"/>
///<reference path="../../../../typings/moment/moment.d.ts"/>
///<reference path="../../../../typings/browser.d.ts"/>

declare module "annotation" {

    /**
     * 设置路由
     * @param {RouteOption} option
     */
    function Route(option)

    /**
     * 设置为controller
     * @param strOrFunc
     * @constructor
     */
    function Controller(strOrFunc?:string | Function)

    /**
     * 项目运行前
     * ng.run()
     * @constructor
     */
    function BeforeRun(target?:Function)

    /**
     * 项目运行时进行配置
     * ng.config()
     * @constructor
     */
    function BeforeConfig(target?:Function)

    /**
     * 配置到系统菜单,已弃用,未来版本将删除此方法
     * @param {MenuItem} menu
     * @constructor
     */
    function Menu(menu);
}

declare var jsyaml;