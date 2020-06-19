declare namespace glFunctions {
  interface global {
    getMe(): void;
    setWebhook(): void;
    doGet(e): GoogleAppsScript.HTML.HtmlOutput;
  }
}

declare var global: glFunctions.global;
