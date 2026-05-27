import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $MutableComponent, $Style } from "@package/net/minecraft/network/chat";
import { $CastSource, $ICastData, $SchoolType, $CastSource_, $AbstractSpell_, $SpellRarity_, $ICastData_, $CastType_, $AbstractSpell } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
import { $MagicData } from "@package/io/redspace/ironsspellbooks/api/magic";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $Consumer_, $Predicate_, $BiFunction_ } from "@package/java/util/function";
import { $Holder_, $Registry, $Holder } from "@package/net/minecraft/core";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
export * as school from "@package/com/squoshi/irons_spells_js/spell/school";

declare module "@package/com/squoshi/irons_spells_js/spell" {
    export class $CustomSpell$PreCastClientContext extends $Record {
        getPlayerMagicData(): $MagicData;
        getHand(): $InteractionHand;
        getLevel(): $Level;
        getEntity(): $LivingEntity;
        getSpellLevel(): number;
        constructor(getLevel: $Level_, getSpellLevel: number, getEntity: $LivingEntity, getHand: $InteractionHand_, getPlayerMagicData: $MagicData);
        get playerMagicData(): $MagicData;
        get hand(): $InteractionHand;
        get level(): $Level;
        get entity(): $LivingEntity;
        get spellLevel(): number;
    }
    /**
     * Values that may be interpreted as {@link $CustomSpell$PreCastClientContext}.
     */
    export type $CustomSpell$PreCastClientContext_ = { getSpellLevel?: number, getHand?: $InteractionHand_, getLevel?: $Level_, getPlayerMagicData?: $MagicData, getEntity?: $LivingEntity,  } | [getSpellLevel?: number, getHand?: $InteractionHand_, getLevel?: $Level_, getPlayerMagicData?: $MagicData, getEntity?: $LivingEntity, ];
    export class $CustomSpell$Builder extends $BuilderBase<$CustomSpell> {
        /**
         * Sets the callback for when the spell is about to be cast. This is what the spell does before it is casted.
         */
        onPreCast(arg0: $Consumer_<$CustomSpell$PreCastContext>): $CustomSpell$Builder;
        /**
         * Sets the callback for when the spell is about to be cast on the client side. This is what the spell does before it is casted.
         */
        onPreClientCast(arg0: $Consumer_<$CustomSpell$PreCastClientContext>): $CustomSpell$Builder;
        /**
         * Sets whether or not the spell needs to be learned before it can be casted.
         */
        needsLearning(arg0: boolean): $CustomSpell$Builder;
        /**
         * Sets the cast type. Can be `CONTINUOUS`, `INSTANT`, `LONG`, or `NONE`.
         */
        setCastType(arg0: $CastType_): $CustomSpell$Builder;
        /**
         * Sets the sound that the spell will play when it starts casting.
         */
        setStartSound(arg0: $Holder_<$SoundEvent>): $CustomSpell$Builder;
        /**
         * Sets the sound that the spell will play after it is done casting.
         */
        setFinishSound(arg0: $Holder_<$SoundEvent>): $CustomSpell$Builder;
        /**
         * Sets the school of the spell. The different schools each are a resource location.
         * 
         *     Example: `.setSchool(SchoolRegistry.BLOOD_RESOURCE`
         *     Another example: `setSchool('irons_spellbooks:blood')`
         */
        setSchool(arg0: $Holder_<$SchoolType>): $CustomSpell$Builder;
        /**
         * Sets the mana cost per the spell's level. For example, you could input `10` into this method, and each level of the spell will multiply that value by the level.
         */
        setManaCostPerLevel(arg0: number): $CustomSpell$Builder;
        /**
         * Sets the base spell power. Can be from `1` to `10`. The spell power per level adds on to this.
         */
        setBaseSpellPower(arg0: number): $CustomSpell$Builder;
        /**
         * Sets the spell power per level.
         */
        setSpellPowerPerLevel(arg0: number): $CustomSpell$Builder;
        /**
         * Sets the cast time. This is used for `LONG` or `CONTINUOUS` spell types.
         */
        setCastTime(arg0: number): $CustomSpell$Builder;
        /**
         * Sets the base mana cost. The mana cost per level adds on to this.
         */
        setBaseManaCost(arg0: number): $CustomSpell$Builder;
        /**
         * Sets whether or not the spell can be looted from a loot table.
         */
        setAllowLooting(arg0: boolean): $CustomSpell$Builder;
        /**
         * Sets the unique info for the spell. It is what is displayed on the spell in-game, e.g how some spells have damage values listed.
         */
        setUniqueInfo(arg0: $BiFunction_<number, $LivingEntity, $List<$MutableComponent>>): $CustomSpell$Builder;
        /**
         * Sets the cast start animation for the spell.
         */
        setCastStartAnimation(arg0: string, arg1: boolean, arg2: boolean): $CustomSpell$Builder;
        /**
         * Sets the cast finish animation for the spell.
         */
        setCastFinishAnimation(arg0: string, arg1: boolean, arg2: boolean): $CustomSpell$Builder;
        /**
         * Sets the callback for when the spell is cast. This is what the spell does when it is casted.
         */
        onCast(arg0: $Consumer_<$CustomSpell$CastContext>): $CustomSpell$Builder;
        /**
         * Sets the pre-cast conditions for the spell. It is a Predicate, which means it requires a boolean return value. This can be used for targeting spells and for cancelling the spell before it is casted.
         * 
         *     Example: ```js
         *     .checkPreCastConditions(ctx => {
         *         return ISSUtils.preCastTargetHelper(ctx.level, ctx.entity, ctx.playerMagicData, ctx.spell, 48, 0.35)
         *     })
         *     ```
         */
        checkPreCastConditions(arg0: $Predicate_<$CustomSpell$PreCastTargetingContext>): $CustomSpell$Builder;
        /**
         * Sets the rarity of the spell. Can be `COMMON`, `UNCOMMON`, `RARE`, `EPIC`, or `LEGENDARY`.
         */
        setMinRarity(arg0: $SpellRarity_): $CustomSpell$Builder;
        /**
         * Sets the max level of the spell. Goes up to `10` from `1`.
         */
        setMaxLevel(arg0: number): $CustomSpell$Builder;
        /**
         * Sets the cooldown of the spell in seconds. Cannot be a decimal value for some reason.
         */
        setCooldownSeconds(arg0: number): $CustomSpell$Builder;
        /**
         * Sets the callback for when the spell is cast on the client side. This is what the spell does when it is casted.
         */
        onClientCast(arg0: $Consumer_<$CustomSpell$CastClientContext>): $CustomSpell$Builder;
        /**
         * Sets the predicate for whether or not the spell can be crafted by a player.
         */
        canBeCraftedBy(arg0: $Predicate_<$Player>): $CustomSpell$Builder;
        registryKey: $ResourceKey<$Registry<$CustomSpell>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
        set castType(value: $CastType_);
        set startSound(value: $Holder_<$SoundEvent>);
        set finishSound(value: $Holder_<$SoundEvent>);
        set school(value: $Holder_<$SchoolType>);
        set manaCostPerLevel(value: number);
        set baseSpellPower(value: number);
        set spellPowerPerLevel(value: number);
        set castTime(value: number);
        set baseManaCost(value: number);
        set allowLooting(value: boolean);
        set uniqueInfo(value: $BiFunction_<number, $LivingEntity, $List<$MutableComponent>>);
        set minRarity(value: $SpellRarity_);
        set maxLevel(value: number);
        set cooldownSeconds(value: number);
    }
    export class $AbstractSpellWrapper {
        /**
         * Returns either `ENABLED`, `DISABLED`, or `UNREGISTERED`, based on the spell inputted.
         */
        static checkStatus(arg0: $ResourceKey_<$AbstractSpell>): $AbstractSpellWrapper$SpellStatus;
        static ofHolder(arg0: $Holder_<$AbstractSpell>): $Holder<$AbstractSpell>;
        /**
         * Returns whether an object is a spell or not.
         */
        static isSpell(arg0: $Object): boolean;
        /**
         * Returns whether a spell is registered or not.
         */
        static exists(arg0: $ResourceKey_<$AbstractSpell>): boolean;
        /**
         * Returns a spell registry object.
         */
        static of(arg0: $ResourceKey_<$AbstractSpell>): $AbstractSpell;
        /**
         * Returns whether a spell is enabled in the config or not.
         */
        static isEnabled(arg0: $ResourceKey_<$AbstractSpell>): boolean;
    }
    export interface $AbstractSpellWrapper {
    }
    export class $CustomSpell$CastContext extends $Record {
        getPlayerMagicData(): $MagicData;
        getLevel(): $Level;
        getEntity(): $LivingEntity;
        getSpellLevel(): number;
        getCastSource(): $CastSource;
        constructor(getLevel: $Level_, getSpellLevel: number, getEntity: $LivingEntity, getCastSource: $CastSource_, getPlayerMagicData: $MagicData);
        get playerMagicData(): $MagicData;
        get level(): $Level;
        get entity(): $LivingEntity;
        get spellLevel(): number;
        get castSource(): $CastSource;
    }
    /**
     * Values that may be interpreted as {@link $CustomSpell$CastContext}.
     */
    export type $CustomSpell$CastContext_ = { getSpellLevel?: number, getCastSource?: $CastSource_, getEntity?: $LivingEntity, getLevel?: $Level_, getPlayerMagicData?: $MagicData,  } | [getSpellLevel?: number, getCastSource?: $CastSource_, getEntity?: $LivingEntity, getLevel?: $Level_, getPlayerMagicData?: $MagicData, ];
    export class $CustomSpell$PreCastContext extends $Record {
        getPlayerMagicData(): $MagicData;
        getLevel(): $Level;
        getEntity(): $LivingEntity;
        getSpellLevel(): number;
        constructor(getLevel: $Level_, getSpellLevel: number, getEntity: $LivingEntity, getPlayerMagicData: $MagicData);
        get playerMagicData(): $MagicData;
        get level(): $Level;
        get entity(): $LivingEntity;
        get spellLevel(): number;
    }
    /**
     * Values that may be interpreted as {@link $CustomSpell$PreCastContext}.
     */
    export type $CustomSpell$PreCastContext_ = { getEntity?: $LivingEntity, getSpellLevel?: number, getLevel?: $Level_, getPlayerMagicData?: $MagicData,  } | [getEntity?: $LivingEntity, getSpellLevel?: number, getLevel?: $Level_, getPlayerMagicData?: $MagicData, ];
    export class $AbstractSpellWrapper$SpellStatus extends $Enum<$AbstractSpellWrapper$SpellStatus> {
        static values(): $AbstractSpellWrapper$SpellStatus[];
        static valueOf(arg0: string): $AbstractSpellWrapper$SpellStatus;
        static DISABLED: $AbstractSpellWrapper$SpellStatus;
        static UNREGISTERED: $AbstractSpellWrapper$SpellStatus;
        static REGISTERED: $AbstractSpellWrapper$SpellStatus;
        static ENABLED: $AbstractSpellWrapper$SpellStatus;
    }
    /**
     * Values that may be interpreted as {@link $AbstractSpellWrapper$SpellStatus}.
     */
    export type $AbstractSpellWrapper$SpellStatus_ = "registered" | "unregistered" | "enabled" | "disabled";
    export class $CustomSpell extends $AbstractSpell {
        static ELDRITCH_OBFUSCATED_STYLE: $Style;
        constructor(arg0: $CustomSpell$Builder);
    }
    export class $CustomSpell$PreCastTargetingContext extends $Record {
        getPlayerMagicData(): $MagicData;
        getSpell(): $AbstractSpell;
        getLevel(): $Level;
        getEntity(): $LivingEntity;
        getSpellLevel(): number;
        constructor(getLevel: $Level_, getSpellLevel: number, getEntity: $LivingEntity, getPlayerMagicData: $MagicData, getSpell: $AbstractSpell_);
        get playerMagicData(): $MagicData;
        get spell(): $AbstractSpell;
        get level(): $Level;
        get entity(): $LivingEntity;
        get spellLevel(): number;
    }
    /**
     * Values that may be interpreted as {@link $CustomSpell$PreCastTargetingContext}.
     */
    export type $CustomSpell$PreCastTargetingContext_ = { getSpellLevel?: number, getSpell?: $AbstractSpell_, getEntity?: $LivingEntity, getLevel?: $Level_, getPlayerMagicData?: $MagicData,  } | [getSpellLevel?: number, getSpell?: $AbstractSpell_, getEntity?: $LivingEntity, getLevel?: $Level_, getPlayerMagicData?: $MagicData, ];
    export class $MagicEntityKJS {
    }
    export interface $MagicEntityKJS {
        getMagicData(): $MagicData;
        get magicData(): $MagicData;
    }
    /**
     * Values that may be interpreted as {@link $MagicEntityKJS}.
     */
    export type $MagicEntityKJS_ = (() => void);
    export class $CustomSpell$CastClientContext extends $Record {
        getCastData(): $ICastData;
        getLevel(): $Level;
        getEntity(): $LivingEntity;
        getSpellLevel(): number;
        constructor(getLevel: $Level_, getSpellLevel: number, getEntity: $LivingEntity, getCastData: $ICastData_);
        get castData(): $ICastData;
        get level(): $Level;
        get entity(): $LivingEntity;
        get spellLevel(): number;
    }
    /**
     * Values that may be interpreted as {@link $CustomSpell$CastClientContext}.
     */
    export type $CustomSpell$CastClientContext_ = { getEntity?: $LivingEntity, getSpellLevel?: number, getLevel?: $Level_, getCastData?: $ICastData_,  } | [getEntity?: $LivingEntity, getSpellLevel?: number, getLevel?: $Level_, getCastData?: $ICastData_, ];
}
