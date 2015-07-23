describe('the daterange directive', function() {

	var $ngCompile, $ngRootScope;

	beforeEach(module('ngBootstrap'));

	beforeEach(inject(function($compile, $rootScope) {
		$ngCompile = $compile;
		$ngRootScope = $rootScope;
	}));

	it('creates an instance of daterangepicker', function() {
		var element = $ngCompile('<input type="daterange" ng-model="dummy">')($ngRootScope);
		expect(element.data('daterangepicker')).toBeDefined();
	});

	it('creates an instance with default values', function() {

		var element = $ngCompile('<input type="daterange" ng-model="dummy">')($ngRootScope);
		$ngRootScope.$apply();

		expect(element.data('daterangepicker').startDate.format('YYYY-MM-DD')).toBe(moment().format('YYYY-MM-DD'));
		expect(element.data('daterangepicker').endDate.format('YYYY-MM-DD')).toBe(moment().format('YYYY-MM-DD'));
		expect(element.data('daterangepicker').format).toBe('YYYY-MM-DD');
		expect(element.data('daterangepicker').separator).toBe(' - ');
		expect(element.data('daterangepicker').minDate).toBe(false);
		expect(element.data('daterangepicker').maxDate).toBe(false);
		expect(element.data('daterangepicker').dateLimit).toBe(false);
		expect(JSON.stringify(element.data('daterangepicker').ranges)).toBe(JSON.stringify({}));

	});

	it('creates an instance with provided values', function() {

		var normalized = 'YYYY-MM-DD',
			startDate = '2013-09-10',
			endDate = '2013-09-20',
			format = 'L',
			separator = '/',
			minDate = '2013-09-05',
			maxDate = '2013-09-25',
			limitAmount = 1,
			limitUnit = 'week',
			element = $ngCompile('<input type="daterange" ng-model="dates" format="' + format + '" separator="' + separator + '" min-date="' + minDate + '" max-date="' + maxDate + '" limit="' + limitAmount + ' ' + limitUnit + '">')($ngRootScope);

		$ngRootScope.dates = {
			startDate: startDate,
			endDate: endDate
		};

		$ngRootScope.$apply();

		expect(element.data('daterangepicker').startDate.format(normalized)).toBe(moment(startDate).format(normalized));
		expect(element.data('daterangepicker').endDate.format(normalized)).toBe(moment(endDate).format(normalized));
		expect(element.data('daterangepicker').format).toBe('L');
		expect(element.data('daterangepicker').separator).toBe('/');
		expect(element.data('daterangepicker').minDate.format(normalized)).toBe(moment(minDate).format(normalized));
		expect(element.data('daterangepicker').maxDate.format(normalized)).toBe(moment(maxDate).format(normalized));
		expect(element.data('daterangepicker').dateLimit.asSeconds()).toBe(moment.duration(limitAmount, limitUnit).asSeconds());

	});

	it('passes on ranges from scope to daterangepicker instance', function() {

		$ngRootScope.ranges = {
			'Today': [moment().startOf('day'), moment()],
			// accepts string formatted dates
			'Yesterday': [moment().subtract(1, 'days').format('YYYY-MM-DD'), moment().subtract(1, 'days').format('YYYY-MM-DD')]
		};

		var element = $ngCompile('<input type="daterange" ng-model="dummy" ranges="ranges">')($ngRootScope);

		expect(element.data('daterangepicker').ranges.Today).not.toBeUndefined();
		expect(element.data('daterangepicker').ranges.Today[0].format('YYYY-MM-DD')).toBe(moment().startOf('day').format('YYYY-MM-DD'));
		expect(element.data('daterangepicker').ranges.Today[1].format('YYYY-MM-DD')).toBe(moment().format('YYYY-MM-DD'));
		expect(element.data('daterangepicker').ranges.Yesterday).not.toBeUndefined();
		expect(element.data('daterangepicker').ranges.Yesterday[0].format('YYYY-MM-DD')).toBe(moment().subtract(1, 'days').format('YYYY-MM-DD'));
		expect(element.data('daterangepicker').ranges.Yesterday[1].format('YYYY-MM-DD')).toBe(moment().subtract(1, 'days').format('YYYY-MM-DD'));

	});

	it('passes opens option from attributes to daterangepicker instance', function() {
		var element = $ngCompile('<input type="daterange" ng-model="dummy" opens="left">')($ngRootScope);
		expect(element.data('daterangepicker').opens).toBe('left');
	});

});