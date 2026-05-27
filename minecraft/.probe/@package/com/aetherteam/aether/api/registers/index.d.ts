import { $AdvancementHolder, $AdvancementHolder_ } from "@package/net/minecraft/advancements";
import { $Predicate, $Predicate_, $Supplier_, $Supplier } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";

declare module "@package/com/aetherteam/aether/api/registers" {
    export interface $AdvancementSoundOverride extends RegistryMarked<RegistryTypes.AetherAdvancementSoundOverrideTag, RegistryTypes.AetherAdvancementSoundOverride> {}
    export class $MoaType extends $Record {
        speed(): number;
        egg(): $ItemStack;
        maxJumps(): number;
        moaTexture(): $ResourceLocation;
        saddleTexture(): $ResourceLocation;
        jumpsTexture(): ($ResourceLocation) | undefined;
        spawnChance(): number;
        static CODEC: $Codec<$MoaType>;
        constructor(egg: $ItemStack_, maxJumps: number, speed: number, spawnChance: number, moaTexture: $ResourceLocation_, saddleTexture: $ResourceLocation_, jumpsTexture: ($ResourceLocation_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $MoaType}.
     */
    export type $MoaType_ = RegistryTypes.AetherMoaType | { speed?: number, saddleTexture?: $ResourceLocation_, egg?: $ItemStack_, spawnChance?: number, moaTexture?: $ResourceLocation_, maxJumps?: number, jumpsTexture?: ($ResourceLocation_) | undefined,  } | [speed?: number, saddleTexture?: $ResourceLocation_, egg?: $ItemStack_, spawnChance?: number, moaTexture?: $ResourceLocation_, maxJumps?: number, jumpsTexture?: ($ResourceLocation_) | undefined, ];
    export class $AdvancementSoundOverride extends $Record {
        sound(): $Supplier<$SoundEvent>;
        predicate(): $Predicate<$AdvancementHolder>;
        priority(): number;
        matches(arg0: $AdvancementHolder_): boolean;
        constructor(priority: number, predicate: $Predicate_<$AdvancementHolder>, sound: $Supplier_<$SoundEvent>);
    }
    /**
     * Values that may be interpreted as {@link $AdvancementSoundOverride}.
     */
    export type $AdvancementSoundOverride_ = RegistryTypes.AetherAdvancementSoundOverride | { sound?: $Supplier_<$SoundEvent>, predicate?: $Predicate_<$AdvancementHolder>, priority?: number,  } | [sound?: $Supplier_<$SoundEvent>, predicate?: $Predicate_<$AdvancementHolder>, priority?: number, ];
    export interface $MoaType extends RegistryMarked<RegistryTypes.AetherMoaTypeTag, RegistryTypes.AetherMoaType> {}
}
