import { $PistonMovingBlockEntity } from "@package/net/minecraft/world/level/block/piston";
import { $MultiBufferSource, $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Material } from "@package/net/minecraft/client/resources/model";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $Camera } from "@package/net/minecraft/client";
import { $Map } from "@package/java/util";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Model, $SkullModelBase } from "@package/net/minecraft/client/model";
import { $AccessorBlockEntityRenderers } from "@package/net/darkhax/bookshelf/common/mixin/access/block";
import { $Supplier_ } from "@package/java/util/function";
import { $VaultBlockEntity } from "@package/net/minecraft/world/level/block/entity/vault";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $IBlockEntityRendererExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $BlockEntityRenderersAccessor } from "@package/com/telepathicgrunt/the_bumblezone/mixin/blocks";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Int2IntFunction } from "@package/it/unimi/dsi/fastutil/ints";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $EntityRenderDispatcher, $ItemRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $DyeColor_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $ResolvableProfile_ } from "@package/net/minecraft/world/item/component";
import { $ModelLayerLocation, $EntityModelSet, $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $BlockEntityRenderDispatcherExtension } from "@package/dev/ryanhcode/sable/mixinterface";
import { $WoodType_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $LayerDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $SkullBlock$Type, $SkullBlock$Type_, $DoubleBlockCombiner$Combiner } from "@package/net/minecraft/world/level/block";
import { $Font } from "@package/net/minecraft/client/gui";
import { $HitResult, $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $SignBlockEntity, $ConduitBlockEntity, $BannerPatternLayers_, $SkullBlockEntity, $BannerBlockEntity, $LecternBlockEntity, $DecoratedPotBlockEntity, $EnchantingTableBlockEntity, $BellBlockEntity, $BrushableBlockEntity, $BlockEntityType, $SignText, $BedBlockEntity, $SpawnerBlockEntity, $CampfireBlockEntity, $TheEndGatewayBlockEntity, $TrialSpawnerBlockEntity, $BlockEntityType_, $BlockEntity, $StructureBlockEntity, $ShulkerBoxBlockEntity, $BeaconBlockEntity, $TheEndPortalBlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/client/renderer/blockentity" {
    export class $CampfireRenderer implements $BlockEntityRenderer<$CampfireBlockEntity> {
        render(arg0: $CampfireBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $CampfireBlockEntity, arg1: $Vec3_): boolean;
        shouldRenderOffScreen(arg0: $CampfireBlockEntity): boolean;
        getViewDistance(): number;
        getRenderBoundingBox(arg0: $CampfireBlockEntity): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BlockEntityRenderers implements $BlockEntityRenderersAccessor, $AccessorBlockEntityRenderers {
        static bumblezone$callRegister$the_bumblezone_$md$68cb88$0(arg0: $BlockEntityType_<any>, arg1: $BlockEntityRendererProvider_<any>): void;
        static register$bookshelf_$md$68cb88$1(arg0: $BlockEntityType_<any>, arg1: $BlockEntityRendererProvider_<any>): void;
        static createEntityRenderers(arg0: $BlockEntityRendererProvider$Context): $Map<$BlockEntityType<never>, $BlockEntityRenderer<never>>;
        static register<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockEntityRendererProvider_<T>): void;
        constructor();
    }
    export class $TrialSpawnerRenderer implements $BlockEntityRenderer<$TrialSpawnerBlockEntity> {
        getRenderBoundingBox(arg0: $TrialSpawnerBlockEntity): $AABB;
        render(arg0: $TrialSpawnerBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $TrialSpawnerBlockEntity, arg1: $Vec3_): boolean;
        shouldRenderOffScreen(arg0: $TrialSpawnerBlockEntity): boolean;
        getViewDistance(): number;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $HangingSignRenderer extends $SignRenderer {
        static createHangingSignLayer(): $LayerDefinition;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $BedRenderer implements $BlockEntityRenderer<$BedBlockEntity> {
        static createFootLayer(): $LayerDefinition;
        static createHeadLayer(): $LayerDefinition;
        render(arg0: $BedBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $BedBlockEntity, arg1: $Vec3_): boolean;
        shouldRenderOffScreen(arg0: $BedBlockEntity): boolean;
        getViewDistance(): number;
        getRenderBoundingBox(arg0: $BedBlockEntity): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $SpawnerRenderer implements $BlockEntityRenderer<$SpawnerBlockEntity> {
        getRenderBoundingBox(arg0: $SpawnerBlockEntity): $AABB;
        static renderEntityInSpawner(arg0: number, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: $Entity, arg5: $EntityRenderDispatcher, arg6: number, arg7: number): void;
        render(arg0: $SpawnerBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $SpawnerBlockEntity, arg1: $Vec3_): boolean;
        shouldRenderOffScreen(arg0: $SpawnerBlockEntity): boolean;
        getViewDistance(): number;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $VaultRenderer implements $BlockEntityRenderer<$VaultBlockEntity> {
        static renderItemInside(arg0: number, arg1: $Level_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: $ItemStack_, arg6: $ItemRenderer, arg7: number, arg8: number, arg9: $RandomSource): void;
        render(arg0: $VaultBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $VaultBlockEntity, arg1: $Vec3_): boolean;
        shouldRenderOffScreen(arg0: $VaultBlockEntity): boolean;
        getViewDistance(): number;
        getRenderBoundingBox(arg0: $VaultBlockEntity): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BrightnessCombiner<S extends $BlockEntity> implements $DoubleBlockCombiner$Combiner<S, $Int2IntFunction> {
        acceptDouble(arg0: S, arg1: S): $Int2IntFunction;
        acceptSingle(arg0: S): $Int2IntFunction;
        acceptNone(): $Int2IntFunction;
        constructor();
    }
    export class $SkullBlockRenderer implements $BlockEntityRenderer<$SkullBlockEntity> {
        static getRenderType(arg0: $SkullBlock$Type_, arg1: $ResolvableProfile_): $RenderType;
        shouldRenderOffScreen(blockEntity: $SkullBlockEntity): boolean;
        getRenderBoundingBox(arg0: $SkullBlockEntity): $AABB;
        handler$hoj000$figura$render(skullBlockEntity: $SkullBlockEntity, f: number, poseStack: $PoseStack, multiBufferSource: $MultiBufferSource_, i: number, j: number, ci: $CallbackInfo): void;
        handler$emn000$cpm$onRender(arg0: $SkullBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: $CallbackInfo, arg7: number, arg8: $BlockState_, arg9: boolean, arg10: $Direction_, arg11: number, arg12: number, arg13: $SkullBlock$Type_, arg14: $SkullModelBase): void;
        static createSkullRenderers(arg0: $EntityModelSet): $Map<$SkullBlock$Type, $SkullModelBase>;
        static renderSkull(arg0: $Direction_, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: $SkullModelBase, arg7: $RenderType): void;
        render(arg0: $SkullBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $SkullBlockEntity, arg1: $Vec3_): boolean;
        getViewDistance(): number;
        static SKIN_BY_TYPE: $Map<$SkullBlock$Type, $ResourceLocation>;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BellRenderer implements $BlockEntityRenderer<$BellBlockEntity> {
        static createBodyLayer(): $LayerDefinition;
        render(arg0: $BellBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $BellBlockEntity, arg1: $Vec3_): boolean;
        shouldRenderOffScreen(arg0: $BellBlockEntity): boolean;
        getViewDistance(): number;
        getRenderBoundingBox(arg0: $BellBlockEntity): $AABB;
        static BELL_RESOURCE_LOCATION: $Material;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $PistonHeadRenderer implements $BlockEntityRenderer<$PistonMovingBlockEntity> {
        getRenderBoundingBox(arg0: $PistonMovingBlockEntity): $AABB;
        getViewDistance(): number;
        render(arg0: $PistonMovingBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $PistonMovingBlockEntity, arg1: $Vec3_): boolean;
        shouldRenderOffScreen(arg0: $PistonMovingBlockEntity): boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $DecoratedPotRenderer implements $BlockEntityRenderer<$DecoratedPotBlockEntity> {
        getRenderBoundingBox(arg0: $DecoratedPotBlockEntity): $AABB;
        static createBaseLayer(): $LayerDefinition;
        static createSidesLayer(): $LayerDefinition;
        render(arg0: $DecoratedPotBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $DecoratedPotBlockEntity, arg1: $Vec3_): boolean;
        shouldRenderOffScreen(arg0: $DecoratedPotBlockEntity): boolean;
        getViewDistance(): number;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BlockEntityRendererProvider$Context {
        getFont(): $Font;
        getItemRenderer(): $ItemRenderer;
        getBlockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        getBlockRenderDispatcher(): $BlockRenderDispatcher;
        getEntityRenderer(): $EntityRenderDispatcher;
        getModelSet(): $EntityModelSet;
        bakeLayer(arg0: $ModelLayerLocation): $ModelPart;
        constructor(arg0: $BlockEntityRenderDispatcher, arg1: $BlockRenderDispatcher, arg2: $ItemRenderer, arg3: $EntityRenderDispatcher, arg4: $EntityModelSet, arg5: $Font);
        get font(): $Font;
        get itemRenderer(): $ItemRenderer;
        get blockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        get blockRenderDispatcher(): $BlockRenderDispatcher;
        get entityRenderer(): $EntityRenderDispatcher;
        get modelSet(): $EntityModelSet;
    }
    export class $BlockEntityRenderDispatcher implements $ResourceManagerReloadListener, $BlockEntityRenderDispatcherExtension {
        renderItem<E extends $BlockEntity>(arg0: E, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: number): boolean;
        onResourceManagerReload(arg0: $ResourceManager): void;
        getRenderer<E extends $BlockEntity>(arg0: E): $BlockEntityRenderer<E>;
        sable$setCameraPosition(arg0: $Vec3_): void;
        setLevel(arg0: $Level_): void;
        handler$eil000$chloride$render(arg0: $BlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: $CallbackInfo): void;
        handler$hlf001$entityculling$render(blockEntity: $BlockEntity, f: number, poseStack: $PoseStack, multiBufferSource: $MultiBufferSource_, info: $CallbackInfo): void;
        modify$ldi000$sable$moveCameraPosForCheck(arg0: $Vec3_): $Vec3;
        prepare(arg0: $Level_, arg1: $Camera, arg2: $HitResult): void;
        render<E extends $BlockEntity>(arg0: E, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getName(): string;
        cameraHitResult: $HitResult;
        level: $Level;
        camera: $Camera;
        constructor(arg0: $Font, arg1: $EntityModelSet, arg2: $Supplier_<$BlockRenderDispatcher>, arg3: $Supplier_<$ItemRenderer>, arg4: $Supplier_<$EntityRenderDispatcher>);
        get name(): string;
    }
    export class $SignRenderer implements $BlockEntityRenderer<$SignBlockEntity> {
        getRenderBoundingBox(arg0: $SignBlockEntity): $AABB;
        static createSignLayer(): $LayerDefinition;
        getSignModelRenderScale(): number;
        getSignTextRenderScale(): number;
        renderSignText(arg0: $BlockPos_, arg1: $SignText, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: number, arg7: boolean): void;
        getTextOffset(): $Vec3;
        translateSignText(arg0: $PoseStack, arg1: boolean, arg2: $Vec3_): void;
        static isOutlineVisible(arg0: $BlockPos_, arg1: number): boolean;
        static createSignModel(arg0: $EntityModelSet, arg1: $WoodType_): $SignRenderer$SignModel;
        static getDarkColor(arg0: $SignText): number;
        render(arg0: $SignBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $SignBlockEntity, arg1: $Vec3_): boolean;
        shouldRenderOffScreen(arg0: $SignBlockEntity): boolean;
        getViewDistance(): number;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get signModelRenderScale(): number;
        get signTextRenderScale(): number;
        get textOffset(): $Vec3;
        get viewDistance(): number;
    }
    export class $TheEndGatewayRenderer extends $TheEndPortalRenderer<$TheEndGatewayBlockEntity> {
        getRenderBoundingBox(arg0: $TheEndGatewayBlockEntity): $AABB;
        render(arg0: $TheEndGatewayBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        static END_SKY_LOCATION: $ResourceLocation;
        static END_PORTAL_LOCATION: $ResourceLocation;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $ShulkerBoxRenderer implements $BlockEntityRenderer<$ShulkerBoxBlockEntity> {
        getRenderBoundingBox(arg0: $ShulkerBoxBlockEntity): $AABB;
        render(arg0: $ShulkerBoxBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $ShulkerBoxBlockEntity, arg1: $Vec3_): boolean;
        shouldRenderOffScreen(arg0: $ShulkerBoxBlockEntity): boolean;
        getViewDistance(): number;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $TheEndPortalRenderer<T extends $TheEndPortalBlockEntity> implements $BlockEntityRenderer<T> {
        handler$zkp000$iris$onRender(arg0: $TheEndPortalBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        render(arg0: T, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: T, arg1: $Vec3_): boolean;
        shouldRenderOffScreen(arg0: T): boolean;
        getViewDistance(): number;
        getRenderBoundingBox(arg0: T): $AABB;
        static END_SKY_LOCATION: $ResourceLocation;
        static END_PORTAL_LOCATION: $ResourceLocation;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $ChestRenderer<T extends $BlockEntity> implements $BlockEntityRenderer<T> {
        getRenderBoundingBox(arg0: T): $AABB;
        static createSingleBodyLayer(): $LayerDefinition;
        static createDoubleBodyLeftLayer(): $LayerDefinition;
        static createDoubleBodyRightLayer(): $LayerDefinition;
        render(arg0: T, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: T, arg1: $Vec3_): boolean;
        shouldRenderOffScreen(arg0: T): boolean;
        getViewDistance(): number;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $StructureBlockRenderer implements $BlockEntityRenderer<$StructureBlockEntity> {
        shouldRenderOffScreen(arg0: $StructureBlockEntity): boolean;
        getRenderBoundingBox(arg0: $StructureBlockEntity): $AABB;
        constant$cmf000$integrated_api$getRenderDistance(value: number): number;
        getViewDistance(): number;
        render(arg0: $StructureBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $StructureBlockEntity, arg1: $Vec3_): boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BeaconRenderer implements $BlockEntityRenderer<$BeaconBlockEntity> {
        shouldRender(arg0: $BeaconBlockEntity, arg1: $Vec3_): boolean;
        shouldRenderOffScreen(arg0: $BeaconBlockEntity): boolean;
        getRenderBoundingBox(arg0: $BeaconBlockEntity): $AABB;
        handler$mkc000$quark$render(arg0: $BeaconBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        getViewDistance(): number;
        static renderBeaconBeam(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $ResourceLocation_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        render(arg0: $BeaconBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        static MAX_RENDER_Y: number;
        static BEAM_LOCATION: $ResourceLocation;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BannerRenderer implements $BlockEntityRenderer<$BannerBlockEntity> {
        getRenderBoundingBox(arg0: $BannerBlockEntity): $AABB;
        static createBodyLayer(): $LayerDefinition;
        static renderPatterns(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: $ModelPart, arg5: $Material, arg6: boolean, arg7: $DyeColor_, arg8: $BannerPatternLayers_): void;
        static renderPatterns(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: $ModelPart, arg5: $Material, arg6: boolean, arg7: $DyeColor_, arg8: $BannerPatternLayers_, arg9: boolean): void;
        render(arg0: $BannerBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $BannerBlockEntity, arg1: $Vec3_): boolean;
        shouldRenderOffScreen(arg0: $BannerBlockEntity): boolean;
        getViewDistance(): number;
        static FLAG: string;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $SignRenderer$SignModel extends $Model {
        root: $ModelPart;
        stick: $ModelPart;
        constructor(arg0: $ModelPart);
    }
    export class $HangingSignRenderer$HangingSignModel extends $Model {
        evaluateVisibleParts(arg0: $BlockState_): void;
        vChains: $ModelPart;
        root: $ModelPart;
        normalChains: $ModelPart;
        plank: $ModelPart;
        constructor(arg0: $ModelPart);
    }
    export class $EnchantTableRenderer implements $BlockEntityRenderer<$EnchantingTableBlockEntity> {
        getRenderBoundingBox(arg0: $EnchantingTableBlockEntity): $AABB;
        render(arg0: $EnchantingTableBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $EnchantingTableBlockEntity, arg1: $Vec3_): boolean;
        shouldRenderOffScreen(arg0: $EnchantingTableBlockEntity): boolean;
        getViewDistance(): number;
        static BOOK_LOCATION: $Material;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BrushableBlockRenderer implements $BlockEntityRenderer<$BrushableBlockEntity> {
        getRenderBoundingBox(arg0: $BrushableBlockEntity): $AABB;
        render(arg0: $BrushableBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $BrushableBlockEntity, arg1: $Vec3_): boolean;
        shouldRenderOffScreen(arg0: $BrushableBlockEntity): boolean;
        getViewDistance(): number;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $LecternRenderer implements $BlockEntityRenderer<$LecternBlockEntity> {
        getRenderBoundingBox(arg0: $LecternBlockEntity): $AABB;
        render(arg0: $LecternBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $LecternBlockEntity, arg1: $Vec3_): boolean;
        shouldRenderOffScreen(arg0: $LecternBlockEntity): boolean;
        getViewDistance(): number;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BlockEntityRendererProvider<T extends $BlockEntity> {
    }
    export interface $BlockEntityRendererProvider<T extends $BlockEntity> {
        create(arg0: $BlockEntityRendererProvider$Context): $BlockEntityRenderer<T>;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityRendererProvider}.
     */
    export type $BlockEntityRendererProvider_<T> = ((arg0: $BlockEntityRendererProvider$Context) => $BlockEntityRenderer<T>);
    export class $ConduitRenderer implements $BlockEntityRenderer<$ConduitBlockEntity> {
        getRenderBoundingBox(arg0: $ConduitBlockEntity): $AABB;
        static createEyeLayer(): $LayerDefinition;
        static createWindLayer(): $LayerDefinition;
        static createShellLayer(): $LayerDefinition;
        static createCageLayer(): $LayerDefinition;
        render(arg0: $ConduitBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $ConduitBlockEntity, arg1: $Vec3_): boolean;
        shouldRenderOffScreen(arg0: $ConduitBlockEntity): boolean;
        getViewDistance(): number;
        static SHELL_TEXTURE: $Material;
        static CLOSED_EYE_TEXTURE: $Material;
        static OPEN_EYE_TEXTURE: $Material;
        static VERTICAL_WIND_TEXTURE: $Material;
        static WIND_TEXTURE: $Material;
        static ACTIVE_SHELL_TEXTURE: $Material;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $BlockEntityRenderer<T extends $BlockEntity> {
    }
    export interface $BlockEntityRenderer<T extends $BlockEntity> extends $IBlockEntityRendererExtension<T> {
        shouldRender(arg0: T, arg1: $Vec3_): boolean;
        shouldRenderOffScreen(arg0: T): boolean;
        getViewDistance(): number;
        render(arg0: T, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        get viewDistance(): number;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityRenderer}.
     */
    export type $BlockEntityRenderer_<T> = ((arg0: T, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource, arg4: number, arg5: number) => void);
}
