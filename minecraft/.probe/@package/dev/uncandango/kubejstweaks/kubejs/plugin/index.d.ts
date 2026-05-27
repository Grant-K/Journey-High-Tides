import { $JsonElement } from "@package/com/google/gson";
import { $Consumer_ } from "@package/java/util/function";
import { $Callable_, $Executor_ } from "@package/java/util/concurrent";
import { $CloseableResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $Object, $Enum, $Class } from "@package/java/lang";
import { $WeakReference } from "@package/java/lang/ref";

declare module "@package/dev/uncandango/kubejstweaks/kubejs/plugin" {
    export class $KJSTPluginUtils$KJSTPackType extends $Enum<$KJSTPluginUtils$KJSTPackType> {
        static values(): $KJSTPluginUtils$KJSTPackType[];
        static valueOf(arg0: string): $KJSTPluginUtils$KJSTPackType;
        static ASSETS: $KJSTPluginUtils$KJSTPackType;
        static DATA: $KJSTPluginUtils$KJSTPackType;
    }
    /**
     * Values that may be interpreted as {@link $KJSTPluginUtils$KJSTPackType}.
     */
    export type $KJSTPluginUtils$KJSTPackType_ = "assets" | "data";
    export class $KJSTPluginUtils {
        static readJsonFromMod(arg1: string, arg2: string, arg3: $KJSTPluginUtils$KJSTPackType_): $JsonElement;
        static readJsonFromMod(arg1: string, arg2: string): $JsonElement;
        static runIfModPresent(arg1: string, arg2: string, arg3: $Callable_<void>): void;
        static runIfModPresent(arg1: string, arg2: $Callable_<void>): void;
        static curseForgeGetEndpoint(arg0: string, arg1: $Executor_, arg2: $Consumer_<$JsonElement>): void;
        static getClass(arg0: $Object): $Class<never>;
        static getSuperclass(arg0: $Object): $Class<never>;
        static TEMPORARY_SERVER_PACK_RESOURCES: $CloseableResourceManager;
        static SERVER_PACK_RESOURCES: $WeakReference<$CloseableResourceManager>;
        static CLIENT_PACK_RESOURCES: $CloseableResourceManager;
        constructor();
    }
}
