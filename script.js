for(var i = 0; i < 30; i++) {
  if(i % 5 === 0 && i % 3 ===0) {
    console.log('fizzbuzz');
  } else if(i % 5 === 0) {
    console.log('buzz');
  } else if(i % 3 === 0) {
    console.log('fiz');
  } else {
    console.log(i);
  }
}

function isPal(word) {
  var ogWOrd = word;
  if(ogWord === word.split('').reverse().join('')) {
    console.log('ya it is');
  } else {
    console.log('no');
  }
}
