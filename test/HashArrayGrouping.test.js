var assert = require('assert'),
	HashArrayGrouping = require('../src/HashArrayGrouping');

describe('HashArrayGrouping', function() {
	describe('new HashArray(keys) should work', function() {
    // Hash by item['city'] and item['state']
    // Group by item['state']
		var hag = new HashArrayGrouping(['city', 'state'], 'state');
    var salina, wichita;
    items = [
      (wichita = {city: 'wichita', state: 'kansas'}),
      {city: 'hutchinson', state: 'kansas'},
      (salina = {city: 'salina', state: 'kansas'}),
      {city: 'hays', state: 'kansas'},
      {city: 'chicago', state: 'illinois'},
      {city: 'los angeles', state: 'california'}
    ];

    hag.addAll(items);

		it('Should have a all.length of 5.', function() {
			assert.equal(hag.all.length, 6);
		});

		it('Should have groupCount of 2.', function() {
			assert.equal(hag.groupCount, 3);
		});
    
		it('Should have group[\'state\'][\'kansas\'] length of 4.', function() {
			assert.equal(hag.groups['state']['kansas'].length, 4);
		});
    
		it('Should have group[\'state\'][\'california\'] length of 1.', function() {
			assert.equal(hag.groups['state']['california'].length, 1);
		});
    
		it('Should have group[\'state\'][\'illinois\'] length of 1.', function() {
			assert.equal(hag.groups['state']['illinois'].length, 1);
		});
    
		it('Should have group[\'state\'][\'kansas\'][0] == wichita', function() {
			assert.equal(hag.groups['state']['kansas'][0], wichita);
		});
    
		it('Should have group[\'state\'][\'kansas\'][2] == salina', function() {
			assert.equal(hag.groups['state']['kansas'][2], salina);
		});
	});
});