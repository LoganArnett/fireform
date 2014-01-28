'use strict';

/* Directives */


// angular.module('myApp.directives', []).
// directive('appVersion', ['version',
//     function(version) {
//         return function(scope, elm, attrs) {
//             elm.text(version);
//         };
//     }
// ])



angular.module("myApp.directives", [])
    .directive("publicHeader", function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/public-header.html',
            replace: true
        };
    })
    .directive("appHeader", function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/app-header.html',
            replace: true
        };
    })
    .directive("subOneHeader", function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/sub-header-one.html',
            replace: true
        };
    })
    .directive("navTwoHeader", function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/sub-header-two.html',
            replace: true
        };
    })
    .directive("injectBodyClass", function() {
        return {
            restrict: 'E',
            link: function(scope, element, attrs) {



                scope.$root.removeClass = scope.$root.addClass;
                scope.$root.addClass = attrs.injectClasses;
                scope.$emit('someEvent');



            }
        }
    }).directive("styleInject", function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {



                scope.$root.$on('someEvent', function() {

                    element.removeClass(scope.$root.removeClass);
                    element.addClass(scope.$root.addClass);

                });


            }
        }
    })
    .directive("showOnAuth", function() {
        return {
            restrict: 'A',
            replace: true,
            link: function(scope, element, attrs) {


                scope.$root.$on("$firebaseSimpleLogin:login", function() {
                    element.removeClass('hide');
                });




            }
        }
    })
    .directive("hideOnAuth", function() {
        return {
            restrict: 'A',
            replace: true,
            link: function(scope, element, attrs) {

                scope.$root.$on("$firebaseSimpleLogin:login", function() {
                    element.addClass('hide');
                });

            }
        }
    });

// {
//     restrict: 'E',
//     templateUrl: 'partials/sub-header-two.html',
//     replace: true
// };