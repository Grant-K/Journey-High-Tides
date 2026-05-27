import { $Level_ } from "@package/net/minecraft/world/level";
import { $Supplier_, $Function_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $Enum, $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/mehvahdjukaar/moonlight/api/misc" {
    export class $WorldSavedData extends $SavedData {
        onReassigned(level: $Level_): void;
        sync(): void;
        getType(): $WorldSavedDataType<$WorldSavedData>;
        constructor();
        get type(): $WorldSavedDataType<$WorldSavedData>;
    }
    export class $WorldSavedDataType$Scope extends $Enum<$WorldSavedDataType$Scope> {
        static values(): $WorldSavedDataType$Scope[];
        static valueOf(name: string): $WorldSavedDataType$Scope;
        static SINGLE_OVERWORLD: $WorldSavedDataType$Scope;
        static PER_LEVEL: $WorldSavedDataType$Scope;
    }
    /**
     * Values that may be interpreted as {@link $WorldSavedDataType$Scope}.
     */
    export type $WorldSavedDataType$Scope_ = "single_overworld" | "per_level";
    export class $WorldSavedDataType<D extends $WorldSavedData> {
        getCodec(): $Codec<D>;
        isSyncable(): boolean;
        getStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, D>;
        setData(level: $Level_, data: D): void;
        getData(level: $Level_): D;
        getName(): string;
        static CODEC: $Codec<$WorldSavedDataType<$WorldSavedData>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $WorldSavedDataType<$WorldSavedData>>;
        constructor(id: $ResourceLocation_, overworldToDataConstructor: $Function_<$ServerLevel, D>, codec: $Supplier_<$Codec<D>>, streamCodec: $Supplier_<$StreamCodec<$RegistryFriendlyByteBuf, D>>, scope: $WorldSavedDataType$Scope_);
        constructor(id: $ResourceLocation_, overworldToDataConstructor: $Function_<$ServerLevel, D>, codec: $Supplier_<$Codec<D>>, streamCodec: $Supplier_<$StreamCodec<$RegistryFriendlyByteBuf, D>>);
        get codec(): $Codec<D>;
        get syncable(): boolean;
        get streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, D>;
        get name(): string;
    }
    /**
     * Values that may be interpreted as {@link $WorldSavedDataType}.
     */
    export type $WorldSavedDataType_<D> = RegistryTypes.MoonlightWorldSavedDataType;
    export interface $WorldSavedDataType<D> extends RegistryMarked<RegistryTypes.MoonlightWorldSavedDataTypeTag, RegistryTypes.MoonlightWorldSavedDataType> {}
    export class $Triplet<L, M, R> extends $Record {
        left(): L;
        right(): R;
        middle(): M;
        static of<A, B, C>(left: A, middle: B, right: C): $Triplet<A, B, C>;
        constructor(left: L, middle: M, right: R);
    }
    /**
     * Values that may be interpreted as {@link $Triplet}.
     */
    export type $Triplet_<L, M, R> = { middle?: any, left?: any, right?: any,  } | [middle?: any, left?: any, right?: any, ];
}
