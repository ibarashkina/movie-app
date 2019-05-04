export class Logger {
    info (msg: any): void { console.log(`[${new Date()}]: ${msg}`)};
    warn (msg: any): void { console.warn(`[${new Date()}]: ${msg}`)};
    error (msg: any): void { console.error(`[${new Date()}]: ${msg}`)};
}