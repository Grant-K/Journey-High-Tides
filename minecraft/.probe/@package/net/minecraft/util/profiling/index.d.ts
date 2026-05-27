import { $Supplier_, $IntSupplier_, $LongSupplier_ } from "@package/java/util/function";
import { $Object2LongMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $MetricCategory_, $MetricCategory } from "@package/net/minecraft/util/profiling/metrics";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $Path_ } from "@package/java/nio/file";
import { $Comparable } from "@package/java/lang";
import { $List, $Map_, $Set } from "@package/java/util";
export * as jfr from "@package/net/minecraft/util/profiling/jfr";
export * as metrics from "@package/net/minecraft/util/profiling/metrics";

declare module "@package/net/minecraft/util/profiling" {
    export class $EmptyProfileResults implements $ProfileResults {
        saveResults(arg0: $Path_): boolean;
        getStartTimeNano(): number;
        getStartTimeTicks(): number;
        getEndTimeNano(): number;
        getEndTimeTicks(): number;
        getProfilerResults(): string;
        getTimes(arg0: string): $List<$ResultField>;
        getTickDuration(): number;
        getNanoDuration(): number;
        static EMPTY: $EmptyProfileResults;
        get startTimeNano(): number;
        get startTimeTicks(): number;
        get endTimeNano(): number;
        get endTimeTicks(): number;
        get profilerResults(): string;
        get tickDuration(): number;
        get nanoDuration(): number;
    }
    export class $ActiveProfiler implements $ProfileCollector {
        startTick(): void;
        endTick(): void;
        popPush(arg0: string): void;
        popPush(arg0: $Supplier_<string>): void;
        markForCharting(arg0: $MetricCategory_): void;
        incrementCounter(arg0: $Supplier_<string>, arg1: number): void;
        incrementCounter(arg0: string, arg1: number): void;
        getResults(): $ProfileResults;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        push(arg0: string): void;
        push(arg0: $Supplier_<string>): void;
        pop(): void;
        getEntry(arg0: string): $ActiveProfiler$PathEntry;
        incrementCounter(arg0: $Supplier_<string>): void;
        incrementCounter(arg0: string): void;
        constructor(arg0: $LongSupplier_, arg1: $IntSupplier_, arg2: boolean);
        get results(): $ProfileResults;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
    }
    export class $InactiveProfiler implements $ProfileCollector {
        startTick(): void;
        endTick(): void;
        popPush(arg0: $Supplier_<string>): void;
        popPush(arg0: string): void;
        markForCharting(arg0: $MetricCategory_): void;
        incrementCounter(arg0: string, arg1: number): void;
        incrementCounter(arg0: $Supplier_<string>, arg1: number): void;
        getResults(): $ProfileResults;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        push(arg0: $Supplier_<string>): void;
        push(arg0: string): void;
        pop(): void;
        getEntry(arg0: string): $ActiveProfiler$PathEntry;
        incrementCounter(arg0: $Supplier_<string>): void;
        incrementCounter(arg0: string): void;
        static INSTANCE: $InactiveProfiler;
        get results(): $ProfileResults;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
    }
    export class $ActiveProfiler$PathEntry implements $ProfilerPathEntry {
        getCounters(): $Object2LongMap<string>;
        getMaxDuration(): number;
        getDuration(): number;
        getCount(): number;
        constructor();
        get counters(): $Object2LongMap<string>;
        get maxDuration(): number;
        get duration(): number;
        get count(): number;
    }
    export class $ProfilerFiller {
        static tee(arg0: $ProfilerFiller, arg1: $ProfilerFiller): $ProfilerFiller;
        static ROOT: string;
    }
    export interface $ProfilerFiller {
        startTick(): void;
        endTick(): void;
        popPush(arg0: string): void;
        popPush(arg0: $Supplier_<string>): void;
        markForCharting(arg0: $MetricCategory_): void;
        incrementCounter(arg0: string, arg1: number): void;
        incrementCounter(arg0: $Supplier_<string>): void;
        incrementCounter(arg0: $Supplier_<string>, arg1: number): void;
        incrementCounter(arg0: string): void;
        push(arg0: $Supplier_<string>): void;
        push(arg0: string): void;
        pop(): void;
    }
    export class $ContinuousProfiler {
        getFiller(): $ProfilerFiller;
        getResults(): $ProfileResults;
        enable(): void;
        disable(): void;
        isEnabled(): boolean;
        constructor(arg0: $LongSupplier_, arg1: $IntSupplier_);
        get filler(): $ProfilerFiller;
        get results(): $ProfileResults;
        get enabled(): boolean;
    }
    export class $ProfilerPathEntry {
    }
    export interface $ProfilerPathEntry {
        getCounters(): $Object2LongMap<string>;
        getMaxDuration(): number;
        getDuration(): number;
        getCount(): number;
        get counters(): $Object2LongMap<string>;
        get maxDuration(): number;
        get duration(): number;
        get count(): number;
    }
    export class $SingleTickProfiler {
        startTick(): $ProfilerFiller;
        endTick(): void;
        static createTickProfiler(arg0: string): $SingleTickProfiler;
        static decorateFiller(arg0: $ProfilerFiller, arg1: $SingleTickProfiler): $ProfilerFiller;
        constructor(arg0: $LongSupplier_, arg1: string, arg2: number);
    }
    export class $ResultField implements $Comparable<$ResultField> {
        getColor(): number;
        compareTo(arg0: $ResultField): number;
        globalPercentage: number;
        percentage: number;
        count: number;
        name: string;
        constructor(arg0: string, arg1: number, arg2: number, arg3: number);
        get color(): number;
    }
    export class $FilledProfileResults implements $ProfileResults {
        getTickDuration(): number;
        saveResults(arg0: $Path_): boolean;
        getStartTimeNano(): number;
        getStartTimeTicks(): number;
        getEndTimeNano(): number;
        getEndTimeTicks(): number;
        getProfilerResults(): string;
        getTimes(arg0: string): $List<$ResultField>;
        getNanoDuration(): number;
        constructor(arg0: $Map_<string, $ProfilerPathEntry>, arg1: number, arg2: number, arg3: number, arg4: number);
        get tickDuration(): number;
        get startTimeNano(): number;
        get startTimeTicks(): number;
        get endTimeNano(): number;
        get endTimeTicks(): number;
        get profilerResults(): string;
        get nanoDuration(): number;
    }
    export class $ProfileResults {
        static demanglePath(arg0: string): string;
        static PATH_SEPARATOR: string;
    }
    export interface $ProfileResults {
        getTickDuration(): number;
        getNanoDuration(): number;
        saveResults(arg0: $Path_): boolean;
        getStartTimeNano(): number;
        getStartTimeTicks(): number;
        getEndTimeNano(): number;
        getEndTimeTicks(): number;
        getProfilerResults(): string;
        getTimes(arg0: string): $List<$ResultField>;
        get tickDuration(): number;
        get nanoDuration(): number;
        get startTimeNano(): number;
        get startTimeTicks(): number;
        get endTimeNano(): number;
        get endTimeTicks(): number;
        get profilerResults(): string;
    }
    export class $ProfileCollector {
    }
    export interface $ProfileCollector extends $ProfilerFiller {
        getResults(): $ProfileResults;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        getEntry(arg0: string): $ActiveProfiler$PathEntry;
        get results(): $ProfileResults;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
    }
    export class $FilledProfileResults$CounterCollector {
    }
}
