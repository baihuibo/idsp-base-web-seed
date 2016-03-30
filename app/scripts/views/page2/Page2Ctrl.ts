// Created by baihuibo on 16/3/24.

import {Controller, Menu, Route} from "annotation";
import {IScope} from "../../typings/common/IScope";

let name = "页面2";
let icon = "icon";
let route = "/manage2";

@Route({
    route: route,
    controllerAs: "T",
    templateUrl: "scripts/views/page2/page.html"
})
@Menu({icon, name, route})
@Controller
export class Page2Ctrl {
    public name:string;

    constructor(public $scope:IScope) {
        this.name = 'page2';
    }
}
