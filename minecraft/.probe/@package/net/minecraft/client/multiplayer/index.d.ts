import { $LevelRenderer, $DimensionSpecialEffects } from "@package/net/minecraft/client/renderer";
import { $ServerLinks, $ServerLinks_ } from "@package/net/minecraft/server";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $XaeroMinimapSession } from "@package/xaero/common";
import { $Entity, $Entity$RemovalReason_ } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $CloseableResourceManager, $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $CustomPacketPayload_, $CustomPacketPayload$Type_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $ClientCommonNetworkHandlerAccessor, $ClientLoginNetworkHandlerAccessor } from "@package/io/wispforest/owo/mixin";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $DisconnectionDetails_, $ServerboundPacketListener, $TickablePacketListener, $Connection, $FriendlyByteBuf, $DisconnectionDetails, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $URL } from "@package/java/net";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $AccessorClientAdvancementManager } from "@package/de/dafuqs/revelationary/mixin/client";
import { $AccessorClientChunkCacheStorage } from "@package/com/railwayteam/railways/mixin/conductor_possession";
import { $KubeAnimatedParticle, $KubeSessionData } from "@package/dev/latvian/mods/kubejs/client";
import { $PlayerChatMessage_, $RemoteChatSession, $SignedMessageChain$Encoder, $SignedMessageValidator, $LocalChatSession, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LevelChunk, $ChunkSource } from "@package/net/minecraft/world/level/chunk";
import { $FiguraClientCommandSource } from "@package/org/figuramc/figura/utils";
import { $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $Duration_ } from "@package/java/time";
import { $SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$ElementSuggestionType_, $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $LocalSampleLogger } from "@package/net/minecraft/util/debugchart";
import { $NeoListenableNetworkHandler } from "@package/org/sinytra/fabric/networking_api";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $IXaeroMinimapClientWorld, $MinimapClientWorldData } from "@package/xaero/common/minimap/mcworld";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $StatsCounter } from "@package/net/minecraft/stats";
import { $AccessorMultiPlayerGameMode } from "@package/xfacthd/framedblocks/mixin/client";
import { $IMixinServerList } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $IWorldMapClientPlayNetHandler } from "@package/xaero/map/core";
import { $ServerStatus$Players } from "@package/net/minecraft/network/protocol/status";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $UUID_, $Set_, $List, $List_, $UUID, $ArrayList, $Map, $Map_, $Collection, $Set } from "@package/java/util";
import { $ClientboundCookieRequestPacket_ } from "@package/net/minecraft/network/protocol/cookie";
import { $ChunkTrackerHolder, $ChunkTracker } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/map";
import { $ServerListAccessor } from "@package/com/benbenlaw/core/mixin/client";
import { $HolderLookup$Provider, $RegistryAccess$Frozen, $RegistrySynchronization$PackedRegistryEntry_, $Direction_, $LayeredRegistryAccess, $Holder_, $BlockPos, $BlockPos_, $BlockPos$MutableBlockPos, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $FabricClientCommandSource } from "@package/net/fabricmc/fabric/api/client/command/v2";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $Iterable, $Thread, $Object, $Exception, $Throwable, $Record, $Runnable_ } from "@package/java/lang";
import { $BiomeSeedProvider } from "@package/net/caffeinemc/mods/sodium/client/world";
import { $ClientLoginNetworkAddon } from "@package/net/fabricmc/fabric/impl/networking/client";
import { $GameRules, $ChunkPos, $ColorResolver_, $GameType, $EntityGetter, $LevelHeightAccessor, $Level, $GameType_ } from "@package/net/minecraft/world/level";
import { $ClientboundHelloPacket, $ClientboundLoginDisconnectPacket, $ClientboundCustomQueryPacket_, $ClientboundGameProfilePacket_, $ClientboundLoginCompressionPacket, $ClientLoginPacketListener } from "@package/net/minecraft/network/protocol/login";
import { $DebugScreenOverlay, $ChatComponent$State, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ClientboundPongResponsePacket_ } from "@package/net/minecraft/network/protocol/ping";
import { $IXaeroMinimapClientPlayNetHandler } from "@package/xaero/common/core";
import { $WaterOcclusionContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $ServerAddress } from "@package/net/minecraft/client/multiplayer/resolver";
import { $ClientPacketListenerAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $Screen, $Screen$DeferredTooltipRendering, $ConfirmScreen } from "@package/net/minecraft/client/gui/screens";
import { $SimpleChannelInboundHandler } from "@package/io/netty/channel";
import { $ResourceKey, $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ClientLoginNetworkHandlerAccessor as $ClientLoginNetworkHandlerAccessor$1 } from "@package/net/fabricmc/fabric/mixin/networking/client/accessor";
import { $PlayerControllerAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $AccessorMultiPlayerGameMode as $AccessorMultiPlayerGameMode$1 } from "@package/org/violetmoon/quark/mixin/mixins/client/accessor";
import { $WaterOcclusionContainer } from "@package/dev/ryanhcode/sable/sublevel/water_occlusion";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeManager, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $CommandDispatcher, $ParseResults } from "@package/com/mojang/brigadier";
import { $DebugQueryHandler, $Minecraft, $User, $ClientRecipeBook } from "@package/net/minecraft/client";
import { $RandomSource } from "@package/net/minecraft/util";
import { $AdvancementTree$Listener, $AdvancementHolder_, $AdvancementTree, $AdvancementHolder, $AdvancementProgress, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $InteractionHand_, $Difficulty_, $InteractionResult, $Difficulty } from "@package/net/minecraft/world";
import { $ExtendedServerListData } from "@package/net/neoforged/neoforge/client";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $ClickType_ } from "@package/net/minecraft/world/inventory";
import { $BooleanConsumer } from "@package/it/unimi/dsi/fastutil/booleans";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $LevelCallback, $LevelEntityGetter, $TransientEntitySectionManager } from "@package/net/minecraft/world/level/entity";
import { $TooltipFlag, $Item$TooltipContext, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SpriteSet } from "@package/net/minecraft/client/particle";
import { $IMixinClientPacketListener } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $ProfileKeyPair, $Player, $ProfileKeyPair_ } from "@package/net/minecraft/world/entity/player";
import { $SubLevelContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/plot";
import { $Function_ } from "@package/it/unimi/dsi/fastutil";
import { $IWorldMapClientWorld, $WorldMapClientWorldData } from "@package/xaero/map/mcworld";
import { $NetH } from "@package/com/tom/cpm/shared/network";
import { $ClientLevelAccessor } from "@package/dev/ryanhcode/offroad/mixin/client/multimining_destruction_progress";
import { $KnownPack_, $KnownPack, $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $AtomicReferenceArray } from "@package/java/util/concurrent/atomic";
import { $AccessorClientAdvancements } from "@package/vazkii/patchouli/mixin/client";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $ClientPacketListenerKJS, $ClientLevelKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $SearchTree } from "@package/net/minecraft/client/searchtree";
import { $Vec3_, $BlockHitResult, $EntityHitResult, $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $NetworkHandlerExtensions } from "@package/net/fabricmc/fabric/impl/networking";
import { $LevelPoseProviderExtension } from "@package/dev/ryanhcode/sable/mixinterface/clip_overwrite";
import { $ServerDataExtension } from "@package/com/aizistral/nochatreports/common/core";
import { $ClientboundResourcePackPopPacket_, $ClientboundCustomPayloadPacket_, $ClientboundPingPacket, $ClientboundCustomReportDetailsPacket_, $ClientboundServerLinksPacket_, $ClientboundStoreCookiePacket_, $ClientboundTransferPacket_, $ClientboundDisconnectPacket_, $ClientboundKeepAlivePacket, $ClientCommonPacketListener, $ClientboundResourcePackPushPacket_ } from "@package/net/minecraft/network/protocol/common";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $ClientLevelInvoker } from "@package/org/figuramc/figura/mixin";
import { $Supplier_, $BooleanSupplier_, $Consumer_ } from "@package/java/util/function";
import { $SuggestionsBuilder, $Suggestions } from "@package/com/mojang/brigadier/suggestion";
import { $Path_ } from "@package/java/nio/file";
import { $MapId_, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $TagNetworkSerialization$NetworkPayload } from "@package/net/minecraft/tags";
import { $Pose3dc } from "@package/dev/ryanhcode/sable/companion/math";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $ClientboundSetBorderSizePacket, $ClientboundDamageEventPacket_, $ClientboundUpdateAttributesPacket, $ClientboundHurtAnimationPacket_, $ClientboundPlayerInfoRemovePacket_, $ClientboundSetSimulationDistancePacket_, $ClientboundSetActionBarTextPacket_, $ClientboundSetCarriedItemPacket, $ClientboundLevelChunkWithLightPacket, $ClientboundDisguisedChatPacket_, $ClientboundPlayerCombatEnterPacket, $ClientboundSetBorderCenterPacket, $ClientboundTickingStepPacket_, $ClientboundSetDisplayObjectivePacket, $ClientboundTakeItemEntityPacket, $ClientboundSetExperiencePacket, $ClientboundStartConfigurationPacket, $ClientboundUpdateRecipesPacket, $ClientboundPlayerInfoUpdatePacket, $ClientboundPlayerCombatEndPacket, $ClientboundBlockChangedAckPacket_, $ClientboundRemoveEntitiesPacket, $ClientboundSetCameraPacket, $ClientboundSetEquipmentPacket, $ClientboundPlayerPositionPacket, $ClientboundCustomChatCompletionsPacket$Action_, $ClientboundAwardStatsPacket_, $ClientboundForgetLevelChunkPacket_, $ClientboundAddEntityPacket, $ClientboundSetDefaultSpawnPositionPacket, $ClientboundSetTitlesAnimationPacket, $ClientboundSetChunkCacheCenterPacket, $ClientboundCommandsPacket, $ClientboundLevelParticlesPacket, $ClientboundLevelEventPacket, $ClientboundSystemChatPacket_, $ClientboundPlayerChatPacket_, $ClientboundContainerSetSlotPacket, $ClientboundTabListPacket_, $ClientboundSetScorePacket_, $ClientboundMerchantOffersPacket, $ClientboundTeleportEntityPacket, $ClientboundUpdateAdvancementsPacket, $ClientboundChunkBatchStartPacket, $ClientboundMoveEntityPacket, $ClientboundChunkBatchFinishedPacket_, $ClientboundSetPlayerTeamPacket, $ClientboundContainerSetDataPacket, $ClientboundSetBorderWarningDelayPacket, $ClientboundExplodePacket, $ClientboundSelectAdvancementsTabPacket, $ClientboundDebugSamplePacket_, $ClientboundCooldownPacket_, $ClientboundLevelChunkPacketData, $ClientboundSetBorderWarningDistancePacket, $ClientboundSetBorderLerpSizePacket, $ClientboundBlockEntityDataPacket, $ClientboundAnimatePacket, $ClientboundDeleteChatPacket_, $ClientboundServerDataPacket_, $ClientboundContainerSetContentPacket, $ClientboundSoundPacket, $ClientboundCustomChatCompletionsPacket_, $ClientboundMoveVehiclePacket, $ClientboundSetTitleTextPacket_, $ClientboundTickingStatePacket_, $ClientboundPlayerLookAtPacket, $ClientboundSectionBlocksUpdatePacket, $ClientboundSetPassengersPacket, $ClientboundUpdateMobEffectPacket, $ClientboundLightUpdatePacket, $ClientboundBlockDestructionPacket, $ClientboundOpenBookPacket, $ClientboundBlockUpdatePacket, $ClientboundStopSoundPacket, $ClientboundLevelChunkPacketData$BlockEntityTagOutput, $ClientboundLoginPacket_, $ClientboundSetEntityLinkPacket, $ClientboundRespawnPacket_, $ClientboundRecipePacket, $ClientboundPlayerCombatKillPacket_, $ClientboundChunksBiomesPacket_, $ClientboundContainerClosePacket, $ClientboundSetEntityDataPacket_, $ClientboundSetObjectivePacket, $ClientboundPlaceGhostRecipePacket, $ClientboundHorseScreenOpenPacket, $ClientboundClearTitlesPacket, $ClientboundProjectilePowerPacket, $ClientboundBossEventPacket, $ClientboundAddExperienceOrbPacket, $ClientboundGameEventPacket, $ClientboundSetSubtitleTextPacket_, $ClientboundRotateHeadPacket, $ClientboundChangeDifficultyPacket, $ClientboundSetHealthPacket, $ClientboundSetEntityMotionPacket, $ClientboundRemoveMobEffectPacket_, $ClientboundSetTimePacket, $ClientboundResetScorePacket_, $ClientboundSetChunkCacheRadiusPacket, $ClientboundSoundEntityPacket, $ClientboundTagQueryPacket, $ClientboundMapItemDataPacket_, $ClientboundInitializeBorderPacket, $ClientboundEntityEventPacket, $ClientGamePacketListener, $ClientboundOpenScreenPacket, $ClientboundBundlePacket, $ClientboundCommandSuggestionsPacket_, $ClientboundOpenSignEditorPacket, $ClientboundPlayerAbilitiesPacket, $ClientboundBlockEventPacket } from "@package/net/minecraft/network/protocol/game";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $CachingClientLevel, $ClonedClientLevel } from "@package/com/sonicether/soundphysics/world";
import { $ClientboundUpdateEnabledFeaturesPacket_, $ClientboundFinishConfigurationPacket, $ClientboundResetChatPacket, $ClientConfigurationPacketListener, $ClientboundRegistryDataPacket_, $ClientboundSelectKnownPacks_ } from "@package/net/minecraft/network/protocol/configuration";
import { $WorldSessionTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $Stream } from "@package/java/util/stream";
import { $AccessorClientPacketListener } from "@package/com/aizistral/nochatreports/common/mixins/client";
import { $WorldMapSession } from "@package/xaero/map";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $IClientLevel, $ClientLevelData } from "@package/xaero/lib/client/level";
import { $ClientWorldAccessor } from "@package/net/caffeinemc/mods/lithium/common/client";
import { $Scoreboard, $PlayerTeam } from "@package/net/minecraft/world/scores";
import { $Font } from "@package/net/minecraft/client/gui";
import { $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ClientLevelAccessor as $ClientLevelAccessor$1 } from "@package/rbasamoyai/createbigcannons/mixin/client";
export * as chat from "@package/net/minecraft/client/multiplayer/chat";
export * as resolver from "@package/net/minecraft/client/multiplayer/resolver";
export * as prediction from "@package/net/minecraft/client/multiplayer/prediction";

