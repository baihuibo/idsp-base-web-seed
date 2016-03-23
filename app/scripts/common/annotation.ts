// Created by baihuibo on 16/3/22.
import app from "app";

//将基础注解全部导出
export * from '../__base/annotation';

/**------------ 自定义注解 --------- */

export function Menu(menuItem:MenuItem) {
    app.config(function (menuProvider) {
        menuProvider.register(menuItem);
    });
}


