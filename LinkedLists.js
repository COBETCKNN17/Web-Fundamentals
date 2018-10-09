class Node {
  constructor(data) {
    this.data = data; 
    this.next = null; 
  }
}

class SLL {
  constructor(){
    this.head = null;
  }
  addFront(data){
		if(!this.head){ // current Node does not have a head property 
			this.head = new Node(data) 
		} else {
			// this.head exists means that there is a head node already 
			const node = new Node(data);
			// assign new node from above as the head node 
			node.next = this.head; 
			// mark the head property of the previous node to the new node thereby completing the creation of the new node 
			this.head = node; 
		}
	}

  removeNode(data){
		if(!this.head){
			// head does not exist, exit the function 
			return; 
		} else {
			// head node does exist. Simply mark the next node after the current one as the head node 
			this.head.next = this.head; 
		}
	}

  contains(var){ // linked list contains a var 
    let runner = this.head; 
    while(runner){
      if(runner.data == var){
        return true; 
      } else {
        runner = runner.next;
      }
    }
    return false; 
  }

  display(list){
    if(!this.head){
      console.log("The list is empty."); 
    }
    let runner = this.head; 
    while(runner){
      console.log(runner.data);
      runner = runner.next; 
    }
  }

  min(list){
    if(!this.head){
      console.log("empty");
    }
    let min = this.head.data; 
    let runner = this.head; 
    while(runner){
      if(runner.data < min){
        min = runner.data; 
      }
      runner = runner.next; 
    }
    return min; 
  }

  max(list){
    if(!this.head){
      console.log("empty");
    }
    let max = this.head.data; 
    let runner = this.head; 
    while(runner){
      if(runner.data > max){
        min = runner.data; 
      }
      runner = runner.next; 
    }
    return max; 
  }

  sum(list){
    let runner = this.head; 
    let sum = 0;  
    while(runner){
      sum += runner.data; 
      runner = runner.next; 
    }
    return (sum/this.length());  
  }
}