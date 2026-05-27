import { $SideSkipPredicate } from "@package/xfacthd/framedblocks/api/predicate/cull";
import { $ShapeProvider } from "@package/xfacthd/framedblocks/api/shapes";
import { $FullFacePredicate } from "@package/xfacthd/framedblocks/api/predicate/fullface";
import { $ConTexMode, $ConnectionPredicate } from "@package/xfacthd/framedblocks/api/predicate/contex";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ImmutableList } from "@package/com/google/common/collect";

declare module "@package/xfacthd/framedblocks/api/type" {
    export class $IBlockType {
    }
    export interface $IBlockType {
        getConnectionPredicate(): $ConnectionPredicate;
        supportsConnectedTextures(): boolean;
        getFullFacePredicate(): $FullFacePredicate;
        getSideSkipPredicate(): $SideSkipPredicate;
        canOccludeWithSolidCamo(): boolean;
        canLockState(): boolean;
        allowMakingIntangible(): boolean;
        supportsWaterLogging(): boolean;
        hasBlockItem(): boolean;
        generateOcclusionShapes(arg0: $ImmutableList<$BlockState_>, arg1: $ShapeProvider): $ShapeProvider;
        hasSpecialHitbox(): boolean;
        generateShapes(arg0: $ImmutableList<$BlockState_>): $ShapeProvider;
        getMinimumConTexMode(): $ConTexMode;
        consumesTwoCamosInCamoApplicationRecipe(): boolean;
        hasSpecialTile(): boolean;
        isDoubleBlock(): boolean;
        getName(): string;
        compareTo(arg0: $IBlockType): number;
        get connectionPredicate(): $ConnectionPredicate;
        get fullFacePredicate(): $FullFacePredicate;
        get sideSkipPredicate(): $SideSkipPredicate;
        get minimumConTexMode(): $ConTexMode;
        get doubleBlock(): boolean;
        get name(): string;
    }
}
