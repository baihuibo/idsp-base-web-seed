// Created by baihuibo on 16/3/24.

import {Controller, Route} from "annotation";
import {IScope} from "../../typings/common/IScope";

@Route({
    route: "/page2",
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
