import { $Supplier_, $Consumer_, $LongSupplier_ } from "@package/java/util/function";
import { $MetricsPersister } from "@package/net/minecraft/util/profiling/metrics/storage";
import { $MetricsSamplerProvider, $MetricSampler, $MetricsSamplerProvider_ } from "@package/net/minecraft/util/profiling/metrics";
import { $ProfilerFiller, $ProfileResults, $ProfileCollector } from "@package/net/minecraft/util/profiling";
import { $Path } from "@package/java/nio/file";
import { $Executor_ } from "@package/java/util/concurrent";
import { $Set } from "@package/java/util";

declare module "@package/net/minecraft/util/profiling/metrics/profiling" {
    export class $ServerMetricsSamplersProvider$CpuStats {
    }
    export class $InactiveMetricsRecorder implements $MetricsRecorder {
        startTick(): void;
        endTick(): void;
        isRecording(): boolean;
        getProfiler(): $ProfilerFiller;
        end(): void;
        cancel(): void;
        static INSTANCE: $MetricsRecorder;
        constructor();
        get recording(): boolean;
        get profiler(): $ProfilerFiller;
    }
    export class $ActiveMetricsRecorder implements $MetricsRecorder {
        startTick(): void;
        endTick(): void;
        isRecording(): boolean;
        static createStarted(arg0: $MetricsSamplerProvider_, arg1: $LongSupplier_, arg2: $Executor_, arg3: $MetricsPersister, arg4: $Consumer_<$ProfileResults>, arg5: $Consumer_<$Path>): $ActiveMetricsRecorder;
        static registerGlobalCompletionCallback(arg0: $Consumer_<$Path>): void;
        getProfiler(): $ProfilerFiller;
        end(): void;
        cancel(): void;
        static PROFILING_MAX_DURATION_SECONDS: number;
        get recording(): boolean;
        get profiler(): $ProfilerFiller;
    }
    export class $ServerMetricsSamplersProvider implements $MetricsSamplerProvider {
        samplers(arg0: $Supplier_<$ProfileCollector>): $Set<$MetricSampler>;
        static tickTimeSampler(arg0: $LongSupplier_): $MetricSampler;
        static runtimeIndependentSamplers(): $Set<$MetricSampler>;
        constructor(arg0: $LongSupplier_, arg1: boolean);
    }
    export class $ProfilerSamplerAdapter {
        newSamplersFoundInProfiler(arg0: $Supplier_<$ProfileCollector>): $Set<$MetricSampler>;
        constructor();
    }
    export class $MetricsRecorder {
    }
    export interface $MetricsRecorder {
        startTick(): void;
        endTick(): void;
        isRecording(): boolean;
        getProfiler(): $ProfilerFiller;
        end(): void;
        cancel(): void;
        get recording(): boolean;
        get profiler(): $ProfilerFiller;
    }
}
