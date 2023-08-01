import { WorkspaceFolder } from 'vscode-languageclient';
export type RunValues = 'onType' | 'onSave';
export interface ExtensionSettings {
    enable: boolean;
    rulesetFile: string | undefined;
    run: RunValues;
    validateFiles: string[] | undefined;
    validateLanguages: string[] | undefined;
    workspaceFolder: WorkspaceFolder | undefined;
}
