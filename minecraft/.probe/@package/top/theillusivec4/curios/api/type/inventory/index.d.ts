import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ICurio$DropRule } from "@package/top/theillusivec4/curios/api/type/capability";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $AttributeModifier_, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map, $Collection, $Set } from "@package/java/util";

declare module "@package/top/theillusivec4/curios/api/type/inventory" {
    export class $IDynamicStackHandler {
    }
    export interface $IDynamicStackHandler extends $IItemHandlerModifiable {
        getStackInSlot(arg0: number): $ItemStack;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getPreviousStackInSlot(arg0: number): $ItemStack;
        setPreviousStackInSlot(arg0: number, arg1: $ItemStack_): void;
        grow(arg0: number): void;
        shrink(arg0: number): void;
        getSlots(): number;
        get slots(): number;
    }
    export class $ICurioStacksHandler {
    }
    export interface $ICurioStacksHandler {
        getRenders(): $NonNullList<boolean>;
        removeModifier(arg0: $ResourceLocation_): void;
        addTransientModifier(arg0: $AttributeModifier_): void;
        isVisible(): boolean;
        deserializeNBT(arg0: $CompoundTag_): void;
        serializeNBT(): $CompoundTag;
        addPermanentModifier(arg0: $AttributeModifier_): void;
        clearModifiers(): void;
        getDropRule(): $ICurio$DropRule;
        getIdentifier(): string;
        getActiveStates(): $NonNullList<boolean>;
        getCosmeticStacks(): $IDynamicStackHandler;
        updateActiveState(arg0: number): void;
        canToggleRendering(): boolean;
        hasCosmetic(): boolean;
        getPermanentModifiers(): $Set<$AttributeModifier>;
        getCachedModifiers(): $Set<$AttributeModifier>;
        getModifiersByOperation(arg0: $AttributeModifier$Operation_): $Collection<$AttributeModifier>;
        clearCachedModifiers(): void;
        copyModifiers(arg0: $ICurioStacksHandler): void;
        getSyncTag(): $CompoundTag;
        applySyncTag(arg0: $CompoundTag_): void;
        /**
         * @deprecated
         */
        getSizeShift(): number;
        /**
         * @deprecated
         */
        grow(arg0: number): void;
        /**
         * @deprecated
         */
        shrink(arg0: number): void;
        getSlots(): number;
        getStacks(): $IDynamicStackHandler;
        getModifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        update(): void;
        get renders(): $NonNullList<boolean>;
        get visible(): boolean;
        get dropRule(): $ICurio$DropRule;
        get identifier(): string;
        get activeStates(): $NonNullList<boolean>;
        get cosmeticStacks(): $IDynamicStackHandler;
        get permanentModifiers(): $Set<$AttributeModifier>;
        get cachedModifiers(): $Set<$AttributeModifier>;
        get syncTag(): $CompoundTag;
        get sizeShift(): number;
        get slots(): number;
        get stacks(): $IDynamicStackHandler;
        get modifiers(): $Map<$ResourceLocation, $AttributeModifier>;
    }
}
