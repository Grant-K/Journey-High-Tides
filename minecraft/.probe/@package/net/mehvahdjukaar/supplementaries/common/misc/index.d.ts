import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockSource } from "@package/net/minecraft/core/dispenser";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $DispenserBlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/mehvahdjukaar/supplementaries/common/misc" {
    export class $IMovingBlockSource {
        static create(level: $ServerLevel, entity: $Entity, be: $DispenserBlockEntity): $BlockSource;
    }
    export interface $IMovingBlockSource {
        supp$setEntity(arg0: $Entity): void;
        supp$getEntity(): $Entity;
    }
}
