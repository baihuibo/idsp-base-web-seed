// Created by baihuibo on 16/3/30.
/**
 * 分页参数数据
 * @prop resource 要发送分页请求的resource对象
 * @prop method 发送请求类型 (get,post,put,delete),默认 get
 * @prop limit 每页显示多少条,默认10
 * @prop limitList 限制显示数据条数的列表(在select内选择即可生效),默认[10,20,30,40,50]
 * @prop resultList 当前数据
 * @prop format 格式化数据
 * @prop goToPage 前往多少页
 * @prop reload 刷新当前页
 * @prop pagingSize 分页器显示数量,默认5
 * @prop params 查询条件,默认 null
 * @prop invokeParam 调用服务器时调用方法参数 默认 paging
 * @prop total 数据总数
 * @prop currentPage 当前页
 * @prop totalPage 总页数
 * @prop hideDesc 隐藏描述 默认false
 * @prop reloadAll 是否总是重新加载 默认false
 */
interface PagingOption {
    method?:string
    resource?:any
    limit?:number
    limitList?:number[]
    resultList?:any[]
    format?:(list:any[])=>any

    /**
     * 跳转到那页
     * @param page 如果忽略此参数,则加载当前页
     *             如果传 0 或者 first,则跳转到首页
     *             如果传 last 则跳转到尾页
     * @param reload 是否重新计算总页数
     */
    goToPage?:(page?, reload?:boolean)=>any
    /**
     * 刷新当前页面
     * @param reNum 是否重计算
     */
    reload?:(reNum?:boolean)=>any
    pagingSize?:number
    params?:any
    invokeParam?:any
    total?:number
    currentPage?:number
    totalPage?:number
    hideDesc?:boolean
    reloadAll?:number
}