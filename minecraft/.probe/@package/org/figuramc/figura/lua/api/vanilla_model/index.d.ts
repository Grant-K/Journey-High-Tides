import { $EntityModel } from "@package/net/minecraft/client/model";
import { $Function_ } from "@package/java/util/function";
import { $ParentType_ } from "@package/org/figuramc/figura/model";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $Avatar } from "@package/org/figuramc/figura/avatar";
import { $FiguraVec3 } from "@package/org/figuramc/figura/math/vector";
import { $Object } from "@package/java/lang";
import { $Set_ } from "@package/java/util";
import { $FiguraVanillaPart } from "@package/org/figuramc/figura/entries";

declare module "@package/org/figuramc/figura/lua/api/vanilla_model" {
    export class $VanillaModelAPI {
        __index(key: string): $Object;
        static initEntryPoints(set: $Set_<$FiguraVanillaPart>): void;
        HEAD: $VanillaModelPart;
        BOOTS_LEFT_LEG: $VanillaModelPart;
        ALL: $VanillaGroupPart;
        RIGHT_ITEM: $VanillaModelPart;
        CHESTPLATE: $VanillaGroupPart;
        LEGGINGS_LEFT_LEG: $VanillaModelPart;
        OUTER_LAYER: $VanillaGroupPart;
        BOOTS_RIGHT_LEG: $VanillaModelPart;
        LEFT_SLEEVE: $VanillaModelPart;
        CAPE: $VanillaGroupPart;
        HELMET_ITEM: $VanillaModelPart;
        RIGHT_LEG: $VanillaModelPart;
        LEFT_LEG: $VanillaModelPart;
        FAKE_CAPE: $VanillaModelPart;
        HELMET_HAT: $VanillaModelPart;
        RIGHT_PANTS: $VanillaModelPart;
        HELMET_HEAD: $VanillaModelPart;
        RIGHT_ARM: $VanillaModelPart;
        CAPE_MODEL: $VanillaModelPart;
        LEGGINGS_BODY: $VanillaModelPart;
        LEFT_ITEM: $VanillaModelPart;
        HELMET: $VanillaGroupPart;
        LEFT_ARM: $VanillaModelPart;
        INNER_LAYER: $VanillaGroupPart;
        CHESTPLATE_RIGHT_ARM: $VanillaModelPart;
        ARMOR: $VanillaGroupPart;
        BOOTS: $VanillaGroupPart;
        ELYTRA: $VanillaGroupPart;
        CHESTPLATE_LEFT_ARM: $VanillaModelPart;
        PLAYER: $VanillaGroupPart;
        LEGGINGS: $VanillaGroupPart;
        RIGHT_ELYTRA: $VanillaModelPart;
        JACKET: $VanillaModelPart;
        RIGHT_SLEEVE: $VanillaModelPart;
        RIGHT_PARROT: $VanillaModelPart;
        HELD_ITEMS: $VanillaGroupPart;
        LEGGINGS_RIGHT_LEG: $VanillaModelPart;
        CHESTPLATE_BODY: $VanillaModelPart;
        LEFT_ELYTRA: $VanillaModelPart;
        LEFT_PARROT: $VanillaModelPart;
        HAT: $VanillaModelPart;
        PARROTS: $VanillaGroupPart;
        LEFT_PANTS: $VanillaModelPart;
        BODY: $VanillaModelPart;
        constructor(owner: $Avatar);
    }
    export class $VanillaModelPart extends $VanillaPart {
        getOriginVisible(): boolean;
        getOriginRot(): $FiguraVec3;
        getOriginPos(): $FiguraVec3;
        getOriginScale(): $FiguraVec3;
        constructor(owner: $Avatar, name: string, parentType: $ParentType_, provider: $Function_<$EntityModel<never>, $ModelPart>);
        get originVisible(): boolean;
        get originRot(): $FiguraVec3;
        get originPos(): $FiguraVec3;
        get originScale(): $FiguraVec3;
    }
    export class $VanillaGroupPart extends $VanillaPart {
        __index(key: string): $Object;
        constructor(owner: $Avatar, name: string, ...parts: $VanillaPart[]);
    }
}
