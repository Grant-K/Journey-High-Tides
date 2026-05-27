import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Map, $Set } from "@package/java/util";
import { $IConfigurable } from "@package/mekanism/api";
import { $Structure, $MultiblockManager, $IStructuralMultiblock, $MultiblockData } from "@package/mekanism/common/lib/multiblock";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $IChemicalHandler } from "@package/mekanism/api/chemical";
import { $InteractionResult, $ItemInteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $Supplier } from "@package/java/util/function";
import { $BlockPos_, $Holder_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $TileEntityMekanism, $CapabilityTileEntity } from "@package/mekanism/common/tile/base";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $IHeatHandler } from "@package/mekanism/api/heat";
import { $ICapabilityProvider } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/mekanism/common/tile/prefab" {
    export class $TileEntityStructuralMultiblock extends $TileEntityMekanism implements $IStructuralMultiblock, $IConfigurable {
        onRightClick(player: $Player): $InteractionResult;
        getDefaultData(): $MultiblockData;
        multiblockFormed(multiblock: $MultiblockData): void;
        multiblockUnformed(structure: $Structure): void;
        onSneakRightClick(player: $Player): $InteractionResult;
        hasFormedMultiblock(): boolean;
        getStructureMap(): $Map<$MultiblockManager<never>, $Structure>;
        structuralGuiAccessAllowed(): boolean;
        onActivate(player: $Player, hand: $InteractionHand_, stack: $ItemStack_): $ItemInteractionResult;
        setStructure(manager: $MultiblockManager<never>, structure: $Structure): void;
        hasStructure(structure: $Structure): boolean;
        getStructure(manager: $MultiblockManager<never>): $Structure;
        getMultiblockData(manager: $MultiblockManager<never>): $MultiblockData;
        resetForFormed(): void;
        setMultiblockData(manager: $MultiblockManager<never>, multiblockData: $MultiblockData): void;
        resetStructure(manager: $MultiblockManager<never>): $Structure;
        static ITEM_HANDLER_PROVIDER: $ICapabilityProvider<$CapabilityTileEntity, $Direction, $IItemHandler>;
        ticker: number;
        static FLUID_HANDLER_PROVIDER: $ICapabilityProvider<$CapabilityTileEntity, $Direction, $IFluidHandler>;
        facingSupplier: $Supplier<$Direction>;
        static CHEMICAL_HANDLER_PROVIDER: $ICapabilityProvider<$CapabilityTileEntity, $Direction, $IChemicalHandler>;
        static HEAT_HANDLER_PROVIDER: $ICapabilityProvider<$CapabilityTileEntity, $Direction, $IHeatHandler>;
        static ATTACHMENTS_NBT_KEY: string;
        playersUsing: $Set<$Player>;
        constructor(provider: $Holder_<$Block>, pos: $BlockPos_, state: $BlockState_);
        get defaultData(): $MultiblockData;
        get structureMap(): $Map<$MultiblockManager<never>, $Structure>;
    }
}
