import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemAttributeModifiers_ } from "@package/net/minecraft/world/item/component";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $AttributeModifier_, $Attribute, $AttributeModifier } from "@package/net/minecraft/world/entity/ai/attributes";
import { $List, $List_ } from "@package/java/util";
import { $Predicate, $BiConsumer_, $Predicate_ } from "@package/java/util/function";
import { $Holder_, $HolderSet, $HolderSet_, $Holder } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Iterable_, $Record, $Iterable } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/shadowsoffire/apothic_attributes/modifiers" {
    export interface $EntityEquipmentSlot extends RegistryMarked<RegistryTypes.ApothicAttributesEntityEquipmentSlotTag, RegistryTypes.ApothicAttributesEntityEquipmentSlot> {}
    export class $StackAttributeModifiers extends $Record {
        showInTooltip(): boolean;
        withModifierAdded(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_, arg2: $EntitySlotGroup_): $StackAttributeModifiers;
        withTooltip(arg0: boolean): $StackAttributeModifiers;
        static fromVanilla(arg0: $ItemAttributeModifiers_): $StackAttributeModifiers;
        modifiers(): $List<$StackAttributeModifiers$Entry>;
        static builder(): $StackAttributeModifiers$Builder;
        forEach(arg0: $EntitySlotGroup_, arg1: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        forEach(arg0: $Holder_<$EntityEquipmentSlot>, arg1: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        static CODEC: $Codec<$StackAttributeModifiers>;
        static EMPTY: $StackAttributeModifiers;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $StackAttributeModifiers>;
        constructor(modifiers: $List_<$StackAttributeModifiers$Entry_>, showInTooltip: boolean);
    }
    /**
     * Values that may be interpreted as {@link $StackAttributeModifiers}.
     */
    export type $StackAttributeModifiers_ = { showInTooltip?: boolean, modifiers?: $List_<$StackAttributeModifiers$Entry_>,  } | [showInTooltip?: boolean, modifiers?: $List_<$StackAttributeModifiers$Entry_>, ];
    export class $StackAttributeModifiers$Builder {
        build(): $StackAttributeModifiers;
        add(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_, arg2: $EntitySlotGroup_): $StackAttributeModifiers$Builder;
    }
    export class $StackAttributeModifiers$Entry extends $Record {
        attribute(): $Holder<$Attribute>;
        modifier(): $AttributeModifier;
        slots(): $EntitySlotGroup;
        matches(arg0: $Holder_<$Attribute>, arg1: $ResourceLocation_): boolean;
        static CODEC: $Codec<$StackAttributeModifiers$Entry>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $StackAttributeModifiers$Entry>;
        constructor(attribute: $Holder_<$Attribute>, modifier: $AttributeModifier_, slots: $EntitySlotGroup_);
    }
    /**
     * Values that may be interpreted as {@link $StackAttributeModifiers$Entry}.
     */
    export type $StackAttributeModifiers$Entry_ = { slots?: $EntitySlotGroup_, modifier?: $AttributeModifier_, attribute?: $Holder_<$Attribute>,  } | [slots?: $EntitySlotGroup_, modifier?: $AttributeModifier_, attribute?: $Holder_<$Attribute>, ];
    export class $EntityEquipmentSlot {
        static CODEC: $Codec<$Holder<$EntityEquipmentSlot>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$EntityEquipmentSlot>>;
    }
    export interface $EntityEquipmentSlot {
        getStacks(arg0: $LivingEntity): $Iterable<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $EntityEquipmentSlot}.
     */
    export type $EntityEquipmentSlot_ = RegistryTypes.ApothicAttributesEntityEquipmentSlot | ((arg0: $LivingEntity) => $Iterable_<$ItemStack>);
    export class $EntitySlotGroup extends $Record implements $Predicate<$Holder<$EntityEquipmentSlot>> {
        slots(): $HolderSet<$EntityEquipmentSlot>;
        test(arg0: $Holder_<$EntityEquipmentSlot>): boolean;
        id(): $ResourceLocation;
        or(arg0: $Predicate_<$Holder<$EntityEquipmentSlot>>): $Predicate<$Holder<$EntityEquipmentSlot>>;
        negate(): $Predicate<$Holder<$EntityEquipmentSlot>>;
        and(arg0: $Predicate_<$Holder<$EntityEquipmentSlot>>): $Predicate<$Holder<$EntityEquipmentSlot>>;
        static CODEC: $Codec<$EntitySlotGroup>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EntitySlotGroup>;
        constructor(id: $ResourceLocation_, slots: $HolderSet_<$EntityEquipmentSlot>);
    }
    /**
     * Values that may be interpreted as {@link $EntitySlotGroup}.
     */
    export type $EntitySlotGroup_ = RegistryTypes.ApothicAttributesEntitySlotGroup | { slots?: $HolderSet_<$EntityEquipmentSlot>, id?: $ResourceLocation_,  } | [slots?: $HolderSet_<$EntityEquipmentSlot>, id?: $ResourceLocation_, ];
    export class $StackAttributeModifiersEvent extends $Event {
        getItemStack(): $ItemStack;
        removeModifier(arg0: $Holder_<$Attribute>, arg1: $ResourceLocation_): boolean;
        addModifier(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_, arg2: $EntitySlotGroup_): boolean;
        replaceModifier(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_, arg2: $EntitySlotGroup_): void;
        getDefaultModifiers(): $StackAttributeModifiers;
        removeAllModifiersFor(arg0: $Holder_<$Attribute>): boolean;
        clearModifiers(): void;
        hasChanges(): boolean;
        removeIf(arg0: $Predicate_<$StackAttributeModifiers$Entry>): boolean;
        build(): $StackAttributeModifiers;
        getModifiers(): $List<$StackAttributeModifiers$Entry>;
        constructor(arg0: $ItemStack_, arg1: $StackAttributeModifiers_);
        get itemStack(): $ItemStack;
        get defaultModifiers(): $StackAttributeModifiers;
        get modifiers(): $List<$StackAttributeModifiers$Entry>;
    }
    export interface $EntitySlotGroup extends RegistryMarked<RegistryTypes.ApothicAttributesEntitySlotGroupTag, RegistryTypes.ApothicAttributesEntitySlotGroup> {}
}
