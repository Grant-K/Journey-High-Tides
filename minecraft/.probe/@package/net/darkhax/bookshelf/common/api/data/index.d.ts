export * as codecs from "@package/net/darkhax/bookshelf/common/api/data/codecs";

declare module "@package/net/darkhax/bookshelf/common/api/data" {
    export class $ISidedRecipeManager {
    }
    export interface $ISidedRecipeManager {
        bookshelf$setLogicalServer(): void;
        bookshelf$setLogicalClient(): void;
    }
}
