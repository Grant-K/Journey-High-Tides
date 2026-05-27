import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $ICurio$DropRule } from "@package/top/theillusivec4/curios/api/type/capability";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Comparable } from "@package/java/lang";
import { $Set } from "@package/java/util";
export * as inventory from "@package/top/theillusivec4/curios/api/type/inventory";
export * as capability from "@package/top/theillusivec4/curios/api/type/capability";
export * as util from "@package/top/theillusivec4/curios/api/type/util";

declare module "@package/top/theillusivec4/curios/api/type" {
    export class $ISlotType {
    }
    export interface $ISlotType extends $Comparable<$ISlotType> {
        getValidators(): $Set<$ResourceLocation>;
        writeNbt(): $CompoundTag;
        /**
         * @deprecated
         */
        isVisible(): boolean;
        getDropRule(): $ICurio$DropRule;
        getOrder(): number;
        getIdentifier(): string;
        canToggleRendering(): boolean;
        hasCosmetic(): boolean;
        useNativeGui(): boolean;
        getSize(): number;
        /**
         * @deprecated
         */
        isLocked(): boolean;
        getIcon(): $ResourceLocation;
        /**
         * @deprecated
         */
        getPriority(): number;
        get validators(): $Set<$ResourceLocation>;
        get visible(): boolean;
        get dropRule(): $ICurio$DropRule;
        get order(): number;
        get identifier(): string;
        get size(): number;
        get locked(): boolean;
        get icon(): $ResourceLocation;
        get priority(): number;
    }
}
