# v0.0.48
- 调整
    1. menu 新增支持配置指向路径,可以以通过后台接口来返回菜单来达到控制菜单的权限

# v0.0.47
- 修复
    1. 修复菜单模块的逻辑bug导致菜单的初始化不完整

# v0.0.46
- 修改
    1. 修复菜单中的配置bug
    2. 支持在`menu.yaml` 中对额外路由的描述

# v0.0.45
- 新增
    1. `js-yaml` 解析模块
    2. 新增菜单配置文件 `app/data/menu.yaml`
    
- 变更
    1. 取消注解 Menu 已不需要
    2. ctrl 中只需参数 `route` 即可
       ```ts
       import {Controller, Route} from "annotation";
       import {IScope} from "../../typings/common/IScope";
       @Route({
           route: "/page2", //只需要此route参数,之前的参数 name和icon之类的需写在配置文件[menu.yaml]中
           controllerAs: "T",
           templateUrl: "scripts/views/page2/page.html"
       })
       @Controller
       export class Page2Ctrl {
           public name:string;
       
           constructor(public $scope:IScope) {
               this.name = 'page2';
           }
       }
       ```

# v0.0.44
- 新增
    1. 分页指令新增数据格式化参数 `format` 用来做数据格式化处理操作

# v0.0.43
- 修改
    1. `index.html` 中新增 `<meta charset="UTF-8">` 解决中文乱码问题

# v0.0.42
- 修改
    1. `app/scripts/typings/common/IScope.d.ts` 添加导出关键字

## 修改说明