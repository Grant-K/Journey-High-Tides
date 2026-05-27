import { $ModelDefinition } from "@package/com/tom/cpm/shared/definition";
import { $NBTTagCompound } from "@package/com/tom/cpl/nbt";
import { $IOHelper } from "@package/com/tom/cpm/shared/io";
import { $Set } from "@package/java/util";
import { $AnimLoaderState } from "@package/com/tom/cpm/shared/parts/anim";
import { $ConfigEntry } from "@package/com/tom/cpl/config";

declare module "@package/com/tom/cpm/shared/parts/anim/menu" {
    export class $AbstractGestureButtonData {
        canShow(): boolean;
        setDef(arg0: $ModelDefinition): void;
        getKeybindId(): string;
        getCommandActions(): $Set<$CommandAction>;
        storeTo(arg0: $ConfigEntry): void;
        isProperty(): boolean;
        onKeybind(arg0: string, arg1: boolean, arg2: boolean): void;
        onRegistered(): void;
        getDefinition(): $ModelDefinition;
        loadFrom(arg0: $ConfigEntry): void;
        getName(): string;
        write(arg0: $IOHelper): void;
        setName(arg0: string): void;
        static parse(arg0: $IOHelper, arg1: $AnimLoaderState): void;
        getType(): $GestureButtonType;
        constructor();
        set def(value: $ModelDefinition);
        get keybindId(): string;
        get commandActions(): $Set<$CommandAction>;
        get property(): boolean;
        get definition(): $ModelDefinition;
        get type(): $GestureButtonType;
    }
    export class $CustomPoseGestureButtonData extends $AbstractGestureButtonData$AbstractCommandTriggerableData {
        static pose(): $CustomPoseGestureButtonData;
        isPose(): boolean;
        static gesture(): $CustomPoseGestureButtonData;
        activate(): void;
        static CONDITIONAL: number;
        gid: number;
        hidden: boolean;
        static LAYER_CTRL: number;
        static PROPERTY: number;
        id: number;
        static COMMAND_CTRL: number;
        static HIDDEN: number;
        gestureTimeout: number;
        command: boolean;
        layerCtrl: boolean;
        constructor(arg0: boolean);
    }
    export class $CommandAction$ServerCommandAction {
    }
    export interface $CommandAction$ServerCommandAction {
        isCommandControlled(): boolean;
        getName(): string;
        getValue(): number;
        get commandControlled(): boolean;
        get name(): string;
        get value(): number;
    }
    export class $CommandAction {
        static serialize(arg0: $CommandAction): $NBTTagCompound;
    }
    export interface $CommandAction {
        isCommandControlled(): boolean;
        getMaxValue(): number;
        getName(): string;
        getValue(): number;
        write(arg0: $NBTTagCompound): void;
        setValue(arg0: number): void;
        getType(): $CommandAction$ActionType;
        get commandControlled(): boolean;
        get maxValue(): number;
        get name(): string;
        get type(): $CommandAction$ActionType;
    }
}
