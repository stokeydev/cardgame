// This file contains the code for the Top Trump game

// The TopTrumpQueue class is responsible for maintaining the deck of cards
// and shuffling and drawing cards as required.
function TopTrumpQueue() {
	// Initialize the instance variables
	var total = 0; // Total number of cards in the deck
	var myArray = []; // Array to hold the cards
	var returned; // Placeholder variable for a dequeued card
	// Set the instance variables as properties of the object
	this.total = total;
	this.total = 0; // Reset the total to 0
	this.myArray = myArray;
	this.returned = returned;
	
	// Method to add a new card to the deck
	TopTrumpQueue.prototype.enqueue = function (item) {
		this.myArray[this.total] = item;
		this.total = (this.total + 1);
	};

	// Method to get the total number of cards in the deck
	TopTrumpQueue.prototype.getSize = function () {
		return this.total;
	};
	
	// Method to remove a card from the deck and return it
	TopTrumpQueue.prototype.dequeue = function () {
		// Get the first card in the array and remove it from the array
		returned = this.myArray[0];
		for (var i = 0; i <= (this.total); i++) {
			this.myArray[i] = this.myArray[i + 1];
		}
		// Decrement the total and return the removed card
		this.total = (this.total - 1);
		return returned;
	};

	// Method to shuffle the deck
	TopTrumpQueue.prototype.shuffle = function () {
		// Swap two cards in the array at random a large number of times
		for (var i = 0; i < (this.total * this.total); i++) {
			var temp2 = parseInt((this.total - 2) * Math.random(), 10);
			var temp = this.myArray[temp2];
			this.myArray[temp2] = this.myArray[(temp2 + 1)];
			this.myArray[(temp2 + 1)] = temp;
		}
	};
}