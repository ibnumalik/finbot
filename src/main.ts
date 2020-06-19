import { getMe, setWebhook } from './setup';
import { doGet } from './get';
import { doPost } from './post';

/* Test whether Telegram is reachable and return response. */
global.getMe = getMe;

/* Set Telegram webhook. Run only one time when setting up the Telegram Bot. */
global.setWebhook = setWebhook;

/* Response to HTTP `GET` request. */
global.doGet = doGet;

/* Response to HTTP `POST` request. */
global.doPost = doPost;
