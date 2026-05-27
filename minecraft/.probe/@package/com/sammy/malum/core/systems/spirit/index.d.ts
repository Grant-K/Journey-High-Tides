import { $SpiritHolder } from "@package/com/sammy/malum/core/systems/registry";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $SpiritArcanaType_, $SpiritLike_, $SpiritArcanaType } from "@package/com/sammy/malum/core/systems/spirit/type";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Collection_ } from "@package/java/util";
export * as type from "@package/com/sammy/malum/core/systems/spirit/type";

declare module "@package/com/sammy/malum/core/systems/spirit" {
    export class $SpiritTypeProperty extends $Property<string> {
        static setSpiritType(arg0: $BlockState_, arg1: $SpiritLike_): $BlockState;
        static getSpiritType(arg0: $BlockState_): $SpiritHolder<$SpiritArcanaType>;
        getName(arg0: string): string;
        static SPIRIT_TYPE: $SpiritTypeProperty;
        constructor(arg0: string, ...arg1: $SpiritHolder<$SpiritArcanaType_>[]);
        constructor(arg0: string, arg1: $Collection_<$SpiritHolder<$SpiritArcanaType_>>);
    }
}
