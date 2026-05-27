import { $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $TagKey } from "@package/net/minecraft/tags";
import { $Item_, $CreativeModeTab, $Item, $ItemStack_, $ItemStack, $DyeItem } from "@package/net/minecraft/world/item";
import { $IZetaBlock } from "@package/org/violetmoon/zeta/block";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $DyedItemColor, $DyedItemColor_ } from "@package/net/minecraft/world/item/component";
import { $List_, $Collection, $Map } from "@package/java/util";
import { $Zeta } from "@package/org/violetmoon/zeta";
import { $BiConsumer_, $Function_, $Consumer_, $BooleanSupplier, $Predicate_, $BooleanSupplier_, $Supplier } from "@package/java/util/function";
import { $ZetaModule } from "@package/org/violetmoon/zeta/module";
import { $Holder$Kind, $Holder, $HolderLookup$RegistryLookup, $Registry, $HolderOwner, $WritableRegistry, $Holder$Direct } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $ZRegister$Post, $ZRegister } from "@package/org/violetmoon/zeta/event/load";
import { $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $RegistryOps$RegistryInfoLookup, $RegistryOps$RegistryInfoLookup_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block, $FlowerPotBlock } from "@package/net/minecraft/world/level/block";
import { $Enum, $Object } from "@package/java/lang";

