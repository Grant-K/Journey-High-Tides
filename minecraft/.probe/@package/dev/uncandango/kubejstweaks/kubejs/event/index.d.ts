import { $JsonObject, $JsonElement_, $JsonElement, $JsonObject_ } from "@package/com/google/gson";
import { $Stream } from "@package/java/util/stream";
import { $KubeDataGenerator } from "@package/dev/latvian/mods/kubejs/generator";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Object, $Record } from "@package/java/lang";
import { $Map_ } from "@package/java/util";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";

declare module "@package/dev/uncandango/kubejstweaks/kubejs/event" {
    export class $NoOpEventJS implements $KubeEvent {
        /**
         * Adds a condition that is always false, which effectively disables it
         */
        recipes(arg0: $ResourceLocation_): void;
        /**
         * Adds a no-op type, disabling the biome modifier
         */
        biomeModifiers(arg0: $ResourceLocation_): void;
        /**
         * Adds a condition that is always false, which effectively disables it
         */
        lootTables(arg0: $ResourceLocation_): void;
        /**
         * Adds a condition that is always false, which effectively disables it
         */
        lootTablesBlock(arg0: $ResourceLocation_): void;
        /**
         * This is effectively the same event as generateData with "last" argument.
         * Use it to add any kind of json you wish
         */
        json(arg0: $ResourceLocation_, arg1: $JsonElement_): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor(arg0: $KubeDataGenerator);
    }
    export class $CompatibilityEventJS implements $KubeEvent {
        checkModVersion(arg0: string, arg1: string, arg2: string): void;
        addIncompatibility(arg0: string, arg1: string): void;
        checkModLoaded(arg0: string, arg1: string): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor();
    }
    export class $PreRecipeEventJS implements $KubeEvent {
        fixItemAtKey(arg0: $Object, arg1: string): void;
        dumpErroringRecipes(): void;
        fixCondition(arg0: $Object): void;
        ignoreWarning(arg0: $Object): void;
        getEntry(arg0: $Object): $Stream<$PreRecipeEventJS$RecipeEntry>;
        disable(arg0: $Object): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor(arg0: $Map_<$ResourceLocation_, $JsonElement_>);
    }
    export class $PreRecipeEventJS$RecipeEntry extends $Record {
        fixItemAtKey(arg0: string): void;
        fixCondition(): void;
        ignoreWarning(): void;
        renameKey(arg0: string, arg1: string, arg2: boolean): void;
        addItemCondition(arg0: string): void;
        addItemTagCondition(arg0: string): void;
        replaceValueAtKey(arg0: string, arg1: string, arg2: string, arg3: string): void;
        addConditionsFromKey(arg0: string): void;
        addModConditionFromType(): void;
        json(): $JsonObject;
        fromPath(arg0: string): ($Pair<$JsonElement, $JsonElement>) | undefined;
        fromPath(arg0: string, arg1: string): ($Pair<$JsonElement, $JsonElement>) | undefined;
        disable(): void;
        id(): $ResourceLocation;
        constructor(id: $ResourceLocation_, json: $JsonObject_);
    }
    /**
     * Values that may be interpreted as {@link $PreRecipeEventJS$RecipeEntry}.
     */
    export type $PreRecipeEventJS$RecipeEntry_ = { id?: $ResourceLocation_, json?: $JsonObject_,  } | [id?: $ResourceLocation_, json?: $JsonObject_, ];
}
