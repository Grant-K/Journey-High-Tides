import { $MapCodec_, $Codec } from "@package/com/mojang/serialization";
import { $GearPropertyMap } from "@package/net/silentchaos512/gear/api/property";
import { $ItemStack_, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $CraftingInput } from "@package/net/minecraft/world/item/crafting";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $CompoundPartItem } from "@package/net/silentchaos512/gear/item";
import { $List, $AbstractList, $Collection_, $List_ } from "@package/java/util";
import { $GearType_, $GearType } from "@package/net/silentchaos512/gear/api/item";
import { $Predicate_, $Supplier_, $Function_, $Function } from "@package/java/util/function";
import { $Serializer } from "@package/net/silentchaos512/gear/util";
import { $Material } from "@package/net/silentchaos512/gear/api/material";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $PartInstance } from "@package/net/silentchaos512/gear/gear/part";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $MaterialInstance } from "@package/net/silentchaos512/gear/gear/material";
import { $DataResource, $GearComponent } from "@package/net/silentchaos512/gear/api/util";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/silentchaos512/gear/api/part" {
    export interface $PartSerializer<T> extends RegistryMarked<RegistryTypes.SilentgearPartSerializerTag, RegistryTypes.SilentgearPartSerializer> {}
    export class $PartList extends $AbstractList<$PartInstance> {
        getParts(arg0: $Predicate_<$PartInstance>): $List<$PartInstance>;
        mutableCopy(): $PartList;
        getPropertyModifiersFromParts(arg0: $GearType_): $GearPropertyMap;
        getMains(): $List<$PartInstance>;
        getRods(): $List<$PartInstance>;
        getTips(): $List<$PartInstance>;
        toSortedList(): $List<$PartInstance>;
        getPartsOfType(arg0: $PartType_): $List<$PartInstance>;
        static immutable(...arg0: $PartInstance[]): $PartList$Immutable;
        static immutable(arg0: $Collection_<$PartInstance>): $PartList$Immutable;
        add(arg0: number, arg1: $PartInstance): void;
        static of(...arg0: $PartInstance[]): $PartList;
        static of(arg0: $Collection_<$PartInstance>): $PartList;
        static empty(): $PartList;
        set(arg0: number, arg1: $PartInstance): $PartInstance;
        static CODEC: $Codec<$PartList>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PartList>;
        get mains(): $List<$PartInstance>;
        get rods(): $List<$PartInstance>;
        get tips(): $List<$PartInstance>;
    }
    export class $PartSerializer<T extends $GearPart> extends $Serializer<$RegistryFriendlyByteBuf, T> {
        constructor(arg0: $MapCodec_<T>, arg1: $StreamCodec_<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $PartSerializer}.
     */
    export type $PartSerializer_<T> = RegistryTypes.SilentgearPartSerializer;
    export interface $PartType extends RegistryMarked<RegistryTypes.SilentgearPartTypeTag, RegistryTypes.SilentgearPartType> {}
    export class $PartType$Builder {
        isRemovable(arg0: boolean): $PartType$Builder;
        isUpgrade(arg0: boolean): $PartType$Builder;
        maxPerItem(arg0: number): $PartType$Builder;
        compoundPartItem(arg0: $Function_<$GearType, ($CompoundPartItem) | undefined>): $PartType$Builder;
        compoundPartItem(arg0: $Supplier_<$CompoundPartItem>): $PartType$Builder;
        static builder(): $PartType$Builder;
    }
    export class $PartType extends $Record {
        getDisplayName(): $MutableComponent;
        compoundParts(): $Function<$GearType, ($CompoundPartItem) | undefined>;
        getCompoundPartItem(arg0: $GearType_): ($CompoundPartItem) | undefined;
        makeCompoundPart(arg0: $GearType_, arg1: $DataResource<$Material>): ($PartInstance) | undefined;
        makeCompoundPart(arg0: $GearType_, arg1: $MaterialInstance): ($PartInstance) | undefined;
        getCompoundPartId(arg0: $GearType_): $ResourceLocation;
        isRemovable(): boolean;
        isUpgrade(): boolean;
        maxPerItem(): number;
        is(arg0: $Supplier_<$PartType>): boolean;
        static CODEC: $Codec<$PartType>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PartType>;
        constructor(isRemovable: boolean, isUpgrade: boolean, maxPerItem: number, compoundParts: $Function_<$GearType, ($CompoundPartItem) | undefined>);
        constructor(arg0: $PartType$Builder);
        get displayName(): $MutableComponent;
        get removable(): boolean;
        get upgrade(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PartType}.
     */
    export type $PartType_ = RegistryTypes.SilentgearPartType | { isRemovable?: boolean, isUpgrade?: boolean, maxPerItem?: number, compoundParts?: $Function_<$GearType, ($CompoundPartItem) | undefined>,  } | [isRemovable?: boolean, isUpgrade?: boolean, maxPerItem?: number, compoundParts?: $Function_<$GearType, ($CompoundPartItem) | undefined>, ];
    export class $GearPart {
    }
    export interface $GearPart extends $GearComponent<$PartInstance> {
        getColor(arg0: $PartInstance, arg1: $GearType_, arg2: number, arg3: number): number;
        isVisible(): boolean;
        getPackName(): string;
        getSerializer(): $PartSerializer<never>;
        getDisplayName(arg0: $PartInstance): $Component;
        getMaterials(arg0: $PartInstance): $List<$MaterialInstance>;
        addInformation(arg0: $PartInstance, arg1: $ItemStack_, arg2: $List_<$Component_>, arg3: $TooltipFlag): void;
        retainData(arg0: $GearPart): void;
        getDisplayNamePrefix(arg0: $PartInstance, arg1: $ItemStack_): $Component;
        getModelKey(arg0: $PartInstance): string;
        isCraftingAllowed(arg0: $PartInstance, arg1: $GearType_): boolean;
        isCraftingAllowed(arg0: $PartInstance, arg1: $PartType_, arg2: $GearType_, arg3: $CraftingInput): boolean;
        getGearType(): $GearType;
        getPrimaryMaterial(arg0: $PartInstance): $MaterialInstance;
        getSalvageLossRate(arg0: $PartInstance, arg1: $ItemStack_, arg2: number): number;
        onGearDamaged(arg0: $PartInstance, arg1: $ItemStack_, arg2: number): void;
        getMaterialName(arg0: $PartInstance, arg1: $ItemStack_): $Component;
        randomizeData(arg0: $GearType_, arg1: number): $PartInstance;
        canAddToGear(arg0: $ItemStack_, arg1: $PartInstance): boolean;
        replacesExistingInPosition(arg0: $PartInstance): boolean;
        onAddToGear(arg0: $ItemStack_, arg1: $PartInstance): void;
        onRemoveFromGear(arg0: $ItemStack_, arg1: $PartInstance): void;
        getType(): $PartType;
        get visible(): boolean;
        get packName(): string;
        get serializer(): $PartSerializer<never>;
        get gearType(): $GearType;
        get type(): $PartType;
    }
    export class $PartList$Immutable extends $PartList {
        add(arg0: $PartInstance): boolean;
        static CODEC: $Codec<$PartList>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PartList>;
    }
}
