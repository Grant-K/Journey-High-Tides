import { $InputStream } from "@package/java/io";
import { $AnimationState, $IPose_, $ServerAnimationState } from "@package/com/tom/cpm/shared/animation";
import { $NBTTagCompound } from "@package/com/tom/cpl/nbt";
import { $Executor } from "@package/java/util/concurrent";
import { $UUID, $List, $Map, $UUID_, $Collection } from "@package/java/util";
import { $Consumer_, $Consumer, $BiConsumer_, $IntFunction_, $Predicate_, $Supplier_, $Function_, $BiFunction_, $ToIntFunction_ } from "@package/java/util/function";
import { $ModelDefinition } from "@package/com/tom/cpm/shared/definition";
import { $ScalingOptions_, $ScalingOptions } from "@package/com/tom/cpm/shared/util";
import { $ThrowingConsumer_, $TriConsumer_ } from "@package/com/tom/cpl/util";
import { $IOHelper } from "@package/com/tom/cpm/shared/io";
import { $ConfigChangeRequest, $PlayerData } from "@package/com/tom/cpm/shared/config";
import { $Throwable, $Runnable_, $Enum, $Object, $Class } from "@package/java/lang";
import { $ScaleData } from "@package/com/tom/cpm/shared/model";
import { $IText } from "@package/com/tom/cpl/text";

