import { $ChunkPos, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $IICProxyProvider } from "@package/blusunrize/immersiveengineering/api/wires/proxy";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LocalNetworkHandler, $IWorldTickable, $ILocalHandlerProvider } from "@package/blusunrize/immersiveengineering/api/wires/localhandlers";
import { $LinkedHashSet, $List, $List_, $Collection } from "@package/java/util";
import { $Consumer_, $BooleanSupplier, $Function } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Runnable_, $Record, $Comparable, $Class } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $DualCodec } from "@package/malte0811/dualcodecs";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $LevelEvent$Unload } from "@package/net/neoforged/neoforge/event/level";
import { $SetRestrictedField } from "@package/blusunrize/immersiveengineering/api/utils";
export * as localhandlers from "@package/blusunrize/immersiveengineering/api/wires/localhandlers";

declare module "@package/blusunrize/immersiveengineering/api/wires" {
    export class $GlobalWireNetwork extends $SavedData implements $IWorldTickable {
        static getNetwork(arg0: $Level_): $GlobalWireNetwork;
        readFromNBT(arg0: $CompoundTag_): void;
        static onWorldUnload(arg0: $LevelEvent$Unload): void;
        getLocalNet(arg0: $BlockPos_): $LocalWireNetwork;
        getLocalNet(arg0: $ConnectionPoint_): $LocalWireNetwork;
        getNullableLocalNet(arg0: $BlockPos_): $LocalWireNetwork;
        getNullableLocalNet(arg0: $ConnectionPoint_): $LocalWireNetwork;
        getProxyProvider(): $IICProxyProvider;
        removeAllConnectionsAt(arg0: $IImmersiveConnectable, arg1: $Consumer_<$Connection>): void;
        removeAllConnectionsAt(arg0: $ConnectionPoint_, arg1: $Consumer_<$Connection>): void;
        onConnectorLoad(arg0: $IImmersiveConnectable, arg1: boolean): void;
        onConnectorLoad(arg0: $IImmersiveConnectable, arg1: $Level_): void;
        removeAndDropConnection(arg0: $Connection, arg1: $BlockPos_, arg2: $Level_): void;
        removeInsertAndDropConnection(arg0: $Connection, arg1: $Player, arg2: $Level_): void;
        onConnectorUnload(arg0: $IImmersiveConnectable): void;
        getCollisionData(): $WireCollisionData;
        getAllConnectorsIn(arg0: $ChunkPos): $Collection<$ConnectionPoint>;
        updateCatenaryData(arg0: $Connection): void;
        getExistingConnector(arg0: $ConnectionPoint_): $IImmersiveConnectable;
        removeConnector(arg0: $IImmersiveConnectable): void;
        removeConnection(arg0: $Connection): void;
        addConnection(arg0: $Connection): void;
        update(arg0: $Level_): void;
        static GET_NET_UNCACHED: $SetRestrictedField<$Function<$Level, $GlobalWireNetwork>>;
        static VALIDATE_CONNECTIONS: $SetRestrictedField<$BooleanSupplier>;
        static SANITIZE_CONNECTIONS: $SetRestrictedField<$BooleanSupplier>;
        constructor(arg0: boolean, arg1: $IICProxyProvider, arg2: $IWireSyncManager);
        get proxyProvider(): $IICProxyProvider;
        get collisionData(): $WireCollisionData;
    }
    export class $WireType implements $ILocalHandlerProvider {
        getUniqueName(): string;
        getColour(arg0: $Connection): number;
        getRenderDiameter(): number;
        static getIEWireTypes(): $Collection<$WireType>;
        getSlack(): number;
        getWireCoil(arg0: $Connection): $ItemStack;
        getCategory(): string;
        getMaxLength(): number;
        static getValues(): $LinkedHashSet<$WireType>;
        static getValue(arg0: string): $WireType;
        getRequestedHandlers(): $Collection<$ResourceLocation>;
        static INTERNAL_CONNECTION: $WireType;
        static HV_CATEGORY: string;
        static REDSTONE: $WireType;
        static COPPER: $WireType;
        static REDSTONE_CATEGORY: string;
        static LV_CATEGORY: string;
        static CODECS: $DualCodec<$ByteBuf, $WireType>;
        static STRUCTURE_ROPE: $WireType;
        static STRUCTURE_STEEL: $WireType;
        static STEEL: $WireType;
        static ELECTRUM_INSULATED: $WireType;
        static COPPER_INSULATED: $WireType;
        static STRUCTURE_CATEGORY: string;
        static MV_CATEGORY: string;
        static ELECTRUM: $WireType;
        constructor();
        get uniqueName(): string;
        get renderDiameter(): number;
        static get IEWireTypes(): $Collection<$WireType>;
        get slack(): number;
        get category(): string;
        get maxLength(): number;
        static get values(): $LinkedHashSet<$WireType>;
        get requestedHandlers(): $Collection<$ResourceLocation>;
    }
    export class $IConnectionTemplate {
    }
    export interface $IConnectionTemplate {
        getStoredConnections(): $List<$IConnectionTemplate$TemplateConnection>;
        get storedConnections(): $List<$IConnectionTemplate$TemplateConnection>;
    }
    /**
     * Values that may be interpreted as {@link $IConnectionTemplate}.
     */
    export type $IConnectionTemplate_ = (() => $List_<$IConnectionTemplate$TemplateConnection_>);
    export class $ConnectionPoint extends $Record implements $Comparable<$ConnectionPoint> {
        getZ(): number;
        getY(): number;
        getX(): number;
        createTag(): $CompoundTag;
        index(): number;
        compareTo(arg0: $ConnectionPoint_): number;
        position(): $BlockPos;
        static CODECS: $DualCodec<$ByteBuf, $ConnectionPoint>;
        constructor(arg0: $CompoundTag_);
        constructor(position: $BlockPos_, index: number);
        get z(): number;
        get y(): number;
        get x(): number;
    }
    /**
     * Values that may be interpreted as {@link $ConnectionPoint}.
     */
    export type $ConnectionPoint_ = { position?: $BlockPos_, index?: number,  } | [position?: $BlockPos_, index?: number, ];
    export class $LocalWireNetwork implements $IWorldTickable {
        writeToNBT(): $CompoundTag;
        getVersion(): number;
        isValid(arg0: $ConnectionPoint_): boolean;
        isValid(): boolean;
        getConnector(arg0: $ConnectionPoint_): $IImmersiveConnectable;
        getConnector(arg0: $BlockPos_): $IImmersiveConnectable;
        getConnectionPoints(): $Collection<$ConnectionPoint>;
        getConnectors(): $Collection<$BlockPos>;
        getAllHandlers(): $Collection<$LocalNetworkHandler>;
        addAsFutureTask(arg0: $Runnable_): void;
        setInvalid(): void;
        getHandler<T extends $LocalNetworkHandler>(arg0: $ResourceLocation_, arg1: $Class<T>): T;
        getConnections(arg0: $BlockPos_): $Collection<$Connection>;
        getConnections(arg0: $ConnectionPoint_): $Collection<$Connection>;
        update(arg0: $Level_): void;
        constructor(arg0: $CompoundTag_, arg1: $GlobalWireNetwork);
        constructor(arg0: $GlobalWireNetwork);
        get version(): number;
        get connectionPoints(): $Collection<$ConnectionPoint>;
        get connectors(): $Collection<$BlockPos>;
        get allHandlers(): $Collection<$LocalNetworkHandler>;
    }
    export class $IConnectionTemplate$TemplateConnection extends $Record {
        toNBT(): $CompoundTag;
        endA(): $ConnectionPoint;
        endB(): $ConnectionPoint;
        type(): $WireType;
        constructor(endA: $ConnectionPoint_, endB: $ConnectionPoint_, type: $WireType);
        constructor(arg0: $CompoundTag_);
    }
    /**
     * Values that may be interpreted as {@link $IConnectionTemplate$TemplateConnection}.
     */
    export type $IConnectionTemplate$TemplateConnection_ = { endA?: $ConnectionPoint_, endB?: $ConnectionPoint_, type?: $WireType,  } | [endA?: $ConnectionPoint_, endB?: $ConnectionPoint_, type?: $WireType, ];
    export class $Connection$CatenaryData extends $Record {
        offsetX(): number;
        offsetY(): number;
        isVertical(): boolean;
        getDeltaZ(): number;
        getDeltaY(): number;
        getDeltaX(): number;
        getPoint(arg0: number): $Vec3;
        horLength(): number;
        getSlope(arg0: number): number;
        getRenderPoint(arg0: number): $Vec3;
        vecA(): $Vec3;
        delta(): $Vec3;
        reverse(arg0: $Vec3_): $Connection$CatenaryData;
        scale(): number;
        constructor(isVertical: boolean, offsetX: number, offsetY: number, scale: number, delta: $Vec3_, horLength: number, vecA: $Vec3_);
        get vertical(): boolean;
        get deltaZ(): number;
        get deltaY(): number;
        get deltaX(): number;
    }
    /**
     * Values that may be interpreted as {@link $Connection$CatenaryData}.
     */
    export type $Connection$CatenaryData_ = { horLength?: number, vecA?: $Vec3_, offsetX?: number, offsetY?: number, delta?: $Vec3_, isVertical?: boolean, scale?: number,  } | [horLength?: number, vecA?: $Vec3_, offsetX?: number, offsetY?: number, delta?: $Vec3_, isVertical?: boolean, scale?: number, ];
    export class $Connection {
        transformPosition(arg0: number, arg1: $ConnectionPoint_): number;
        toNBT(): $CompoundTag;
        getPoint(arg0: number, arg1: $ConnectionPoint_): $Vec3;
        getEndAOffset(): $Vec3;
        getContainingNet(arg0: $GlobalWireNetwork): $LocalWireNetwork;
        isEnd(arg0: $ConnectionPoint_): boolean;
        getEndA(): $ConnectionPoint;
        getEndB(): $ConnectionPoint;
        isPositiveEnd(arg0: $ConnectionPoint_): boolean;
        getOtherEnd(arg0: $ConnectionPoint_): $ConnectionPoint;
        getCatenaryData(): $Connection$CatenaryData;
        static makeCatenaryData(arg0: $Vec3_, arg1: $Vec3_, arg2: number): $Connection$CatenaryData;
        getSlope(arg0: number, arg1: $ConnectionPoint_): number;
        getEndFor(arg0: $BlockPos_): $ConnectionPoint;
        getEnds(): $ConnectionPoint[];
        getEndBOffset(): $Vec3;
        isInternal(): boolean;
        getLength(): number;
        static RENDER_POINTS_PER_WIRE: number;
        type: $WireType;
        constructor(arg0: $WireType, arg1: $ConnectionPoint_, arg2: $ConnectionPoint_, arg3: $GlobalWireNetwork);
        constructor(arg0: $WireType, arg1: $ConnectionPoint_, arg2: $ConnectionPoint_, arg3: $Vec3_, arg4: $Vec3_);
        constructor(arg0: $CompoundTag_);
        constructor(arg0: $BlockPos_, arg1: number, arg2: number);
        get endAOffset(): $Vec3;
        get endA(): $ConnectionPoint;
        get endB(): $ConnectionPoint;
        get catenaryData(): $Connection$CatenaryData;
        get ends(): $ConnectionPoint[];
        get endBOffset(): $Vec3;
        get internal(): boolean;
        get length(): number;
    }
}
