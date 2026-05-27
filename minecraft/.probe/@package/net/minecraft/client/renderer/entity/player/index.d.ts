import { $EntityRenderDispatcher, $LivingEntityRenderer, $EntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/entity";
import { $RenderType, $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $CallbackInfoReturnable, $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $List } from "@package/java/util";
import { $EntityRendererAccessor } from "@package/org/figuramc/figura/ducks";
import { $PlayerModel } from "@package/net/minecraft/client/model";
import { $PlayerSkin_ } from "@package/net/minecraft/client/resources";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ClientBase$PlayerNameTagRenderer, $LivingRendererAccess } from "@package/com/tom/cpm/client";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/client/renderer/entity/player" {
    export class $PlayerRenderer extends $LivingEntityRenderer<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>> implements $ClientBase$PlayerNameTagRenderer<any>, $LivingRendererAccess, $EntityRendererAccessor {
        getTextureLocation(arg0: $AbstractClientPlayer): $ResourceLocation;
        getRenderOffset(arg0: $AbstractClientPlayer, arg1: number): $Vec3;
        handler$zch000$doapi$onConstruct(ctx: $EntityRendererProvider$Context, bl: boolean, cbi: $CallbackInfo): void;
        handler$dgi001$notenoughanimations$onCreate(info: $CallbackInfo): void;
        handler$emj000$cpm$onGetEntityTexture(arg0: $AbstractClientPlayer, arg1: $CallbackInfoReturnable<any>): void;
        handler$emj000$cpm$onRenderName1(arg0: $AbstractClientPlayer, arg1: $Component_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        handler$lod000$blueprint$moveName(arg0: $AbstractClientPlayer, arg1: $Component_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        handler$emj000$cpm$onRenderName2(arg0: $AbstractClientPlayer, arg1: $Component_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        handler$lmh002$waveycapes$onCreate(info: $CallbackInfo): void;
        renderRightHand(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $AbstractClientPlayer): void;
        handler$emj000$cpm$onRenderRightArmPre(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $AbstractClientPlayer, arg4: $CallbackInfo): void;
        handler$emj000$cpm$onRenderRightArmPost(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $AbstractClientPlayer, arg4: $CallbackInfo): void;
        renderLeftHand(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $AbstractClientPlayer): void;
        handler$emj000$cpm$onRenderLeftArmPre(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $AbstractClientPlayer, arg4: $CallbackInfo): void;
        handler$emj000$cpm$onRenderLeftArmPost(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $AbstractClientPlayer, arg4: $CallbackInfo): void;
        redirect$emj000$cpm$getSkinTex(arg0: $PlayerSkin_, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: $AbstractClientPlayer, arg5: $ModelPart, arg6: $ModelPart): $ResourceLocation;
        redirect$emj000$cpm$getArmLayer(arg0: $ResourceLocation_, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: $AbstractClientPlayer, arg5: $ModelPart, arg6: $ModelPart): $RenderType;
        setupRotations(arg0: $AbstractClientPlayer, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number): void;
        cpm$renderNameTag(arg0: $AbstractClientPlayer, arg1: $Component_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        cpm$entityRenderDispatcher(): $EntityRenderDispatcher;
        render(arg0: $AbstractClientPlayer, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>>>;
        constructor(arg0: $EntityRendererProvider$Context, arg1: boolean);
    }
}
