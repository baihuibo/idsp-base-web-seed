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
    DefaultActions['put'] = {method: 'PUT'};
    DefaultActions['post'] = {method: 'POST'};
    DefaultActions['update'] = {method: 'POST'};
});