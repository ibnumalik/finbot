# Shaiful's Financial Bot

This Telegram bot aims to simplify the process of tracking cash flows. Instead of using an app to key in the data manually, this bot will try to parse the message that it received. Logically, it's faster to say or talk to the bot to do command instead of manually key in the data in form. See the commands section below to understand how it works.

## Requirements

1. Telegram Bot token.
2. Google Sheet id.
3. Publish Google App Script as web application and get the web app url.

## Setup

1. Open `setup` file and run both of the function in Google App Script.
   - This will ensure that your token is valid.
   - Setup webhook and tell Telegram to post the data at our doPost function.
2. Create sheets with name `ledger` and `logs`.

## Development

To start developing, all you need is IDE. If you want to deploy to Google App Script, you may want to install `clasp`. Clasp is a *[Command Line Apps Script Project](https://github.com/google/clasp/)*.

```
npm install -g @google/clasp
```


## Commands

When the Telegram bot is created, open the bot and chat with it. Type the available command and the bot will try to do the tasks. If the bot did not understand it, then it will tell you what format it can understand.

### Identifier

We have a few symbol that helps bot to identify what to do with the current token. The bot will try to understand the context of the token based on the identifier. The following list will show what symbol is supported.

1. $ - **Amount**
2. @ - **Account**
3. \+ - **Category**

### Add income

```
add $900 to @rhb +bonus
```

Starts with `add` keyword then the amount followed by the account and category.
