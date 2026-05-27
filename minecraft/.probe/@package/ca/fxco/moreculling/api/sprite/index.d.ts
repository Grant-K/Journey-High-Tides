import { $QuadBounds } from "@package/ca/fxco/moreculling/api/data";
import { $List_ } from "@package/java/util";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";

declare module "@package/ca/fxco/moreculling/api/sprite" {
    export class $SpriteOpacity {
    }
    export interface $SpriteOpacity {
        moreculling$hasTransparency(arg0: $QuadBounds): boolean;
        moreculling$hasTransparency(): boolean;
        moreculling$getUnmipmappedImage(): $NativeImage;
        moreculling$hasTranslucency(arg0: $QuadBounds, arg1: $List_<$NativeImage>): boolean;
        moreculling$hasTranslucency(arg0: $List_<$NativeImage>): boolean;
        moreculling$hasTranslucency(arg0: $QuadBounds): boolean;
        moreculling$hasTranslucency(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SpriteOpacity}.
     */
    export type $SpriteOpacity_ = (() => $NativeImage);
}
