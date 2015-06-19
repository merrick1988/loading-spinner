# ng-loading-spinner

Angular directive to show an animated ios spinner 

# Usage

Include both spinner.less and angular-loading-spinner.js in your application.
Add images to /images/ folder.
Add the module angularSpinner as a dependency to your app module:

var myapp = angular.module('myapp', ['angularLoadingSpinner']);

You can now start using the ng-spinner directive to display an animated spinner. 

For example :

```
<div gt-spinner if="loading" overlay-light="true" white="true" centered="true"></div>
```

also with inline text

```
<span gt-spinner if="loading" inline="true" inline-text="Loading..."></span>
```

