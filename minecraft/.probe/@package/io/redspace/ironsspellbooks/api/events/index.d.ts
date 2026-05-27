import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $SchoolType_, $CastSource, $SchoolType, $CastSource_, $SpellData, $AbstractSpell, $AbstractSpell_ } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $SpellDamageSource } from "@package/io/redspace/ironsspellbooks/damage";
import { $EntityTeleportEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $MagicData } from "@package/io/redspace/ironsspellbooks/api/magic";

declare module "@package/io/redspace/ironsspellbooks/api/events" {
    export class $SpellOnCastEvent extends $PlayerEvent {
        getSchoolType(): $SchoolType;
        getSpellId(): string;
        getManaCost(): number;
        getSpellLevel(): number;
        getCastSource(): $CastSource;
        getOriginalSpellLevel(): number;
        setSpellLevel(arg0: number): void;
        getOriginalManaCost(): number;
        setManaCost(arg0: number): void;
        constructor(arg0: $Player, arg1: string, arg2: number, arg3: number, arg4: $SchoolType_, arg5: $CastSource_);
        get schoolType(): $SchoolType;
        get spellId(): string;
        get castSource(): $CastSource;
        get originalSpellLevel(): number;
        get originalManaCost(): number;
    }
    export class $ChangeManaEvent extends $PlayerEvent implements $ICancellableEvent {
        getMagicData(): $MagicData;
        getNewMana(): number;
        getOldMana(): number;
        setNewMana(arg0: number): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $MagicData, arg2: number, arg3: number);
        get magicData(): $MagicData;
        get oldMana(): number;
    }
    export class $SpellSummonEvent<K extends $LivingEntity> extends $LivingEvent {
        getSpellId(): $ResourceLocation;
        getCreature(): K;
        getSpellLevel(): number;
        setCreature(arg0: K): void;
        getCaster(): $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: K, arg2: $ResourceLocation_, arg3: number);
        get spellId(): $ResourceLocation;
        get spellLevel(): number;
        get caster(): $LivingEntity;
    }
    export class $SpellPreCastEvent extends $PlayerEvent implements $ICancellableEvent {
        getSchoolType(): $SchoolType;
        getSpellId(): string;
        getSpellLevel(): number;
        getCastSource(): $CastSource;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: string, arg2: number, arg3: $SchoolType_, arg4: $CastSource_);
        get schoolType(): $SchoolType;
        get spellId(): string;
        get spellLevel(): number;
        get castSource(): $CastSource;
    }
    export class $CounterSpellEvent extends $Event implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        caster: $Entity;
        target: $Entity;
        constructor(arg0: $Entity, arg1: $Entity);
    }
    export class $SpellHealEvent extends $LivingEvent {
        getSchoolType(): $SchoolType;
        getTargetEntity(): $LivingEntity;
        getHealAmount(): number;
        constructor(arg0: $LivingEntity, arg1: $LivingEntity, arg2: number, arg3: $SchoolType_);
        get schoolType(): $SchoolType;
        get targetEntity(): $LivingEntity;
        get healAmount(): number;
    }
    export class $SpellCooldownAddedEvent$Pre extends $SpellCooldownAddedEvent implements $ICancellableEvent {
        setEffectiveCooldown(arg0: number): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: number, arg1: $AbstractSpell_, arg2: $Player, arg3: $CastSource_);
        set effectiveCooldown(value: number);
    }
    export class $SpellDamageEvent extends $LivingEvent implements $ICancellableEvent {
        getAmount(): number;
        getOriginalAmount(): number;
        setAmount(arg0: number): void;
        getSpellDamageSource(): $SpellDamageSource;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: number, arg2: $SpellDamageSource);
        get originalAmount(): number;
        get spellDamageSource(): $SpellDamageSource;
    }
    export class $InscribeSpellEvent extends $PlayerEvent implements $ICancellableEvent {
        getSpellData(): $SpellData;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $SpellData);
        get spellData(): $SpellData;
    }
    export class $SpellCooldownAddedEvent$Post extends $SpellCooldownAddedEvent {
        constructor(arg0: number, arg1: $AbstractSpell_, arg2: $Player, arg3: $CastSource_);
    }
    export class $SpellTeleportEvent extends $EntityTeleportEvent {
        getSpell(): $AbstractSpell;
        constructor(arg0: $AbstractSpell_, arg1: $Entity, arg2: number, arg3: number, arg4: number);
        get spell(): $AbstractSpell;
    }
    export class $SpellCooldownAddedEvent extends $Event {
        getSpell(): $AbstractSpell;
        getEntity(): $Player;
        getEffectiveCooldown(): number;
        getCastSource(): $CastSource;
        constructor(arg0: number, arg1: $AbstractSpell_, arg2: $Player, arg3: $CastSource_);
        get spell(): $AbstractSpell;
        get entity(): $Player;
        get effectiveCooldown(): number;
        get castSource(): $CastSource;
    }
    export class $ModifySpellLevelEvent extends $Event {
        getSpell(): $AbstractSpell;
        getLevel(): number;
        setLevel(arg0: number): void;
        getBaseLevel(): number;
        getEntity(): $LivingEntity;
        addLevels(arg0: number): void;
        constructor(arg0: $AbstractSpell_, arg1: $LivingEntity, arg2: number, arg3: number);
        get spell(): $AbstractSpell;
        get baseLevel(): number;
        get entity(): $LivingEntity;
    }
}
