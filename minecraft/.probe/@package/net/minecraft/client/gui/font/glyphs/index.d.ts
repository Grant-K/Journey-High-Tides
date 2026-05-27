import { $Function_ } from "@package/java/util/function";
import { $GlyphInfo, $SheetGlyphInfo } from "@package/com/mojang/blaze3d/font";
import { $AccessorBakedGlyph } from "@package/com/sammy/malum/mixin/client";
import { $EmojiContainer } from "@package/org/figuramc/figura/font";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GlyphRenderTypes_ } from "@package/net/minecraft/client/gui/font";
import { $Font$DisplayMode_ } from "@package/net/minecraft/client/gui";
import { $Enum } from "@package/java/lang";
import { $BakedGlyphAccessor } from "@package/org/figuramc/figura/ducks";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/net/minecraft/client/gui/font/glyphs" {
    export class $BakedGlyph$Effect {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number);
    }
    export class $BakedGlyph implements $BakedGlyphAccessor, $AccessorBakedGlyph {
        renderType(arg0: $Font$DisplayMode_): $RenderType;
        handler$hmc000$figura$render(italic: boolean, x: number, y: number, matrix: $Matrix4f, vertexConsumer: $VertexConsumer, red: number, green: number, blue: number, alpha: number, light: number, ci: $CallbackInfo): void;
        renderEffect(arg0: $BakedGlyph$Effect, arg1: $Matrix4f, arg2: $VertexConsumer, arg3: number): void;
        figura$setupEmoji(container: $EmojiContainer, codepoint: number): void;
        render(arg0: boolean, arg1: number, arg2: number, arg3: $Matrix4f, arg4: $VertexConsumer, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $GlyphRenderTypes_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number);
    }
    export class $SpecialGlyphs$PixelProvider {
    }
    export interface $SpecialGlyphs$PixelProvider {
    }
    /**
     * Values that may be interpreted as {@link $SpecialGlyphs$PixelProvider}.
     */
    export type $SpecialGlyphs$PixelProvider_ = (() => void);
    export class $EmptyGlyph extends $BakedGlyph {
        static INSTANCE: $EmptyGlyph;
        constructor();
    }
    export class $SpecialGlyphs extends $Enum<$SpecialGlyphs> implements $GlyphInfo {
        bake(arg0: $Function_<$SheetGlyphInfo, $BakedGlyph>): $BakedGlyph;
        getAdvance(): number;
        static values(): $SpecialGlyphs[];
        static valueOf(arg0: string): $SpecialGlyphs;
        getShadowOffset(): number;
        getAdvance(arg0: boolean): number;
        getBoldOffset(): number;
        static WHITE: $SpecialGlyphs;
        static MISSING: $SpecialGlyphs;
        get shadowOffset(): number;
        get boldOffset(): number;
    }
    /**
     * Values that may be interpreted as {@link $SpecialGlyphs}.
     */
    export type $SpecialGlyphs_ = "white" | "missing";
}
