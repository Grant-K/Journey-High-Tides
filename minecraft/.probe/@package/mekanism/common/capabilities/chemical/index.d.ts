import { $IChemicalTank } from "@package/mekanism/api/chemical";
import { $Direction_ } from "@package/net/minecraft/core";
import { $IContentsListener } from "@package/mekanism/api";
import { $List } from "@package/java/util";

declare module "@package/mekanism/common/capabilities/chemical" {
    export class $IChemicalTracker {
    }
    export interface $IChemicalTracker extends $IContentsListener {
        getChemicalTanks(side: $Direction_): $List<$IChemicalTank>;
    }
}
