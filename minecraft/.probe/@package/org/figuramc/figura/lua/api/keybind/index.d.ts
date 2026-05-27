import { $Component } from "@package/net/minecraft/network/chat";
import { $Avatar } from "@package/org/figuramc/figura/avatar";
import { $Object } from "@package/java/lang";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $List_, $HashMap, $List } from "@package/java/util";
import { $LuaFunction } from "@package/org/luaj/vm2";

declare module "@package/org/figuramc/figura/lua/api/keybind" {
    export class $KeybindAPI {
        fromVanilla(id: string): $FiguraKeybind;
        newKeybind(name: string, key: string, gui: boolean): $FiguraKeybind;
        getVanillaKey(id: string): string;
        getKeybinds(): $HashMap<string, $FiguraKeybind>;
        of(name: string, key: string, gui: boolean): $FiguraKeybind;
        owner: $Avatar;
        keyBindings: $List<$FiguraKeybind>;
        constructor(owner: $Avatar);
        get keybinds(): $HashMap<string, $FiguraKeybind>;
    }
    export class $FiguraKeybind {
        setEnabled(bool: boolean): $FiguraKeybind;
        gui(bool: boolean): $FiguraKeybind;
        isPressed(): boolean;
        onPress(_function: $LuaFunction): $FiguraKeybind;
        getTranslatedKeyMessage(): $Component;
        static updateAll(bindings: $List_<$FiguraKeybind>): void;
        onRelease(_function: $LuaFunction): $FiguraKeybind;
        setDown(pressed: boolean, modifiers: number): boolean;
        static overridesKey(bindings: $List_<$FiguraKeybind>, key: $InputConstants$Key): boolean;
        __index(arg: string): $Object;
        __newindex(key: string, value: $LuaFunction): void;
        resetDefaultKey(): void;
        setOnPress(_function: $LuaFunction): $FiguraKeybind;
        setOnRelease(_function: $LuaFunction): $FiguraKeybind;
        isGuiEnabled(): boolean;
        setGUI(bool: boolean): $FiguraKeybind;
        getID(): number;
        static parseStringKey(key: string): $InputConstants$Key;
        isDefault(): boolean;
        setKey(key: $InputConstants$Key): void;
        setKey(key: string): $FiguraKeybind;
        static releaseAll(bindings: $List_<$FiguraKeybind>): void;
        getKeyName(): string;
        getName(): string;
        isEnabled(): boolean;
        getKey(): string;
        enabled(bool: boolean): $FiguraKeybind;
        static set(bindings: $List_<$FiguraKeybind>, key: $InputConstants$Key, pressed: boolean, modifiers: number): boolean;
        key(key: string): $FiguraKeybind;
        release: $LuaFunction;
        press: $LuaFunction;
        constructor(owner: $Avatar, name: string, key: $InputConstants$Key);
        get pressed(): boolean;
        get translatedKeyMessage(): $Component;
        get guiEnabled(): boolean;
        set GUI(value: boolean);
        get ID(): number;
        get default(): boolean;
        get keyName(): string;
        get name(): string;
    }
}
