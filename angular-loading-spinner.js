(function () {
    "use strict";

    angular.module("ng.loadingSpinner", [])
        .directive('ngSpinner', function factory() {
            var directiveDefinitionObject = {
                restrict: "AE",
                replace: true,
                template: '<div class="loading-spinner" ng-show="if" ' +
                    'ng-class="{ ' +
                    '\'loading-spinner--centered\': centered, ' +
                    '\'loading-spinner--overlay\': overlay, ' +
                    '\'loading-spinner--overlay-light\': overlayLight, ' +
                    '\'loading-spinner--inline\': inline, ' +
                    '\'loading-spinner--white\': white}">' +
                    '<div class="ls-bar ls-bar_1"></div>' +
                    '<div class="ls-bar ls-bar_2"></div>' +
                    '<div class="ls-bar ls-bar_3"></div>' +
                    '<div class="ls-bar ls-bar_4"></div>' +
                    '<div class="ls-bar ls-bar_5"></div>' +
                    '<div class="ls-bar ls-bar_6"></div>' +
                    '<div class="ls-bar ls-bar_7"></div>' +
                    '<div class="ls-bar ls-bar_8"></div>' +
                    '<div class="ls-bar ls-bar_9"></div>' +
                    '<div class="ls-bar ls-bar_10"></div>' +
                    '<div class="ls-bar ls-bar_11"></div>' +
                    '<div class="ls-bar ls-bar_12"></div>' +
                    '<div class="loading-spinner__inline-text" ng-show="inlineText">{{inlineText}}</div>' +
                    '</div>',
                scope: {
                    centered: "@",
                    overlay: "@",
                    inline: "@",
                    inlineText: "@",
                    white: "@",
                    overlayLight: "@",
                    if: "="
                }
            };
            return directiveDefinitionObject;
        });
}());
