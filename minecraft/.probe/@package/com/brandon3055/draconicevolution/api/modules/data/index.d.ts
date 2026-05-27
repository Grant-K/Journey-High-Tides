import { $Level_ } from "@package/net/minecraft/world/level";
import { $Function_ } from "@package/java/util/function";
import { $TechLevel, $TechLevel_ } from "@package/com/brandon3055/brandonscore/api";
import { $ItemStack_, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $ModuleContext } from "@package/com/brandon3055/draconicevolution/api/modules/lib";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $List_, $Map_ } from "@package/java/util";
import { $ModuleType, $Module, $Module_ } from "@package/com/brandon3055/draconicevolution/api/modules";

declare module "@package/com/brandon3055/draconicevolution/api/modules/data" {
    export class $ModuleData<D extends $ModuleData<D>> {
        static formatNumber(arg0: number): string;
        static round(arg0: number, arg1: number): number;
    }
    export interface $ModuleData<D extends $ModuleData<D>> {
        addInformation(arg0: $Map_<$Component_, $Component_>, arg1: $ModuleContext): void;
        /**
         * @deprecated
         */
        addInformation(arg0: $Map_<$Component_, $Component_>, arg1: $ModuleContext, arg2: boolean): void;
        addHostHoverText(arg0: $ItemStack_, arg1: $Level_, arg2: $List_<$Component_>, arg3: $TooltipFlag): void;
        combine(arg0: D): D;
    }
    /**
     * Values that may be interpreted as {@link $ModuleData}.
     */
    export type $ModuleData_<D> = ((arg0: D) => D);
    export class $ModuleProperties<T extends $ModuleData<T>> {
        loadDefaults(arg0: $ModuleType<T>): void;
        getData(): T;
        addStats(arg0: $List_<$Component_>, arg1: $Module_<never>, arg2: $ModuleContext): void;
        reloadData(arg0: $Module_<T>): void;
        getTechLevel(): $TechLevel;
        getWidth(): number;
        getHeight(): number;
        constructor(arg0: $TechLevel_, arg1: number, arg2: number, arg3: $Function_<$Module<T>, T>);
        constructor(arg0: $TechLevel_, arg1: $Function_<$Module<T>, T>);
        get data(): T;
        get techLevel(): $TechLevel;
        get width(): number;
        get height(): number;
    }
}
