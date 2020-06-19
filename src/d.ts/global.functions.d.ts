declare namespace glFunctions {
  interface global {
    getMe(): void;
    setWebhook(): void;
  }
}

declare var global: glFunctions.global;
