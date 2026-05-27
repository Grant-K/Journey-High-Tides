import { $Level_ } from "@package/net/minecraft/world/level";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Future } from "@package/java/util/concurrent";
import { $IGridNodeService, $IManagedGridNode, $IGridService, $IGridNode } from "@package/appeng/api/networking";
import { $CpuSelectionMode, $Actionable_ } from "@package/appeng/api/config";
import { $ImmutableSet } from "@package/com/google/common/collect";
import { $UUID, $List, $Map, $Set, $Collection } from "@package/java/util";
import { $IActionSource, $IActionHost } from "@package/appeng/api/networking/security";
import { $GenericStack, $GenericStack_, $KeyCounter, $AEKey } from "@package/appeng/api/stacks";
import { $AEKeyFilter_ } from "@package/appeng/api/storage";
import { $IPatternDetails } from "@package/appeng/api/crafting";
import { $Enum, $Record, $Object } from "@package/java/lang";

declare module "@package/appeng/api/networking/crafting" {
    export class $ICraftingCPU {
    }
    export interface $ICraftingCPU {
        isBusy(): boolean;
        getAvailableStorage(): number;
        getCoProcessors(): number;
        getJobStatus(): $CraftingJobStatus;
        cancelJob(): void;
        getSelectionMode(): $CpuSelectionMode;
        getName(): $Component;
        get busy(): boolean;
        get availableStorage(): number;
        get coProcessors(): number;
        get jobStatus(): $CraftingJobStatus;
        get selectionMode(): $CpuSelectionMode;
        get name(): $Component;
    }
    export class $ICraftingPlan {
    }
    export interface $ICraftingPlan {
        simulation(): boolean;
        finalOutput(): $GenericStack;
        multiplePaths(): boolean;
        usedItems(): $KeyCounter;
        emittedItems(): $KeyCounter;
        patternTimes(): $Map<$IPatternDetails, number>;
        missingItems(): $KeyCounter;
        bytes(): number;
    }
    export class $ICraftingProvider {
        static requestUpdate(arg0: $IManagedGridNode): void;
    }
    export interface $ICraftingProvider extends $IGridNodeService {
        isBusy(): boolean;
        getAvailablePatterns(): $List<$IPatternDetails>;
        getPatternPriority(): number;
        pushPattern(arg0: $IPatternDetails, arg1: $KeyCounter[]): boolean;
        getEmitableItems(): $Set<$AEKey>;
        get busy(): boolean;
        get availablePatterns(): $List<$IPatternDetails>;
        get patternPriority(): number;
        get emitableItems(): $Set<$AEKey>;
    }
    export class $CraftingSubmitErrorCode extends $Enum<$CraftingSubmitErrorCode> {
        static values(): $CraftingSubmitErrorCode[];
        static valueOf(arg0: string): $CraftingSubmitErrorCode;
        static INCOMPLETE_PLAN: $CraftingSubmitErrorCode;
        static MISSING_INGREDIENT: $CraftingSubmitErrorCode;
        static NO_CPU_FOUND: $CraftingSubmitErrorCode;
        static CPU_BUSY: $CraftingSubmitErrorCode;
        static CPU_OFFLINE: $CraftingSubmitErrorCode;
        static CPU_TOO_SMALL: $CraftingSubmitErrorCode;
        static NO_SUITABLE_CPU_FOUND: $CraftingSubmitErrorCode;
    }
    /**
     * Values that may be interpreted as {@link $CraftingSubmitErrorCode}.
     */
    export type $CraftingSubmitErrorCode_ = "incomplete_plan" | "no_cpu_found" | "no_suitable_cpu_found" | "cpu_busy" | "cpu_offline" | "cpu_too_small" | "missing_ingredient";
    export class $ICraftingLink {
    }
    export interface $ICraftingLink {
        writeToNBT(arg0: $CompoundTag_): void;
        isStandalone(): boolean;
        getCraftingID(): $UUID;
        isCanceled(): boolean;
        isDone(): boolean;
        cancel(): void;
        get standalone(): boolean;
        get craftingID(): $UUID;
        get canceled(): boolean;
        get done(): boolean;
    }
    export class $CraftingJobStatus extends $Record {
        crafting(): $GenericStack;
        progress(): number;
        elapsedTimeNanos(): number;
        totalItems(): number;
        constructor(crafting: $GenericStack_, totalItems: number, progress: number, elapsedTimeNanos: number);
    }
    /**
     * Values that may be interpreted as {@link $CraftingJobStatus}.
     */
    export type $CraftingJobStatus_ = { crafting?: $GenericStack_, totalItems?: number, progress?: number, elapsedTimeNanos?: number,  } | [crafting?: $GenericStack_, totalItems?: number, progress?: number, elapsedTimeNanos?: number, ];
    export class $ICraftingRequester {
    }
    export interface $ICraftingRequester extends $IActionHost, $IGridNodeService {
        getRequestedJobs(): $ImmutableSet<$ICraftingLink>;
        insertCraftedItems(arg0: $ICraftingLink, arg1: $AEKey, arg2: number, arg3: $Actionable_): number;
        jobStateChange(arg0: $ICraftingLink): void;
        get requestedJobs(): $ImmutableSet<$ICraftingLink>;
    }
    export class $ICraftingSimulationRequester {
    }
    export interface $ICraftingSimulationRequester {
        getGridNode(): $IGridNode;
        getActionSource(): $IActionSource;
        get gridNode(): $IGridNode;
        get actionSource(): $IActionSource;
    }
    /**
     * Values that may be interpreted as {@link $ICraftingSimulationRequester}.
     */
    export type $ICraftingSimulationRequester_ = (() => $IActionSource);
    export class $ICraftingService {
    }
    export interface $ICraftingService extends $IGridService {
        getFuzzyCraftable(arg0: $AEKey, arg1: $AEKeyFilter_): $AEKey;
        beginCraftingCalculation(arg0: $Level_, arg1: $ICraftingSimulationRequester_, arg2: $AEKey, arg3: number, arg4: $CalculationStrategy_): $Future<$ICraftingPlan>;
        submitJob(arg0: $ICraftingPlan, arg1: $ICraftingRequester, arg2: $ICraftingCPU, arg3: boolean, arg4: $IActionSource): $ICraftingSubmitResult;
        getCpus(): $ImmutableSet<$ICraftingCPU>;
        canEmitFor(arg0: $AEKey): boolean;
        getCraftables(arg0: $AEKeyFilter_): $Set<$AEKey>;
        isRequesting(arg0: $AEKey): boolean;
        getRequestedAmount(arg0: $AEKey): number;
        isRequestingAny(): boolean;
        refreshNodeCraftingProvider(arg0: $IGridNode): void;
        getCraftingFor(arg0: $AEKey): $Collection<$IPatternDetails>;
        isCraftable(arg0: $AEKey): boolean;
        addGlobalCraftingProvider(arg0: $ICraftingProvider): void;
        removeGlobalCraftingProvider(arg0: $ICraftingProvider): void;
        refreshGlobalCraftingProvider(arg0: $ICraftingProvider): void;
        get cpus(): $ImmutableSet<$ICraftingCPU>;
        get requestingAny(): boolean;
    }
    export class $CalculationStrategy extends $Enum<$CalculationStrategy> {
        static values(): $CalculationStrategy[];
        static valueOf(arg0: string): $CalculationStrategy;
        static CRAFT_LESS: $CalculationStrategy;
        static REPORT_MISSING_ITEMS: $CalculationStrategy;
    }
    /**
     * Values that may be interpreted as {@link $CalculationStrategy}.
     */
    export type $CalculationStrategy_ = "report_missing_items" | "craft_less";
    export class $ICraftingSubmitResult {
    }
    export interface $ICraftingSubmitResult {
        errorCode(): $CraftingSubmitErrorCode;
        link(): $ICraftingLink;
        successful(): boolean;
        errorDetail(): $Object;
    }
}
