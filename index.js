class Polygon {
  constructor(array){
    this.sidesArray = array
  }
  
  get countSides(){
    return this.sidesArray.length
  }
  
  get perimeter(){
    return this.sidesArray.reduce(function(a, b){
        return a + b;
    }, 0);
  }
}

class Triangle extends Polygon{
  
  get isValid(){
    return (this.countSides === 3)
  }
  
}