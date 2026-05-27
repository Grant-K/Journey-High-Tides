import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemReciever, $BlockHarvester } from "@package/dev/simulated_team/simulated/content/blocks/auger_shaft";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LevelAccelerator } from "@package/dev/ryanhcode/sable/util";
import { $MutableInt } from "@package/org/apache/commons/lang3/mutable";
import { $List_, $List } from "@package/java/util";
import { $Record } from "@package/java/lang";

declare module "@package/dev/simulated_team/simulated/content/blocks/auger_shaft/auger_groups" {
    export class $AugerDistributor extends $Record {
        harvesters(): $List<$BlockHarvester>;
        receivers(): $List<$ItemReciever>;
        gatherAndAssociateHarvesters(arg0: $Direction_[], arg1: $BlockPos_, arg2: $Level_, arg3: $LevelAccelerator): void;
        removeReceiver(arg0: $ItemReciever): void;
        addReceiver(arg0: $ItemReciever): void;
        distributeItem(arg0: $ItemStack_, arg1: $BlockPos_): $ItemStack;
        index(): $MutableInt;
        constructor(receivers: $List_<$ItemReciever>, harvesters: $List_<$BlockHarvester>, index: $MutableInt);
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $AugerDistributor}.
     */
    export type $AugerDistributor_ = { index?: $MutableInt, harvesters?: $List_<$BlockHarvester>, receivers?: $List_<$ItemReciever>,  } | [index?: $MutableInt, harvesters?: $List_<$BlockHarvester>, receivers?: $List_<$ItemReciever>, ];
}
