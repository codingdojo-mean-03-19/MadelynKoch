
var _= {
	map: function(list, callback) {
		if(typeof callback === "function") {
			var newList = []
			for(item of list) {
				newList.push(callback(item));
			}
		}
		return newList;
	},

	reduce: function(list, iteratee, initialValue) {
		if(typeof iteratee === "function") {
			var accumulator = initialValue;
			for(item of list) {
				accumulator = iteratee(item, accumulator);
			}
		}
		return accumulator; 
	},

	find: function(list, predicate) {
		if(typeof predicate === "function") {
			for(item of list){
				if(predicate(item)) {
					return item;
				}
			}
		}
	},

	filter: function(list, predicate) {
		if(typeof predicate === "function") {
			var newList = []
			for(item of list) {
				if(predicate(item)) {
					newList.push(item);
				}
			}
		}
		return newList;
	},

	reject: function(list, predicate) {
		if(typeof predicate === "function") {
			var newList = []
			for(item of list) {
				if(!predicate(item)) {
					newList.push(item);
				}
			}
		}
		return newList;
	}
}
console.log(_.reject([1,2,3,4,5,6], function(num){return num % 2 === 0}));
console.log(_.filter([1,2,3,4,5,6], function(num){return num % 2 === 0}));
console.log(_.find([1,3,4], function(num){return num % 2 === 0}));
console.log(_.reduce([1,2,3,4], function (memo, num) {return memo + num}, 0));
console.log(_.map([1,2,3,4], function (x){return x * 2}));
