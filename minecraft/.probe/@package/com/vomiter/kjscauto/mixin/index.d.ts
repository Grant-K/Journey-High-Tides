import { $BlazeBurnerBlock$HeatLevel, $BlazeBurnerBlock$HeatLevel_ } from "@package/com/simibubi/create/content/processing/burner";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/com/vomiter/kjscauto/mixin" {
    export class $ContraptionAccessor {
    }
    export interface $ContraptionAccessor {
        getBlocks(): $Map<$BlockPos, $StructureTemplate$StructureBlockInfo>;
        get blocks(): $Map<$BlockPos, $StructureTemplate$StructureBlockInfo>;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionAccessor}.
     */
    export type $ContraptionAccessor_ = (() => $Map_<$BlockPos_, $StructureTemplate$StructureBlockInfo_>);
    export class $BasinAccessor {
    }
    export interface $BasinAccessor {
        getHeatLevel(): $BlazeBurnerBlock$HeatLevel;
        get heatLevel(): $BlazeBurnerBlock$HeatLevel;
    }
    /**
     * Values that may be interpreted as {@link $BasinAccessor}.
     */
    export type $BasinAccessor_ = (() => $BlazeBurnerBlock$HeatLevel_);
}
