
// bài 1
function calculateFactorial(number) {
  if (number === 0) {
    return 1;
  } else if (number >0) {
  return number * calculateFactorial(number - 1);
}
}
console.log(calculateFactorial(5)); 

// bài 2
function reverseString(str) {
  if (str === '') {
    return '';
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}
console.log(reverseString('hello'));


// bài 3
function translate(countryCode) {
  let message;
  switch (countryCode) {
    case 'VN':
      message = 'Xin chào';
      break;
    case 'EN':
      message = 'Hello';
      break;
    case 'FR':
      message = 'Bonjour';
      break;
    case 'ES':
      message = 'Hola';
      break;
    case 'DE':
      message = 'Hallo';
      break;
    default:
      message = 'Country code not recognized';
  }
  return message;
}
console.log(translate('VN')); 
console.log(translate('EN')); 


// bài 4
function subString(str) {
  if (str.length > 15) {
    return str.substring(0, 10) + '...';
  } else {
    return str;
  }
}
console.log(subString('xinchaocacbandenvoiTechmaster')); 