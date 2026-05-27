import { $MapCodec_, $Codec } from "@package/com/mojang/serialization";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $PartType, $PartType_ } from "@package/net/silentchaos512/gear/api/part";
import { $Set, $Collection } from "@package/java/util";
import { $GearType_ } from "@package/net/silentchaos512/gear/api/item";
import { $Serializer } from "@package/net/silentchaos512/gear/util";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $MaterialInstance } from "@package/net/silentchaos512/gear/gear/material";
import { $PropertyKey, $GearComponent } from "@package/net/silentchaos512/gear/api/util";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";
export * as modifier from "@package/net/silentchaos512/gear/api/material/modifier";

declare module "@package/net/silentchaos512/gear/api/material" {
    export class $MaterialSerializer<T extends $Material> extends $Serializer<$RegistryFriendlyByteBuf, T> {
        constructor(arg0: $MapCodec_<T>, arg1: $StreamCodec_<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $MaterialSerializer}.
     */
    export type $MaterialSerializer_<T> = RegistryTypes.SilentgearMaterialSerializer;
    export class $IMaterialCategory {
    }
    export interface $IMaterialCategory {
        getDisplayName(): $Component;
        getName(): string;
        matches(arg0: $IMaterialCategory_): boolean;
        get displayName(): $Component;
        get name(): string;
    }
    /**
     * Values that may be interpreted as {@link $IMaterialCategory}.
     */
    export type $IMaterialCategory_ = (() => string);
    export class $Material {
    }
    export interface $Material extends $GearComponent<$MaterialInstance> {
        getColor(arg0: $MaterialInstance, arg1: $PartType_, arg2: $GearType_): number;
        canRepair(arg0: $MaterialInstance): boolean;
        /**
         * @deprecated
         */
        getDisplayItem(arg0: $PartType_, arg1: number): $ItemStack;
        getCategories(arg0: $MaterialInstance): $Collection<$IMaterialCategory>;
        /**
         * @deprecated
         */
        getCategories(): $Collection<$IMaterialCategory>;
        getSerializer(): $MaterialSerializer<never>;
        isValid(): boolean;
        hasPartSubstitutes(): boolean;
        canSalvage(): boolean;
        onSalvage(arg0: $MaterialInstance): $MaterialInstance;
        getPartTypes(arg0: $MaterialInstance): $Set<$PartType>;
        isAllowedInPart(arg0: $MaterialInstance, arg1: $PartType_): boolean;
        retainData(arg0: $Material): void;
        getPropertyKeys(arg0: $MaterialInstance, arg1: $PartType_): $Collection<$PropertyKey<never, never>>;
        getDisplayNamePrefix(arg0: $PartType_): $Component;
        getMainTextureType(arg0: $MaterialInstance): $TextureType;
        getNameColor(arg0: $MaterialInstance, arg1: $PartType_, arg2: $GearType_): number;
        getModelKey(arg0: $MaterialInstance): string;
        getParentOptional(): ($Material) | undefined;
        getPartSubstitute(arg0: $PartType_): ($Ingredient) | undefined;
        getBaseMaterialName(arg0: $MaterialInstance, arg1: $PartType_): $Component;
        isInCategory(arg0: $IMaterialCategory_): boolean;
        isSimple(): boolean;
        getSimpleName(): $Component;
        getSimpleName(arg0: $MaterialInstance): $Component;
        getParent(): $Material;
        get serializer(): $MaterialSerializer<never>;
        get valid(): boolean;
        get parentOptional(): ($Material) | undefined;
        get simple(): boolean;
        get parent(): $Material;
    }
    export class $TextureType extends $Enum<$TextureType> {
        getArmorTexture(arg0: boolean): $ResourceLocation;
        static fromString(arg0: string): $TextureType;
        static values(): $TextureType[];
        static valueOf(arg0: string): $TextureType;
        static CODEC: $Codec<$TextureType>;
        static HIGH_CONTRAST: $TextureType;
        static LOW_CONTRAST: $TextureType;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $TextureType>;
    }
    /**
     * Values that may be interpreted as {@link $TextureType}.
     */
    export type $TextureType_ = "high_contrast" | "low_contrast";
    export interface $MaterialSerializer<T> extends RegistryMarked<RegistryTypes.SilentgearMaterialSerializerTag, RegistryTypes.SilentgearMaterialSerializer> {}
}
