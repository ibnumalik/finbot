export interface TelegramUpdate {
  update_id: number;
  message: TelegramMessage;
}

export interface TelegramMessage {
  message_id: number;
  from: TelegramUser;
  chat: TelegramChat;
  text: string;
  date: number;
}

interface TelegramUser {
  first_name: string;
  last_name: string;
  language_code: string;
  is_bot: boolean;
  username: string;
  id: number;
}

interface TelegramChat {
  username: string;
  first_name: string;
  id: number;
  type: string;
  last_name: string;
}
