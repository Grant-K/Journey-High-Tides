import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Map_, $Map } from "@package/java/util";
import { $Consumer_, $Supplier_, $Supplier } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos_ } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Record } from "@package/java/lang";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";
import { $MLMapDecoration, $MLMapMarker } from "@package/net/mehvahdjukaar/moonlight/api/map/decoration";
export * as decoration from "@package/net/mehvahdjukaar/moonlight/api/map/decoration";

declare module "@package/net/mehvahdjukaar/moonlight/api/map" {
    export class $CustomMapData$DirtyCounter {
    }
    export interface $CustomMapData$DirtyCounter {
        isDirty(): boolean;
        clearDirty(): void;
        get dirty(): boolean;
    }
    export class $CustomMapData<C extends $CustomMapData$DirtyCounter, P> {
    }
    export interface $CustomMapData<C extends $CustomMapData$DirtyCounter, P> {
        setDirty(data: $MapItemSavedData, dirtySetter: $Consumer_<C>): void;
        onItemTooltip(data: $MapItemSavedData, stack: $ItemStack_): $Component;
        onItemUpdate(data: $MapItemSavedData, entity: $Entity): boolean;
        createUpdatePatch(arg0: C): P;
        applyUpdatePatch(arg0: P): void;
        createDirtyCounter(): C;
        persistOnRescale(): boolean;
        persistOnCopyOrLock(): boolean;
        load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        save(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getType(): $CustomMapData$Type<P, never>;
        get type(): $CustomMapData$Type<P, never>;
    }
    export class $ExpandedMapData {
    }
    export interface $ExpandedMapData {
        ml$getCustomData(): $Map<$CustomMapData$Type<never, never>, $CustomMapData<never, never>>;
        ml$toggleCustomDecoration(arg0: $LevelAccessor, arg1: $BlockPos_): boolean;
        ml$setCustomDecorationsDirty(): void;
        ml$setCustomDataDirty<H extends $CustomMapData$DirtyCounter>(arg0: $CustomMapData$Type_<never, never>, arg1: $Consumer_<H>): void;
        ml$getCustomDecorations(): $Map<string, $MLMapDecoration>;
        ml$getCustomMarkers(): $Map<string, $MLMapMarker<never>>;
        ml$getVanillaDecorationSize(): number;
        ml$addCustomMarker<M extends $MLMapMarker<never>>(arg0: M): void;
        ml$removeCustomMarker(arg0: string): boolean;
        ml$copy(): $MapItemSavedData;
        ml$resetCustomDecoration(): void;
    }
    export class $CustomMapData$DirtyDataPatch<P, D extends $CustomMapData<never, P>> extends $Record {
        patch(): P;
        type(): $CustomMapData$Type<P, D>;
        apply(customData: $Map_<$CustomMapData$Type_<never, never>, $CustomMapData<never, never>>): void;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CustomMapData$DirtyDataPatch<never, never>>;
        constructor(type: $CustomMapData$Type_<P, D>, patch: P);
    }
    /**
     * Values that may be interpreted as {@link $CustomMapData$DirtyDataPatch}.
     */
    export type $CustomMapData$DirtyDataPatch_<P, D> = { type?: $CustomMapData$Type_<any, $CustomMapData<never, P>>, patch?: any,  } | [type?: $CustomMapData$Type_<any, $CustomMapData<never, P>>, patch?: any, ];
    export class $CustomMapData$Type<P, T extends $CustomMapData<never, P>> extends $Record {
        patchCodec(): $StreamCodec<$RegistryFriendlyByteBuf, P>;
        get(mapData: $MapItemSavedData): T;
        factory(): $Supplier<T>;
        id(): $ResourceLocation;
        static CODEC: $Codec<$CustomMapData$Type<never, never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CustomMapData$Type<never, never>>;
        constructor(id: $ResourceLocation_, factory: $Supplier_<T>, patchCodec: $StreamCodec_<$RegistryFriendlyByteBuf, P>);
    }
    /**
     * Values that may be interpreted as {@link $CustomMapData$Type}.
     */
    export type $CustomMapData$Type_<P, T> = RegistryTypes.MoonlightCustomMapDataTypes | { id?: $ResourceLocation_, patchCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, any>, factory?: $Supplier_<$CustomMapData<never, P>>,  } | [id?: $ResourceLocation_, patchCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, any>, factory?: $Supplier_<$CustomMapData<never, P>>, ];
    export interface $CustomMapData$Type<P, T> extends RegistryMarked<RegistryTypes.MoonlightCustomMapDataTypesTag, RegistryTypes.MoonlightCustomMapDataTypes> {}
}
