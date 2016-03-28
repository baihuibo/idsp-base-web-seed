//Created by baihuibo on 16/1/26.

//global module
import "angular-resource";
import "angular-route";

export var app = angular.module('base-module', ['ngResource', 'ngRoute']);

//虚拟dom元素,递归优化
app.factory('RecursionHelper', function ($compile) {
    return ()=> {
        return (element, link) => {
            // Normalize the link parameter
            if (_.isFunction(link)) {
                link = {post: link};
            }

            // Break the recursion loop by removing the contents
            var contents = element.contents().remove();
            var compiledContents;
            return {
                pre: (link && link.pre) ? link.pre : null,
                /**
                 * Compiles and re-adds the contents
                 */
                post: (scope, element) => {
                    // Compile the contents
                    if (!compiledContents) {
                        compiledContents = $compile(contents);
                    }
                    // Re-add the compiled contents to the element
                    compiledContents(scope, (clone) => {
                        element.append(clone);
                    });

                    // Call the post-linking function, if any
                    if (link && link.post) {
                        link.post.apply(null, arguments);
                    }
                }
            };
        }
    };
});

app.config(($httpProvider, $resourceProvider)=> {
    var defaults, headers, key, value;
    defaults = $httpProvider.defaults;
    headers = defaults.headers;
    defaults.transformRequest = function (data) {
        if (data === void 0) {
            return data;
        } else {
            return $.param(angular.fromJson(angular.toJson(data)));
        }
    };
    value = 'application/x-www-form-urlencoded; charset=UTF-8';
    key = 'Content-Type';
    headers.post[key] = value;
    headers.put[key] = value;
    headers.patch[key] = value;

    var DefaultActions = $resourceProvider.defaults.actions;
    DefaultActions['queryList'] = {method: 'GET', isArray: true};
    DefaultActions['put'] = {method: 'PUT'};
    DefaultActions['post'] = {method: 'POST'};
});

angular.module('ngResource').factory('resource', function ($resource) {
    var ref = ['get', 'query', 'queryList', 'delete', 'remove'];
    return function resourceFactory(url, defaultParams, actions, options) {
        var cls = $resource(url, defaultParams, actions, options);

        function merge(m, d) {
            if (angular.isString(m)) {
                m = {[m]: true};
            }
            return angular.extend({}, m, d);
        }

        ref.forEach(function (name) {
            if (cls[name]) {
                var oldFn = cls[name];
                cls[name] = function (a1, a2, a3, a4) {
                    var params, data, success, error;
                    if (!arguments.length) {
                        return oldFn.call(cls);
                    }
                    switch (arguments.length) {
                        case 4:
                            error = a4;
                            success = a3;
                            break;
                        case 3:
                        case 2:
                            if (angular.isFunction(a2)) {
                                if (angular.isFunction(a1)) {
                                    success = a1;
                                    error = a2;
                                    break;
                                }
                                success = a2;
                                error = a3;
                            } else {
                                params = a1;
                                data = a2;
                                success = a3;
                            }
                            break;
                        case 1:
                            if (angular.isFunction(a1)) {
                                success = a1
                            } else {
                                data = a1
                            }
                            break;
                    }

                    return oldFn.call(cls, merge(params, data), success, error);
                };
                cls.prototype['$' + name] = function (params, success, error) {
                    if (angular.isFunction(params)) {
                        error = success;
                        success = params;
                        params = {};
                    }
                    var result = cls[name].call(this, merge(params, this), success, error);
                    return result.$promise || result;
                }
            }
        });

        return cls;
    }
});