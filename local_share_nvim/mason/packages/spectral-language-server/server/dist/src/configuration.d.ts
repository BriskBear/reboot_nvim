import { WorkspaceFolder } from 'vscode-languageserver';
import type { Ruleset } from '@stoplight/spectral-core';
export type RunValues = 'onType' | 'onSave';
export interface ExtensionSettings {
    enable: boolean;
    rulesetFile: string | undefined;
    run: RunValues;
    validateFiles: string[] | undefined;
    validateLanguages: string[] | undefined;
    workspaceFolder: WorkspaceFolder | undefined;
}
export interface TextDocumentSettings {
    run: RunValues;
    validate: boolean;
    ruleset: Ruleset | undefined;
}
