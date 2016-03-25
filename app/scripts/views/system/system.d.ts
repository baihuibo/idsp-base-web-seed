// Created by baihuibo on 16/3/24.

namespace system {

    interface Rule {
        id:number
        ruleMaps:string
    }

    interface ICtrl {
        queryRule():Rule[]
    }
}