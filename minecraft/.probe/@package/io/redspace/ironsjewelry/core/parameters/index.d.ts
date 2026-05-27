import { $Codec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $BonusInstance_ } from "@package/io/redspace/ironsjewelry/core/data";
import { $Object } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/io/redspace/ironsjewelry/core/parameters" {
    export class $IBonusParameterType<T> {
        static REGISTRY_CODEC: $Codec<$IBonusParameterType<never>>;
        static BONUS_TO_INSTANCE_CODEC: $Codec<$Map<$IBonusParameterType<never>, $Object>>;
    }
    export interface $IBonusParameterType<T> {
        codec(): $Codec<T>;
        getDescriptionId(): string;
        getSimpleDescription(arg0: T): ($Component) | undefined;
        getValueDescriptionId(arg0: T): (string) | undefined;
        getSimpleDescriptionCast(arg0: $Object): ($Component) | undefined;
        isEmpty(): boolean;
        resolve(arg0: $Map_<$IBonusParameterType_<never>, $Object>): (T) | undefined;
        resolve(arg0: $BonusInstance_): (T) | undefined;
        get descriptionId(): string;
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IBonusParameterType}.
     */
    export type $IBonusParameterType_<T> = RegistryTypes.IronsJewelryBonusParameterType;
    export interface $IBonusParameterType<T> extends RegistryMarked<RegistryTypes.IronsJewelryBonusParameterTypeTag, RegistryTypes.IronsJewelryBonusParameterType> {}
}
