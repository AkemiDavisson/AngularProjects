var tipModel = {

	total: 0,
	mealCount: 0,

	init: function(){
		this.amount = 0;
		this.mealCount = 0;
	},

	add: function(tip) {
		this.amount += tip;
		this.mealCount ++;
	}
};

tipModel.init();