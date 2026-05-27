import { $IntComparator } from "@package/it/unimi/dsi/fastutil/ints";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/net/minecraft/client/gui/navigation" {
    export class $ScreenRectangle extends $Record {
        getBorder(arg0: $ScreenDirection_): $ScreenRectangle;
        getBoundInDirection(arg0: $ScreenDirection_): number;
        overlapsInAxis(arg0: $ScreenRectangle_, arg1: $ScreenAxis_): boolean;
        getCenterInAxis(arg0: $ScreenAxis_): number;
        containsPoint(arg0: number, arg1: number): boolean;
        intersection(arg0: $ScreenRectangle_): $ScreenRectangle;
        overlaps(arg0: $ScreenRectangle_): boolean;
        top(): number;
        left(): number;
        right(): number;
        step(arg0: $ScreenDirection_): $ScreenRectangle;
        width(): number;
        height(): number;
        bottom(): number;
        getLength(arg0: $ScreenAxis_): number;
        position(): $ScreenPosition;
        static of(arg0: $ScreenAxis_, arg1: number, arg2: number, arg3: number, arg4: number): $ScreenRectangle;
        static empty(): $ScreenRectangle;
        constructor(arg0: $ScreenPosition_, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $ScreenRectangle}.
     */
    export type $ScreenRectangle_ = { position?: $ScreenPosition_, width?: number, height?: number,  } | [position?: $ScreenPosition_, width?: number, height?: number, ];
    export class $FocusNavigationEvent$InitialFocus implements $FocusNavigationEvent {
        getVerticalDirectionForInitialFocus(): $ScreenDirection;
        constructor();
        get verticalDirectionForInitialFocus(): $ScreenDirection;
    }
    export class $FocusNavigationEvent$ArrowNavigation extends $Record implements $FocusNavigationEvent {
        getVerticalDirectionForInitialFocus(): $ScreenDirection;
        direction(): $ScreenDirection;
        constructor(arg0: $ScreenDirection_);
        get verticalDirectionForInitialFocus(): $ScreenDirection;
    }
    /**
     * Values that may be interpreted as {@link $FocusNavigationEvent$ArrowNavigation}.
     */
    export type $FocusNavigationEvent$ArrowNavigation_ = { direction?: $ScreenDirection_,  } | [direction?: $ScreenDirection_, ];
    export class $ScreenAxis extends $Enum<$ScreenAxis> {
        orthogonal(): $ScreenAxis;
        getPositive(): $ScreenDirection;
        getDirection(arg0: boolean): $ScreenDirection;
        getNegative(): $ScreenDirection;
        static values(): $ScreenAxis[];
        static valueOf(arg0: string): $ScreenAxis;
        static VERTICAL: $ScreenAxis;
        static HORIZONTAL: $ScreenAxis;
        get positive(): $ScreenDirection;
        get negative(): $ScreenDirection;
    }
    /**
     * Values that may be interpreted as {@link $ScreenAxis}.
     */
    export type $ScreenAxis_ = "horizontal" | "vertical";
    export class $ScreenPosition extends $Record {
        getCoordinate(arg0: $ScreenAxis_): number;
        y(): number;
        step(arg0: $ScreenDirection_): $ScreenPosition;
        static of(arg0: $ScreenAxis_, arg1: number, arg2: number): $ScreenPosition;
        x(): number;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $ScreenPosition}.
     */
    export type $ScreenPosition_ = { y?: number, x?: number,  } | [y?: number, x?: number, ];
    export class $CommonInputs {
        static selected(arg0: number): boolean;
        constructor();
    }
    export class $FocusNavigationEvent$TabNavigation extends $Record implements $FocusNavigationEvent {
        getVerticalDirectionForInitialFocus(): $ScreenDirection;
        forward(): boolean;
        constructor(arg0: boolean);
        get verticalDirectionForInitialFocus(): $ScreenDirection;
    }
    /**
     * Values that may be interpreted as {@link $FocusNavigationEvent$TabNavigation}.
     */
    export type $FocusNavigationEvent$TabNavigation_ = { forward?: boolean,  } | [forward?: boolean, ];
    export class $ScreenDirection extends $Enum<$ScreenDirection> {
        getOpposite(): $ScreenDirection;
        getAxis(): $ScreenAxis;
        coordinateValueComparator(): $IntComparator;
        isPositive(): boolean;
        isAfter(arg0: number, arg1: number): boolean;
        isBefore(arg0: number, arg1: number): boolean;
        static values(): $ScreenDirection[];
        static valueOf(arg0: string): $ScreenDirection;
        static DOWN: $ScreenDirection;
        static LEFT: $ScreenDirection;
        static RIGHT: $ScreenDirection;
        static UP: $ScreenDirection;
        get opposite(): $ScreenDirection;
        get axis(): $ScreenAxis;
        get positive(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ScreenDirection}.
     */
    export type $ScreenDirection_ = "up" | "down" | "left" | "right";
    export class $FocusNavigationEvent {
    }
    export interface $FocusNavigationEvent {
        getVerticalDirectionForInitialFocus(): $ScreenDirection;
        get verticalDirectionForInitialFocus(): $ScreenDirection;
    }
    /**
     * Values that may be interpreted as {@link $FocusNavigationEvent}.
     */
    export type $FocusNavigationEvent_ = (() => $ScreenDirection_);
}
