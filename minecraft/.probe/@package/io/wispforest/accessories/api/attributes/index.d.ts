import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $SlotReference } from "@package/io/wispforest/accessories/api/slot";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Multimap } from "@package/com/google/common/collect";
import { $AttributeModifier_, $Attribute, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map, $Collection } from "@package/java/util";
import { $Record } from "@package/java/lang";

declare module "@package/io/wispforest/accessories/api/attributes" {
    export class $AttributeModificationData extends $Record {
        slotPath(): string;
        attribute(): $Holder<$Attribute>;
        modifier(): $AttributeModifier;
        constructor(attribute: $Holder_<$Attribute>, modifier: $AttributeModifier_);
        constructor(slotPath: string, attribute: $Holder_<$Attribute>, modifier: $AttributeModifier_);
    }
    /**
     * Values that may be interpreted as {@link $AttributeModificationData}.
     */
    export type $AttributeModificationData_ = { slotPath?: string, modifier?: $AttributeModifier_, attribute?: $Holder_<$Attribute>,  } | [slotPath?: string, modifier?: $AttributeModifier_, attribute?: $Holder_<$Attribute>, ];
    export class $AccessoryAttributeBuilder {
        exclusiveAttributes(): $Map<$Holder<$Attribute>, $Map<$ResourceLocation, $AttributeModificationData>>;
        stackedAttributes(): $Multimap<$Holder<$Attribute>, $AttributeModificationData>;
        removeExclusive(attribute: $Holder_<$Attribute>, location: $ResourceLocation_): $AttributeModificationData;
        removeStacks(attribute: $Holder_<$Attribute>, location: $ResourceLocation_): $Collection<$AttributeModificationData>;
        getAttributeModifiers(filterSlots: boolean): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        addExclusive(attribute: $Holder_<$Attribute>, location: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): $AccessoryAttributeBuilder;
        addExclusive(attribute: $Holder_<$Attribute>, modifier: $AttributeModifier_): $AccessoryAttributeBuilder;
        getSlotModifiers(): $Multimap<string, $AttributeModifier>;
        addStackable(attribute: $Holder_<$Attribute>, modifier: $AttributeModifier_): $AccessoryAttributeBuilder;
        addStackable(attribute: $Holder_<$Attribute>, location: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): $AccessoryAttributeBuilder;
        getExclusive(attribute: $Holder_<$Attribute>, location: $ResourceLocation_): $AttributeModificationData;
        /**
         * @deprecated
         */
        static createSlotPath(ref: $SlotReference): string;
        /**
         * @deprecated
         */
        static createSlotPath(slotname: string, slot: number): string;
        addFrom(builder: $AccessoryAttributeBuilder): $AccessoryAttributeBuilder;
        getStacks(attribute: $Holder_<$Attribute>, location: $ResourceLocation_): $Collection<$AttributeModificationData>;
        isEmpty(): boolean;
        constructor();
        constructor(slotReference: $SlotReference);
        constructor(slotName: string, slot: number);
        get slotModifiers(): $Multimap<string, $AttributeModifier>;
        get empty(): boolean;
    }
}
