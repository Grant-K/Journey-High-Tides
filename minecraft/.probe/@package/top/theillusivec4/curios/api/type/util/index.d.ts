import { $SlotResult, $SlotContext, $SlotContext_ } from "@package/top/theillusivec4/curios/api";
import { $Predicate_, $Consumer_ } from "@package/java/util/function";
import { $ItemStack, $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ImmutableTriple } from "@package/org/apache/commons/lang3/tuple";
import { $ICurio, $ICuriosItemHandler } from "@package/top/theillusivec4/curios/api/type/capability";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $TriConsumer_ } from "@package/org/apache/logging/log4j/util";
import { $ISlotType } from "@package/top/theillusivec4/curios/api/type";
import { $SortedMap, $List, $Collection, $Set } from "@package/java/util";
import { $ICurioStacksHandler } from "@package/top/theillusivec4/curios/api/type/inventory";

declare module "@package/top/theillusivec4/curios/api/type/util" {
    /**
     * @deprecated
     */
    export class $ISlotHelper {
    }
    export interface $ISlotHelper {
        /**
         * @deprecated
         */
        addSlotType(arg0: $ISlotType): void;
        /**
         * @deprecated
         */
        growSlotType(arg0: string, arg1: number, arg2: $LivingEntity): void;
        /**
         * @deprecated
         */
        growSlotType(arg0: string, arg1: $LivingEntity): void;
        /**
         * @deprecated
         */
        shrinkSlotType(arg0: string, arg1: $LivingEntity): void;
        /**
         * @deprecated
         */
        shrinkSlotType(arg0: string, arg1: number, arg2: $LivingEntity): void;
        /**
         * @deprecated
         */
        unlockSlotType(arg0: string, arg1: $LivingEntity): void;
        /**
         * @deprecated
         */
        lockSlotType(arg0: string, arg1: $LivingEntity): void;
        /**
         * @deprecated
         */
        getSlotTypeIds(): $Set<string>;
        /**
         * @deprecated
         */
        getSlotsForType(arg0: $LivingEntity, arg1: string): number;
        /**
         * @deprecated
         */
        setSlotsForType(arg0: string, arg1: $LivingEntity, arg2: number): void;
        /**
         * @deprecated
         */
        getSlotType(arg0: string): ($ISlotType) | undefined;
        /**
         * @deprecated
         */
        createSlots(arg0: $LivingEntity): $SortedMap<$ISlotType, $ICurioStacksHandler>;
        /**
         * @deprecated
         */
        createSlots(): $SortedMap<$ISlotType, $ICurioStacksHandler>;
        /**
         * @deprecated
         */
        getSlotTypes(arg0: $LivingEntity): $Collection<$ISlotType>;
        /**
         * @deprecated
         */
        getSlotTypes(): $Collection<$ISlotType>;
        /**
         * @deprecated
         */
        clear(): void;
        get slotTypeIds(): $Set<string>;
    }
    /**
     * @deprecated
     */
    export class $ICuriosHelper {
    }
    export interface $ICuriosHelper {
        /**
         * @deprecated
         */
        findFirstCurio(arg0: $LivingEntity, arg1: $Item_): ($SlotResult) | undefined;
        /**
         * @deprecated
         */
        findFirstCurio(arg0: $LivingEntity, arg1: $Predicate_<$ItemStack>): ($SlotResult) | undefined;
        /**
         * @deprecated
         */
        getEquippedCurios(arg0: $LivingEntity): ($IItemHandlerModifiable) | undefined;
        /**
         * @deprecated
         */
        getCurio(arg0: $ItemStack_): ($ICurio) | undefined;
        /**
         * @deprecated
         */
        findEquippedCurio(arg0: $Predicate_<$ItemStack>, arg1: $LivingEntity): ($ImmutableTriple<string, number, $ItemStack>) | undefined;
        /**
         * @deprecated
         */
        findEquippedCurio(arg0: $Item_, arg1: $LivingEntity): ($ImmutableTriple<string, number, $ItemStack>) | undefined;
        /**
         * @deprecated
         */
        setEquippedCurio(arg0: $LivingEntity, arg1: string, arg2: number, arg3: $ItemStack_): void;
        /**
         * @deprecated
         */
        findCurios(arg0: $LivingEntity, ...arg1: string[]): $List<$SlotResult>;
        /**
         * @deprecated
         */
        findCurios(arg0: $LivingEntity, arg1: $Predicate_<$ItemStack>): $List<$SlotResult>;
        /**
         * @deprecated
         */
        findCurios(arg0: $LivingEntity, arg1: $Item_): $List<$SlotResult>;
        /**
         * @deprecated
         */
        findCurio(arg0: $LivingEntity, arg1: string, arg2: number): ($SlotResult) | undefined;
        /**
         * @deprecated
         */
        isStackValid(arg0: $SlotContext_, arg1: $ItemStack_): boolean;
        /**
         * @deprecated
         */
        getCurioTags(arg0: $Item_): $Set<string>;
        /**
         * @deprecated
         */
        onBrokenCurio(arg0: string, arg1: number, arg2: $LivingEntity): void;
        /**
         * @deprecated
         */
        onBrokenCurio(arg0: $SlotContext_): void;
        /**
         * @deprecated
         */
        setBrokenCurioConsumer(arg0: $Consumer_<$SlotContext>): void;
        /**
         * @deprecated
         */
        setBrokenCurioConsumer(arg0: $TriConsumer_<string, number, $LivingEntity>): void;
        /**
         * @deprecated
         */
        getCuriosHandler(arg0: $LivingEntity): ($ICuriosItemHandler) | undefined;
    }
    /**
     * @deprecated
     */
    export class $IIconHelper {
    }
    export interface $IIconHelper {
        /**
         * @deprecated
         */
        clearIcons(): void;
        /**
         * @deprecated
         */
        addIcon(arg0: string, arg1: $ResourceLocation_): void;
        /**
         * @deprecated
         */
        getIcon(arg0: string): $ResourceLocation;
    }
}
