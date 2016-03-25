// Created by baihuibo on 16/3/24.

namespace manage {

    /**
     * 用户对象
     * @prop {number} age 年龄
     * @prop {string} name 名字
     */
    interface User {
        age:number
        name:string
    }

    interface ICtrl {
        queryUser():User[]
    }
}