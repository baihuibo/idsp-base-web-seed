// Created by baihuibo on 16/3/29.
import {MenuItem} from "../__base/typings/MenuItem";
export * from "../__base/annotation";

/**------------ 自定义注解 --------- */
import "../__base/menu";
import app from "app";

export function Menu(menuItem:MenuItem) {
    app.config(function (menuProvider) {
        menuProvider.register(menuItem);
    });
}