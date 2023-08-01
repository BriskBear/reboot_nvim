import { IConnection, NotificationHandler, NotificationType } from 'vscode-languageserver';
export declare class BufferedMessageQueue {
    private connection;
    private queue;
    private notificationHandlers;
    private timer;
    constructor(connection: IConnection);
    registerNotification<P, RO>(type: NotificationType<P, RO>, handler: NotificationHandler<P>, versionProvider?: (params: P) => number): void;
    addNotificationMessage<P, RO>(type: NotificationType<P, RO>, params: P, version: number): void;
    onNotification<P, RO>(type: NotificationType<P, RO>, handler: NotificationHandler<P>, versionProvider?: (params: P) => number): void;
    private trigger;
    private processQueue;
}
