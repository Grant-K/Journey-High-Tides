import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $BakedShell } from "@package/foundry/veil/api/flare/model";
import { $ControllerManager } from "@package/foundry/veil/api/flare/modifier";
import { $ShellManager } from "@package/foundry/veil/impl/flare";
import { $FlareModule, $FlareEffectTemplate } from "@package/foundry/veil/api/flare/data/effect";
import { $AutoCloseable } from "@package/java/lang";
export * as modifier from "@package/foundry/veil/api/flare/modifier";
export * as data from "@package/foundry/veil/api/flare/data";
export * as model from "@package/foundry/veil/api/flare/model";

declare module "@package/foundry/veil/api/flare" {
    export class $FlareEffectManager {
        getControllerManager(): $ControllerManager;
        getBakedShell(arg0: $ResourceLocation_): $BakedShell;
        getShellManager(): $ShellManager;
        static getTemplate(arg0: $ResourceLocation_): $FlareEffectTemplate;
        static getModule(arg0: $ResourceLocation_): $FlareModule;
        static getInstance(): $FlareEffectManager;
        constructor();
        get controllerManager(): $ControllerManager;
        get shellManager(): $ShellManager;
        static get instance(): $FlareEffectManager;
    }
    export class $EffectHost {
    }
    export interface $EffectHost extends $AutoCloseable {
        getName(): string;
        update(arg0: number): void;
        getValue(arg0: string): number;
        close(): void;
        get name(): string;
    }
}
