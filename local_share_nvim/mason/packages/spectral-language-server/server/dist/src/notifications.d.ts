import { NotificationType } from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';
export declare namespace StartWatcherNotification {
    const type: NotificationType<StartWatcherParams, void>;
}
export interface StartWatcherParams {
    path: string;
}
export declare namespace ValidateNotification {
    const type: NotificationType<TextDocument, void>;
}
