module.exports = str => {
  const noPunctuationString = str.replace(/[ !,]/g, '').toLowerCase();
  const splitString = noPunctuationString.split('');
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join('');
  if (noPunctuationString === joinArray) {
    return [noPunctuationString];
  }
  return [];
};
