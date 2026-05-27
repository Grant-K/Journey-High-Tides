import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component, $MutableComponent } from "@package/net/minecraft/network/chat";
import { $List, $List_ } from "@package/java/util";
import { $RiteEffectHolder } from "@package/com/sammy/malum/core/systems/registry/rite";
import { $SpiritRiteEffect, $SpiritRiteEffect_ } from "@package/com/sammy/malum/core/systems/rite/effect";
import { $TotemBaseBlockEntity } from "@package/com/sammy/malum/common/block/curiosities/totem";
import { $SpiritHolder } from "@package/com/sammy/malum/core/systems/registry";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Holder } from "@package/net/minecraft/core";
import { $SpiritArcanaType_, $SpiritArcanaType } from "@package/com/sammy/malum/core/systems/spirit/type";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as effect from "@package/com/sammy/malum/core/systems/rite/effect";

declare module "@package/com/sammy/malum/core/systems/rite" {
    export interface $SpiritRiteType extends RegistryMarked<RegistryTypes.MalumSpiritRiteTypesTag, RegistryTypes.MalumSpiritRiteTypes> {}
    export class $SpiritRiteType {
        getTags(): $MutableComponent;
        getEffect(): $SpiritRiteEffect;
        getRegistryName(): $ResourceLocation;
        getLangKey(): string;
        getSpirits(): $List<$SpiritHolder<$SpiritArcanaType>>;
        getIdentifyingSpirit(): $SpiritHolder<$SpiritArcanaType>;
        isCorrupted(): boolean;
        triggerRiteEffect(arg0: $ServerLevel, arg1: $TotemBaseBlockEntity): void;
        getEffectDetails(): $List<$Component>;
        getEffectLangKey(): string;
        getDetailedDescription(): $List<$Component>;
        getCodexEntryLangKey(): string;
        getIcon(): $ResourceLocation;
        getName(): string;
        static load(arg0: $CompoundTag_, arg1: string): ($SpiritRiteType) | undefined;
        static load(arg0: $CompoundTag_): ($SpiritRiteType) | undefined;
        matches(arg0: $ServerLevel, arg1: $TotemBaseBlockEntity): boolean;
        save(arg0: $CompoundTag_, arg1: string): void;
        save(arg0: $CompoundTag_): void;
        static CODEC: $Codec<$SpiritRiteType>;
        static HOLDER_CODEC: $Codec<$Holder<$SpiritRiteType>>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SpiritRiteType>;
        constructor(arg0: $RiteEffectHolder<$SpiritRiteEffect_>, arg1: boolean, arg2: $List_<$SpiritHolder<$SpiritArcanaType_>>);
        get tags(): $MutableComponent;
        get effect(): $SpiritRiteEffect;
        get registryName(): $ResourceLocation;
        get langKey(): string;
        get spirits(): $List<$SpiritHolder<$SpiritArcanaType>>;
        get identifyingSpirit(): $SpiritHolder<$SpiritArcanaType>;
        get corrupted(): boolean;
        get effectDetails(): $List<$Component>;
        get effectLangKey(): string;
        get detailedDescription(): $List<$Component>;
        get codexEntryLangKey(): string;
        get icon(): $ResourceLocation;
        get name(): string;
    }
    /**
     * Values that may be interpreted as {@link $SpiritRiteType}.
     */
    export type $SpiritRiteType_ = RegistryTypes.MalumSpiritRiteTypes;
}
