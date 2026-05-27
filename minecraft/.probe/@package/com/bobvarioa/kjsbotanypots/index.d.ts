import { $GrowthAmount } from "@package/net/darkhax/botanypots/common/api/data/growthamount";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_ } from "@package/net/minecraft/world/entity";
import { $Display_, $Display } from "@package/net/darkhax/botanypots/common/api/data/display/types";
import { $List_ } from "@package/java/util";
import { $Holder_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $BasicOptions } from "@package/net/darkhax/botanypots/common/impl/data/display/types";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $ItemDropProvider } from "@package/net/darkhax/botanypots/common/api/data/itemdrops";
import { $DamageType } from "@package/net/minecraft/world/damagesource";
import { $Vector3f } from "@package/org/joml";

declare module "@package/com/bobvarioa/kjsbotanypots" {
    export class $KJSBotanyPotsPlugin$DisplayStateBinding {
        static entity(arg0: $CompoundTag_, arg1: boolean, arg2: number, arg3: $Vector3f, arg4: $Vector3f): $Display;
        static entity(arg0: $EntityType_<never>): $Display;
        static entity(arg0: $CompoundTag_, arg1: boolean, arg2: number): $Display;
        static entity(arg0: $CompoundTag_, arg1: boolean): $Display;
        static entity(arg0: $CompoundTag_): $Display;
        static entity(arg0: $CompoundTag_, arg1: boolean, arg2: number, arg3: $Vector3f): $Display;
        static basic(arg0: $BlockState_, arg1: $BasicOptions): $Display;
        static basic(arg0: $BlockState_): $Display;
        static aging(arg0: $Block_, arg1: $BasicOptions): $Display;
        static aging(arg0: $Block_): $Display;
        static transitional(arg0: $List_<$Display_>): $Display;
        constructor();
    }
    export class $KJSBotanyPotsPlugin$GrowthAmountBinding {
        static percent(arg0: number): $GrowthAmount;
        static range(arg0: number, arg1: number): $GrowthAmount;
        static constant(arg0: number): $GrowthAmount;
        constructor();
    }
    export class $KJSBotanyPotsPlugin$DropItemBinding {
        static lootTable(arg0: $ResourceLocation_): $ItemDropProvider;
        static entity(arg0: $EntityType_<never>): $ItemDropProvider;
        static entity(arg0: $CompoundTag_): $ItemDropProvider;
        static entity(arg0: $CompoundTag_, arg1: $Holder_<$DamageType>): $ItemDropProvider;
        static blockDrops(arg0: $BlockState_): $ItemDropProvider;
        static item(arg0: $ItemStack_, arg1: number): $ItemDropProvider;
        constructor();
    }
}
