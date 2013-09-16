ng-bs-daterangepicker
=====================

Angular directive for Dan Grossman's [bootstrap-daterangepicker](https://github.com/dangrossman/bootstrap-daterangepicker)

How to use it
-------------

Inject `ngBootstrap` in your application module:

```
angular.module('myApp', ['ngBootstrap']);
```

and then just add an `input` of type `daterange`:

```
<input type="daterange" ng-model="myDateRange">
```

The result object `$scope.myDateRange` has a `startDate` and `endDate` properties, which are instances of `moment()`.

### Implemented features so far

* `startDate`, `endDate`: are taken from the `ng-model` object;
* `minDate`, `maxDate`: mapped from `min-date` and `max-date` attributes;
* `dateLimit`: mapped from `limit` attribute;
* `format`: mapped from `format` attribute;
* `separator`: mapped from `separator` attribute.

Example with all above features:

```
<input type="daterange" ng-model="dates" min-date="2013-09-10" max-date="2013-09-25" limit="3 days" format="L" separator="/">
```

The `limit` attribute lets you specify a number and unit similarly as you would invoke `moment.duration()`.

### Features to be implemented:

* `ranges`
* `timePicker*`
* `show*`
* other formatting options like `*Class` and stuff 

