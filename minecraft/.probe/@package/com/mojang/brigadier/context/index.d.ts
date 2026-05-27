import { $Command_, $Command, $CommandDispatcher, $RedirectModifier, $RedirectModifier_, $ImmutableStringReader, $ResultConsumer_ } from "@package/com/mojang/brigadier";
import { $List, $List_, $Map_, $Map, $Collection } from "@package/java/util";
import { $Enum, $Class } from "@package/java/lang";
import { $CommandNode } from "@package/com/mojang/brigadier/tree";

declare module "@package/com/mojang/brigadier/context" {
    export class $CommandContext<S> {
        copyFor(arg0: S): $CommandContext<S>;
        getRedirectModifier(): $RedirectModifier<S>;
        getNodes(): $List<$ParsedCommandNode<S>>;
        hasNodes(): boolean;
        isForked(): boolean;
        getCommand(): $Command<S>;
        getRange(): $StringRange;
        getLastChild(): $CommandContext<S>;
        getInput(): string;
        getSource(): S;
        getChild(): $CommandContext<S>;
        getRootNode(): $CommandNode<S>;
        getArgument<V>(arg0: string, arg1: $Class<V>): V;
        constructor(arg0: S, arg1: string, arg2: $Map_<string, $ParsedArgument<S, never>>, arg3: $Command_<S>, arg4: $CommandNode<S>, arg5: $List_<$ParsedCommandNode<S>>, arg6: $StringRange, arg7: $CommandContext<S>, arg8: $RedirectModifier_<S>, arg9: boolean);
        get redirectModifier(): $RedirectModifier<S>;
        get nodes(): $List<$ParsedCommandNode<S>>;
        get forked(): boolean;
        get command(): $Command<S>;
        get range(): $StringRange;
        get lastChild(): $CommandContext<S>;
        get input(): string;
        get source(): S;
        get child(): $CommandContext<S>;
        get rootNode(): $CommandNode<S>;
    }
    export class $ParsedCommandNode<S> {
        getRange(): $StringRange;
        getNode(): $CommandNode<S>;
        constructor(arg0: $CommandNode<S>, arg1: $StringRange);
        get range(): $StringRange;
        get node(): $CommandNode<S>;
    }
    export class $StringRange {
        static encompassing(arg0: $StringRange, arg1: $StringRange): $StringRange;
        getStart(): number;
        getEnd(): number;
        static at(arg0: number): $StringRange;
        static between(arg0: number, arg1: number): $StringRange;
        get(arg0: string): string;
        get(arg0: $ImmutableStringReader): string;
        getLength(): number;
        isEmpty(): boolean;
        constructor(arg0: number, arg1: number);
        get start(): number;
        get end(): number;
        get length(): number;
        get empty(): boolean;
    }
    export class $ContextChain$Stage extends $Enum<$ContextChain$Stage> {
        static values(): $ContextChain$Stage[];
        static valueOf(arg0: string): $ContextChain$Stage;
        static EXECUTE: $ContextChain$Stage;
        static MODIFY: $ContextChain$Stage;
    }
    /**
     * Values that may be interpreted as {@link $ContextChain$Stage}.
     */
    export type $ContextChain$Stage_ = "modify" | "execute";
    export class $CommandContextBuilder<S> {
        getDispatcher(): $CommandDispatcher<S>;
        getNodes(): $List<$ParsedCommandNode<S>>;
        withCommand(arg0: $Command_<S>): $CommandContextBuilder<S>;
        withChild(arg0: $CommandContextBuilder<S>): $CommandContextBuilder<S>;
        findSuggestionContext(arg0: number): $SuggestionContext<S>;
        withSource(arg0: S): $CommandContextBuilder<S>;
        getCommand(): $Command<S>;
        getRange(): $StringRange;
        getLastChild(): $CommandContextBuilder<S>;
        withArgument(arg0: string, arg1: $ParsedArgument<S, never>): $CommandContextBuilder<S>;
        getSource(): S;
        getChild(): $CommandContextBuilder<S>;
        build(arg0: string): $CommandContext<S>;
        getArguments(): $Map<string, $ParsedArgument<S, never>>;
        getRootNode(): $CommandNode<S>;
        withNode(arg0: $CommandNode<S>, arg1: $StringRange): $CommandContextBuilder<S>;
        copy(): $CommandContextBuilder<S>;
        constructor(arg0: $CommandDispatcher<S>, arg1: S, arg2: $CommandNode<S>, arg3: number);
        get dispatcher(): $CommandDispatcher<S>;
        get nodes(): $List<$ParsedCommandNode<S>>;
        get command(): $Command<S>;
        get range(): $StringRange;
        get lastChild(): $CommandContextBuilder<S>;
        get source(): S;
        get child(): $CommandContextBuilder<S>;
        get arguments(): $Map<string, $ParsedArgument<S, never>>;
        get rootNode(): $CommandNode<S>;
    }
    export class $ContextChain<S> {
        executeAll(arg0: S, arg1: $ResultConsumer_<S>): number;
        getStage(): $ContextChain$Stage;
        static tryFlatten<S>(arg0: $CommandContext<S>): ($ContextChain<S>) | undefined;
        getTopContext(): $CommandContext<S>;
        nextStage(): $ContextChain<S>;
        static runModifier<S>(arg0: $CommandContext<S>, arg1: S, arg2: $ResultConsumer_<S>, arg3: boolean): $Collection<S>;
        static runExecutable<S>(arg0: $CommandContext<S>, arg1: S, arg2: $ResultConsumer_<S>, arg3: boolean): number;
        constructor(arg0: $List_<$CommandContext<S>>, arg1: $CommandContext<S>);
        get stage(): $ContextChain$Stage;
        get topContext(): $CommandContext<S>;
    }
    export class $ParsedArgument<S, T> {
        getRange(): $StringRange;
        getResult(): T;
        constructor(arg0: number, arg1: number, arg2: T);
        get range(): $StringRange;
        get result(): T;
    }
    export class $SuggestionContext<S> {
        parent: $CommandNode<S>;
        startPos: number;
        constructor(arg0: $CommandNode<S>, arg1: number);
    }
}
