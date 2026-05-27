import { $Ingredient_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CommonNetwork$Payload, $CommonNetwork$Identifier, $CommonNetwork$Payload$Context, $CommonNetwork$PlayBuf_ } from "@package/wily/factoryapi/base/network";
import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $ListMap } from "@package/wily/factoryapi/util";
import { $Predicate, $Consumer_, $Consumer, $Predicate_, $Supplier_, $Function_, $Supplier } from "@package/java/util/function";
import { $MenuProvider } from "@package/net/minecraft/world";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Object, $Class } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as client from "@package/wily/factoryapi/base/client";
export * as network from "@package/wily/factoryapi/base/network";

declare module "@package/wily/factoryapi/base" {
    export class $MinecraftServerAccessor {
        static of(server: $MinecraftServer): $MinecraftServerAccessor;
    }
    export interface $MinecraftServerAccessor {
        getStorageSource(): $LevelStorageSource$LevelStorageAccess;
        get storageSource(): $LevelStorageSource$LevelStorageAccess;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServerAccessor}.
     */
    export type $MinecraftServerAccessor_ = (() => $LevelStorageSource$LevelStorageAccess);
    export class $Bearer<T> {
        static of<T>(obj: T): $Bearer<T>;
        static of<T>(obj: $Supplier_<T>, setObj: $Consumer_<T>): $Bearer<T>;
        static empty<T>(): $Bearer<T>;
    }
    export interface $Bearer<T> extends $ArbitrarySupplier<T> {
        set(arg0: T): void;
        secureCast<U>(aimClass: $Class<U>): $ArbitrarySupplier<U>;
    }
    export class $FactoryIngredient {
        static decodeDefaultIngredient(buf: $CommonNetwork$PlayBuf_): $FactoryIngredient;
        static decode(buf: $CommonNetwork$PlayBuf_): $FactoryIngredient;
        static encode(buf: $CommonNetwork$PlayBuf_, ingredient: $FactoryIngredient): void;
        static of(ing: $Ingredient_): $FactoryIngredient;
        static of(...stacks: $ItemStack_[]): $FactoryIngredient;
        static register(id: $CommonNetwork$Identifier<$FactoryIngredient>): void;
        static init(): void;
        static CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FactoryIngredient>;
        static DEFAULT_ID: $CommonNetwork$Identifier<$FactoryIngredient>;
        static map: $ListMap<$ResourceLocation, $CommonNetwork$Identifier<$FactoryIngredient>>;
    }
    export interface $FactoryIngredient extends $Predicate<$ItemStack>, $CommonNetwork$Payload {
        toIngredient(): $Ingredient;
        getStacks(): $ItemStack[];
        apply(context: $CommonNetwork$Payload$Context): void;
        getCount(): number;
        get stacks(): $ItemStack[];
        get count(): number;
    }
    export class $ArbitrarySupplier<T> {
        static of<T>(object: T): $ArbitrarySupplier<T>;
        static empty<T>(): $ArbitrarySupplier<T>;
        static EMPTY: $ArbitrarySupplier<never>;
    }
    export interface $ArbitrarySupplier<T> extends $Supplier<T> {
        secureCast<U>(aimClass: $Class<U>): $ArbitrarySupplier<U>;
        orObject<O>(alternative: O): $Object;
        ifPresentAnd(consumer: $Consumer_<T>, predicate: $Predicate_<T>): void;
        isPresentAnd(predicate: $Predicate_<T>): boolean;
        or(alternative: T): T;
        or(alternative: $ArbitrarySupplier_<T>): $ArbitrarySupplier<T>;
        optional(): (T) | undefined;
        ifPresent(consumer: $Consumer_<T>): void;
        cast<U>(): $ArbitrarySupplier<U>;
        isEmpty(): boolean;
        map<U>(mapping: $Function_<T, U>): $ArbitrarySupplier<U>;
        accept(consumer: $Consumer_<T>, alternative: T): void;
        flatMap<U>(mapping: $Function_<T, $ArbitrarySupplier<U>>): $ArbitrarySupplier<U>;
        isPresent(): boolean;
        orElse(alternative: T): T;
        get present(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ArbitrarySupplier}.
     */
    export type $ArbitrarySupplier_<T> = (() => void);
    export class $FactoryExtraMenuSupplier$PrepareMenu {
    }
    export interface $FactoryExtraMenuSupplier$PrepareMenu {
        prepareMenu(arg0: $MenuProvider, arg1: $Consumer_<$AbstractContainerMenu>): ($AbstractContainerMenu) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $FactoryExtraMenuSupplier$PrepareMenu}.
     */
    export type $FactoryExtraMenuSupplier$PrepareMenu_ = ((arg0: $MenuProvider, arg1: $Consumer<$AbstractContainerMenu>) => ($AbstractContainerMenu) | undefined);
}
