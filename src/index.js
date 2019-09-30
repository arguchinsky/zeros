module.exports = function zeros(expression) {
  const factorials = expression.split('*');

  let counter = 0;
  let buffer = [];

  const checkDouble = val => val.slice(-2) === '!!' ? true : false;

  const checkOdd = val => val%2 ? false : true;

  const needExpand = arr => {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
      if(checkDouble(arr[i])){
        if(!checkOdd(parseInt(arr[i]))) {
          count++;
        } else return true;
      }else return true;
    }
    return count === arr.length ? false : true;
  }

  const expandFact = val => {
    const isDouble = checkDouble(val);
    const value = parseInt(val);
    if (isDouble){
      const step = 2;
      const isOdd = checkOdd(value);
      let startValue = isOdd ? 2 : 1;
      while (startValue <= value){
        buffer.push(startValue);
        startValue += step;
      }
    }
    else{
      let startValue = 1;
      while (startValue <= value){
        buffer.push(startValue);
        startValue++;
      }
    }
  }

  if (needExpand(factorials)){
    factorials.forEach(el => expandFact(el));
    for(let i = 0; i < buffer.length; i++){
      if (!(buffer[i] % 5)) counter++;
      if (!(buffer[i] % 25)) counter++;
    }
  }else counter = 0;
  return counter;
}
