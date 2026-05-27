import { $Consumer_, $Supplier_, $Supplier } from "@package/java/util/function";
import { $ModularGui } from "@package/codechicken/lib/gui/modular";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Constraints$LayoutPos_ } from "@package/codechicken/lib/gui/modular/lib";
import { $Font } from "@package/net/minecraft/client/gui";
import { $List } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";
import { $GuiElement } from "@package/codechicken/lib/gui/modular/elements";

declare module "@package/codechicken/lib/gui/modular/lib/geometry" {
    export class $Align extends $Enum<$Align> {
        static values(): $Align[];
        static valueOf(arg0: string): $Align;
        static CENTER: $Align;
        static MIN: $Align;
        static LEFT: $Align;
        static TOP: $Align;
        static MAX: $Align;
        static RIGHT: $Align;
        static BOTTOM: $Align;
    }
    /**
     * Values that may be interpreted as {@link $Align}.
     */
    export type $Align_ = "min" | "center" | "max";
    export class $ConstraintImpl$Between extends $ConstraintImpl<$ConstraintImpl$Between> {
        getPos(): number;
        getStart(): number;
        getEnd(): number;
        clamp(): $ConstraintImpl$Between;
        constructor(arg0: $GeoRef, arg1: $GeoRef, arg2: number);
        get pos(): number;
        get start(): number;
        get end(): number;
    }
    export class $GeoRef implements $Supplier<number> {
        get(): number;
        parameter: $GeoParam;
        geometry: $GuiParent<never>;
        constructor(arg0: $GuiParent<never>, arg1: $GeoParam_);
    }
    export class $ConstraintImpl$RelativeDynamic extends $ConstraintImpl<$ConstraintImpl$RelativeDynamic> {
        getOffset(): number;
        constructor(arg0: $GeoRef, arg1: $Supplier_<number>);
        get offset(): number;
    }
    export class $ConstraintImpl$MidPoint extends $ConstraintImpl<$ConstraintImpl$MidPoint> {
        getStart(): number;
        getEnd(): number;
        getOffset(): number;
        constructor(arg0: $GeoRef, arg1: $GeoRef, arg2: number);
        get start(): number;
        get end(): number;
        get offset(): number;
    }
    export class $ConstraintImpl$BetweenDynamic extends $ConstraintImpl<$ConstraintImpl$BetweenDynamic> {
        getPos(): number;
        getStart(): number;
        getEnd(): number;
        clamp(): $ConstraintImpl$BetweenDynamic;
        constructor(arg0: $GeoRef, arg1: $GeoRef, arg2: $Supplier_<number>);
        get pos(): number;
        get start(): number;
        get end(): number;
    }
    export class $ConstraintImpl$BetweenOffset extends $ConstraintImpl$Between {
        constructor(arg0: $GeoRef, arg1: $GeoRef, arg2: number, arg3: number);
    }
    export class $Borders {
        setLeftRight(arg0: number): $Borders;
        setBorders(arg0: number, arg1: number): $Borders;
        setBorders(arg0: number, arg1: number, arg2: number, arg3: number): $Borders;
        setBorders(arg0: number): $Borders;
        setTopBottom(arg0: number): $Borders;
        static create(arg0: number, arg1: number, arg2: number, arg3: number): $Borders;
        static create(arg0: number): $Borders;
        static create(arg0: number, arg1: number): $Borders;
        top(): number;
        top(arg0: number): $Borders;
        left(): number;
        left(arg0: number): $Borders;
        right(arg0: number): $Borders;
        right(): number;
        bottom(arg0: number): $Borders;
        bottom(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        set leftRight(value: number);
        set topBottom(value: number);
    }
    export class $ConstrainedGeometry<T extends $ConstrainedGeometry<T>> implements $GuiParent<T> {
        setWidth(arg0: number): T;
        xMin(): number;
        yMin(): number;
        xMax(): number;
        yMax(): number;
        getRectangle(): $Rectangle;
        setHeight(arg0: number): T;
        setPos(arg0: number, arg1: number): T;
        xCenter(): number;
        yCenter(): number;
        clearGeometryCache(): void;
        setYPos(arg0: number): T;
        addBoundsToRect(arg0: $Rectangle$Mutable): $Rectangle$Mutable;
        placeInside(arg0: $ConstrainedGeometry<never>, arg1: $Constraints$LayoutPos_): T;
        placeInside(arg0: $ConstrainedGeometry<never>, arg1: $Constraints$LayoutPos_, arg2: number, arg3: number): T;
        placeOutside(arg0: $ConstrainedGeometry<never>, arg1: $Constraints$LayoutPos_): T;
        placeOutside(arg0: $ConstrainedGeometry<never>, arg1: $Constraints$LayoutPos_, arg2: number, arg3: number): T;
        clearConstraints(): T;
        getEnclosingRect(): $Rectangle$Mutable;
        getChildBounds(): $Rectangle$Mutable;
        xSize(): number;
        ySize(): number;
        getPosition(): $Position;
        constrain(arg0: $GeoParam_, arg1: $Constraint): T;
        setXPos(arg0: number): T;
        setSize(arg0: number, arg1: number): T;
        strictMode(arg0: boolean): T;
        get(arg0: $GeoParam_): $GeoRef;
        validate(): void;
        getParent(): $GuiParent<never>;
        getParent(arg0: $GeoParam_): $GeoRef;
        isDescendantOf(arg0: $GuiElement<never>): boolean;
        blockMouseOver(arg0: $GuiElement<never>, arg1: number, arg2: number): boolean;
        addChild(arg0: $Consumer_<T>): T;
        onScreenInit(arg0: $Minecraft, arg1: $Font, arg2: number, arg3: number): void;
        getValue(arg0: $GeoParam_): number;
        constructor();
        set width(value: number);
        get rectangle(): $Rectangle;
        set height(value: number);
        set YPos(value: number);
        get enclosingRect(): $Rectangle$Mutable;
        get childBounds(): $Rectangle$Mutable;
        get position(): $Position;
        set XPos(value: number);
    }
    export class $Constraint {
        static relative(arg0: $GeoRef, arg1: number): $ConstraintImpl$Relative;
        static relative(arg0: $GeoRef, arg1: $Supplier_<number>): $ConstraintImpl$RelativeDynamic;
        static midPoint(arg0: $GeoRef, arg1: $GeoRef, arg2: number): $ConstraintImpl$MidPoint;
        static midPoint(arg0: $GeoRef, arg1: $GeoRef, arg2: $Supplier_<number>): $ConstraintImpl$MidPointDynamic;
        static midPoint(arg0: $GeoRef, arg1: $GeoRef): $ConstraintImpl$MidPoint;
        static dynamic(arg0: $Supplier_<number>): $ConstraintImpl$Dynamic;
        static between(arg0: $GeoRef, arg1: $GeoRef, arg2: $Supplier_<number>, arg3: $Supplier_<number>): $ConstraintImpl$BetweenDynamic;
        static between(arg0: $GeoRef, arg1: $GeoRef, arg2: $Supplier_<number>): $ConstraintImpl$BetweenDynamic;
        static between(arg0: $GeoRef, arg1: $GeoRef, arg2: number, arg3: number): $ConstraintImpl$BetweenOffset;
        static between(arg0: $GeoRef, arg1: $GeoRef, arg2: number): $ConstraintImpl$Between;
        static literal(arg0: number): $ConstraintImpl$Literal;
        static match(arg0: $GeoRef): $ConstraintImpl$Relative;
    }
    export interface $Constraint {
        axis(): $Axis;
        markDirty(): void;
        get(): number;
    }
    export class $ConstraintImpl$MidPointDynamic extends $ConstraintImpl<$ConstraintImpl$MidPointDynamic> {
        getStart(): number;
        getEnd(): number;
        getOffset(): number;
        constructor(arg0: $GeoRef, arg1: $GeoRef, arg2: $Supplier_<number>);
        get start(): number;
        get end(): number;
        get offset(): number;
    }
    export class $Rectangle {
        static create(arg0: $Position, arg1: number, arg2: number): $Rectangle;
        static create(arg0: $GuiParent<never>): $Rectangle;
        static create(arg0: $Position, arg1: $Supplier_<number>, arg2: $Supplier_<number>): $Rectangle;
        static create(arg0: number, arg1: number, arg2: number, arg3: number): $Rectangle;
    }
    export interface $Rectangle {
        toRect2i(): $Rect2i;
        mutable(): $Rectangle$Mutable;
        xMax(): number;
        yMax(): number;
        setPos(arg0: number, arg1: number): $Rectangle;
        offsetPos(arg0: number, arg1: number): $Rectangle;
        offsetSize(arg0: number, arg1: number): $Rectangle;
        intersect(arg0: $Rectangle): $Rectangle;
        intersects(arg0: $Rectangle): boolean;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        pos(): $Position;
        y(): number;
        distance(arg0: $Axis_, arg1: $Position): number;
        setSize(arg0: number, arg1: number): $Rectangle;
        width(): number;
        height(): number;
        size(arg0: $Axis_): number;
        min(arg0: $Axis_): number;
        max(arg0: $Axis_): number;
        x(): number;
        contains(arg0: number, arg1: number): boolean;
        combine(...arg0: $Rectangle[]): $Rectangle;
    }
    export class $Position$Mutable implements $Position {
        y(): number;
        offset(arg0: number, arg1: number): $Position;
        x(): number;
        set(arg0: number, arg1: number): $Position;
        get(arg0: $Axis_): number;
        constructor(arg0: number, arg1: number);
    }
    export class $Rectangle$Mutable implements $Rectangle {
        setPos(arg0: number, arg1: number): $Rectangle;
        offsetPos(arg0: number, arg1: number): $Rectangle;
        offsetSize(arg0: number, arg1: number): $Rectangle;
        intersect(arg0: $Rectangle): $Rectangle;
        pos(): $Position;
        setSize(arg0: number, arg1: number): $Rectangle;
        width(): number;
        height(): number;
        immutable(): $Rectangle$Immutable;
        set(arg0: $Rectangle): void;
        combine(...arg0: $Rectangle[]): $Rectangle;
        toRect2i(): $Rect2i;
        mutable(): $Rectangle$Mutable;
        xMax(): number;
        yMax(): number;
        intersects(arg0: $Rectangle): boolean;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        y(): number;
        distance(arg0: $Axis_, arg1: $Position): number;
        size(arg0: $Axis_): number;
        min(arg0: $Axis_): number;
        max(arg0: $Axis_): number;
        x(): number;
        contains(arg0: number, arg1: number): boolean;
        constructor(arg0: $Position$Mutable, arg1: number, arg2: number);
    }
    export class $ConstraintImpl$Relative extends $ConstraintImpl<$ConstraintImpl$Relative> {
        getOffset(): number;
        constructor(arg0: $GeoRef, arg1: number);
        get offset(): number;
    }
    export class $ConstraintImpl<T extends $ConstraintImpl<never>> implements $Constraint {
        axis(): $Axis;
        setAxis(arg0: $Axis_): T;
        markDirty(): void;
        isPrecise(): boolean;
        precise(): T;
        get(): number;
        constructor();
    }
    export class $GeoParam extends $Enum<$GeoParam> {
        static values(): $GeoParam[];
        static valueOf(arg0: string): $GeoParam;
        static LEFT: $GeoParam;
        static TOP: $GeoParam;
        static RIGHT: $GeoParam;
        static WIDTH: $GeoParam;
        static BOTTOM: $GeoParam;
        static HEIGHT: $GeoParam;
        axis: $Axis;
    }
    /**
     * Values that may be interpreted as {@link $GeoParam}.
     */
    export type $GeoParam_ = "left" | "right" | "width" | "top" | "bottom" | "height";
    export class $ConstraintImpl$Literal extends $ConstraintImpl<$ConstraintImpl$Literal> {
        constructor(arg0: number);
    }
    export class $GuiParent<T extends $GuiParent<never>> {
    }
    export interface $GuiParent<T extends $GuiParent<never>> {
        xMin(): number;
        yMin(): number;
        xMax(): number;
        yMax(): number;
        adoptChild(arg0: $GuiElement<never>): void;
        isDescendantOf(arg0: $GuiElement<never>): boolean;
        scaledScreenWidth(): number;
        scaledScreenHeight(): number;
        getModularGui(): $ModularGui;
        blockMouseOver(arg0: $GuiElement<never>, arg1: number, arg2: number): boolean;
        removeChild(arg0: $GuiElement<never>): void;
        addChild(arg0: $Consumer_<T>): T;
        addChild(arg0: $GuiElement<never>): void;
        xSize(): number;
        ySize(): number;
        getChildren(): $List<$GuiElement<never>>;
        onScreenInit(arg0: $Minecraft, arg1: $Font, arg2: number, arg3: number): void;
        font(): $Font;
        get(arg0: $GeoParam_): $GeoRef;
        getValue(arg0: $GeoParam_): number;
        mc(): $Minecraft;
        get modularGui(): $ModularGui;
        get children(): $List<$GuiElement<never>>;
    }
    export class $ConstraintImpl$Dynamic extends $ConstraintImpl<$ConstraintImpl$Dynamic> {
        constructor(arg0: $Supplier_<number>);
    }
    export class $Position {
        static create(arg0: number, arg1: number): $Position;
        static create(arg0: $Supplier_<number>, arg1: $Supplier_<number>): $Position;
        static create(arg0: $GuiParent<never>): $Position;
    }
    export interface $Position {
        y(): number;
        get(arg0: $Axis_): number;
        offset(arg0: number, arg1: number): $Position;
        x(): number;
    }
    export class $Rectangle$Immutable extends $Record implements $Rectangle {
        xSize(): number;
        ySize(): number;
        pos(): $Position;
        width(): number;
        height(): number;
        position(): $Position;
        toRect2i(): $Rect2i;
        mutable(): $Rectangle$Mutable;
        xMax(): number;
        yMax(): number;
        setPos(arg0: number, arg1: number): $Rectangle;
        offsetPos(arg0: number, arg1: number): $Rectangle;
        offsetSize(arg0: number, arg1: number): $Rectangle;
        intersect(arg0: $Rectangle): $Rectangle;
        intersects(arg0: $Rectangle): boolean;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        y(): number;
        distance(arg0: $Axis_, arg1: $Position): number;
        setSize(arg0: number, arg1: number): $Rectangle;
        size(arg0: $Axis_): number;
        min(arg0: $Axis_): number;
        max(arg0: $Axis_): number;
        x(): number;
        contains(arg0: number, arg1: number): boolean;
        combine(...arg0: $Rectangle[]): $Rectangle;
        constructor(position: $Position, xSize: number, ySize: number);
    }
    /**
     * Values that may be interpreted as {@link $Rectangle$Immutable}.
     */
    export type $Rectangle$Immutable_ = { position?: $Position, ySize?: number, xSize?: number,  } | [position?: $Position, ySize?: number, xSize?: number, ];
    export class $Axis extends $Enum<$Axis> {
        opposite(): $Axis;
        static values(): $Axis[];
        static valueOf(arg0: string): $Axis;
        static X: $Axis;
        static Y: $Axis;
    }
    /**
     * Values that may be interpreted as {@link $Axis}.
     */
    export type $Axis_ = "x" | "y";
}
