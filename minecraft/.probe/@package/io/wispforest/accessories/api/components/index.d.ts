import { $Endec } from "@package/io/wispforest/endec";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $SlotReference } from "@package/io/wispforest/accessories/api/slot";
import { $AccessoryAttributeBuilder } from "@package/io/wispforest/accessories/api/attributes";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $AttributeModifier_, $Attribute, $AttributeModifier } from "@package/net/minecraft/world/entity/ai/attributes";
import { $List, $List_ } from "@package/java/util";
import { $Record } from "@package/java/lang";

declare module "@package/io/wispforest/accessories/api/components" {
    export class $AccessoryItemAttributeModifiers$Entry extends $Record {
        isStackable(): boolean;
        slotName(): string;
        attribute(): $Holder<$Attribute>;
        modifier(): $AttributeModifier;
        static ENDEC: $Endec<$AccessoryItemAttributeModifiers$Entry>;
        constructor(attribute: $Holder_<$Attribute>, modifier: $AttributeModifier_, slotName: string, isStackable: boolean);
        get stackable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AccessoryItemAttributeModifiers$Entry}.
     */
    export type $AccessoryItemAttributeModifiers$Entry_ = { slotName?: string, attribute?: $Holder_<$Attribute>, modifier?: $AttributeModifier_, isStackable?: boolean,  } | [slotName?: string, attribute?: $Holder_<$Attribute>, modifier?: $AttributeModifier_, isStackable?: boolean, ];
    export class $AccessoryItemAttributeModifiers extends $Record {
        hasModifier(holder: $Holder_<$Attribute>, location: $ResourceLocation_): boolean;
        getModifier(holder: $Holder_<$Attribute>, location: $ResourceLocation_): $AttributeModifier;
        withModifierAddedForAny(holder: $Holder_<$Attribute>, attributeModifier: $AttributeModifier_, slotName: string, isStackable: boolean): $AccessoryItemAttributeModifiers;
        withoutModifier(holder: $Holder_<$Attribute>, location: $ResourceLocation_): $AccessoryItemAttributeModifiers;
        showInTooltip(): boolean;
        withModifierAdded(holder: $Holder_<$Attribute>, attributeModifier: $AttributeModifier_, slotName: string, isStackable: boolean): $AccessoryItemAttributeModifiers;
        gatherAttributes(slotReference: $SlotReference): $AccessoryAttributeBuilder;
        modifiers(): $List<$AccessoryItemAttributeModifiers$Entry>;
        static builder(): $AccessoryItemAttributeModifiers$Builder;
        static ENDEC: $Endec<$AccessoryItemAttributeModifiers>;
        static EMPTY: $AccessoryItemAttributeModifiers;
        constructor(modifiers: $List_<$AccessoryItemAttributeModifiers$Entry_>, showInTooltip: boolean);
    }
    /**
     * Values that may be interpreted as {@link $AccessoryItemAttributeModifiers}.
     */
    export type $AccessoryItemAttributeModifiers_ = { showInTooltip?: boolean, modifiers?: $List_<$AccessoryItemAttributeModifiers$Entry_>,  } | [showInTooltip?: boolean, modifiers?: $List_<$AccessoryItemAttributeModifiers$Entry_>, ];
    export class $AccessoryItemAttributeModifiers$Builder {
        addForSlot(holder: $Holder_<$Attribute>, attributeModifier: $AttributeModifier_, slotName: string, isStackable: boolean): $AccessoryItemAttributeModifiers$Builder;
        addForAny(holder: $Holder_<$Attribute>, attributeModifier: $AttributeModifier_, isStackable: boolean): $AccessoryItemAttributeModifiers$Builder;
        showInTooltip(value: boolean): $AccessoryItemAttributeModifiers$Builder;
        build(): $AccessoryItemAttributeModifiers;
        isEmpty(): boolean;
        /**
         * @deprecated
         */
        add(holder: $Holder_<$Attribute>, attributeModifier: $AttributeModifier_, slotName: string, isStackable: boolean): $AccessoryItemAttributeModifiers$Builder;
        get empty(): boolean;
    }
}
