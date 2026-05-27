import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ITileWrapper } from "@package/mekanism/common/tile/interfaces";
import { $UUID, $List, $UUID_, $Set_, $Collection, $Map, $Set } from "@package/java/util";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $TileEntityStructuralMultiblock } from "@package/mekanism/common/tile/prefab";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $IFluidHandler$FluidAction_ } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Supplier_, $BiPredicate } from "@package/java/util/function";
import { $IChemicalTank, $ChemicalStack, $IMekanismChemicalHandler } from "@package/mekanism/api/chemical";
import { $InteractionHand_, $ItemInteractionResult, $Container } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ITileHeatHandler } from "@package/mekanism/common/capabilities/heat";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Enum } from "@package/java/lang";
import { $IExtendedFluidTank, $IMekanismFluidHandler } from "@package/mekanism/api/fluid";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Int2ObjectSortedMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ILangEntry_ } from "@package/mekanism/api/text";
import { $VoxelCuboid, $BlockPosBuilder, $VoxelPlane, $IShape } from "@package/mekanism/common/lib/math/voxel";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Action_, $AutomationType } from "@package/mekanism/api";
import { $IMekanismInventory, $IInventorySlot } from "@package/mekanism/api/inventory";
import { $IHeatCapacitor, $HeatAPI$HeatTransfer, $IHeatHandler } from "@package/mekanism/api/heat";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $IEnergyContainer, $IMekanismStrictEnergyHandler } from "@package/mekanism/api/energy";

