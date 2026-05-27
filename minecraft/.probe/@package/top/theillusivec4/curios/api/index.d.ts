import { $Level_ } from "@package/net/minecraft/world/level";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ItemAttributeModifiers, $ItemAttributeModifiers_ } from "@package/net/minecraft/world/item/component";
import { $EntityType_, $LivingEntity, $EquipmentSlotGroup_ } from "@package/net/minecraft/world/entity";
import { $Multimap } from "@package/com/google/common/collect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AttributeModifier_, $Attribute, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $ISlotType } from "@package/top/theillusivec4/curios/api/type";
import { $Map, $Set_ } from "@package/java/util";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $ISlotHelper, $ICuriosHelper, $IIconHelper } from "@package/top/theillusivec4/curios/api/type/util";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $ICurio, $ICuriosItemHandler, $ICurioItem } from "@package/top/theillusivec4/curios/api/type/capability";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
export * as type from "@package/top/theillusivec4/curios/api/type";
export * as event from "@package/top/theillusivec4/curios/api/event";
export * as extensions from "@package/top/theillusivec4/curios/api/extensions";
export * as client from "@package/top/theillusivec4/curios/api/client";

declare module "@package/top/theillusivec4/curios/api" {
    export class $CuriosApi {
        static getCuriosInventory(arg0: $LivingEntity): ($ICuriosItemHandler) | undefined;
        static getCurio(arg0: $ItemStack_): ($ICurio) | undefined;
        /**
         * @deprecated
         */
        static getEntitySlots(arg0: $EntityType_<never>): $Map<string, $ISlotType>;
        static getEntitySlots(arg0: $LivingEntity): $Map<string, $ISlotType>;
        static getEntitySlots(arg0: $EntityType_<never>, arg1: $Level_): $Map<string, $ISlotType>;
        static getEntitySlots(arg0: $EntityType_<never>, arg1: boolean): $Map<string, $ISlotType>;
        static getAttributeModifiers(arg0: $SlotContext_, arg1: $ResourceLocation_, arg2: $ItemStack_): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        static getItemStackSlots(arg0: $ItemStack_, arg1: boolean): $Map<string, $ISlotType>;
        static getItemStackSlots(arg0: $ItemStack_, arg1: $LivingEntity): $Map<string, $ISlotType>;
        static getItemStackSlots(arg0: $ItemStack_, arg1: $Level_): $Map<string, $ISlotType>;
        /**
         * @deprecated
         */
        static getItemStackSlots(arg0: $ItemStack_): $Map<string, $ISlotType>;
        /**
         * @deprecated
         */
        static setCuriosHelper(arg0: $ICuriosHelper): void;
        /**
         * @deprecated
         */
        static setSlotHelper(arg0: $ISlotHelper): void;
        /**
         * @deprecated
         */
        static getSlotHelper(): $ISlotHelper;
        static addModifier(arg0: $ItemStack_, arg1: $Holder_<$Attribute>, arg2: $ResourceLocation_, arg3: number, arg4: $AttributeModifier$Operation_, arg5: string): void;
        static addSlotModifier(arg0: $Multimap<$Holder_<$Attribute>, $AttributeModifier_>, arg1: string, arg2: $ResourceLocation_, arg3: number, arg4: $AttributeModifier$Operation_): void;
        static addSlotModifier(arg0: $ItemStack_, arg1: string, arg2: $ResourceLocation_, arg3: number, arg4: $AttributeModifier$Operation_, arg5: string): void;
        static registerCurio(arg0: $Item_, arg1: $ICurioItem): void;
        static isStackValid(arg0: $SlotContext_, arg1: $ItemStack_): boolean;
        /**
         * @deprecated
         */
        static setIconHelper(arg0: $IIconHelper): void;
        /**
         * @deprecated
         */
        static getCuriosHelper(): $ICuriosHelper;
        static withSlotModifier(arg0: $ItemAttributeModifiers_, arg1: string, arg2: $ResourceLocation_, arg3: number, arg4: $AttributeModifier$Operation_, arg5: $EquipmentSlotGroup_): $ItemAttributeModifiers;
        static getPlayerSlots(arg0: $Level_): $Map<string, $ISlotType>;
        static getPlayerSlots(arg0: boolean): $Map<string, $ISlotType>;
        static getPlayerSlots(arg0: $Player): $Map<string, $ISlotType>;
        /**
         * @deprecated
         */
        static getPlayerSlots(): $Map<string, $ISlotType>;
        static registerCurioPredicate(arg0: $ResourceLocation_, arg1: $Predicate_<$SlotResult>): void;
        static getCurioPredicate(arg0: $ResourceLocation_): ($Predicate<$SlotResult>) | undefined;
        static getCurioPredicates(): $Map<$ResourceLocation, $Predicate<$SlotResult>>;
        static testCurioPredicates(arg0: $Set_<$ResourceLocation_>, arg1: $SlotResult_): boolean;
        static getSlotId(arg0: $SlotContext_): $ResourceLocation;
        static broadcastCurioBreakEvent(arg0: $SlotContext_): void;
        /**
         * @deprecated
         */
        static getSlotIcon(arg0: string): $ResourceLocation;
        /**
         * @deprecated
         */
        static getIconHelper(): $IIconHelper;
        static getSlot(arg0: string, arg1: $Level_): ($ISlotType) | undefined;
        /**
         * @deprecated
         */
        static getSlot(arg0: string): ($ISlotType) | undefined;
        static getSlot(arg0: string, arg1: boolean): ($ISlotType) | undefined;
        static getSlots(arg0: $Level_): $Map<string, $ISlotType>;
        static getSlots(arg0: boolean): $Map<string, $ISlotType>;
        /**
         * @deprecated
         */
        static getSlots(): $Map<string, $ISlotType>;
        static MODID: string;
        constructor();
        static get curioPredicates(): $Map<$ResourceLocation, $Predicate<$SlotResult>>;
    }
    export class $SlotContext extends $Record {
        cosmetic(): boolean;
        entity(): $LivingEntity;
        identifier(): string;
        visible(): boolean;
        index(): number;
        constructor(identifier: string, entity: $LivingEntity, index: number, cosmetic: boolean, visible: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SlotContext}.
     */
    export type $SlotContext_ = { entity?: $LivingEntity, identifier?: string, index?: number, cosmetic?: boolean, visible?: boolean,  } | [entity?: $LivingEntity, identifier?: string, index?: number, cosmetic?: boolean, visible?: boolean, ];
    export class $SlotResult extends $Record {
        slotContext(): $SlotContext;
        stack(): $ItemStack;
        constructor(slotContext: $SlotContext_, stack: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $SlotResult}.
     */
    export type $SlotResult_ = { slotContext?: $SlotContext_, stack?: $ItemStack_,  } | [slotContext?: $SlotContext_, stack?: $ItemStack_, ];
}
