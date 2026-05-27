import { $EntityModel, $HumanoidModel } from "@package/net/minecraft/client/model";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $TriState_, $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $RenderType, $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $Event } from "@package/net/neoforged/bus/api";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/com/github/alexthe666/citadel/client/event" {
    export class $EventGetOutlineColor extends $Event {
        getColor(): number;
        getEntityIn(): $Entity;
        setEntityIn(arg0: $Entity): void;
        setColor(arg0: number): void;
        getResult(): $TriState;
        setResult(arg0: $TriState_): void;
        constructor(arg0: $Entity, arg1: number);
    }
    export class $EventLivingRenderer$PostSetupAnimations extends $EventLivingRenderer$AccessToBufferSource {
        constructor(arg0: $LivingEntity, arg1: $EntityModel<any>, arg2: $PoseStack, arg3: number, arg4: number, arg5: $MultiBufferSource_, arg6: number);
    }
    export class $EventLivingRenderer$PostRenderModel extends $EventLivingRenderer$AccessToBufferSource {
        constructor(arg0: $LivingEntity, arg1: $EntityModel<any>, arg2: $PoseStack, arg3: number, arg4: number, arg5: $MultiBufferSource_, arg6: number);
    }
    export class $EventLivingRenderer extends $Event {
        getPartialTicks(): number;
        getPoseStack(): $PoseStack;
        getEntity(): $LivingEntity;
        getModel(): $EntityModel<any>;
        constructor(arg0: $LivingEntity, arg1: $EntityModel<any>, arg2: $PoseStack, arg3: number);
        get partialTicks(): number;
        get poseStack(): $PoseStack;
        get entity(): $LivingEntity;
        get model(): $EntityModel<any>;
    }
    export class $EventRenderSplashText$Pre extends $EventRenderSplashText {
        getResult(): $TriState;
        setResult(arg0: $TriState_): void;
        getSplashTextColor(): number;
        setSplashTextColor(arg0: number): void;
        constructor(arg0: string, arg1: $GuiGraphics, arg2: number, arg3: number);
    }
    export class $EventRenderSplashText$Post extends $EventRenderSplashText {
        constructor(arg0: string, arg1: $GuiGraphics, arg2: number);
    }
    export class $EventGetFluidRenderType extends $Event {
        getFluidState(): $FluidState;
        getRenderType(): $RenderType;
        setRenderType(arg0: $RenderType): void;
        getResult(): $TriState;
        setResult(arg0: $TriState_): void;
        constructor(arg0: $FluidState, arg1: $RenderType);
        get fluidState(): $FluidState;
    }
    export class $EventGetStarBrightness extends $Event {
        getBrightness(): number;
        getPartialTicks(): number;
        getLevel(): $ClientLevel;
        getResult(): $TriState;
        setResult(arg0: $TriState_): void;
        setBrightness(arg0: number): void;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number);
        get partialTicks(): number;
        get level(): $ClientLevel;
    }
    export class $EventLivingRenderer$AccessToBufferSource extends $EventLivingRenderer {
        getPackedLight(): number;
        getBodyYRot(): number;
        getBufferSource(): $MultiBufferSource;
        constructor(arg0: $LivingEntity, arg1: $EntityModel<any>, arg2: $PoseStack, arg3: number, arg4: number, arg5: $MultiBufferSource_, arg6: number);
        get packedLight(): number;
        get bodyYRot(): number;
        get bufferSource(): $MultiBufferSource;
    }
    export class $EventPosePlayerHand extends $Event {
        getEntityIn(): $Entity;
        getResult(): $TriState;
        setResult(arg0: $TriState_): void;
        isLeftHand(): boolean;
        getModel(): $HumanoidModel<any>;
        constructor(arg0: $LivingEntity, arg1: $HumanoidModel<any>, arg2: boolean);
        get entityIn(): $Entity;
        get leftHand(): boolean;
        get model(): $HumanoidModel<any>;
    }
    export class $EventRenderSplashText extends $Event {
        getPartialTicks(): number;
        getGuiGraphics(): $GuiGraphics;
        getSplashText(): string;
        setSplashText(arg0: string): void;
        constructor(arg0: string, arg1: $GuiGraphics, arg2: number);
        get partialTicks(): number;
        get guiGraphics(): $GuiGraphics;
    }
    export class $EventLivingRenderer$PreSetupAnimations extends $EventLivingRenderer$AccessToBufferSource {
        constructor(arg0: $LivingEntity, arg1: $EntityModel<any>, arg2: $PoseStack, arg3: number, arg4: number, arg5: $MultiBufferSource_, arg6: number);
    }
    export class $EventLivingRenderer$SetupRotations extends $EventLivingRenderer {
        getBodyYRot(): number;
        constructor(arg0: $LivingEntity, arg1: $EntityModel<any>, arg2: $PoseStack, arg3: number, arg4: number);
        get bodyYRot(): number;
    }
}
