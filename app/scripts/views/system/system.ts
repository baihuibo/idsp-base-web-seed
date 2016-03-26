// Created by baihuibo on 16/3/24.

import {Controller, Menu, Route} from "annotation";
import {sort} from "util";
import Rule = system.Rule;
import User = manage.User;

let name = "页面2";
let icon = "icon";
let route = "/system";

@Route({
    route: route,
    controllerAs: "T",
    templateUrl: "scripts/views/system/system.html"
})
@Menu({icon, name, route})
@Controller
export class SystemCtrl implements system.ICtrl {

    constructor(public $scope:IScope) {

    }

    queryRule():Rule[] {
        return undefined;
    }
}