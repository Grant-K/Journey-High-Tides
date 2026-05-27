import { $Supplier_ } from "@package/java/util/function";
import { $NumberProperty, $GearPropertyValue, $GearProperty, $GearProperty_ } from "@package/net/silentchaos512/gear/api/property";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $TraitInstance } from "@package/net/silentchaos512/gear/api/traits";
import { $List, $Map_, $Map } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/silentchaos512/gear/core/component" {
    export class $GearPropertiesData extends $Record {
        getTraits(): $List<$TraitInstance>;
        getNumberInt(arg0: $Supplier_<$NumberProperty>): number;
        getNumber(arg0: $Supplier_<$NumberProperty>, arg1: number): number;
        getNumber(arg0: $NumberProperty): number;
        getNumber(arg0: $NumberProperty, arg1: number): number;
        getNumber(arg0: $Supplier_<$NumberProperty>): number;
        get<T, V extends $GearPropertyValue<T>, P extends $GearProperty<T, V>>(arg0: P): V;
        get<T, V extends $GearPropertyValue<T>, P extends $GearProperty<T, V>>(arg0: $Supplier_<P>): V;
        contains(arg0: $GearProperty_<never, never>): boolean;
        properties(): $Map<$GearProperty<never, $GearPropertyValue<never>>, $GearPropertyValue<never>>;
        getOrDefault<T, V extends $GearPropertyValue<T>, P extends $GearProperty<T, V>>(arg0: $Supplier_<P>, arg1: V): V;
        getOrDefault<T, V extends $GearPropertyValue<T>, P extends $GearProperty<T, V>>(arg0: P, arg1: V): V;
        static CODEC: $Codec<$GearPropertiesData>;
        static EMPTY: $GearPropertiesData;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $GearPropertiesData>;
        constructor(properties: $Map_<$GearProperty_<never, never>, $GearPropertyValue<never>>);
        get traits(): $List<$TraitInstance>;
    }
    /**
     * Values that may be interpreted as {@link $GearPropertiesData}.
     */
    export type $GearPropertiesData_ = { properties?: $Map_<$GearProperty_<never, $GearPropertyValue<never>>, $GearPropertyValue<never>>,  } | [properties?: $Map_<$GearProperty_<never, $GearPropertyValue<never>>, $GearPropertyValue<never>>, ];
}
