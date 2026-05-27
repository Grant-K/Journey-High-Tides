import { $Level_ } from "@package/net/minecraft/world/level";
import { $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/de/ellpeck/naturesaura/api/aura/type" {
    export class $IAuraType {
        static forLevel(arg0: $Level_): $IAuraType;
    }
    export interface $IAuraType {
        getColor(): number;
        isSimilar(arg0: $IAuraType): boolean;
        isPresentInLevel(arg0: $Level_): boolean;
        getName(): $ResourceLocation;
        getPriority(): number;
        get color(): number;
        get name(): $ResourceLocation;
        get priority(): number;
    }
}
