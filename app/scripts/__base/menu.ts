// Created by baihuibo on 16/3/29.
import app from "app";
import {MenuItem} from "./typings/MenuItem";

app.provider("menu", class menu {
    private menus:MenuItem[] = [];

    register(menu:MenuItem) {
        menu && this.menus.push(menu);
    }

    $get():MenuItem[] {//提供给angular调用的方法,用来返回值
        return this.menus;
    }
});