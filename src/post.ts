import { logs } from './logs';
import { sendText } from './send-text';
import { ADMIN_ID } from './settings';
import { TelegramUpdate } from './type/Telegram';

export function doPost(e: GoogleAppsScript.Events.DoPost) {
  try {
    const data: TelegramUpdate = JSON.parse(e.postData.contents);
    const text = data.message.text;
    const id = data.message.chat.id;
    const name =
      data.message.chat.first_name + ' ' + data.message.chat.last_name;

    /* Report if someone try to use the bot. */
    if (id !== +ADMIN_ID) {
      sendText(ADMIN_ID, `Someone trying to use this bot: ${name}`);
      return sendText(id, 'Unauthorized User');
    }

    logs(text);
    //   const command = text.split(' ');

    //   switch (command[0]) {
    //     case '/help':
    //     case 'help':
    //       help(id);
    //       break;

    //     case '/add':
    //     case 'add':
    //       add(id, command);
    //       break;

    //     default:
    //       sendText(
    //         id,
    //         'Commands not available. Type /help to see available commands.'
    //       );
    //       break;
    //   }
  } catch (e) {
    sendText(ADMIN_ID, `Error: ${JSON.stringify(e, null, 4)}`);
  }
}
