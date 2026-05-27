import { $BlockAndTintGetter, $BlockGetter, $Explosion, $LevelReader } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapColor, $FluidState } from "@package/net/minecraft/world/level/material";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $List_ } from "@package/java/util";
import { $IBlockType } from "@package/xfacthd/framedblocks/api/type";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ItemInteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $BlueprintData, $BlueprintData_ } from "@package/xfacthd/framedblocks/api/blueprint";
import { $CamoContainer } from "@package/xfacthd/framedblocks/api/camo";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $IFramedBlock } from "@package/xfacthd/framedblocks/api/block";
import { $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/xfacthd/framedblocks/api/block/blockentity" {
    export class $FramedBlockEntity extends $BlockEntity {
        isGlowing(): boolean;
        setGlowing(arg0: boolean): void;
        getModelData(arg0: boolean): $ModelData;
        getMapColor(): $MapColor;
        loadAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getBlockType(): $IBlockType;
        saveAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        updateCulling(arg0: boolean, arg1: boolean): void;
        isIntangible(arg0: $CollisionContext): boolean;
        getCamo(arg0: $Direction_): $CamoContainer<never, never>;
        getCamo(arg0: $BlockState_): $CamoContainer<never, never>;
        getCamo(arg0: $Direction_, arg1: $Direction_): $CamoContainer<never, never>;
        getCamo(arg0: $BlockHitResult, arg1: $Player): $CamoContainer<never, never>;
        getCamo(arg0: $BlockHitResult, arg1: $Vec3_, arg2: $Vec3_): $CamoContainer<never, never>;
        getCamo(): $CamoContainer<never, never>;
        checkCamoSolid(): void;
        canAutoApplyCamoOnPlacement(): boolean;
        handleInteraction(arg0: $Player, arg1: $InteractionHand_, arg2: $BlockHitResult): $ItemInteractionResult;
        addAdditionalDrops(arg0: $List_<$ItemStack_>, arg1: boolean): void;
        getCamoFriction(arg0: $BlockState_, arg1: $Entity, arg2: number): number;
        getCamoExplosionResistance(arg0: $Explosion): number;
        isCamoFlammable(arg0: $Direction_): boolean;
        getCamoFlammability(arg0: $Direction_): number;
        getCamoFireSpreadSpeed(arg0: $Direction_): number;
        getCamoShadeBrightness(arg0: number): number;
        getCamoBeaconColorMultiplier(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): number;
        canCamoSustainPlant(arg0: $BlockGetter, arg1: $Direction_, arg2: $BlockState_): $TriState;
        /**
         * @deprecated
         */
        canCamoSustainPlant(arg0: $Direction_, arg1: $BlockState_): $TriState;
        shouldCamoDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState): boolean;
        canEntityDestroyCamo(arg0: $Entity): boolean;
        getBlock(): $IFramedBlock;
        isReinforced(): boolean;
        setIntangible(arg0: boolean): void;
        setReinforced(arg0: boolean): void;
        setCamo(arg0: $CamoContainer<never, never>, arg1: boolean): void;
        setCamo(arg0: $CamoContainer<never, never>, arg1: $BlockHitResult, arg2: $Player): void;
        canTriviallyDropAllCamos(): boolean;
        isSolidSide(arg0: $Direction_): boolean;
        isMarkedIntangible(): boolean;
        writeToBlueprint(): $BlueprintData;
        applyBlueprintData(arg0: $BlueprintData_): void;
        static MSG_BLOCK_ENTITY: $Component;
        static MSG_BLACKLISTED: $Component;
        static MSG_NON_SOLID: $Component;
        static CAMO_NBT_KEY: string;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get mapColor(): $MapColor;
        get blockType(): $IBlockType;
        get block(): $IFramedBlock;
        get markedIntangible(): boolean;
    }
}
