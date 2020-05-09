function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const text = data.message.text;
    const id = data.message.chat.id;
    var name = data.message.chat.first_name + ' ' + data.message.chat.last_name;

    if (id !== +ADMIN_ID) {
      sendText(ADMIN_ID, `Someone trying to use this bot: ${name}`);
      return sendText(id, 'Unauthorized User');
    }

    logs(text);
    const command = text.split(' ');

    switch (command[0]) {
      case '/help':
      case 'help':
        help(id);
        break;

      case '/add':
      case 'add':
        add(id, command);
        break;

      default:
        sendText(
          id,
          'Commands not available. Type /help to see available commands.'
        );
        break;
    }

  } catch (e) {
    sendText(ADMIN_ID, `Error: ${JSON.stringify(e, null, 4)}`);
  }
}
