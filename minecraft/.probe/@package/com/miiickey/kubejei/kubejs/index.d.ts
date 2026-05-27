import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as event from "@package/com/miiickey/kubejei/kubejs/event";
export * as jei from "@package/com/miiickey/kubejei/kubejs/jei";
export * as util from "@package/com/miiickey/kubejei/kubejs/util";

declare module "@package/com/miiickey/kubejei/kubejs" {
    export class $KubeJEIScreenElement {
    }
    export interface $KubeJEIScreenElement {
        getWidth(): number;
        getHeight(): number;
        getStartX(): number;
        getStartY(): number;
        render(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        location(arg0: string): $ResourceLocation;
        getLocation(): $ResourceLocation;
        get width(): number;
        get height(): number;
        get startX(): number;
        get startY(): number;
    }
}
