import { $LevelReader, $ChunkPos, $LevelHeightAccessor } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $PointOfInterestSetExtended, $PointOfInterestStorageExtended } from "@package/net/caffeinemc/mods/lithium/common/world/interests";
import { $LevelChunkSection } from "@package/net/minecraft/world/level/chunk";
import { $Set_, $Set, $Optional } from "@package/java/util";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $RandomSource } from "@package/net/minecraft/util";
import { $SectionStorage, $RegionStorageInfo_, $ChunkIOErrorReporter } from "@package/net/minecraft/world/level/chunk/storage";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $Predicate, $BiConsumer, $Consumer_, $Predicate_, $BiPredicate_, $BooleanSupplier_ } from "@package/java/util/function";
import { $BlockPos, $Holder_, $Holder, $BlockPos_, $RegistryAccess, $Registry, $SectionPos } from "@package/net/minecraft/core";
import { $SectionTracker } from "@package/net/minecraft/server/level";
import { $Stream } from "@package/java/util/stream";
import { $Path_ } from "@package/java/nio/file";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Enum, $Record, $Runnable_ } from "@package/java/lang";
import { $IPOIUnloading } from "@package/com/ishland/c2me/rewrites/chunksystem/common/ducks";

declare module "@package/net/minecraft/world/entity/ai/village/poi" {
    export class $PoiType extends $Record {
        matchingStates(): $Set<$BlockState>;
        maxTickets(): number;
        validRange(): number;
        is(arg0: $BlockState_): boolean;
        static NONE: $Predicate<$Holder<$PoiType>>;
        constructor(matchingStates: $Set_<$BlockState_>, maxTickets: number, validRange: number);
    }
    /**
     * Values that may be interpreted as {@link $PoiType}.
     */
    export type $PoiType_ = RegistryTypes.PointOfInterestType | { validRange?: number, matchingStates?: $Set_<$BlockState_>, maxTickets?: number,  } | [validRange?: number, matchingStates?: $Set_<$BlockState_>, maxTickets?: number, ];
    export class $PoiManager extends $SectionStorage<$PoiSection> implements $PointOfInterestStorageExtended, $IPOIUnloading {
        getRandom(arg0: $Predicate_<any>, arg1: $Predicate_<any>, arg2: $PoiManager$Occupancy_, arg3: $BlockPos_, arg4: number, arg5: $RandomSource): $Optional<any>;
        getInRange(arg0: $Predicate_<any>, arg1: $BlockPos_, arg2: number, arg3: $PoiManager$Occupancy_): $Stream<any>;
        findClosest(arg0: $Predicate_<any>, arg1: $BlockPos_, arg2: number, arg3: $PoiManager$Occupancy_): $Optional<any>;
        findClosest(arg0: $Predicate_<any>, arg1: $Predicate_<any>, arg2: $BlockPos_, arg3: number, arg4: $PoiManager$Occupancy_): $Optional<any>;
        sectionsToVillage(arg0: $SectionPos): number;
        existsAtPosition(arg0: $ResourceKey_<$PoiType>, arg1: $BlockPos_): boolean;
        findAllWithType(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $Predicate_<$BlockPos>, arg2: $BlockPos_, arg3: number, arg4: $PoiManager$Occupancy_): $Stream<$Pair<$Holder<$PoiType>, $BlockPos>>;
        tick(arg0: $BooleanSupplier_): void;
        take(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $BiPredicate_<$Holder<$PoiType>, $BlockPos>, arg2: $BlockPos_, arg3: number): ($BlockPos) | undefined;
        findClosestWithType(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $BlockPos_, arg2: number, arg3: $PoiManager$Occupancy_): ($Pair<$Holder<$PoiType>, $BlockPos>) | undefined;
        /**
         * @deprecated
         */
        getFreeTickets(arg0: $BlockPos_): number;
        checkConsistencyWithBlocks(arg0: $SectionPos, arg1: $LevelChunkSection): void;
        getInChunk(arg0: $Predicate_<any>, arg1: $ChunkPos, arg2: $PoiManager$Occupancy_): $Stream<any>;
        getCountInRange(arg0: $Predicate_<any>, arg1: $BlockPos_, arg2: number, arg3: $PoiManager$Occupancy_): number;
        lithium$findNearestForPortalLogic(arg0: $BlockPos_, arg1: number, arg2: $Holder_<any>, arg3: $PoiManager$Occupancy_, arg4: $Predicate_<any>, arg5: $WorldBorder): $Optional<any>;
        ensureLoadedAndValid(arg0: $LevelReader, arg1: $BlockPos_, arg2: number): void;
        findAllClosestFirstWithType(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $Predicate_<$BlockPos>, arg2: $BlockPos_, arg3: number, arg4: $PoiManager$Occupancy_): $Stream<$Pair<$Holder<$PoiType>, $BlockPos>>;
        getInSquare(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $BlockPos_, arg2: number, arg3: $PoiManager$Occupancy_): $Stream<$PoiRecord>;
        release(arg0: $BlockPos_): boolean;
        exists(arg0: $BlockPos_, arg1: $Predicate_<$Holder<$PoiType>>): boolean;
        findAll(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $Predicate_<$BlockPos>, arg2: $BlockPos_, arg3: number, arg4: $PoiManager$Occupancy_): $Stream<$BlockPos>;
        remove(arg0: $BlockPos_): void;
        add(arg0: $BlockPos_, arg1: $Holder_<$PoiType>): void;
        find(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $Predicate_<$BlockPos>, arg2: $BlockPos_, arg3: number, arg4: $PoiManager$Occupancy_): ($BlockPos) | undefined;
        getType(arg0: $BlockPos_): ($Holder<$PoiType>) | undefined;
        static MAX_VILLAGE_DISTANCE: number;
        static VILLAGE_SECTION_SIZE: number;
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: $DataFixer, arg3: boolean, arg4: $RegistryAccess, arg5: $ChunkIOErrorReporter, arg6: $LevelHeightAccessor);
    }
    export interface $PoiType extends RegistryMarked<RegistryTypes.PointOfInterestTypeTag, RegistryTypes.PointOfInterestType> {}
    export class $PoiManager$DistanceTracker extends $SectionTracker {
        static SOURCE: number;
    }
    export class $PoiManager$Occupancy extends $Enum<$PoiManager$Occupancy> {
        getTest(): $Predicate<$PoiRecord>;
        static values(): $PoiManager$Occupancy[];
        static valueOf(arg0: string): $PoiManager$Occupancy;
        static IS_OCCUPIED: $PoiManager$Occupancy;
        static HAS_SPACE: $PoiManager$Occupancy;
        static ANY: $PoiManager$Occupancy;
        get test(): $Predicate<$PoiRecord>;
    }
    /**
     * Values that may be interpreted as {@link $PoiManager$Occupancy}.
     */
    export type $PoiManager$Occupancy_ = "has_space" | "is_occupied" | "any";
    export class $PoiRecord {
        static codec(arg0: $Runnable_): $Codec<$PoiRecord>;
        getPos(): $BlockPos;
        hasSpace(): boolean;
        /**
         * @deprecated
         */
        getFreeTickets(): number;
        getPoiType(): $Holder<$PoiType>;
        isOccupied(): boolean;
        constructor(arg0: $BlockPos_, arg1: $Holder_<$PoiType>, arg2: $Runnable_);
        get pos(): $BlockPos;
        get freeTickets(): number;
        get poiType(): $Holder<$PoiType>;
        get occupied(): boolean;
    }
    export class $PoiTypes {
        static registerBlockStates(arg0: $Holder_<$PoiType>, arg1: $Set_<$BlockState_>): void;
        static forState(arg0: $BlockState_): ($Holder<$PoiType>) | undefined;
        static hasPoi(arg0: $BlockState_): boolean;
        static bootstrap(arg0: $Registry<$PoiType_>): $PoiType;
        static register(arg0: $Registry<$PoiType_>, arg1: $ResourceKey_<$PoiType>, arg2: $Set_<$BlockState_>, arg3: number, arg4: number): $PoiType;
        static CARTOGRAPHER: $ResourceKey<$PoiType>;
        static MASON: $ResourceKey<$PoiType>;
        static SHEPHERD: $ResourceKey<$PoiType>;
        static ARMORER: $ResourceKey<$PoiType>;
        static TOOLSMITH: $ResourceKey<$PoiType>;
        static MEETING: $ResourceKey<$PoiType>;
        static BEE_NEST: $ResourceKey<$PoiType>;
        static LODESTONE: $ResourceKey<$PoiType>;
        static FARMER: $ResourceKey<$PoiType>;
        static FLETCHER: $ResourceKey<$PoiType>;
        static LEATHERWORKER: $ResourceKey<$PoiType>;
        static LIBRARIAN: $ResourceKey<$PoiType>;
        static CLERIC: $ResourceKey<$PoiType>;
        static FISHERMAN: $ResourceKey<$PoiType>;
        static BUTCHER: $ResourceKey<$PoiType>;
        static BEEHIVE: $ResourceKey<$PoiType>;
        static NETHER_PORTAL: $ResourceKey<$PoiType>;
        static WEAPONSMITH: $ResourceKey<$PoiType>;
        static LIGHTNING_ROD: $ResourceKey<$PoiType>;
        static HOME: $ResourceKey<$PoiType>;
        constructor();
    }
    export class $PoiSection implements $PointOfInterestSetExtended {
        static codec(arg0: $Runnable_): $Codec<$PoiSection>;
        refresh(arg0: $Consumer_<$BiConsumer<$BlockPos, $Holder<$PoiType>>>): void;
        isValid(): boolean;
        /**
         * @deprecated
         */
        getFreeTickets(arg0: $BlockPos_): number;
        getRecords(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $PoiManager$Occupancy_): $Stream<$PoiRecord>;
        lithium$collectMatchingPoints(arg0: $Predicate_<any>, arg1: $PoiManager$Occupancy_, arg2: $Consumer_<any>): void;
        release(arg0: $BlockPos_): boolean;
        exists(arg0: $BlockPos_, arg1: $Predicate_<$Holder<$PoiType>>): boolean;
        remove(arg0: $BlockPos_): void;
        add(arg0: $BlockPos_, arg1: $Holder_<$PoiType>): void;
        getType(arg0: $BlockPos_): ($Holder<$PoiType>) | undefined;
        constructor(arg0: $Runnable_);
        get valid(): boolean;
    }
}
