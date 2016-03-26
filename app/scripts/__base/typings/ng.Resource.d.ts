// Created by baihuibo on 16/3/25.

namespace ng {

    /**
     * ngResource 接口
     */
    export interface Resource<T> {
        new (data?:T):T & Instance

        get():T & MapResult<T & Instance>
        query():ArrayResult<T & Instance>
        queryList():ArrayResult<T & Instance>

        save():T & MapResult<T & Instance>
        post():T & MapResult<T & Instance>

        put():T & MapResult<T & Instance>

        delete():T & MapResult<T & Instance>
        remove():T & MapResult<T & Instance>
    }

    /**
     * 返回的结果包含装的调用器
     */
    interface Instance {
        $get()
        $query()
        $queryList()

        $save()
        $post()

        $put()

        $remove()
        $delete()
    }

    /**
     * get,save,remove,delete,put,post 返回的结果包装器
     */
    interface MapResult<T> extends Result<T>,Instance {
    }

    /**
     * query,queryList 返回的结果包装器
     */
    interface ArrayResult<T> extends Result<T[]>,Array<T> {
    }

    /**
     * 返回的 result
     */
    interface Result<T> {
        /**
         * Promise 监听器
         */
        $promise:Promise<T>

        /**
         * 是否完成请求
         */
        $resolved:boolean

        /**
         * 取消本次请求
         */
        $cancelRequest:()=>any
    }
}
