//Created by baihuibo on 16/1/27.

export function uppercase(str:string):string {
    return String(str || "").toUpperCase();
}
export function sort<T>(arr:T[], sortFn:(a:T, b:T)=>number) {
    arr.sort(sortFn);
}
