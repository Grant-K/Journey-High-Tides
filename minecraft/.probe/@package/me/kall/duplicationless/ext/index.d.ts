import { $ItemStack_, $Item_ } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $EntityType_, $Entity } from "@package/net/minecraft/world/entity";
import { $Block_ } from "@package/net/minecraft/world/level/block";

declare module "@package/me/kall/duplicationless/ext" {
    export class $RegistryEntry {
        static get(item: $Item_): $ResourceLocation;
        static get(block: $Block_): $ResourceLocation;
        static get(state: $BlockState_): $ResourceLocation;
        static get(entity: $Entity): $ResourceLocation;
        static get(stack: $ItemStack_): $ResourceLocation;
        static get(type: $EntityType_<never>): $ResourceLocation;
        static NONE: $ResourceLocation;
    }
    export interface $RegistryEntry {
        registry$getName(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $RegistryEntry}.
     */
    export type $RegistryEntry_ = (() => $ResourceLocation_);
}
