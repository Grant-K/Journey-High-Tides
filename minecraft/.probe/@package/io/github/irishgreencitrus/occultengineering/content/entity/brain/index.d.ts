import { $BrainActivityGroup } from "@package/net/tslat/smartbrainlib/api/core";
import { $Function_ } from "@package/java/util/function";
import { $ExtendedSensor } from "@package/net/tslat/smartbrainlib/api/core/sensor";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $List } from "@package/java/util";
import { $Class } from "@package/java/lang";

declare module "@package/io/github/irishgreencitrus/occultengineering/content/entity/brain" {
    export class $DynamicBrain<T extends $LivingEntity> implements $INBTSerializable<$CompoundTag> {
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        onBrainSetup(arg0: $Brain<$CompoundTag_>): void;
        onCleanup(): void;
        tick(): void;
        getCoreTasks(): $BrainActivityGroup<$CompoundTag>;
        getIdleTasks(): $BrainActivityGroup<$CompoundTag>;
        getSensors(): $List<$ExtendedSensor<$CompoundTag>>;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        initialised: boolean;
        brainID: $ResourceLocation;
        entity: $CompoundTag;
        constructor(arg0: $CompoundTag_);
        get coreTasks(): $BrainActivityGroup<$CompoundTag>;
        get idleTasks(): $BrainActivityGroup<$CompoundTag>;
        get sensors(): $List<$ExtendedSensor<$CompoundTag>>;
    }
    export class $DynamicBrainFactory<T extends $LivingEntity> {
        canCreateFor(arg0: $Class<never>): boolean;
        create(arg0: $Entity): $DynamicBrain<$LivingEntity>;
        create(arg0: T): $DynamicBrain<T>;
        constructor(arg0: $Function_<T, $DynamicBrain<T>>, arg1: $Class<T>);
    }
    /**
     * Values that may be interpreted as {@link $DynamicBrainFactory}.
     */
    export type $DynamicBrainFactory_<T> = RegistryTypes.OccultengineeringBrainFactory;
    export interface $DynamicBrainFactory<T> extends RegistryMarked<RegistryTypes.OccultengineeringBrainFactoryTag, RegistryTypes.OccultengineeringBrainFactory> {}
}
