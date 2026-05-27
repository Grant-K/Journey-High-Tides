import { $Level_ } from "@package/net/minecraft/world/level";
import { $PlayerDetector$EntitySelector, $PlayerDetector_, $PlayerDetector } from "@package/net/minecraft/world/level/block/entity/trialspawner";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/level/block/entity/vault" {
    export class $VaultBlockEntity$Server {
        static tryInsertKey(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $VaultConfig_, arg4: $VaultServerData, arg5: $VaultSharedData, arg6: $Player, arg7: $ItemStack_): void;
        static tick(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $VaultConfig_, arg4: $VaultServerData, arg5: $VaultSharedData): void;
        constructor();
    }
    export class $VaultBlockEntity extends $BlockEntity {
        getServerData(): $VaultServerData;
        getSharedData(): $VaultSharedData;
        getClientData(): $VaultClientData;
        setConfig(arg0: $VaultConfig_): void;
        getConfig(): $VaultConfig;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get serverData(): $VaultServerData;
        get sharedData(): $VaultSharedData;
        get clientData(): $VaultClientData;
    }
    export class $VaultBlockEntity$Client {
        static emitActivationParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $VaultSharedData, arg4: $ParticleOptions_): void;
        static emitDeactivationParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $ParticleOptions_): void;
        static shouldDisplayActiveEffects(arg0: $VaultSharedData): boolean;
        static tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $VaultClientData, arg4: $VaultSharedData): void;
        constructor();
    }
    export class $VaultClientData {
        previousSpin(): number;
        currentSpin(): number;
        static ROTATION_SPEED: number;
    }
    export class $VaultConfig extends $Record {
        lootTable(): $ResourceKey<$LootTable>;
        keyItem(): $ItemStack;
        overrideLootTableToDisplay(): ($ResourceKey<$LootTable>) | undefined;
        playerDetector(): $PlayerDetector;
        entitySelector(): $PlayerDetector$EntitySelector;
        activationRange(): number;
        deactivationRange(): number;
        constructor(arg0: $ResourceKey_<$LootTable>, arg1: number, arg2: number, arg3: $ItemStack_, arg4: ($ResourceKey_<$LootTable>) | undefined, arg5: $PlayerDetector_, arg6: $PlayerDetector$EntitySelector);
        constructor(arg0: $ResourceKey_<$LootTable>, arg1: number, arg2: number, arg3: $ItemStack_, arg4: ($ResourceKey_<$LootTable>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $VaultConfig}.
     */
    export type $VaultConfig_ = { activationRange?: number, overrideLootTableToDisplay?: ($ResourceKey_<$LootTable>) | undefined, deactivationRange?: number, entitySelector?: $PlayerDetector$EntitySelector, lootTable?: $ResourceKey_<$LootTable>, playerDetector?: $PlayerDetector_, keyItem?: $ItemStack_,  } | [activationRange?: number, overrideLootTableToDisplay?: ($ResourceKey_<$LootTable>) | undefined, deactivationRange?: number, entitySelector?: $PlayerDetector$EntitySelector, lootTable?: $ResourceKey_<$LootTable>, playerDetector?: $PlayerDetector_, keyItem?: $ItemStack_, ];
    export class $VaultState$LightLevel extends $Enum<$VaultState$LightLevel> {
    }
    /**
     * Values that may be interpreted as {@link $VaultState$LightLevel}.
     */
    export type $VaultState$LightLevel_ = "half_lit" | "lit";
    export class $VaultServerData {
        ejectionProgress(): number;
        addToRewardedPlayers(arg0: $Player): void;
    }
    export class $VaultSharedData {
        hasDisplayItem(): boolean;
        setDisplayItem(arg0: $ItemStack_): void;
        getDisplayItem(): $ItemStack;
    }
    export class $VaultState extends $Enum<$VaultState> implements $StringRepresentable {
        getSerializedName(): string;
        onTransition(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $VaultState_, arg3: $VaultConfig_, arg4: $VaultSharedData, arg5: boolean): void;
        lightLevel(): number;
        tickAndGetNext(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $VaultConfig_, arg3: $VaultServerData, arg4: $VaultSharedData): $VaultState;
        static values(): $VaultState[];
        static valueOf(arg0: string): $VaultState;
        getRemappedEnumConstantName(): string;
        static ACTIVE: $VaultState;
        static INACTIVE: $VaultState;
        static EJECTING: $VaultState;
        static UNLOCKING: $VaultState;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $VaultState}.
     */
    export type $VaultState_ = "inactive" | "active" | "unlocking" | "ejecting";
}
