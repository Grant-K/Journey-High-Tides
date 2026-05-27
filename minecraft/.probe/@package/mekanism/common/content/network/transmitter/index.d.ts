import { $TransmissionType, $DynamicBufferedNetwork, $ConnectionType_, $TransmissionType_, $CompatibleTransmitterValidator, $ConnectionType, $DynamicNetwork } from "@package/mekanism/common/lib/transmitter";
import { $IChemicalTracker } from "@package/mekanism/common/capabilities/chemical";
import { $BasicEnergyContainer } from "@package/mekanism/common/capabilities/energy";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ITileWrapper } from "@package/mekanism/common/tile/interfaces";
import { $List, $UUID_, $Collection_, $Set } from "@package/java/util";
import { $IFluidHandler$FluidAction_, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $IChemicalHandler, $IChemicalTank, $ChemicalStack } from "@package/mekanism/api/chemical";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $BlockPos, $Holder_, $GlobalPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BasicFluidTank } from "@package/mekanism/common/capabilities/fluid";
import { $EnergyAcceptorCache, $AbstractAcceptorCache, $AcceptorCache } from "@package/mekanism/common/lib/transmitter/acceptor";
import { $IExtendedFluidTank, $IMekanismFluidHandler } from "@package/mekanism/api/fluid";
import { $Level } from "@package/net/minecraft/world/level";
import { $TransmitterUpgradeData, $PressurizedTubeUpgradeData, $MechanicalPipeUpgradeData, $UniversalCableUpgradeData } from "@package/mekanism/common/upgrade/transmitter";
import { $FluidNetwork, $EnergyNetwork, $ChemicalNetwork } from "@package/mekanism/common/content/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Action_, $Chunk3D } from "@package/mekanism/api";
import { $TileEntityTransmitter } from "@package/mekanism/common/tile/transmitter";
import { $IAlloyTier_, $ITier } from "@package/mekanism/api/tier";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $TubeTier, $PipeTier, $CableTier } from "@package/mekanism/common/tier";
import { $IEnergyContainer, $IStrictEnergyHandler, $IMekanismStrictEnergyHandler } from "@package/mekanism/api/energy";

