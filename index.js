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
    if ((sidesArray[0] + sidesArray[1]) > sidesArray[2]){
      if ((sidesArray[2] + sidesArray[1]) > sidesArray[0]){
        if ((sidesArray[0] + sidesArray[2]) > sidesArray[1]){
          return true;
        }else{return false}
      }else{return false}
    }else{return false}
  }
  
}

class Square extends Polygon{
  
  get isValid(){
    let i;
    let a;
    for (i = 0; i< this.countSides; i++){
      if (this.sidesArray[i] === this.sidesArray[0]){
        a = true
      }else{
        a = false;
        break;
      }
    }
    return a
  }
  
  get area(){
    return this.sidesArray[0] * this.sidesArray[1]
  }
  
  
}