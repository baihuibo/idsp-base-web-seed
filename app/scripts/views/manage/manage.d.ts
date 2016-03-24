// Created by baihuibo on 16/3/24.

namespace manage {

    interface User {
        age:number
        name:string
    }

    interface ICtrl {
        queryUser():User[]
    }
}