import { $MapCodec } from "@package/com/mojang/serialization";
import { $GearPropertyValue } from "@package/net/silentchaos512/gear/api/property";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $MutableComponent, $Component_, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PartType_ } from "@package/net/silentchaos512/gear/api/part";
import { $Collection_, $List_, $Collection } from "@package/java/util";
import { $MaterialInstance } from "@package/net/silentchaos512/gear/gear/material";
import { $PropertyKey } from "@package/net/silentchaos512/gear/api/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/silentchaos512/gear/api/material/modifier" {
    export interface $IMaterialModifierType<T> extends RegistryMarked<RegistryTypes.SilentgearMaterialModifierTypeTag, RegistryTypes.SilentgearMaterialModifierType> {}
    export class $IMaterialModifierType<T extends $IMaterialModifier> {
    }
    export interface $IMaterialModifierType<T extends $IMaterialModifier> {
        codec(): $MapCodec<T>;
        removeModifier(arg0: $ItemStack_): void;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        addModifier(arg0: T, arg1: $ItemStack_): void;
        readModifier(arg0: $ItemStack_): (T) | undefined;
        getId(): $ResourceLocation;
        get id(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $IMaterialModifierType}.
     */
    export type $IMaterialModifierType_<T> = RegistryTypes.SilentgearMaterialModifierType;
    export class $IMaterialModifier {
    }
    export interface $IMaterialModifier {
        modifyMaterialName(arg0: $MutableComponent_): $MutableComponent;
        modifyProperties<T, V extends $GearPropertyValue<T>>(arg0: $MaterialInstance, arg1: $PartType_, arg2: $PropertyKey<T, V>, arg3: $Collection_<V>): $Collection<V>;
        appendTooltip(arg0: $List_<$Component_>): void;
        getType(): $IMaterialModifierType<never>;
        get type(): $IMaterialModifierType<never>;
    }
}
