import { $BrainActivityGroup } from "@package/net/tslat/smartbrainlib/api/core";
import { $ExtendedSensor } from "@package/net/tslat/smartbrainlib/api/core/sensor";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityDimensions_, $EntityDimensions, $Entity, $Pose_ } from "@package/net/minecraft/world/entity";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $List } from "@package/java/util";
import { $SpiritEntity } from "@package/com/klikli_dev/occultism/common/entity/spirit";
import { $Function_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $ItemProcessingJobEvent } from "@package/com/klikli_dev/occultism/common/entity/job/event";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SpiritJobClient } from "@package/com/klikli_dev/occultism/client/entities";
export * as event from "@package/com/klikli_dev/occultism/common/entity/job/event";

declare module "@package/com/klikli_dev/occultism/common/entity/job" {
    export class $SpiritJob implements $INBTSerializable<$CompoundTag> {
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        getDimensions(arg0: $Pose_, arg1: $EntityDimensions_): $EntityDimensions;
        writeJobToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        readJobFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getFactoryID(): $ResourceLocation;
        setFactoryId(arg0: $ResourceLocation_): void;
        getCoreTasks(): $BrainActivityGroup<$SpiritEntity>;
        getIdleTasks(): $BrainActivityGroup<$SpiritEntity>;
        handleAdditionalBrainSetup(arg0: $Brain<$SpiritEntity>): void;
        canPickupItem(arg0: $ItemEntity): boolean;
        getItemsToPickUp(): $List<$Ingredient>;
        onChangeWorkArea(): void;
        cleanup(): void;
        getSensors(): $List<$ExtendedSensor<$SpiritEntity>>;
        update(): void;
        static from(arg0: $SpiritEntity, arg1: $CompoundTag_): $SpiritJob;
        init(): void;
        factoryId: $ResourceLocation;
        entity: $SpiritEntity;
        constructor(arg0: $SpiritEntity);
        get factoryID(): $ResourceLocation;
        get coreTasks(): $BrainActivityGroup<$SpiritEntity>;
        get idleTasks(): $BrainActivityGroup<$SpiritEntity>;
        get itemsToPickUp(): $List<$Ingredient>;
        get sensors(): $List<$ExtendedSensor<$SpiritEntity>>;
    }
    export class $TraderJob$TraderJobEvent extends $ItemProcessingJobEvent {
        constructor(arg0: $Entity, arg1: $ItemStack_, arg2: $ItemStack_);
    }
    export class $SmelterJob$SmelterJobEvent extends $ItemProcessingJobEvent {
        constructor(arg0: $Entity, arg1: $ItemStack_, arg2: $ItemStack_);
    }
    export interface $SpiritJobFactory extends RegistryMarked<RegistryTypes.OccultismSpiritJobFactoriesTag, RegistryTypes.OccultismSpiritJobFactories> {}
    export class $CrusherJob$CrusherJobEvent extends $ItemProcessingJobEvent {
        constructor(arg0: $Entity, arg1: $ItemStack_, arg2: $ItemStack_);
    }
    export class $SpiritJobFactory {
        create(arg0: $SpiritEntity): $SpiritJob;
        client(): $SpiritJobClient;
        constructor(arg0: $Function_<$SpiritEntity, $SpiritJob>, arg1: $SpiritJobClient);
    }
    /**
     * Values that may be interpreted as {@link $SpiritJobFactory}.
     */
    export type $SpiritJobFactory_ = RegistryTypes.OccultismSpiritJobFactories;
    export class $CrystallizerJob$CrystallizerJobEvent extends $ItemProcessingJobEvent {
        constructor(arg0: $Entity, arg1: $ItemStack_, arg2: $ItemStack_);
    }
}
