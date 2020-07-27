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

class Square extends Polygon{
  
  get isValid(){
    let i;
    let a;
    for (i = 0; i< this.countSides; i++){
      if (this.countSides[i] === this.countSides[0]){
        a = true
      }else{
        a = false;
        break;
      }
    }
    return a
  }
  
  get area(){
    return this.countSides[0] * this.countSides[0]
  }
  
  
}