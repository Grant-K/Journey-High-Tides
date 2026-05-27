import { $BiConsumer_, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $Object } from "@package/java/lang";
import { $Map } from "@package/java/util";

declare module "@package/com/tom/cpl/text" {
    export class $IText {
        static NULL: $TextStyle;
    }
    export interface $IText {
        remap<C>(arg0: $TextRemapper<C>): C;
        remap<C>(): C;
        walkParts(arg0: $I18n_, arg1: $BiConsumer_<string, $TextStyle>): void;
        toString(arg0: $I18n_): string;
        toMap(): $Map<string, $Object>;
    }
    export class $TextRemapper<C> {
        translate(arg0: string, arg1: $Object[]): C;
        keyBind(arg0: string): C;
        hasKeybind(): boolean;
        static stringMapper(arg0: $BiFunction_<string, $Object[], string>): $TextRemapper<string>;
        string(arg0: string): C;
        styling(arg0: C, arg1: $TextStyle): C;
        combine(arg0: C, arg1: C): C;
        constructor(arg0: $BiFunction_<string, $Object[], C>, arg1: $Function_<string, C>, arg2: $BiFunction_<C, C, C>, arg3: $Function_<string, C>, arg4: $BiFunction_<C, $TextStyle, C>);
    }
    export class $TextStyle {
        toMap(): $Map<string, $Object>;
        underline: boolean;
        bold: boolean;
        strikethrough: boolean;
        italic: boolean;
        constructor(arg0: $TextStyle);
        constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean);
        constructor();
    }
    export class $I18n {
    }
    export interface $I18n {
        i18nFormat(arg0: string, ...arg1: $Object[]): string;
    }
    /**
     * Values that may be interpreted as {@link $I18n}.
     */
    export type $I18n_ = ((arg0: string, arg1: $Object[]) => string);
    export class $FormatText implements $IText {
        remap<C>(arg0: $TextRemapper<C>): C;
        toString(arg0: $I18n_): string;
        toMap(): $Map<string, $Object>;
        remap<C>(): C;
        walkParts(arg0: $I18n_, arg1: $BiConsumer_<string, $TextStyle>): void;
        constructor(arg0: string, ...arg1: $Object[]);
    }
}
