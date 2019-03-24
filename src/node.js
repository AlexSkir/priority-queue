class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
		this.ReferenceError= 'child is not defined';
		this.error= 'passed node is not a child of this node';		
	}

	appendChild(node) {
		if (this.left && this.right){
			return;
		} else if (this.left) {
			this.right = node;
			node.parent=this;			
		} else {
			this.left = node;	
			node.parent = this;	
		}				
	}

	removeChild(node) {		
		if (this.left == node){
			this.left = null;
			node.parent = null;
			
		} else if (this.right == node){
			this.right = null;
			node.parent=null;

		} else {
			error.code;
		}		
	}

	remove() {		
		if (this.parent == null){
			return;
		} 
		else {
			this.parent.removeChild(this);
		}		 					
	}

	swapWithParent() {
		if (this.parent==null){ 
			return; 
		} else { 
			var father = this.parent; 
			var granny = this.parent.parent; 
			
			if (this.parent.left == this) { 
				this.parent.left = this.left; 
				this.left = this.parent; 
				this.right = this.parent.right; 
				if (null != this.right) 
					this.right.parent = this; 
			} else if ( this.parent.right == this ) { 
				this.parent.right = this.right; 
				this.right = this.parent; 
				this.left = this.parent.left; 
				if (null != this.left) 
					this.left.parent = this; 
			} 
			
			this.parent = (granny != null) ? granny : null; 
			father.parent = this; 
			if (null != this.parent) {
				if (this.parent.left == father ){
					this.parent.left = this;
				} else if ( this.parent.right == father ){
					this.parent.right = this;
				}
			} 
		} 
	}

}

module.exports = Node;
