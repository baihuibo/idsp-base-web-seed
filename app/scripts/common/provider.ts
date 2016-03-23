// Created by baihuibo on 16/3/23.
import {Provider} from 'annotation';

@Provider
class menu {
    private menus:MenuItem[] = [];

    register(menu:MenuItem) {
        menu && this.menus.push(menu);
    }

    $get():MenuItem[] {//提供给angular调用的方法,用来返回值
        return this.menus;
    }
}