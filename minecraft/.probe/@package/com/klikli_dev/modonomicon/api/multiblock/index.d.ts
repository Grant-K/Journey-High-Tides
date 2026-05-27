import { $BlockAndTintGetter, $Level_, $BlockGetter } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Vec3i } from "@package/net/minecraft/core";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Rotation, $Rotation_ } from "@package/net/minecraft/world/level/block";
import { $Collection } from "@package/java/util";

declare module "@package/com/klikli_dev/modonomicon/api/multiblock" {
    export class $StateMatcher {
    }
    export interface $StateMatcher {
        toNetwork(arg0: $FriendlyByteBuf): void;
        countsTowardsTotalBlocks(): boolean;
        getStatePredicate(): $TriPredicate<$BlockGetter, $BlockPos, $BlockState>;
        getDisplayedState(arg0: number): $BlockState;
        getType(): $ResourceLocation;
        get statePredicate(): $TriPredicate<$BlockGetter, $BlockPos, $BlockState>;
        get type(): $ResourceLocation;
    }
    export class $Multiblock$SimulateResult {
    }
    export interface $Multiblock$SimulateResult {
        getCharacter(): string;
        getWorldPosition(): $BlockPos;
        getStateMatcher(): $StateMatcher;
        test(arg0: $Level_, arg1: $Rotation_): boolean;
        get character(): string;
        get worldPosition(): $BlockPos;
        get stateMatcher(): $StateMatcher;
    }
    export class $TriPredicate<A, B, C> {
    }
    export interface $TriPredicate<A, B, C> {
        test(arg0: A, arg1: B, arg2: C): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TriPredicate}.
     */
    export type $TriPredicate_<A, B, C> = ((arg0: A, arg1: B, arg2: C) => boolean);
    export class $Multiblock {
    }
    export interface $Multiblock extends $BlockAndTintGetter {
        isSymmetrical(): boolean;
        simulate(arg0: $Level_, arg1: $BlockPos_, arg2: $Rotation_, arg3: boolean, arg4: boolean): $Pair<$BlockPos, $Collection<$Multiblock$SimulateResult>>;
        toNetwork(arg0: $FriendlyByteBuf): void;
        setLevel(arg0: $Level_): void;
        place(arg0: $Level_, arg1: $BlockPos_, arg2: $Rotation_): void;
        getViewOffset(): $Vec3i;
        offsetView(arg0: number, arg1: number, arg2: number): $Multiblock;
        setSymmetrical(arg0: boolean): $Multiblock;
        getSize(): $Vec3i;
        getOffset(): $Vec3i;
        setId(arg0: $ResourceLocation_): $Multiblock;
        test(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: number, arg4: number, arg5: $Rotation_): boolean;
        offset(arg0: number, arg1: number, arg2: number): $Multiblock;
        validate(arg0: $Level_, arg1: $BlockPos_, arg2: $Rotation_): boolean;
        validate(arg0: $Level_, arg1: $BlockPos_): $Rotation;
        getId(): $ResourceLocation;
        getType(): $ResourceLocation;
        set level(value: $Level_);
        get viewOffset(): $Vec3i;
        get size(): $Vec3i;
        get type(): $ResourceLocation;
    }
}
