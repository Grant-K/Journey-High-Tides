import { $Avatar } from "@package/org/figuramc/figura/avatar";
import { $Object } from "@package/java/lang";
import { $LuaValue, $LuaString, $LuaNumber, $LuaBoolean, $LuaFunction } from "@package/org/luaj/vm2";

declare module "@package/org/figuramc/figura/lua/api/ping" {
    export class $PingFunction extends $LuaFunction {
        static ZERO: $LuaNumber;
        static CALL: $LuaString;
        static ADD: $LuaString;
        static TFUNCTION: number;
        static CONCAT: $LuaString;
        static ONE: $LuaNumber;
        static MODE: $LuaString;
        static TNONE: number;
        static LT: $LuaString;
        static TVALUE: number;
        static ENV: $LuaString;
        static EMPTYSTRING: $LuaString;
        static TTABLE: number;
        static UNM: $LuaString;
        static TSTRING: number;
        static INDEX: $LuaString;
        static TOSTRING: $LuaString;
        static TINT: number;
        static NONE: $LuaValue;
        static TTHREAD: number;
        static SUB: $LuaString;
        static MOD: $LuaString;
        static MUL: $LuaString;
        static MINUSONE: $LuaNumber;
        static NILS: $LuaValue[];
        static NOVALS: $LuaValue[];
        static TRUE: $LuaBoolean;
        static TNUMBER: number;
        static EQ: $LuaString;
        static NIL: $LuaValue;
        static DIV: $LuaString;
        static METATABLE: $LuaString;
        func: $LuaFunction;
        static LEN: $LuaString;
        static TUSERDATA: number;
        static TYPE_NAMES: string[];
        static POW: $LuaString;
        static LE: $LuaString;
        static TNIL: number;
        static FALSE: $LuaBoolean;
        static NEWINDEX: $LuaString;
        static s_metatable: $LuaValue;
        static TBOOLEAN: number;
        static TLIGHTUSERDATA: number;
        constructor(id: number, owner: $Avatar, func: $LuaFunction);
    }
    export class $PingAPI {
        __index(arg: string): $Object;
        __newindex(key: string, value: $LuaFunction): void;
        getName(id: number): string;
        get(arg: string): $PingFunction;
        constructor(owner: $Avatar);
    }
}
