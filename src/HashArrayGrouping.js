var HashArray = require('hasharray');

var HashArrayGrouping = HashArray._extend({
	init: function init(keyFields, groupFields, options, callback) {
		this.groupFields = groupFields instanceof Array ? groupFields : [groupFields];
		init._super.call(this, keyFields, callback);
		this._groups = {};
    this.groupLengths = {};
    this.groupCount = 0;
    
    for (var key in this.groupFields)
    {
      var groupField = this.groupFields[key];
      this._groups[groupField] = {};
      this.groupLengths[groupField] = 0;
    }
	},
	keyFormat: function (key) {
		return (key instanceof Date) ? key.getTime() : key;
	},
	add: function add() {
		var self = this;

		add._super.apply(this, arguments);
		
		// Here we do our grouping.
		for (var i in arguments)
		{
			var item = arguments[i];
			
			this.groupFields.forEach(function (groupField) {
        var key = item[groupField];
        if (!self._groups[groupField][key])
        {
          self.groupCount++;
          self.groupLengths[groupField]++;
        }
				self._groups[groupField][key] = self._groups[groupField][key] || [];
				self._groups[groupField][key].push(item);
			});
		}
	}
});

Object.defineProperty(HashArrayGrouping.prototype, 'groups', {
	get: function () {
		return this._groups;
	}
});

module.exports = HashArrayGrouping;