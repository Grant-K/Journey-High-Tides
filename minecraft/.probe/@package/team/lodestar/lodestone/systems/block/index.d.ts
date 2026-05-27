import { $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Item } from "@package/net/minecraft/world/item";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LodestoneBlockEntity } from "@package/team/lodestar/lodestone/systems/blockentity";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos_, $IdMapper } from "@package/net/minecraft/core";
import { $Object2ByteLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $StateDefinition, $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block$BlockStatePairKey, $Block_, $EntityBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $ThreadLocal } from "@package/java/lang";
import { $BlockEntityType, $BlockEntityTicker, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/team/lodestar/lodestone/systems/block" {
    export class $LodestoneEntityBlock<T extends $LodestoneBlockEntity> extends $Block implements $EntityBlock {
        entityInside(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Entity): void;
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        setBlockEntity(arg0: $Supplier_<$BlockEntityType<$Block>>): $LodestoneEntityBlock<$Block>;
        getTicker<Y extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<Y>): $BlockEntityTicker<Y>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        hasTileEntity(arg0: $BlockState_): boolean;
        onBlockBroken(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Player): void;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OCCLUSION_CACHE: $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        descriptionId: string;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(arg0: $BlockBehaviour$Properties);
        set blockEntity(value: $Supplier_<$BlockEntityType<$Block>>);
    }
}
