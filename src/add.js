function add(id, commandArr) {
  try {
    const row = addRow(makeRow(commandArr), 'ledger');
    sendText(id, `Transaction recorded.`);
  } catch (error) {
    sendText(id, `Your command is invalid. ${error.message}`);
  }
}

function makeRow(arr) {
  arr.shift();

  verifyTextSyntax(arr);

  // amount
  const amount = convertToValue(arr, startsWithIndex(arr, '$'))[0].slice(1);

  // account
  const hasToKey = startsWithIndex(arr, 'to');
  const useAtKey = startsWithIndex(arr, '@');
  const account =
    hasToKey > -1
      ? convertToValue(arr, hasToKey, 2)[1].slice(1)
      : convertToValue(arr, useAtKey)[0].slice(1);

  // date
  const hasDate = startsWithIndex(arr, 'at');
  const date = hasDate > -1 ? convertToValue(arr, hasDate, 2)[1] : new Date();

  // category
  const category = convertToValue(arr, startsWithIndex(arr, '+'))[0].slice(1);

  // content
  const content = arr.join(' ');

  return [date, account, category, amount, content];
}

function startsWithIndex(arr, char) {
  return arr.findIndex((str) => str.startsWith(char));
}

function convertToValue(arr, index, take = 1) {
  return arr.splice(index, take);
}

function verifyTextSyntax(arr) {
  if (startsWithIndex(arr, '$') < 0) {
    throw new Error(
      'Amount is required. Please specify amount by using $ sign'
    );
  }

  if (startsWithIndex(arr, 'to') < 0 && startsWithIndex(arr, '@') < 0) {
    throw new Error(
      'Account is required. Please specify account by using @ sign or "to @acc"'
    );
  }

  if (startsWithIndex(arr, '+') < 0) {
    throw new Error(
      'Category is required. Please specify category by using + sign'
    );
  }
}

function testadd() {
  const random = textSplit('add $10 @cimb +other');
  const invalid = textSplit('add 10 @cimb +other');

  add(ADMIN_ID, random);
  Logger.log(makeRow(invalid));
}

const textSplit = (string) => string.split(' ');
