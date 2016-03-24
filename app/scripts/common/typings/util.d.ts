// Created by baihuibo on 16/3/23.
declare module "util" {

    /**
     * 将字符串转换为大写字母
     * @param str
     */
    export function uppercase(str:string):string

    /**
     * 排序
     * @param arr
     * @param sortFn
     */
    export function sort<T>(arr:T[], sortFn:(a:T, b:T)=>number)
}