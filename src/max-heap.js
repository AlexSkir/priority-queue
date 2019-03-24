const Node = require('./node.js');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		let n = new Node(data, priority);
				
		this.insertNode(n);
		this.shiftNodeUp(n);
				
	}

	pop() {		
		if (this.root==null){
			return;
		} else {
			this.detachRoot();
			this.restoreRootFromLastInsertedNode(this.detachRoot());
			this.shiftNodeDown(this.root);	
																			
		}
					
	}

	detachRoot() {
		var r = this.root;							
		if (this.parentNodes.includes(this.root)){			
			this.parentNodes.shift();
			this.root =null;
			return r;									
		} else {
			this.root =null;
			return r;
		}					
	}

	restoreRootFromLastInsertedNode(detached) {
		if (this.parentNodes.includes(detached)){
			this.parentNodes.splice([this.parentNodes.indexOf[detached]],1);
			var popped = this.parentNodes.pop();
			this.parentNodes.unshift(popped);
			this.root=popped;				
			
		} else {
			var popped = this.parentNodes.pop();
			this.root=popped;						
		}			
	}

	size() {
		return this.parentNodes.length;
	}

	isEmpty() {
		if (this.parentNodes.length==0){
			return true;
		}				
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) { 
		if (this.root==null){ 
			this.root = node; 
			this.root.left = null; 
			this.root.right = null; 
			this.parentNodes.push(node); 
		} else { 
			var go = function(t, _node, node) { 
				_node.appendChild(node); 
				if (node==_node.left) { 
					t.parentNodes.push(node); 
				} else if (node==_node.right){ 
					t.parentNodes.shift(); 
					t.parentNodes.push(node); 
				}	 
			} 
			var go2 = null; 
		
			go2 = function(t, obj, node, left=true) { 
				if (null == obj.right) {		 
					go(t, obj, node); 
					return true; 
				} else { 
					if ( left == true ) { 
			
						if (false == go2(t, obj.left, node, false)) { 
			
							go2(t, obj.right, node); 
						} 
					} 
				} 
			return false; 
			} 		
			go2(this, this.root, node); 		
		} 
	}
		
	

	shiftNodeUp(node) {					
		while(node.parent && node.priority>node.parent.priority){ 
			node.swapWithParent(); 
			if (this.parentNodes.includes(node) && this.parentNodes.includes(node.left)){ 
				var index = this.parentNodes[this.parentNodes.indexOf(node)]; 
				this.parentNodes[this.parentNodes.indexOf(node)] = this.parentNodes[this.parentNodes.indexOf(node.left)]; 
				this.parentNodes[this.parentNodes.indexOf(node.left)] = index; 
			} else if (this.parentNodes.includes(node) && !this.parentNodes.includes(node.left)){ 
				this.parentNodes[0] = node.left; 
			} 
			this.shiftNodeUp(node); 
			} 
		if ( null !== this.root && this.root.priority < node.priority ) { 
			this.root = node; 
		} 
	}		
	

	shiftNodeDown(node) {
		if (node == this.root && node.left!==null){
			if (node.left.priority > node.right.priority 
				&& node.left.priority > node.priority){
				node.left.swapWithParent();
				
			} 
			else if (node.right.priority > node.left.priority 
				&& node.right.priority > node.priority){							
				node.right.swapWithParent();
					
			}
		}		 
		else if (node!==this.root && node.left!==null){
			if (node.left.priority > node.right.priority 
				&& node.left.priority > node.priority){
				node.left.swapWithParent();
				
			} 
			else if (node.right.priority > node.left.priority 
				&& node.right.priority > node.priority){							
				node.right.swapWithParent();
					
			}
			
		} else {return;}
									
	}	
}

module.exports = MaxHeap;


// else if (node.right){
		// 	while (node.right){
		// 		node.right.swapWithParent();
		// 		this.shiftNodeDown(node);
		// 	}
		// }
		// if (this.parentNodes.includes(node) && this.parentNodes.includes(node.left)){
				// 	var index = this.parentNodes[this.parentNodes.indexOf(node)];
				// 	this.parentNodes[this.parentNodes.indexOf(node)] = this.parentNodes[this.parentNodes.indexOf(node.left)];
				// 	this.parentNodes[this.parentNodes.indexOf(node.left)] = index;
				// } else if (this.parentNodes.includes(node) && !this.parentNodes.includes(node.left)){
				// 	this.parentNodes[0] = node.left;
				// }			
				//this.shiftNodeDown(node);						
			// if ( null !== this.root && this.root.priority > node.priority ) { 
			// 	this.root = node; 
			// }