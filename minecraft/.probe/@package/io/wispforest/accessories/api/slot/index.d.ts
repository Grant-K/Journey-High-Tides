import { $AccessoriesCapability, $AccessoriesContainer, $DropRule } from "@package/io/wispforest/accessories/api";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $List_, $Set } from "@package/java/util";
import { $Record } from "@package/java/lang";

declare module "@package/io/wispforest/accessories/api/slot" {
    export class $SlotType {
        static EMPTY_SLOT_ICON: $ResourceLocation;
    }
    export interface $SlotType {
        amount(): number;
        dropRule(): $DropRule;
        order(): number;
        icon(): $ResourceLocation;
        translation(): string;
        validators(): $Set<$ResourceLocation>;
        name(): string;
    }
    export class $SlotEntryReference extends $Record {
        stack(): $ItemStack;
        reference(): $SlotReference;
        constructor(reference: $SlotReference, stack: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $SlotEntryReference}.
     */
    export type $SlotEntryReference_ = { reference?: $SlotReference, stack?: $ItemStack_,  } | [reference?: $SlotReference, stack?: $ItemStack_, ];
    export class $SlotReference {
        static ofNest(livingEntity: $LivingEntity, slotName: string, initialHolderSlot: number, innerSlotIndices: $List_<number>): $SlotReference;
        static of(livingEntity: $LivingEntity, slotName: string, slot: number): $SlotReference;
    }
    export interface $SlotReference {
        capability(): $AccessoriesCapability;
        slotName(): string;
        entity(): $LivingEntity;
        isValid(): boolean;
        createSlotPath(): string;
        slotContainer(): $AccessoriesContainer;
        getStack(): $ItemStack;
        setStack(stack: $ItemStack_): boolean;
        slot(): number;
        type(): $SlotType;
        get valid(): boolean;
    }
    export class $SlotTypeReference extends $Record {
        slotName(): string;
        get(level: $Level_): $SlotType;
        get(isClientSide: boolean): $SlotType;
        constructor(slotName: string);
    }
    /**
     * Values that may be interpreted as {@link $SlotTypeReference}.
     */
    export type $SlotTypeReference_ = { slotName?: string,  } | [slotName?: string, ];
}
