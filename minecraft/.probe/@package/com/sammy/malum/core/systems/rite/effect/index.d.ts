import { $RegistryCodecBuddy, $RegistryCodecBuddy$RegistryCodecBuddyHelper } from "@package/com/sammy/malum/core/systems/registry";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $SpiritArcanaType_ } from "@package/com/sammy/malum/core/systems/spirit/type";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";

declare module "@package/com/sammy/malum/core/systems/rite/effect" {
    export class $SpiritRiteEffect$RiteParametersBuilder {
        setTotemHeight(arg0: number): $SpiritRiteEffect$RiteParametersBuilder;
        setTotemDirection(arg0: $Direction_): $SpiritRiteEffect$RiteParametersBuilder;
        build(): $SpiritRiteEffect$RiteParameters;
        constructor();
        set totemHeight(value: number);
        set totemDirection(value: $Direction_);
    }
    export class $SpiritRiteEffect$RiteParameters {
        getTotemHeight(): number;
        getTotemDirection(): ($Direction) | undefined;
        constructor(arg0: number, arg1: $Direction_);
        get totemHeight(): number;
        get totemDirection(): ($Direction) | undefined;
    }
    export class $SpiritRiteEffectTag {
        static malumTag(arg0: string): $SpiritRiteEffectTag;
        getLangKey(): string;
        static STRANGE_EFFECT: $SpiritRiteEffectTag;
        static SOULWOOD: $SpiritRiteEffectTag;
        static RUNEWOOD: $SpiritRiteEffectTag;
        static RADIAL_EFFECT: $SpiritRiteEffectTag;
        static TAG: string;
        static AURA: $SpiritRiteEffectTag;
        static GREATER_RITE: $SpiritRiteEffectTag;
        static LOCUS_EFFECT: $SpiritRiteEffectTag;
        static LESSER_RITE: $SpiritRiteEffectTag;
        constructor(arg0: string);
        get langKey(): string;
    }
    export interface $SpiritRiteEffect extends RegistryMarked<RegistryTypes.MalumRiteEffectTypesTag, RegistryTypes.MalumRiteEffectTypes> {}
    export class $SpiritRiteEffect implements $RegistryCodecBuddy$RegistryCodecBuddyHelper<$SpiritRiteEffect> {
        getTags(): $List<$SpiritRiteEffectTag>;
        getCodec(): $RegistryCodecBuddy<$SpiritRiteEffect>;
        getRegistryName(): $ResourceLocation;
        getCooldown(): number;
        triggerRiteEffect(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $SpiritArcanaType_, arg3: $SpiritRiteEffect$RiteParameters): boolean;
        static builder(): $SpiritRiteEffect$RiteParametersBuilder;
        save(arg0: $CompoundTag_): void;
        save(arg0: $CompoundTag_, arg1: string): void;
        static CODEC: $RegistryCodecBuddy<$SpiritRiteEffect>;
        get tags(): $List<$SpiritRiteEffectTag>;
        get codec(): $RegistryCodecBuddy<$SpiritRiteEffect>;
        get registryName(): $ResourceLocation;
        get cooldown(): number;
    }
    /**
     * Values that may be interpreted as {@link $SpiritRiteEffect}.
     */
    export type $SpiritRiteEffect_ = RegistryTypes.MalumRiteEffectTypes;
}
