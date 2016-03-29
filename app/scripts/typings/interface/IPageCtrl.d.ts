// Created by baihuibo on 16/3/29.
import {IScope} from "../../typings/common/IScope";
import {User} from "../../typings/entity/page/User";

export interface IPageCtrl {
    $scope:IScope;
    menu:any;
    queryUser():User[]
}