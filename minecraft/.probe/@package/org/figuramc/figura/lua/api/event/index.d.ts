import { $Object } from "@package/java/lang";
import { $Map, $Set_ } from "@package/java/util";
import { $Varargs, $LuaFunction } from "@package/org/luaj/vm2";
import { $FiguraEvent } from "@package/org/figuramc/figura/entries";

declare module "@package/org/figuramc/figura/lua/api/event" {
    export class $EventsAPI {
        __index(key: string): $LuaEvent;
        __newindex(key: string, func: $LuaFunction): void;
        static initEntryPoints(set: $Set_<$FiguraEvent>): void;
        getEvents(): $Map<string, $LuaEvent>;
        CHAT_RECEIVE_MESSAGE: $LuaEvent;
        WORLD_RENDER: $LuaEvent;
        TOTEM: $LuaEvent;
        RENDER: $LuaEvent;
        ITEM_RENDER: $LuaEvent;
        MOUSE_SCROLL: $LuaEvent;
        CHAR_TYPED: $LuaEvent;
        POST_WORLD_RENDER: $LuaEvent;
        SKULL_RENDER: $LuaEvent;
        DAMAGE: $LuaEvent;
        MOUSE_PRESS: $LuaEvent;
        USE_ITEM: $LuaEvent;
        CHAT_SEND_MESSAGE: $LuaEvent;
        MOUSE_MOVE: $LuaEvent;
        KEY_PRESS: $LuaEvent;
        WORLD_TICK: $LuaEvent;
        RESOURCE_RELOAD: $LuaEvent;
        POST_RENDER: $LuaEvent;
        ON_PLAY_SOUND: $LuaEvent;
        ARROW_RENDER: $LuaEvent;
        ENTITY_INIT: $LuaEvent;
        TICK: $LuaEvent;
        TRIDENT_RENDER: $LuaEvent;
        constructor();
        get events(): $Map<string, $LuaEvent>;
    }
    export class $LuaEvent {
        __len(): number;
        getRegisteredCount(name: string): number;
        remove(toRemove: $Object): number;
        clear(): void;
        register(func: $LuaFunction, name: string): $LuaEvent;
        call(args: $Varargs): $Varargs;
        constructor();
        constructor(piped: boolean);
    }
}
