import { $Level_ } from "@package/net/minecraft/world/level";
import { $Item$TooltipContext, $ItemStack, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $MutableComponent, $Component_, $TextColor, $Component } from "@package/net/minecraft/network/chat";
import { $GatewayEntity$FailureReason_, $GatewayEntity } from "@package/dev/shadowsoffire/gateways/entity";
import { $EntityDimensions, $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $List_ } from "@package/java/util";
import { $DecimalFormat } from "@package/java/text";
import { $Consumer_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder } from "@package/net/minecraft/core";
import { $Method } from "@package/java/lang/reflect";
import { $CodecMap, $CodecProvider } from "@package/dev/shadowsoffire/placebo/codec";
import { $MethodHandle } from "@package/java/lang/invoke";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/dev/shadowsoffire/gateways/gate" {
    export class $Gateway {
    }
    export interface $Gateway extends $CodecProvider<$Gateway> {
        failures(): $List<$Failure>;
        canOpen(arg0: $Player): $Component;
        createEntity(arg0: $Level_, arg1: $Player): $GatewayEntity;
        rules(): $GateRules;
        getLeashRangeSq(): number;
        appendPearlTooltip(arg0: $Item$TooltipContext, arg1: $List_<$Component_>, arg2: $TooltipFlag): void;
        spawnAlgo(): $SpawnAlgorithms$SpawnAlgorithm;
        bossSettings(): $BossEventSettings;
        renderBossBar(arg0: $GatewayEntity, arg1: $Object, arg2: number, arg3: number, arg4: boolean): void;
        soundtrack(): $Holder<$SoundEvent>;
        color(): $TextColor;
        size(): $Gateway$Size;
        get leashRangeSq(): number;
    }
    export class $WaveModifier {
        static initCodecs(): void;
        static CODEC: $CodecMap<$WaveModifier>;
    }
    export interface $WaveModifier extends $CodecProvider<$WaveModifier> {
        appendHoverText(arg0: $Item$TooltipContext, arg1: $Consumer_<$MutableComponent>): void;
        apply(arg0: $LivingEntity, arg1: $GatewayEntity): void;
        /**
         * @deprecated
         */
        apply(arg0: $LivingEntity): void;
    }
    export class $WaveEntity {
        static initCodecs(): void;
        static CODEC: $CodecMap<$WaveEntity>;
    }
    export interface $WaveEntity extends $CodecProvider<$WaveEntity> {
        createEntity(arg0: $ServerLevel, arg1: $GatewayEntity): $LivingEntity;
        /**
         * @deprecated
         */
        createEntity(arg0: $Level_): $LivingEntity;
        shouldFinalizeSpawn(): boolean;
        getDescription(): $MutableComponent;
        getCount(): number;
        get description(): $MutableComponent;
        get count(): number;
    }
    export class $SpawnAlgorithms$SpawnAlgorithm {
    }
    export interface $SpawnAlgorithms$SpawnAlgorithm {
        spawn(arg0: $ServerLevel, arg1: $Vec3_, arg2: $GatewayEntity, arg3: $Entity): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $SpawnAlgorithms$SpawnAlgorithm}.
     */
    export type $SpawnAlgorithms$SpawnAlgorithm_ = ((arg0: $ServerLevel, arg1: $Vec3, arg2: $GatewayEntity, arg3: $Entity) => $Vec3_);
    export class $Reward {
        static initCodecs(): void;
        static dropFromLootTable: $Method;
        static CODEC: $CodecMap<$Reward>;
        static DROP_LOOT: $MethodHandle;
    }
    export interface $Reward extends $CodecProvider<$Reward> {
        appendHoverText(arg0: $Item$TooltipContext, arg1: $Consumer_<$MutableComponent>): void;
        generateLoot(arg0: $ServerLevel, arg1: $GatewayEntity, arg2: $Player, arg3: $Consumer_<$ItemStack>): void;
    }
    export class $GateRules$Builder {
        spacing(arg0: number): $GateRules$Builder;
        spawnRange(arg0: number): $GateRules$Builder;
        failOnOutOfBounds(arg0: boolean): $GateRules$Builder;
        playerDamageOnly(arg0: boolean): $GateRules$Builder;
        leashRange(arg0: number): $GateRules$Builder;
        allowDiscarding(arg0: boolean): $GateRules$Builder;
        allowDimChange(arg0: boolean): $GateRules$Builder;
        lives(arg0: number): $GateRules$Builder;
        removeOnFailure(arg0: boolean): $GateRules$Builder;
        defaultDropChance(arg0: number): $GateRules$Builder;
        followRangeBoost(arg0: number): $GateRules$Builder;
        requiresNearbyPlayer(arg0: boolean): $GateRules$Builder;
        build(): $GateRules;
        constructor();
    }
    export class $Gateway$Size extends $Enum<$Gateway$Size> {
        getScale(): number;
        getDims(): $EntityDimensions;
        static values(): $Gateway$Size[];
        static valueOf(arg0: string): $Gateway$Size;
        static SMALL: $Gateway$Size;
        static CODEC: $Codec<$Gateway$Size>;
        static MEDIUM: $Gateway$Size;
        static LARGE: $Gateway$Size;
        get scale(): number;
        get dims(): $EntityDimensions;
    }
    /**
     * Values that may be interpreted as {@link $Gateway$Size}.
     */
    export type $Gateway$Size_ = "small" | "medium" | "large";
    export class $BossEventSettings extends $Record {
        fog(): boolean;
        drawAsBar(): boolean;
        drawAsName(): boolean;
        mode(): $BossEventSettings$Mode;
        static CODEC: $Codec<$BossEventSettings>;
        static DEFAULT: $BossEventSettings;
        constructor(mode: $BossEventSettings$Mode_, fog: boolean);
    }
    /**
     * Values that may be interpreted as {@link $BossEventSettings}.
     */
    export type $BossEventSettings_ = { fog?: boolean, mode?: $BossEventSettings$Mode_,  } | [fog?: boolean, mode?: $BossEventSettings$Mode_, ];
    export class $GateRules extends $Record {
        spacing(): number;
        spawnRange(): number;
        failOnOutOfBounds(): boolean;
        playerDamageOnly(): boolean;
        leashRange(): number;
        allowDiscarding(): boolean;
        allowDimChange(): boolean;
        lives(): number;
        removeOnFailure(): boolean;
        defaultDropChance(): number;
        followRangeBoost(): number;
        buildDeviations(): $List<$MutableComponent>;
        requiresNearbyPlayer(): boolean;
        static builder(): $GateRules$Builder;
        static CODEC: $Codec<$GateRules>;
        static FORMAT: $DecimalFormat;
        static DEFAULT: $GateRules;
        constructor(spawnRange: number, leashRange: number, allowDiscarding: boolean, allowDimChange: boolean, playerDamageOnly: boolean, removeOnFailure: boolean, failOnOutOfBounds: boolean, spacing: number, followRangeBoost: number, defaultDropChance: number, requiresNearbyPlayer: boolean, lives: number);
    }
    /**
     * Values that may be interpreted as {@link $GateRules}.
     */
    export type $GateRules_ = { allowDiscarding?: boolean, followRangeBoost?: number, allowDimChange?: boolean, lives?: number, spawnRange?: number, spacing?: number, defaultDropChance?: number, playerDamageOnly?: boolean, requiresNearbyPlayer?: boolean, leashRange?: number, failOnOutOfBounds?: boolean, removeOnFailure?: boolean,  } | [allowDiscarding?: boolean, followRangeBoost?: number, allowDimChange?: boolean, lives?: number, spawnRange?: number, spacing?: number, defaultDropChance?: number, playerDamageOnly?: boolean, requiresNearbyPlayer?: boolean, leashRange?: number, failOnOutOfBounds?: boolean, removeOnFailure?: boolean, ];
    export class $Failure {
        static initCodecs(): void;
        static CODEC: $CodecMap<$Failure>;
    }
    export interface $Failure extends $CodecProvider<$Failure> {
        onFailure(arg0: $ServerLevel, arg1: $GatewayEntity, arg2: $Player, arg3: $GatewayEntity$FailureReason_): void;
        appendHoverText(arg0: $Item$TooltipContext, arg1: $Consumer_<$MutableComponent>): void;
    }
    export class $Wave extends $Record {
        rewards(): $List<$Reward>;
        entities(): $List<$WaveEntity>;
        setupTime(): number;
        maxWaveTime(): number;
        spawnWave(arg0: $ServerLevel, arg1: $Vec3_, arg2: $GatewayEntity): $List<$LivingEntity>;
        spawnRewards(arg0: $ServerLevel, arg1: $GatewayEntity, arg2: $Player): $List<$ItemStack>;
        static spawnWaveEntity(arg0: $ServerLevel, arg1: $Vec3_, arg2: $GatewayEntity, arg3: $Wave_, arg4: $WaveEntity): $LivingEntity;
        modifiers(): $List<$WaveModifier>;
        static builder(): $Wave$Builder;
        static CODEC: $Codec<$Wave>;
        constructor(entities: $List_<$WaveEntity>, modifiers: $List_<$WaveModifier>, rewards: $List_<$Reward>, maxWaveTime: number, setupTime: number);
    }
    /**
     * Values that may be interpreted as {@link $Wave}.
     */
    export type $Wave_ = { setupTime?: number, entities?: $List_<$WaveEntity>, modifiers?: $List_<$WaveModifier>, rewards?: $List_<$Reward>, maxWaveTime?: number,  } | [setupTime?: number, entities?: $List_<$WaveEntity>, modifiers?: $List_<$WaveModifier>, rewards?: $List_<$Reward>, maxWaveTime?: number, ];
    export class $BossEventSettings$Mode extends $Enum<$BossEventSettings$Mode> {
        static values(): $BossEventSettings$Mode[];
        static valueOf(arg0: string): $BossEventSettings$Mode;
        static NAME_PLATE: $BossEventSettings$Mode;
        static CODEC: $Codec<$BossEventSettings$Mode>;
        static BOSS_BAR: $BossEventSettings$Mode;
    }
    /**
     * Values that may be interpreted as {@link $BossEventSettings$Mode}.
     */
    export type $BossEventSettings$Mode_ = "boss_bar" | "name_plate";
    export class $Wave$Builder {
        reward(arg0: $Reward): $Wave$Builder;
        rewards(arg0: $List_<$Reward>): $Wave$Builder;
        entities(arg0: $List_<$WaveEntity>): $Wave$Builder;
        entity(arg0: $WaveEntity): $Wave$Builder;
        modifier(arg0: $WaveModifier): $Wave$Builder;
        setupTime(arg0: number): $Wave$Builder;
        maxWaveTime(arg0: number): $Wave$Builder;
        build(): $Wave;
        modifiers(arg0: $List_<$WaveModifier>): $Wave$Builder;
        constructor();
        set upTime(value: number);
    }
}