declare module "@package/net/minecraft/client/multiplayer" {
    export class $SessionSearchTrees$Key {
        constructor();
    }
    export class $TagCollector {
        updateTags(arg0: $RegistryAccess, arg1: boolean): void;
        append(arg0: $ResourceKey_<$Registry<never>>, arg1: $TagNetworkSerialization$NetworkPayload): void;
        constructor();
    }
    export class $ServerData$State extends $Enum<$ServerData$State> {
        static values(): $ServerData$State[];
        static valueOf(arg0: string): $ServerData$State;
        static PINGING: $ServerData$State;
        static SUCCESSFUL: $ServerData$State;
        static INITIAL: $ServerData$State;
        static INCOMPATIBLE: $ServerData$State;
        static UNREACHABLE: $ServerData$State;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$State}.
     */
    export type $ServerData$State_ = "initial" | "pinging" | "unreachable" | "incompatible" | "successful";
    export class $AccountProfileKeyPairManager implements $ProfileKeyPairManager {
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
        shouldRefreshKeyPair(): boolean;
        constructor(arg0: $UserApiService, arg1: $UUID_, arg2: $Path_);
    }
    export class $ClientConfigurationPacketListenerImpl extends $ClientCommonPacketListenerImpl implements $ClientConfigurationPacketListener, $TickablePacketListener, $NeoListenableNetworkHandler {
        handleDisconnect(): void;
        tick(): void;
        handleEnabledFeatures(arg0: $ClientboundUpdateEnabledFeaturesPacket_): void;
        handler$jpa000$fabric_networking_api_v1$handleComplete(arg0: $ClientboundFinishConfigurationPacket, arg1: $CallbackInfo): void;
        handler$kdp000$owo$owoNeo$handleComplete(packet: $ClientboundFinishConfigurationPacket, ci: $CallbackInfo): void;
        handleRegistryData(arg0: $ClientboundRegistryDataPacket_): void;
        handleResetChat(arg0: $ClientboundResetChatPacket): void;
        handleSelectKnownPacks(arg0: $ClientboundSelectKnownPacks_): void;
        handleConfigurationFinished(arg0: $ClientboundFinishConfigurationPacket): void;
        connection: $Connection;
        constructor(arg0: $Minecraft, arg1: $Connection, arg2: $CommonListenerCookie_);
    }
    export class $ClientHandshakePacketListenerImpl$State extends $Enum<$ClientHandshakePacketListenerImpl$State> {
    }
    /**
     * Values that may be interpreted as {@link $ClientHandshakePacketListenerImpl$State}.
     */
    export type $ClientHandshakePacketListenerImpl$State_ = "connecting" | "authorizing" | "encrypting" | "joining";
    export class $LevelLoadStatusManager {
        tick(): void;
        loadingPacketsReceived(): void;
        levelReady(): boolean;
        constructor(arg0: $LocalPlayer, arg1: $ClientLevel, arg2: $LevelRenderer);
    }
    export class $ClientPacketListener extends $ClientCommonPacketListenerImpl implements $ClientGamePacketListener, $TickablePacketListener, $NeoListenableNetworkHandler, $IMixinClientPacketListener, $NetH, $ClientPacketListenerAccessor, $AccessorClientPacketListener, $IXaeroMinimapClientPlayNetHandler, $IWorldMapClientPlayNetHandler, $ClientPacketListenerKJS {
        sendUnsignedCommand(arg0: string): boolean;
        enabledFeatures(): $FeatureFlagSet;
        getAdvancements(): $ClientAdvancements;
        clearLevel(): void;
        registryAccess(): $RegistryAccess$Frozen;
        getServerData(): $ServerData;
        updateSearchTrees(): void;
        scoreboard(): $Scoreboard;
        handleDamageEvent(arg0: $ClientboundDamageEventPacket_): void;
        handleEntityEvent(arg0: $ClientboundEntityEventPacket): void;
        getCommands(): $CommandDispatcher<$SharedSuggestionProvider>;
        getLocalGameProfile(): $GameProfile;
        sendChat(arg0: string): void;
        getPlayerInfo(arg0: $UUID_): $PlayerInfo;
        getPlayerInfo(arg0: string): $PlayerInfo;
        sendCommand(arg0: string): void;
        serverLinks(): $ServerLinks;
        getOnlinePlayerIds(): $Collection<$UUID>;
        getOnlinePlayers(): $Collection<$PlayerInfo>;
        handleBlockChangedAck(arg0: $ClientboundBlockChangedAckPacket_): void;
        getRecipeManager(): $RecipeManager;
        potionBrewing(): $PotionBrewing;
        handleDisconnect(): void;
        getDebugQueryHandler(): $DebugQueryHandler;
        getSuggestionsProvider(): $ClientSuggestionProvider;
        getListedOnlinePlayers(): $Collection<$PlayerInfo>;
        handleGameEvent(arg0: $ClientboundGameEventPacket): void;
        getLevel(): $ClientLevel;
        levels(): $Set<$ResourceKey<$Level>>;
        tick(): void;
        handleAddEntity(arg0: $ClientboundAddEntityPacket): void;
        handleRespawn(arg0: $ClientboundRespawnPacket_): void;
        handleLogin(arg0: $ClientboundLoginPacket_): void;
        handleCustomPayload(arg0: $CustomPacketPayload_): void;
        cpm$hasMod(): boolean;
        handleMoveVehicle(arg0: $ClientboundMoveVehiclePacket): void;
        handleMovePlayer(arg0: $ClientboundPlayerPositionPacket): void;
        handleSetCarriedItem(arg0: $ClientboundSetCarriedItemPacket): void;
        handleAnimate(arg0: $ClientboundAnimatePacket): void;
        handleContainerClose(arg0: $ClientboundContainerClosePacket): void;
        handlePlaceRecipe(arg0: $ClientboundPlaceGhostRecipePacket): void;
        handlePlayerAbilities(arg0: $ClientboundPlayerAbilitiesPacket): void;
        handleChangeDifficulty(arg0: $ClientboundChangeDifficultyPacket): void;
        cpm$setHasMod(arg0: boolean): void;
        isFeatureEnabled(arg0: $FeatureFlagSet): boolean;
        handleBlockEntityData(arg0: $ClientboundBlockEntityDataPacket): void;
        searchTrees(): $SessionSearchTrees;
        kjs$sessionData(): $KubeSessionData;
        handler$kgj000$cucumber$constructor(arg0: $Minecraft, arg1: $Connection, arg2: $CommonListenerCookie_, arg3: $CallbackInfo): void;
        handler$doc000$bookshelf$onInit(arg0: $Minecraft, arg1: $Connection, arg2: $CommonListenerCookie_, arg3: $CallbackInfo): void;
        handler$hih002$xaerominimap$onClose(arg0: $CallbackInfo): void;
        handler$ice000$xaeroworldmap$onCleanup(arg0: $CallbackInfo): void;
        handler$hih000$xaerominimap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        handler$icg001$xaeroworldmap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
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
        handler$hih000$xaerominimap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        handler$ice001$xaeroworldmap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        handler$jng000$ftbchunks$handleChunkBlocksUpdateFTBC(packet: $ClientboundSectionBlocksUpdatePacket, ci: $CallbackInfo): void;
        handleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket): void;
        handler$hih000$xaerominimap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        handler$ice001$xaeroworldmap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        handler$jng000$ftbchunks$handleLevelChunkFTBC(packet: $ClientboundLevelChunkWithLightPacket, ci: $CallbackInfo): void;
        handleChunksBiomes(arg0: $ClientboundChunksBiomesPacket_): void;
        handler$hih000$xaerominimap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        handler$ice001$xaeroworldmap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        handleForgetLevelChunk(arg0: $ClientboundForgetLevelChunkPacket_): void;
        handler$hih000$xaerominimap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        handler$ice001$xaeroworldmap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        handleBlockUpdate(arg0: $ClientboundBlockUpdatePacket): void;
        handler$hih000$xaerominimap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        handler$ice001$xaeroworldmap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        handler$jng000$ftbchunks$handleBlockUpdateFTBC(packet: $ClientboundBlockUpdatePacket, ci: $CallbackInfo): void;
        handleConfigurationStart(arg0: $ClientboundStartConfigurationPacket): void;
        handler$ene000$cpm$onReconfigure(arg0: $ClientboundStartConfigurationPacket, arg1: $CallbackInfo): void;
        handleTakeItemEntity(arg0: $ClientboundTakeItemEntityPacket): void;
        handleSystemChat(arg0: $ClientboundSystemChatPacket_): void;
        handlePlayerChat(arg0: $ClientboundPlayerChatPacket_): void;
        handleDisguisedChat(arg0: $ClientboundDisguisedChatPacket_): void;
        handleDeleteChat(arg0: $ClientboundDeleteChatPacket_): void;
        handleHurtAnimation(arg0: $ClientboundHurtAnimationPacket_): void;
        handleSetTime(arg0: $ClientboundSetTimePacket): void;
        handleSetSpawn(arg0: $ClientboundSetDefaultSpawnPositionPacket): void;
        handler$hih000$xaerominimap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        handler$ice001$xaeroworldmap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
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
        handler$ehe000$xaerolib$onHandleInitializeBorder(arg0: $ClientboundInitializeBorderPacket, arg1: $CallbackInfo): void;
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
        handler$nfc000$presencefootsteps$onHandleSoundEffect(arg0: $ClientboundSoundPacket, arg1: $CallbackInfo): void;
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
        handler$hih000$xaerominimap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        handler$ice001$xaeroworldmap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        handleMerchantOffers(arg0: $ClientboundMerchantOffersPacket): void;
        handleSetChunkCacheRadius(arg0: $ClientboundSetChunkCacheRadiusPacket): void;
        handleSetSimulationDistance(arg0: $ClientboundSetSimulationDistancePacket_): void;
        handleSetChunkCacheCenter(arg0: $ClientboundSetChunkCacheCenterPacket): void;
        handleBundlePacket(arg0: $ClientboundBundlePacket): void;
        handleProjectilePowerPacket(arg0: $ClientboundProjectilePowerPacket): void;
        handleChunkBatchStart(arg0: $ClientboundChunkBatchStartPacket): void;
        handleChunkBatchFinished(arg0: $ClientboundChunkBatchFinishedPacket_): void;
        handleDebugSample(arg0: $ClientboundDebugSamplePacket_): void;
        handlePongResponse(arg0: $ClientboundPongResponsePacket_): void;
        markMessageAsProcessed(arg0: $PlayerChatMessage_, arg1: boolean): void;
        handler$hih001$xaerominimap$onSendCommand(arg0: string, arg1: $CallbackInfo): void;
        handler$hih000$xaerominimap$onSendUnsignedCommand(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        setKeyPair(arg0: $ProfileKeyPair_): void;
        getXaero_minimapSession(): $XaeroMinimapSession;
        setXaero_minimapSession(arg0: $XaeroMinimapSession): void;
        getXaero_worldmapSession(): $WorldMapSession;
        setXaero_worldmapSession(arg0: $WorldMapSession): void;
        getId(): $UUID;
        close(): void;
        getCommandsKonkrete(): $CommandDispatcher<$SharedSuggestionProvider>;
        setCommandsKonkrete(arg0: $CommandDispatcher<$SharedSuggestionProvider>): void;
        catnip$getServerChunkRadius(): number;
        invokeParseCommand(arg0: string): $ParseResults<$SharedSuggestionProvider>;
        serverChunkRadius: number;
        signedMessageEncoder: $SignedMessageChain$Encoder;
        chatSession: $LocalChatSession;
        connection: $Connection;
        commands: $CommandDispatcher<$SharedSuggestionProvider>;
        constructor(arg0: $Minecraft, arg1: $Connection, arg2: $CommonListenerCookie_);
        get advancements(): $ClientAdvancements;
        get serverData(): $ServerData;
        get localGameProfile(): $GameProfile;
        get onlinePlayerIds(): $Collection<$UUID>;
        get onlinePlayers(): $Collection<$PlayerInfo>;
        get recipeManager(): $RecipeManager;
        get debugQueryHandler(): $DebugQueryHandler;
        get suggestionsProvider(): $ClientSuggestionProvider;
        get listedOnlinePlayers(): $Collection<$PlayerInfo>;
        get level(): $ClientLevel;
        set actionBarText(value: $ClientboundSetActionBarTextPacket_);
        set titleText(value: $ClientboundSetTitleTextPacket_);
        set subtitleText(value: $ClientboundSetSubtitleTextPacket_);
        set titlesAnimation(value: $ClientboundSetTitlesAnimationPacket);
        set keyPair(value: $ProfileKeyPair_);
        get id(): $UUID;
    }
    export class $ServerData$ServerPackStatus extends $Enum<$ServerData$ServerPackStatus> {
        getName(): $Component;
        static values(): $ServerData$ServerPackStatus[];
        static valueOf(arg0: string): $ServerData$ServerPackStatus;
        static DISABLED: $ServerData$ServerPackStatus;
        static PROMPT: $ServerData$ServerPackStatus;
        static ENABLED: $ServerData$ServerPackStatus;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$ServerPackStatus}.
     */
    export type $ServerData$ServerPackStatus_ = "enabled" | "disabled" | "prompt";
    export class $ServerData implements $ServerDataExtension {
        isRealm(): boolean;
        isLan(): boolean;
        preventsChatReports(): boolean;
        setPreventsChatReports(arg0: boolean): void;
        copyFrom(arg0: $ServerData): void;
        getResourcePackStatus(): $ServerData$ServerPackStatus;
        setResourcePackStatus(arg0: $ServerData$ServerPackStatus_): void;
        copyNameIconFrom(arg0: $ServerData): void;
        static validateIcon(arg0: number[]): number[];
        setIconBytes(arg0: number[]): void;
        getIconBytes(): number[];
        type(): $ServerData$Type;
        write(): $CompoundTag;
        static read(arg0: $CompoundTag_): $ServerData;
        state(): $ServerData$State;
        setState(arg0: $ServerData$State_): void;
        neoForgeData: $ExtendedServerListData;
        motd: $Component;
        protocol: number;
        players: $ServerStatus$Players;
        ping: number;
        ip: string;
        playerList: $List<$Component>;
        name: string;
        version: $Component;
        status: $Component;
        constructor(arg0: string, arg1: string, arg2: $ServerData$Type_);
        get realm(): boolean;
        get lan(): boolean;
    }
    export class $LegacyServerPinger extends $SimpleChannelInboundHandler<$ByteBuf> {
        constructor(arg0: $ServerAddress, arg1: $LegacyServerPinger$Output_);
    }
    export class $ServerList implements $ServerListAccessor, $IMixinServerList {
        unhide(arg0: string): $ServerData;
        static saveSingleServer(arg0: $ServerData): void;
        swap(arg0: number, arg1: number): void;
        remove(arg0: $ServerData): void;
        size(): number;
        get(arg0: string): $ServerData;
        get(arg0: number): $ServerData;
        load(): void;
        replace(arg0: number, arg1: $ServerData): void;
        add(arg0: $ServerData, arg1: boolean): void;
        save(): void;
        getServerListFancyMenu(): $List<$ServerData>;
        getServerList(): $List<$ServerData>;
        constructor(arg0: $Minecraft);
        get serverListFancyMenu(): $List<$ServerData>;
        get serverList(): $List<$ServerData>;
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen extends $ConfirmScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        callback: $BooleanConsumer;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $ClientChunkCache$Storage implements $AccessorClientChunkCacheStorage {
        inRange(arg0: number, arg1: number): boolean;
        railways$getViewCenterX(): number;
        railways$setViewCenterX(arg0: number): void;
        railways$getViewCenterZ(): number;
        railways$setViewCenterZ(arg0: number): void;
        chunks: $AtomicReferenceArray<$LevelChunk>;
    }
    export class $ClientLevel$EntityCallbacks implements $LevelCallback<$Entity> {
    }
    export class $PlayerInfo {
        getTeam(): $PlayerTeam;
        getGameMode(): $GameType;
        getSkin(): $PlayerSkin;
        hasVerifiableChat(): boolean;
        getTabListDisplayName(): $Component;
        getChatSession(): $RemoteChatSession;
        getMessageValidator(): $SignedMessageValidator;
        setTabListDisplayName(arg0: $Component_): void;
        getProfile(): $GameProfile;
        getLatency(): number;
        constructor(arg0: $GameProfile, arg1: boolean);
        get team(): $PlayerTeam;
        get gameMode(): $GameType;
        get skin(): $PlayerSkin;
        get chatSession(): $RemoteChatSession;
        get messageValidator(): $SignedMessageValidator;
        get profile(): $GameProfile;
        get latency(): number;
    }
    export class $PingDebugMonitor {
        tick(): void;
        onPongReceived(arg0: $ClientboundPongResponsePacket_): void;
        constructor(arg0: $ClientPacketListener, arg1: $LocalSampleLogger);
    }
    export class $ProfileKeyPairManager {
        static create(arg0: $UserApiService, arg1: $User, arg2: $Path_): $ProfileKeyPairManager;
        static EMPTY_KEY_MANAGER: $ProfileKeyPairManager;
    }
    export interface $ProfileKeyPairManager {
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
        shouldRefreshKeyPair(): boolean;
    }
    export class $SessionSearchTrees {
        static getTooltipLines(arg0: $Stream<$ItemStack_>, arg1: $Item$TooltipContext, arg2: $TooltipFlag): $Stream<string>;
        recipes(): $SearchTree<$RecipeCollection>;
        creativeTagSearch(): $SearchTree<$ItemStack>;
        creativeTagSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        creativeNameSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        creativeNameSearch(): $SearchTree<$ItemStack>;
        updateCreativeTooltips(arg0: $HolderLookup$Provider, arg1: $List_<$ItemStack_>): void;
        updateCreativeTooltips(arg0: $HolderLookup$Provider, arg1: $List_<$ItemStack_>, arg2: $SessionSearchTrees$Key): void;
        updateRecipes(arg0: $ClientRecipeBook, arg1: $RegistryAccess$Frozen): void;
        rebuildAfterLanguageChange(): void;
        updateCreativeTags(arg0: $List_<$ItemStack_>): void;
        updateCreativeTags(arg0: $List_<$ItemStack_>, arg1: $SessionSearchTrees$Key): void;
        register(arg0: $SessionSearchTrees$Key, arg1: $Runnable_): void;
        static CREATIVE_NAMES: $SessionSearchTrees$Key;
        static CREATIVE_TAGS: $SessionSearchTrees$Key;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest}.
     */
    export type $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest_ = { id?: $UUID_, url?: $URL, hash?: string,  } | [id?: $UUID_, url?: $URL, hash?: string, ];
    export class $ClientAdvancements implements $AccessorClientAdvancementManager, $AccessorClientAdvancements {
        handler$dmi000$revelationary$onAdvancementSync(arg0: $ClientboundUpdateAdvancementsPacket, arg1: $CallbackInfo): void;
        handler$jjj000$patchouli$onSync(arg0: $ClientboundUpdateAdvancementsPacket, arg1: $CallbackInfo): void;
        setListener(arg0: $ClientAdvancements$Listener): void;
        setSelectedTab(arg0: $AdvancementHolder_, arg1: boolean): void;
        getTree(): $AdvancementTree;
        get(arg0: $ResourceLocation_): $AdvancementHolder;
        update(arg0: $ClientboundUpdateAdvancementsPacket): void;
        getProgress(): $Map<$AdvancementHolder, $AdvancementProgress>;
        progress: $Map<$AdvancementHolder, $AdvancementProgress>;
        constructor(arg0: $Minecraft, arg1: $WorldSessionTelemetryManager);
        set listener(value: $ClientAdvancements$Listener);
        get tree(): $AdvancementTree;
    }
    export class $MultiPlayerGameMode implements $PlayerControllerAccess, $AccessorMultiPlayerGameMode, $AccessorMultiPlayerGameMode$1 {
        continueDestroyBlock(arg0: $BlockPos_, arg1: $Direction_): boolean;
        stopDestroyBlock(): void;
        hasMissTime(): boolean;
        attack(arg0: $Player, arg1: $Entity): void;
        startDestroyBlock(arg0: $BlockPos_, arg1: $Direction_): boolean;
        isDestroying(): boolean;
        interactAt(arg0: $Player, arg1: $Entity, arg2: $EntityHitResult, arg3: $InteractionHand_): $InteractionResult;
        interact(arg0: $Player, arg1: $Entity, arg2: $InteractionHand_): $InteractionResult;
        useItemOn(arg0: $LocalPlayer, arg1: $InteractionHand_, arg2: $BlockHitResult): $InteractionResult;
        hasInfiniteItems(): boolean;
        useItem(arg0: $Player, arg1: $InteractionHand_): $InteractionResult;
        isServerControlledInventory(): boolean;
        releaseUsingItem(arg0: $Player): void;
        handleCreativeModeItemAdd(arg0: $ItemStack_, arg1: number): void;
        handlePickItem(arg0: number): void;
        isAlwaysFlying(): boolean;
        destroyBlock(arg0: $BlockPos_): boolean;
        getPlayerMode(): $GameType;
        handleInventoryMouseClick(arg0: number, arg1: number, arg2: number, arg3: $ClickType_, arg4: $Player): void;
        handleSlotStateChanged(arg0: number, arg1: number, arg2: boolean): void;
        getPreviousPlayerMode(): $GameType;
        canHurtPlayer(): boolean;
        hasExperience(): boolean;
        tick(): void;
        handleInventoryButtonClick(arg0: number, arg1: number): void;
        handler$hfd000$bettercombat$cancelBlockBreaking_FixAttackCD(ci: $CallbackInfo): void;
        getDestroyStage(): number;
        handleCreativeModeItemDrop(arg0: $ItemStack_): void;
        handlePlaceRecipe(arg0: number, arg1: $RecipeHolder_<never>, arg2: boolean): void;
        createPlayer(arg0: $ClientLevel, arg1: $StatsCounter, arg2: $ClientRecipeBook): $LocalPlayer;
        createPlayer(arg0: $ClientLevel, arg1: $StatsCounter, arg2: $ClientRecipeBook, arg3: boolean, arg4: boolean): $LocalPlayer;
        adjustPlayer(arg0: $Player): void;
        setLocalMode(arg0: $GameType_, arg1: $GameType_): void;
        setLocalMode(arg0: $GameType_): void;
        getDestroyProgress(): number;
        framedblocks$setDestroyDelay(arg0: number): void;
        quark$performUseItemOn(arg0: $LocalPlayer, arg1: $InteractionHand_, arg2: $BlockHitResult): $InteractionResult;
        destroyBlockPos: $BlockPos;
        destroyDelay: number;
        connection: $ClientPacketListener;
        destroyProgress: number;
        constructor(arg0: $Minecraft, arg1: $ClientPacketListener);
        get destroying(): boolean;
        get serverControlledInventory(): boolean;
        get alwaysFlying(): boolean;
        get playerMode(): $GameType;
        get previousPlayerMode(): $GameType;
        get destroyStage(): number;
    }
    export class $ServerData$Type extends $Enum<$ServerData$Type> {
        static values(): $ServerData$Type[];
        static valueOf(arg0: string): $ServerData$Type;
        static OTHER: $ServerData$Type;
        static LAN: $ServerData$Type;
        static REALM: $ServerData$Type;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$Type}.
     */
    export type $ServerData$Type_ = "lan" | "realm" | "other";
    export class $LegacyServerPinger$Output {
    }
    export interface $LegacyServerPinger$Output {
        handleResponse(arg0: number, arg1: string, arg2: string, arg3: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $LegacyServerPinger$Output}.
     */
    export type $LegacyServerPinger$Output_ = ((arg0: number, arg1: string, arg2: string, arg3: number, arg4: number) => void);
    export class $ClientHandshakePacketListenerImpl implements $ClientLoginPacketListener, $ClientLoginNetworkHandlerAccessor$1, $NetworkHandlerExtensions, $ClientLoginNetworkHandlerAccessor {
        handler$mfb000$platform$handleCustomQuery(packet: $ClientboundGameProfilePacket_, ci: $CallbackInfo): void;
        setMinigameName(arg0: string): void;
        handleRequestCookie(arg0: $ClientboundCookieRequestPacket_): void;
        onDisconnect(arg0: $DisconnectionDetails_): void;
        handleHello(arg0: $ClientboundHelloPacket): void;
        handleGameProfile(arg0: $ClientboundGameProfilePacket_): void;
        handleDisconnect(arg0: $ClientboundLoginDisconnectPacket): void;
        handleCompression(arg0: $ClientboundLoginCompressionPacket): void;
        handleCustomQuery(arg0: $ClientboundCustomQueryPacket_): void;
        isAcceptingMessages(): boolean;
        fillListenerSpecificCrashDetails(arg0: $CrashReport, arg1: $CrashReportCategory): void;
        getAddon(): $ClientLoginNetworkAddon;
        protocol(): $ConnectionProtocol;
        flow(): $PacketFlow;
        fillCrashReport(arg0: $CrashReport): void;
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
        createDisconnectionInfo(arg0: $Component_, arg1: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(arg0: $Packet<never>): boolean;
        getConnection(): $Connection;
        owo$getConnection(): $Connection;
        constructor(arg0: $Connection, arg1: $Minecraft, arg2: $ServerData, arg3: $Screen, arg4: boolean, arg5: $Duration_, arg6: $Consumer_<$Component>, arg7: $TransferState_);
        set minigameName(value: string);
        get acceptingMessages(): boolean;
        get addon(): $ClientLoginNetworkAddon;
        get connection(): $Connection;
    }
    export class $TransferState extends $Record {
        cookies(): $Map<$ResourceLocation, number[]>;
        constructor(arg0: $Map_<$ResourceLocation_, number[]>);
    }
    /**
     * Values that may be interpreted as {@link $TransferState}.
     */
    export type $TransferState_ = { cookies?: $Map_<$ResourceLocation_, number[]>,  } | [cookies?: $Map_<$ResourceLocation_, number[]>, ];
    export class $DebugSampleSubscriber {
        tick(): void;
        static REQUEST_INTERVAL_MS: number;
        constructor(arg0: $ClientPacketListener, arg1: $DebugScreenOverlay);
    }
    export class $ClientAdvancements$Listener {
    }
    export interface $ClientAdvancements$Listener extends $AdvancementTree$Listener {
        onUpdateAdvancementProgress(arg0: $AdvancementNode, arg1: $AdvancementProgress): void;
        onSelectedTabChanged(arg0: $AdvancementHolder_): void;
    }
    export class $RegistryDataCollector$ContentsCollector {
    }
    export class $RegistryDataCollector {
        appendContents(arg0: $ResourceKey_<$Registry<never>>, arg1: $List_<$RegistrySynchronization$PackedRegistryEntry_>): void;
        appendTags(arg0: $Map_<$ResourceKey_<$Registry<never>>, $TagNetworkSerialization$NetworkPayload>): void;
        collectGameRegistries(arg0: $ResourceProvider_, arg1: $RegistryAccess, arg2: boolean): $RegistryAccess$Frozen;
        constructor();
    }
    export class $ClientLevel extends $Level implements $ClientWorldAccessor, $BiomeSeedProvider, $ChunkTrackerHolder, $IClientLevel, $ClientLevelAccessor$1, $ClientLevelAccessor, $IXaeroMinimapClientWorld, $ClientLevelInvoker, $IWorldMapClientWorld, $ClientLevelKJS, $SubLevelContainerHolder, $WaterOcclusionContainerHolder, $LevelPoseProviderExtension, $CachingClientLevel {
        tickEntities(): void;
        animateTick(arg0: number, arg1: number, arg2: number): void;
        sable$getPlotContainer(): $SubLevelContainer;
        effects(): $DimensionSpecialEffects;
        sable$getPose(arg0: $SubLevel): $Pose3dc;
        handleBlockChangedAck(arg0: number): void;
        setServerVerifiedBlockState(arg0: $BlockPos_, arg1: $BlockState_, arg2: number): void;
        getSkyDarken(arg0: number): number;
        setGameTime(arg0: number): void;
        syncBlockState(arg0: $BlockPos_, arg1: $BlockState_, arg2: $Vec3_): void;
        setDefaultSpawnPos(arg0: $BlockPos_, arg1: number): void;
        handler$lmk000$farsight_view$onInit(arg0: $ClientPacketListener, arg1: $ClientLevel$ClientLevelData, arg2: $ResourceKey_<any>, arg3: $Holder_<any>, arg4: number, arg5: number, arg6: $Supplier_<any>, arg7: $LevelRenderer, arg8: boolean, arg9: number, arg10: $CallbackInfo): void;
        queueLightUpdate(arg0: $Runnable_): void;
        pollLightUpdates(): void;
        isLightUpdateQueueEmpty(): boolean;
        setDayTime(arg0: number): void;
        entitiesForRendering(): $Iterable<$Entity>;
        tickNonPassenger(arg0: $Entity): void;
        handler$hli000$entityculling$tickEntity(entity: $Entity, info: $CallbackInfo): void;
        onChunkLoaded(arg0: $ChunkPos): void;
        clearTintCaches(): void;
        getEntityCount(): number;
        addEntity(arg0: $Entity): void;
        removeEntity(arg0: number, arg1: $Entity$RemovalReason_): void;
        doAnimateTick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $RandomSource, arg5: $Block_, arg6: $BlockPos$MutableBlockPos): void;
        handler$lck000$sable$subLevelAnimateTick(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo, arg4: $RandomSource, arg5: $Block_, arg6: $BlockPos$MutableBlockPos): void;
        overrideMapData(arg0: $MapId_, arg1: $MapItemSavedData): void;
        setSectionDirtyWithNeighbors(arg0: number, arg1: number, arg2: number): void;
        getSkyColor(arg0: $Vec3_, arg1: number): $Vec3;
        getSkyFlashTime(): number;
        getCloudColor(arg0: number): $Vec3;
        getStarBrightness(arg0: number): number;
        calculateBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        setServerSimulationDistance(arg0: number): void;
        getServerSimulationDistance(): number;
        lithium$getEntityManager(): $TransientEntitySectionManager<any>;
        sodium$getBiomeZoomSeed(): number;
        sodium$getTracker(): $ChunkTracker;
        xaerolib_getData(): $ClientLevelData;
        xaerolib_setData(arg0: $ClientLevelData): void;
        getXaero_minimapData(): $MinimapClientWorldData;
        setXaero_minimapData(arg0: $MinimapClientWorldData): void;
        getXaero_worldmapData(): $WorldMapClientWorldData;
        setXaero_worldmapData(arg0: $WorldMapClientWorldData): void;
        sable$getWaterOcclusionContainer(): $WaterOcclusionContainer<any>;
        sable$pushPoseSupplier(arg0: $Function_<any, any>): void;
        sable$popPoseSupplier(): void;
        sound_physics_remastered$getCachedClone(): $ClonedClientLevel;
        sound_physics_remastered$setCachedClone(arg0: $ClonedClientLevel): void;
        tick(arg0: $BooleanSupplier_): void;
        unload(arg0: $LevelChunk): void;
        self(): $EntityGetter;
        kubeParticle(x: number, y: number, z: number, spriteSet: $SpriteSet): $KubeAnimatedParticle;
        getEntityGetter(): $LevelEntityGetter<$Entity>;
        getLevelRenderer(): $LevelRenderer;
        restoringBlockSnapshots: boolean;
        oThunderLevel: number;
        /**
         * @deprecated
         */
        threadSafeRandom: $RandomSource;
        static LONG_PARTICLE_CLIP_RANGE: number;
        static ATTACHMENTS_NBT_KEY: string;
        thread: $Thread;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static MAX_BRIGHTNESS: number;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        rainLevel: number;
        captureBlockSnapshots: boolean;
        constructor(arg0: $ClientPacketListener, arg1: $ClientLevel$ClientLevelData, arg2: $ResourceKey_<$Level>, arg3: $Holder_<$DimensionType>, arg4: number, arg5: number, arg6: $Supplier_<$ProfilerFiller>, arg7: $LevelRenderer, arg8: boolean, arg9: number);
        set gameTime(value: number);
        get lightUpdateQueueEmpty(): boolean;
        get entityCount(): number;
        get skyFlashTime(): number;
        get entityGetter(): $LevelEntityGetter<$Entity>;
        get levelRenderer(): $LevelRenderer;
    }
    export class $ClientRegistryLayer extends $Enum<$ClientRegistryLayer> {
        static createRegistryAccess(): $LayeredRegistryAccess<$ClientRegistryLayer>;
        static values(): $ClientRegistryLayer[];
        static valueOf(arg0: string): $ClientRegistryLayer;
        static REMOTE: $ClientRegistryLayer;
        static STATIC: $ClientRegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $ClientRegistryLayer}.
     */
    export type $ClientRegistryLayer_ = "static" | "remote";
    export class $ClientLevel$ClientLevelData implements $WritableLevelData {
        handler$dbm000$bblcore$getHorizonHeight(arg0: $LevelHeightAccessor, arg1: $CallbackInfoReturnable<any>): void;
        getGameTime(): number;
        isHardcore(): boolean;
        getDifficulty(): $Difficulty;
        getDayTime(): number;
        getGameRules(): $GameRules;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        isThundering(): boolean;
        isRaining(): boolean;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        setGameTime(arg0: number): void;
        setDayTime(arg0: number): void;
        setSpawn(arg0: $BlockPos_, arg1: number): void;
        getHorizonHeight(arg0: $LevelHeightAccessor): number;
        setDifficulty(arg0: $Difficulty_): void;
        setDifficultyLocked(arg0: boolean): void;
        getClearColorScale(): number;
        isDifficultyLocked(): boolean;
        setRaining(arg0: boolean): void;
        constructor(arg0: $Difficulty_, arg1: boolean, arg2: boolean);
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get thundering(): boolean;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get clearColorScale(): number;
    }
    export class $ServerStatusPinger {
        static formatPlayerCount(arg0: number, arg1: number): $Component;
        pingServer(arg0: $ServerData, arg1: $Runnable_, arg2: $Runnable_): void;
        tick(): void;
        removeAll(): void;
        constructor();
    }
    export class $LevelLoadStatusManager$Status extends $Enum<$LevelLoadStatusManager$Status> {
    }
    /**
     * Values that may be interpreted as {@link $LevelLoadStatusManager$Status}.
     */
    export type $LevelLoadStatusManager$Status_ = "waiting_for_server" | "waiting_for_player_chunk" | "level_ready";
    export class $ClientChunkCache extends $ChunkSource {
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_, arg3: boolean): $LevelChunk;
        replaceWithPacketData(arg0: number, arg1: number, arg2: $FriendlyByteBuf, arg3: $CompoundTag_, arg4: $Consumer_<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>): $LevelChunk;
        replaceBiomes(arg0: number, arg1: number, arg2: $FriendlyByteBuf): void;
        handler$jff000$railways$securitycraft$onInit(arg0: $ClientLevel, arg1: number, arg2: $CallbackInfo): void;
        handler$jff000$railways$securitycraft$onDrop(arg0: $ChunkPos, arg1: $CallbackInfo): void;
        handler$jff000$railways$securitycraft$onUpdateViewRadius(arg0: number, arg1: $CallbackInfo): void;
        drop(arg0: $ChunkPos): void;
        updateViewRadius(arg0: number): void;
        updateViewCenter(arg0: number, arg1: number): void;
        lightEngine: $LevelLightEngine;
        storage: $ClientChunkCache$Storage;
        constructor(arg0: $ClientLevel, arg1: number);
    }
    export class $KnownPacksManager {
        redirect$eif000$fabric_resource_loader_v0$createClientManager(): $PackRepository;
        trySelectingPacks(arg0: $List_<$KnownPack_>): $List<$KnownPack>;
        createResourceManager(): $CloseableResourceManager;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$DeferredPacket extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientCommonPacketListenerImpl$DeferredPacket}.
     */
    export type $ClientCommonPacketListenerImpl$DeferredPacket_ = { expirationTime?: number, sendCondition?: $BooleanSupplier_, packet?: $Packet<$ServerboundPacketListener>,  } | [expirationTime?: number, sendCondition?: $BooleanSupplier_, packet?: $Packet<$ServerboundPacketListener>, ];
    export class $CommonListenerCookie extends $Record {
        serverData(): $ServerData;
        telemetryManager(): $WorldSessionTelemetryManager;
        enabledFeatures(): $FeatureFlagSet;
        serverLinks(): $ServerLinks;
        serverBrand(): string;
        connectionType(): $ConnectionType;
        localGameProfile(): $GameProfile;
        receivedRegistries(): $RegistryAccess$Frozen;
        chatState(): $ChatComponent$State;
        postDisconnectScreen(): $Screen;
        serverCookies(): $Map<$ResourceLocation, number[]>;
        /**
         * @deprecated
         */
        strictErrorHandling(): boolean;
        customReportDetails(): $Map<string, string>;
        constructor(localGameProfile: $GameProfile, telemetryManager: $WorldSessionTelemetryManager, receivedRegistries: $RegistryAccess$Frozen, enabledFeatures: $FeatureFlagSet, serverBrand: string, serverData: $ServerData, postDisconnectScreen: $Screen, serverCookies: $Map_<$ResourceLocation_, number[]>, chatState: $ChatComponent$State, strictErrorHandling: boolean, customReportDetails: $Map_<string, string>, serverLinks: $ServerLinks_, connectionType: $ConnectionType_);
        /**
         * @deprecated
         */
        constructor(arg0: $GameProfile, arg1: $WorldSessionTelemetryManager, arg2: $RegistryAccess$Frozen, arg3: $FeatureFlagSet, arg4: string, arg5: $ServerData, arg6: $Screen, arg7: $Map_<$ResourceLocation_, number[]>, arg8: $ChatComponent$State, arg9: boolean, arg10: $Map_<string, string>, arg11: $ServerLinks_);
    }
    /**
     * Values that may be interpreted as {@link $CommonListenerCookie}.
     */
    export type $CommonListenerCookie_ = { postDisconnectScreen?: $Screen, connectionType?: $ConnectionType_, serverBrand?: string, customReportDetails?: $Map_<string, string>, strictErrorHandling?: boolean, serverData?: $ServerData, localGameProfile?: $GameProfile, telemetryManager?: $WorldSessionTelemetryManager, receivedRegistries?: $RegistryAccess$Frozen, serverLinks?: $ServerLinks_, serverCookies?: $Map_<$ResourceLocation_, number[]>, chatState?: $ChatComponent$State, enabledFeatures?: $FeatureFlagSet,  } | [postDisconnectScreen?: $Screen, connectionType?: $ConnectionType_, serverBrand?: string, customReportDetails?: $Map_<string, string>, strictErrorHandling?: boolean, serverData?: $ServerData, localGameProfile?: $GameProfile, telemetryManager?: $WorldSessionTelemetryManager, receivedRegistries?: $RegistryAccess$Frozen, serverLinks?: $ServerLinks_, serverCookies?: $Map_<$ResourceLocation_, number[]>, chatState?: $ChatComponent$State, enabledFeatures?: $FeatureFlagSet, ];
    export class $ClientCommonPacketListenerImpl implements $ClientCommonPacketListener, $ClientCommonNetworkHandlerAccessor {
        handleRequestCookie(arg0: $ClientboundCookieRequestPacket_): void;
        onDisconnect(arg0: $DisconnectionDetails_): void;
        serverBrand(): string;
        handleDisconnect(arg0: $ClientboundDisconnectPacket_): void;
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
        createDisconnectionInfo(arg0: $Component_, arg1: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(arg0: $Packet<never>): boolean;
        fillListenerSpecificCrashDetails(arg0: $CrashReport, arg1: $CrashReportCategory): void;
        handleCustomPayload(arg0: $ClientboundCustomPayloadPacket_): void;
        handleKeepAlive(arg0: $ClientboundKeepAlivePacket): void;
        wrapOperation$jop001$fabric_networking_api_v1$onCustomPayloadRegisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        wrapOperation$jop001$fabric_networking_api_v1$onCustomPayloadUnregisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        handlePing(arg0: $ClientboundPingPacket): void;
        handleResourcePackPush(arg0: $ClientboundResourcePackPushPacket_): void;
        handleResourcePackPop(arg0: $ClientboundResourcePackPopPacket_): void;
        handleStoreCookie(arg0: $ClientboundStoreCookiePacket_): void;
        handleTransfer(arg0: $ClientboundTransferPacket_): void;
        handleCustomReportDetails(arg0: $ClientboundCustomReportDetailsPacket_): void;
        handleServerLinks(arg0: $ClientboundServerLinksPacket_): void;
        send(arg0: $Packet<never>): void;
        flow(): $PacketFlow;
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        disconnect(arg0: $Component_): void;
        send(arg0: $CustomPacketPayload_): void;
        fillCrashReport(arg0: $CrashReport): void;
        hasChannel(arg0: $ResourceLocation_): boolean;
        hasChannel(arg0: $CustomPacketPayload_): boolean;
        hasChannel(arg0: $CustomPacketPayload$Type_<never>): boolean;
        getConnection(): $Connection;
        connection: $Connection;
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
    }
    export class $ClientSuggestionProvider implements $SharedSuggestionProvider, $FabricClientCommandSource, $FiguraClientCommandSource {
        sendError(arg0: $Component_): void;
        hasPermission(arg0: number): boolean;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        getClient(): $Minecraft;
        getPlayer(): $LocalPlayer;
        getCustomTabSugggestions(): $Collection<string>;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        getRecipeNames(): $Stream<$ResourceLocation>;
        figura$sendFeedback(message: $Component_): void;
        figura$sendError(message: $Component_): void;
        figura$getClient(): $Minecraft;
        figura$getPlayer(): $LocalPlayer;
        figura$getWorld(): $ClientLevel;
        getOnlinePlayerNames(): $Collection<string>;
        getSelectedEntities(): $Collection<string>;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        customSuggestion(arg0: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getAllTeams(): $Collection<string>;
        suggestRegistryElements(arg0: $ResourceKey_<$Registry<never>>, arg1: $SharedSuggestionProvider$ElementSuggestionType_, arg2: $SuggestionsBuilder, arg3: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        sendFeedback(arg0: $Component_): void;
        levels(): $Set<$ResourceKey<$Level>>;
        getWorld(): $ClientLevel;
        completeCustomSuggestions(arg0: number, arg1: $Suggestions): void;
        modifyCustomCompletions(arg0: $ClientboundCustomChatCompletionsPacket$Action_, arg1: $List_<string>): void;
        suggestRegistryElements(arg0: $Registry<never>, arg1: $SharedSuggestionProvider$ElementSuggestionType_, arg2: $SuggestionsBuilder): void;
        getRotation(): $Vec2;
        getMeta(arg0: string): $Object;
        getEntity(): $Entity;
        getPosition(): $Vec3;
        figura$getEntity(): $Entity;
        figura$getPosition(): $Vec3;
        figura$getRotation(): $Vec2;
        figura$getMeta(key: string): $Object;
        constructor(arg0: $ClientPacketListener, arg1: $Minecraft);
        get client(): $Minecraft;
        get player(): $LocalPlayer;
        get customTabSugggestions(): $Collection<string>;
        get availableSounds(): $Stream<$ResourceLocation>;
        get recipeNames(): $Stream<$ResourceLocation>;
        get onlinePlayerNames(): $Collection<string>;
        get selectedEntities(): $Collection<string>;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get allTeams(): $Collection<string>;
        get world(): $ClientLevel;
        get rotation(): $Vec2;
        get entity(): $Entity;
        get position(): $Vec3;
    }
    export class $ChunkBatchSizeCalculator {
        onBatchStart(): void;
        onBatchFinished(arg0: number): void;
        getDesiredChunksPerTick(): number;
        constructor();
        get desiredChunksPerTick(): number;
    }
}
