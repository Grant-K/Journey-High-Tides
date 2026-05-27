import { $Component } from "@package/net/minecraft/network/chat";
import { $FiguraVec2, $FiguraVec4, $FiguraVec3 } from "@package/org/figuramc/figura/math/vector";
import { $Object } from "@package/java/lang";

declare module "@package/org/figuramc/figura/lua/api/nameplate" {
    export class $NameplateCustomizationGroup {
        setText(text: string): $NameplateCustomizationGroup;
        constructor(...customizations: $NameplateCustomization[]);
        set text(value: string);
    }
    export class $EntityNameplateCustomization extends $NameplateCustomization {
        setVisible(visible: boolean): $EntityNameplateCustomization;
        getBackgroundColor(): $FiguraVec4;
        setLight(light: $Object, skyLight: number): $EntityNameplateCustomization;
        backgroundColor(r: $Object, g: number, b: number, a: number): $EntityNameplateCustomization;
        light(light: $Object, skyLight: number): $EntityNameplateCustomization;
        getScale(): $FiguraVec3;
        setPos(x: $Object, y: number, z: number): $EntityNameplateCustomization;
        isVisible(): boolean;
        getPos(): $FiguraVec3;
        outlineColor(x: $Object, y: number, z: number): $EntityNameplateCustomization;
        hasOutline(): boolean;
        hasShadow(): boolean;
        getLight(): $FiguraVec2;
        setBackgroundColor(r: $Object, g: number, b: number, a: number): $EntityNameplateCustomization;
        setOutline(outline: boolean): $EntityNameplateCustomization;
        setOutlineColor(x: $Object, y: number, z: number): $EntityNameplateCustomization;
        setPivot(x: $Object, y: number, z: number): $EntityNameplateCustomization;
        pivot(x: $Object, y: number, z: number): $EntityNameplateCustomization;
        visible(visible: boolean): $EntityNameplateCustomization;
        setShadow(shadow: boolean): $EntityNameplateCustomization;
        shadow(shadow: boolean): $EntityNameplateCustomization;
        setScale(x: $Object, y: number, z: number): $EntityNameplateCustomization;
        getPivot(): $FiguraVec3;
        pos(x: $Object, y: number, z: number): $EntityNameplateCustomization;
        outline(outline: boolean): $EntityNameplateCustomization;
        scale(x: $Object, y: number, z: number): $EntityNameplateCustomization;
        background: number;
        constructor();
    }
    export class $NameplateCustomization {
        setText(text: string): $NameplateCustomization;
        getJson(): $Component;
        getText(): string;
        constructor();
        get json(): $Component;
    }
    export class $NameplateAPI {
        __index(arg: string): $Object;
        ALL: $NameplateCustomizationGroup;
        ENTITY: $EntityNameplateCustomization;
        CHAT: $NameplateCustomization;
        LIST: $NameplateCustomization;
        constructor();
    }
}
