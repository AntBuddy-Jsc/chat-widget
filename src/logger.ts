class Logger {
  debugModeEnabled: boolean;

  constructor(debugModeEnabled?: boolean) {
    this.debugModeEnabled = !!debugModeEnabled;
  }

  debug(...args: any) {
    if (!this.debugModeEnabled) {
      return;
    }

    console.debug('[AntBuddy]', ...args);
  }

  log(...args: any) {
    if (!this.debugModeEnabled) {
      return;
    }

    console.log('[AntBuddy]', ...args);
  }

  info(...args: any) {
    console.info('[AntBuddy]', ...args);
  }

  warn(...args: any) {
    console.warn('[AntBuddy]', ...args);
  }

  error(...args: any) {
    console.error('[AntBuddy]', ...args);
  }
}

export default Logger;
