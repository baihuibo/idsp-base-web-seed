//Created by baihuibo on 16/3/23.
System.config({
    defaultJSExtensions: true,
    typescriptOptions: {
        //http://www.typescriptlang.org/docs/handbook/compiler-options.html
        module: 'es2015',
        target: 'es6',
        //allowUnusedLabels: true,
        experimentalDecorators: true,//注解
        sourceMap: false
    },
    map: {
        jquery: 'node/jquery/dist/jquery.min',
        angular: 'node/angular/angular',
        'angular-resource': 'node/angular-resource/angular-resource.min',
        'angular-route': 'node/angular-route/angular-route.min',
        lodash: 'node/lodash/lodash.min',
        moment: 'node/moment/moment',

        //加载插件
        //转换 ts -> es6
        ts: 'node/plugin-typescript/lib/plugin',
        typescript: 'node/typescript/lib/typescript',

        //es6 -> es5
        traceur: 'node/traceur/bin/traceur',
        json: 'node/systemjs-plugin-json/json',
        css: 'node/systemjs-plugin-css/css'
    },
    meta: {
        typescript: {format: 'global', exports: 'ts'},
        jquery: {format: 'global'},
        angular: {format: 'global', deps: ['jquery']},
        'angular-resource': {deps: ['angular']},
        'angular-route': {deps: ['angular']}
    },
    paths: {
        'node/': '../node_modules/'
    },

    packages: {
        scripts: {
            defaultExtension: 'ts',
            "meta": {
                "*.ts": {
                    "loader": "ts"
                }
            }
        }
    }
});