declare module "@package/org/violetmoon/zeta/registry" {
    export class $ZetaRegistry {
        newResourceLocation(arg0: string): $ResourceLocation;
        getRegistryName<T>(arg0: T, arg1: $Registry<T>): $ResourceLocation;
        registerBlock(arg0: $Block_, arg1: $ResourceLocation_, arg2: boolean): void;
        registerBlock(arg0: $Block_, arg1: string, arg2: boolean): void;
        registerBlock(arg0: $Block_, arg1: $ResourceLocation_): void;
        registerBlock(arg0: $Block_, arg1: string): void;
        registerItem(arg0: $Item_, arg1: string): void;
        registerItem(arg0: $Item_, arg1: $ResourceLocation_): void;
        getRegisteredObjects<O>(arg0: $ResourceKey_<$Registry<O>>): $Collection<$Holder<O>>;
        registerDynamicF<T>(arg0: $Function_<$RegistryOps$RegistryInfoLookup, T>, arg1: string, arg2: $ResourceKey_<$Registry<T>>): $LateBoundHolder<T>;
        registerDynamicF<T>(arg0: $Function_<$RegistryOps$RegistryInfoLookup, T>, arg1: $ResourceKey_<T>, arg2: $ResourceKey_<$Registry<T>>): $LateBoundHolder<T>;
        registerDynamicF<T>(arg0: $Function_<$RegistryOps$RegistryInfoLookup, T>, arg1: $ResourceLocation_, arg2: $ResourceKey_<$Registry<T>>): $LateBoundHolder<T>;
        /**
         * @deprecated
         */
        registerDynamic<T>(arg0: T, arg1: $ResourceLocation_, arg2: $ResourceKey_<$Registry<T>>): $Holder$Direct<T>;
        registerDynamic<T>(arg0: T, arg1: string, arg2: $ResourceKey_<$Registry<T>>): $Holder$Direct<T>;
        /**
         * @deprecated
         */
        registerDynamic<T>(arg0: T, arg1: $ResourceKey_<T>, arg2: $ResourceKey_<$Registry<T>>): $Holder$Direct<T>;
        getDefers(arg0: $ResourceLocation_): $Collection<$Supplier<$Object>>;
        clearDeferCache(arg0: $ResourceLocation_): void;
        assignBlockColor(arg0: string, arg1: $Consumer_<$Block>): void;
        assignItemColor(arg0: string, arg1: $Consumer_<$Item>): void;
        validateColorsProviders(): void;
        performDynamicRegistration<T>(arg0: $RegistryOps$RegistryInfoLookup_, arg1: $ResourceKey_<$Registry<never>>, arg2: $WritableRegistry<T>): void;
        register<T>(arg0: T, arg1: string, arg2: $ResourceKey_<$Registry<T>>): void;
        register<T>(arg0: T, arg1: $ResourceLocation_, arg2: $ResourceKey_<$Registry<T>>): void;
        internalNames: $Map<$Object, $ResourceLocation>;
        z: $Zeta;
        constructor(arg0: $Zeta);
    }
    export class $RenderLayerRegistry {
        mock(arg0: $Block_, arg1: $Block_): void;
        finalize(arg0: $BiConsumer_<$Block, $RenderLayerRegistry$Layer>): void;
        put(arg0: $Block_, arg1: $RenderLayerRegistry$Layer_): void;
        constructor();
    }
    export class $LateBoundHolder<T> implements $Holder<T> {
        unwrapKey(): ($ResourceKey<T>) | undefined;
        canSerializeIn(arg0: $HolderOwner<T>): boolean;
        isBound(): boolean;
        unwrap(): $Either<$ResourceKey<T>, T>;
        is(arg0: $ResourceLocation_): boolean;
        is(arg0: $Predicate_<$ResourceKey<T>>): boolean;
        tags(): $Stream<$TagKey<T>>;
        value(): T;
        kind(): $Holder$Kind;
        getRegisteredName(): string;
        /**
         * Test if a tag matches the object this holder holds.
         */
        isTag(tagKey: $ResourceLocation_): boolean;
        unwrapLookup(): $HolderLookup$RegistryLookup<T>;
        getDelegate(): $Holder<T>;
        getKey(): $ResourceKey<T>;
        getData<T>(arg0: $DataMapType<T, T>): T;
        registry: $Registry<T>;
        thing: T;
        key: $ResourceKey<T>;
        constructor(arg0: $ResourceKey_<T>);
        get bound(): boolean;
        get registeredName(): string;
        get delegate(): $Holder<T>;
    }
    export class $PottedPlantRegistry {
    }
    export interface $PottedPlantRegistry {
        addPot(arg0: $ResourceLocation_, arg1: $Block_): void;
    }
    /**
     * Values that may be interpreted as {@link $PottedPlantRegistry}.
     */
    export type $PottedPlantRegistry_ = ((arg0: $ResourceLocation, arg1: $Block) => void);
    export class $RenderLayerRegistry$Layer extends $Enum<$RenderLayerRegistry$Layer> {
        static values(): $RenderLayerRegistry$Layer[];
        static valueOf(arg0: string): $RenderLayerRegistry$Layer;
        static CUTOUT: $RenderLayerRegistry$Layer;
        static TRANSLUCENT: $RenderLayerRegistry$Layer;
        static CUTOUT_MIPPED: $RenderLayerRegistry$Layer;
        static SOLID: $RenderLayerRegistry$Layer;
    }
    /**
     * Values that may be interpreted as {@link $RenderLayerRegistry$Layer}.
     */
    export type $RenderLayerRegistry$Layer_ = "solid" | "cutout" | "cutout_mipped" | "translucent";
    export class $DyeablesRegistry {
        getColor(arg0: $ItemStack_): $DyedItemColor;
        registerPost(arg0: $ZRegister$Post): void;
        isDyeable(arg0: $ItemStack_): boolean;
        isDyed(arg0: $ItemStack_): boolean;
        getDye(arg0: $ItemStack_): $DyedItemColor;
        applyDye(arg0: $ItemStack_, arg1: $DyedItemColor_): void;
        dyeItem(arg0: $ItemStack_, arg1: $List_<$DyeItem>): $ItemStack;
        register(arg0: $Item_): void;
        register(arg0: $ZRegister): void;
        register(arg0: $Item_, arg1: $BooleanSupplier_): void;
        register(arg0: $Item_, arg1: $ZetaModule): void;
        dyeableConditions: $Map<$Item, $BooleanSupplier>;
        constructor();
    }
    export class $VariantRegistry {
        addWall(arg0: $IZetaBlock, arg1: $ResourceKey_<$CreativeModeTab>): $IZetaBlock;
        addSlabAndStairs(arg0: $IZetaBlock, arg1: $ResourceKey_<$CreativeModeTab>): $IZetaBlock;
        addSlab(arg0: $IZetaBlock, arg1: $ResourceKey_<$CreativeModeTab>): $IZetaBlock;
        addStairs(arg0: $IZetaBlock, arg1: $ResourceKey_<$CreativeModeTab>): $IZetaBlock;
        addSlabStairsWall(arg0: $IZetaBlock, arg1: $ResourceKey_<$CreativeModeTab>): $Block;
        addFlowerPot(arg0: $Block_, arg1: string, arg2: $Function_<$BlockBehaviour$Properties, $BlockBehaviour$Properties>): $FlowerPotBlock;
        static realStateCopy(arg0: $IZetaBlock): $BlockBehaviour$Properties;
        walls: $Map<$IZetaBlock, $Block>;
        stairs: $Map<$IZetaBlock, $Block>;
        slabs: $Map<$IZetaBlock, $Block>;
        constructor(arg0: $Zeta);
    }
}