declare module "@package/mekanism/common/content/network/transmitter" {
    export class $PressurizedTube extends $BufferedTransmitter<$IChemicalHandler, $ChemicalNetwork, $ChemicalStack, $PressurizedTube> implements $IChemicalTracker, $IUpgradeableTransmitter<$PressurizedTubeUpgradeData> {
        getShare(): $ChemicalStack;
        onContentsChanged(): void;
        getChemicalTanks(side: $Direction_): $List<$IChemicalTank>;
        getChemicalTank(): $IChemicalTank;
        parseUpgradeData(data: $PressurizedTubeUpgradeData): void;
        dataTypeMatches(data: $TransmitterUpgradeData): boolean;
        getAcceptorCache(): $AcceptorCache<$IChemicalHandler>;
        createEmptyNetworkWithID(networkID: $UUID_): $ChemicalNetwork;
        pullFromAcceptors(): void;
        getBufferWithFallback(): $ChemicalStack;
        canUpgrade(alloyTier: $IAlloyTier_): boolean;
        getTier(): $ITier;
        getUpgradeData(): $PressurizedTubeUpgradeData;
        chemicalTank: $IChemicalTank;
        tier: $TubeTier;
        saveShare: $ChemicalStack;
        currentTransmitterConnections: number;
        constructor(blockProvider: $Holder_<$Block>, tile: $TileEntityTransmitter);
        get share(): $ChemicalStack;
        get acceptorCache(): $AcceptorCache<$IChemicalHandler>;
        get bufferWithFallback(): $ChemicalStack;
        get upgradeData(): $PressurizedTubeUpgradeData;
    }
    export class $BufferedTransmitter<ACCEPTOR, NETWORK extends $DynamicBufferedNetwork<ACCEPTOR, NETWORK, BUFFER, TRANSMITTER>, BUFFER, TRANSMITTER extends $BufferedTransmitter<ACCEPTOR, NETWORK, BUFFER, TRANSMITTER>> extends $Transmitter<ACCEPTOR, NETWORK, TRANSMITTER> {
        getShare(): BUFFER;
        getCapacity(): number;
        noBufferOrFallback(): boolean;
        getBufferWithFallback(): BUFFER;
        releaseShare(): BUFFER;
        currentTransmitterConnections: number;
        constructor(tile: $TileEntityTransmitter, ...transmissionTypes: $TransmissionType_[]);
        get share(): BUFFER;
        get capacity(): number;
        get bufferWithFallback(): BUFFER;
    }
    export class $MechanicalPipe extends $BufferedTransmitter<$IFluidHandler, $FluidNetwork, $FluidStack, $MechanicalPipe> implements $IMekanismFluidHandler, $IUpgradeableTransmitter<$MechanicalPipeUpgradeData> {
        getUpgradeData(): $MechanicalPipeUpgradeData;
        onContentsChanged(): void;
        getFluidTanks(side: $Direction_): $List<$IExtendedFluidTank>;
        parseUpgradeData(data: $MechanicalPipeUpgradeData): void;
        dataTypeMatches(data: $TransmitterUpgradeData): boolean;
        getAcceptorCache(): $AcceptorCache<$IFluidHandler>;
        createEmptyNetworkWithID(networkID: $UUID_): $FluidNetwork;
        createNetworkByMerging(networks: $Collection_<$FluidNetwork>): $FluidNetwork;
        takeFluid(fluid: $FluidStack_, action: $Action_): $FluidStack;
        pullFromAcceptors(): void;
        getBufferWithFallback(): $FluidStack;
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
        canUpgrade(alloyTier: $IAlloyTier_): boolean;
        getFluidInTank(arg0: number): $FluidStack;
        getTanks(): number;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Action_): $FluidStack;
        getFluidSideFor(): $Direction;
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
        getTier(): $ITier;
        tier: $PipeTier;
        saveShare: $FluidStack;
        buffer: $BasicFluidTank;
        currentTransmitterConnections: number;
        constructor(blockProvider: $Holder_<$Block>, tile: $TileEntityTransmitter);
        get upgradeData(): $MechanicalPipeUpgradeData;
        get acceptorCache(): $AcceptorCache<$IFluidHandler>;
        get bufferWithFallback(): $FluidStack;
        get fluidSideFor(): $Direction;
    }
    export class $Transmitter<ACCEPTOR, NETWORK extends $DynamicNetwork<ACCEPTOR, NETWORK, TRANSMITTER>, TRANSMITTER extends $Transmitter<ACCEPTOR, NETWORK, TRANSMITTER>> implements $ITileWrapper {
        getBlockPos(): $BlockPos;
        getConnectionType(side: $Direction_): $ConnectionType;
        handleUpdateTag(tag: $CompoundTag_, provider: $HolderLookup$Provider): boolean;
        isUpgrading(): boolean;
        getLevel(): $Level;
        isValid(): boolean;
        onRightClick(player: $Player, side: $Direction_): $InteractionResult;
        canConnect(side: $Direction_): boolean;
        isRemote(): boolean;
        onNeighborBlockChange(side: $Direction_): void;
        onConfigure(player: $Player, side: $Direction_): $InteractionResult;
        getSupportedTransmissionTypes(): $Set<$TransmissionType>;
        getReducedUpdateTag(provider: $HolderLookup$Provider, updateTag: $CompoundTag_): $CompoundTag;
        getTileGlobalPos(): $GlobalPos;
        getTileChunk(): $Chunk3D;
        isRedstoneActivated(): boolean;
        getWorldPositionLong(): number;
        setTransmitterNetwork(network: NETWORK): void;
        setTransmitterNetwork(network: NETWORK, requestNow: boolean): boolean;
        getAllCurrentConnections(): number;
        static connectionMapContainsSide(connections: number, side: $Direction_): boolean;
        getConnectionTypeRaw(side: $Direction_): $ConnectionType;
        notifyTileChange(): void;
        setConnectionTypeRaw(side: $Direction_, type: $ConnectionType_): void;
        onModeChange(side: $Direction_): void;
        getTransmitterTile(): $TileEntityTransmitter;
        startUpgrading(): void;
        hasTransmitterNetwork(): boolean;
        getTransmitterNetwork(): NETWORK;
        getAcceptorCache(): $AbstractAcceptorCache<ACCEPTOR, never>;
        refreshConnections(side: $Direction_): void;
        refreshConnections(): void;
        validateAndTakeShare(): void;
        onWorldSeparate(stillPresent: boolean): void;
        requestsUpdate(): void;
        isOrphan(): boolean;
        supportsTransmissionType(transmitter: $TileEntityTransmitter): boolean;
        supportsTransmissionType(transmitter: $Transmitter<never, never, never>): boolean;
        handlesRedstone(): boolean;
        isValidTransmitter(transmitter: $TileEntityTransmitter, side: $Direction_): boolean;
        canConnectMutual(side: $Direction_, cachedTransmitter: TRANSMITTER): boolean;
        canConnectMutual(side: $Direction_, cachedTile: $BlockEntity): boolean;
        markDirtyAcceptor(side: $Direction_): void;
        isValidTransmitterBasic(transmitter: $TileEntityTransmitter, side: $Direction_): boolean;
        createEmptyNetworkWithID(networkID: $UUID_): NETWORK;
        getPossibleAcceptorConnections(): number;
        getPossibleTransmitterConnections(): number;
        isConnectionType(side: $Direction_, typeToCheck: $ConnectionType_): boolean;
        takeShare(): void;
        getConnectionTypesRaw(): $ConnectionType[];
        setConnectionTypesRaw(connectionTypes: $ConnectionType_[]): void;
        createNetworkByMerging(toMerge: $Collection_<NETWORK>): NETWORK;
        getNewOrphanValidator(): $CompatibleTransmitterValidator<ACCEPTOR, NETWORK, TRANSMITTER>;
        setOrphan(nowOrphaned: boolean): void;
        getAcceptor(side: $Direction_): ACCEPTOR;
        canConnectToAcceptor(side: $Direction_): boolean;
        refreshAcceptorConnections(side: $Direction_): void;
        remove(): void;
        write(provider: $HolderLookup$Provider, nbtTags: $CompoundTag_): $CompoundTag;
        read(provider: $HolderLookup$Provider, nbtTags: $CompoundTag_): void;
        currentTransmitterConnections: number;
        constructor(transmitterTile: $TileEntityTransmitter, ...transmissionTypes: $TransmissionType_[]);
        get blockPos(): $BlockPos;
        get upgrading(): boolean;
        get level(): $Level;
        get valid(): boolean;
        get remote(): boolean;
        get supportedTransmissionTypes(): $Set<$TransmissionType>;
        get tileGlobalPos(): $GlobalPos;
        get tileChunk(): $Chunk3D;
        get redstoneActivated(): boolean;
        get worldPositionLong(): number;
        get allCurrentConnections(): number;
        get transmitterTile(): $TileEntityTransmitter;
        get acceptorCache(): $AbstractAcceptorCache<ACCEPTOR, never>;
        get possibleAcceptorConnections(): number;
        get possibleTransmitterConnections(): number;
        get newOrphanValidator(): $CompatibleTransmitterValidator<ACCEPTOR, NETWORK, TRANSMITTER>;
    }
    export class $IUpgradeableTransmitter<DATA extends $TransmitterUpgradeData> {
    }
    export interface $IUpgradeableTransmitter<DATA extends $TransmitterUpgradeData> {
        getTier(): $ITier;
        getUpgradeData(): DATA;
        parseUpgradeData(data: DATA): void;
        canUpgrade(alloyTier: $IAlloyTier_): boolean;
        dataTypeMatches(data: $TransmitterUpgradeData): boolean;
        get tier(): $ITier;
        get upgradeData(): DATA;
    }
    export class $UniversalCable extends $BufferedTransmitter<$IStrictEnergyHandler, $EnergyNetwork, number, $UniversalCable> implements $IMekanismStrictEnergyHandler, $IUpgradeableTransmitter<$UniversalCableUpgradeData> {
        getTier(): $CableTier;
        onContentsChanged(): void;
        getEnergyContainers(side: $Direction_): $List<$IEnergyContainer>;
        parseUpgradeData(data: $UniversalCableUpgradeData): void;
        dataTypeMatches(data: $TransmitterUpgradeData): boolean;
        getAcceptorCache(): $EnergyAcceptorCache;
        createEmptyNetworkWithID(networkID: $UUID_): $EnergyNetwork;
        pullFromAcceptors(): void;
        getBufferWithFallback(): number;
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
        canUpgrade(alloyTier: $IAlloyTier_): boolean;
        getEnergy(arg0: number): number;
        setEnergy(arg0: number, arg1: number): void;
        extractEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        getMaxEnergy(arg0: number): number;
        getEnergyContainerCount(): number;
        getNeededEnergy(arg0: number): number;
        getEnergySideFor(): $Direction;
        insertEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        extractEnergy(arg0: number, arg1: $Action_): number;
        insertEnergy(arg0: number, arg1: $Action_): number;
        getUpgradeData(): $UniversalCableUpgradeData;
        tier: $CableTier;
        lastWrite: number;
        buffer: $BasicEnergyContainer;
        currentTransmitterConnections: number;
        constructor(blockProvider: $Holder_<$Block>, tile: $TileEntityTransmitter);
        get acceptorCache(): $EnergyAcceptorCache;
        get bufferWithFallback(): number;
        get energySideFor(): $Direction;
        get upgradeData(): $UniversalCableUpgradeData;
    }
}
