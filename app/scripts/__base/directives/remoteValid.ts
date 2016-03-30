// Created by baihuibo on 16/3/30.
import app from "app";
import _ from "lodash";
/**
 * 远程校验
 * @examples
 *  <form name="fr">
 *     <input type="text" name="username" ng-model="T.name" remote-valid="validOption">
 *
 *     <p> username.$error.remoteValid : {{fr.username.$error.remoteValid}} </p>
 *     <p> username.$valid : {{fr.username.$valid}} </p>
 *     <p> username.$invalid : {{fr.username.$invalid}} </p>
 *  </form>
 *
 *     class TestCtrl{
 *       public validOption:RemoteValidOption = {};
 *       public name:string = '';
 *       constructor(TestResource){
 *         this.validOption.resource = TestResource;
 *       }
 *     }
 */
app.directive('remoteValid', function ($log) {
    var defaults = {
        method: 'get',
        check: null,
        params: {},
        invokeParam: {}
    };
    var name = "remoteValid";
    return {
        restrict: 'A',
        require: '?ngModel',
        scope: {option: '=remoteValid'},
        link: function (scope:any, el, attr, ctrl) {
            if (!ctrl)return;

            var option:RemoteValidOption = _.defaults(scope.option || {}, defaults);

            function validData(newVal) {
                option.params.value = newVal;
                option.resource[option.method](
                    option.invokeParam,
                    option.params,
                    function (data) {
                        var pass;
                        if (option.check && _.isFunction(option.check)) {
                            pass = option.check(data);
                        } else {
                            pass = !!data.result;
                        }
                        ctrl.$setValidity(name, pass);
                    }, function () {
                        ctrl.$setValidity(name, false);
                    });
                return newVal;
            }

            el.on('paste', false);

            ctrl.$parsers.push(validData);

            scope.$watch(attr.ngModel, function (newVal, oldVal) {
                if (!newVal || newVal != oldVal) {
                    ctrl.$setValidity(name, true);
                }
            });
        }
    }
});
