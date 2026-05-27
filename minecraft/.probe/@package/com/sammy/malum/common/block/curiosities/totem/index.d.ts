import { $Item } from "@package/net/minecraft/world/item";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $List } from "@package/java/util";
import { $SpiritRiteType } from "@package/com/sammy/malum/core/systems/rite";
import { $LodestoneBlockEntity } from "@package/team/lodestar/lodestone/systems/blockentity";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $DirectionProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $Object2ByteLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $LodestoneEntityBlock } from "@package/team/lodestar/lodestone/systems/block";
import { $SpiritArcanaType, $SpiritLike_ } from "@package/com/sammy/malum/core/systems/spirit/type";
import { $StateDefinition, $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block$BlockStatePairKey, $Block } from "@package/net/minecraft/world/level/block";
import { $ThreadLocal, $Enum } from "@package/java/lang";
import { $SpiritTypeProperty } from "@package/com/sammy/malum/core/systems/spirit";
import { $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/sammy/malum/common/block/curiosities/totem" {
    export class $TotemBaseBlockEntity extends $LodestoneBlockEntity {
        isActiveOrAssembling(): boolean;
        canTriggerRite(): boolean;
        triggerRite(arg0: $ServerLevel): void;
        updateRite(arg0: $ServerLevel): void;
        addTotemPole(arg0: $ServerLevel, arg1: $TotemPoleBlockEntity): void;
        setTotemPoleState(arg0: $ServerLevel, arg1: $TotemPoleBlockEntity$TotemPoleState_): void;
        getFirstTotemPole(): ($TotemPoleBlockEntity) | undefined;
        getTotemPoles(arg0: $ServerLevel): $List<$TotemPoleBlockEntity>;
        getSpirits(arg0: $ServerLevel): $List<$SpiritArcanaType>;
        getRite(): $SpiritRiteType;
        getTotemHeight(): number;
        getTotemDirection(): $Direction;
        receiveSparkUpdate(): void;
        getState(): $TotemBaseBlockEntity$TotemBaseState;
        setState(arg0: $ServerLevel, arg1: $TotemBaseBlockEntity$TotemBaseState_): void;
        corrupted: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<$TotemBaseBlockEntity>, arg1: $BlockPos_, arg2: $BlockState_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get activeOrAssembling(): boolean;
        get firstTotemPole(): ($TotemPoleBlockEntity) | undefined;
        get rite(): $SpiritRiteType;
        get totemHeight(): number;
        get totemDirection(): $Direction;
    }
    export class $TotemPoleBlockEntity extends $LodestoneBlockEntity {
        isSoulwood(): boolean;
        getLogBlock(): $Block;
        getGlowDelta(): number;
        toggleVisuals(arg0: $ServerLevel): void;
        beginCharging(arg0: $ServerLevel, arg1: $TotemBaseBlockEntity, arg2: number): void;
        asBlock(): $TotemPoleBlock<never>;
        getSpirit(): $SpiritArcanaType;
        brieflyActivate(arg0: $ServerLevel): void;
        strip(arg0: $ServerLevel): void;
        getState(): $TotemPoleBlockEntity$TotemPoleState;
        setState(arg0: $TotemPoleBlockEntity$TotemPoleState_): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<$TotemPoleBlockEntity>, arg1: $BlockPos_, arg2: $BlockState_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get soulwood(): boolean;
        get logBlock(): $Block;
        get glowDelta(): number;
        get spirit(): $SpiritArcanaType;
    }
    export class $TotemPoleBlock<T extends $TotemPoleBlockEntity> extends $LodestoneEntityBlock<T> {
        hasAnalogOutputSignal(arg0: $BlockState_): boolean;
        isSoulwood(): boolean;
        getLogBlock(): $Block;
        static createTotemPoleState(arg0: $TotemPoleBlock<never>, arg1: $Direction_, arg2: $SpiritLike_): $BlockState;
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
        static SPIRIT_TYPE: $SpiritTypeProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static HORIZONTAL_FACING: $DirectionProperty;
        constructor(arg0: $BlockBehaviour$Properties, arg1: $Supplier_<$Block>, arg2: boolean);
        get soulwood(): boolean;
        get logBlock(): $Block;
    }
    export class $TotemBaseBlockEntity$TotemBaseState extends $Enum<$TotemBaseBlockEntity$TotemBaseState> {
        static values(): $TotemBaseBlockEntity$TotemBaseState[];
        static valueOf(arg0: string): $TotemBaseBlockEntity$TotemBaseState;
        static ACTIVE: $TotemBaseBlockEntity$TotemBaseState;
        static INACTIVE: $TotemBaseBlockEntity$TotemBaseState;
        static ASSEMBLING: $TotemBaseBlockEntity$TotemBaseState;
    }
    /**
     * Values that may be interpreted as {@link $TotemBaseBlockEntity$TotemBaseState}.
     */
    export type $TotemBaseBlockEntity$TotemBaseState_ = "inactive" | "assembling" | "active";
    export class $TotemPoleBlockEntity$TotemPoleState extends $Enum<$TotemPoleBlockEntity$TotemPoleState> {
        static values(): $TotemPoleBlockEntity$TotemPoleState[];
        static valueOf(arg0: string): $TotemPoleBlockEntity$TotemPoleState;
        static ACTIVE: $TotemPoleBlockEntity$TotemPoleState;
        static INACTIVE: $TotemPoleBlockEntity$TotemPoleState;
        static VISUAL_ONLY: $TotemPoleBlockEntity$TotemPoleState;
        static CHARGING: $TotemPoleBlockEntity$TotemPoleState;
    }
    /**
     * Values that may be interpreted as {@link $TotemPoleBlockEntity$TotemPoleState}.
     */
    export type $TotemPoleBlockEntity$TotemPoleState_ = "inactive" | "visual_only" | "charging" | "active";
}
