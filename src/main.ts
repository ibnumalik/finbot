import { getMe, setWebhook } from './setup';
import { doGet } from './get';

/* Test whether Telegram is reachable and return response. */
global.getMe = getMe;

/* Set Telegram webhook. Run only one time when setting up the Telegram Bot. */
global.setWebhook = setWebhook;

/* Response to HTTP `GET` request. */
global.doGet = doGet;
