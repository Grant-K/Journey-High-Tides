import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $DyeColor_, $DyeColor } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $MutableComponent, $Component_, $Component, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $List, $List_ } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/com/simibubi/create/content/trains/display" {
    export class $FlapDisplaySection {
        static getFlapCycle(arg0: string): string[];
        renderCharsIndividually(): boolean;
        setText(arg0: $Component_): void;
        refresh(arg0: boolean): void;
        tick(arg0: boolean, arg1: $RandomSource): number;
        wideFlaps(): $FlapDisplaySection;
        rightAligned(): $FlapDisplaySection;
        getSize(): number;
        getText(): $Component;
        update(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        static load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $FlapDisplaySection;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        static WIDE_MONOSPACE: number;
        static MONOSPACE: number;
        constructor(arg0: number, arg1: string, arg2: boolean, arg3: boolean);
        get size(): number;
    }
    export class $GlobalTrainDisplayData$TrainDeparturePrediction implements $Comparable<$GlobalTrainDisplayData$TrainDeparturePrediction> {
        compareTo(arg0: $GlobalTrainDisplayData$TrainDeparturePrediction): number;
        scheduleTitle: $MutableComponent;
        ticks: number;
        destination: string;
        train: $Train;
        constructor(arg0: $Train, arg1: number, arg2: $MutableComponent_, arg3: string);
    }
    export class $FlapDisplayBlockEntity extends $KineticBlockEntity {
        getDirection(): $Direction;
        setGlowing(arg0: number): void;
        getController(): $FlapDisplayBlockEntity;
        getMaxCharCount(): number;
        getMaxCharCount(arg0: number): number;
        applyTextManually(arg0: number, arg1: $Component_): void;
        updateControllerStatus(): void;
        initDefaultSections(): void;
        setColour(arg0: number, arg1: $DyeColor_): void;
        getLineIndexAt(arg0: number): number;
        getLineColor(arg0: number): number;
        isLineGlowing(arg0: number): boolean;
        getLines(): $List<$FlapDisplayLayout>;
        glowingLines: boolean[];
        static ATTACHMENTS_NBT_KEY: string;
        ySize: number;
        source: $BlockPos;
        isController: boolean;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        colour: $DyeColor[];
        manualLines: boolean[];
        isRunning: boolean;
        updateSpeed: boolean;
        xSize: number;
        lines: $List<$FlapDisplayLayout>;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get direction(): $Direction;
        set glowing(value: number);
        get controller(): $FlapDisplayBlockEntity;
    }
    export class $FlapDisplayLayout {
        isLayout(arg0: string): boolean;
        configure(arg0: string, arg1: $List_<$FlapDisplaySection>): void;
        getSections(): $List<$FlapDisplaySection>;
        loadDefault(arg0: number): void;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        constructor(arg0: number);
        get sections(): $List<$FlapDisplaySection>;
    }
}
