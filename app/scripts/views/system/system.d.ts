// Created by baihuibo on 16/3/24.

namespace system {

    interface Rule {
        age:number
        name:string
    }

    interface ICtrl {
        queryRule():Rule[]
    }
}