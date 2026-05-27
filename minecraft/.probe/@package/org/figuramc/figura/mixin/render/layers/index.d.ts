import { $HumanoidModel } from "@package/net/minecraft/client/model";
import { $Holder_ } from "@package/net/minecraft/core";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $ArmorMaterial } from "@package/net/minecraft/world/item";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LivingEntity, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ArmorTrim } from "@package/net/minecraft/world/item/armortrim";
export * as elytra from "@package/org/figuramc/figura/mixin/render/layers/elytra";

declare module "@package/org/figuramc/figura/mixin/render/layers" {
    export class $HumanoidArmorLayerAccessor<T extends $LivingEntity, M extends $HumanoidModel<T>, A extends $HumanoidModel<T>> {
    }
    export interface $HumanoidArmorLayerAccessor<T extends $LivingEntity, M extends $HumanoidModel<T>, A extends $HumanoidModel<T>> {
        renderModel(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: A, arg4: number, arg5: $ResourceLocation_): void;
        usesInnerModel(arg0: $EquipmentSlot_): boolean;
        renderTrim(arg0: $Holder_<$ArmorMaterial>, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: $ArmorTrim, arg5: A, arg6: boolean): void;
        renderGlint(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: A): void;
    }
}
