import { $GameRules$Key, $GameRules$Value } from "@package/net/minecraft/world/level";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";

declare module "@package/net/fabricmc/fabric/api/gamerule/v1" {
    export class $CustomGameRuleCategory {
        static getCategory<T extends $GameRules$Value<T>>(arg0: $GameRules$Key<T>): ($CustomGameRuleCategory) | undefined;
        getName(): $Component;
        getId(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $Component_);
        get name(): $Component;
        get id(): $ResourceLocation;
    }
}