declare module "@package/mekanism/common/lib/multiblock" {
    export class $IMultiblockBase {
    }
    export interface $IMultiblockBase extends $ITileWrapper {
        getDefaultData(): $MultiblockData;
        getMultiblockData(manager: $MultiblockManager<never>): $MultiblockData;
        onActivate(player: $Player, hand: $InteractionHand_, stack: $ItemStack_): $ItemInteractionResult;
        setStructure(manager: $MultiblockManager<never>, structure: $Structure): void;
        resetForFormed(): void;
        hasStructure(structure: $Structure): boolean;
        setMultiblockData(manager: $MultiblockManager<never>, multiblockData: $MultiblockData): void;
        resetStructure(manager: $MultiblockManager<never>): $Structure;
        getStructure(manager: $MultiblockManager<never>): $Structure;
        get defaultData(): $MultiblockData;
    }
    export class $IMultiblock<T extends $MultiblockData> {
    }
    export interface $IMultiblock<T extends $MultiblockData> extends $IMultiblockBase {
        resetCache(): void;
        getDefaultData(): T;
        isMaster(): boolean;
        getCacheID(): $UUID;
        getMultiblock(): T;
        createMultiblock(): T;
        canBeMaster(): boolean;
        setStructure(structure: $Structure): void;
        setStructure(manager: $MultiblockManager<never>, structure: $Structure): void;
        hasStructure(structure: $Structure): boolean;
        createFormationProtocol(): $FormationProtocol<T>;
        getManager(): $MultiblockManager<T>;
        getStructure(): $Structure;
        getStructure(manager: $MultiblockManager<never>): $Structure;
        get defaultData(): T;
        get master(): boolean;
        get cacheID(): $UUID;
        get multiblock(): T;
        get manager(): $MultiblockManager<T>;
    }
    export class $MultiblockData implements $IMekanismInventory, $IMekanismFluidHandler, $IMekanismStrictEnergyHandler, $ITileHeatHandler, $IMekanismChemicalHandler {
        getVolume(): number;
        markDirty(): void;
        setShape(shape: $IShape): boolean;
        getMaxPos(): $BlockPos;
        getLevel(): $Level;
        isDirty(): boolean;
        tick(world: $Level_): boolean;
        setVolume(volume: number): void;
        onContentsChanged(): void;
        writeUpdateTag(tag: $CompoundTag_, provider: $HolderLookup$Provider): void;
        getInventorySlots(side: $Direction_): $List<$IInventorySlot>;
        getChemicalTanks(side: $Direction_): $List<$IChemicalTank>;
        resetDirty(): void;
        formedBiPred<T>(): $BiPredicate<T, $AutomationType>;
        notExternalFormedBiPred<T>(): $BiPredicate<T, $AutomationType>;
        getMinPos(): $BlockPos;
        allowsStructuralGuiAccess(multiblock: $TileEntityStructuralMultiblock): boolean;
        meltdownHappened(world: $Level_): void;
        readUpdateTag(tag: $CompoundTag_, provider: $HolderLookup$Provider): void;
        isPositionInsideBounds<T extends $MultiblockData>(structure: $Structure, pos: $BlockPos_): boolean;
        isPositionOutsideBounds(pos: $BlockPos_): boolean;
        getOutsideSide(pos: $BlockPos_): $Direction;
        isKnownLocation(pos: $BlockPos_): boolean;
        getValveData(): $Collection<$IValveHandler$ValveData>;
        setFormedForce(formed: boolean): void;
        getCurrentRedstoneLevel(): number;
        getFluidTanks(side: $Direction_): $List<$IExtendedFluidTank>;
        getEnergyContainers(side: $Direction_): $List<$IEnergyContainer>;
        getHeatCapacitors(side: $Direction_): $List<$IHeatCapacitor>;
        forceUpdateComparatorLevel(): void;
        isFormed(): boolean;
        notifyAllUpdateComparator(world: $Level_): void;
        markDirtyComparator(world: $Level_): void;
        onCreated(world: $Level_): void;
        width(): number;
        height(): number;
        remove(world: $Level_, oldStructure: $Structure): void;
        length(): number;
        getBounds(): $VoxelCuboid;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: $Direction_, arg3: $Action_): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ItemStack;
        getSlotLimit(arg0: number, arg1: $Direction_): number;
        isItemValid(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        setStackInSlot(arg0: number, arg1: $ItemStack_, arg2: $Direction_): void;
        getStackInSlot(arg0: number, arg1: $Direction_): $ItemStack;
        hasInventory(): boolean;
        getInventorySlot(arg0: number, arg1: $Direction_): $IInventorySlot;
        isInventoryEmpty(arg0: $Direction_): boolean;
        isInventoryEmpty(): boolean;
        getSlots(arg0: $Direction_): number;
        getFluidInTank(arg0: number, arg1: $Direction_): $FluidStack;
        getFluidTank(arg0: number, arg1: $Direction_): $IExtendedFluidTank;
        getTanks(arg0: $Direction_): number;
        getTankCapacity(arg0: number, arg1: $Direction_): number;
        isFluidValid(arg0: number, arg1: $FluidStack_, arg2: $Direction_): boolean;
        setFluidInTank(arg0: number, arg1: $FluidStack_, arg2: $Direction_): void;
        insertFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Direction_, arg3: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        canHandleFluid(): boolean;
        getEnergy(arg0: number, arg1: $Direction_): number;
        setEnergy(arg0: number, arg1: number, arg2: $Direction_): void;
        extractEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        extractEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        getMaxEnergy(arg0: number, arg1: $Direction_): number;
        getEnergyContainerCount(arg0: $Direction_): number;
        getNeededEnergy(arg0: number, arg1: $Direction_): number;
        canHandleEnergy(): boolean;
        getEnergyContainer(arg0: number, arg1: $Direction_): $IEnergyContainer;
        insertEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        insertEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        simulate(): $HeatAPI$HeatTransfer;
        getAdjacent(side: $Direction_): $IHeatHandler;
        simulateAdjacent(): number;
        simulateEnvironment(): number;
        getAmbientTemperature(side: $Direction_): number;
        incrementAdjacentTransfer(currentAdjacentTransfer: number, tempToTransfer: number, side: $Direction_): number;
        updateHeatCapacitors(side: $Direction_): void;
        isValid(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): boolean;
        getChemicalInTank(arg0: number, arg1: $Direction_): $ChemicalStack;
        canHandleChemicals(): boolean;
        getCountChemicalTanks(arg0: $Direction_): number;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): void;
        getChemicalTankCapacity(arg0: number, arg1: $Direction_): number;
        insertChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        extractChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        getChemicalTank(arg0: number, arg1: $Direction_): $IChemicalTank;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getStackInSlot(arg0: number): $ItemStack;
        getInventorySideFor(): $Direction;
        getSlots(): number;
        getFluidInTank(arg0: number): $FluidStack;
        getTanks(): number;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Action_): $FluidStack;
        getFluidSideFor(): $Direction;
        getEnergy(arg0: number): number;
        setEnergy(arg0: number, arg1: number): void;
        extractEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        getMaxEnergy(arg0: number): number;
        getEnergyContainerCount(): number;
        getNeededEnergy(arg0: number): number;
        getEnergySideFor(): $Direction;
        insertEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        getTemperature(arg0: number, arg1: $Direction_): number;
        getHeatCapacitor(arg0: number, arg1: $Direction_): $IHeatCapacitor;
        getTotalTemperature(arg0: $Direction_): number;
        getTotalInverseConductionCoefficient(arg0: $Direction_): number;
        getInverseConduction(arg0: number, arg1: $Direction_): number;
        getHeatCapacity(arg0: number, arg1: $Direction_): number;
        handleHeat(arg0: number, arg1: $Direction_): void;
        handleHeat(arg0: number, arg1: number, arg2: $Direction_): void;
        getInverseInsulation(arg0: number, arg1: $Direction_): number;
        getTotalHeatCapacity(arg0: $Direction_): number;
        canHandleHeat(): boolean;
        getHeatCapacitorCount(arg0: $Direction_): number;
        getTotalInverseInsulation(arg0: $Direction_): number;
        isValid(arg0: number, arg1: $ChemicalStack): boolean;
        getChemicalTanks(): number;
        getChemicalInTank(arg0: number): $ChemicalStack;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack): void;
        getChemicalTankCapacity(arg0: number): number;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: number, arg2: $Action_): $ChemicalStack;
        getSideFor(): $Direction;
        /**
         * @deprecated
         */
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        /**
         * @deprecated
         */
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        insertFluid(arg0: $FluidStack_, arg1: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Action_): $FluidStack;
        /**
         * @deprecated
         */
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        extractEnergy(arg0: number, arg1: $Action_): number;
        insertEnergy(arg0: number, arg1: $Action_): number;
        getTemperature(arg0: number): number;
        getHeatSideFor(): $Direction;
        getTotalInverseConduction(): number;
        getTotalTemperature(): number;
        getInverseConduction(arg0: number): number;
        getHeatCapacity(arg0: number): number;
        handleHeat(arg0: number): void;
        handleHeat(arg0: number, arg1: number): void;
        getTotalHeatCapacity(): number;
        getHeatCapacitorCount(): number;
        insertChemical(arg0: $ChemicalStack, arg1: $Action_): $ChemicalStack;
        extractChemical(arg0: $ChemicalStack, arg1: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: $Action_): $ChemicalStack;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        clear(match: $ItemPredicate_): void;
        clear(): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        asContainer(): $Container;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        isEmpty(): boolean;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        recheckStructure: boolean;
        hasMaster: boolean;
        valves: $Set<$IValveHandler$ValveData>;
        renderLocation: $BlockPos;
        inventoryID: $UUID;
        locations: $Set<$BlockPos>;
        internalLocations: $Set<$BlockPos>;
        constructor(tile: $BlockEntity);
        set shape(value: $IShape);
        get maxPos(): $BlockPos;
        get level(): $Level;
        get dirty(): boolean;
        get minPos(): $BlockPos;
        get valveData(): $Collection<$IValveHandler$ValveData>;
        set formedForce(value: boolean);
        get currentRedstoneLevel(): number;
        get formed(): boolean;
        get bounds(): $VoxelCuboid;
        get inventorySideFor(): $Direction;
        get fluidSideFor(): $Direction;
        get energySideFor(): $Direction;
        get sideFor(): $Direction;
        get heatSideFor(): $Direction;
        get totalInverseConduction(): number;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
    }
    export class $Structure {
        getController(): $IMultiblock<never>;
        removeMultiblock(world: $Level_): void;
        getMinorAxisMap(axis: $Structure$Axis_): $Int2ObjectSortedMap<$VoxelPlane>;
        getMajorAxisMap(axis: $Structure$Axis_): $Int2ObjectSortedMap<$VoxelPlane>;
        isValid(): boolean;
        getTile(pos: $BlockPos_): $IMultiblockBase;
        invalidate(world: $Level_): void;
        tick<TILE extends $BlockEntity>(tile: TILE, tryValidate: boolean): void;
        getMultiblockData(): $MultiblockData;
        markForUpdate(world: $Level_, invalidate: boolean): void;
        doImmediateUpdate<TILE extends $BlockEntity>(tile: TILE, tryValidate: boolean): void;
        runUpdate<TILE extends $BlockEntity>(tile: TILE): $FormationProtocol$FormationResult;
        setMultiblockData(multiblockData: $MultiblockData): void;
        getManager(): $MultiblockManager<never>;
        size(): number;
        add(s: $Structure): void;
        contains(pos: $BlockPos_): boolean;
        static INVALID: $Structure;
        constructor(node: $IMultiblockBase);
        get controller(): $IMultiblock<never>;
        get valid(): boolean;
        get manager(): $MultiblockManager<never>;
    }
    export class $FormationProtocol$FormationResult {
        isFormed(): boolean;
        isNoIgnore(): boolean;
        getResultText(): $Component;
        static fail(text: $ILangEntry_, noIgnore: boolean): $FormationProtocol$FormationResult;
        static fail(text: $Component_): $FormationProtocol$FormationResult;
        static fail(text: $Component_, noIgnore: boolean): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_, pos: $BlockPos_): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_, pos: $BlockPos_, noIgnore: boolean): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_, pos: $BlockPos_, state: $BlockState_): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_, pos: $BlockPos_, state: $BlockState_, noIgnore: boolean): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_): $FormationProtocol$FormationResult;
        static SUCCESS: $FormationProtocol$FormationResult;
        static FAIL: $FormationProtocol$FormationResult;
        get formed(): boolean;
        get noIgnore(): boolean;
        get resultText(): $Component;
    }
    export class $MultiblockManager<T extends $MultiblockData> {
        isCompatible(tile: $BlockEntity): boolean;
        createValidator(): $IStructureValidator<T>;
        getCache(multiblockID: $UUID_): $MultiblockCache<T>;
        replaceCaches(staleIds: $Set_<$UUID_>, id: $UUID_, cache: $MultiblockCache<T>): void;
        trackCache(id: $UUID_, cache: $MultiblockCache<T>): void;
        getNameLower(): string;
        handleDirtyMultiblock(multiblock: T): void;
        markTicked(multiblock: T): void;
        getUniqueInventoryID(): $UUID;
        static createOrLoadAll(): void;
        createCache(): $MultiblockCache<T>;
        getName(): string;
        static reset(): void;
        constructor(name: string, cacheSupplier: $Supplier_<$MultiblockCache<T>>, validatorSupplier: $Supplier_<$IStructureValidator<T>>);
        get nameLower(): string;
        get uniqueInventoryID(): $UUID;
        get name(): string;
    }
    export class $IStructuralMultiblock {
    }
    export interface $IStructuralMultiblock extends $IMultiblockBase {
        multiblockFormed(multiblock: $MultiblockData): void;
        multiblockUnformed(structure: $Structure): void;
        canInterface(manager: $MultiblockManager<never>): boolean;
        hasFormedMultiblock(): boolean;
        getStructureMap(): $Map<$MultiblockManager<never>, $Structure>;
        structuralGuiAccessAllowed(): boolean;
        get structureMap(): $Map<$MultiblockManager<never>, $Structure>;
    }
    export class $Structure$Axis extends $Enum<$Structure$Axis> {
        horizontal(): $Structure$Axis;
        vertical(): $Structure$Axis;
        getCoord(pos: $BlockPos_): number;
        static get(side: $Direction_): $Structure$Axis;
        static values(): $Structure$Axis[];
        static valueOf(name: string): $Structure$Axis;
        set(pos: $BlockPosBuilder, val: number): void;
        static X: $Structure$Axis;
        static Y: $Structure$Axis;
        static Z: $Structure$Axis;
    }
    /**
     * Values that may be interpreted as {@link $Structure$Axis}.
     */
    export type $Structure$Axis_ = "x" | "y" | "z";
    export class $IValveHandler$ValveData {
        onTransfer(): void;
        side: $Direction;
        activeTicks: number;
        location: $BlockPos;
        prevActive: boolean;
        constructor(location: $BlockPos_, side: $Direction_);
    }
}
