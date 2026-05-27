import { $Throwable } from "@package/java/lang";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/com/bawnorton/neruina/extend" {
    export class $CrashReportCategoryExtender {
    }
    export interface $CrashReportCategoryExtender {
        neruin$setStacktrace(arg0: $Throwable): void;
    }
    /**
     * Values that may be interpreted as {@link $CrashReportCategoryExtender}.
     */
    export type $CrashReportCategoryExtender_ = ((arg0: $Throwable) => void);
    export class $Errorable {
    }
    export interface $Errorable {
        neruina$isErrored(): boolean;
        neruina$setErrored(): void;
        neruina$clearErrored(): void;
        neruina$setTickingEntryId(arg0: $UUID_): void;
        neruina$getTickingEntryId(): $UUID;
    }
}
