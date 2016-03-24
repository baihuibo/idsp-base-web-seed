// Created by baihuibo on 16/3/24.

import {Controller, Menu, Route} from "annotation";
import {sort} from "util";
import User = manage.User;

let name = "页面1";
let icon = "icon";
let route = "/manage";

@Route({
    route: route,
    controllerAs: "T",
    templateUrl: "scripts/views/manage/manage.html"
})
@Menu({icon, name, route})
@Controller
class ManageCtrl implements manage.ICtrl {
    public users:User[];
    private sortFlag:boolean;
    public name:string;

    constructor(public $scope:IScope, public menu) {
        this.users = this.queryUser();
        this.name = "hello ctrl";
    }

    order() {
        console.log('order');

        sort(this.users, (a, b) => {
            if (this.sortFlag) {
                return a.age - b.age;
            }
            return b.age - a.age;
        });

        this.sortFlag = !this.sortFlag;
    }

    queryUser():User[] {
        var users:User[] = [];
        for (var i = 0; i < 5; i++) {
            var user:User = {
                age: Math.ceil(Math.random() * 100),
                name: Math.random().toString(32).slice(2)
            };
            users.push(user);
        }

        return users;
    }
}
