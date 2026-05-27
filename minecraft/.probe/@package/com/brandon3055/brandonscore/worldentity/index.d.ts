import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Supplier_ } from "@package/java/util/function";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $UUID } from "@package/java/util";

declare module "@package/com/brandon3055/brandonscore/worldentity" {
    export interface $WorldEntityType<T> extends RegistryMarked<RegistryTypes.BrandonscoreWorldEntityTag, RegistryTypes.BrandonscoreWorldEntity> {}
    export class $WorldEntity {
        isRemoved(): boolean;
        removeEntity(): void;
        static readWorldEntity(arg0: $CompoundTag_): $WorldEntity;
        getLevel(): $Level;
        setLevel(arg0: $Level_): void;
        getUniqueID(): $UUID;
        onLoad(): void;
        write(arg0: $CompoundTag_): void;
        read(arg0: $CompoundTag_): void;
        getType(): $WorldEntityType<never>;
        get removed(): boolean;
        get uniqueID(): $UUID;
        get type(): $WorldEntityType<never>;
    }
    export class $WorldEntityType<T extends $WorldEntity> {
        create(): T;
        static getId(arg0: $WorldEntityType_<never>): $ResourceLocation;
        constructor(arg0: $Supplier_<T>);
    }
    /**
     * Values that may be interpreted as {@link $WorldEntityType}.
     */
    export type $WorldEntityType_<T> = RegistryTypes.BrandonscoreWorldEntity;
}
