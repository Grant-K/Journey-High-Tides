import { $Color } from "@package/net/silentchaos512/lib/util";
import { $Record } from "@package/java/lang";

declare module "@package/net/silentchaos512/gear/client/tooltip" {
    export class $FormatColorScheme extends $Record {
        getColor(arg0: number, arg1: number): $Color;
        positive(): $Color;
        plain(): $Color;
        zero(): $Color;
        negative(): $Color;
        static DARK_GREY_ZERO_OR_WHITE: $FormatColorScheme;
        static NO_COLORS: $FormatColorScheme;
        static WHITE_ONLY: $FormatColorScheme;
        static LIGHT: $FormatColorScheme;
        static DARK: $FormatColorScheme;
        static DARK_GREY_ZERO_OR_NO_COLOR: $FormatColorScheme;
        constructor(plain: $Color, zero: $Color, positive: $Color, negative: $Color);
    }
    /**
     * Values that may be interpreted as {@link $FormatColorScheme}.
     */
    export type $FormatColorScheme_ = { positive?: $Color, plain?: $Color, negative?: $Color, zero?: $Color,  } | [positive?: $Color, plain?: $Color, negative?: $Color, zero?: $Color, ];
}
