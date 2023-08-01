import { NotificationType } from 'vscode-languageclient';
export declare namespace StartWatcherNotification {
    const type: NotificationType<StartWatcherParams, void>;
}
export interface StartWatcherParams {
    path: string;
}
