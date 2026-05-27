import { $NameplateAPI } from "@package/org/figuramc/figura/lua/api/nameplate";
import { $KeybindAPI } from "@package/org/figuramc/figura/lua/api/keybind";
import { $EventsAPI } from "@package/org/figuramc/figura/lua/api/event";
import { $ListTag_ } from "@package/net/minecraft/nbt";
import { $Avatar$Instructions, $Avatar } from "@package/org/figuramc/figura/avatar";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Map_ } from "@package/java/util";
import { $HostAPI, $RendererAPI, $TextureAPI, $AvatarAPI } from "@package/org/figuramc/figura/lua/api";
import { $PingAPI } from "@package/org/figuramc/figura/lua/api/ping";
import { $EntityAPI } from "@package/org/figuramc/figura/lua/api/entity";
import { $VanillaModelAPI } from "@package/org/figuramc/figura/lua/api/vanilla_model";
import { $Method } from "@package/java/lang/reflect";
import { $VarArgFunction } from "@package/org/luaj/vm2/lib";
import { $Throwable, $Object, $Class } from "@package/java/lang";
import { $ActionWheelAPI } from "@package/org/figuramc/figura/lua/api/action_wheel";
import { $LuaValue, $LuaError, $Varargs, $LuaTable } from "@package/org/luaj/vm2";
export * as api from "@package/org/figuramc/figura/lua/api";

declare module "@package/org/figuramc/figura/lua" {
    export class $FiguraLuaRuntime {
        setUser(user: $Entity): void;
        registerClass(clazz: $Class<never>): void;
        static parseError(e: $Throwable): $LuaError;
        takeInstructions(amount: number): void;
        setInstructionLimit(limit: number): void;
        getInstructions(): number;
        error(e: $Throwable): void;
        getUser(): $Entity;
        setGlobal(name: string, obj: $Object): void;
        run(toRun: $Object, limit: $Avatar$Instructions, ...args: $Object[]): $Varargs;
        load(name: string, src: string): $LuaValue;
        init(autoScripts: $ListTag_): boolean;
        owner: $Avatar;
        avatar_meta: $AvatarAPI;
        renderer: $RendererAPI;
        vanilla_model: $VanillaModelAPI;
        ping: $PingAPI;
        texture: $TextureAPI;
        entityAPI: $EntityAPI<never>;
        action_wheel: $ActionWheelAPI;
        typeManager: $LuaTypeManager;
        keybinds: $KeybindAPI;
        host: $HostAPI;
        nameplate: $NameplateAPI;
        events: $EventsAPI;
        constructor(avatar: $Avatar, scripts: $Map_<string, string>);
        set instructionLimit(value: number);
        get instructions(): number;
    }
    export class $LuaTypeManager {
        javaToLua(val: $Object): $Varargs;
        dumpMetatables(table: $LuaTable): void;
        generateMetatableFor(clazz: $Class<never>): void;
        luaVarargToJava(args: $Varargs, argIndex: number, argumentType: $Class<never>): $Object;
        luaToJava(val: $LuaValue): $Object;
        getWrapper(method: $Method): $VarArgFunction;
        getTypeName(clazz: $Class<never>): string;
        constructor();
    }
}
