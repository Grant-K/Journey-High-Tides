import { $Supplier_, $Function_, $BooleanSupplier_, $Consumer_ } from "@package/java/util/function";
import { $MetricSampler, $ProfilerMeasured } from "@package/net/minecraft/util/profiling/metrics";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor_, $Executor, $ThreadFactory } from "@package/java/util/concurrent";
import { $Queue, $List } from "@package/java/util";
import { $AutoCloseable, $Thread, $Runnable_, $Runnable, $Exception } from "@package/java/lang";

declare module "@package/net/minecraft/util/thread" {
    export class $ReentrantBlockableEventLoop<R extends $Runnable> extends $BlockableEventLoop<R> {
        doRunTask(arg0: R): void;
        scheduleExecutables(): boolean;
        constructor(arg0: string);
    }
    export class $StrictQueue$FixedPriorityQueue implements $StrictQueue<$StrictQueue$IntRunnable, $Runnable> {
        push(arg0: $StrictQueue$IntRunnable): boolean;
        pop(): $Runnable;
        size(): number;
        isEmpty(): boolean;
        constructor(arg0: number);
        get empty(): boolean;
    }
    export class $ProcessorMailbox<T> implements $ProfilerMeasured, $ProcessorHandle<T>, $AutoCloseable, $Runnable {
        tell(arg0: T): void;
        profiledMetrics(): $List<$MetricSampler>;
        runAll(): void;
        static create(arg0: $Executor_, arg1: string): $ProcessorMailbox<$Runnable>;
        hasWork(): boolean;
        name(): string;
        run(): void;
        size(): number;
        close(): void;
        ask<Source>(arg0: $Function_<$ProcessorHandle<Source>, T>): $CompletableFuture<Source>;
        askEither<Source>(arg0: $Function_<$ProcessorHandle<$Either<Source, $Exception>>, T>): $CompletableFuture<Source>;
        constructor(arg0: $StrictQueue<T, $Runnable_>, arg1: $Executor_, arg2: string);
    }
    export class $StrictQueue<T, F> {
    }
    export interface $StrictQueue<T, F> {
        push(arg0: T): boolean;
        pop(): F;
        size(): number;
        isEmpty(): boolean;
        get empty(): boolean;
    }
    export class $StrictQueue$QueueStrictQueue<T> implements $StrictQueue<T, T> {
        push(arg0: T): boolean;
        pop(): T;
        size(): number;
        isEmpty(): boolean;
        constructor(arg0: $Queue<T>);
        get empty(): boolean;
    }
    export class $ProcessorHandle<Msg> {
        static of<Msg>(arg0: string, arg1: $Consumer_<Msg>): $ProcessorHandle<Msg>;
    }
    export interface $ProcessorHandle<Msg> extends $AutoCloseable {
        tell(arg0: Msg): void;
        ask<Source>(arg0: $Function_<$ProcessorHandle<Source>, Msg>): $CompletableFuture<Source>;
        askEither<Source>(arg0: $Function_<$ProcessorHandle<$Either<Source, $Exception>>, Msg>): $CompletableFuture<Source>;
        name(): string;
        close(): void;
    }
    export class $BlockableEventLoop<R extends $Runnable> implements $ProfilerMeasured, $ProcessorHandle<R>, $Executor {
        isSameThread(): boolean;
        getPendingTasksCount(): number;
        submitAsync(arg0: $Runnable_): $CompletableFuture<void>;
        executeBlocking(arg0: $Runnable_): void;
        tell(arg0: R): void;
        executeIfPossible(arg0: $Runnable_): void;
        waitForTasks(): void;
        profiledMetrics(): $List<$MetricSampler>;
        submit<V>(arg0: $Supplier_<V>): $CompletableFuture<V>;
        submit(arg0: $Runnable_): $CompletableFuture<void>;
        pollTask(): boolean;
        managedBlock(arg0: $BooleanSupplier_): void;
        name(): string;
        execute(arg0: $Runnable_): void;
        ask<Source>(arg0: $Function_<$ProcessorHandle<Source>, R>): $CompletableFuture<Source>;
        askEither<Source>(arg0: $Function_<$ProcessorHandle<$Either<Source, $Exception>>, R>): $CompletableFuture<Source>;
        close(): void;
        get sameThread(): boolean;
        get pendingTasksCount(): number;
    }
    export class $StrictQueue$IntRunnable implements $Runnable {
        run(): void;
        getPriority(): number;
        constructor(arg0: number, arg1: $Runnable_);
        get priority(): number;
    }
    export class $NamedThreadFactory implements $ThreadFactory {
        newThread(arg0: $Runnable_): $Thread;
        constructor(arg0: string);
    }
}
