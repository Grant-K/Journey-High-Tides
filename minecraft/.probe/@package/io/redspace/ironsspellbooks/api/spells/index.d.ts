import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Entity, $LivingEntity, $Mob } from "@package/net/minecraft/world/entity";
import { $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $List } from "@package/java/util";
import { $RecastInstance, $RecastResult_ } from "@package/io/redspace/ironsspellbooks/capabilities/magic";
import { $MagicData } from "@package/io/redspace/ironsspellbooks/api/magic";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_ } from "@package/net/minecraft/core";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ChatFormatting } from "@package/net/minecraft";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Enum, $Comparable } from "@package/java/lang";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $SpellDamageSource } from "@package/io/redspace/ironsspellbooks/damage";
import { $AnimationHolder } from "@package/io/redspace/ironsspellbooks/api/util";
import { $ISerializable } from "@package/io/redspace/ironsspellbooks/api/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DefaultConfig } from "@package/io/redspace/ironsspellbooks/api/config";
import { $DamageType } from "@package/net/minecraft/world/damagesource";
import { $Vector3f } from "@package/org/joml";

declare module "@package/io/redspace/ironsspellbooks/api/spells" {
    export class $SchoolType {
        getDisplayName(): $Component;
        isFocus(arg0: $ItemStack_): boolean;
        getResistanceFor(arg0: $LivingEntity): number;
        getPowerFor(arg0: $LivingEntity): number;
        getCastSound(): $SoundEvent;
        getDamageType(): $ResourceKey<$DamageType>;
        getFocus(): $TagKey<$Item>;
        getTargetingColor(): $Vector3f;
        getId(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $TagKey_<$Item>, arg2: $Component_, arg3: $Holder_<$Attribute>, arg4: $Holder_<$Attribute>, arg5: $Holder_<$SoundEvent>, arg6: $ResourceKey_<$DamageType>, arg7: boolean, arg8: boolean);
        constructor(arg0: $ResourceLocation_, arg1: $TagKey_<$Item>, arg2: $Component_, arg3: $Holder_<$Attribute>, arg4: $Holder_<$Attribute>, arg5: $Holder_<$SoundEvent>, arg6: $ResourceKey_<$DamageType>);
        get displayName(): $Component;
        get castSound(): $SoundEvent;
        get damageType(): $ResourceKey<$DamageType>;
        get targetingColor(): $Vector3f;
        get id(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $SchoolType}.
     */
    export type $SchoolType_ = RegistryTypes.IronsSpellbooksSchools;
    export class $SpellData implements $Comparable<$SpellData> {
        getRarity(): $SpellRarity;
        getSpell(): $AbstractSpell;
        getLevel(): number;
        getDisplayName(): $Component;
        static writeToBuffer(arg0: $FriendlyByteBuf, arg1: $SpellData): void;
        static readFromBuffer(arg0: $FriendlyByteBuf): $SpellData;
        isLocked(): boolean;
        canRemove(): boolean;
        compareTo(arg0: $SpellData): number;
        static CODEC: $Codec<$SpellData>;
        static SPELL_ID: string;
        static SPELL_LEVEL: string;
        static EMPTY: $SpellData;
        static SPELL_LOCKED: string;
        constructor(arg0: $AbstractSpell_, arg1: number);
        constructor(arg0: $AbstractSpell_, arg1: number, arg2: boolean);
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: boolean);
        get rarity(): $SpellRarity;
        get spell(): $AbstractSpell;
        get level(): number;
        get displayName(): $Component;
        get locked(): boolean;
    }
    export class $SpellRarity extends $Enum<$SpellRarity> implements $StringRepresentable {
        getSerializedName(): string;
        getDisplayName(): $MutableComponent;
        static getRawRarityConfig(): $List<number>;
        static getRarityConfig(): $List<number>;
        compareRarity(arg0: $SpellRarity_): number;
        static rarityTest(): void;
        getChatFormatting(): $ChatFormatting;
        static values(): $SpellRarity[];
        static valueOf(arg0: string): $SpellRarity;
        getValue(): number;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$SpellRarity>;
        static RARE: $SpellRarity;
        static EPIC: $SpellRarity;
        static UNCOMMON: $SpellRarity;
        static COMMON: $SpellRarity;
        static LEGENDARY: $SpellRarity;
        get serializedName(): string;
        get displayName(): $MutableComponent;
        static get rawRarityConfig(): $List<number>;
        static get rarityConfig(): $List<number>;
        get chatFormatting(): $ChatFormatting;
        get value(): number;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SpellRarity}.
     */
    export type $SpellRarity_ = "common" | "uncommon" | "rare" | "epic" | "legendary";
    export interface $AbstractSpell extends RegistryMarked<RegistryTypes.IronsSpellbooksSpellsTag, RegistryTypes.IronsSpellbooksSpells> {}
    export class $CastResult {
        isSuccess(): boolean;
        type: $CastResult$Type;
        message: $Component;
        constructor(arg0: $CastResult$Type_, arg1: $Component_);
        constructor(arg0: $CastResult$Type_);
        get success(): boolean;
    }
    export class $CastResult$Type extends $Enum<$CastResult$Type> {
        static values(): $CastResult$Type[];
        static valueOf(arg0: string): $CastResult$Type;
        static SUCCESS: $CastResult$Type;
        static FAILURE: $CastResult$Type;
    }
    /**
     * Values that may be interpreted as {@link $CastResult$Type}.
     */
    export type $CastResult$Type_ = "success" | "failure";
    export class $ICastData {
    }
    export interface $ICastData {
        reset(): void;
    }
    /**
     * Values that may be interpreted as {@link $ICastData}.
     */
    export type $ICastData_ = (() => void);
    export class $CastSource extends $Enum<$CastSource> {
        respectsCooldown(): boolean;
        consumesMana(): boolean;
        static values(): $CastSource[];
        static valueOf(arg0: string): $CastSource;
        static MOB: $CastSource;
        static SCROLL: $CastSource;
        static SWORD: $CastSource;
        static COMMAND: $CastSource;
        static SPELLBOOK: $CastSource;
        static NONE: $CastSource;
    }
    /**
     * Values that may be interpreted as {@link $CastSource}.
     */
    export type $CastSource_ = "spellbook" | "scroll" | "sword" | "mob" | "command" | "none";
    export interface $SchoolType extends RegistryMarked<RegistryTypes.IronsSpellbooksSchoolsTag, RegistryTypes.IronsSpellbooksSchools> {}
    export class $ICastDataSerializable {
    }
    export interface $ICastDataSerializable extends $ICastData, $ISerializable, $INBTSerializable<$CompoundTag> {
    }
    export class $AbstractSpell {
        getCastType(): $CastType;
        playSound(arg0: ($SoundEvent_) | undefined, arg1: $Entity): void;
        getRarity(arg0: number): $SpellRarity;
        getDamageSource(arg0: $Entity): $SpellDamageSource;
        getDamageSource(arg0: $Entity, arg1: $Entity): $SpellDamageSource;
        onServerCastComplete(arg0: $Level_, arg1: number, arg2: $LivingEntity, arg3: $MagicData, arg4: boolean): void;
        onClientPreCast(arg0: $Level_, arg1: number, arg2: $LivingEntity, arg3: $InteractionHand_, arg4: $MagicData): void;
        onServerCastTick(arg0: $Level_, arg1: number, arg2: $LivingEntity, arg3: $MagicData): void;
        onCast(arg0: $Level_, arg1: number, arg2: $LivingEntity, arg3: $CastSource_, arg4: $MagicData): void;
        checkPreCastConditions(arg0: $Level_, arg1: number, arg2: $LivingEntity, arg3: $MagicData): boolean;
        getEffectiveCastTime(arg0: number, arg1: $LivingEntity): number;
        onServerPreCast(arg0: $Level_, arg1: number, arg2: $LivingEntity, arg3: $MagicData): void;
        getDisplayName(arg0: $Player): $MutableComponent;
        getSchoolType(): $SchoolType;
        obfuscateStats(arg0: $Player): boolean;
        getComponentId(): string;
        requiresLearning(): boolean;
        allowLooting(): boolean;
        getTargetingColor(): $Vector3f;
        getSpellName(): string;
        getSpellResource(): $ResourceLocation;
        getSpellId(): string;
        getSpellIconResource(): $ResourceLocation;
        /**
         * @deprecated
         */
        getMinRarity(): number;
        getLockedMessage(): $Component;
        getLevelFor(arg0: number, arg1: $LivingEntity): number;
        getManaCost(arg0: number): number;
        getSpellCooldown(): number;
        getCastTime(arg0: number): number;
        getEmptyCastData(): $ICastDataSerializable;
        getCastStartSound(): ($SoundEvent) | undefined;
        getCastFinishSound(): ($SoundEvent) | undefined;
        getCastStartAnimation(): $AnimationHolder;
        getSpellPower(arg0: number, arg1: $Entity): number;
        getCastFinishAnimation(): $AnimationHolder;
        getRecastCount(arg0: number, arg1: $LivingEntity): number;
        getEntityPowerMultiplier(arg0: $LivingEntity): number;
        attemptInitiateCast(arg0: $ItemStack_, arg1: number, arg2: $Level_, arg3: $Player, arg4: $CastSource_, arg5: boolean, arg6: string): boolean;
        canBeCastedBy(arg0: number, arg1: $CastSource_, arg2: $MagicData, arg3: $Player): $CastResult;
        castSpell(arg0: $Level_, arg1: number, arg2: $ServerPlayer, arg3: $CastSource_, arg4: boolean): void;
        onRecastFinished(arg0: $ServerPlayer, arg1: $RecastInstance, arg2: $RecastResult_, arg3: $ICastDataSerializable): void;
        onClientCast(arg0: $Level_, arg1: number, arg2: $LivingEntity, arg3: $ICastData_): void;
        isLearned(arg0: $Player): boolean;
        shouldAIStopCasting(arg0: number, arg1: $Mob, arg2: $LivingEntity): boolean;
        getUniqueInfo(arg0: number, arg1: $LivingEntity): $List<$MutableComponent>;
        resetRarityWeights(): void;
        getMaxRarity(): number;
        getDeathMessageId(): string;
        getMinLevelForRarity(arg0: $SpellRarity_): number;
        canBeCraftedBy(arg0: $Player): boolean;
        allowCrafting(): boolean;
        canBeInterrupted(arg0: $Player): boolean;
        stopSoundOnCancel(): boolean;
        getMinLevel(): number;
        getMaxLevel(): number;
        getDefaultConfig(): $DefaultConfig;
        isEnabled(): boolean;
        static ELDRITCH_OBFUSCATED_STYLE: $Style;
        constructor();
        get castType(): $CastType;
        get schoolType(): $SchoolType;
        get componentId(): string;
        get targetingColor(): $Vector3f;
        get spellName(): string;
        get spellResource(): $ResourceLocation;
        get spellId(): string;
        get spellIconResource(): $ResourceLocation;
        get minRarity(): number;
        get lockedMessage(): $Component;
        get spellCooldown(): number;
        get emptyCastData(): $ICastDataSerializable;
        get castStartSound(): ($SoundEvent) | undefined;
        get castFinishSound(): ($SoundEvent) | undefined;
        get castStartAnimation(): $AnimationHolder;
        get castFinishAnimation(): $AnimationHolder;
        get maxRarity(): number;
        get deathMessageId(): string;
        get minLevel(): number;
        get maxLevel(): number;
        get defaultConfig(): $DefaultConfig;
        get enabled(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AbstractSpell}.
     */
    export type $AbstractSpell_ = RegistryTypes.IronsSpellbooksSpells;
    export class $CastType extends $Enum<$CastType> {
        immediatelySuppressRightClicks(): boolean;
        static values(): $CastType[];
        static valueOf(arg0: string): $CastType;
        getValue(): number;
        static INSTANT: $CastType;
        static NONE: $CastType;
        static CONTINUOUS: $CastType;
        static LONG: $CastType;
        get value(): number;
    }
    /**
     * Values that may be interpreted as {@link $CastType}.
     */
    export type $CastType_ = "none" | "instant" | "long" | "continuous";
}