declare module "@package/com/tom/cpm/shared/network" {
    export class $NetH {
    }
    export interface $NetH {
        cpm$hasMod(): boolean;
        cpm$setHasMod(arg0: boolean): void;
    }
    export class $ModelEventType extends $Enum<$ModelEventType> {
        autoSync(): boolean;
        getName(): string;
        static values(): $ModelEventType[];
        static valueOf(arg0: string): $ModelEventType;
        trigger(arg0: $AnimationState): void;
        static of<T extends $Enum<T>>(arg0: string): $ModelEventType;
        write(arg0: $ServerAnimationState, arg1: $NBTTagCompound): void;
        read(arg0: $AnimationState, arg1: $NBTTagCompound): void;
        static getType(arg0: $IPose_): $ModelEventType;
        static FALLING: $ModelEventType;
        static CREATIVE_FLYING: $ModelEventType;
        static IN_MENU: $ModelEventType;
        static SYNC_TYPES: $ModelEventType[];
        static AIR: $ModelEventType;
        static VALUES: $ModelEventType[];
        static HEALTH: $ModelEventType;
        static HUNGER: $ModelEventType;
        static JUMPING: $ModelEventType;
    }
    /**
     * Values that may be interpreted as {@link $ModelEventType}.
     */
    export type $ModelEventType_ = "falling" | "creative_flying" | "jumping" | "health" | "hunger" | "air" | "in_menu";
    export class $ServerCaps extends $Enum<$ServerCaps> {
        static values(): $ServerCaps[];
        static valueOf(arg0: string): $ServerCaps;
        static GESTURES: $ServerCaps;
        static THIRD_PERSON: $ServerCaps;
        static INVIS_GLOW: $ServerCaps;
        static SCALING: $ServerCaps;
        static EYE_HEIGHT: $ServerCaps;
        static ATTRIBUTE_SCALE: $ServerCaps;
        static VALUES: $ServerCaps[];
        static MODEL_EVENT_SUBS: $ServerCaps;
        static NAMED_PARAMETERS: $ServerCaps;
        static PLUGIN_MESSAGES: $ServerCaps;
        static HITBOX_SCALING: $ServerCaps;
    }
    /**
     * Values that may be interpreted as {@link $ServerCaps}.
     */
    export type $ServerCaps_ = "scaling" | "eye_height" | "hitbox_scaling" | "model_event_subs" | "third_person" | "attribute_scale" | "gestures" | "plugin_messages" | "invis_glow" | "named_parameters";
    export class $NetHandler$ScalerInterface<P, K> {
        static ATTRIBUTE: string;
        static PEHKUI: string;
    }
    export interface $NetHandler$ScalerInterface<P, K> {
        toKey(arg0: $ScalingOptions_): K;
        setScale(arg0: K, arg1: P, arg2: number): void;
        getMethodName(): string;
        get methodName(): string;
    }
    export class $NetH$ServerNetH {
    }
    export interface $NetH$ServerNetH extends $NetH {
        cpm$getEncodedModelData(): $PlayerData;
        cpm$setEncodedModelData(arg0: $PlayerData): void;
    }
    export class $IPacket {
    }
    export interface $IPacket {
        handleRaw(arg0: $NetHandler<never, never, never>, arg1: $NetH): void;
        handle(arg0: $NetHandler<never, never, never>, arg1: $NetH): void;
        write(arg0: $IOHelper): void;
        read(arg0: $IOHelper): void;
    }
    export class $NetHandler<RL, P, NET> {
        onEvent(arg0: P, arg1: $ModelEventType_): void;
        setExecutor(arg0: $Supplier_<$Executor>): void;
        setExecutor(arg0: $Function_<NET, $Executor>): void;
        onJump(arg0: P): void;
        sendChat(arg0: P, arg1: $IText): void;
        getOnlinePlayers(): $List<P>;
        sendPacketToServer(arg0: $IPacket): void;
        getPlayerByUUID(arg0: $UUID_): P;
        getPlayer(arg0: $NetH$ServerNetH): P;
        onJoin(arg0: P): void;
        onLogOut(): void;
        updatePlayer(arg0: P, arg1: $ServerAnimationState): void;
        playAnimation(arg0: P, arg1: string, arg2: number): void;
        getID(arg0: P): string;
        tick(): void;
        setScale(arg0: $ScaleData): void;
        addScaler<K>(arg0: $NetHandler$ScalerInterface<P, K>): void;
        getSNetH(arg0: P): $NetH$ServerNetH;
        sendPlayerData(arg0: P, arg1: P): void;
        getPacketKey(arg0: $Class<$IPacket>): RL;
        setGetOnlinePlayers(arg0: $Supplier_<$Collection<P>>): void;
        setAllowPackets(arg0: $Predicate_<NET>): void;
        hasModClient(): boolean;
        sendPacketTo(arg0: $NetH$ServerNetH, arg1: $IPacket): void;
        sendPacketToTracking(arg0: P, arg1: $IPacket): void;
        getClientNet(): NET;
        hasServerCap(arg0: $ServerCaps_): boolean;
        getPlayerById(arg0: number): P;
        setGetPlayerUUID(arg0: $Function_<P, $UUID>): void;
        setSendPacketServer<PB, C>(arg0: $Function_<number[], PB>, arg1: $TriConsumer_<NET, RL, PB>, arg2: $Function_<P, $Collection<C>>, arg3: $Function_<C, P>): void;
        setFindTracking(arg0: $BiConsumer_<P, $Consumer<P>>): void;
        setSendChat(arg0: $BiConsumer_<P, $IText>): void;
        setGetPlayer(arg0: $Function_<NET, P>): void;
        setGetPlayerId(arg0: $ToIntFunction_<P>): void;
        setKickPlayer(arg0: $BiConsumer_<P, $IText>): void;
        receiveServer(arg0: RL, arg1: $InputStream, arg2: $NetH$ServerNetH): void;
        receiveClient(arg0: RL, arg1: $InputStream, arg2: $NetH): void;
        handleServerCaps(arg0: $NBTTagCompound): void;
        sendSkinData(): void;
        sendEventSubs(arg0: $ModelDefinition): void;
        sendPluginMessage(arg0: string, arg1: $NBTTagCompound, arg2: number): boolean;
        enableInvisGlow(): boolean;
        getAnimationPlaying(arg0: P, arg1: string): number;
        requestPlayerState(arg0: $UUID_): void;
        requestPlayerData(arg0: $UUID_): void;
        getRecommendedSettingChanges(): $List<$ConfigChangeRequest<never, never>>;
        setSendPacketDirect(arg0: $TriConsumer_<NET, RL, number[]>, arg1: $TriConsumer_<P, RL, number[]>): void;
        setSendPacketDirect<PB>(arg0: $Function_<number[], PB>, arg1: $TriConsumer_<NET, RL, PB>, arg2: $TriConsumer_<P, RL, PB>): void;
        forEachTracking(arg0: P, arg1: $Consumer_<P>): void;
        registerOut<E extends $Throwable>(arg0: $ThrowingConsumer_<RL, E>): void;
        registerIn<E extends $Throwable>(arg0: $ThrowingConsumer_<RL, E>): void;
        getScaleSetters(): $Map<$ScalingOptions, $Map<string, $NetHandler$Scaler<P>>>;
        setScalingWarning(): void;
        hasScalingWarning(): boolean;
        onRespawn(arg0: P): void;
        setSendPacketClient(arg0: $TriConsumer_<NET, RL, number[]>): void;
        setSendPacketClient<PB>(arg0: $Function_<number[], PB>, arg1: $TriConsumer_<NET, RL, PB>): void;
        setPlayerToLoader(arg0: $Function_<P, $Object>): void;
        setGetPlayerById(arg0: $IntFunction_<P>): void;
        setGetClient(arg0: $Supplier_<P>): void;
        setGetNet(arg0: $Function_<P, NET>): void;
        setDisplayText(arg0: $Consumer_<$IText>): void;
        setGetPlayerAnimGetters(arg0: $BiConsumer_<P, $ServerAnimationState>): void;
        displayText(arg0: $IText): void;
        getLoaderId(arg0: P): $Object;
        getPlayerId(arg0: P): number;
        setSkin(arg0: P, arg1: string, arg2: boolean, arg3: boolean): void;
        setSkin(arg0: P, arg1: number[], arg2: boolean): void;
        isSupported(arg0: $ScalingOptions_): boolean;
        execute(arg0: $NetH, arg1: $Runnable_): void;
        static SET_SKIN: string;
        static SET_SCALE: string;
        static HELLO: string;
        static GESTURE: string;
        static RECOMMEND_SAFETY: string;
        static RECEIVE_EVENT: string;
        static PLUGIN: string;
        static GET_SKIN: string;
        static SERVER_ANIMATION: string;
        static SUBSCRIBE_EVENT: string;
        static REQUEST_PLAYER: string;
        constructor(arg0: $BiFunction_<string, string, RL>);
        get onlinePlayers(): $List<P>;
        set scale(value: $ScaleData);
        set allowPackets(value: $Predicate_<NET>);
        get clientNet(): NET;
        set getPlayerUUID(value: $Function_<P, $UUID>);
        set findTracking(value: $BiConsumer_<P, $Consumer<P>>);
        set kickPlayer(value: $BiConsumer_<P, $IText>);
        get recommendedSettingChanges(): $List<$ConfigChangeRequest<never, never>>;
        get scaleSetters(): $Map<$ScalingOptions, $Map<string, $NetHandler$Scaler<P>>>;
        set playerToLoader(value: $Function_<P, $Object>);
        set getClient(value: $Supplier_<P>);
        set getNet(value: $Function_<P, NET>);
        set getPlayerAnimGetters(value: $BiConsumer_<P, $ServerAnimationState>);
    }
    export class $NetHandler$Scaler<P> {
    }
    export interface $NetHandler$Scaler<P> {
        applyScaling(arg0: P, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $NetHandler$Scaler}.
     */
    export type $NetHandler$Scaler_<P> = ((arg0: P, arg1: number) => void);
}
