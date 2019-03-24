const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		
		this.maxSize= maxSize || 30;
		this.heap = new MaxHeap;
	}

	push(data, priority) {
		if (this.maxSize==30){
			error.code;
		} else {
			this.heap.push(data, priority);
		}
		
		
	}

	shift() {
		this.heap.pop();
	}

	size() {
		return this.length;
	}

	isEmpty() {
		return this.size()==0;
	}
}

module.exports = PriorityQueue;
