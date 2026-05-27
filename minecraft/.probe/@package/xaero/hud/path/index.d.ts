import { $Path_, $Path } from "@package/java/nio/file";

declare module "@package/xaero/hud/path" {
    export class $XaeroPath {
        isSubOf(arg0: $XaeroPath): boolean;
        applyToFilePath(arg0: $Path_): $Path;
        getNodeCount(): number;
        getSubPath(arg0: number): $XaeroPath;
        getLastNode(): string;
        resolveSibling(arg0: string): $XaeroPath;
        getAtIndex(arg0: number): $XaeroPath;
        resolve(arg0: string): $XaeroPath;
        resolve(arg0: $XaeroPath): $XaeroPath;
        getParent(): $XaeroPath;
        static root(arg0: string): $XaeroPath;
        static root(arg0: string, arg1: boolean): $XaeroPath;
        getRoot(): $XaeroPath;
        get nodeCount(): number;
        get lastNode(): string;
        get parent(): $XaeroPath;
    }
}
