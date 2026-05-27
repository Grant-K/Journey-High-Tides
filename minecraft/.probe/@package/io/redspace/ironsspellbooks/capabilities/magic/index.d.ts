import { $ListTag, $CompoundTag, $ListTag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CastSource, $ICastData, $CastSource_, $AbstractSpell_, $ICastDataSerializable } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $UUID, $List, $Map_, $Map } from "@package/java/util";
import { $SpinAttackType, $SpinAttackType_ } from "@package/io/redspace/ironsspellbooks/player";
import { $MagicData } from "@package/io/redspace/ironsspellbooks/api/magic";
import { $SpellSelection } from "@package/io/redspace/ironsspellbooks/gui/overlays";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ISerializable } from "@package/io/redspace/ironsspellbooks/api/network";
import { $Enum } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/io/redspace/ironsspellbooks/capabilities/magic" {
    export class $SyncedSpellData {
        getPersistentData(arg0: $ServerPlayer): $SyncedSpellData;
        isCasting(): boolean;
        saveNBTData(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        loadNBTData(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getCastingSpellLevel(): number;
        getCastingSpellId(): string;
        setSpinAttackType(arg0: $SpinAttackType_): void;
        setEvasionHitsRemaining(arg0: number): void;
        subtractEvasionHit(): void;
        getEvasionHitsRemaining(): number;
        setHeartstopAccumulatedDamage(arg0: number): void;
        getHeartstopAccumulatedDamage(): number;
        doSync(): void;
        addHeartstopDamage(arg0: number): void;
        setIsCasting(arg0: boolean, arg1: string, arg2: number, arg3: string): void;
        getSpinAttackType(): $SpinAttackType;
        isSpellLearned(arg0: $AbstractSpell_): boolean;
        getCastingEquipmentSlot(): string;
        syncToPlayer(arg0: $ServerPlayer): void;
        learnSpell(arg0: $AbstractSpell_): void;
        learnSpell(arg0: $AbstractSpell_, arg1: boolean): void;
        getServerPlayerId(): number;
        getSpellSelection(): $SpellSelection;
        setSpellSelection(arg0: $SpellSelection): void;
        forgetAllSpells(): void;
        static write(arg0: $FriendlyByteBuf, arg1: $SyncedSpellData): void;
        static read(arg0: $FriendlyByteBuf): $SyncedSpellData;
        constructor(arg0: number);
        constructor(arg0: $LivingEntity);
        get casting(): boolean;
        get castingSpellLevel(): number;
        get castingSpellId(): string;
        get castingEquipmentSlot(): string;
        get serverPlayerId(): number;
    }
    export class $PlayerRecasts {
        isRecastActive(arg0: $RecastInstance): boolean;
        syncRemoveToPlayer(arg0: string): void;
        getAllRecasts(): $List<$RecastInstance>;
        getRemainingRecastsForSpell(arg0: $AbstractSpell_): number;
        getRemainingRecastsForSpell(arg0: string): number;
        saveNBTData(arg0: $HolderLookup$Provider): $ListTag;
        loadNBTData(arg0: $ListTag_, arg1: $HolderLookup$Provider): void;
        tick(arg0: number): void;
        syncAllToPlayer(): void;
        hasRecastsActive(): boolean;
        tickRecasts(): void;
        getActiveRecasts(): $List<$RecastInstance>;
        forceAddRecast(arg0: $RecastInstance): void;
        addRecast(arg0: $RecastInstance, arg1: $MagicData): boolean;
        hasRecastForSpell(arg0: $AbstractSpell_): boolean;
        hasRecastForSpell(arg0: string): boolean;
        decrementRecastCount(arg0: string): void;
        decrementRecastCount(arg0: $AbstractSpell_): void;
        getRecastInstance(arg0: string): $RecastInstance;
        removeRecast(arg0: string): void;
        removeRecast(arg0: $RecastInstance, arg1: $RecastResult_): void;
        syncToPlayer(arg0: $RecastInstance): void;
        removeAll(arg0: $RecastResult_): void;
        constructor(arg0: $Map_<string, $RecastInstance>);
        constructor();
        constructor(arg0: $ServerPlayer);
        get allRecasts(): $List<$RecastInstance>;
        get activeRecasts(): $List<$RecastInstance>;
    }
    export class $RecastResult extends $Enum<$RecastResult> {
        isSuccess(): boolean;
        isFailure(): boolean;
        static values(): $RecastResult[];
        static valueOf(arg0: string): $RecastResult;
        static USER_CANCEL: $RecastResult;
        static DEATH: $RecastResult;
        static COMMAND: $RecastResult;
        static TIMEOUT: $RecastResult;
        static COUNTERSPELL: $RecastResult;
        static USED_ALL_RECASTS: $RecastResult;
        get success(): boolean;
        get failure(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RecastResult}.
     */
    export type $RecastResult_ = "timeout" | "counterspell" | "death" | "used_all_recasts" | "command" | "user_cancel";
    export class $PlayerCooldowns {
        getCooldownPercent(arg0: $AbstractSpell_): number;
        isOnCooldown(arg0: $AbstractSpell_): boolean;
        addCooldown(arg0: string, arg1: number): void;
        addCooldown(arg0: $AbstractSpell_, arg1: number, arg2: number): void;
        addCooldown(arg0: $AbstractSpell_, arg1: number): void;
        addCooldown(arg0: string, arg1: number, arg2: number): void;
        setTickBuffer(arg0: number): void;
        saveNBTData(): $ListTag;
        loadNBTData(arg0: $ListTag_): void;
        decrementCooldown(arg0: $CooldownInstance, arg1: number): boolean;
        tick(arg0: number): void;
        clearCooldowns(): void;
        getSpellCooldowns(): $Map<string, $CooldownInstance>;
        hasCooldownsActive(): boolean;
        removeCooldown(arg0: string): boolean;
        syncToPlayer(arg0: $ServerPlayer): void;
        static SPELL_ID: string;
        static COOLDOWN_REMAINING: string;
        static SPELL_COOLDOWN: string;
        constructor();
        set tickBuffer(value: number);
        get spellCooldowns(): $Map<string, $CooldownInstance>;
    }
    export class $CooldownInstance {
        getCooldownPercent(): number;
        decrementBy(arg0: number): void;
        getCooldownRemaining(): number;
        getSpellCooldown(): number;
        decrement(): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: number);
        get cooldownPercent(): number;
        get cooldownRemaining(): number;
        get spellCooldown(): number;
    }
    export class $RecastInstance implements $ISerializable, $INBTSerializable<$CompoundTag> {
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getCastData(): $ICastDataSerializable;
        getTotalRecasts(): number;
        getTicksRemaining(): number;
        getTicksToLive(): number;
        getSpellId(): string;
        getSpellLevel(): number;
        getCastSource(): $CastSource;
        getRemainingRecasts(): number;
        writeToBuffer(arg0: $FriendlyByteBuf): void;
        readFromBuffer(arg0: $FriendlyByteBuf): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: $CastSource_, arg5: $ICastDataSerializable);
        constructor();
        get castData(): $ICastDataSerializable;
        get totalRecasts(): number;
        get ticksRemaining(): number;
        get ticksToLive(): number;
        get spellId(): string;
        get spellLevel(): number;
        get castSource(): $CastSource;
        get remainingRecasts(): number;
    }
    export class $TargetEntityCastData implements $ICastData {
        getTargetPosition(arg0: $ServerLevel): $Vec3;
        getTargetUUID(): $UUID;
        getTarget(arg0: $ServerLevel): $LivingEntity;
        reset(): void;
        constructor(arg0: $LivingEntity);
        get targetUUID(): $UUID;
    }
}
