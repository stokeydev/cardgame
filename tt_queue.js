function TopTrumpQueue() {
	var total = 0;
	var myArray = [];
	var returned;
	this.total = total;
	this.total = 0;
	this.myArray = myArray;
	this.returned = returned;
	
	
	TopTrumpQueue.prototype.enqueue = function (item) {
		this.myArray[this.total] = item;
		this.total = (this.total + 1);
	};
	
	TopTrumpQueue.prototype.getSize = function () {
		return this.total;
	};
	
	TopTrumpQueue.prototype.dequeue = function () {
		returned = this.myArray[0];
		for (var i = 0; i <= (this.total); i++) {
			this.myArray[i] = this.myArray[i + 1];
		}
		this.total = (this.total - 1);
		return returned;
	};
	
	TopTrumpQueue.prototype.shuffle = function () {
		for (var i = 0; i < (this.total * this.total); i++) {
			var temp2 = parseInt((this.total - 2) * Math.random(), 10);
			var temp = this.myArray[temp2];
			this.myArray[temp2] = this.myArray[(temp2 + 1)];
			this.myArray[(temp2 + 1)] = temp;
		}
	};
}