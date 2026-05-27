import { $IWithData, $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $IHasTranslationKey, $IHasTextComponent } from "@package/mekanism/api/text";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $AutomationType_, $Action_, $IContentsListener } from "@package/mekanism/api";
import { $List, $List_, $Collection, $Map } from "@package/java/util";
import { $ToDoubleFunction_, $Function_, $ToIntBiFunction_, $Consumer_, $Predicate_, $BiFunction_, $ToLongBiFunction_, $ToDoubleBiFunction_, $ToLongFunction_, $ToIntFunction_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $Holder_, $HolderSet_, $Holder, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $Stream } from "@package/java/util/stream";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Class } from "@package/java/lang";
import { $ChemicalAttribute, $ChemicalAttributeValidator, $IChemicalAttributeContainer } from "@package/mekanism/api/chemical/attribute";
import { $IChemicalProvider } from "@package/mekanism/api/providers";
import { $IChemicalAttribute } from "@package/mekanism/api/datamaps/chemical/attribute";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as attribute from "@package/mekanism/api/chemical/attribute";

declare module "@package/mekanism/api/chemical" {
    export class $ChemicalBuilder {
        /**
         * @deprecated
         */
        ore(arg0: $ResourceLocation_): $ChemicalBuilder;
        /**
         * @deprecated
         */
        ore(arg0: $TagKey_<$Item>): $ChemicalBuilder;
        tint(arg0: number): $ChemicalBuilder;
        /**
         * @deprecated
         */
        getOreTag(): $TagKey<$Item>;
        /**
         * @deprecated
         */
        gaseous(): $ChemicalBuilder;
        /**
         * @deprecated
         */
        getAttributeMap(): $Map<$Class<$ChemicalAttribute>, $ChemicalAttribute>;
        /**
         * @deprecated
         */
        isGaseous(): boolean;
        static cleanSlurry(): $ChemicalBuilder;
        static dirtySlurry(): $ChemicalBuilder;
        getTint(): number;
        static infuseType(): $ChemicalBuilder;
        static pigment(): $ChemicalBuilder;
        getTexture(): $ResourceLocation;
        static builder(): $ChemicalBuilder;
        static builder(arg0: $ResourceLocation_): $ChemicalBuilder;
        /**
         * @deprecated
         */
        with(arg0: $ChemicalAttribute): $ChemicalBuilder;
        get oreTag(): $TagKey<$Item>;
        get attributeMap(): $Map<$Class<$ChemicalAttribute>, $ChemicalAttribute>;
        get texture(): $ResourceLocation;
    }
    export class $ChemicalStack implements $IHasTextComponent, $IHasTranslationKey, $IChemicalAttributeContainer<$ChemicalStack>, $IWithData<$Chemical> {
        getAmount(): number;
        getTags(): $Stream<$TagKey<$Chemical>>;
        saveOptional(arg0: $HolderLookup$Provider): $Tag;
        appendHoverText(arg0: $Item$TooltipContext, arg1: $List_<$Component_>, arg2: $TooltipFlag): void;
        getTranslationKey(): string;
        copyAndClear(): $ChemicalStack;
        static parseOptional(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $ChemicalStack;
        setAmount(arg0: number): void;
        getData<T>(arg0: $DataMapType<$Chemical_, T>): T;
        /**
         * @deprecated
         */
        has(arg0: $Class<$ChemicalAttribute>): boolean;
        copyWithAmount(arg0: number): $ChemicalStack;
        static fixedAmountCodec(arg0: number): $Codec<$ChemicalStack>;
        getTextComponent(): $Component;
        getChemicalTint(): number;
        getChemicalHolder(): $Holder<$Chemical>;
        getRadioactivity(): number;
        isRadioactive(): boolean;
        getChemical(): $Chemical;
        /**
         * @deprecated
         */
        hasLegacy(arg0: $Class<$ChemicalAttribute>): boolean;
        /**
         * @deprecated
         */
        getLegacy<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>): ATTRIBUTE;
        /**
         * @deprecated
         */
        getAttributeTypes(): $Collection<$Class<$ChemicalAttribute>>;
        /**
         * @deprecated
         */
        getTypeRegistryName(): $ResourceLocation;
        getChemicalColorRepresentation(): number;
        static isSameChemical(arg0: $ChemicalStack, arg1: $ChemicalStack): boolean;
        is(arg0: $Holder_<$Chemical>): boolean;
        is(arg0: $Chemical_): boolean;
        is(arg0: $Predicate_<$Holder<$Chemical>>): boolean;
        is(arg0: $HolderSet_<$Chemical>): boolean;
        is(arg0: $TagKey_<$Chemical>): boolean;
        /**
         * @deprecated
         */
        getAttributes(): $Collection<$ChemicalAttribute>;
        grow(arg0: number): void;
        limitSize(arg0: number): void;
        shrink(arg0: number): void;
        /**
         * @deprecated
         */
        get<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>): ATTRIBUTE;
        isEmpty(): boolean;
        split(arg0: number): $ChemicalStack;
        save(arg0: $HolderLookup$Provider): $Tag;
        save(arg0: $HolderLookup$Provider, arg1: $Tag_): $Tag;
        static parse(arg0: $HolderLookup$Provider, arg1: $Tag_): ($ChemicalStack) | undefined;
        copy(): $ChemicalStack;
        /**
         * @deprecated
         */
        ifAttributePresent<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $Consumer_<ATTRIBUTE>): void;
        /**
         * @deprecated
         */
        mapAttributeToInt<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToIntFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToInt<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToIntBiFunction_<$ChemicalStack, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToLong<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToLongFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToLong<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToLongBiFunction_<$ChemicalStack, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToDouble<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToDoubleBiFunction_<$ChemicalStack, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToDouble<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToDoubleFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttribute<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class<ATTRIBUTE>, arg1: $Function_<ATTRIBUTE, V>, arg2: V): V;
        /**
         * @deprecated
         */
        mapAttribute<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class<ATTRIBUTE>, arg1: $BiFunction_<$ChemicalStack, ATTRIBUTE, V>, arg2: V): V;
        static LENIENT_OPTIONAL_CODEC: $Codec<$ChemicalStack>;
        static CODEC: $Codec<$ChemicalStack>;
        /**
         * @deprecated
         */
        static CHEMICAL_NON_EMPTY_CODEC: $Codec<$Chemical>;
        static MAP_CODEC: $MapCodec<$ChemicalStack>;
        static OPTIONAL_CODEC: $Codec<$ChemicalStack>;
        static CHEMICAL_NON_EMPTY_HOLDER_CODEC: $Codec<$Holder<$Chemical>>;
        static EMPTY: $ChemicalStack;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChemicalStack>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChemicalStack>;
        constructor(arg0: $Holder_<$Chemical>, arg1: number);
        /**
         * @deprecated
         */
        constructor(arg0: $Chemical_, arg1: number);
        get tags(): $Stream<$TagKey<$Chemical>>;
        get translationKey(): string;
        get textComponent(): $Component;
        get chemicalTint(): number;
        get chemicalHolder(): $Holder<$Chemical>;
        get radioactivity(): number;
        get radioactive(): boolean;
        get chemical(): $Chemical;
        get attributeTypes(): $Collection<$Class<$ChemicalAttribute>>;
        get typeRegistryName(): $ResourceLocation;
        get chemicalColorRepresentation(): number;
        get attributes(): $Collection<$ChemicalAttribute>;
        get empty(): boolean;
    }
    export class $Chemical implements $IChemicalProvider, $IChemicalAttributeContainer<$Chemical> {
        /**
         * @deprecated
         */
        getTags(): $Stream<$TagKey<$Chemical>>;
        updateFromDataMap(arg0: $Holder_<$Chemical>): void;
        /**
         * @deprecated
         */
        saveOptional(arg0: $HolderLookup$Provider): $Tag;
        getTranslationKey(): string;
        /**
         * @deprecated
         */
        static parseOptional(arg0: $HolderLookup$Provider, arg1: string): $Chemical;
        /**
         * @deprecated
         */
        has(arg0: $Class<$ChemicalAttribute>): boolean;
        /**
         * @deprecated
         */
        addAttribute(arg0: $ChemicalAttribute): void;
        /**
         * @deprecated
         */
        getOreTag(): $TagKey<$Item>;
        getTextComponent(): $Component;
        static parseOptionalHolder(arg0: $HolderLookup$Provider, arg1: string): $Holder<$Chemical>;
        getRadioactivity(): number;
        hasAttributesWithValidation(): boolean;
        /**
         * @deprecated
         */
        isGaseous(): boolean;
        isRadioactive(): boolean;
        /**
         * @deprecated
         */
        getAsHolder(): $Holder<$Chemical>;
        /**
         * @deprecated
         */
        isGaseousLegacy(): boolean;
        /**
         * @deprecated
         */
        isEmptyType(): boolean;
        /**
         * @deprecated
         */
        getLegacyAttributes(): $Collection<$ChemicalAttribute>;
        static parseHolder(arg0: $HolderLookup$Provider, arg1: $Tag_): ($Holder<$Chemical>) | undefined;
        getTint(): number;
        getChemical(): $Chemical;
        /**
         * @deprecated
         */
        hasLegacy(arg0: $Class<$ChemicalAttribute>): boolean;
        /**
         * @deprecated
         */
        getLegacy<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>): ATTRIBUTE;
        getModernAttributes(): $List<$IChemicalAttribute>;
        /**
         * @deprecated
         */
        getAttributeTypes(): $Collection<$Class<$ChemicalAttribute>>;
        getColorRepresentation(): number;
        /**
         * @deprecated
         */
        is(arg0: $TagKey_<$Chemical>): boolean;
        /**
         * @deprecated
         */
        getAttributes(): $Collection<$ChemicalAttribute>;
        getIcon(): $ResourceLocation;
        /**
         * @deprecated
         */
        get<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>): ATTRIBUTE;
        /**
         * @deprecated
         */
        save(arg0: $HolderLookup$Provider): $Tag;
        /**
         * @deprecated
         */
        static parse(arg0: $HolderLookup$Provider, arg1: $Tag_): ($Chemical) | undefined;
        getRegistryName(): $ResourceLocation;
        getStack(arg0: number): $ChemicalStack;
        /**
         * @deprecated
         */
        ifAttributePresent<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $Consumer_<ATTRIBUTE>): void;
        /**
         * @deprecated
         */
        mapAttributeToInt<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToIntFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToInt<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToIntBiFunction_<$Chemical, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToLong<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToLongFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToLong<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToLongBiFunction_<$Chemical, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToDouble<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToDoubleBiFunction_<$Chemical, ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttributeToDouble<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class<ATTRIBUTE>, arg1: $ToDoubleFunction_<ATTRIBUTE>): number;
        /**
         * @deprecated
         */
        mapAttribute<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class<ATTRIBUTE>, arg1: $Function_<ATTRIBUTE, V>, arg2: V): V;
        /**
         * @deprecated
         */
        mapAttribute<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class<ATTRIBUTE>, arg1: $BiFunction_<$Chemical, ATTRIBUTE, V>, arg2: V): V;
        getName(): string;
        /**
         * @deprecated
         */
        static CODEC: $Codec<$Chemical>;
        static HOLDER_CODEC: $Codec<$Holder<$Chemical>>;
        static HOLDER_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Chemical>>;
        /**
         * @deprecated
         */
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Chemical>;
        constructor(arg0: $ChemicalBuilder);
        get tags(): $Stream<$TagKey<$Chemical>>;
        get translationKey(): string;
        get oreTag(): $TagKey<$Item>;
        get textComponent(): $Component;
        get radioactivity(): number;
        get gaseous(): boolean;
        get radioactive(): boolean;
        get asHolder(): $Holder<$Chemical>;
        get gaseousLegacy(): boolean;
        get emptyType(): boolean;
        get legacyAttributes(): $Collection<$ChemicalAttribute>;
        get tint(): number;
        get chemical(): $Chemical;
        get modernAttributes(): $List<$IChemicalAttribute>;
        get attributeTypes(): $Collection<$Class<$ChemicalAttribute>>;
        get colorRepresentation(): number;
        get attributes(): $Collection<$ChemicalAttribute>;
        get icon(): $ResourceLocation;
        get registryName(): $ResourceLocation;
        get name(): string;
    }
    /**
     * Values that may be interpreted as {@link $Chemical}.
     */
    export type $Chemical_ = RegistryTypes.MekanismChemical;
    export interface $Chemical extends RegistryMarked<RegistryTypes.MekanismChemicalTag, RegistryTypes.MekanismChemical> {}
    export class $IChemicalHandler {
    }
    export interface $IChemicalHandler {
        isValid(arg0: number, arg1: $ChemicalStack): boolean;
        getChemicalTanks(): number;
        getChemicalInTank(arg0: number): $ChemicalStack;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack): void;
        getChemicalTankCapacity(arg0: number): number;
        insertChemical(arg0: $ChemicalStack, arg1: $Action_): $ChemicalStack;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: $ChemicalStack, arg1: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: number, arg2: $Action_): $ChemicalStack;
        get chemicalTanks(): number;
    }
    export class $IMekanismChemicalHandler {
    }
    export interface $IMekanismChemicalHandler extends $ISidedChemicalHandler, $IContentsListener {
        isValid(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): boolean;
        getChemicalTanks(arg0: $Direction_): $List<$IChemicalTank>;
        getChemicalInTank(arg0: number, arg1: $Direction_): $ChemicalStack;
        canHandleChemicals(): boolean;
        getCountChemicalTanks(arg0: $Direction_): number;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): void;
        getChemicalTankCapacity(arg0: number, arg1: $Direction_): number;
        insertChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        extractChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        getChemicalTank(arg0: number, arg1: $Direction_): $IChemicalTank;
    }
    export class $ISidedChemicalHandler {
    }
    export interface $ISidedChemicalHandler extends $IChemicalHandler {
        isValid(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): boolean;
        isValid(arg0: number, arg1: $ChemicalStack): boolean;
        getChemicalTanks(): number;
        getChemicalInTank(arg0: number): $ChemicalStack;
        getChemicalInTank(arg0: number, arg1: $Direction_): $ChemicalStack;
        getCountChemicalTanks(arg0: $Direction_): number;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack): void;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): void;
        getChemicalTankCapacity(arg0: number): number;
        getChemicalTankCapacity(arg0: number, arg1: $Direction_): number;
        insertChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: number, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        extractChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        getSideFor(): $Direction;
        get chemicalTanks(): number;
        get sideFor(): $Direction;
    }
    export class $IChemicalTank {
    }
    export interface $IChemicalTank extends $INBTSerializable<$CompoundTag>, $IContentsListener {
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        isValid(arg0: $ChemicalStack): boolean;
        getCapacity(): number;
        getStored(): number;
        setStackSize(arg0: number, arg1: $Action_): number;
        getNeeded(): number;
        shrinkStack(arg0: number, arg1: $Action_): number;
        setStackUnchecked(arg0: $ChemicalStack): void;
        growStack(arg0: number, arg1: $Action_): number;
        getTypeHolder(): $Holder<$Chemical>;
        /**
         * @deprecated
         */
        isTypeEqual(arg0: $Chemical_): boolean;
        isTypeEqual(arg0: $ChemicalStack): boolean;
        isTypeEqual(arg0: $Holder_<$Chemical>): boolean;
        getAttributeValidator(): $ChemicalAttributeValidator;
        getStack(): $ChemicalStack;
        setStack(arg0: $ChemicalStack): void;
        setEmpty(): void;
        extract(arg0: number, arg1: $Action_, arg2: $AutomationType_): $ChemicalStack;
        insert(arg0: $ChemicalStack, arg1: $Action_, arg2: $AutomationType_): $ChemicalStack;
        isEmpty(): boolean;
        /**
         * @deprecated
         */
        getType(): $Chemical;
        get capacity(): number;
        get stored(): number;
        get needed(): number;
        set stackUnchecked(value: $ChemicalStack);
        get typeHolder(): $Holder<$Chemical>;
        get attributeValidator(): $ChemicalAttributeValidator;
        get type(): $Chemical;
    }
}
