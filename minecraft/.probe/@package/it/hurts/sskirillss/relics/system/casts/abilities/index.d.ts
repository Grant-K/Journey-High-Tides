import { $SlotReference } from "@package/it/hurts/sskirillss/relics/system/casts/slots/base";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";

declare module "@package/it/hurts/sskirillss/relics/system/casts/abilities" {
    export class $AbilityReference {
        deserializeNBT(arg0: $CompoundTag_): $AbilityReference;
        serializeNBT(): $CompoundTag;
        getSlot(): $SlotReference;
        setId(arg0: string): void;
        setSlot(arg0: $SlotReference): void;
        getId(): string;
        constructor();
        constructor(arg0: string, arg1: $SlotReference);
    }
}
