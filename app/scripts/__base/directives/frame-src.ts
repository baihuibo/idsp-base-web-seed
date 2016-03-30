// Created by baihuibo on 16/3/30.
import app from "app";

/**
 * @examples
 *  <iframe frame-src="{{T.src}}"></iframe>
 *
 *  class TestCtrl{
 *    public src:string = '';
 *
 *    constructor(){
 *      this.src = 'http://host/to/path/to/file'
 *    }
 *  }
 */
app.directive('frameSrc', function () {
    return function (scope, iframe, attr) {
        if (iframe.is('iframe')) {
            attr.$observe('iframeSrc', function (val) {
                iframe.attr('src', val || 'about:blank');
            });
        } else {
            console.warn('not iframe tag');
        }
    }
});