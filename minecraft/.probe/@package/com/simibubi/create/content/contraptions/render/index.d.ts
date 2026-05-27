import { $BlockAndTintGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $StructureTemplate$StructureBlockInfo_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $BitSet, $List } from "@package/java/util";
import { $Function_, $Function } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Contraption } from "@package/com/simibubi/create/content/contraptions";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $Visual } from "@package/dev/engine_room/flywheel/api/visual";
import { $Iterable, $Iterable_, $Record } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/com/simibubi/create/content/contraptions/render" {
    export class $ActorVisual implements $Visual {
        beginFrame(): void;
        tick(): void;
        update(arg0: number): void;
        delete(): void;
        constructor(arg0: $VisualizationContext, arg1: $BlockAndTintGetter, arg2: $MovementContext);
    }
    export class $ContraptionMatrices {
        getModelViewProjection(): $PoseStack;
        getLight(): $Matrix4f;
        static translateToEntity(arg0: $Matrix4f, arg1: $Entity, arg2: number): void;
        getWorld(): $Matrix4f;
        getViewProjection(): $PoseStack;
        static clearStack(arg0: $PoseStack): void;
        getModel(): $PoseStack;
        static transform(arg0: $PoseStack, arg1: $PoseStack): void;
        constructor();
        get modelViewProjection(): $PoseStack;
        get light(): $Matrix4f;
        get world(): $Matrix4f;
        get viewProjection(): $PoseStack;
        get model(): $PoseStack;
    }
    export class $ClientContraption$RenderedBlocks extends $Record {
        positions(): $Iterable<$BlockPos>;
        lookup(): $Function<$BlockPos, $BlockState>;
        constructor(lookup: $Function_<$BlockPos, $BlockState>, positions: $Iterable_<$BlockPos>);
    }
    /**
     * Values that may be interpreted as {@link $ClientContraption$RenderedBlocks}.
     */
    export type $ClientContraption$RenderedBlocks_ = { lookup?: $Function_<$BlockPos, $BlockState>, positions?: $Iterable_<$BlockPos>,  } | [lookup?: $Function_<$BlockPos, $BlockState>, positions?: $Iterable_<$BlockPos>, ];
    export class $ClientContraption {
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        structureVersion(): number;
        childrenVersion(): number;
        readBlockEntity(arg0: $Level_, arg1: $StructureTemplate$StructureBlockInfo_, arg2: boolean): $BlockEntity;
        getRenderLevel(): $VirtualRenderWorld;
        getMatrices(): $ContraptionMatrices;
        getRenderedBlocks(): $ClientContraption$RenderedBlocks;
        getAndAdjustShouldRenderBlockEntities(): $BitSet;
        resetRenderLevel(): void;
        invalidateStructure(): void;
        invalidateChildren(): void;
        shouldRenderBlockEntities: $BitSet;
        renderedBlockEntityView: $List<$BlockEntity>;
        scratchErroredBlockEntities: $BitSet;
        constructor(arg0: $Contraption);
        get renderLevel(): $VirtualRenderWorld;
        get matrices(): $ContraptionMatrices;
        get renderedBlocks(): $ClientContraption$RenderedBlocks;
        get andAdjustShouldRenderBlockEntities(): $BitSet;
    }
}
