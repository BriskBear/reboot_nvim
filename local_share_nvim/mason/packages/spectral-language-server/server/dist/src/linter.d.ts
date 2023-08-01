import { TextDocument } from 'vscode-languageserver-textdocument';
import { IRuleResult, Ruleset } from '@stoplight/spectral-core';
import { ICache } from '@stoplight/json-ref-resolver/types';
import { Resolver } from '@stoplight/json-ref-resolver';
import type { IO } from '@stoplight/spectral-ruleset-bundler';
import { RemoteConsole, TextDocuments } from 'vscode-languageserver';
export declare function createHttpAndFileResolver(documents: TextDocuments<TextDocument>, uriCache: ICache, console: RemoteConsole): Resolver;
export declare class Linter {
    private readonly spectral;
    private readonly cache;
    constructor(documents: TextDocuments<TextDocument>, console: RemoteConsole);
    lint(document: TextDocument, ruleset: Ruleset | undefined): Promise<IRuleResult[]>;
    static loadRuleset(filepath: string, io: IO): Promise<{
        dependencies: string[];
        ruleset: Ruleset;
    }>;
}
