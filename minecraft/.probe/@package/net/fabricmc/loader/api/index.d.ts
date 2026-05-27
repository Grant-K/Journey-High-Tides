import { $ModMetadata, $ModOrigin } from "@package/net/fabricmc/loader/api/metadata";
import { $Path } from "@package/java/nio/file";
import { $Comparable } from "@package/java/lang";
import { $Collection, $List } from "@package/java/util";
export * as metadata from "@package/net/fabricmc/loader/api/metadata";

declare module "@package/net/fabricmc/loader/api" {
    export class $Version {
        static parse(arg0: string): $Version;
    }
    export interface $Version extends $Comparable<$Version> {
        getFriendlyString(): string;
        get friendlyString(): string;
    }
    export class $ModContainer {
    }
    export interface $ModContainer {
        getMetadata(): $ModMetadata;
        getRootPaths(): $List<$Path>;
        getContainingMod(): ($ModContainer) | undefined;
        getContainedMods(): $Collection<$ModContainer>;
        findPath(arg0: string): ($Path) | undefined;
        getOrigin(): $ModOrigin;
        /**
         * @deprecated
         */
        getPath(arg0: string): $Path;
        /**
         * @deprecated
         */
        getRootPath(): $Path;
        /**
         * @deprecated
         */
        getRoot(): $Path;
        get metadata(): $ModMetadata;
        get rootPaths(): $List<$Path>;
        get containingMod(): ($ModContainer) | undefined;
        get containedMods(): $Collection<$ModContainer>;
        get origin(): $ModOrigin;
        get rootPath(): $Path;
        get root(): $Path;
    }
}
