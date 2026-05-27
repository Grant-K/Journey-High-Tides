import { $Level } from "@package/net/minecraft/world/level";
import { $JsonObject_, $JsonObject } from "@package/com/google/gson";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $IGrid } from "@package/appeng/api/networking";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $List, $Map, $Set_, $List_ } from "@package/java/util";
import { $ICraftingLink } from "@package/appeng/api/networking/crafting";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $GenericStack_, $AEKey } from "@package/appeng/api/stacks";
import { $KubeRecipe, $RecipesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";

declare module "@package/com/rollylindenshnizzer/appliedkjs" {
    export class $AppliedKJSServerState {
        onChunkAE2HostsLoaded(dim: $ResourceKey_<$Level>, chunkKey: number, hosts: $Set_<$BlockPos_>): void;
        onChunkUnloaded(dim: $ResourceKey_<$Level>, chunkKey: number): void;
        tick(): void;
        exportGridSummaries(): $List<$Map<string, $Object>>;
        exportGridSummary(gridId: string): $Map<string, $Object>;
        exportGridSummaryByObject(grid: $IGrid): $Map<string, $Object>;
        addThresholdWatch(watchName: string, gridId: string, key: $AEKey, threshold: number, direction: string): boolean;
        clearThresholdWatches(): number;
        exportThresholdWatches(): $List<$Map<string, $Object>>;
        trackSubmittedCraftLink(grid: $IGrid, link: $ICraftingLink): void;
        cancelSubmittedCraft(gridId: string, craftingId: string): boolean;
        exportCraftingCpus(): $List<$Map<string, $Object>>;
        dumpSummaryToFile(): string;
        exportStats(): $Map<string, $Object>;
        forceScan(): void;
        static get(server: $MinecraftServer): $AppliedKJSServerState;
    }
    export class $AppliedKJSEvents$GridChangedKubeEvent extends $AppliedKJSEvents$GridLifecycleKubeEvent {
        changeReason: string;
        powered: boolean;
        storedPower: number;
        pivotPos: string;
        usedChannels: number;
        maxStoredPower: number;
        newNodeCount: number;
        channelMode: string;
        newUsedChannels: number;
        controllerState: string;
        online: boolean;
        oldUsedChannels: number;
        nodeCount: number;
        gridId: string;
        oldNodeCount: number;
        dimension: string;
        timestamp: number;
        constructor();
    }
    export class $AppliedKJSEvents$GridLifecycleKubeEvent implements $KubeEvent {
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
        maxStoredPower: number;
        powered: boolean;
        channelMode: string;
        controllerState: string;
        online: boolean;
        storedPower: number;
        nodeCount: number;
        gridId: string;
        dimension: string;
        pivotPos: string;
        usedChannels: number;
        timestamp: number;
        constructor();
    }
    export class $AppliedKJSEvents$GridPowerStateKubeEvent extends $AppliedKJSEvents$GridLifecycleKubeEvent {
        newOnline: boolean;
        newControllerState: string;
        powered: boolean;
        storedPower: number;
        pivotPos: string;
        usedChannels: number;
        maxStoredPower: number;
        oldOnline: boolean;
        oldControllerState: string;
        channelMode: string;
        controllerState: string;
        newPowered: boolean;
        oldPowered: boolean;
        online: boolean;
        nodeCount: number;
        gridId: string;
        dimension: string;
        timestamp: number;
        constructor();
    }
    export class $AppliedKJSAPI$Keys {
        wrapItem(stack: $ItemStack_): $AppliedKJSKeyWrappers$JSAEKey;
        wrapFluid(stack: $FluidStack_): $AppliedKJSKeyWrappers$JSAEKey;
        prettyAmount(key: $AppliedKJSKeyWrappers$JSAEKey, amount: number): string;
        fromString(s: string): $AppliedKJSKeyWrappers$JSAEKey;
        wrap(key: $AEKey): $AppliedKJSKeyWrappers$JSAEKey;
        wrap(stack: $GenericStack_): $AppliedKJSKeyWrappers$JSAEStack;
        constructor(this$0: $AppliedKJSAPI);
    }
    export class $AppliedKJSEvents$StorageThresholdKubeEvent extends $AppliedKJSEvents$StorageDeltaKubeEvent {
        oldAmount: number;
        keyJson: string;
        delta: number;
        keyId: string;
        threshold: number;
        extracted: boolean;
        inserted: boolean;
        watchName: string;
        gridId: string;
        newAmount: number;
        keyType: string;
        dimension: string;
        direction: string;
        timestamp: number;
        constructor();
    }
    export class $AppliedKJSAPI$Network {
        grid(gridId: string): $Map<string, $Object>;
        grids(): $List<$Map<string, $Object>>;
        gridAt(level: $ServerLevel, x: number, y: number, z: number): $Map<string, $Object>;
        watchThreshold(watchName: string, gridId: string, encodedKey: string, threshold: number, direction: string): boolean;
        clearThresholdWatches(): number;
        thresholdWatches(): $List<$Map<string, $Object>>;
        constructor(this$0: $AppliedKJSAPI);
    }
    export class $AppliedKJSAPI$Compat {
        hasFeature(feature: string): boolean;
        pluginVersion(): string;
        isAe2Loaded(): boolean;
        isKubeJsLoaded(): boolean;
        versionMatrix(): $Map<string, $Object>;
        modId(): string;
        constructor(this$0: $AppliedKJSAPI);
        get ae2Loaded(): boolean;
        get kubeJsLoaded(): boolean;
    }
    export class $AppliedKJSEvents$CraftingCpuKubeEvent implements $KubeEvent {
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
        jobProgress: number;
        cpuSerial: number;
        jobKeyId: string;
        unchangedBusyScans: number;
        elapsedTimeNanos: number;
        cpuName: string;
        jobAmount: number;
        coProcessors: number;
        busy: boolean;
        storageBytes: number;
        jobTotal: number;
        jobKeyType: string;
        gridId: string;
        dimension: string;
        status: string;
        timestamp: number;
        constructor();
    }
    export class $AppliedKJSKeyWrappers$JSAEKey {
        isFluid(): boolean;
        isItem(): boolean;
        formatAmount(amount: number): string;
        toJsonString(): string;
        fuzzySame(other: $AppliedKJSKeyWrappers$JSAEKey): boolean;
        raw(): $AEKey;
        displayName(): string;
        toJson(): $JsonObject;
        modId(): string;
        same(other: $AppliedKJSKeyWrappers$JSAEKey): boolean;
        type(): string;
        id(): string;
        constructor(key: $AEKey);
        get fluid(): boolean;
        get item(): boolean;
    }
    export class $AppliedKJSAPI$Utils {
        isAe2Item(id: string): boolean;
        isAe2Block(id: string): boolean;
        ae2ItemIds(): $Map<string, string>;
        ae2BlockIds(): $Map<string, string>;
        ae2PartIds(): $Map<string, string>;
        ae2Tags(): $Map<string, string>;
        error(msg: string): void;
        warn(msg: string): void;
        info(msg: string): void;
        constructor(this$0: $AppliedKJSAPI);
    }
    export class $AppliedKJSAPI$Crafting {
        cpus(): $List<$Map<string, $Object>>;
        submitViaHost(player: $ServerPlayer, level: $ServerLevel, x: number, y: number, z: number, encodedKey: string, amount: number, allowInaccessible: boolean): $Map<string, $Object>;
        plan(player: $ServerPlayer, level: $ServerLevel, x: number, y: number, z: number, encodedKey: string, amount: number): $Map<string, $Object>;
        cancelSubmittedCraft(gridId: string, craftingId: string): boolean;
        constructor(this$0: $AppliedKJSAPI);
    }
    export class $AppliedKJSAPI$Debug {
        stats(): $Map<string, $Object>;
        grids(): $List<$Map<string, $Object>>;
        dumpSummaryToFile(): string;
        constructor(this$0: $AppliedKJSAPI);
    }
    export class $AppliedKJSKeyWrappers$JSAEStack {
        amount(): number;
        amountPretty(): string;
        toJson(): $JsonObject;
        key(): $AppliedKJSKeyWrappers$JSAEKey;
        constructor(stack: $GenericStack_);
    }
    export class $AppliedKJSEvents$CraftingRequestedKubeEvent implements $KubeEvent {
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
        oldRequested: number;
        delta: number;
        keyId: string;
        gridId: string;
        keyType: string;
        dimension: string;
        newRequested: number;
        timestamp: number;
        constructor();
    }
    export class $AppliedKJSAPI$Recipes {
        isValid(json: $JsonObject_): boolean;
        matterCannon(ammo: $Object, weight: number): $JsonObject;
        matterCannon(event: $RecipesKubeEvent, ammo: $Object, weight: number, id: string): $Object;
        matterCannon(event: $RecipesKubeEvent, ammo: $Object, weight: number): $Object;
        removeByPredicateJsonContains(event: $RecipesKubeEvent, type: string, text: string): number;
        charger(event: $RecipesKubeEvent, ingredient: $Object, result: $Object, id: string): $Object;
        charger(event: $RecipesKubeEvent, ingredient: $Object, result: $Object): $Object;
        charger(ingredient: $Object, result: $Object): $JsonObject;
        inscriber(event: $RecipesKubeEvent, mode: string, middle: $Object, top: $Object, result: $Object): $Object;
        inscriber(event: $RecipesKubeEvent, mode: string, middle: $Object, top: $Object, bottom: $Object, result: $Object, id: string): $Object;
        inscriber(event: $RecipesKubeEvent, mode: string, middle: $Object, top: $Object, result: $Object, id: string): $Object;
        inscriber(event: $RecipesKubeEvent, middle: $Object, result: $Object): $Object;
        inscriber(event: $RecipesKubeEvent, middle: $Object, result: $Object, id: string): $Object;
        inscriber(mode: string, middle: $Object, top: $Object, bottom: $Object, result: $Object): $JsonObject;
        inscriber(middle: $Object, result: $Object): $JsonObject;
        inscriberPress(middle: $Object, topPress: $Object, result: $Object): $JsonObject;
        inscriberPress(event: $RecipesKubeEvent, middle: $Object, topPress: $Object, result: $Object): $Object;
        inscriberPress(event: $RecipesKubeEvent, middle: $Object, topPress: $Object, result: $Object, id: string): $Object;
        transformFluid(fluidOrTag: $Object, ingredients: $List_<never>, result: $Object, count: number): $JsonObject;
        transformFluid(event: $RecipesKubeEvent, fluidOrTag: $Object, ingredients: $List_<never>, result: $Object, count: number): $Object;
        transformFluid(event: $RecipesKubeEvent, fluidOrTag: $Object, ingredients: $List_<never>, result: $Object, count: number, id: string): $Object;
        transformExplosion(ingredients: $List_<never>, result: $Object, count: number): $JsonObject;
        transformExplosion(event: $RecipesKubeEvent, ingredients: $List_<never>, result: $Object, count: number, id: string): $Object;
        transformExplosion(event: $RecipesKubeEvent, ingredients: $List_<never>, result: $Object, count: number): $Object;
        entropyHeat(event: $RecipesKubeEvent, input: $Object, output: $Object): $Object;
        entropyHeat(input: $Object, output: $Object): $JsonObject;
        entropyHeat(event: $RecipesKubeEvent, input: $Object, output: $Object, id: string): $Object;
        entropyCool(input: $Object, output: $Object): $JsonObject;
        entropyCool(event: $RecipesKubeEvent, input: $Object, output: $Object): $Object;
        entropyCool(event: $RecipesKubeEvent, input: $Object, output: $Object, id: string): $Object;
        entropy(event: $RecipesKubeEvent, mode: string, input: $Object, output: $Object, id: string): $Object;
        entropy(mode: string, input: $Object, output: $Object): $JsonObject;
        entropy(event: $RecipesKubeEvent, mode: string, input: $Object, output: $Object): $Object;
        validateOrThrow(json: $JsonObject_): void;
        inscriberWithBottom(event: $RecipesKubeEvent, mode: string, middle: $Object, top: $Object, bottom: $Object, result: $Object): $Object;
        inscriberWithBottom(event: $RecipesKubeEvent, mode: string, middle: $Object, top: $Object, bottom: $Object, result: $Object, id: string): $Object;
        inscriberNoBottom(event: $RecipesKubeEvent, mode: string, middle: $Object, top: $Object, result: $Object): $Object;
        inscriberNoBottom(event: $RecipesKubeEvent, mode: string, middle: $Object, top: $Object, result: $Object, id: string): $Object;
        removeByType(event: $RecipesKubeEvent, type: string): number;
        removeByOutput(event: $RecipesKubeEvent, type: string, output: $Object): number;
        removeByInputContains(event: $RecipesKubeEvent, type: string, inputNeedle: $Object): number;
        stringify(json: $JsonObject_): string;
        add(event: $RecipesKubeEvent, json: $JsonObject_, id: string): $Object;
        add(event: $RecipesKubeEvent, json: $JsonObject_): $Object;
        validate(json: $JsonObject_): $List<string>;
        constructor(this$0: $AppliedKJSAPI);
    }
    export class $AppliedKJSEvents$PlayerMilestoneKubeEvent implements $KubeEvent {
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
        milestoneId: string;
        detail: string;
        dimension: string;
        player: $ServerPlayer;
        timestamp: number;
        constructor();
    }
    export class $AppliedKJSEvents$StorageDeltaKubeEvent implements $KubeEvent {
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
        inserted: boolean;
        oldAmount: number;
        keyJson: string;
        delta: number;
        keyId: string;
        gridId: string;
        newAmount: number;
        keyType: string;
        dimension: string;
        extracted: boolean;
        timestamp: number;
        constructor();
    }
    export class $AppliedKJSAPI$Progression {
        hasMilestone(player: $ServerPlayer, milestoneId: string): boolean;
        grantMilestone(player: $ServerPlayer, milestoneId: string, detail: string): boolean;
        milestones(player: $ServerPlayer): $List<string>;
        constructor(this$0: $AppliedKJSAPI);
    }
    export class $AppliedKJSAPI {
        static server(): $MinecraftServer;
        static state(): $AppliedKJSServerState;
        recipes: $AppliedKJSAPI$Recipes;
        debug: $AppliedKJSAPI$Debug;
        static RECIPE_BUILDERS: $AppliedKJSRecipeBuilders;
        devices: $AppliedKJSAPI$Devices;
        utils: $AppliedKJSAPI$Utils;
        keys: $AppliedKJSAPI$Keys;
        crafting: $AppliedKJSAPI$Crafting;
        progression: $AppliedKJSAPI$Progression;
        static INSTANCE: $AppliedKJSAPI;
        compat: $AppliedKJSAPI$Compat;
        network: $AppliedKJSAPI$Network;
        constructor();
    }
    export class $AppliedKJSAPI$Devices {
        isTerminalMenuClass(name: string): boolean;
        inspect(level: $ServerLevel, x: number, y: number, z: number): $Map<string, $Object>;
        constructor(this$0: $AppliedKJSAPI);
    }
    export class $AppliedKJSRecipeBuilders {
        isValid(json: $JsonObject_): boolean;
        matterCannon(ammo: $Object, weight: number): $JsonObject;
        matterCannon(event: $RecipesKubeEvent, ammo: $Object, weight: number, id: string): $KubeRecipe;
        removeByPredicateJsonContains(event: $RecipesKubeEvent, type: string, text: string): number;
        charger(event: $RecipesKubeEvent, ingredient: $Object, result: $Object, id: string): $KubeRecipe;
        charger(ingredient: $Object, result: $Object): $JsonObject;
        inscriber(event: $RecipesKubeEvent, mode: string, middle: $Object, top: $Object, bottom: $Object, result: $Object, id: string): $KubeRecipe;
        inscriber(middle: $Object, result: $Object): $JsonObject;
        inscriber(mode: string, middle: $Object, top: $Object, bottom: $Object, result: $Object): $JsonObject;
        inscriberPress(middle: $Object, topPress: $Object, result: $Object): $JsonObject;
        transformFluid(event: $RecipesKubeEvent, fluidTag: $Object, ingredients: $List_<never>, result: $Object, count: number, id: string): $KubeRecipe;
        transformFluid(fluidTag: $Object, ingredients: $List_<never>, result: $Object, count: number): $JsonObject;
        transformExplosion(event: $RecipesKubeEvent, ingredients: $List_<never>, result: $Object, count: number, id: string): $KubeRecipe;
        transformExplosion(ingredients: $List_<never>, result: $Object, count: number): $JsonObject;
        entropyHeat(input: $Object, output: $Object): $JsonObject;
        entropyCool(input: $Object, output: $Object): $JsonObject;
        entropy(event: $RecipesKubeEvent, mode: string, input: $Object, output: $Object, id: string): $KubeRecipe;
        entropy(mode: string, input: $Object, output: $Object): $JsonObject;
        validateOrThrow(json: $JsonObject_): void;
        removeByType(event: $RecipesKubeEvent, type: string): number;
        removeByOutput(event: $RecipesKubeEvent, type: string, outputItem: $Object): number;
        removeByInputContains(event: $RecipesKubeEvent, type: string, itemOrTag: $Object): number;
        stringify(json: $JsonObject_): string;
        add(event: $RecipesKubeEvent, json: $JsonObject_): $KubeRecipe;
        add(event: $RecipesKubeEvent, json: $JsonObject_, id: string): $KubeRecipe;
        validate(json: $JsonObject_): $List<string>;
        constructor();
    }
    export class $AppliedKJSEvents$TerminalOpenedKubeEvent implements $KubeEvent {
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
        menuClass: string;
        dimension: string;
        player: $ServerPlayer;
        constructor();
    }
}
