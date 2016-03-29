/**
 * 路由配置参数
 * @prop {string} route 路由名称
 * @prop {string} templateUrl 模板路径
 * @prop {string|function} controller 控制器名称,可选,如果不填,默认读取标注的class的名字
 * @prop {string} controllerAs 控制器别名,可选
 */
export interface RouteOption {
    route:string,
    templateUrl:string,
    controller?:string,
    controllerAs?:string
}