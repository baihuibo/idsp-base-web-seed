// Created by baihuibo on 16/3/23.
declare var require;
declare var __dirname:string;
declare var __filename:string;

declare module 'angular' {
    export default angular;
}

declare module 'moment' {
    export default moment;
}

declare module 'lodash' {
    export default _;
}
declare module 'jquery' {
    export default jQuery;
}

declare module 'app' {
    export default angular.IModule;
}