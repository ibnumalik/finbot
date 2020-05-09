const helpText = `
Hi Shaiful! This bot can help you track your expense.

*Record transaction*
/add to add money to accounts
/buy to records expense transaction.
`;

function help(id) {
  sendText(id, helpText);
}
