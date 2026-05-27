import { $MCDataOutput, $MCDataInput } from "@package/codechicken/lib/data";
import { $Object, $Enum } from "@package/java/lang";
export * as datamanager from "@package/com/brandon3055/brandonscore/lib/datamanager";

declare module "@package/com/brandon3055/brandonscore/lib" {
    export class $IValueHashable<HASH_TYPE> {
    }
    export interface $IValueHashable<HASH_TYPE> {
        getValueHash(): HASH_TYPE;
        checkValueHash(arg0: $Object): boolean;
        get valueHash(): HASH_TYPE;
    }
    export class $IRSSwitchable$RSMode extends $Enum<$IRSSwitchable$RSMode> {
        canRun(arg0: boolean): boolean;
        static values(): $IRSSwitchable$RSMode[];
        static valueOf(arg0: string): $IRSSwitchable$RSMode;
        next(arg0: boolean): $IRSSwitchable$RSMode;
        static ALWAYS_ACTIVE: $IRSSwitchable$RSMode;
        index: number;
        static ACTIVE_LOW: $IRSSwitchable$RSMode;
        static ACTIVE_HIGH: $IRSSwitchable$RSMode;
        static NEVER_ACTIVE: $IRSSwitchable$RSMode;
    }
    /**
     * Values that may be interpreted as {@link $IRSSwitchable$RSMode}.
     */
    export type $IRSSwitchable$RSMode_ = "always_active" | "active_high" | "active_low" | "never_active";
    export class $IMCDataSerializable {
    }
    export interface $IMCDataSerializable {
        serializeMCD(arg0: $MCDataOutput): void;
        deSerializeMCD(arg0: $MCDataInput): void;
    }
}
