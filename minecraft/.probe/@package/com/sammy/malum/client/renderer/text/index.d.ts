import { $RenderType } from "@package/net/minecraft/client/renderer";

declare module "@package/com/sammy/malum/client/renderer/text" {
    export class $SubtractiveTextGlyphRenderTypes {
    }
    export interface $SubtractiveTextGlyphRenderTypes {
        malum$getSubtractiveType(): $RenderType;
    }
    /**
     * Values that may be interpreted as {@link $SubtractiveTextGlyphRenderTypes}.
     */
    export type $SubtractiveTextGlyphRenderTypes_ = (() => $RenderType);
}
