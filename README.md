ng-bs-daterangepicker
=====================

Angular directive for Dan Grossman's [bootstrap-daterangepicker](https://github.com/dangrossman/bootstrap-daterangepicker).

Demo: http://luisfarzati.github.io/ng-bs-daterangepicker

Installation
------------

Using bower:

```
bower install ng-bs-daterangepicker
```

Using npm:

```
npm install ng-bs-daterangepicker
```


How to use it
-------------

You should already have a bunch of scripts and CSS required for bootstrap-daterangepicker:

```
<link rel="stylesheet" type="text/css" href="bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="daterangepicker-bs3.css">
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="bootstrap.min.js"></script>
<script type="text/javascript" src="moment.min.js"></script>
<script type="text/javascript" src="daterangepicker.js"></script>
<script type="text/javascript" src="angular.min.js"></script>
```

to the list above, you should add:

```
<script type="text/javascript" src="ng-bs-daterangepicker.js"></script>
```

Then, inject `ngBootstrap` in your application module:

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
* `ranges`: mapped from `ranges` attribute. Can be a JSON string or scoped object. (check daterangepicker for formatting)

Example with all above features:

```
<input
	type="daterange"
	ng-model="dates"
	min-date="2013-09-10"
	max-date="2013-09-25"
	limit="3 days"
	format="L"
	separator="/"
	ranges="{'Special Range':{'startDate': '2013-09-2', 'endDate': '2013-09-5'}}">
```

The `limit` attribute lets you specify a number and unit similarly as you would invoke `moment.duration()`.

### Features to be implemented:

* `timePicker*`
* `show*`
* other formatting options like `*Class` and stuff 

### Build

You can run the tests by running

```
npm install
bower install
grunt
```

assuming you already have `grunt` installed, otherwise you also need to do:

```
npm install -g grunt-cli
```




