// Oh no! Timmy's List Class has broken! Can you help timmy and fix his class? Timmy has a List class he has created, this is used for type strict arrays (which timmy calls Lists).

// When timmy calls the Count property of the list it still remains at 0 when adding items.

// Also it fails when timmy trys to chain the adds e.g.




class List {
    constructor(type) {
      this.type = type;
      this.items = [];
      this.count = this.items.length;
    }
    
     add(item){
      if(typeof item != this.type) {
        return `This item is not of type: ${typeof item}`;
      } else {
        this.items.push(item);
        return this 
        
      }
    }

  }

  const myList = new List()

  console.log(myList.add(9))

  console.log(myList.count)