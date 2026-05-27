import { $JigsawJunction } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $ObjectListIterator } from "@package/it/unimi/dsi/fastutil/objects";
import { $EnhancedTerrainAdaptation } from "@package/com/craisinlord/integrated_api/world/terrainadaptation";
import { $Record } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";

declare module "@package/com/craisinlord/integrated_api/world/terrainadaptation/beardifier" {
    export class $EnhancedBeardifierData {
    }
    export interface $EnhancedBeardifierData {
        getEnhancedRigidIterator(): $ObjectListIterator<$EnhancedBeardifierRigid>;
        setEnhancedRigidIterator(arg0: $ObjectListIterator<$EnhancedBeardifierRigid_>): void;
        getEnhancedJunctionIterator(): $ObjectListIterator<$EnhancedJigsawJunction>;
        setEnhancedJunctionIterator(arg0: $ObjectListIterator<$EnhancedJigsawJunction_>): void;
    }
    export class $EnhancedJigsawJunction extends $Record {
        jigsawJunction(): $JigsawJunction;
        pieceTerrainAdaptation(): $EnhancedTerrainAdaptation;
        constructor(jigsawJunction: $JigsawJunction, pieceTerrainAdaptation: $EnhancedTerrainAdaptation);
    }
    /**
     * Values that may be interpreted as {@link $EnhancedJigsawJunction}.
     */
    export type $EnhancedJigsawJunction_ = { jigsawJunction?: $JigsawJunction, pieceTerrainAdaptation?: $EnhancedTerrainAdaptation,  } | [jigsawJunction?: $JigsawJunction, pieceTerrainAdaptation?: $EnhancedTerrainAdaptation, ];
    export class $EnhancedBeardifierRigid extends $Record {
        pieceTerrainAdaptation(): $EnhancedTerrainAdaptation;
        pieceBoundingBox(): $BoundingBox;
        pieceGroundLevelDelta(): number;
        constructor(pieceBoundingBox: $BoundingBox, pieceTerrainAdaptation: $EnhancedTerrainAdaptation, pieceGroundLevelDelta: number);
    }
    /**
     * Values that may be interpreted as {@link $EnhancedBeardifierRigid}.
     */
    export type $EnhancedBeardifierRigid_ = { pieceBoundingBox?: $BoundingBox, pieceTerrainAdaptation?: $EnhancedTerrainAdaptation, pieceGroundLevelDelta?: number,  } | [pieceBoundingBox?: $BoundingBox, pieceTerrainAdaptation?: $EnhancedTerrainAdaptation, pieceGroundLevelDelta?: number, ];
}
