import { $Consumer_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $ScreenRectangle, $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Enum } from "@package/java/lang";

declare module "@package/net/minecraft/client/gui/layouts" {
    export class $GridLayout extends $AbstractLayout {
        spacing(arg0: number): $GridLayout;
        newCellSettings(): $LayoutSettings;
        defaultCellSetting(): $LayoutSettings;
        createRowHelper(arg0: number): $GridLayout$RowHelper;
        columnSpacing(arg0: number): $GridLayout;
        rowSpacing(arg0: number): $GridLayout;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $LayoutSettings): T;
        constructor(arg0: number, arg1: number);
        constructor();
    }
    export class $EqualSpacingLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $GridLayout$RowHelper {
        newCellSettings(): $LayoutSettings;
        defaultCellSetting(): $LayoutSettings;
        getGrid(): $GridLayout;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $LayoutSettings): T;
        get grid(): $GridLayout;
    }
    export class $AbstractLayout$AbstractChildWrapper {
    }
    export class $FrameLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $Layout {
    }
    export interface $Layout extends $LayoutElement {
        arrangeElements(): void;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        visitChildren(arg0: $Consumer_<$LayoutElement>): void;
    }
    export class $FrameLayout extends $AbstractLayout {
        setMinDimensions(arg0: number, arg1: number): $FrameLayout;
        setMinHeight(arg0: number): $FrameLayout;
        defaultChildLayoutSetting(): $LayoutSettings;
        static alignInDimension(arg0: number, arg1: number, arg2: number, arg3: $Consumer_<number>, arg4: number): void;
        static centerInRectangle(arg0: $LayoutElement, arg1: $ScreenRectangle_): void;
        static centerInRectangle(arg0: $LayoutElement, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static alignInRectangle(arg0: $LayoutElement, arg1: $ScreenRectangle_, arg2: number, arg3: number): void;
        static alignInRectangle(arg0: $LayoutElement, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(arg0: T): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $LayoutSettings): T;
        newChildLayoutSettings(): $LayoutSettings;
        setMinWidth(arg0: number): $FrameLayout;
        constructor();
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        set minHeight(value: number);
        set minWidth(value: number);
    }
    export class $LinearLayout implements $Layout {
        setX(arg0: number): void;
        setY(arg0: number): void;
        spacing(arg0: number): $LinearLayout;
        static horizontal(): $LinearLayout;
        newCellSettings(): $LayoutSettings;
        arrangeElements(): void;
        static vertical(): $LinearLayout;
        defaultCellSetting(): $LayoutSettings;
        getY(): number;
        getX(): number;
        getWidth(): number;
        getHeight(): number;
        addChild<T extends $LayoutElement>(arg0: T): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $LayoutSettings): T;
        visitChildren(arg0: $Consumer_<$LayoutElement>): void;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        getRectangle(): $ScreenRectangle;
        setPosition(arg0: number, arg1: number): void;
        constructor(arg0: number, arg1: number, arg2: $LinearLayout$Orientation_);
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $AbstractLayout implements $Layout {
        setX(arg0: number): void;
        setY(arg0: number): void;
        getY(): number;
        getX(): number;
        getWidth(): number;
        getHeight(): number;
        arrangeElements(): void;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        getRectangle(): $ScreenRectangle;
        setPosition(arg0: number, arg1: number): void;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $LayoutElement {
    }
    export interface $LayoutElement {
        getRectangle(): $ScreenRectangle;
        setX(arg0: number): void;
        setY(arg0: number): void;
        setPosition(arg0: number, arg1: number): void;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        getY(): number;
        getX(): number;
        getWidth(): number;
        getHeight(): number;
        get rectangle(): $ScreenRectangle;
        get width(): number;
        get height(): number;
    }
    export class $LinearLayout$Orientation extends $Enum<$LinearLayout$Orientation> {
        addChild<T extends $LayoutElement>(arg0: $GridLayout, arg1: T, arg2: number, arg3: $LayoutSettings): T;
        static values(): $LinearLayout$Orientation[];
        static valueOf(arg0: string): $LinearLayout$Orientation;
        static VERTICAL: $LinearLayout$Orientation;
        static HORIZONTAL: $LinearLayout$Orientation;
    }
    /**
     * Values that may be interpreted as {@link $LinearLayout$Orientation}.
     */
    export type $LinearLayout$Orientation_ = "horizontal" | "vertical";
    export class $LayoutSettings {
        static defaults(): $LayoutSettings;
    }
    export interface $LayoutSettings {
        alignVertically(arg0: number): $LayoutSettings;
        alignVerticallyBottom(): $LayoutSettings;
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        alignHorizontally(arg0: number): $LayoutSettings;
        alignVerticallyTop(): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        paddingTop(arg0: number): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        padding(arg0: number): $LayoutSettings;
        padding(arg0: number, arg1: number): $LayoutSettings;
        padding(arg0: number, arg1: number, arg2: number, arg3: number): $LayoutSettings;
        paddingVertical(arg0: number): $LayoutSettings;
        paddingHorizontal(arg0: number): $LayoutSettings;
        paddingBottom(arg0: number): $LayoutSettings;
        alignVerticallyMiddle(): $LayoutSettings;
        paddingLeft(arg0: number): $LayoutSettings;
        paddingRight(arg0: number): $LayoutSettings;
        align(arg0: number, arg1: number): $LayoutSettings;
        copy(): $LayoutSettings;
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $SpacerElement implements $LayoutElement {
        setX(arg0: number): void;
        setY(arg0: number): void;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        getY(): number;
        getX(): number;
        getWidth(): number;
        getHeight(): number;
        static width(arg0: number): $SpacerElement;
        static height(arg0: number): $SpacerElement;
        getRectangle(): $ScreenRectangle;
        setPosition(arg0: number, arg1: number): void;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor(arg0: number, arg1: number);
        get rectangle(): $ScreenRectangle;
    }
    export class $CommonLayouts {
        static labeledElement(arg0: $Font, arg1: $LayoutElement, arg2: $Component_, arg3: $Consumer_<$LayoutSettings>): $Layout;
        static labeledElement(arg0: $Font, arg1: $LayoutElement, arg2: $Component_): $Layout;
    }
    export class $EqualSpacingLayout extends $AbstractLayout {
        defaultChildLayoutSetting(): $LayoutSettings;
        addChild<T extends $LayoutElement>(arg0: T): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        newChildLayoutSettings(): $LayoutSettings;
        constructor(arg0: number, arg1: number, arg2: $EqualSpacingLayout$Orientation_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $EqualSpacingLayout$Orientation_);
    }
    export class $LayoutSettings$LayoutSettingsImpl implements $LayoutSettings {
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        alignHorizontally(arg0: number): $LayoutSettings$LayoutSettingsImpl;
        padding(arg0: number, arg1: number, arg2: number, arg3: number): $LayoutSettings$LayoutSettingsImpl;
        padding(arg0: number, arg1: number): $LayoutSettings$LayoutSettingsImpl;
        padding(arg0: number): $LayoutSettings$LayoutSettingsImpl;
        paddingBottom(arg0: number): $LayoutSettings$LayoutSettingsImpl;
        paddingLeft(arg0: number): $LayoutSettings$LayoutSettingsImpl;
        copy(): $LayoutSettings$LayoutSettingsImpl;
        alignVerticallyBottom(): $LayoutSettings;
        alignVerticallyTop(): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        alignVerticallyMiddle(): $LayoutSettings;
        alignVertically(arg0: number): $LayoutSettings;
        paddingTop(arg0: number): $LayoutSettings;
        paddingVertical(arg0: number): $LayoutSettings;
        paddingHorizontal(arg0: number): $LayoutSettings;
        paddingRight(arg0: number): $LayoutSettings;
        align(arg0: number, arg1: number): $LayoutSettings;
        yAlignment: number;
        xAlignment: number;
        constructor(arg0: $LayoutSettings$LayoutSettingsImpl);
        constructor();
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $EqualSpacingLayout$Orientation extends $Enum<$EqualSpacingLayout$Orientation> {
        static values(): $EqualSpacingLayout$Orientation[];
        static valueOf(arg0: string): $EqualSpacingLayout$Orientation;
        static VERTICAL: $EqualSpacingLayout$Orientation;
        static HORIZONTAL: $EqualSpacingLayout$Orientation;
    }
    /**
     * Values that may be interpreted as {@link $EqualSpacingLayout$Orientation}.
     */
    export type $EqualSpacingLayout$Orientation_ = "horizontal" | "vertical";
    export class $GridLayout$CellInhabitant extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $HeaderAndFooterLayout implements $Layout {
        setX(arg0: number): void;
        setY(arg0: number): void;
        arrangeElements(): void;
        addToFooter<T extends $LayoutElement>(arg0: T): T;
        addToFooter<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        addToContents<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        addToContents<T extends $LayoutElement>(arg0: T): T;
        addTitleHeader(arg0: $Component_, arg1: $Font): void;
        getContentHeight(): number;
        getY(): number;
        getX(): number;
        getWidth(): number;
        getHeight(): number;
        setHeaderHeight(arg0: number): void;
        addToHeader<T extends $LayoutElement>(arg0: T): T;
        addToHeader<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        setFooterHeight(arg0: number): void;
        getFooterHeight(): number;
        getHeaderHeight(): number;
        visitChildren(arg0: $Consumer_<$LayoutElement>): void;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        getRectangle(): $ScreenRectangle;
        setPosition(arg0: number, arg1: number): void;
        static DEFAULT_HEADER_AND_FOOTER_HEIGHT: number;
        constructor(arg0: $Screen);
        constructor(arg0: $Screen, arg1: number);
        constructor(arg0: $Screen, arg1: number, arg2: number);
        get contentHeight(): number;
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
}
