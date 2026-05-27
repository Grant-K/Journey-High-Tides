import { $BufferedReader } from "@package/java/io";
import { $PathMatcher, $FileSystem, $Path_, $PathMatcher_, $Path } from "@package/java/nio/file";
import { $List, $List_ } from "@package/java/util";
import { $Exception, $Record } from "@package/java/lang";

declare module "@package/net/minecraft/world/level/validation" {
    export class $ContentValidationException extends $Exception {
        static getMessage(arg0: $Path_, arg1: $List_<$ForbiddenSymlinkInfo_>): string;
        constructor(arg0: $Path_, arg1: $List_<$ForbiddenSymlinkInfo_>);
    }
    export class $ForbiddenSymlinkInfo extends $Record {
        link(): $Path;
        target(): $Path;
        constructor(arg0: $Path_, arg1: $Path_);
    }
    /**
     * Values that may be interpreted as {@link $ForbiddenSymlinkInfo}.
     */
    export type $ForbiddenSymlinkInfo_ = { target?: $Path_, link?: $Path_,  } | [target?: $Path_, link?: $Path_, ];
    export class $PathAllowList$EntryType {
        static FILESYSTEM: $PathAllowList$EntryType;
        static PREFIX: $PathAllowList$EntryType;
    }
    export interface $PathAllowList$EntryType {
        compile(arg0: $FileSystem, arg1: string): $PathMatcher;
    }
    /**
     * Values that may be interpreted as {@link $PathAllowList$EntryType}.
     */
    export type $PathAllowList$EntryType_ = ((arg0: $FileSystem, arg1: string) => $PathMatcher_);
    export class $DirectoryValidator {
        validateKnownDirectory(arg0: $Path_, arg1: $List_<$ForbiddenSymlinkInfo_>): void;
        validateSymlink(arg0: $Path_): $List<$ForbiddenSymlinkInfo>;
        validateSymlink(arg0: $Path_, arg1: $List_<$ForbiddenSymlinkInfo_>): void;
        validateDirectory(arg0: $Path_, arg1: boolean): $List<$ForbiddenSymlinkInfo>;
        constructor(arg0: $PathMatcher_);
    }
    export class $PathAllowList implements $PathMatcher {
        static readPlain(arg0: $BufferedReader): $PathAllowList;
        getForFileSystem(arg0: $FileSystem): $PathMatcher;
        matches(arg0: $Path_): boolean;
        constructor(arg0: $List_<$PathAllowList$ConfigEntry_>);
    }
    export class $PathAllowList$ConfigEntry extends $Record {
        type(): $PathAllowList$EntryType;
        compile(arg0: $FileSystem): $PathMatcher;
        pattern(): string;
        constructor(arg0: $PathAllowList$EntryType_, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $PathAllowList$ConfigEntry}.
     */
    export type $PathAllowList$ConfigEntry_ = { type?: $PathAllowList$EntryType_, pattern?: string,  } | [type?: $PathAllowList$EntryType_, pattern?: string, ];
}
