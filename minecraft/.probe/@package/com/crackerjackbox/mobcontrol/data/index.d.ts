import { $Serializable } from "@package/java/io";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $ArrayList } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $IWeightedGroup } from "@package/com/crackerjackbox/mobcontrol/iface";

declare module "@package/com/crackerjackbox/mobcontrol/data" {
    export class $WeightedEffect extends $Record implements $Serializable, $IWeightedGroup {
        particles(): boolean;
        ambient(): boolean;
        durationFrom(): number;
        durationTo(): number;
        amplifierFrom(): number;
        amplifierTo(): number;
        weight(): number;
        group(): string;
        key(): string;
        constructor(key: string, group: string, weight: number, durationFrom: number, durationTo: number, amplifierFrom: number, amplifierTo: number, ambient: boolean, particles: boolean);
    }
    /**
     * Values that may be interpreted as {@link $WeightedEffect}.
     */
    export type $WeightedEffect_ = { amplifierTo?: number, key?: string, weight?: number, durationFrom?: number, amplifierFrom?: number, durationTo?: number, particles?: boolean, group?: string, ambient?: boolean,  } | [amplifierTo?: number, key?: string, weight?: number, durationFrom?: number, amplifierFrom?: number, durationTo?: number, particles?: boolean, group?: string, ambient?: boolean, ];
    export class $MobSpawn {
        copy(): $MobSpawn;
        reason: string;
        dayCheck: number;
        mountSpawnCount: number;
        compoundTag: $CompoundTag;
        constructor(arg0: string);
    }
    export class $WeightedItem extends $Record implements $Serializable, $IWeightedGroup {
        quantityTo(): number;
        quantityFrom(): number;
        drop(): number;
        weight(): number;
        group(): string;
        key(): string;
        constructor(key: string, group: string, weight: number, quantityFrom: number, quantityTo: number, drop: number);
    }
    /**
     * Values that may be interpreted as {@link $WeightedItem}.
     */
    export type $WeightedItem_ = { group?: string, quantityTo?: number, quantityFrom?: number, weight?: number, drop?: number, key?: string,  } | [group?: string, quantityTo?: number, quantityFrom?: number, weight?: number, drop?: number, key?: string, ];
    export class $Weighted<T extends $IWeightedGroup> implements $Serializable {
        getWeightedGroupRecords(): $ArrayList<T>;
        getWeighted(): T;
        getWeighted(arg0: string): T;
        any(): boolean;
        clear(): void;
        add(arg0: T): boolean;
        constructor();
        get weightedGroupRecords(): $ArrayList<T>;
    }
}
