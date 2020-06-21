import { Finbot } from './app/bot';
import { logs } from './helpers/logs';
import { ADMIN_ID } from './settings';
import { sendText } from './telegram/send-text';
import { TelegramUpdate } from './telegram/Telegram';

export function doPost(e: GoogleAppsScript.Events.DoPost) {
  try {
    const data: TelegramUpdate = JSON.parse(e.postData.contents);

    const bot = new Finbot(data);
    /* Bootstrap bot and handle business logic. */
    bot.run();

    /**
     * Handle error if bot throw error.
     */
  } catch (e) {
    logs(JSON.stringify(e));
    sendText(ADMIN_ID, `Error: ${JSON.stringify(e, null, 4)}`);
  }
}
