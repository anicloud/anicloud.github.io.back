/**
 * Created by yeh on 15-2-6.
 */
var ani = ani || {};
ani.pj = ani.pj || {};
ani.pj.controller = ani.pj.controller || {};

ani.pj.controller.MetaCtrl = function($scope, $rootScope, $translate){
    $rootScope.changeLanguage = function(langKey){
        $translate.use(langKey);
    }
}