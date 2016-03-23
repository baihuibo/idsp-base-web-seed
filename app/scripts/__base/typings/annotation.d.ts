/**
 * 路由配置参数
 *  route 路由名称
 *  templateUrl 模板路径
 *  controller 控制器名称,可选,如果不填,默认读取标注的class的名字
 *  controllerAs 控制器别名,可选
 */
interface RouteOption {
    route:string,
    templateUrl:string,
    controller?:string,
    controllerAs?:string
}

declare module "annotation" {

    /**
     * 设置provider
     * @param name
     */
    function Provider(name?:string | ng.IServiceProviderFactory)

    /**
     * 设置路由
     * @param option
     */
    function Route(option:RouteOption)

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
    function BeforeRun(module?:ng.IModule)

    /**
     * 项目运行时进行配置
     * ng.config()
     * @constructor
     */
    function BeforeConfig(module?:ng.IModule)
}