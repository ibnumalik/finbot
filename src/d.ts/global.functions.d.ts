declare namespace glFunctions {
  interface global {
    getMe(): void;
    setWebhook(): void;
    doGet(e): GoogleAppsScript.HTML.HtmlOutput;
    doPost(e): void;
  }
}

declare var global: glFunctions.global;
