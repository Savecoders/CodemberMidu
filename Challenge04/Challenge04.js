

const isValidPasswordWallet = (password) => {

  const passwd = password.toString(10).split('');

  if (passwd.length < 5) {
    return false;
  }

  // heck include two 5 in the password

  if (passwd.indexOf('5') === passwd.lastIndexOf('5')) {
    return false;
  }

  for (let i = 0; i < passwd.length; i++) {
    if (passwd[i] > passwd[i + 1]) {
      return false;
    }
  }

  return true;
}
const generatePasswordWallet = () => {
  // generate password the number of times until it is valid
  let countPassword = 0;
  let accPassword = [];

  for (let index = 10000; index <= 55999; index++) {
    if (isValidPasswordWallet(index)) {
      accPassword.push(index);
      countPassword++;
    }

  }
  return `submit ${countPassword}-${accPassword[55]}`;

}


console.log(generatePasswordWallet()); // true
console.log(isValidPasswordWallet(23554))
console.log([1, 2, 3, 5, 5].indexOf(5))