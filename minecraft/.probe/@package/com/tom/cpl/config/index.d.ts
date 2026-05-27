import { $Runnable_, $Object } from "@package/java/lang";
import { $Map_, $Set } from "@package/java/util";

declare module "@package/com/tom/cpl/config" {
    export class $ConfigEntry {
        getString(arg0: string, arg1: string): string;
        getSetBoolean(arg0: string, arg1: boolean): boolean;
        getSetString(arg0: string, arg1: string): string;
        clearValue(arg0: string): void;
        getSetInt(arg0: string, arg1: number): number;
        getEntryList(arg0: string): $ConfigEntry$ConfigEntryList;
        hasEntry(arg0: string): boolean;
        getSetFloat(arg0: string, arg1: number): number;
        getEntry(arg0: string): $ConfigEntry;
        setString(arg0: string, arg1: string): void;
        getBoolean(arg0: string, arg1: boolean): boolean;
        getInt(arg0: string, arg1: number): number;
        getFloat(arg0: string, arg1: number): number;
        clear(): void;
        keySet(): $Set<string>;
        setBoolean(arg0: string, arg1: boolean): void;
        setInt(arg0: string, arg1: number): void;
        setFloat(arg0: string, arg1: number): void;
        constructor(arg0: $Map_<string, $Object>, arg1: $Runnable_);
    }
}
