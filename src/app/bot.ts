import { logs } from '../helpers/logs';
import { ADMIN_ID } from '../settings';
import { Spreadsheet } from '../spreadsheet/sheets';
import { sendText } from '../telegram/send-text';
import { TelegramUpdate } from '../telegram/Telegram';
import { Add } from './add';
import { Command } from './command';
import { Help } from './help';
import { Parser } from './parser';

export class Finbot {
  /* The user chat id. */
  public chatId: string | number;

  /* The user full name. */
  public chatName: string;

  public command: Command;

  constructor(update: TelegramUpdate) {
    this.chatId = update.message.chat.id;
    this.command = new Command(new Parser(update.message.text));

    /* Logs message for debugging. */
    logs(update.message.text);
    this.checkPermission();
  }

  public sendMessage(id: string | number, message: string) {
    return sendText(id, message);
  }

  public run() {
    this.handleCommand();
  }

  private handleCommand() {
    switch (this.command.action) {
      case '/help':
      case 'help':
        const help = new Help();
        return this.sendMessage(this.chatId, help.text);

      case '/add':
      case 'add':
        const add = new Add(this.command);
        Spreadsheet.appendRow(add.buildColumns(), 'ledger');
        break;

      default:
        this.sendMessage(
          this.chatId,
          'Commands not available. Type /help to see available commands.'
        );
        break;
    }
  }

  private checkPermission() {
    if (this.chatId !== +ADMIN_ID) {
      sendText(this.chatId, 'Unauthorized User');

      throw new Error(`Someone trying to use this bot: ${this.chatName}`);
    }
  }
}
