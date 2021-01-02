const char = 'abcdefghijklmnopqrstuvwxyz';
const randChar = (length) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * char.length);
    result += char.charAt(rand);
  }
  return result;
};

export default randChar;
