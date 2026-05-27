import { $BlockGetter, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Holder_, $Holder, $HolderSet } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $RecordCodecBuilder$Mu, $RecordCodecBuilder$Instance } from "@package/com/mojang/serialization/codecs";
import { $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Products$P7 } from "@package/com/mojang/datafixers";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/mehvahdjukaar/moonlight/api/map/decoration" {
    export class $MLMapDecoration {
        getY(): number;
        getX(): number;
        getDisplayName(): $Component;
        getRot(): number;
        getType(): $Holder<$MLMapDecorationType<never, never>>;
        static CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MLMapDecoration>;
        constructor(type: $Holder_<$MLMapDecorationType<never, never>>, x: number, y: number, rot: number, displayName: ($Component_) | undefined);
        get y(): number;
        get x(): number;
        get displayName(): $Component;
        get rot(): number;
        get type(): $Holder<$MLMapDecorationType<never, never>>;
    }
    export class $MLMapMarker<D extends $MLMapDecoration> {
        hasFlag(flag: number): boolean;
        getRotation(): number;
        shouldSave(): boolean;
        getPos(): $BlockPos;
        static baseCodecGroup<T extends $MLMapMarker<never>>(instance: $RecordCodecBuilder$Instance<T>): $Products$P7<$RecordCodecBuilder$Mu<T>, $Holder<$MLMapDecorationType<never, never>>, $BlockPos, number, ($Component) | undefined, (boolean) | undefined, (boolean) | undefined, boolean>;
        getDisplayName(): ($Component) | undefined;
        getFlags(): number;
        createDecorationFromMarker(data: $MapItemSavedData): D;
        getMarkerUniqueId(): string;
        shouldRefreshFromWorld(): boolean;
        preventsExtending(): boolean;
        getType(): $Holder<$MLMapDecorationType<never, never>>;
        static HAS_SMALL_TEXTURE_FLAG: number;
        static REFERENCE_CODEC: $Codec<$MLMapMarker<never>>;
        constructor(type: $Holder_<$MLMapDecorationType<never, never>>, pos: $BlockPos_, rotation: number, component: ($Component_) | undefined, shouldRefresh: (boolean) | undefined, shouldSave: (boolean) | undefined, preventsExtending: boolean);
        get rotation(): number;
        get pos(): $BlockPos;
        get displayName(): ($Component) | undefined;
        get flags(): number;
        get markerUniqueId(): string;
        get type(): $Holder<$MLMapDecorationType<never, never>>;
    }
    export interface $MLMapDecorationType<D, M> extends RegistryMarked<RegistryTypes.MoonlightMapMarkerTag, RegistryTypes.MoonlightMapMarker> {}
    export class $MLMapDecorationType<D extends $MLMapDecoration, M extends $MLMapMarker<D>> {
        getCustomFactoryID(): $ResourceLocation;
        /**
         * @deprecated
         */
        createMarkerFromWorld(reader: $BlockGetter, pos: $BlockPos_): M;
        createMarkerFromWorld(arg0: $LevelAccessor, arg1: $BlockPos_): M;
        getDefaultMapColor(): number;
        getAssociatedStructure(): ($HolderSet<$Structure>) | undefined;
        getDecorationCodec(): $StreamCodec<$RegistryFriendlyByteBuf, D>;
        getMarkerCodec(): $MapCodec<M>;
        static CODEC: $Codec<$Holder<$MLMapDecorationType<never, never>>>;
        static DIRECT_CODEC: $Codec<$MLMapDecorationType<never, never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MLMapDecorationType<never, never>>>;
        get customFactoryID(): $ResourceLocation;
        get defaultMapColor(): number;
        get associatedStructure(): ($HolderSet<$Structure>) | undefined;
        get decorationCodec(): $StreamCodec<$RegistryFriendlyByteBuf, D>;
        get markerCodec(): $MapCodec<M>;
    }
    /**
     * Values that may be interpreted as {@link $MLMapDecorationType}.
     */
    export type $MLMapDecorationType_<D, M> = RegistryTypes.MoonlightMapMarker;
}
