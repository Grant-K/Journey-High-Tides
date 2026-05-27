import { $RenderLayerParent } from "@package/net/minecraft/client/renderer/entity";
import { $Item_, $ItemStack_, $ItemStack, $Item$TooltipContext } from "@package/net/minecraft/world/item";
import { $MultiBufferSource, $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Multimap } from "@package/com/google/common/collect";
import { $AttributeModifier_, $AttributeModifier, $Attribute, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $ISlotType } from "@package/top/theillusivec4/curios/api/type";
import { $List, $List_, $Map } from "@package/java/util";
import { $ItemBuilder, $ItemModificationKubeEvent$ItemModifications } from "@package/dev/latvian/mods/kubejs/item";
import { $EntityModel } from "@package/net/minecraft/client/model";
import { $BiConsumer_, $Consumer_, $Predicate_, $BiPredicate_, $BiFunction_ } from "@package/java/util/function";
import { $SlotResult, $SlotContext_, $SlotContext } from "@package/top/theillusivec4/curios/api";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $ICurio$SoundInfo, $ICuriosItemHandler, $ICurioItem, $ICurio } from "@package/top/theillusivec4/curios/api/type/capability";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $EnderMan } from "@package/net/minecraft/world/entity/monster";
import { $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $ICurioStacksHandler } from "@package/top/theillusivec4/curios/api/type/inventory";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/zhaiji/kubejscurios/curios" {
    export class $CurioRenderer$RenderContext {
        matrixStack: $PoseStack;
        stack: $ItemStack;
        renderLayerParent: $RenderLayerParent<$LivingEntity, $EntityModel<$LivingEntity>>;
        ageInTicks: number;
        netHeadYaw: number;
        light: number;
        limbSwingAmount: number;
        renderTypeBuffer: $MultiBufferSource;
        limbSwing: number;
        slotContext: $SlotContext;
        headPitch: number;
        partialTicks: number;
        constructor(arg0: $ItemStack_, arg1: $SlotContext_, arg2: $PoseStack, arg3: $RenderLayerParent<$LivingEntity, $EntityModel<$LivingEntity>>, arg4: $MultiBufferSource_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number);
    }
    export class $KubeJSCuriosHelper {
    }
    export interface $KubeJSCuriosHelper {
        getCuriosInventory(): $ICuriosItemHandler;
        findFirstCurio(arg0: $Item_): ($SlotResult) | undefined;
        findFirstCurio(arg0: $Predicate_<$ItemStack>): ($SlotResult) | undefined;
        getEquippedCurios(): $IItemHandlerModifiable;
        getCuriosStacksHandler(arg0: string): ($ICurioStacksHandler) | undefined;
        isCuriosEquipped(arg0: $Predicate_<$ItemStack>): boolean;
        isCuriosEquipped(arg0: $Item_): boolean;
        addCuriosSlotModifier(arg0: string, arg1: $ResourceLocation_, arg2: number, arg3: $AttributeModifier$Operation_): void;
        removeCuriosSlotModifier(arg0: string, arg1: $ResourceLocation_): void;
        clearCuriosSlotModifiers(): void;
        getCuriosSlotModifiers(): $Multimap<string, $AttributeModifier>;
        getEntityCuriosRegistrySlots(): $Map<string, $ISlotType>;
        setEquippedCurio(arg0: string, arg1: number, arg2: $ItemStack_): void;
        findCurios(arg0: $Predicate_<$ItemStack>): $List<$SlotResult>;
        findCurios(...arg0: string[]): $List<$SlotResult>;
        findCurios(arg0: $Item_): $List<$SlotResult>;
        findCurio(arg0: string, arg1: number): ($SlotResult) | undefined;
        getCuriosRegistrySlot(arg0: string): ($ISlotType) | undefined;
        getCuriosRegistrySlots(): $Map<string, $ISlotType>;
        getCurioCapability(arg0: $ItemStack_): ($ICurio) | undefined;
        getAllCurios(): $Map<string, $ICurioStacksHandler>;
        getStackInCuriosSlots(arg0: $ItemStack_): $Map<string, $ISlotType>;
        get curiosInventory(): $ICuriosItemHandler;
        get equippedCurios(): $IItemHandlerModifiable;
        get curiosSlotModifiers(): $Multimap<string, $AttributeModifier>;
        get entityCuriosRegistrySlots(): $Map<string, $ISlotType>;
        get curiosRegistrySlots(): $Map<string, $ISlotType>;
        get allCurios(): $Map<string, $ICurioStacksHandler>;
    }
    export class $CapabilityCurios$EnderMaskPredicate {
    }
    export interface $CapabilityCurios$EnderMaskPredicate {
        test(arg0: $SlotContext_, arg1: $EnderMan, arg2: $ItemStack_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CapabilityCurios$EnderMaskPredicate}.
     */
    export type $CapabilityCurios$EnderMaskPredicate_ = ((arg0: $SlotContext, arg1: $EnderMan, arg2: $ItemStack) => boolean);
    export class $CapabilityCurios$CuriosCapabilityBuilder {
        create(): $CapabilityCurios;
        static load(): void;
        static itemBuilders: $Map<$ItemBuilder, $ICurioItem>;
        static INSTANCE: $CapabilityCurios$CuriosCapabilityBuilder;
        static itemModifications: $Map<$ItemModificationKubeEvent$ItemModifications, $ICurioItem>;
        constructor();
    }
    export class $CapabilityCurios$DropRulePredicate {
    }
    export interface $CapabilityCurios$DropRulePredicate {
        test(arg0: $SlotContext_, arg1: $DamageSource_, arg2: boolean, arg3: $ItemStack_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CapabilityCurios$DropRulePredicate}.
     */
    export type $CapabilityCurios$DropRulePredicate_ = ((arg0: $SlotContext, arg1: $DamageSource, arg2: boolean, arg3: $ItemStack) => boolean);
    export class $CapabilityCurios$SlotsTooltipFunction {
    }
    export interface $CapabilityCurios$SlotsTooltipFunction {
        apply(arg0: $List_<$Component_>, arg1: $Item$TooltipContext, arg2: $ItemStack_): $List<$Component>;
    }
    /**
     * Values that may be interpreted as {@link $CapabilityCurios$SlotsTooltipFunction}.
     */
    export type $CapabilityCurios$SlotsTooltipFunction_ = ((arg0: $List<$Component>, arg1: $Item$TooltipContext, arg2: $ItemStack) => $List_<$Component_>);
    export class $CapabilityCurios$FortuneFunction {
    }
    export interface $CapabilityCurios$FortuneFunction {
        apply(arg0: $SlotContext_, arg1: $LootContext, arg2: $ItemStack_): number;
    }
    /**
     * Values that may be interpreted as {@link $CapabilityCurios$FortuneFunction}.
     */
    export type $CapabilityCurios$FortuneFunction_ = ((arg0: $SlotContext, arg1: $LootContext, arg2: $ItemStack) => number);
    export class $CapabilityCurios {
        canWalkOnPowderedSnow(arg0: $BiPredicate_<$SlotContext, $ItemStack>): $CapabilityCurios;
        makesPiglinsNeutral(arg0: $BiPredicate_<$SlotContext, $ItemStack>): $CapabilityCurios;
        canEquip(arg0: $BiPredicate_<$SlotContext, $ItemStack>): $CapabilityCurios;
        isEnderMask(arg0: $CapabilityCurios$EnderMaskPredicate_): $CapabilityCurios;
        canEquipFromUse(arg0: $BiPredicate_<$SlotContext, $ItemStack>): $CapabilityCurios;
        onEquip(arg0: $CapabilityCurios$EquipConsumer_): $CapabilityCurios;
        onUnequip(arg0: $CapabilityCurios$EquipConsumer_): $CapabilityCurios;
        canUnequip(arg0: $BiPredicate_<$SlotContext, $ItemStack>): $CapabilityCurios;
        onEquipFromUse(arg0: $BiConsumer_<$SlotContext, $ItemStack>): $CapabilityCurios;
        curioTick(arg0: $BiConsumer_<$SlotContext, $ItemStack>): $CapabilityCurios;
        addAttribute(arg0: $ResourceKey_<$Attribute>, arg1: $ResourceLocation_, arg2: number, arg3: $AttributeModifier$Operation_): $CapabilityCurios;
        modifyAttribute(arg0: $Consumer_<$CapabilityCurios$AttributeModificationContext>): $CapabilityCurios;
        modifyEquipSound(arg0: $BiFunction_<$SlotContext, $ItemStack, $ICurio$SoundInfo>): $CapabilityCurios;
        canDrop(arg0: $CapabilityCurios$DropRulePredicate_): $CapabilityCurios;
        modifyFortuneLevel(arg0: $CapabilityCurios$FortuneFunction_): $CapabilityCurios;
        modifyLootingLevel(arg0: $CapabilityCurios$LootingFunction_): $CapabilityCurios;
        modifySlotsTooltip(arg0: $CapabilityCurios$SlotsTooltipFunction_): $CapabilityCurios;
        modifyAttributesTooltip(arg0: $CapabilityCurios$AttributesTooltipFunction_): $CapabilityCurios;
        constructor();
    }
    export class $CapabilityCurios$AttributeModificationContext {
        getIdentifier(): $ResourceLocation;
        getSlotContext(): $SlotContext;
        getStack(): $ItemStack;
        modify(arg0: $Holder_<$Attribute>, arg1: $ResourceLocation_, arg2: number, arg3: $AttributeModifier$Operation_): $CapabilityCurios$AttributeModificationContext;
        remove(arg0: $Holder_<$Attribute>, arg1: $ResourceLocation_): $CapabilityCurios$AttributeModificationContext;
        getModifiers(): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        constructor(arg0: $SlotContext_, arg1: $ResourceLocation_, arg2: $ItemStack_, arg3: $Multimap<$Holder_<$Attribute>, $AttributeModifier_>);
        get identifier(): $ResourceLocation;
        get slotContext(): $SlotContext;
        get stack(): $ItemStack;
        get modifiers(): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
    }
    export class $CapabilityCurios$LootingFunction {
    }
    export interface $CapabilityCurios$LootingFunction {
        apply(arg0: $SlotContext_, arg1: $LootContext, arg2: $ItemStack_): number;
    }
    /**
     * Values that may be interpreted as {@link $CapabilityCurios$LootingFunction}.
     */
    export type $CapabilityCurios$LootingFunction_ = ((arg0: $SlotContext, arg1: $LootContext, arg2: $ItemStack) => number);
    export class $CapabilityCurios$AttributesTooltipFunction {
    }
    export interface $CapabilityCurios$AttributesTooltipFunction {
        apply(arg0: $List_<$Component_>, arg1: $Item$TooltipContext, arg2: $ItemStack_): $List<$Component>;
    }
    /**
     * Values that may be interpreted as {@link $CapabilityCurios$AttributesTooltipFunction}.
     */
    export type $CapabilityCurios$AttributesTooltipFunction_ = ((arg0: $List<$Component>, arg1: $Item$TooltipContext, arg2: $ItemStack) => $List_<$Component_>);
    export class $CapabilityCurios$EquipConsumer {
    }
    export interface $CapabilityCurios$EquipConsumer {
        accept(arg0: $SlotContext_, arg1: $ItemStack_, arg2: $ItemStack_): void;
    }
    /**
     * Values that may be interpreted as {@link $CapabilityCurios$EquipConsumer}.
     */
    export type $CapabilityCurios$EquipConsumer_ = ((arg0: $SlotContext, arg1: $ItemStack, arg2: $ItemStack) => void);
}
