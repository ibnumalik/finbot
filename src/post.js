const adminId = Settings.ADMIN_ID;

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const text = data.message.text;
    const id = data.message.chat.id;
    var name = data.message.chat.first_name + ' ' + data.message.chat.last_name;

    if (id !== +adminId) {
      sendText(adminId, `Someone trying to use this bot: ${name}`);
      return sendText(id, 'Unauthorized User');
    }

    const command = text.split(' ')[0];

    switch (command) {
      case '/help':
        help(id);
        break;

      case '/add':
        add(id);
        break;

      default:
        sendText(
          id,
          'Commands not available. Type /help to see available commands.'
        );
        break;
    }

  } catch (e) {
    sendText(adminId, `Error: ${JSON.stringify(e, null, 4)}`);
  }
}
