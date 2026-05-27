import { $AbstractProgressionCodexScreen } from "@package/com/sammy/malum/client/screen/codex/screens/progression";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $SoulWardData } from "@package/com/sammy/malum/common/data/attachment";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $GluttonyEffect$GluttonyEffectProperties } from "@package/com/sammy/malum/common/effect/gluttony";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/sammy/malum/core/systems/events" {
    export class $MalignantCritEvent$Post extends $MalignantCritEvent {
        constructor(arg0: $LivingEntity, arg1: $DamageContainer);
    }
    export class $MalignantCritEvent extends $LivingEvent {
        getNewDamage(): number;
        setNewDamage(arg0: number): void;
        getLivingEntity(): $LivingEntity;
        getOriginalDamage(): number;
        getContainer(): $DamageContainer;
        getSource(): $DamageSource;
        constructor(arg0: $LivingEntity, arg1: $DamageContainer);
        get livingEntity(): $LivingEntity;
        get originalDamage(): number;
        get container(): $DamageContainer;
        get source(): $DamageSource;
    }
    export class $SetupMalumCodexEntriesEvent extends $Event {
        getScreen(): $AbstractProgressionCodexScreen;
        constructor(arg0: $AbstractProgressionCodexScreen);
        get screen(): $AbstractProgressionCodexScreen;
    }
    export class $SoulWardEvent extends $LivingEvent {
        getSoulWardHandler(): $SoulWardData;
        getSource(): $DamageSource;
        constructor(arg0: $LivingEntity, arg1: $SoulWardData, arg2: $DamageSource_);
        get soulWardHandler(): $SoulWardData;
        get source(): $DamageSource;
    }
    export class $ModifySpiritSpoilsEvent extends $LivingEvent {
        addBonus(arg0: number): void;
        getNewSpiritBonus(): number;
        setNewSpiritBonus(arg0: number): void;
        getOriginalSpiritBonus(): number;
        getAttacker(): $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: $LivingEntity, arg2: number);
        get originalSpiritBonus(): number;
        get attacker(): $LivingEntity;
    }
    export class $MalignantCritEvent$Pre extends $MalignantCritEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $DamageContainer);
    }
    export class $SoulWardDamageEvent extends $SoulWardEvent {
        getAbsorbedDamage(): number;
        getSoulWardLost(): number;
        constructor(arg0: $LivingEntity, arg1: $SoulWardData, arg2: $DamageSource_, arg3: number, arg4: number);
        get absorbedDamage(): number;
        get soulWardLost(): number;
    }
    export class $CollectSpiritEvent extends $LivingEvent {
        constructor(arg0: $LivingEntity);
    }
    export class $ModifyGluttonyPropertiesEvent extends $LivingEvent {
        getProperties(): $GluttonyEffect$GluttonyEffectProperties;
        constructor(arg0: $LivingEntity, arg1: $GluttonyEffect$GluttonyEffectProperties);
        get properties(): $GluttonyEffect$GluttonyEffectProperties;
    }
    export class $ModifySoulWardPropertiesEvent extends $SoulWardEvent {
        getOriginalIntegrity(): number;
        setNewIntegrity(arg0: number): void;
        setNewMagicDamageAbsorption(arg0: number): void;
        getNewIntegrity(): number;
        setNewPhysicalDamageAbsorption(arg0: number): void;
        getOriginalPhysicalDamageAbsorption(): number;
        getOriginalMagicDamageAbsorption(): number;
        getNewPhysicalDamageAbsorption(): number;
        getNewMagicDamageAbsorption(): number;
        constructor(arg0: $LivingEntity, arg1: $SoulWardData, arg2: $DamageSource_, arg3: number, arg4: number, arg5: number);
        get originalIntegrity(): number;
        get originalPhysicalDamageAbsorption(): number;
        get originalMagicDamageAbsorption(): number;
    }
}
