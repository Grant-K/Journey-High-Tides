import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $List_, $Collection, $Map } from "@package/java/util";
import { $StationMapData, $StationBlockEntity, $StationMarker } from "@package/com/simibubi/create/content/trains/station";
import { $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $Holder_, $Holder, $BlockPos_, $Registry } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $FramedMap$MarkerRemover } from "@package/xfacthd/framedblocks/common/data/component";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $Record, $Iterable } from "@package/java/lang";
import { $CustomMapData$Type_, $ExpandedMapData } from "@package/net/mehvahdjukaar/moonlight/api/map";
import { $MapDecorationInjector } from "@package/de/dafuqs/spectrum/injectors";
import { $LevelAccessor, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $DyeColor_, $ItemStack_, $DyeColor } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $MapStateAccessor } from "@package/de/dafuqs/spectrum/mixin/accessors";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MapOpacity } from "@package/ca/fxco/moreculling/api/map";
import { $IHoldingPlayerExtension } from "@package/net/mehvahdjukaar/moonlight/core/misc";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $MLMapMarker } from "@package/net/mehvahdjukaar/moonlight/api/map/decoration";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/level/saveddata/maps" {
    export class $MapBanner extends $Record {
        getDecoration(): $Holder<$MapDecorationType>;
        static fromWorld(arg0: $BlockGetter, arg1: $BlockPos_): $MapBanner;
        color(): $DyeColor;
        pos(): $BlockPos;
        name(): ($Component) | undefined;
        getId(): string;
        static CODEC: $Codec<$MapBanner>;
        static LIST_CODEC: $Codec<$List<$MapBanner>>;
        constructor(arg0: $BlockPos_, arg1: $DyeColor_, arg2: ($Component_) | undefined);
        get decoration(): $Holder<$MapDecorationType>;
        get id(): string;
    }
    /**
     * Values that may be interpreted as {@link $MapBanner}.
     */
    export type $MapBanner_ = { pos?: $BlockPos_, color?: $DyeColor_, name?: ($Component_) | undefined,  } | [pos?: $BlockPos_, color?: $DyeColor_, name?: ($Component_) | undefined, ];
    export class $MapItemSavedData$MapPatch extends $Record {
        mapColors(): number[];
        startX(): number;
        startY(): number;
        applyToMap(arg0: $MapItemSavedData): void;
        width(): number;
        height(): number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, ($MapItemSavedData$MapPatch) | undefined>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]);
    }
    /**
     * Values that may be interpreted as {@link $MapItemSavedData$MapPatch}.
     */
    export type $MapItemSavedData$MapPatch_ = { startY?: number, width?: number, mapColors?: number[], height?: number, startX?: number,  } | [startY?: number, width?: number, mapColors?: number[], height?: number, startX?: number, ];
    export class $MapFrame {
        getRotation(): number;
        static frameId(arg0: $BlockPos_): string;
        getPos(): $BlockPos;
        getEntityId(): number;
        static load(arg0: $CompoundTag_): $MapFrame;
        getId(): string;
        save(): $CompoundTag;
        constructor(arg0: $BlockPos_, arg1: number, arg2: number);
        get rotation(): number;
        get pos(): $BlockPos;
        get entityId(): number;
        get id(): string;
    }
    export class $MapIndex extends $SavedData {
        getFreeAuxValueForMap(): $MapId;
        static load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $MapIndex;
        static factory(): $SavedData$Factory<$MapIndex>;
        static FILE_NAME: string;
        constructor();
        get freeAuxValueForMap(): $MapId;
    }
    export class $MapDecorationTypes {
        static bootstrap(arg0: $Registry<$MapDecorationType_>): $Holder<$MapDecorationType>;
        static BLUE_MARKER: $Holder<$MapDecorationType>;
        static TARGET_POINT: $Holder<$MapDecorationType>;
        static BLUE_BANNER: $Holder<$MapDecorationType>;
        static LIGHT_BLUE_BANNER: $Holder<$MapDecorationType>;
        static SWAMP_HUT: $Holder<$MapDecorationType>;
        static FRAME: $Holder<$MapDecorationType>;
        static BLACK_BANNER: $Holder<$MapDecorationType>;
        static MAGENTA_BANNER: $Holder<$MapDecorationType>;
        static PLAINS_VILLAGE: $Holder<$MapDecorationType>;
        static PINK_BANNER: $Holder<$MapDecorationType>;
        static WOODLAND_MANSION: $Holder<$MapDecorationType>;
        static YELLOW_BANNER: $Holder<$MapDecorationType>;
        static RED_MARKER: $Holder<$MapDecorationType>;
        static DESERT_VILLAGE: $Holder<$MapDecorationType>;
        static TRIAL_CHAMBERS: $Holder<$MapDecorationType>;
        static PLAYER_OFF_LIMITS: $Holder<$MapDecorationType>;
        static ORANGE_BANNER: $Holder<$MapDecorationType>;
        static PURPLE_BANNER: $Holder<$MapDecorationType>;
        static TARGET_X: $Holder<$MapDecorationType>;
        static BROWN_BANNER: $Holder<$MapDecorationType>;
        static RED_X: $Holder<$MapDecorationType>;
        static RED_BANNER: $Holder<$MapDecorationType>;
        static GRAY_BANNER: $Holder<$MapDecorationType>;
        static JUNGLE_TEMPLE: $Holder<$MapDecorationType>;
        static OCEAN_MONUMENT: $Holder<$MapDecorationType>;
        static LIGHT_GRAY_BANNER: $Holder<$MapDecorationType>;
        static CYAN_BANNER: $Holder<$MapDecorationType>;
        static GREEN_BANNER: $Holder<$MapDecorationType>;
        static PLAYER: $Holder<$MapDecorationType>;
        static PLAYER_OFF_MAP: $Holder<$MapDecorationType>;
        static WHITE_BANNER: $Holder<$MapDecorationType>;
        static LIME_BANNER: $Holder<$MapDecorationType>;
        static SAVANNA_VILLAGE: $Holder<$MapDecorationType>;
        static SNOWY_VILLAGE: $Holder<$MapDecorationType>;
        static TAIGA_VILLAGE: $Holder<$MapDecorationType>;
        constructor();
    }
    export class $MapId extends $Record {
        id(): number;
        key(): string;
        static CODEC: $Codec<$MapId>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $MapId>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $MapId}.
     */
    export type $MapId_ = { id?: number,  } | [id?: number, ];
    export class $MapItemSavedData extends $SavedData implements $MapOpacity, $StationMapData, $FramedMap$MarkerRemover, $ExpandedMapData, $MapStateAccessor {
        locked(): $MapItemSavedData;
        getDecorations(): $Iterable<$MapDecoration>;
        getUpdatePacket(arg0: $MapId_, arg1: $Player): $Packet<never>;
        checkBanners(arg0: $BlockGetter, arg1: number, arg2: number): void;
        updateColor(arg0: number, arg1: number, arg2: number): boolean;
        static createFresh(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: $ResourceKey_<$Level>): $MapItemSavedData;
        getHoldingPlayer(arg0: $Player): $MapItemSavedData$HoldingPlayer;
        tickCarriedBy(arg0: $Player, arg1: $ItemStack_): void;
        scaled(): $MapItemSavedData;
        toggleBanner(arg0: $LevelAccessor, arg1: $BlockPos_): boolean;
        ml$getCustomData(): $Map<any, any>;
        removedFromFrame(arg0: $BlockPos_, arg1: number): void;
        isTrackedCountOverLimit(arg0: number): boolean;
        isExplorationMap(): boolean;
        static addTargetDecoration(arg0: $ItemStack_, arg1: $BlockPos_, arg2: string, arg3: $Holder_<$MapDecorationType>): void;
        setColor(arg0: number, arg1: number, arg2: number): void;
        ml$toggleCustomDecoration(world: $LevelAccessor, pos: $BlockPos_): boolean;
        moreculling$hasTransparency(): boolean;
        handler$mak000$moonlight$initCustomData(i: number, j: number, b: number, bl: boolean, bl2: boolean, bl3: boolean, resourceKey: $ResourceKey_<any>, ci: $CallbackInfo): void;
        static createForClient(arg0: number, arg1: boolean, arg2: $ResourceKey_<$Level>): $MapItemSavedData;
        addDecoration(arg0: $Holder_<$MapDecorationType>, arg1: $LevelAccessor, arg2: string, arg3: number, arg4: number, arg5: number, arg6: $Component_): void;
        handler$mak000$moonlight$save(tag: $CompoundTag_, registries: $HolderLookup$Provider, cir: $CallbackInfoReturnable<any>): void;
        handler$mak000$moonlight$locked(cir: $CallbackInfoReturnable<any>): void;
        handler$mak000$moonlight$scaled(cir: $CallbackInfoReturnable<any>): void;
        removeDecoration(arg0: string): void;
        handler$mak000$moonlight$tickCarriedBy(player: $Player, stack: $ItemStack_, ci: $CallbackInfo): void;
        handler$kig000$create$onCheckBanners(arg0: $BlockGetter, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        handler$mak000$moonlight$checkCustomDeco(world: $BlockGetter, x: number, z: number, ci: $CallbackInfo): void;
        getBanners(): $Collection<$MapBanner>;
        modifyReturnValue$mak000$moonlight$ml$isExplorationMap(original: boolean): boolean;
        addClientSideDecorations(arg0: $List_<$MapDecoration_>): void;
        addStationMarker(arg0: $StationMarker): void;
        toggleStation(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $StationBlockEntity): boolean;
        framedblocks$removeMapMarker(arg0: $BlockPos_): void;
        ml$setCustomDecorationsDirty(): void;
        ml$setCustomDataDirty(type: $CustomMapData$Type_<any, any>, dirtySetter: $Consumer_<any>): void;
        ml$getCustomDecorations(): $Map<any, any>;
        ml$getCustomMarkers(): $Map<any, any>;
        ml$getVanillaDecorationSize(): number;
        ml$addCustomMarker(marker: $MLMapMarker<any>): void;
        ml$removeCustomMarker(key: string): boolean;
        ml$copy(): $MapItemSavedData;
        ml$resetCustomDecoration(): void;
        static load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $MapItemSavedData;
        static factory(): $SavedData$Factory<$MapItemSavedData>;
        getTrackingPosition(): boolean;
        getUnlimitedTracking(): boolean;
        getBannerMarkers(): $Map<string, $MapBanner>;
        getTrackedDecorationCount(): number;
        setTrackedDecorationCount(arg0: number): void;
        invokeSetDecorationsDirty(): void;
        invokeRemoveDecoration(arg0: string): void;
        centerZ: number;
        static TRACKED_DECORATION_LIMIT: number;
        centerX: number;
        moonlight$customData: $Map<any, any>;
        moonlight$customDecorations: $Map<any, any>;
        scale: number;
        static MAX_SCALE: number;
        dimension: $ResourceKey<$Level>;
        colors: number[];
        constructor(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $ResourceKey_<$Level>);
        get decorations(): $Iterable<$MapDecoration>;
        get explorationMap(): boolean;
        get banners(): $Collection<$MapBanner>;
        get trackingPosition(): boolean;
        get unlimitedTracking(): boolean;
        get bannerMarkers(): $Map<string, $MapBanner>;
    }
    export class $MapDecorationType extends $Record {
        assetId(): $ResourceLocation;
        mapColor(): number;
        showOnItemFrame(): boolean;
        explorationMapElement(): boolean;
        trackCount(): boolean;
        hasMapColor(): boolean;
        static CODEC: $Codec<$Holder<$MapDecorationType>>;
        static NO_MAP_COLOR: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MapDecorationType>>;
        constructor(arg0: $ResourceLocation_, arg1: boolean, arg2: number, arg3: boolean, arg4: boolean);
    }
    /**
     * Values that may be interpreted as {@link $MapDecorationType}.
     */
    export type $MapDecorationType_ = RegistryTypes.MapDecorationType | { explorationMapElement?: boolean, assetId?: $ResourceLocation_, mapColor?: number, showOnItemFrame?: boolean, trackCount?: boolean,  } | [explorationMapElement?: boolean, assetId?: $ResourceLocation_, mapColor?: number, showOnItemFrame?: boolean, trackCount?: boolean, ];
    export class $MapDecoration extends $Record implements $MapDecorationInjector {
        renderOnFrame(): boolean;
        spectrum$getScale(): number;
        rot(): number;
        spectrum$setScale(arg0: number): void;
        getSpriteLocation(): $ResourceLocation;
        y(): number;
        name(): ($Component) | undefined;
        type(): $Holder<$MapDecorationType>;
        x(): number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MapDecoration>;
        constructor(arg0: $Holder_<$MapDecorationType>, arg1: number, arg2: number, arg3: number, arg4: ($Component_) | undefined);
        get spriteLocation(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $MapDecoration}.
     */
    export type $MapDecoration_ = { rot?: number, y?: number, type?: $Holder_<$MapDecorationType>, name?: ($Component_) | undefined, x?: number,  } | [rot?: number, y?: number, type?: $Holder_<$MapDecorationType>, name?: ($Component_) | undefined, x?: number, ];
    export class $MapItemSavedData$HoldingPlayer implements $IHoldingPlayerExtension {
        handler$mac000$moonlight$initializeDirty(mapItemSavedData: $MapItemSavedData, player: $Player, ci: $CallbackInfo): void;
        handler$mac000$moonlight$checkLocked(mapId: $MapId_, cir: $CallbackInfoReturnable<any>): void;
        modifyReturnValue$mac000$moonlight$addExtraPacketData(packet: $Packet<any>, mapId: $MapId_): $Packet<any>;
        handler$mac000$moonlight$lockData(x: number, z: number, ci: $CallbackInfo): void;
        handler$mac000$moonlight$sanityCheck(x: number, z: number, ci: $CallbackInfo): void;
        moonlight$setCustomDataDirty(type: $CustomMapData$Type_<any, any>, dirtySetter: $Consumer_<any>): void;
        moonlight$setCustomMarkersDirty(): void;
        step: number;
        player: $Player;
    }
    export interface $MapDecorationType extends RegistryMarked<RegistryTypes.MapDecorationTypeTag, RegistryTypes.MapDecorationType> {}
}
