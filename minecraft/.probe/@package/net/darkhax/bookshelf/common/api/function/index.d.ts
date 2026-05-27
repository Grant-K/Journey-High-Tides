import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Supplier_, $Function_, $Consumer_, $Function } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $RecipeHolder, $RecipeType_, $RecipeType, $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Map } from "@package/java/util";

declare module "@package/net/darkhax/bookshelf/common/api/function" {
    export class $ReloadableCache<T> implements $Function<$Level, T> {
        static recipes<T extends $Recipe<never>>(arg0: $Supplier_<$RecipeType<T>>): $ReloadableCache<$Map<$ResourceLocation, $RecipeHolder<T>>>;
        static living(arg0: $CompoundTag_): $ReloadableCache<$LivingEntity>;
        static entity(arg0: $CompoundTag_): $ReloadableCache<$Entity>;
        isCached(): boolean;
        invalidate(): void;
        ifPresent(arg0: $Level_, arg1: $Consumer_<$Level>): void;
        apply(arg0: $Level_, arg1: $Consumer_<$Level>): void;
        apply(arg0: $Level_): $Level;
        map<R>(arg0: $Level_, arg1: $Function_<$Level, R>): R;
        static of<T>(arg0: $Supplier_<T>): $ReloadableCache<T>;
        static of<T extends $Recipe<never>>(arg0: $RecipeType_<T>): $ReloadableCache<$Map<$ResourceLocation, $RecipeHolder<T>>>;
        static of<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: $ResourceLocation_): $ReloadableCache<T>;
        static of<T>(arg0: $Function_<$Level, T>): $ReloadableCache<T>;
        compose<V>(arg0: $Function_<V, $Level>): $Function<V, T>;
        andThen<V>(arg0: $Function_<T, V>): $Function<$Level, V>;
        static EMPTY: $ReloadableCache<any>;
        get cached(): boolean;
    }
    export class $SidedReloadableCache<T> implements $Function<$Level, T> {
        static recipes<T extends $Recipe<never>>(arg0: $Supplier_<$RecipeType<T>>): $SidedReloadableCache<$Map<$ResourceLocation, $RecipeHolder<T>>>;
        getCache(arg0: $Level_): $ReloadableCache<$Level>;
        isCached(arg0: $Level_): boolean;
        invalidate(arg0: $Level_): void;
        ifPresent(arg0: $Level_, arg1: $Consumer_<$Level>): void;
        apply(arg0: $Level_): $Level;
        apply(arg0: $Level_, arg1: $Consumer_<$Level>): void;
        map<R>(arg0: $Level_, arg1: $Function_<$Level, R>): R;
        static of<T>(arg0: $Function_<$Level, T>): $SidedReloadableCache<T>;
        compose<V>(arg0: $Function_<V, $Level>): $Function<V, T>;
        andThen<V>(arg0: $Function_<T, V>): $Function<$Level, V>;
        constructor(arg0: $ReloadableCache<$Level_>, arg1: $ReloadableCache<$Level_>);
    }
}
