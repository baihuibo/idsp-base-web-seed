// Created by baihuibo on 16/3/30.
/**
 * 远程校验配置
 * @prop resource
 * @prop method 发送请求类型 (get,post,delete,put) 默认gei
 * @prop check 校验程序,如果不填写,则服务器必须返回 {result : boolean} 来表示通过或者不通过
 * @prop params 发送到服务器的参数 {value:value} , 可自行扩展添加额外属性
 * @prop invokeParam 调用服务器方法,默认空
 */
interface RemoteValidOption {
    resource?:any
    method?:string
    check?:any
    params?:any
    invokeParam?:any
}