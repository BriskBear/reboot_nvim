import { Diagnostic, PublishDiagnosticsParams } from 'vscode-languageserver';
import type { ISpectralDiagnostic } from '@stoplight/spectral-core';
export declare function makeDiagnostic(problem: ISpectralDiagnostic): Diagnostic;
export declare function makePublishDiagnosticsParams(rootDocumentUri: string, knownDependencieUris: string[], problems: ISpectralDiagnostic[]): PublishDiagnosticsParams[];
