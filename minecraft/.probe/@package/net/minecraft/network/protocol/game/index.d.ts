import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $RecipeHolder, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $EntityType_, $EquipmentSlot, $LivingEntity, $Mob, $RelativeMovement_, $RelativeMovement, $Entity, $EquipmentSlot_, $EntityType, $ExperienceOrb } from "@package/net/minecraft/world/entity";
import { $ParticleOptions, $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $RootCommandNode } from "@package/com/mojang/brigadier/tree";
import { $NumberFormat } from "@package/net/minecraft/network/chat/numbers";
import { $Bee } from "@package/net/minecraft/world/entity/animal";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $AdvancementHolder_, $AdvancementHolder, $AdvancementProgress } from "@package/net/minecraft/advancements";
import { $InteractionHand_, $Difficulty_, $BossEvent, $BossEvent$BossBarColor_, $TickRateManager, $BossEvent$BossBarOverlay_, $InteractionHand, $Difficulty } from "@package/net/minecraft/world";
import { $ChatFormatting } from "@package/net/minecraft";
import { $SoundEvent, $SoundSource, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $IServerGamePacketListenerExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $RegistryFriendlyByteBuf, $ServerboundPacketListener, $ProtocolInfo$Unbound, $FriendlyByteBuf, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ClickType_, $RecipeBookType, $RecipeBookType_, $ClickType, $MenuType_, $MenuType } from "@package/net/minecraft/world/inventory";
import { $StructureStart } from "@package/net/minecraft/world/level/levelgen/structure";
import { $MerchantOffers } from "@package/net/minecraft/world/item/trading";
import { $ShortSet } from "@package/it/unimi/dsi/fastutil/shorts";
import { $ItemStack_, $ItemStack, $Item, $Item_ } from "@package/net/minecraft/world/item";
import { $SignedMessageBody$Packed_, $RemoteChatSession$Data, $MessageSignature$Packed_, $ChatType$Bound_, $MessageSignature_, $RemoteChatSession$Data_, $FilterMask, $LastSeenMessages$Update_, $Component_, $ChatType$Bound, $SignedMessageBody$Packed, $MessageSignature, $MessageSignature$Packed, $Component, $LastSeenMessages$Update } from "@package/net/minecraft/network/chat";
import { $Breeze } from "@package/net/minecraft/world/entity/monster/breeze";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Abilities } from "@package/net/minecraft/world/entity/player";
import { $LevelChunkSection, $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $ServerboundMovePlayerPacketExtension } from "@package/dev/ryanhcode/sable/mixinterface/entity/entities_stick_sublevels/player";
import { $Instant } from "@package/java/time";
import { $CommandBuildContext, $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $RemoteDebugSampleType_, $RemoteDebugSampleType } from "@package/net/minecraft/util/debugchart";
import { $StructureMode, $StructureMode_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $Mirror_, $Block, $Rotation_, $Mirror, $Block_, $Rotation } from "@package/net/minecraft/world/level/block";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $Vec3_, $BlockHitResult, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Stat, $RecipeBookSettings, $Stat_ } from "@package/net/minecraft/stats";
import { $IWorldMapSMultiBlockChangePacket } from "@package/xaero/map/core";
import { $ObjectiveCriteria$RenderType } from "@package/net/minecraft/world/scores/criteria";
import { $GameEventListener, $GameEvent } from "@package/net/minecraft/world/level/gameevent";
import { $Attribute, $AttributeModifier_, $AttributeModifier, $AttributeInstance } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID_, $Set_, $List, $Collection_, $List_, $UUID, $BitSet, $Optional, $Map, $EnumSet, $Map_, $Collection, $Set } from "@package/java/util";
import { $ClientCommonPacketListener, $ServerCommonPacketListener } from "@package/net/minecraft/network/protocol/common";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $BiFunction_, $BiConsumer_, $Consumer } from "@package/java/util/function";
import { $GlobalPos, $Direction_, $NonNullList, $Direction, $Holder_, $BlockPos, $BlockPos_, $Vec3i, $Holder, $GlobalPos_, $RegistryAccess, $SectionPos } from "@package/net/minecraft/core";
import { $ServerEntity, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $Path } from "@package/net/minecraft/world/level/pathfinder";
import { $Suggestions } from "@package/com/mojang/brigadier/suggestion";
import { $PacketType, $BundlePacket, $BundleDelimiterPacket, $Packet } from "@package/net/minecraft/network/protocol";
import { $MapId_, $MapDecoration_, $MapItemSavedData$MapPatch_, $MapItemSavedData$MapPatch, $MapDecoration, $MapId, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Enum, $Iterable_, $Exception, $Record } from "@package/java/lang";
import { $Int2ObjectMap, $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $ChunkPos, $Level_, $GameType, $WorldGenLevel, $Level, $BlockGetter, $BaseCommandBlock, $Explosion$BlockInteraction_, $GameType_, $Explosion$BlockInteraction } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $ArgumentSignatures, $ArgumentSignatures_, $EntityAnchorArgument$Anchor_, $EntityAnchorArgument$Anchor } from "@package/net/minecraft/commands/arguments";
import { $Raid } from "@package/net/minecraft/world/entity/raid";
import { $PacketActuallyInSubLevelExtension } from "@package/dev/ryanhcode/sable/mixinterface/entity/entities_stick_sublevels/packet_mixin";
import { $ClientPongPacketListener, $ServerPingPacketListener } from "@package/net/minecraft/network/protocol/ping";
import { $IXaeroMinimapSMultiBlockChangePacket } from "@package/xaero/common/core";
import { $SynchedEntityData$DataValue_, $SynchedEntityData$DataValue } from "@package/net/minecraft/network/syncher";
import { $IMapDataPacketExtension } from "@package/net/mehvahdjukaar/moonlight/core/misc";
import { $ResourceKey, $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $DisplaySlot_, $PlayerTeam, $Objective, $DisplaySlot } from "@package/net/minecraft/world/scores";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntityType_, $CommandBlockEntity$Mode_, $BeehiveBlockEntity, $BlockEntityType, $StructureBlockEntity$UpdateType_, $BlockEntity, $JigsawBlockEntity$JointType_, $StructureBlockEntity$UpdateType, $JigsawBlockEntity$JointType, $CommandBlockEntity$Mode } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource, $DamageSource_, $DamageType, $CombatTracker } from "@package/net/minecraft/world/damagesource";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network/protocol/game" {
    export class $ClientboundSetBorderSizePacket implements $Packet<$ClientGamePacketListener> {
        getSize(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetBorderSizePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetBorderSizePacket>;
        constructor(arg0: $WorldBorder);
        get size(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerPositionPacket implements $Packet<$ClientGamePacketListener> {
        getZ(): number;
        getXRot(): number;
        getYRot(): number;
        getY(): number;
        getX(): number;
        getRelativeArguments(): $Set<$RelativeMovement>;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundPlayerPositionPacket>;
        getId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlayerPositionPacket>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Set_<$RelativeMovement_>, arg6: number);
        get z(): number;
        get XRot(): number;
        get YRot(): number;
        get y(): number;
        get x(): number;
        get relativeArguments(): $Set<$RelativeMovement>;
        get id(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundCommandSuggestionPacket implements $Packet<$ServerGamePacketListener> {
        getCommand(): string;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundCommandSuggestionPacket>;
        getId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundCommandSuggestionPacket>;
        constructor(arg0: number, arg1: string);
        get command(): string;
        get id(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSignUpdatePacket implements $Packet<$ServerGamePacketListener> {
        getPos(): $BlockPos;
        isFrontText(): boolean;
        handle(arg0: $ServerGamePacketListener): void;
        getLines(): string[];
        type(): $PacketType<$ServerboundSignUpdatePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSignUpdatePacket>;
        constructor(arg0: $BlockPos_, arg1: boolean, arg2: string, arg3: string, arg4: string, arg5: string);
        get pos(): $BlockPos;
        get frontText(): boolean;
        get lines(): string[];
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBossEventPacket implements $Packet<$ClientGamePacketListener> {
        static createRemovePacket(arg0: $UUID_): $ClientboundBossEventPacket;
        static createUpdateProgressPacket(arg0: $BossEvent): $ClientboundBossEventPacket;
        static createUpdateStylePacket(arg0: $BossEvent): $ClientboundBossEventPacket;
        static createUpdateNamePacket(arg0: $BossEvent): $ClientboundBossEventPacket;
        static createAddPacket(arg0: $BossEvent): $ClientboundBossEventPacket;
        static createUpdatePropertiesPacket(arg0: $BossEvent): $ClientboundBossEventPacket;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundBossEventPacket>;
        dispatch(arg0: $ClientboundBossEventPacket$Handler): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundBossEventPacket>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundRotateHeadPacket implements $Packet<$ClientGamePacketListener> {
        getYHeadRot(): number;
        getEntity(arg0: $Level_): $Entity;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundRotateHeadPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundRotateHeadPacket>;
        constructor(arg0: $Entity, arg1: number);
        get YHeadRot(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundInitializeBorderPacket implements $Packet<$ClientGamePacketListener> {
        getNewSize(): number;
        getWarningTime(): number;
        getWarningBlocks(): number;
        getOldSize(): number;
        getNewCenterX(): number;
        getNewCenterZ(): number;
        getLerpTime(): number;
        getNewAbsoluteMaxSize(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundInitializeBorderPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundInitializeBorderPacket>;
        constructor(arg0: $WorldBorder);
        get newSize(): number;
        get warningTime(): number;
        get warningBlocks(): number;
        get oldSize(): number;
        get newCenterX(): number;
        get newCenterZ(): number;
        get lerpTime(): number;
        get newAbsoluteMaxSize(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundChunkBatchFinishedPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        handle(arg0: $ClientGamePacketListener): void;
        batchSize(): number;
        type(): $PacketType<$ClientboundChunkBatchFinishedPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundChunkBatchFinishedPacket>;
        constructor(arg0: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundChunkBatchFinishedPacket}.
     */
    export type $ClientboundChunkBatchFinishedPacket_ = { batchSize?: number,  } | [batchSize?: number, ];
    export class $ServerboundSetStructureBlockPacket implements $Packet<$ServerGamePacketListener> {
        handler$clo000$integrated_api$readInts(buf: $FriendlyByteBuf, ci: $CallbackInfo): void;
        handler$clo000$integrated_api$writeInts(buf: $FriendlyByteBuf, ci: $CallbackInfo): void;
        getRotation(): $Rotation;
        getPos(): $BlockPos;
        isIgnoreEntities(): boolean;
        getIntegrity(): number;
        getMode(): $StructureMode;
        getSeed(): number;
        isShowAir(): boolean;
        isShowBoundingBox(): boolean;
        getUpdateType(): $StructureBlockEntity$UpdateType;
        getSize(): $Vec3i;
        handle(arg0: $ServerGamePacketListener): void;
        getOffset(): $BlockPos;
        getData(): string;
        getMirror(): $Mirror;
        getName(): string;
        type(): $PacketType<$ServerboundSetStructureBlockPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSetStructureBlockPacket>;
        constructor(arg0: $BlockPos_, arg1: $StructureBlockEntity$UpdateType_, arg2: $StructureMode_, arg3: string, arg4: $BlockPos_, arg5: $Vec3i, arg6: $Mirror_, arg7: $Rotation_, arg8: string, arg9: boolean, arg10: boolean, arg11: boolean, arg12: number, arg13: number);
        get rotation(): $Rotation;
        get pos(): $BlockPos;
        get ignoreEntities(): boolean;
        get integrity(): number;
        get mode(): $StructureMode;
        get seed(): number;
        get showAir(): boolean;
        get showBoundingBox(): boolean;
        get updateType(): $StructureBlockEntity$UpdateType;
        get size(): $Vec3i;
        get offset(): $BlockPos;
        get data(): string;
        get mirror(): $Mirror;
        get name(): string;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBlockUpdatePacket implements $Packet<$ClientGamePacketListener> {
        getBlockState(): $BlockState;
        getPos(): $BlockPos;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundBlockUpdatePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundBlockUpdatePacket>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        constructor(arg0: $BlockGetter, arg1: $BlockPos_);
        get blockState(): $BlockState;
        get pos(): $BlockPos;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetObjectivePacket implements $Packet<$ClientGamePacketListener> {
        getRenderType(): $ObjectiveCriteria$RenderType;
        getDisplayName(): $Component;
        getNumberFormat(): ($NumberFormat) | undefined;
        getObjectiveName(): string;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetObjectivePacket>;
        getMethod(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static METHOD_ADD: number;
        static METHOD_REMOVE: number;
        static METHOD_CHANGE: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetObjectivePacket>;
        constructor(arg0: $Objective, arg1: number);
        get renderType(): $ObjectiveCriteria$RenderType;
        get displayName(): $Component;
        get numberFormat(): ($NumberFormat) | undefined;
        get objectiveName(): string;
        get method(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundJigsawGeneratePacket implements $Packet<$ServerGamePacketListener> {
        getPos(): $BlockPos;
        levels(): number;
        keepJigsaws(): boolean;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundJigsawGeneratePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundJigsawGeneratePacket>;
        constructor(arg0: $BlockPos_, arg1: number, arg2: boolean);
        get pos(): $BlockPos;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundMovePlayerPacket implements $Packet<$ServerGamePacketListener>, $ServerboundMovePlayerPacketExtension {
        getZ(arg0: number): number;
        getXRot(arg0: number): number;
        getYRot(arg0: number): number;
        hasPosition(): boolean;
        getY(arg0: number): number;
        getX(arg0: number): number;
        isOnGround(): boolean;
        sable$handle(arg0: $ServerPlayer): void;
        hasRotation(): boolean;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundMovePlayerPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        get onGround(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerInfoUpdatePacket$Action$Writer {
    }
    export interface $ClientboundPlayerInfoUpdatePacket$Action$Writer {
        write(arg0: $RegistryFriendlyByteBuf, arg1: $ClientboundPlayerInfoUpdatePacket$Entry_): void;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundPlayerInfoUpdatePacket$Action$Writer}.
     */
    export type $ClientboundPlayerInfoUpdatePacket$Action$Writer_ = ((arg0: $RegistryFriendlyByteBuf, arg1: $ClientboundPlayerInfoUpdatePacket$Entry) => void);
    export class $ClientboundLightUpdatePacketData {
        getSkyYMask(): $BitSet;
        getEmptySkyYMask(): $BitSet;
        getSkyUpdates(): $List<number[]>;
        getBlockYMask(): $BitSet;
        getEmptyBlockYMask(): $BitSet;
        getBlockUpdates(): $List<number[]>;
        write(arg0: $FriendlyByteBuf): void;
        constructor(arg0: $FriendlyByteBuf, arg1: number, arg2: number);
        constructor(arg0: $ChunkPos, arg1: $LevelLightEngine, arg2: $BitSet, arg3: $BitSet);
        get skyYMask(): $BitSet;
        get emptySkyYMask(): $BitSet;
        get skyUpdates(): $List<number[]>;
        get blockYMask(): $BitSet;
        get emptyBlockYMask(): $BitSet;
        get blockUpdates(): $List<number[]>;
    }
    export class $ClientboundSetDisplayObjectivePacket implements $Packet<$ClientGamePacketListener> {
        getObjectiveName(): string;
        getSlot(): $DisplaySlot;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetDisplayObjectivePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetDisplayObjectivePacket>;
        constructor(arg0: $DisplaySlot_, arg1: $Objective);
        get objectiveName(): string;
        get slot(): $DisplaySlot;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundClientCommandPacket implements $Packet<$ServerGamePacketListener> {
        handle(arg0: $ServerGamePacketListener): void;
        getAction(): $ServerboundClientCommandPacket$Action;
        type(): $PacketType<$ServerboundClientCommandPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundClientCommandPacket>;
        constructor(arg0: $ServerboundClientCommandPacket$Action_);
        get action(): $ServerboundClientCommandPacket$Action;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetTitleTextPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        text(): $Component;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetTitleTextPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetTitleTextPacket>;
        constructor(arg0: $Component_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundSetTitleTextPacket}.
     */
    export type $ClientboundSetTitleTextPacket_ = { text?: $Component_,  } | [text?: $Component_, ];
    export class $ServerboundChatAckPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundChatAckPacket>;
        offset(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChatAckPacket>;
        constructor(arg0: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundChatAckPacket}.
     */
    export type $ServerboundChatAckPacket_ = { offset?: number,  } | [offset?: number, ];
    export class $ClientboundOpenBookPacket implements $Packet<$ClientGamePacketListener> {
        getHand(): $InteractionHand;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundOpenBookPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundOpenBookPacket>;
        constructor(arg0: $InteractionHand_);
        get hand(): $InteractionHand;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundGameEventPacket implements $Packet<$ClientGamePacketListener> {
        getParam(): number;
        getEvent(): $ClientboundGameEventPacket$Type;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundGameEventPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static DEMO_PARAM_HINT_4: number;
        static DEMO_PARAM_HINT_3: number;
        static STOP_RAINING: $ClientboundGameEventPacket$Type;
        static DEMO_PARAM_HINT_2: number;
        static START_RAINING: $ClientboundGameEventPacket$Type;
        static LIMITED_CRAFTING: $ClientboundGameEventPacket$Type;
        static PUFFER_FISH_STING: $ClientboundGameEventPacket$Type;
        static CHANGE_GAME_MODE: $ClientboundGameEventPacket$Type;
        static DEMO_PARAM_HINT_1: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundGameEventPacket>;
        static THUNDER_LEVEL_CHANGE: $ClientboundGameEventPacket$Type;
        static DEMO_PARAM_INTRO: number;
        static LEVEL_CHUNKS_LOAD_START: $ClientboundGameEventPacket$Type;
        static NO_RESPAWN_BLOCK_AVAILABLE: $ClientboundGameEventPacket$Type;
        static DEMO_EVENT: $ClientboundGameEventPacket$Type;
        static WIN_GAME: $ClientboundGameEventPacket$Type;
        static IMMEDIATE_RESPAWN: $ClientboundGameEventPacket$Type;
        static ARROW_HIT_PLAYER: $ClientboundGameEventPacket$Type;
        static GUARDIAN_ELDER_EFFECT: $ClientboundGameEventPacket$Type;
        static RAIN_LEVEL_CHANGE: $ClientboundGameEventPacket$Type;
        constructor(arg0: $ClientboundGameEventPacket$Type, arg1: number);
        get param(): number;
        get event(): $ClientboundGameEventPacket$Type;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundUseItemOnPacket implements $Packet<$ServerGamePacketListener> {
        getHand(): $InteractionHand;
        getHitResult(): $BlockHitResult;
        getSequence(): number;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundUseItemOnPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundUseItemOnPacket>;
        constructor(arg0: $InteractionHand_, arg1: $BlockHitResult, arg2: number);
        get hand(): $InteractionHand;
        get hitResult(): $BlockHitResult;
        get sequence(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetCameraPacket implements $Packet<$ClientGamePacketListener> {
        getEntity(arg0: $Level_): $Entity;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetCameraPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetCameraPacket>;
        constructor(arg0: $Entity);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBossEventPacket$AddOperation implements $ClientboundBossEventPacket$Operation {
    }
    export class $ClientboundSetChunkCacheCenterPacket implements $Packet<$ClientGamePacketListener> {
        getZ(): number;
        getX(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetChunkCacheCenterPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetChunkCacheCenterPacket>;
        constructor(arg0: number, arg1: number);
        get z(): number;
        get x(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundInteractPacket$Action {
    }
    export interface $ServerboundInteractPacket$Action {
    }
    export class $ServerboundChatCommandSignedPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        salt(): number;
        timeStamp(): $Instant;
        lastSeenMessages(): $LastSeenMessages$Update;
        argumentSignatures(): $ArgumentSignatures;
        handle(arg0: $ServerGamePacketListener): void;
        command(): string;
        type(): $PacketType<$ServerboundChatCommandSignedPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChatCommandSignedPacket>;
        constructor(arg0: string, arg1: $Instant, arg2: number, arg3: $ArgumentSignatures_, arg4: $LastSeenMessages$Update_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundChatCommandSignedPacket}.
     */
    export type $ServerboundChatCommandSignedPacket_ = { timeStamp?: $Instant, lastSeenMessages?: $LastSeenMessages$Update_, argumentSignatures?: $ArgumentSignatures_, salt?: number, command?: string,  } | [timeStamp?: $Instant, lastSeenMessages?: $LastSeenMessages$Update_, argumentSignatures?: $ArgumentSignatures_, salt?: number, command?: string, ];
    export class $ClientboundCommandsPacket$NodeStub {
    }
    export interface $ClientboundCommandsPacket$NodeStub {
    }
    export class $ClientboundUpdateAttributesPacket$AttributeSnapshot extends $Record {
        attribute(): $Holder<$Attribute>;
        modifiers(): $Collection<$AttributeModifier>;
        base(): number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundUpdateAttributesPacket$AttributeSnapshot>;
        static MODIFIER_STREAM_CODEC: $StreamCodec<$ByteBuf, $AttributeModifier>;
        constructor(arg0: $Holder_<$Attribute>, arg1: number, arg2: $Collection_<$AttributeModifier_>);
    }
    /**
     * Values that may be interpreted as {@link $ClientboundUpdateAttributesPacket$AttributeSnapshot}.
     */
    export type $ClientboundUpdateAttributesPacket$AttributeSnapshot_ = { base?: number, modifiers?: $Collection_<$AttributeModifier_>, attribute?: $Holder_<$Attribute>,  } | [base?: number, modifiers?: $Collection_<$AttributeModifier_>, attribute?: $Holder_<$Attribute>, ];
    export class $ClientboundProjectilePowerPacket implements $Packet<$ClientGamePacketListener> {
        getAccelerationPower(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundProjectilePowerPacket>;
        getId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundProjectilePowerPacket>;
        constructor(arg0: number, arg1: number);
        get accelerationPower(): number;
        get id(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSwingPacket implements $Packet<$ServerGamePacketListener> {
        getHand(): $InteractionHand;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundSwingPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSwingPacket>;
        constructor(arg0: $InteractionHand_);
        get hand(): $InteractionHand;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundOpenScreenPacket implements $Packet<$ClientGamePacketListener> {
        getContainerId(): number;
        handle(arg0: $ClientGamePacketListener): void;
        getTitle(): $Component;
        type(): $PacketType<$ClientboundOpenScreenPacket>;
        getType(): $MenuType<never>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundOpenScreenPacket>;
        constructor(arg0: number, arg1: $MenuType_<never>, arg2: $Component_);
        get containerId(): number;
        get title(): $Component;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSelectAdvancementsTabPacket implements $Packet<$ClientGamePacketListener> {
        getTab(): $ResourceLocation;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSelectAdvancementsTabPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSelectAdvancementsTabPacket>;
        constructor(arg0: $ResourceLocation_);
        get tab(): $ResourceLocation;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundResetScorePacket extends $Record implements $Packet<$ClientGamePacketListener> {
        objectiveName(): string;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundResetScorePacket>;
        owner(): string;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundResetScorePacket>;
        constructor(arg0: string, arg1: string);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundResetScorePacket}.
     */
    export type $ClientboundResetScorePacket_ = { owner?: string, objectiveName?: string,  } | [owner?: string, objectiveName?: string, ];
    export class $ClientboundMapItemDataPacket extends $Record implements $Packet<$ClientGamePacketListener>, $IMapDataPacketExtension {
        moonlight$getCustomDecorations(): $Optional<any>;
        moonlight$setCustomDecorations(deco: $Optional<any>): void;
        moonlight$setDirtyCustomData(tag: $Optional<any>): void;
        moonlight$getDimension(): $ResourceLocation;
        moonlight$setDimension(dim: $ResourceLocation_): void;
        moonlight$getMapCenterX(): number;
        moonlight$getMapCenterZ(): number;
        moonlight$setMapCenter(x: number, z: number): void;
        decorations(): ($List<$MapDecoration>) | undefined;
        locked(): boolean;
        mapId(): $MapId;
        applyToMap(arg0: $MapItemSavedData): void;
        moonlight$getDirtyCustomData(): $Optional<any>;
        colorPatch(): ($MapItemSavedData$MapPatch) | undefined;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundMapItemDataPacket>;
        scale(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundMapItemDataPacket>;
        constructor(arg0: $MapId_, arg1: number, arg2: boolean, arg3: ($List_<$MapDecoration_>) | undefined, arg4: ($MapItemSavedData$MapPatch_) | undefined);
        constructor(arg0: $MapId_, arg1: number, arg2: boolean, arg3: $Collection_<$MapDecoration_>, arg4: $MapItemSavedData$MapPatch_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundMapItemDataPacket}.
     */
    export type $ClientboundMapItemDataPacket_ = { mapId?: $MapId_, locked?: boolean, decorations?: ($List_<$MapDecoration_>) | undefined, colorPatch?: ($MapItemSavedData$MapPatch_) | undefined, scale?: number,  } | [mapId?: $MapId_, locked?: boolean, decorations?: ($List_<$MapDecoration_>) | undefined, colorPatch?: ($MapItemSavedData$MapPatch_) | undefined, scale?: number, ];
    export class $VecDeltaCodec {
        getBase(): $Vec3;
        encodeX(arg0: $Vec3_): number;
        encodeY(arg0: $Vec3_): number;
        encodeZ(arg0: $Vec3_): number;
        delta(arg0: $Vec3_): $Vec3;
        setBase(arg0: $Vec3_): void;
        decode(arg0: number, arg1: number, arg2: number): $Vec3;
        constructor();
    }
    export class $ServerboundPlayerCommandPacket implements $Packet<$ServerGamePacketListener> {
        handle(arg0: $ServerGamePacketListener): void;
        getData(): number;
        getAction(): $ServerboundPlayerCommandPacket$Action;
        type(): $PacketType<$ServerboundPlayerCommandPacket>;
        getId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPlayerCommandPacket>;
        constructor(arg0: $Entity, arg1: $ServerboundPlayerCommandPacket$Action_);
        constructor(arg0: $Entity, arg1: $ServerboundPlayerCommandPacket$Action_, arg2: number);
        get data(): number;
        get action(): $ServerboundPlayerCommandPacket$Action;
        get id(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundStartConfigurationPacket implements $Packet<$ClientGamePacketListener> {
        isTerminal(): boolean;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundStartConfigurationPacket>;
        isSkippable(): boolean;
        static INSTANCE: $ClientboundStartConfigurationPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundStartConfigurationPacket>;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientboundForgetLevelChunkPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        pos(): $ChunkPos;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundForgetLevelChunkPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundForgetLevelChunkPacket>;
        constructor(arg0: $ChunkPos);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundForgetLevelChunkPacket}.
     */
    export type $ClientboundForgetLevelChunkPacket_ = { pos?: $ChunkPos,  } | [pos?: $ChunkPos, ];
    export class $ClientboundSetBorderWarningDistancePacket implements $Packet<$ClientGamePacketListener> {
        getWarningBlocks(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetBorderWarningDistancePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetBorderWarningDistancePacket>;
        constructor(arg0: $WorldBorder);
        get warningBlocks(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundTickingStatePacket extends $Record implements $Packet<$ClientGamePacketListener> {
        tickRate(): number;
        handle(arg0: $ClientGamePacketListener): void;
        isFrozen(): boolean;
        type(): $PacketType<$ClientboundTickingStatePacket>;
        static from(arg0: $TickRateManager): $ClientboundTickingStatePacket;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundTickingStatePacket>;
        constructor(arg0: number, arg1: boolean);
        get frozen(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundTickingStatePacket}.
     */
    export type $ClientboundTickingStatePacket_ = { tickRate?: number, isFrozen?: boolean,  } | [tickRate?: number, isFrozen?: boolean, ];
    export class $ClientboundSetCarriedItemPacket implements $Packet<$ClientGamePacketListener> {
        getSlot(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetCarriedItemPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetCarriedItemPacket>;
        constructor(arg0: number);
        get slot(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundChunksBiomesPacket$ChunkBiomeData extends $Record {
        static extractChunkData(arg0: $FriendlyByteBuf, arg1: $LevelChunk): void;
        getReadBuffer(): $FriendlyByteBuf;
        pos(): $ChunkPos;
        buffer(): number[];
        write(arg0: $FriendlyByteBuf): void;
        constructor(arg0: $LevelChunk);
        constructor(arg0: $ChunkPos, arg1: number[]);
        constructor(arg0: $FriendlyByteBuf);
        get readBuffer(): $FriendlyByteBuf;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundChunksBiomesPacket$ChunkBiomeData}.
     */
    export type $ClientboundChunksBiomesPacket$ChunkBiomeData_ = { buffer?: number[], pos?: $ChunkPos,  } | [buffer?: number[], pos?: $ChunkPos, ];
    export class $ClientboundPlayerInfoRemovePacket extends $Record implements $Packet<$ClientGamePacketListener> {
        profileIds(): $List<$UUID>;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundPlayerInfoRemovePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlayerInfoRemovePacket>;
        constructor(arg0: $List_<$UUID_>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundPlayerInfoRemovePacket}.
     */
    export type $ClientboundPlayerInfoRemovePacket_ = { profileIds?: $List_<$UUID_>,  } | [profileIds?: $List_<$UUID_>, ];
    export class $ClientboundSetActionBarTextPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        text(): $Component;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetActionBarTextPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetActionBarTextPacket>;
        constructor(arg0: $Component_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundSetActionBarTextPacket}.
     */
    export type $ClientboundSetActionBarTextPacket_ = { text?: $Component_,  } | [text?: $Component_, ];
    export class $GameProtocols {
        static CLIENTBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ClientGamePacketListener, $RegistryFriendlyByteBuf>;
        static SERVERBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ServerGamePacketListener, $RegistryFriendlyByteBuf>;
        constructor();
    }
    export class $ServerboundRenameItemPacket implements $Packet<$ServerGamePacketListener> {
        handle(arg0: $ServerGamePacketListener): void;
        getName(): string;
        type(): $PacketType<$ServerboundRenameItemPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundRenameItemPacket>;
        constructor(arg0: string);
        get name(): string;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundLevelChunkPacketData$BlockEntityTagOutput {
    }
    export interface $ClientboundLevelChunkPacketData$BlockEntityTagOutput {
        accept(arg0: $BlockPos_, arg1: $BlockEntityType_<never>, arg2: $CompoundTag_): void;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundLevelChunkPacketData$BlockEntityTagOutput}.
     */
    export type $ClientboundLevelChunkPacketData$BlockEntityTagOutput_ = ((arg0: $BlockPos, arg1: $BlockEntityType<never>, arg2: $CompoundTag) => void);
    export class $ClientboundSetHealthPacket implements $Packet<$ClientGamePacketListener> {
        getHealth(): number;
        getSaturation(): number;
        getFood(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetHealthPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetHealthPacket>;
        constructor(arg0: number, arg1: number, arg2: number);
        get health(): number;
        get saturation(): number;
        get food(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundMerchantOffersPacket implements $Packet<$ClientGamePacketListener> {
        getOffers(): $MerchantOffers;
        getVillagerXp(): number;
        canRestock(): boolean;
        getContainerId(): number;
        getVillagerLevel(): number;
        showProgress(): boolean;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundMerchantOffersPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundMerchantOffersPacket>;
        constructor(arg0: number, arg1: $MerchantOffers, arg2: number, arg3: number, arg4: boolean, arg5: boolean);
        get offers(): $MerchantOffers;
        get villagerXp(): number;
        get containerId(): number;
        get villagerLevel(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundLevelChunkPacketData {
        static extractChunkData(arg0: $FriendlyByteBuf, arg1: $LevelChunk): void;
        getHeightmaps(): $CompoundTag;
        getReadBuffer(): $FriendlyByteBuf;
        getBlockEntitiesTagsConsumer(arg0: number, arg1: number): $Consumer<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>;
        write(arg0: $RegistryFriendlyByteBuf): void;
        constructor(arg0: $LevelChunk);
        constructor(arg0: $RegistryFriendlyByteBuf, arg1: number, arg2: number);
        get heightmaps(): $CompoundTag;
        get readBuffer(): $FriendlyByteBuf;
    }
    export class $ClientboundSetPlayerTeamPacket$Parameters {
        getColor(): $ChatFormatting;
        getPlayerPrefix(): $Component;
        getPlayerSuffix(): $Component;
        getCollisionRule(): string;
        getDisplayName(): $Component;
        getNametagVisibility(): string;
        getOptions(): number;
        write(arg0: $RegistryFriendlyByteBuf): void;
        constructor(arg0: $PlayerTeam);
        constructor(arg0: $RegistryFriendlyByteBuf);
        get color(): $ChatFormatting;
        get playerPrefix(): $Component;
        get playerSuffix(): $Component;
        get collisionRule(): string;
        get displayName(): $Component;
        get nametagVisibility(): string;
        get options(): number;
    }
    export class $ServerGamePacketListener {
    }
    export interface $ServerGamePacketListener extends $ServerPingPacketListener, $ServerCommonPacketListener, $IServerGamePacketListenerExtension {
        handlePickItem(arg0: $ServerboundPickItemPacket): void;
        handlePlayerInput(arg0: $ServerboundPlayerInputPacket): void;
        handleMoveVehicle(arg0: $ServerboundMoveVehiclePacket): void;
        handleAcceptTeleportPacket(arg0: $ServerboundAcceptTeleportationPacket): void;
        handleRecipeBookSeenRecipePacket(arg0: $ServerboundRecipeBookSeenRecipePacket): void;
        handleRecipeBookChangeSettingsPacket(arg0: $ServerboundRecipeBookChangeSettingsPacket): void;
        handleSeenAdvancements(arg0: $ServerboundSeenAdvancementsPacket): void;
        handleCustomCommandSuggestions(arg0: $ServerboundCommandSuggestionPacket): void;
        handleSetCommandBlock(arg0: $ServerboundSetCommandBlockPacket): void;
        handleSetCommandMinecart(arg0: $ServerboundSetCommandMinecartPacket): void;
        handleRenameItem(arg0: $ServerboundRenameItemPacket): void;
        handleSetBeaconPacket(arg0: $ServerboundSetBeaconPacket_): void;
        handleSetStructureBlock(arg0: $ServerboundSetStructureBlockPacket): void;
        handleSetJigsawBlock(arg0: $ServerboundSetJigsawBlockPacket): void;
        handleJigsawGenerate(arg0: $ServerboundJigsawGeneratePacket): void;
        handleSelectTrade(arg0: $ServerboundSelectTradePacket): void;
        handleEditBook(arg0: $ServerboundEditBookPacket_): void;
        handleEntityTagQuery(arg0: $ServerboundEntityTagQueryPacket): void;
        handleContainerSlotStateChanged(arg0: $ServerboundContainerSlotStateChangedPacket_): void;
        handleBlockEntityTagQuery(arg0: $ServerboundBlockEntityTagQueryPacket): void;
        handleMovePlayer(arg0: $ServerboundMovePlayerPacket): void;
        handlePlayerAction(arg0: $ServerboundPlayerActionPacket): void;
        handleUseItemOn(arg0: $ServerboundUseItemOnPacket): void;
        handleUseItem(arg0: $ServerboundUseItemPacket): void;
        handleTeleportToEntityPacket(arg0: $ServerboundTeleportToEntityPacket): void;
        handlePaddleBoat(arg0: $ServerboundPaddleBoatPacket): void;
        handleSetCarriedItem(arg0: $ServerboundSetCarriedItemPacket): void;
        handleChat(arg0: $ServerboundChatPacket_): void;
        handleChatCommand(arg0: $ServerboundChatCommandPacket_): void;
        handleSignedChatCommand(arg0: $ServerboundChatCommandSignedPacket_): void;
        handleChatAck(arg0: $ServerboundChatAckPacket_): void;
        handleAnimate(arg0: $ServerboundSwingPacket): void;
        handlePlayerCommand(arg0: $ServerboundPlayerCommandPacket): void;
        handleInteract(arg0: $ServerboundInteractPacket): void;
        handleClientCommand(arg0: $ServerboundClientCommandPacket): void;
        handleContainerClose(arg0: $ServerboundContainerClosePacket): void;
        handleContainerClick(arg0: $ServerboundContainerClickPacket): void;
        handlePlaceRecipe(arg0: $ServerboundPlaceRecipePacket): void;
        handleContainerButtonClick(arg0: $ServerboundContainerButtonClickPacket_): void;
        handleSetCreativeModeSlot(arg0: $ServerboundSetCreativeModeSlotPacket_): void;
        handleSignUpdate(arg0: $ServerboundSignUpdatePacket): void;
        handlePlayerAbilities(arg0: $ServerboundPlayerAbilitiesPacket): void;
        handleChangeDifficulty(arg0: $ServerboundChangeDifficultyPacket): void;
        handleLockDifficulty(arg0: $ServerboundLockDifficultyPacket): void;
        handleChatSessionUpdate(arg0: $ServerboundChatSessionUpdatePacket_): void;
        handleConfigurationAcknowledged(arg0: $ServerboundConfigurationAcknowledgedPacket): void;
        handleChunkBatchReceived(arg0: $ServerboundChunkBatchReceivedPacket_): void;
        handleDebugSampleSubscription(arg0: $ServerboundDebugSampleSubscriptionPacket_): void;
        protocol(): $ConnectionProtocol;
    }
    export class $ServerboundInteractPacket$Handler {
    }
    export interface $ServerboundInteractPacket$Handler {
        onInteraction(arg0: $InteractionHand_): void;
        onInteraction(arg0: $InteractionHand_, arg1: $Vec3_): void;
        onAttack(): void;
    }
    export class $ServerboundMovePlayerPacket$StatusOnly extends $ServerboundMovePlayerPacket {
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundMovePlayerPacket$StatusOnly>;
        constructor(arg0: boolean);
    }
    export class $ServerboundMovePlayerPacket$PosRot extends $ServerboundMovePlayerPacket {
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundMovePlayerPacket$PosRot>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean);
    }
    export class $ServerboundClientCommandPacket$Action extends $Enum<$ServerboundClientCommandPacket$Action> {
        static values(): $ServerboundClientCommandPacket$Action[];
        static valueOf(arg0: string): $ServerboundClientCommandPacket$Action;
        static REQUEST_STATS: $ServerboundClientCommandPacket$Action;
        static PERFORM_RESPAWN: $ServerboundClientCommandPacket$Action;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundClientCommandPacket$Action}.
     */
    export type $ServerboundClientCommandPacket$Action_ = "perform_respawn" | "request_stats";
    export class $ServerboundSetCommandBlockPacket implements $Packet<$ServerGamePacketListener> {
        getPos(): $BlockPos;
        getCommand(): string;
        isConditional(): boolean;
        isTrackOutput(): boolean;
        getMode(): $CommandBlockEntity$Mode;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundSetCommandBlockPacket>;
        isAutomatic(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSetCommandBlockPacket>;
        constructor(arg0: $BlockPos_, arg1: string, arg2: $CommandBlockEntity$Mode_, arg3: boolean, arg4: boolean, arg5: boolean);
        get pos(): $BlockPos;
        get command(): string;
        get conditional(): boolean;
        get trackOutput(): boolean;
        get mode(): $CommandBlockEntity$Mode;
        get automatic(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundPlaceRecipePacket implements $Packet<$ServerGamePacketListener> {
        getRecipe(): $ResourceLocation;
        getContainerId(): number;
        isShiftDown(): boolean;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundPlaceRecipePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPlaceRecipePacket>;
        constructor(arg0: number, arg1: $RecipeHolder_<never>, arg2: boolean);
        get recipe(): $ResourceLocation;
        get containerId(): number;
        get shiftDown(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundHurtAnimationPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        yaw(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundHurtAnimationPacket>;
        id(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundHurtAnimationPacket>;
        constructor(arg0: $LivingEntity);
        constructor(arg0: number, arg1: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundHurtAnimationPacket}.
     */
    export type $ClientboundHurtAnimationPacket_ = { id?: number, yaw?: number,  } | [id?: number, yaw?: number, ];
    export class $ServerboundSetCreativeModeSlotPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        itemStack(): $ItemStack;
        slotNum(): number;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundSetCreativeModeSlotPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ServerboundSetCreativeModeSlotPacket>;
        constructor(arg0: number, arg1: $ItemStack_);
        constructor(arg0: number, arg1: $ItemStack_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundSetCreativeModeSlotPacket}.
     */
    export type $ServerboundSetCreativeModeSlotPacket_ = { itemStack?: $ItemStack_, slotNum?: number,  } | [itemStack?: $ItemStack_, slotNum?: number, ];
    export class $ClientboundUpdateMobEffectPacket implements $Packet<$ClientGamePacketListener> {
        getEffect(): $Holder<$MobEffect>;
        getEntityId(): number;
        getEffectDurationTicks(): number;
        getEffectAmplifier(): number;
        isEffectAmbient(): boolean;
        isEffectVisible(): boolean;
        effectShowsIcon(): boolean;
        shouldBlend(): boolean;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundUpdateMobEffectPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundUpdateMobEffectPacket>;
        constructor(arg0: number, arg1: $MobEffectInstance, arg2: boolean);
        get effect(): $Holder<$MobEffect>;
        get entityId(): number;
        get effectDurationTicks(): number;
        get effectAmplifier(): number;
        get effectAmbient(): boolean;
        get effectVisible(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundInteractPacket$ActionType extends $Enum<$ServerboundInteractPacket$ActionType> {
    }
    /**
     * Values that may be interpreted as {@link $ServerboundInteractPacket$ActionType}.
     */
    export type $ServerboundInteractPacket$ActionType_ = "interact" | "attack" | "interact_at";
    export class $ClientboundBossEventPacket$OperationType extends $Enum<$ClientboundBossEventPacket$OperationType> {
    }
    /**
     * Values that may be interpreted as {@link $ClientboundBossEventPacket$OperationType}.
     */
    export type $ClientboundBossEventPacket$OperationType_ = "add" | "remove" | "update_progress" | "update_name" | "update_style" | "update_properties";
    export class $ClientboundHorseScreenOpenPacket implements $Packet<$ClientGamePacketListener> {
        getInventoryColumns(): number;
        getEntityId(): number;
        getContainerId(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundHorseScreenOpenPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundHorseScreenOpenPacket>;
        constructor(arg0: number, arg1: number, arg2: number);
        get inventoryColumns(): number;
        get entityId(): number;
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSetCommandMinecartPacket implements $Packet<$ServerGamePacketListener> {
        getCommandBlock(arg0: $Level_): $BaseCommandBlock;
        getCommand(): string;
        isTrackOutput(): boolean;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundSetCommandMinecartPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSetCommandMinecartPacket>;
        constructor(arg0: number, arg1: string, arg2: boolean);
        get command(): string;
        get trackOutput(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerAbilitiesPacket implements $Packet<$ClientGamePacketListener> {
        isInvulnerable(): boolean;
        getWalkingSpeed(): number;
        getFlyingSpeed(): number;
        isFlying(): boolean;
        canFly(): boolean;
        canInstabuild(): boolean;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundPlayerAbilitiesPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        flyingSpeed: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlayerAbilitiesPacket>;
        constructor(arg0: $Abilities);
        get invulnerable(): boolean;
        get walkingSpeed(): number;
        get flying(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundUpdateRecipesPacket implements $Packet<$ClientGamePacketListener> {
        getRecipes(): $List<$RecipeHolder<never>>;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundUpdateRecipesPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundUpdateRecipesPacket>;
        constructor(arg0: $Collection_<$RecipeHolder_<never>>);
        get recipes(): $List<$RecipeHolder<never>>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundPaddleBoatPacket implements $Packet<$ServerGamePacketListener> {
        handle(arg0: $ServerGamePacketListener): void;
        getLeft(): boolean;
        getRight(): boolean;
        type(): $PacketType<$ServerboundPaddleBoatPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPaddleBoatPacket>;
        constructor(arg0: boolean, arg1: boolean);
        get left(): boolean;
        get right(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBossEventPacket$UpdateProgressOperation extends $Record implements $ClientboundBossEventPacket$Operation {
    }
    /**
     * Values that may be interpreted as {@link $ClientboundBossEventPacket$UpdateProgressOperation}.
     */
    export type $ClientboundBossEventPacket$UpdateProgressOperation_ = { progress?: number,  } | [progress?: number, ];
    export class $ClientboundEntityEventPacket implements $Packet<$ClientGamePacketListener> {
        getEventId(): number;
        getEntity(arg0: $Level_): $Entity;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundEntityEventPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundEntityEventPacket>;
        constructor(arg0: $Entity, arg1: number);
        get eventId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundUpdateAttributesPacket implements $Packet<$ClientGamePacketListener> {
        getEntityId(): number;
        handle(arg0: $ClientGamePacketListener): void;
        getValues(): $List<$ClientboundUpdateAttributesPacket$AttributeSnapshot>;
        type(): $PacketType<$ClientboundUpdateAttributesPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundUpdateAttributesPacket>;
        constructor(arg0: number, arg1: $Collection_<$AttributeInstance>);
        get entityId(): number;
        get values(): $List<$ClientboundUpdateAttributesPacket$AttributeSnapshot>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundCommandsPacket implements $Packet<$ClientGamePacketListener> {
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundCommandsPacket>;
        getRoot(arg0: $CommandBuildContext): $RootCommandNode<$SharedSuggestionProvider>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundCommandsPacket>;
        constructor(arg0: $RootCommandNode<$SharedSuggestionProvider>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundCommandsPacket$LiteralNodeStub implements $ClientboundCommandsPacket$NodeStub {
    }
    export class $ClientboundStopSoundPacket implements $Packet<$ClientGamePacketListener> {
        getSource(): $SoundSource;
        handle(arg0: $ClientGamePacketListener): void;
        getName(): $ResourceLocation;
        type(): $PacketType<$ClientboundStopSoundPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundStopSoundPacket>;
        constructor(arg0: $ResourceLocation_, arg1: $SoundSource_);
        get source(): $SoundSource;
        get name(): $ResourceLocation;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundRecipeBookChangeSettingsPacket implements $Packet<$ServerGamePacketListener> {
        isFiltering(): boolean;
        getBookType(): $RecipeBookType;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundRecipeBookChangeSettingsPacket>;
        isOpen(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundRecipeBookChangeSettingsPacket>;
        constructor(arg0: $RecipeBookType_, arg1: boolean, arg2: boolean);
        get filtering(): boolean;
        get bookType(): $RecipeBookType;
        get open(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundCommandsPacket$Entry {
    }
    export class $ServerboundConfigurationAcknowledgedPacket implements $Packet<$ServerGamePacketListener> {
        isTerminal(): boolean;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundConfigurationAcknowledgedPacket>;
        isSkippable(): boolean;
        static INSTANCE: $ServerboundConfigurationAcknowledgedPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerboundConfigurationAcknowledgedPacket>;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientboundSetSubtitleTextPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        text(): $Component;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetSubtitleTextPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetSubtitleTextPacket>;
        constructor(arg0: $Component_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundSetSubtitleTextPacket}.
     */
    export type $ClientboundSetSubtitleTextPacket_ = { text?: $Component_,  } | [text?: $Component_, ];
    export class $ClientboundRemoveMobEffectPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        effect(): $Holder<$MobEffect>;
        entityId(): number;
        getEntity(arg0: $Level_): $Entity;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundRemoveMobEffectPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundRemoveMobEffectPacket>;
        constructor(arg0: number, arg1: $Holder_<$MobEffect>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundRemoveMobEffectPacket}.
     */
    export type $ClientboundRemoveMobEffectPacket_ = { effect?: $Holder_<$MobEffect>, entityId?: number,  } | [effect?: $Holder_<$MobEffect>, entityId?: number, ];
    export class $ClientboundMoveEntityPacket$Pos extends $ClientboundMoveEntityPacket implements $PacketActuallyInSubLevelExtension {
        sable$setActuallyInSubLevel(arg0: boolean): void;
        sable$isActuallyInSubLevel(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundMoveEntityPacket$Pos>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean);
    }
    export class $ClientboundChangeDifficultyPacket implements $Packet<$ClientGamePacketListener> {
        getDifficulty(): $Difficulty;
        handle(arg0: $ClientGamePacketListener): void;
        isLocked(): boolean;
        type(): $PacketType<$ClientboundChangeDifficultyPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundChangeDifficultyPacket>;
        constructor(arg0: $Difficulty_, arg1: boolean);
        get difficulty(): $Difficulty;
        get locked(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetEntityMotionPacket implements $Packet<$ClientGamePacketListener> {
        getXa(): number;
        getYa(): number;
        getZa(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetEntityMotionPacket>;
        getId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetEntityMotionPacket>;
        constructor(arg0: $Entity);
        constructor(arg0: number, arg1: $Vec3_);
        get xa(): number;
        get ya(): number;
        get za(): number;
        get id(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundPlayerActionPacket implements $Packet<$ServerGamePacketListener> {
        getDirection(): $Direction;
        getPos(): $BlockPos;
        getSequence(): number;
        handle(arg0: $ServerGamePacketListener): void;
        getAction(): $ServerboundPlayerActionPacket$Action;
        type(): $PacketType<$ServerboundPlayerActionPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPlayerActionPacket>;
        constructor(arg0: $ServerboundPlayerActionPacket$Action_, arg1: $BlockPos_, arg2: $Direction_, arg3: number);
        constructor(arg0: $ServerboundPlayerActionPacket$Action_, arg1: $BlockPos_, arg2: $Direction_);
        get direction(): $Direction;
        get pos(): $BlockPos;
        get sequence(): number;
        get action(): $ServerboundPlayerActionPacket$Action;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetEquipmentPacket implements $Packet<$ClientGamePacketListener> {
        getEntity(): number;
        handle(arg0: $ClientGamePacketListener): void;
        getSlots(): $List<$Pair<$EquipmentSlot, $ItemStack>>;
        type(): $PacketType<$ClientboundSetEquipmentPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetEquipmentPacket>;
        constructor(arg0: number, arg1: $List_<$Pair<$EquipmentSlot_, $ItemStack_>>);
        get entity(): number;
        get slots(): $List<$Pair<$EquipmentSlot, $ItemStack>>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundAddEntityPacket implements $Packet<$ClientGamePacketListener> {
        getZ(): number;
        getUUID(): $UUID;
        getXRot(): number;
        getYRot(): number;
        getYHeadRot(): number;
        getXa(): number;
        getYa(): number;
        getZa(): number;
        getY(): number;
        getX(): number;
        handle(arg0: $ClientGamePacketListener): void;
        getData(): number;
        type(): $PacketType<$ClientboundAddEntityPacket>;
        getId(): number;
        getType(): $EntityType<never>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundAddEntityPacket>;
        constructor(arg0: number, arg1: $UUID_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $EntityType_<never>, arg8: number, arg9: $Vec3_, arg10: number);
        constructor(arg0: $Entity, arg1: number, arg2: $BlockPos_);
        constructor(arg0: $Entity, arg1: $ServerEntity, arg2: number);
        constructor(arg0: $Entity, arg1: $ServerEntity);
        get z(): number;
        get UUID(): $UUID;
        get XRot(): number;
        get YRot(): number;
        get YHeadRot(): number;
        get xa(): number;
        get ya(): number;
        get za(): number;
        get y(): number;
        get x(): number;
        get data(): number;
        get id(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundPlayerCommandPacket$Action extends $Enum<$ServerboundPlayerCommandPacket$Action> {
        static values(): $ServerboundPlayerCommandPacket$Action[];
        static valueOf(arg0: string): $ServerboundPlayerCommandPacket$Action;
        static PRESS_SHIFT_KEY: $ServerboundPlayerCommandPacket$Action;
        static STOP_RIDING_JUMP: $ServerboundPlayerCommandPacket$Action;
        static STOP_SLEEPING: $ServerboundPlayerCommandPacket$Action;
        static START_RIDING_JUMP: $ServerboundPlayerCommandPacket$Action;
        static START_SPRINTING: $ServerboundPlayerCommandPacket$Action;
        static STOP_SPRINTING: $ServerboundPlayerCommandPacket$Action;
        static START_FALL_FLYING: $ServerboundPlayerCommandPacket$Action;
        static RELEASE_SHIFT_KEY: $ServerboundPlayerCommandPacket$Action;
        static OPEN_INVENTORY: $ServerboundPlayerCommandPacket$Action;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundPlayerCommandPacket$Action}.
     */
    export type $ServerboundPlayerCommandPacket$Action_ = "press_shift_key" | "release_shift_key" | "stop_sleeping" | "start_sprinting" | "stop_sprinting" | "start_riding_jump" | "stop_riding_jump" | "open_inventory" | "start_fall_flying";
    export class $ServerboundLockDifficultyPacket implements $Packet<$ServerGamePacketListener> {
        handle(arg0: $ServerGamePacketListener): void;
        isLocked(): boolean;
        type(): $PacketType<$ServerboundLockDifficultyPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundLockDifficultyPacket>;
        constructor(arg0: boolean);
        get locked(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerCombatKillPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        isSkippable(): boolean;
        playerId(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundPlayerCombatKillPacket>;
        message(): $Component;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundPlayerCombatKillPacket>;
        constructor(arg0: number, arg1: $Component_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundPlayerCombatKillPacket}.
     */
    export type $ClientboundPlayerCombatKillPacket_ = { message?: $Component_, playerId?: number,  } | [message?: $Component_, playerId?: number, ];
    export class $ServerboundMovePlayerPacket$Pos extends $ServerboundMovePlayerPacket {
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundMovePlayerPacket$Pos>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: boolean);
    }
    export class $ClientboundBossEventPacket$UpdatePropertiesOperation implements $ClientboundBossEventPacket$Operation {
    }
    export class $ClientboundCommandSuggestionsPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        suggestions(): $List<$ClientboundCommandSuggestionsPacket$Entry>;
        toSuggestions(): $Suggestions;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundCommandSuggestionsPacket>;
        length(): number;
        id(): number;
        start(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundCommandSuggestionsPacket>;
        constructor(arg0: number, arg1: $Suggestions);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $List_<$ClientboundCommandSuggestionsPacket$Entry_>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundCommandSuggestionsPacket}.
     */
    export type $ClientboundCommandSuggestionsPacket_ = { start?: number, id?: number, length?: number, suggestions?: $List_<$ClientboundCommandSuggestionsPacket$Entry_>,  } | [start?: number, id?: number, length?: number, suggestions?: $List_<$ClientboundCommandSuggestionsPacket$Entry_>, ];
    export class $ClientboundChunkBatchStartPacket implements $Packet<$ClientGamePacketListener> {
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundChunkBatchStartPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static INSTANCE: $ClientboundChunkBatchStartPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundChunkBatchStartPacket>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBossEventPacket$Operation {
    }
    export interface $ClientboundBossEventPacket$Operation {
    }
    export class $ClientboundSetScorePacket extends $Record implements $Packet<$ClientGamePacketListener> {
        numberFormat(): ($NumberFormat) | undefined;
        objectiveName(): string;
        handle(arg0: $ClientGamePacketListener): void;
        display(): ($Component) | undefined;
        score(): number;
        type(): $PacketType<$ClientboundSetScorePacket>;
        owner(): string;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetScorePacket>;
        constructor(arg0: string, arg1: string, arg2: number, arg3: ($Component_) | undefined, arg4: ($NumberFormat) | undefined);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundSetScorePacket}.
     */
    export type $ClientboundSetScorePacket_ = { display?: ($Component_) | undefined, objectiveName?: string, owner?: string, numberFormat?: ($NumberFormat) | undefined, score?: number,  } | [display?: ($Component_) | undefined, objectiveName?: string, owner?: string, numberFormat?: ($NumberFormat) | undefined, score?: number, ];
    export class $ServerboundEntityTagQueryPacket implements $Packet<$ServerGamePacketListener> {
        getEntityId(): number;
        getTransactionId(): number;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundEntityTagQueryPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundEntityTagQueryPacket>;
        constructor(arg0: number, arg1: number);
        get entityId(): number;
        get transactionId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundCommandSuggestionsPacket$Entry extends $Record {
        tooltip(): ($Component) | undefined;
        text(): string;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundCommandSuggestionsPacket$Entry>;
        constructor(arg0: string, arg1: ($Component_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ClientboundCommandSuggestionsPacket$Entry}.
     */
    export type $ClientboundCommandSuggestionsPacket$Entry_ = { text?: string, tooltip?: ($Component_) | undefined,  } | [text?: string, tooltip?: ($Component_) | undefined, ];
    export class $ServerboundBlockEntityTagQueryPacket implements $Packet<$ServerGamePacketListener> {
        getPos(): $BlockPos;
        getTransactionId(): number;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundBlockEntityTagQueryPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundBlockEntityTagQueryPacket>;
        constructor(arg0: number, arg1: $BlockPos_);
        get pos(): $BlockPos;
        get transactionId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $GamePacketTypes {
        static CLIENTBOUND_SET_EXPERIENCE: $PacketType<$ClientboundSetExperiencePacket>;
        static CLIENTBOUND_SET_PLAYER_TEAM: $PacketType<$ClientboundSetPlayerTeamPacket>;
        static SERVERBOUND_BLOCK_ENTITY_TAG_QUERY: $PacketType<$ServerboundBlockEntityTagQueryPacket>;
        static SERVERBOUND_SET_CREATIVE_MODE_SLOT: $PacketType<$ServerboundSetCreativeModeSlotPacket>;
        static SERVERBOUND_CHAT_COMMAND: $PacketType<$ServerboundChatCommandPacket>;
        static SERVERBOUND_PICK_ITEM: $PacketType<$ServerboundPickItemPacket>;
        static CLIENTBOUND_GAME_EVENT: $PacketType<$ClientboundGameEventPacket>;
        static CLIENTBOUND_SET_SIMULATION_DISTANCE: $PacketType<$ClientboundSetSimulationDistancePacket>;
        static CLIENTBOUND_SELECT_ADVANCEMENTS_TAB: $PacketType<$ClientboundSelectAdvancementsTabPacket>;
        static CLIENTBOUND_SET_SCORE: $PacketType<$ClientboundSetScorePacket>;
        static SERVERBOUND_SET_JIGSAW_BLOCK: $PacketType<$ServerboundSetJigsawBlockPacket>;
        static SERVERBOUND_MOVE_PLAYER_POS: $PacketType<$ServerboundMovePlayerPacket$Pos>;
        static CLIENTBOUND_OPEN_SCREEN: $PacketType<$ClientboundOpenScreenPacket>;
        static CLIENTBOUND_SET_ENTITY_MOTION: $PacketType<$ClientboundSetEntityMotionPacket>;
        static CLIENTBOUND_SOUND_ENTITY: $PacketType<$ClientboundSoundEntityPacket>;
        static CLIENTBOUND_UPDATE_MOB_EFFECT: $PacketType<$ClientboundUpdateMobEffectPacket>;
        static SERVERBOUND_CLIENT_COMMAND: $PacketType<$ServerboundClientCommandPacket>;
        static SERVERBOUND_CONTAINER_SLOT_STATE_CHANGED: $PacketType<$ServerboundContainerSlotStateChangedPacket>;
        static SERVERBOUND_PADDLE_BOAT: $PacketType<$ServerboundPaddleBoatPacket>;
        static CLIENTBOUND_PLAYER_COMBAT_KILL: $PacketType<$ClientboundPlayerCombatKillPacket>;
        static CLIENTBOUND_UPDATE_ATTRIBUTES: $PacketType<$ClientboundUpdateAttributesPacket>;
        static CLIENTBOUND_TELEPORT_ENTITY: $PacketType<$ClientboundTeleportEntityPacket>;
        static CLIENTBOUND_CHUNK_BATCH_FINISHED: $PacketType<$ClientboundChunkBatchFinishedPacket>;
        static CLIENTBOUND_PLAYER_ABILITIES: $PacketType<$ClientboundPlayerAbilitiesPacket>;
        static CLIENTBOUND_AWARD_STATS: $PacketType<$ClientboundAwardStatsPacket>;
        static CLIENTBOUND_RESPAWN: $PacketType<$ClientboundRespawnPacket>;
        static SERVERBOUND_PLAYER_INPUT: $PacketType<$ServerboundPlayerInputPacket>;
        static SERVERBOUND_SET_COMMAND_BLOCK: $PacketType<$ServerboundSetCommandBlockPacket>;
        static CLIENTBOUND_CHUNK_BATCH_START: $PacketType<$ClientboundChunkBatchStartPacket>;
        static SERVERBOUND_CONFIGURATION_ACKNOWLEDGED: $PacketType<$ServerboundConfigurationAcknowledgedPacket>;
        static CLIENTBOUND_TICKING_STEP: $PacketType<$ClientboundTickingStepPacket>;
        static CLIENTBOUND_BOSS_EVENT: $PacketType<$ClientboundBossEventPacket>;
        static SERVERBOUND_CONTAINER_BUTTON_CLICK: $PacketType<$ServerboundContainerButtonClickPacket>;
        static CLIENTBOUND_BLOCK_DESTRUCTION: $PacketType<$ClientboundBlockDestructionPacket>;
        static CLIENTBOUND_DAMAGE_EVENT: $PacketType<$ClientboundDamageEventPacket>;
        static SERVERBOUND_RECIPE_BOOK_SEEN_RECIPE: $PacketType<$ServerboundRecipeBookSeenRecipePacket>;
        static SERVERBOUND_ACCEPT_TELEPORTATION: $PacketType<$ServerboundAcceptTeleportationPacket>;
        static SERVERBOUND_EDIT_BOOK: $PacketType<$ServerboundEditBookPacket>;
        static CLIENTBOUND_PLAYER_POSITION: $PacketType<$ClientboundPlayerPositionPacket>;
        static CLIENTBOUND_SET_DEFAULT_SPAWN_POSITION: $PacketType<$ClientboundSetDefaultSpawnPositionPacket>;
        static CLIENTBOUND_TAB_LIST: $PacketType<$ClientboundTabListPacket>;
        static SERVERBOUND_CONTAINER_CLOSE: $PacketType<$ServerboundContainerClosePacket>;
        static CLIENTBOUND_SET_CAMERA: $PacketType<$ClientboundSetCameraPacket>;
        static SERVERBOUND_RECIPE_BOOK_CHANGE_SETTINGS: $PacketType<$ServerboundRecipeBookChangeSettingsPacket>;
        static CLIENTBOUND_CUSTOM_CHAT_COMPLETIONS: $PacketType<$ClientboundCustomChatCompletionsPacket>;
        static CLIENTBOUND_BLOCK_CHANGED_ACK: $PacketType<$ClientboundBlockChangedAckPacket>;
        static CLIENTBOUND_DISGUISED_CHAT: $PacketType<$ClientboundDisguisedChatPacket>;
        static CLIENTBOUND_FORGET_LEVEL_CHUNK: $PacketType<$ClientboundForgetLevelChunkPacket>;
        static CLIENTBOUND_SET_BORDER_LERP_SIZE: $PacketType<$ClientboundSetBorderLerpSizePacket>;
        static SERVERBOUND_CHUNK_BATCH_RECEIVED: $PacketType<$ServerboundChunkBatchReceivedPacket>;
        static CLIENTBOUND_SET_ACTION_BAR_TEXT: $PacketType<$ClientboundSetActionBarTextPacket>;
        static CLIENTBOUND_PLAYER_INFO_UPDATE: $PacketType<$ClientboundPlayerInfoUpdatePacket>;
        static CLIENTBOUND_RECIPE: $PacketType<$ClientboundRecipePacket>;
        static CLIENTBOUND_EXPLODE: $PacketType<$ClientboundExplodePacket>;
        static CLIENTBOUND_CONTAINER_CLOSE: $PacketType<$ClientboundContainerClosePacket>;
        static CLIENTBOUND_SET_TIME: $PacketType<$ClientboundSetTimePacket>;
        static CLIENTBOUND_SECTION_BLOCKS_UPDATE: $PacketType<$ClientboundSectionBlocksUpdatePacket>;
        static SERVERBOUND_CHAT_COMMAND_SIGNED: $PacketType<$ServerboundChatCommandSignedPacket>;
        static CLIENTBOUND_ANIMATE: $PacketType<$ClientboundAnimatePacket>;
        static CLIENTBOUND_SET_ENTITY_LINK: $PacketType<$ClientboundSetEntityLinkPacket>;
        static CLIENTBOUND_SET_DISPLAY_OBJECTIVE: $PacketType<$ClientboundSetDisplayObjectivePacket>;
        static CLIENTBOUND_PLAYER_INFO_REMOVE: $PacketType<$ClientboundPlayerInfoRemovePacket>;
        static CLIENTBOUND_REMOVE_MOB_EFFECT: $PacketType<$ClientboundRemoveMobEffectPacket>;
        static SERVERBOUND_MOVE_PLAYER_STATUS_ONLY: $PacketType<$ServerboundMovePlayerPacket$StatusOnly>;
        static CLIENTBOUND_LEVEL_EVENT: $PacketType<$ClientboundLevelEventPacket>;
        static SERVERBOUND_MOVE_VEHICLE: $PacketType<$ServerboundMoveVehiclePacket>;
        static CLIENTBOUND_SOUND: $PacketType<$ClientboundSoundPacket>;
        static CLIENTBOUND_MOVE_ENTITY_POS: $PacketType<$ClientboundMoveEntityPacket$Pos>;
        static SERVERBOUND_INTERACT: $PacketType<$ServerboundInteractPacket>;
        static CLIENTBOUND_RESET_SCORE: $PacketType<$ClientboundResetScorePacket>;
        static SERVERBOUND_SET_STRUCTURE_BLOCK: $PacketType<$ServerboundSetStructureBlockPacket>;
        static SERVERBOUND_SET_CARRIED_ITEM: $PacketType<$ServerboundSetCarriedItemPacket>;
        static CLIENTBOUND_REMOVE_ENTITIES: $PacketType<$ClientboundRemoveEntitiesPacket>;
        static CLIENTBOUND_MOVE_ENTITY_POS_ROT: $PacketType<$ClientboundMoveEntityPacket$PosRot>;
        static CLIENTBOUND_SET_SUBTITLE_TEXT: $PacketType<$ClientboundSetSubtitleTextPacket>;
        static SERVERBOUND_MOVE_PLAYER_POS_ROT: $PacketType<$ServerboundMovePlayerPacket$PosRot>;
        static SERVERBOUND_SEEN_ADVANCEMENTS: $PacketType<$ServerboundSeenAdvancementsPacket>;
        static CLIENTBOUND_ADD_ENTITY: $PacketType<$ClientboundAddEntityPacket>;
        static SERVERBOUND_PLAYER_ACTION: $PacketType<$ServerboundPlayerActionPacket>;
        static SERVERBOUND_PLAYER_COMMAND: $PacketType<$ServerboundPlayerCommandPacket>;
        static CLIENTBOUND_CONTAINER_SET_DATA: $PacketType<$ClientboundContainerSetDataPacket>;
        static SERVERBOUND_LOCK_DIFFICULTY: $PacketType<$ServerboundLockDifficultyPacket>;
        static CLIENTBOUND_COMMANDS: $PacketType<$ClientboundCommandsPacket>;
        static CLIENTBOUND_LIGHT_UPDATE: $PacketType<$ClientboundLightUpdatePacket>;
        static CLIENTBOUND_DELETE_CHAT: $PacketType<$ClientboundDeleteChatPacket>;
        static SERVERBOUND_ENTITY_TAG_QUERY: $PacketType<$ServerboundEntityTagQueryPacket>;
        static CLIENTBOUND_SET_BORDER_CENTER: $PacketType<$ClientboundSetBorderCenterPacket>;
        static SERVERBOUND_CHANGE_DIFFICULTY: $PacketType<$ServerboundChangeDifficultyPacket>;
        static CLIENTBOUND_MOVE_VEHICLE: $PacketType<$ClientboundMoveVehiclePacket>;
        static SERVERBOUND_JIGSAW_GENERATE: $PacketType<$ServerboundJigsawGeneratePacket>;
        static CLIENTBOUND_CLEAR_TITLES: $PacketType<$ClientboundClearTitlesPacket>;
        static SERVERBOUND_SIGN_UPDATE: $PacketType<$ServerboundSignUpdatePacket>;
        static SERVERBOUND_MOVE_PLAYER_ROT: $PacketType<$ServerboundMovePlayerPacket$Rot>;
        static CLIENTBOUND_PLAYER_COMBAT_ENTER: $PacketType<$ClientboundPlayerCombatEnterPacket>;
        static CLIENTBOUND_SET_CHUNK_CACHE_CENTER: $PacketType<$ClientboundSetChunkCacheCenterPacket>;
        static CLIENTBOUND_MAP_ITEM_DATA: $PacketType<$ClientboundMapItemDataPacket>;
        static CLIENTBOUND_OPEN_SIGN_EDITOR: $PacketType<$ClientboundOpenSignEditorPacket>;
        static CLIENTBOUND_START_CONFIGURATION: $PacketType<$ClientboundStartConfigurationPacket>;
        static SERVERBOUND_CHAT_ACK: $PacketType<$ServerboundChatAckPacket>;
        static CLIENTBOUND_MERCHANT_OFFERS: $PacketType<$ClientboundMerchantOffersPacket>;
        static CLIENTBOUND_PLAYER_COMBAT_END: $PacketType<$ClientboundPlayerCombatEndPacket>;
        static CLIENTBOUND_PLAYER_LOOK_AT: $PacketType<$ClientboundPlayerLookAtPacket>;
        static CLIENTBOUND_STOP_SOUND: $PacketType<$ClientboundStopSoundPacket>;
        static SERVERBOUND_TELEPORT_TO_ENTITY: $PacketType<$ServerboundTeleportToEntityPacket>;
        static CLIENTBOUND_BLOCK_EVENT: $PacketType<$ClientboundBlockEventPacket>;
        static CLIENTBOUND_LOGIN: $PacketType<$ClientboundLoginPacket>;
        static CLIENTBOUND_ROTATE_HEAD: $PacketType<$ClientboundRotateHeadPacket>;
        static CLIENTBOUND_SYSTEM_CHAT: $PacketType<$ClientboundSystemChatPacket>;
        static CLIENTBOUND_TAG_QUERY: $PacketType<$ClientboundTagQueryPacket>;
        static CLIENTBOUND_TAKE_ITEM_ENTITY: $PacketType<$ClientboundTakeItemEntityPacket>;
        static SERVERBOUND_USE_ITEM_ON: $PacketType<$ServerboundUseItemOnPacket>;
        static CLIENTBOUND_INITIALIZE_BORDER: $PacketType<$ClientboundInitializeBorderPacket>;
        static CLIENTBOUND_SET_PASSENGERS: $PacketType<$ClientboundSetPassengersPacket>;
        static CLIENTBOUND_SET_EQUIPMENT: $PacketType<$ClientboundSetEquipmentPacket>;
        static CLIENTBOUND_SET_CARRIED_ITEM: $PacketType<$ClientboundSetCarriedItemPacket>;
        static CLIENTBOUND_SET_HEALTH: $PacketType<$ClientboundSetHealthPacket>;
        static CLIENTBOUND_UPDATE_RECIPES: $PacketType<$ClientboundUpdateRecipesPacket>;
        static SERVERBOUND_RENAME_ITEM: $PacketType<$ServerboundRenameItemPacket>;
        static CLIENTBOUND_COOLDOWN: $PacketType<$ClientboundCooldownPacket>;
        static SERVERBOUND_SET_COMMAND_MINECART: $PacketType<$ServerboundSetCommandMinecartPacket>;
        static SERVERBOUND_PLACE_RECIPE: $PacketType<$ServerboundPlaceRecipePacket>;
        static CLIENTBOUND_UPDATE_ADVANCEMENTS: $PacketType<$ClientboundUpdateAdvancementsPacket>;
        static CLIENTBOUND_SET_TITLE_TEXT: $PacketType<$ClientboundSetTitleTextPacket>;
        static SERVERBOUND_PLAYER_ABILITIES: $PacketType<$ServerboundPlayerAbilitiesPacket>;
        static SERVERBOUND_SWING: $PacketType<$ServerboundSwingPacket>;
        static SERVERBOUND_CONTAINER_CLICK: $PacketType<$ServerboundContainerClickPacket>;
        static CLIENTBOUND_HORSE_SCREEN_OPEN: $PacketType<$ClientboundHorseScreenOpenPacket>;
        static CLIENTBOUND_PLAYER_CHAT: $PacketType<$ClientboundPlayerChatPacket>;
        static CLIENTBOUND_SET_OBJECTIVE: $PacketType<$ClientboundSetObjectivePacket>;
        static CLIENTBOUND_SET_BORDER_WARNING_DISTANCE: $PacketType<$ClientboundSetBorderWarningDistancePacket>;
        static CLIENTBOUND_COMMAND_SUGGESTIONS: $PacketType<$ClientboundCommandSuggestionsPacket>;
        static CLIENTBOUND_DEBUG_SAMPLE: $PacketType<$ClientboundDebugSamplePacket>;
        static CLIENTBOUND_CONTAINER_SET_SLOT: $PacketType<$ClientboundContainerSetSlotPacket>;
        static CLIENTBOUND_OPEN_BOOK: $PacketType<$ClientboundOpenBookPacket>;
        static CLIENTBOUND_ENTITY_EVENT: $PacketType<$ClientboundEntityEventPacket>;
        static CLIENTBOUND_CONTAINER_SET_CONTENT: $PacketType<$ClientboundContainerSetContentPacket>;
        static CLIENTBOUND_SET_BORDER_WARNING_DELAY: $PacketType<$ClientboundSetBorderWarningDelayPacket>;
        static SERVERBOUND_USE_ITEM: $PacketType<$ServerboundUseItemPacket>;
        static SERVERBOUND_SET_BEACON: $PacketType<$ServerboundSetBeaconPacket>;
        static CLIENTBOUND_PLACE_GHOST_RECIPE: $PacketType<$ClientboundPlaceGhostRecipePacket>;
        static CLIENTBOUND_SERVER_DATA: $PacketType<$ClientboundServerDataPacket>;
        static CLIENTBOUND_TICKING_STATE: $PacketType<$ClientboundTickingStatePacket>;
        static CLIENTBOUND_CHANGE_DIFFICULTY: $PacketType<$ClientboundChangeDifficultyPacket>;
        static SERVERBOUND_COMMAND_SUGGESTION: $PacketType<$ServerboundCommandSuggestionPacket>;
        static CLIENTBOUND_MOVE_ENTITY_ROT: $PacketType<$ClientboundMoveEntityPacket$Rot>;
        static CLIENTBOUND_PROJECTILE_POWER: $PacketType<$ClientboundProjectilePowerPacket>;
        static CLIENTBOUND_BLOCK_ENTITY_DATA: $PacketType<$ClientboundBlockEntityDataPacket>;
        static CLIENTBOUND_SET_ENTITY_DATA: $PacketType<$ClientboundSetEntityDataPacket>;
        static SERVERBOUND_CHAT: $PacketType<$ServerboundChatPacket>;
        static CLIENTBOUND_BLOCK_UPDATE: $PacketType<$ClientboundBlockUpdatePacket>;
        static CLIENTBOUND_ADD_EXPERIENCE_ORB: $PacketType<$ClientboundAddExperienceOrbPacket>;
        static CLIENTBOUND_BUNDLE_DELIMITER: $PacketType<$ClientboundBundleDelimiterPacket>;
        static CLIENTBOUND_SET_BORDER_SIZE: $PacketType<$ClientboundSetBorderSizePacket>;
        static CLIENTBOUND_LEVEL_CHUNK_WITH_LIGHT: $PacketType<$ClientboundLevelChunkWithLightPacket>;
        static CLIENTBOUND_LEVEL_PARTICLES: $PacketType<$ClientboundLevelParticlesPacket>;
        static CLIENTBOUND_CHUNKS_BIOMES: $PacketType<$ClientboundChunksBiomesPacket>;
        static CLIENTBOUND_BUNDLE: $PacketType<$ClientboundBundlePacket>;
        static CLIENTBOUND_HURT_ANIMATION: $PacketType<$ClientboundHurtAnimationPacket>;
        static SERVERBOUND_SELECT_TRADE: $PacketType<$ServerboundSelectTradePacket>;
        static SERVERBOUND_CHAT_SESSION_UPDATE: $PacketType<$ServerboundChatSessionUpdatePacket>;
        static SERVERBOUND_DEBUG_SAMPLE_SUBSCRIPTION: $PacketType<$ServerboundDebugSampleSubscriptionPacket>;
        static CLIENTBOUND_SET_CHUNK_CACHE_RADIUS: $PacketType<$ClientboundSetChunkCacheRadiusPacket>;
        static CLIENTBOUND_SET_TITLES_ANIMATION: $PacketType<$ClientboundSetTitlesAnimationPacket>;
        constructor();
    }
    export class $ClientboundClearTitlesPacket implements $Packet<$ClientGamePacketListener> {
        shouldResetTimes(): boolean;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundClearTitlesPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundClearTitlesPacket>;
        constructor(arg0: boolean);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundContainerButtonClickPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        containerId(): number;
        buttonId(): number;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundContainerButtonClickPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundContainerButtonClickPacket>;
        constructor(arg0: number, arg1: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundContainerButtonClickPacket}.
     */
    export type $ServerboundContainerButtonClickPacket_ = { buttonId?: number, containerId?: number,  } | [buttonId?: number, containerId?: number, ];
    export class $ClientboundSetBorderWarningDelayPacket implements $Packet<$ClientGamePacketListener> {
        getWarningDelay(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetBorderWarningDelayPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetBorderWarningDelayPacket>;
        constructor(arg0: $WorldBorder);
        get warningDelay(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundMoveEntityPacket$Rot extends $ClientboundMoveEntityPacket {
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundMoveEntityPacket$Rot>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: boolean);
    }
    export class $ClientboundSetBorderLerpSizePacket implements $Packet<$ClientGamePacketListener> {
        getNewSize(): number;
        getOldSize(): number;
        getLerpTime(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetBorderLerpSizePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetBorderLerpSizePacket>;
        constructor(arg0: $WorldBorder);
        get newSize(): number;
        get oldSize(): number;
        get lerpTime(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundMovePlayerPacket$Rot extends $ServerboundMovePlayerPacket {
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundMovePlayerPacket$Rot>;
        constructor(arg0: number, arg1: number, arg2: boolean);
    }
    export class $ServerboundContainerClosePacket implements $Packet<$ServerGamePacketListener> {
        getContainerId(): number;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundContainerClosePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundContainerClosePacket>;
        constructor(arg0: number);
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundChatCommandPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        handle(arg0: $ServerGamePacketListener): void;
        command(): string;
        type(): $PacketType<$ServerboundChatCommandPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChatCommandPacket>;
        constructor(arg0: string);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundChatCommandPacket}.
     */
    export type $ServerboundChatCommandPacket_ = { command?: string,  } | [command?: string, ];
    export class $ServerboundDebugSampleSubscriptionPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        sampleType(): $RemoteDebugSampleType;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundDebugSampleSubscriptionPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundDebugSampleSubscriptionPacket>;
        constructor(arg0: $RemoteDebugSampleType_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundDebugSampleSubscriptionPacket}.
     */
    export type $ServerboundDebugSampleSubscriptionPacket_ = { sampleType?: $RemoteDebugSampleType_,  } | [sampleType?: $RemoteDebugSampleType_, ];
    export class $ClientboundBossEventPacket$Handler {
    }
    export interface $ClientboundBossEventPacket$Handler {
        updateStyle(arg0: $UUID_, arg1: $BossEvent$BossBarColor_, arg2: $BossEvent$BossBarOverlay_): void;
        updateName(arg0: $UUID_, arg1: $Component_): void;
        updateProperties(arg0: $UUID_, arg1: boolean, arg2: boolean, arg3: boolean): void;
        updateProgress(arg0: $UUID_, arg1: number): void;
        remove(arg0: $UUID_): void;
        add(arg0: $UUID_, arg1: $Component_, arg2: number, arg3: $BossEvent$BossBarColor_, arg4: $BossEvent$BossBarOverlay_, arg5: boolean, arg6: boolean, arg7: boolean): void;
    }
    export class $ClientboundBossEventPacket$UpdateStyleOperation implements $ClientboundBossEventPacket$Operation {
    }
    export class $ClientboundSoundPacket implements $Packet<$ClientGamePacketListener> {
        getZ(): number;
        getVolume(): number;
        getPitch(): number;
        getSound(): $Holder<$SoundEvent>;
        getY(): number;
        getX(): number;
        getSource(): $SoundSource;
        getSeed(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSoundPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static LOCATION_ACCURACY: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSoundPacket>;
        constructor(arg0: $Holder_<$SoundEvent>, arg1: $SoundSource_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number);
        get z(): number;
        get volume(): number;
        get pitch(): number;
        get sound(): $Holder<$SoundEvent>;
        get y(): number;
        get x(): number;
        get source(): $SoundSource;
        get seed(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundRecipeBookSeenRecipePacket implements $Packet<$ServerGamePacketListener> {
        getRecipe(): $ResourceLocation;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundRecipeBookSeenRecipePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundRecipeBookSeenRecipePacket>;
        constructor(arg0: $RecipeHolder_<never>);
        get recipe(): $ResourceLocation;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundMoveVehiclePacket implements $Packet<$ClientGamePacketListener> {
        getZ(): number;
        getXRot(): number;
        getYRot(): number;
        getY(): number;
        getX(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundMoveVehiclePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundMoveVehiclePacket>;
        constructor(arg0: $Entity);
        get z(): number;
        get XRot(): number;
        get YRot(): number;
        get y(): number;
        get x(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundContainerSlotStateChangedPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        containerId(): number;
        slotId(): number;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundContainerSlotStateChangedPacket>;
        newState(): boolean;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundContainerSlotStateChangedPacket>;
        constructor(arg0: number, arg1: number, arg2: boolean);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundContainerSlotStateChangedPacket}.
     */
    export type $ServerboundContainerSlotStateChangedPacket_ = { slotId?: number, newState?: boolean, containerId?: number,  } | [slotId?: number, newState?: boolean, containerId?: number, ];
    export class $ClientboundAddExperienceOrbPacket implements $Packet<$ClientGamePacketListener> {
        getZ(): number;
        getY(): number;
        getX(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundAddExperienceOrbPacket>;
        getValue(): number;
        getId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundAddExperienceOrbPacket>;
        constructor(arg0: $ExperienceOrb, arg1: $ServerEntity);
        get z(): number;
        get y(): number;
        get x(): number;
        get value(): number;
        get id(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetTimePacket implements $Packet<$ClientGamePacketListener> {
        getGameTime(): number;
        getDayTime(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetTimePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetTimePacket>;
        constructor(arg0: number, arg1: number, arg2: boolean);
        get gameTime(): number;
        get dayTime(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundAwardStatsPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        stats(): $Object2IntMap<$Stat<never>>;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundAwardStatsPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundAwardStatsPacket>;
        constructor(arg0: $Object2IntMap<$Stat_<never>>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundAwardStatsPacket}.
     */
    export type $ClientboundAwardStatsPacket_ = { stats?: $Object2IntMap<$Stat_<never>>,  } | [stats?: $Object2IntMap<$Stat_<never>>, ];
    export class $ClientboundBundlePacket extends $BundlePacket<$ClientGamePacketListener> {
        handle(arg0: $ClientGamePacketListener): void;
        constructor(arg0: $Iterable_<$Packet<$ClientGamePacketListener>>);
    }
    export class $ClientboundBlockChangedAckPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        sequence(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundBlockChangedAckPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundBlockChangedAckPacket>;
        constructor(arg0: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundBlockChangedAckPacket}.
     */
    export type $ClientboundBlockChangedAckPacket_ = { sequence?: number,  } | [sequence?: number, ];
    export class $ClientboundPlayerInfoUpdatePacket implements $Packet<$ClientGamePacketListener> {
        newEntries(): $List<$ClientboundPlayerInfoUpdatePacket$Entry>;
        static createPlayerInitializing(arg0: $Collection_<$ServerPlayer>): $ClientboundPlayerInfoUpdatePacket;
        handle(arg0: $ClientGamePacketListener): void;
        actions(): $EnumSet<$ClientboundPlayerInfoUpdatePacket$Action>;
        type(): $PacketType<$ClientboundPlayerInfoUpdatePacket>;
        entries(): $List<$ClientboundPlayerInfoUpdatePacket$Entry>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundPlayerInfoUpdatePacket>;
        constructor(arg0: $EnumSet<$ClientboundPlayerInfoUpdatePacket$Action_>, arg1: $Collection_<$ServerPlayer>);
        constructor(arg0: $ClientboundPlayerInfoUpdatePacket$Action_, arg1: $ServerPlayer);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundDamageEventPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        sourceCauseId(): number;
        sourceDirectId(): number;
        entityId(): number;
        getSource(arg0: $Level_): $DamageSource;
        sourcePosition(): ($Vec3) | undefined;
        handle(arg0: $ClientGamePacketListener): void;
        sourceType(): $Holder<$DamageType>;
        type(): $PacketType<$ClientboundDamageEventPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundDamageEventPacket>;
        constructor(arg0: $Entity, arg1: $DamageSource_);
        constructor(arg0: number, arg1: $Holder_<$DamageType>, arg2: number, arg3: number, arg4: ($Vec3_) | undefined);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundDamageEventPacket}.
     */
    export type $ClientboundDamageEventPacket_ = { sourcePosition?: ($Vec3_) | undefined, entityId?: number, sourceDirectId?: number, sourceCauseId?: number, sourceType?: $Holder_<$DamageType>,  } | [sourcePosition?: ($Vec3_) | undefined, entityId?: number, sourceDirectId?: number, sourceCauseId?: number, sourceType?: $Holder_<$DamageType>, ];
    export class $ClientboundContainerSetContentPacket implements $Packet<$ClientGamePacketListener> {
        getItems(): $List<$ItemStack>;
        getCarriedItem(): $ItemStack;
        getStateId(): number;
        getContainerId(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundContainerSetContentPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundContainerSetContentPacket>;
        constructor(arg0: number, arg1: number, arg2: $NonNullList<$ItemStack_>, arg3: $ItemStack_);
        get items(): $List<$ItemStack>;
        get carriedItem(): $ItemStack;
        get stateId(): number;
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundGameEventPacket$Type {
        constructor(arg0: number);
    }
    export class $ClientboundBlockEventPacket implements $Packet<$ClientGamePacketListener> {
        getPos(): $BlockPos;
        getBlock(): $Block;
        getB0(): number;
        getB1(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundBlockEventPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundBlockEventPacket>;
        constructor(arg0: $BlockPos_, arg1: $Block_, arg2: number, arg3: number);
        get pos(): $BlockPos;
        get block(): $Block;
        get b0(): number;
        get b1(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetSimulationDistancePacket extends $Record implements $Packet<$ClientGamePacketListener> {
        simulationDistance(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetSimulationDistancePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetSimulationDistancePacket>;
        constructor(arg0: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundSetSimulationDistancePacket}.
     */
    export type $ClientboundSetSimulationDistancePacket_ = { simulationDistance?: number,  } | [simulationDistance?: number, ];
    export class $ClientboundSetPlayerTeamPacket implements $Packet<$ClientGamePacketListener> {
        getPlayers(): $Collection<string>;
        static createPlayerPacket(arg0: $PlayerTeam, arg1: string, arg2: $ClientboundSetPlayerTeamPacket$Action_): $ClientboundSetPlayerTeamPacket;
        static createAddOrModifyPacket(arg0: $PlayerTeam, arg1: boolean): $ClientboundSetPlayerTeamPacket;
        static createRemovePacket(arg0: $PlayerTeam): $ClientboundSetPlayerTeamPacket;
        getTeamAction(): $ClientboundSetPlayerTeamPacket$Action;
        getPlayerAction(): $ClientboundSetPlayerTeamPacket$Action;
        getParameters(): ($ClientboundSetPlayerTeamPacket$Parameters) | undefined;
        handle(arg0: $ClientGamePacketListener): void;
        getName(): string;
        type(): $PacketType<$ClientboundSetPlayerTeamPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetPlayerTeamPacket>;
        get players(): $Collection<string>;
        get teamAction(): $ClientboundSetPlayerTeamPacket$Action;
        get playerAction(): $ClientboundSetPlayerTeamPacket$Action;
        get parameters(): ($ClientboundSetPlayerTeamPacket$Parameters) | undefined;
        get name(): string;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $DebugPackets {
        static sendRaids(arg0: $ServerLevel, arg1: $Collection_<$Raid>): void;
        static sendGameEventInfo(arg0: $Level_, arg1: $Holder_<$GameEvent>, arg2: $Vec3_): void;
        static sendPoiPacketsForChunk(arg0: $ServerLevel, arg1: $ChunkPos): void;
        static sendNeighborsUpdatePacket(arg0: $Level_, arg1: $BlockPos_): void;
        static sendPoiAddedPacket(arg0: $ServerLevel, arg1: $BlockPos_): void;
        static sendPoiRemovedPacket(arg0: $ServerLevel, arg1: $BlockPos_): void;
        static sendBeeInfo(arg0: $Bee): void;
        static sendGoalSelector(arg0: $Level_, arg1: $Mob, arg2: $GoalSelector): void;
        static sendEntityBrain(arg0: $LivingEntity): void;
        static sendHiveInfo(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BeehiveBlockEntity): void;
        static sendPathFindingPacket(arg0: $Level_, arg1: $Mob, arg2: $Path, arg3: number): void;
        static sendBreezeInfo(arg0: $Breeze): void;
        static sendPoiTicketCountPacket(arg0: $ServerLevel, arg1: $BlockPos_): void;
        static sendStructurePacket(arg0: $WorldGenLevel, arg1: $StructureStart): void;
        static sendGameEventListenerInfo(arg0: $Level_, arg1: $GameEventListener): void;
        static sendGameTestAddMarker(arg0: $ServerLevel, arg1: $BlockPos_, arg2: string, arg3: number, arg4: number): void;
        static sendGameTestClearPacket(arg0: $ServerLevel): void;
        constructor();
    }
    export class $ClientboundCommandsPacket$ArgumentNodeStub implements $ClientboundCommandsPacket$NodeStub {
    }
    export class $ClientboundRecipePacket implements $Packet<$ClientGamePacketListener> {
        getRecipes(): $List<$ResourceLocation>;
        getBookSettings(): $RecipeBookSettings;
        getHighlights(): $List<$ResourceLocation>;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundRecipePacket>;
        getState(): $ClientboundRecipePacket$State;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundRecipePacket>;
        constructor(arg0: $ClientboundRecipePacket$State_, arg1: $Collection_<$ResourceLocation_>, arg2: $Collection_<$ResourceLocation_>, arg3: $RecipeBookSettings);
        get recipes(): $List<$ResourceLocation>;
        get bookSettings(): $RecipeBookSettings;
        get highlights(): $List<$ResourceLocation>;
        get state(): $ClientboundRecipePacket$State;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundDeleteChatPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        messageSignature(): $MessageSignature$Packed;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundDeleteChatPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundDeleteChatPacket>;
        constructor(arg0: $MessageSignature$Packed_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundDeleteChatPacket}.
     */
    export type $ClientboundDeleteChatPacket_ = { messageSignature?: $MessageSignature$Packed_,  } | [messageSignature?: $MessageSignature$Packed_, ];
    export class $ClientboundTakeItemEntityPacket implements $Packet<$ClientGamePacketListener> {
        getAmount(): number;
        getItemId(): number;
        getPlayerId(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundTakeItemEntityPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundTakeItemEntityPacket>;
        constructor(arg0: number, arg1: number, arg2: number);
        get amount(): number;
        get itemId(): number;
        get playerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundContainerSetSlotPacket implements $Packet<$ClientGamePacketListener> {
        getStateId(): number;
        getItem(): $ItemStack;
        getContainerId(): number;
        getSlot(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundContainerSetSlotPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static CARRIED_ITEM: number;
        static PLAYER_INVENTORY: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundContainerSetSlotPacket>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $ItemStack_);
        get stateId(): number;
        get item(): $ItemStack;
        get containerId(): number;
        get slot(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSetBeaconPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        handle(arg0: $ServerGamePacketListener): void;
        primary(): ($Holder<$MobEffect>) | undefined;
        secondary(): ($Holder<$MobEffect>) | undefined;
        type(): $PacketType<$ServerboundSetBeaconPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ServerboundSetBeaconPacket>;
        constructor(arg0: ($Holder_<$MobEffect>) | undefined, arg1: ($Holder_<$MobEffect>) | undefined);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundSetBeaconPacket}.
     */
    export type $ServerboundSetBeaconPacket_ = { primary?: ($Holder_<$MobEffect>) | undefined, secondary?: ($Holder_<$MobEffect>) | undefined,  } | [primary?: ($Holder_<$MobEffect>) | undefined, secondary?: ($Holder_<$MobEffect>) | undefined, ];
    export class $ClientboundBlockEntityDataPacket implements $Packet<$ClientGamePacketListener> {
        getPos(): $BlockPos;
        getTag(): $CompoundTag;
        static create(arg0: $BlockEntity, arg1: $BiFunction_<$BlockEntity, $RegistryAccess, $CompoundTag>): $ClientboundBlockEntityDataPacket;
        static create(arg0: $BlockEntity): $ClientboundBlockEntityDataPacket;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundBlockEntityDataPacket>;
        getType(): $BlockEntityType<never>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundBlockEntityDataPacket>;
        get pos(): $BlockPos;
        get tag(): $CompoundTag;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSectionBlocksUpdatePacket implements $Packet<$ClientGamePacketListener>, $IXaeroMinimapSMultiBlockChangePacket, $IWorldMapSMultiBlockChangePacket {
        xaero_wm_getSectionPos(): $SectionPos;
        xaero_mm_getSectionPos(): $SectionPos;
        runUpdates(arg0: $BiConsumer_<$BlockPos, $BlockState>): void;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSectionBlocksUpdatePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        positions: number[];
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSectionBlocksUpdatePacket>;
        sectionPos: $SectionPos;
        constructor(arg0: $SectionPos, arg1: $ShortSet, arg2: $LevelChunkSection);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetEntityLinkPacket implements $Packet<$ClientGamePacketListener> {
        getSourceId(): number;
        getDestId(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetEntityLinkPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetEntityLinkPacket>;
        constructor(arg0: $Entity, arg1: $Entity);
        get sourceId(): number;
        get destId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundChatSessionUpdatePacket extends $Record implements $Packet<$ServerGamePacketListener> {
        chatSession(): $RemoteChatSession$Data;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundChatSessionUpdatePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChatSessionUpdatePacket>;
        constructor(arg0: $RemoteChatSession$Data_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundChatSessionUpdatePacket}.
     */
    export type $ServerboundChatSessionUpdatePacket_ = { chatSession?: $RemoteChatSession$Data_,  } | [chatSession?: $RemoteChatSession$Data_, ];
    export class $ClientboundPlayerChatPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        isSkippable(): boolean;
        body(): $SignedMessageBody$Packed;
        chatType(): $ChatType$Bound;
        unsignedContent(): $Component;
        filterMask(): $FilterMask;
        handle(arg0: $ClientGamePacketListener): void;
        sender(): $UUID;
        signature(): $MessageSignature;
        index(): number;
        type(): $PacketType<$ClientboundPlayerChatPacket>;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundPlayerChatPacket>;
        constructor(arg0: $UUID_, arg1: number, arg2: $MessageSignature_, arg3: $SignedMessageBody$Packed_, arg4: $Component_, arg5: $FilterMask, arg6: $ChatType$Bound_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundPlayerChatPacket}.
     */
    export type $ClientboundPlayerChatPacket_ = { unsignedContent?: $Component_, index?: number, filterMask?: $FilterMask, sender?: $UUID_, body?: $SignedMessageBody$Packed_, signature?: $MessageSignature_, chatType?: $ChatType$Bound_,  } | [unsignedContent?: $Component_, index?: number, filterMask?: $FilterMask, sender?: $UUID_, body?: $SignedMessageBody$Packed_, signature?: $MessageSignature_, chatType?: $ChatType$Bound_, ];
    export class $ClientboundCooldownPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        handle(arg0: $ClientGamePacketListener): void;
        item(): $Item;
        type(): $PacketType<$ClientboundCooldownPacket>;
        duration(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundCooldownPacket>;
        constructor(arg0: $Item_, arg1: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundCooldownPacket}.
     */
    export type $ClientboundCooldownPacket_ = { item?: $Item_, duration?: number,  } | [item?: $Item_, duration?: number, ];
    export class $ClientboundBundleDelimiterPacket extends $BundleDelimiterPacket<$ClientGamePacketListener> {
        constructor();
    }
    export class $ServerboundMoveVehiclePacket implements $Packet<$ServerGamePacketListener> {
        getZ(): number;
        getXRot(): number;
        getYRot(): number;
        getY(): number;
        getX(): number;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundMoveVehiclePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundMoveVehiclePacket>;
        constructor(arg0: $Entity);
        get z(): number;
        get XRot(): number;
        get YRot(): number;
        get y(): number;
        get x(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundTickingStepPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        tickSteps(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundTickingStepPacket>;
        static from(arg0: $TickRateManager): $ClientboundTickingStepPacket;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundTickingStepPacket>;
        constructor(arg0: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundTickingStepPacket}.
     */
    export type $ClientboundTickingStepPacket_ = { tickSteps?: number,  } | [tickSteps?: number, ];
    export class $ClientboundDisguisedChatPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        isSkippable(): boolean;
        chatType(): $ChatType$Bound;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundDisguisedChatPacket>;
        message(): $Component;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundDisguisedChatPacket>;
        constructor(arg0: $Component_, arg1: $ChatType$Bound_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundDisguisedChatPacket}.
     */
    export type $ClientboundDisguisedChatPacket_ = { chatType?: $ChatType$Bound_, message?: $Component_,  } | [chatType?: $ChatType$Bound_, message?: $Component_, ];
    export class $ServerboundSetCarriedItemPacket implements $Packet<$ServerGamePacketListener> {
        getSlot(): number;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundSetCarriedItemPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSetCarriedItemPacket>;
        constructor(arg0: number);
        get slot(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundLevelParticlesPacket implements $Packet<$ClientGamePacketListener> {
        getZ(): number;
        getMaxSpeed(): number;
        getParticle(): $ParticleOptions;
        getY(): number;
        getX(): number;
        getXDist(): number;
        getYDist(): number;
        getZDist(): number;
        isOverrideLimiter(): boolean;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundLevelParticlesPacket>;
        getCount(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundLevelParticlesPacket>;
        constructor<T extends $ParticleOptions>(arg0: T, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number);
        get z(): number;
        get maxSpeed(): number;
        get particle(): $ParticleOptions;
        get y(): number;
        get x(): number;
        get XDist(): number;
        get YDist(): number;
        get ZDist(): number;
        get overrideLimiter(): boolean;
        get count(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerLookAtPacket implements $Packet<$ClientGamePacketListener> {
        getPosition(arg0: $Level_): $Vec3;
        getFromAnchor(): $EntityAnchorArgument$Anchor;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundPlayerLookAtPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlayerLookAtPacket>;
        constructor(arg0: $EntityAnchorArgument$Anchor_, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $EntityAnchorArgument$Anchor_, arg1: $Entity, arg2: $EntityAnchorArgument$Anchor_);
        get fromAnchor(): $EntityAnchorArgument$Anchor;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundCustomChatCompletionsPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundCustomChatCompletionsPacket>;
        action(): $ClientboundCustomChatCompletionsPacket$Action;
        entries(): $List<string>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundCustomChatCompletionsPacket>;
        constructor(arg0: $ClientboundCustomChatCompletionsPacket$Action_, arg1: $List_<string>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundCustomChatCompletionsPacket}.
     */
    export type $ClientboundCustomChatCompletionsPacket_ = { action?: $ClientboundCustomChatCompletionsPacket$Action_, entries?: $List_<string>,  } | [action?: $ClientboundCustomChatCompletionsPacket$Action_, entries?: $List_<string>, ];
    export class $ServerboundChangeDifficultyPacket implements $Packet<$ServerGamePacketListener> {
        getDifficulty(): $Difficulty;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundChangeDifficultyPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChangeDifficultyPacket>;
        constructor(arg0: $Difficulty_);
        get difficulty(): $Difficulty;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetTitlesAnimationPacket implements $Packet<$ClientGamePacketListener> {
        getFadeIn(): number;
        getStay(): number;
        getFadeOut(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetTitlesAnimationPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetTitlesAnimationPacket>;
        constructor(arg0: number, arg1: number, arg2: number);
        get fadeIn(): number;
        get stay(): number;
        get fadeOut(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundSeenAdvancementsPacket implements $Packet<$ServerGamePacketListener> {
        static openedTab(arg0: $AdvancementHolder_): $ServerboundSeenAdvancementsPacket;
        static closedScreen(): $ServerboundSeenAdvancementsPacket;
        getTab(): $ResourceLocation;
        handle(arg0: $ServerGamePacketListener): void;
        getAction(): $ServerboundSeenAdvancementsPacket$Action;
        type(): $PacketType<$ServerboundSeenAdvancementsPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSeenAdvancementsPacket>;
        constructor(arg0: $ServerboundSeenAdvancementsPacket$Action_, arg1: $ResourceLocation_);
        get tab(): $ResourceLocation;
        get action(): $ServerboundSeenAdvancementsPacket$Action;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundInteractPacket implements $Packet<$ServerGamePacketListener> {
        static createAttackPacket(arg0: $Entity, arg1: boolean): $ServerboundInteractPacket;
        static createInteractionPacket(arg0: $Entity, arg1: boolean, arg2: $InteractionHand_): $ServerboundInteractPacket;
        static createInteractionPacket(arg0: $Entity, arg1: boolean, arg2: $InteractionHand_, arg3: $Vec3_): $ServerboundInteractPacket;
        isUsingSecondaryAction(): boolean;
        getTarget(arg0: $ServerLevel): $Entity;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundInteractPacket>;
        dispatch(arg0: $ServerboundInteractPacket$Handler): void;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundInteractPacket>;
        get usingSecondaryAction(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundPlayerAbilitiesPacket implements $Packet<$ServerGamePacketListener> {
        isFlying(): boolean;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundPlayerAbilitiesPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPlayerAbilitiesPacket>;
        constructor(arg0: $Abilities);
        get flying(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundTeleportToEntityPacket implements $Packet<$ServerGamePacketListener> {
        getEntity(arg0: $ServerLevel): $Entity;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundTeleportToEntityPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundTeleportToEntityPacket>;
        constructor(arg0: $UUID_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerCombatEnterPacket implements $Packet<$ClientGamePacketListener> {
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundPlayerCombatEnterPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static INSTANCE: $ClientboundPlayerCombatEnterPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundPlayerCombatEnterPacket>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerInfoUpdatePacket$Action extends $Enum<$ClientboundPlayerInfoUpdatePacket$Action> {
        static values(): $ClientboundPlayerInfoUpdatePacket$Action[];
        static valueOf(arg0: string): $ClientboundPlayerInfoUpdatePacket$Action;
        static UPDATE_DISPLAY_NAME: $ClientboundPlayerInfoUpdatePacket$Action;
        static UPDATE_LISTED: $ClientboundPlayerInfoUpdatePacket$Action;
        static ADD_PLAYER: $ClientboundPlayerInfoUpdatePacket$Action;
        static UPDATE_GAME_MODE: $ClientboundPlayerInfoUpdatePacket$Action;
        static UPDATE_LATENCY: $ClientboundPlayerInfoUpdatePacket$Action;
        static INITIALIZE_CHAT: $ClientboundPlayerInfoUpdatePacket$Action;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundPlayerInfoUpdatePacket$Action}.
     */
    export type $ClientboundPlayerInfoUpdatePacket$Action_ = "add_player" | "initialize_chat" | "update_game_mode" | "update_listed" | "update_latency" | "update_display_name";
    export class $ClientboundPlayerInfoUpdatePacket$Action$Reader {
    }
    export interface $ClientboundPlayerInfoUpdatePacket$Action$Reader {
        read(arg0: $ClientboundPlayerInfoUpdatePacket$EntryBuilder, arg1: $RegistryFriendlyByteBuf): void;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundPlayerInfoUpdatePacket$Action$Reader}.
     */
    export type $ClientboundPlayerInfoUpdatePacket$Action$Reader_ = ((arg0: $ClientboundPlayerInfoUpdatePacket$EntryBuilder, arg1: $RegistryFriendlyByteBuf) => void);
    export class $ClientboundRespawnPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        dataToKeep(): number;
        commonPlayerSpawnInfo(): $CommonPlayerSpawnInfo;
        shouldKeep(arg0: number): boolean;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundRespawnPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static KEEP_ALL_DATA: number;
        static KEEP_ENTITY_DATA: number;
        static KEEP_ATTRIBUTE_MODIFIERS: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundRespawnPacket>;
        constructor(arg0: $CommonPlayerSpawnInfo_, arg1: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundRespawnPacket}.
     */
    export type $ClientboundRespawnPacket_ = { commonPlayerSpawnInfo?: $CommonPlayerSpawnInfo_, dataToKeep?: number,  } | [commonPlayerSpawnInfo?: $CommonPlayerSpawnInfo_, dataToKeep?: number, ];
    export class $ClientboundSetPassengersPacket implements $Packet<$ClientGamePacketListener> {
        getPassengers(): number[];
        getVehicle(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetPassengersPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetPassengersPacket>;
        constructor(arg0: $Entity);
        get passengers(): number[];
        get vehicle(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlaceGhostRecipePacket implements $Packet<$ClientGamePacketListener> {
        getRecipe(): $ResourceLocation;
        getContainerId(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundPlaceGhostRecipePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlaceGhostRecipePacket>;
        constructor(arg0: number, arg1: $RecipeHolder_<never>);
        get recipe(): $ResourceLocation;
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $DebugEntityNameGenerator {
        static getEntityName(arg0: $Entity): string;
        static getEntityName(arg0: $UUID_): string;
        constructor();
    }
    export class $ClientboundSystemChatPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        isSkippable(): boolean;
        content(): $Component;
        handle(arg0: $ClientGamePacketListener): void;
        overlay(): boolean;
        type(): $PacketType<$ClientboundSystemChatPacket>;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSystemChatPacket>;
        constructor(arg0: $Component_, arg1: boolean);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundSystemChatPacket}.
     */
    export type $ClientboundSystemChatPacket_ = { content?: $Component_, overlay?: boolean,  } | [content?: $Component_, overlay?: boolean, ];
    export class $ClientboundUpdateAdvancementsPacket implements $Packet<$ClientGamePacketListener> {
        getAdded(): $List<$AdvancementHolder>;
        getProgress(): $Map<$ResourceLocation, $AdvancementProgress>;
        shouldReset(): boolean;
        getRemoved(): $Set<$ResourceLocation>;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundUpdateAdvancementsPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundUpdateAdvancementsPacket>;
        constructor(arg0: boolean, arg1: $Collection_<$AdvancementHolder_>, arg2: $Set_<$ResourceLocation_>, arg3: $Map_<$ResourceLocation_, $AdvancementProgress>);
        get added(): $List<$AdvancementHolder>;
        get progress(): $Map<$ResourceLocation, $AdvancementProgress>;
        get removed(): $Set<$ResourceLocation>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundAcceptTeleportationPacket implements $Packet<$ServerGamePacketListener> {
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundAcceptTeleportationPacket>;
        getId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundAcceptTeleportationPacket>;
        constructor(arg0: number);
        get id(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundPlayerInputPacket implements $Packet<$ServerGamePacketListener> {
        isShiftKeyDown(): boolean;
        isJumping(): boolean;
        getXxa(): number;
        getZza(): number;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundPlayerInputPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPlayerInputPacket>;
        constructor(arg0: number, arg1: number, arg2: boolean, arg3: boolean);
        get shiftKeyDown(): boolean;
        get jumping(): boolean;
        get xxa(): number;
        get zza(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundMoveEntityPacket$PosRot extends $ClientboundMoveEntityPacket implements $PacketActuallyInSubLevelExtension {
        sable$setActuallyInSubLevel(arg0: boolean): void;
        sable$isActuallyInSubLevel(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundMoveEntityPacket$PosRot>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean);
    }
    export class $ClientboundSetExperiencePacket implements $Packet<$ClientGamePacketListener> {
        getTotalExperience(): number;
        getExperienceProgress(): number;
        getExperienceLevel(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetExperiencePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetExperiencePacket>;
        constructor(arg0: number, arg1: number, arg2: number);
        get totalExperience(): number;
        get experienceProgress(): number;
        get experienceLevel(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerCombatEndPacket implements $Packet<$ClientGamePacketListener> {
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundPlayerCombatEndPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPlayerCombatEndPacket>;
        constructor(arg0: $CombatTracker);
        constructor(arg0: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundPlayerInfoUpdatePacket$Entry extends $Record {
        gameMode(): $GameType;
        profileId(): $UUID;
        chatSession(): $RemoteChatSession$Data;
        listed(): boolean;
        displayName(): $Component;
        latency(): number;
        profile(): $GameProfile;
        constructor(arg0: $UUID_, arg1: $GameProfile, arg2: boolean, arg3: number, arg4: $GameType_, arg5: $Component_, arg6: $RemoteChatSession$Data_);
    }
    /**
     * Values that may be interpreted as {@link $ClientboundPlayerInfoUpdatePacket$Entry}.
     */
    export type $ClientboundPlayerInfoUpdatePacket$Entry_ = { gameMode?: $GameType_, profileId?: $UUID_, displayName?: $Component_, latency?: number, profile?: $GameProfile, chatSession?: $RemoteChatSession$Data_, listed?: boolean,  } | [gameMode?: $GameType_, profileId?: $UUID_, displayName?: $Component_, latency?: number, profile?: $GameProfile, chatSession?: $RemoteChatSession$Data_, listed?: boolean, ];
    export class $ClientboundBlockDestructionPacket implements $Packet<$ClientGamePacketListener> {
        getPos(): $BlockPos;
        getProgress(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundBlockDestructionPacket>;
        getId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundBlockDestructionPacket>;
        constructor(arg0: number, arg1: $BlockPos_, arg2: number);
        get pos(): $BlockPos;
        get progress(): number;
        get id(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetPlayerTeamPacket$Action extends $Enum<$ClientboundSetPlayerTeamPacket$Action> {
        static values(): $ClientboundSetPlayerTeamPacket$Action[];
        static valueOf(arg0: string): $ClientboundSetPlayerTeamPacket$Action;
        static ADD: $ClientboundSetPlayerTeamPacket$Action;
        static REMOVE: $ClientboundSetPlayerTeamPacket$Action;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundSetPlayerTeamPacket$Action}.
     */
    export type $ClientboundSetPlayerTeamPacket$Action_ = "add" | "remove";
    export class $ClientboundLoginPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        reducedDebugInfo(): boolean;
        hardcore(): boolean;
        showDeathScreen(): boolean;
        doLimitedCrafting(): boolean;
        simulationDistance(): number;
        levels(): $Set<$ResourceKey<$Level>>;
        chunkRadius(): number;
        maxPlayers(): number;
        enforcesSecureChat(): boolean;
        playerId(): number;
        commonPlayerSpawnInfo(): $CommonPlayerSpawnInfo;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundLoginPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundLoginPacket>;
        constructor(arg0: number, arg1: boolean, arg2: $Set_<$ResourceKey_<$Level>>, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: boolean, arg9: $CommonPlayerSpawnInfo_, arg10: boolean);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundLoginPacket}.
     */
    export type $ClientboundLoginPacket_ = { commonPlayerSpawnInfo?: $CommonPlayerSpawnInfo_, simulationDistance?: number, levels?: $Set_<$ResourceKey_<$Level>>, enforcesSecureChat?: boolean, doLimitedCrafting?: boolean, chunkRadius?: number, reducedDebugInfo?: boolean, maxPlayers?: number, showDeathScreen?: boolean, playerId?: number, hardcore?: boolean,  } | [commonPlayerSpawnInfo?: $CommonPlayerSpawnInfo_, simulationDistance?: number, levels?: $Set_<$ResourceKey_<$Level>>, enforcesSecureChat?: boolean, doLimitedCrafting?: boolean, chunkRadius?: number, reducedDebugInfo?: boolean, maxPlayers?: number, showDeathScreen?: boolean, playerId?: number, hardcore?: boolean, ];
    export class $ServerboundChatPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        salt(): number;
        timeStamp(): $Instant;
        lastSeenMessages(): $LastSeenMessages$Update;
        handle(arg0: $ServerGamePacketListener): void;
        signature(): $MessageSignature;
        type(): $PacketType<$ServerboundChatPacket>;
        message(): string;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChatPacket>;
        constructor(arg0: string, arg1: $Instant, arg2: number, arg3: $MessageSignature_, arg4: $LastSeenMessages$Update_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundChatPacket}.
     */
    export type $ServerboundChatPacket_ = { timeStamp?: $Instant, signature?: $MessageSignature_, message?: string, lastSeenMessages?: $LastSeenMessages$Update_, salt?: number,  } | [timeStamp?: $Instant, signature?: $MessageSignature_, message?: string, lastSeenMessages?: $LastSeenMessages$Update_, salt?: number, ];
    export class $ClientboundSetDefaultSpawnPositionPacket implements $Packet<$ClientGamePacketListener> {
        getPos(): $BlockPos;
        getAngle(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetDefaultSpawnPositionPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetDefaultSpawnPositionPacket>;
        constructor(arg0: $BlockPos_, arg1: number);
        get pos(): $BlockPos;
        get angle(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundSetEntityDataPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        packedItems(): $List<$SynchedEntityData$DataValue<never>>;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetEntityDataPacket>;
        id(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static EOF_MARKER: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSetEntityDataPacket>;
        constructor(arg0: number, arg1: $List_<$SynchedEntityData$DataValue_<never>>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundSetEntityDataPacket}.
     */
    export type $ClientboundSetEntityDataPacket_ = { id?: number, packedItems?: $List_<$SynchedEntityData$DataValue_<never>>,  } | [id?: number, packedItems?: $List_<$SynchedEntityData$DataValue_<never>>, ];
    export class $ClientboundPlayerInfoUpdatePacket$EntryBuilder {
    }
    export class $ClientboundTabListPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        handle(arg0: $ClientGamePacketListener): void;
        header(): $Component;
        footer(): $Component;
        type(): $PacketType<$ClientboundTabListPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundTabListPacket>;
        constructor(arg0: $Component_, arg1: $Component_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundTabListPacket}.
     */
    export type $ClientboundTabListPacket_ = { header?: $Component_, footer?: $Component_,  } | [header?: $Component_, footer?: $Component_, ];
    export class $ClientboundSoundEntityPacket implements $Packet<$ClientGamePacketListener> {
        getVolume(): number;
        getPitch(): number;
        getSound(): $Holder<$SoundEvent>;
        getSource(): $SoundSource;
        getSeed(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSoundEntityPacket>;
        getId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundSoundEntityPacket>;
        constructor(arg0: $Holder_<$SoundEvent>, arg1: $SoundSource_, arg2: $Entity, arg3: number, arg4: number, arg5: number);
        get volume(): number;
        get pitch(): number;
        get sound(): $Holder<$SoundEvent>;
        get source(): $SoundSource;
        get seed(): number;
        get id(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundOpenSignEditorPacket implements $Packet<$ClientGamePacketListener> {
        getPos(): $BlockPos;
        isFrontText(): boolean;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundOpenSignEditorPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundOpenSignEditorPacket>;
        constructor(arg0: $BlockPos_, arg1: boolean);
        get pos(): $BlockPos;
        get frontText(): boolean;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundRecipePacket$State extends $Enum<$ClientboundRecipePacket$State> {
        static values(): $ClientboundRecipePacket$State[];
        static valueOf(arg0: string): $ClientboundRecipePacket$State;
        static ADD: $ClientboundRecipePacket$State;
        static INIT: $ClientboundRecipePacket$State;
        static REMOVE: $ClientboundRecipePacket$State;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundRecipePacket$State}.
     */
    export type $ClientboundRecipePacket$State_ = "init" | "add" | "remove";
    export class $ClientboundExplodePacket implements $Packet<$ClientGamePacketListener> {
        getZ(): number;
        getPower(): number;
        getBlockInteraction(): $Explosion$BlockInteraction;
        getToBlow(): $List<$BlockPos>;
        getSmallExplosionParticles(): $ParticleOptions;
        getLargeExplosionParticles(): $ParticleOptions;
        getExplosionSound(): $Holder<$SoundEvent>;
        getY(): number;
        getX(): number;
        getKnockbackX(): number;
        getKnockbackY(): number;
        getKnockbackZ(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundExplodePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundExplodePacket>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $List_<$BlockPos_>, arg5: $Vec3_, arg6: $Explosion$BlockInteraction_, arg7: $ParticleOptions_, arg8: $ParticleOptions_, arg9: $Holder_<$SoundEvent>);
        get z(): number;
        get power(): number;
        get blockInteraction(): $Explosion$BlockInteraction;
        get toBlow(): $List<$BlockPos>;
        get smallExplosionParticles(): $ParticleOptions;
        get largeExplosionParticles(): $ParticleOptions;
        get explosionSound(): $Holder<$SoundEvent>;
        get y(): number;
        get x(): number;
        get knockbackX(): number;
        get knockbackY(): number;
        get knockbackZ(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $CommonPlayerSpawnInfo extends $Record {
        portalCooldown(): number;
        lastDeathLocation(): ($GlobalPos) | undefined;
        dimensionType(): $Holder<$DimensionType>;
        isFlat(): boolean;
        gameType(): $GameType;
        dimension(): $ResourceKey<$Level>;
        previousGameType(): $GameType;
        seed(): number;
        isDebug(): boolean;
        write(arg0: $RegistryFriendlyByteBuf): void;
        constructor(arg0: $Holder_<$DimensionType>, arg1: $ResourceKey_<$Level>, arg2: number, arg3: $GameType_, arg4: $GameType_, arg5: boolean, arg6: boolean, arg7: ($GlobalPos_) | undefined, arg8: number);
        constructor(arg0: $RegistryFriendlyByteBuf);
        get flat(): boolean;
        get debug(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CommonPlayerSpawnInfo}.
     */
    export type $CommonPlayerSpawnInfo_ = { isFlat?: boolean, dimensionType?: $Holder_<$DimensionType>, seed?: number, portalCooldown?: number, previousGameType?: $GameType_, dimension?: $ResourceKey_<$Level>, lastDeathLocation?: ($GlobalPos_) | undefined, isDebug?: boolean, gameType?: $GameType_,  } | [isFlat?: boolean, dimensionType?: $Holder_<$DimensionType>, seed?: number, portalCooldown?: number, previousGameType?: $GameType_, dimension?: $ResourceKey_<$Level>, lastDeathLocation?: ($GlobalPos_) | undefined, isDebug?: boolean, gameType?: $GameType_, ];
    export class $ClientboundLevelChunkPacketData$BlockEntityInfo {
        static LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$ClientboundLevelChunkPacketData$BlockEntityInfo>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundLevelChunkPacketData$BlockEntityInfo>;
        constructor(arg0: number, arg1: number, arg2: $BlockEntityType_<never>, arg3: $CompoundTag_);
    }
    export class $ClientboundCustomChatCompletionsPacket$Action extends $Enum<$ClientboundCustomChatCompletionsPacket$Action> {
        static values(): $ClientboundCustomChatCompletionsPacket$Action[];
        static valueOf(arg0: string): $ClientboundCustomChatCompletionsPacket$Action;
        static ADD: $ClientboundCustomChatCompletionsPacket$Action;
        static SET: $ClientboundCustomChatCompletionsPacket$Action;
        static REMOVE: $ClientboundCustomChatCompletionsPacket$Action;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundCustomChatCompletionsPacket$Action}.
     */
    export type $ClientboundCustomChatCompletionsPacket$Action_ = "add" | "remove" | "set";
    export class $ServerboundInteractPacket$InteractionAtLocationAction implements $ServerboundInteractPacket$Action {
    }
    export class $ServerboundPlayerActionPacket$Action extends $Enum<$ServerboundPlayerActionPacket$Action> {
        static values(): $ServerboundPlayerActionPacket$Action[];
        static valueOf(arg0: string): $ServerboundPlayerActionPacket$Action;
        static STOP_DESTROY_BLOCK: $ServerboundPlayerActionPacket$Action;
        static DROP_ALL_ITEMS: $ServerboundPlayerActionPacket$Action;
        static DROP_ITEM: $ServerboundPlayerActionPacket$Action;
        static RELEASE_USE_ITEM: $ServerboundPlayerActionPacket$Action;
        static ABORT_DESTROY_BLOCK: $ServerboundPlayerActionPacket$Action;
        static SWAP_ITEM_WITH_OFFHAND: $ServerboundPlayerActionPacket$Action;
        static START_DESTROY_BLOCK: $ServerboundPlayerActionPacket$Action;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundPlayerActionPacket$Action}.
     */
    export type $ServerboundPlayerActionPacket$Action_ = "start_destroy_block" | "abort_destroy_block" | "stop_destroy_block" | "drop_all_items" | "drop_item" | "release_use_item" | "swap_item_with_offhand";
    export class $ServerboundSetJigsawBlockPacket implements $Packet<$ServerGamePacketListener> {
        getPos(): $BlockPos;
        getFinalState(): string;
        getJoint(): $JigsawBlockEntity$JointType;
        getPlacementPriority(): number;
        getSelectionPriority(): number;
        getTarget(): $ResourceLocation;
        handle(arg0: $ServerGamePacketListener): void;
        getName(): $ResourceLocation;
        type(): $PacketType<$ServerboundSetJigsawBlockPacket>;
        getPool(): $ResourceLocation;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSetJigsawBlockPacket>;
        constructor(arg0: $BlockPos_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: string, arg5: $JigsawBlockEntity$JointType_, arg6: number, arg7: number);
        get pos(): $BlockPos;
        get finalState(): string;
        get joint(): $JigsawBlockEntity$JointType;
        get placementPriority(): number;
        get selectionPriority(): number;
        get target(): $ResourceLocation;
        get name(): $ResourceLocation;
        get pool(): $ResourceLocation;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundBossEventPacket$UpdateNameOperation extends $Record implements $ClientboundBossEventPacket$Operation {
    }
    /**
     * Values that may be interpreted as {@link $ClientboundBossEventPacket$UpdateNameOperation}.
     */
    export type $ClientboundBossEventPacket$UpdateNameOperation_ = { name?: $Component_,  } | [name?: $Component_, ];
    export class $ServerboundSelectTradePacket implements $Packet<$ServerGamePacketListener> {
        getItem(): number;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundSelectTradePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundSelectTradePacket>;
        constructor(arg0: number);
        get item(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundTeleportEntityPacket implements $Packet<$ClientGamePacketListener>, $PacketActuallyInSubLevelExtension {
        getZ(): number;
        getY(): number;
        getX(): number;
        sable$setActuallyInSubLevel(arg0: boolean): void;
        isOnGround(): boolean;
        getyRot(): number;
        getxRot(): number;
        sable$isActuallyInSubLevel(): boolean;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundTeleportEntityPacket>;
        getId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundTeleportEntityPacket>;
        constructor(arg0: $Entity);
        get z(): number;
        get y(): number;
        get x(): number;
        get onGround(): boolean;
        get yRot(): number;
        get xRot(): number;
        get id(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundMoveEntityPacket implements $Packet<$ClientGamePacketListener> {
        getXa(): number;
        getYa(): number;
        getZa(): number;
        hasPosition(): boolean;
        getEntity(arg0: $Level_): $Entity;
        isOnGround(): boolean;
        getyRot(): number;
        getxRot(): number;
        hasRotation(): boolean;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundMoveEntityPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        get xa(): number;
        get ya(): number;
        get za(): number;
        get onGround(): boolean;
        get yRot(): number;
        get xRot(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundContainerSetDataPacket implements $Packet<$ClientGamePacketListener> {
        getContainerId(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundContainerSetDataPacket>;
        getValue(): number;
        getId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundContainerSetDataPacket>;
        constructor(arg0: number, arg1: number, arg2: number);
        get containerId(): number;
        get value(): number;
        get id(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundDebugSamplePacket extends $Record implements $Packet<$ClientGamePacketListener> {
        debugSampleType(): $RemoteDebugSampleType;
        handle(arg0: $ClientGamePacketListener): void;
        sample(): number[];
        type(): $PacketType<$ClientboundDebugSamplePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundDebugSamplePacket>;
        constructor(arg0: number[], arg1: $RemoteDebugSampleType_);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundDebugSamplePacket}.
     */
    export type $ClientboundDebugSamplePacket_ = { sample?: number[], debugSampleType?: $RemoteDebugSampleType_,  } | [sample?: number[], debugSampleType?: $RemoteDebugSampleType_, ];
    export class $ClientboundContainerClosePacket implements $Packet<$ClientGamePacketListener> {
        getContainerId(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundContainerClosePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundContainerClosePacket>;
        constructor(arg0: number);
        get containerId(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundInteractPacket$InteractionAction implements $ServerboundInteractPacket$Action {
    }
    export class $ClientboundLevelEventPacket implements $Packet<$ClientGamePacketListener> {
        getPos(): $BlockPos;
        isGlobalEvent(): boolean;
        handle(arg0: $ClientGamePacketListener): void;
        getData(): number;
        type(): $PacketType<$ClientboundLevelEventPacket>;
        getType(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundLevelEventPacket>;
        constructor(arg0: number, arg1: $BlockPos_, arg2: number, arg3: boolean);
        get pos(): $BlockPos;
        get globalEvent(): boolean;
        get data(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundLightUpdatePacket implements $Packet<$ClientGamePacketListener> {
        getZ(): number;
        getLightData(): $ClientboundLightUpdatePacketData;
        getX(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundLightUpdatePacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundLightUpdatePacket>;
        constructor(arg0: $ChunkPos, arg1: $LevelLightEngine, arg2: $BitSet, arg3: $BitSet);
        get z(): number;
        get lightData(): $ClientboundLightUpdatePacketData;
        get x(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundEditBookPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        pages(): $List<string>;
        handle(arg0: $ServerGamePacketListener): void;
        title(): (string) | undefined;
        slot(): number;
        type(): $PacketType<$ServerboundEditBookPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static MAX_BYTES_PER_CHAR: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundEditBookPacket>;
        constructor(arg0: number, arg1: $List_<string>, arg2: (string) | undefined);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundEditBookPacket}.
     */
    export type $ServerboundEditBookPacket_ = { slot?: number, title?: (string) | undefined, pages?: $List_<string>,  } | [slot?: number, title?: (string) | undefined, pages?: $List_<string>, ];
    export class $ClientboundSetChunkCacheRadiusPacket implements $Packet<$ClientGamePacketListener> {
        getRadius(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetChunkCacheRadiusPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetChunkCacheRadiusPacket>;
        constructor(arg0: number);
        get radius(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundTagQueryPacket implements $Packet<$ClientGamePacketListener> {
        isSkippable(): boolean;
        getTag(): $CompoundTag;
        getTransactionId(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundTagQueryPacket>;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundTagQueryPacket>;
        constructor(arg0: number, arg1: $CompoundTag_);
        get skippable(): boolean;
        get tag(): $CompoundTag;
        get transactionId(): number;
        get terminal(): boolean;
    }
    export class $ClientboundLevelChunkWithLightPacket implements $Packet<$ClientGamePacketListener> {
        getZ(): number;
        getLightData(): $ClientboundLightUpdatePacketData;
        getX(): number;
        getChunkData(): $ClientboundLevelChunkPacketData;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundLevelChunkWithLightPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundLevelChunkWithLightPacket>;
        constructor(arg0: $LevelChunk, arg1: $LevelLightEngine, arg2: $BitSet, arg3: $BitSet);
        get z(): number;
        get lightData(): $ClientboundLightUpdatePacketData;
        get x(): number;
        get chunkData(): $ClientboundLevelChunkPacketData;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundChunkBatchReceivedPacket extends $Record implements $Packet<$ServerGamePacketListener> {
        desiredChunksPerTick(): number;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundChunkBatchReceivedPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundChunkBatchReceivedPacket>;
        constructor(arg0: number);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundChunkBatchReceivedPacket}.
     */
    export type $ServerboundChunkBatchReceivedPacket_ = { desiredChunksPerTick?: number,  } | [desiredChunksPerTick?: number, ];
    export class $ClientboundCommandsPacket$NodeResolver {
    }
    export class $ServerboundPickItemPacket implements $Packet<$ServerGamePacketListener> {
        getSlot(): number;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundPickItemPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPickItemPacket>;
        constructor(arg0: number);
        get slot(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundServerDataPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        motd(): $Component;
        iconBytes(): (number[]) | undefined;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundServerDataPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundServerDataPacket>;
        constructor(arg0: $Component_, arg1: (number[]) | undefined);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundServerDataPacket}.
     */
    export type $ClientboundServerDataPacket_ = { motd?: $Component_, iconBytes?: (number[]) | undefined,  } | [motd?: $Component_, iconBytes?: (number[]) | undefined, ];
    export class $ClientboundChunksBiomesPacket extends $Record implements $Packet<$ClientGamePacketListener> {
        static forChunks(arg0: $List_<$LevelChunk>): $ClientboundChunksBiomesPacket;
        chunkBiomeData(): $List<$ClientboundChunksBiomesPacket$ChunkBiomeData>;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundChunksBiomesPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundChunksBiomesPacket>;
        constructor(arg0: $List_<$ClientboundChunksBiomesPacket$ChunkBiomeData_>);
        get skippable(): boolean;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundChunksBiomesPacket}.
     */
    export type $ClientboundChunksBiomesPacket_ = { chunkBiomeData?: $List_<$ClientboundChunksBiomesPacket$ChunkBiomeData_>,  } | [chunkBiomeData?: $List_<$ClientboundChunksBiomesPacket$ChunkBiomeData_>, ];
    export class $ClientboundRemoveEntitiesPacket implements $Packet<$ClientGamePacketListener> {
        getEntityIds(): $IntList;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundRemoveEntitiesPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundRemoveEntitiesPacket>;
        constructor(arg0: $IntList);
        constructor(...arg0: number[]);
        get entityIds(): $IntList;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundUseItemPacket implements $Packet<$ServerGamePacketListener> {
        getXRot(): number;
        getYRot(): number;
        getHand(): $InteractionHand;
        getSequence(): number;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundUseItemPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundUseItemPacket>;
        constructor(arg0: $InteractionHand_, arg1: number, arg2: number, arg3: number);
        get XRot(): number;
        get YRot(): number;
        get hand(): $InteractionHand;
        get sequence(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientGamePacketListener {
    }
    export interface $ClientGamePacketListener extends $ClientPongPacketListener, $ClientCommonPacketListener {
        handleDamageEvent(arg0: $ClientboundDamageEventPacket_): void;
        handleEntityEvent(arg0: $ClientboundEntityEventPacket): void;
        handleBlockChangedAck(arg0: $ClientboundBlockChangedAckPacket_): void;
        handleGameEvent(arg0: $ClientboundGameEventPacket): void;
        handleAddEntity(arg0: $ClientboundAddEntityPacket): void;
        handleRespawn(arg0: $ClientboundRespawnPacket_): void;
        handleLogin(arg0: $ClientboundLoginPacket_): void;
        handleMoveVehicle(arg0: $ClientboundMoveVehiclePacket): void;
        handleMovePlayer(arg0: $ClientboundPlayerPositionPacket): void;
        handleSetCarriedItem(arg0: $ClientboundSetCarriedItemPacket): void;
        handleAnimate(arg0: $ClientboundAnimatePacket): void;
        handleContainerClose(arg0: $ClientboundContainerClosePacket): void;
        handlePlaceRecipe(arg0: $ClientboundPlaceGhostRecipePacket): void;
        handlePlayerAbilities(arg0: $ClientboundPlayerAbilitiesPacket): void;
        handleChangeDifficulty(arg0: $ClientboundChangeDifficultyPacket): void;
        handleBlockEntityData(arg0: $ClientboundBlockEntityDataPacket): void;
        handleAddExperienceOrb(arg0: $ClientboundAddExperienceOrbPacket): void;
        handleSetEntityMotion(arg0: $ClientboundSetEntityMotionPacket): void;
        handleSetEntityData(arg0: $ClientboundSetEntityDataPacket_): void;
        handleTeleportEntity(arg0: $ClientboundTeleportEntityPacket): void;
        handleTickingState(arg0: $ClientboundTickingStatePacket_): void;
        handleTickingStep(arg0: $ClientboundTickingStepPacket_): void;
        handleMoveEntity(arg0: $ClientboundMoveEntityPacket): void;
        handleRotateMob(arg0: $ClientboundRotateHeadPacket): void;
        handleRemoveEntities(arg0: $ClientboundRemoveEntitiesPacket): void;
        handleChunkBlocksUpdate(arg0: $ClientboundSectionBlocksUpdatePacket): void;
        handleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket): void;
        handleChunksBiomes(arg0: $ClientboundChunksBiomesPacket_): void;
        handleForgetLevelChunk(arg0: $ClientboundForgetLevelChunkPacket_): void;
        handleBlockUpdate(arg0: $ClientboundBlockUpdatePacket): void;
        handleConfigurationStart(arg0: $ClientboundStartConfigurationPacket): void;
        handleTakeItemEntity(arg0: $ClientboundTakeItemEntityPacket): void;
        handleSystemChat(arg0: $ClientboundSystemChatPacket_): void;
        handlePlayerChat(arg0: $ClientboundPlayerChatPacket_): void;
        handleDisguisedChat(arg0: $ClientboundDisguisedChatPacket_): void;
        handleDeleteChat(arg0: $ClientboundDeleteChatPacket_): void;
        handleHurtAnimation(arg0: $ClientboundHurtAnimationPacket_): void;
        handleSetTime(arg0: $ClientboundSetTimePacket): void;
        handleSetSpawn(arg0: $ClientboundSetDefaultSpawnPositionPacket): void;
        handleSetEntityPassengersPacket(arg0: $ClientboundSetPassengersPacket): void;
        handleEntityLinkPacket(arg0: $ClientboundSetEntityLinkPacket): void;
        handleSetHealth(arg0: $ClientboundSetHealthPacket): void;
        handleSetExperience(arg0: $ClientboundSetExperiencePacket): void;
        handleExplosion(arg0: $ClientboundExplodePacket): void;
        handleHorseScreenOpen(arg0: $ClientboundHorseScreenOpenPacket): void;
        handleOpenScreen(arg0: $ClientboundOpenScreenPacket): void;
        handleContainerSetSlot(arg0: $ClientboundContainerSetSlotPacket): void;
        handleContainerContent(arg0: $ClientboundContainerSetContentPacket): void;
        handleOpenSignEditor(arg0: $ClientboundOpenSignEditorPacket): void;
        handleContainerSetData(arg0: $ClientboundContainerSetDataPacket): void;
        handleSetEquipment(arg0: $ClientboundSetEquipmentPacket): void;
        handleBlockEvent(arg0: $ClientboundBlockEventPacket): void;
        handleBlockDestruction(arg0: $ClientboundBlockDestructionPacket): void;
        handleMapItemData(arg0: $ClientboundMapItemDataPacket_): void;
        handleLevelEvent(arg0: $ClientboundLevelEventPacket): void;
        handleUpdateAdvancementsPacket(arg0: $ClientboundUpdateAdvancementsPacket): void;
        handleSelectAdvancementsTab(arg0: $ClientboundSelectAdvancementsTabPacket): void;
        handleCommands(arg0: $ClientboundCommandsPacket): void;
        handleStopSoundEvent(arg0: $ClientboundStopSoundPacket): void;
        handleCommandSuggestions(arg0: $ClientboundCommandSuggestionsPacket_): void;
        handleUpdateRecipes(arg0: $ClientboundUpdateRecipesPacket): void;
        handleLookAt(arg0: $ClientboundPlayerLookAtPacket): void;
        handleTagQueryPacket(arg0: $ClientboundTagQueryPacket): void;
        handleAwardStats(arg0: $ClientboundAwardStatsPacket_): void;
        handleAddOrRemoveRecipes(arg0: $ClientboundRecipePacket): void;
        handleUpdateMobEffect(arg0: $ClientboundUpdateMobEffectPacket): void;
        handlePlayerCombatEnd(arg0: $ClientboundPlayerCombatEndPacket): void;
        handlePlayerCombatEnter(arg0: $ClientboundPlayerCombatEnterPacket): void;
        handlePlayerCombatKill(arg0: $ClientboundPlayerCombatKillPacket_): void;
        handleSetCamera(arg0: $ClientboundSetCameraPacket): void;
        handleInitializeBorder(arg0: $ClientboundInitializeBorderPacket): void;
        handleSetBorderCenter(arg0: $ClientboundSetBorderCenterPacket): void;
        handleSetBorderLerpSize(arg0: $ClientboundSetBorderLerpSizePacket): void;
        handleSetBorderSize(arg0: $ClientboundSetBorderSizePacket): void;
        handleSetBorderWarningDistance(arg0: $ClientboundSetBorderWarningDistancePacket): void;
        handleSetBorderWarningDelay(arg0: $ClientboundSetBorderWarningDelayPacket): void;
        handleTitlesClear(arg0: $ClientboundClearTitlesPacket): void;
        handleServerData(arg0: $ClientboundServerDataPacket_): void;
        handleCustomChatCompletions(arg0: $ClientboundCustomChatCompletionsPacket_): void;
        setActionBarText(arg0: $ClientboundSetActionBarTextPacket_): void;
        setTitleText(arg0: $ClientboundSetTitleTextPacket_): void;
        setSubtitleText(arg0: $ClientboundSetSubtitleTextPacket_): void;
        setTitlesAnimation(arg0: $ClientboundSetTitlesAnimationPacket): void;
        handleTabListCustomisation(arg0: $ClientboundTabListPacket_): void;
        handleRemoveMobEffect(arg0: $ClientboundRemoveMobEffectPacket_): void;
        handlePlayerInfoRemove(arg0: $ClientboundPlayerInfoRemovePacket_): void;
        handlePlayerInfoUpdate(arg0: $ClientboundPlayerInfoUpdatePacket): void;
        handleSoundEvent(arg0: $ClientboundSoundPacket): void;
        handleSoundEntityEvent(arg0: $ClientboundSoundEntityPacket): void;
        handleBossUpdate(arg0: $ClientboundBossEventPacket): void;
        handleItemCooldown(arg0: $ClientboundCooldownPacket_): void;
        handleOpenBook(arg0: $ClientboundOpenBookPacket): void;
        handleAddObjective(arg0: $ClientboundSetObjectivePacket): void;
        handleSetScore(arg0: $ClientboundSetScorePacket_): void;
        handleResetScore(arg0: $ClientboundResetScorePacket_): void;
        handleSetDisplayObjective(arg0: $ClientboundSetDisplayObjectivePacket): void;
        handleSetPlayerTeamPacket(arg0: $ClientboundSetPlayerTeamPacket): void;
        handleParticleEvent(arg0: $ClientboundLevelParticlesPacket): void;
        handleUpdateAttributes(arg0: $ClientboundUpdateAttributesPacket): void;
        handleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket): void;
        handleMerchantOffers(arg0: $ClientboundMerchantOffersPacket): void;
        handleSetChunkCacheRadius(arg0: $ClientboundSetChunkCacheRadiusPacket): void;
        handleSetSimulationDistance(arg0: $ClientboundSetSimulationDistancePacket_): void;
        handleSetChunkCacheCenter(arg0: $ClientboundSetChunkCacheCenterPacket): void;
        handleBundlePacket(arg0: $ClientboundBundlePacket): void;
        handleProjectilePowerPacket(arg0: $ClientboundProjectilePowerPacket): void;
        handleChunkBatchStart(arg0: $ClientboundChunkBatchStartPacket): void;
        handleChunkBatchFinished(arg0: $ClientboundChunkBatchFinishedPacket_): void;
        handleDebugSample(arg0: $ClientboundDebugSamplePacket_): void;
        protocol(): $ConnectionProtocol;
        set actionBarText(value: $ClientboundSetActionBarTextPacket_);
        set titleText(value: $ClientboundSetTitleTextPacket_);
        set subtitleText(value: $ClientboundSetSubtitleTextPacket_);
        set titlesAnimation(value: $ClientboundSetTitlesAnimationPacket);
    }
    export class $ClientboundSetBorderCenterPacket implements $Packet<$ClientGamePacketListener> {
        getNewCenterX(): number;
        getNewCenterZ(): number;
        handle(arg0: $ClientGamePacketListener): void;
        type(): $PacketType<$ClientboundSetBorderCenterPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundSetBorderCenterPacket>;
        constructor(arg0: $WorldBorder);
        get newCenterX(): number;
        get newCenterZ(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerboundContainerClickPacket implements $Packet<$ServerGamePacketListener> {
        getCarriedItem(): $ItemStack;
        getStateId(): number;
        getContainerId(): number;
        getSlotNum(): number;
        getButtonNum(): number;
        getClickType(): $ClickType;
        getChangedSlots(): $Int2ObjectMap<$ItemStack>;
        handle(arg0: $ServerGamePacketListener): void;
        type(): $PacketType<$ServerboundContainerClickPacket>;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ServerboundContainerClickPacket>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $ClickType_, arg5: $ItemStack_, arg6: $Int2ObjectMap<$ItemStack_>);
        get carriedItem(): $ItemStack;
        get stateId(): number;
        get containerId(): number;
        get slotNum(): number;
        get buttonNum(): number;
        get clickType(): $ClickType;
        get changedSlots(): $Int2ObjectMap<$ItemStack>;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ClientboundAnimatePacket implements $Packet<$ClientGamePacketListener> {
        handle(arg0: $ClientGamePacketListener): void;
        getAction(): number;
        type(): $PacketType<$ClientboundAnimatePacket>;
        getId(): number;
        isSkippable(): boolean;
        isTerminal(): boolean;
        static CRITICAL_HIT: number;
        static MAGIC_CRITICAL_HIT: number;
        static SWING_MAIN_HAND: number;
        static SWING_OFF_HAND: number;
        static WAKE_UP: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundAnimatePacket>;
        constructor(arg0: $Entity, arg1: number);
        get action(): number;
        get id(): number;
        get skippable(): boolean;
        get terminal(): boolean;
    }
    export class $ServerPacketListener {
        static LOGGER: $Logger;
    }
    export interface $ServerPacketListener extends $ServerboundPacketListener {
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
    }
    export class $ServerboundSeenAdvancementsPacket$Action extends $Enum<$ServerboundSeenAdvancementsPacket$Action> {
        static values(): $ServerboundSeenAdvancementsPacket$Action[];
        static valueOf(arg0: string): $ServerboundSeenAdvancementsPacket$Action;
        static OPENED_TAB: $ServerboundSeenAdvancementsPacket$Action;
        static CLOSED_SCREEN: $ServerboundSeenAdvancementsPacket$Action;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundSeenAdvancementsPacket$Action}.
     */
    export type $ServerboundSeenAdvancementsPacket$Action_ = "opened_tab" | "closed_screen";
}
