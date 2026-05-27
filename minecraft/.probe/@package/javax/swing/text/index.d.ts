import { $Serializable, $Reader, $InputStream, $Writer, $OutputStream } from "@package/java/io";
import { $TextUI } from "@package/javax/swing/plaf";
import { $CaretListener_, $UndoableEditListener_, $DocumentListener, $CaretListener, $DocumentEvent, $ChangeListener_ } from "@package/javax/swing/event";
import { $Enumeration } from "@package/java/util";
import { $Accessible } from "@package/javax/accessibility";
import { $Printable } from "@package/java/awt/print";
import { $CharacterIterator, $MessageFormat } from "@package/java/text";
import { $Point2D, $Rectangle2D } from "@package/java/awt/geom";
import { $IntStream } from "@package/java/util/stream";
import { $Point, $Color, $Dimension, $Shape, $Container, $Insets, $Graphics, $Rectangle } from "@package/java/awt";
import { $CharSequence, $Cloneable, $Runnable_, $Object } from "@package/java/lang";
import { $PrintRequestAttributeSet } from "@package/javax/print/attribute";
import { $DropMode, $KeyStroke, $Scrollable, $DropMode_, $TransferHandler$DropLocation, $SwingConstants, $JComponent, $JEditorPane, $Action } from "@package/javax/swing";
import { $PrintService } from "@package/javax/print";

declare module "@package/javax/swing/text" {
    export class $Highlighter$Highlight {
    }
    export interface $Highlighter$Highlight {
        getStartOffset(): number;
        getEndOffset(): number;
        getPainter(): $Highlighter$HighlightPainter;
        get startOffset(): number;
        get endOffset(): number;
        get painter(): $Highlighter$HighlightPainter;
    }
    export class $NavigationFilter {
        setDot(arg0: $NavigationFilter$FilterBypass, arg1: number, arg2: $Position$Bias): void;
        moveDot(arg0: $NavigationFilter$FilterBypass, arg1: number, arg2: $Position$Bias): void;
        getNextVisualPositionFrom(arg0: $JTextComponent, arg1: number, arg2: $Position$Bias, arg3: number, arg4: $Position$Bias[]): number;
        constructor();
    }
    export class $Element {
    }
    export interface $Element {
        getElementIndex(arg0: number): number;
        getElementCount(): number;
        getParentElement(): $Element;
        getStartOffset(): number;
        getEndOffset(): number;
        getDocument(): $Document;
        getElement(arg0: number): $Element;
        isLeaf(): boolean;
        getAttributes(): $AttributeSet;
        getName(): string;
        get elementCount(): number;
        get parentElement(): $Element;
        get startOffset(): number;
        get endOffset(): number;
        get document(): $Document;
        get leaf(): boolean;
        get attributes(): $AttributeSet;
        get name(): string;
    }
    export class $Position {
    }
    export interface $Position {
        getOffset(): number;
        get offset(): number;
    }
    /**
     * Values that may be interpreted as {@link $Position}.
     */
    export type $Position_ = (() => number);
    export class $Keymap {
    }
    export interface $Keymap {
        setDefaultAction(arg0: $Action): void;
        addActionForKeyStroke(arg0: $KeyStroke, arg1: $Action): void;
        getDefaultAction(): $Action;
        getBoundKeyStrokes(): $KeyStroke[];
        getBoundActions(): $Action[];
        getKeyStrokesForAction(arg0: $Action): $KeyStroke[];
        isLocallyDefined(arg0: $KeyStroke): boolean;
        removeKeyStrokeBinding(arg0: $KeyStroke): void;
        removeBindings(): void;
        getResolveParent(): $Keymap;
        setResolveParent(arg0: $Keymap): void;
        getAction(arg0: $KeyStroke): $Action;
        getName(): string;
        get boundKeyStrokes(): $KeyStroke[];
        get boundActions(): $Action[];
        get name(): string;
    }
    export class $Caret {
    }
    export interface $Caret {
        addChangeListener(arg0: $ChangeListener_): void;
        setVisible(arg0: boolean): void;
        getMark(): number;
        isVisible(): boolean;
        removeChangeListener(arg0: $ChangeListener_): void;
        deinstall(arg0: $JTextComponent): void;
        setDot(arg0: number): void;
        moveDot(arg0: number): void;
        getDot(): number;
        getBlinkRate(): number;
        setBlinkRate(arg0: number): void;
        isSelectionVisible(): boolean;
        setSelectionVisible(arg0: boolean): void;
        setMagicCaretPosition(arg0: $Point): void;
        getMagicCaretPosition(): $Point;
        paint(arg0: $Graphics): void;
        install(arg0: $JTextComponent): void;
        get mark(): number;
    }
    export class $Highlighter {
    }
    export interface $Highlighter {
        removeHighlight(arg0: $Object): void;
        addHighlight(arg0: number, arg1: number, arg2: $Highlighter$HighlightPainter_): $Object;
        deinstall(arg0: $JTextComponent): void;
        removeAllHighlights(): void;
        changeHighlight(arg0: $Object, arg1: number, arg2: number): void;
        paint(arg0: $Graphics): void;
        getHighlights(): $Highlighter$Highlight[];
        install(arg0: $JTextComponent): void;
        get highlights(): $Highlighter$Highlight[];
    }
    export class $NavigationFilter$FilterBypass {
        setDot(arg0: number, arg1: $Position$Bias): void;
        moveDot(arg0: number, arg1: $Position$Bias): void;
        getCaret(): $Caret;
        get caret(): $Caret;
    }
    export class $EditorKit implements $Cloneable, $Serializable {
        deinstall(arg0: $JEditorPane): void;
        createDefaultDocument(): $Document;
        getViewFactory(): $ViewFactory;
        createCaret(): $Caret;
        getContentType(): string;
        install(arg0: $JEditorPane): void;
        clone(): $Object;
        write(arg0: $OutputStream, arg1: $Document, arg2: number, arg3: number): void;
        write(arg0: $Writer, arg1: $Document, arg2: number, arg3: number): void;
        read(arg0: $Reader, arg1: $Document, arg2: number): void;
        read(arg0: $InputStream, arg1: $Document, arg2: number): void;
        getActions(): $Action[];
        constructor();
        get viewFactory(): $ViewFactory;
        get contentType(): string;
        get actions(): $Action[];
    }
    export class $Segment implements $Cloneable, $CharacterIterator, $CharSequence {
        setPartialReturn(arg0: boolean): void;
        isPartialReturn(): boolean;
        setIndex(arg0: number): string;
        getBeginIndex(): number;
        getEndIndex(): number;
        getIndex(): number;
        previous(): string;
        length(): number;
        clone(): $Object;
        charAt(arg0: number): string;
        next(): string;
        subSequence(arg0: number, arg1: number): $CharSequence;
        last(): string;
        first(): string;
        current(): string;
        isEmpty(): boolean;
        codePoints(): $IntStream;
        chars(): $IntStream;
        offset: number;
        array: string[];
        count: number;
        constructor();
        constructor(arg0: string[], arg1: number, arg2: number);
        get beginIndex(): number;
        get endIndex(): number;
        get empty(): boolean;
    }
    export class $JTextComponent extends $JComponent implements $Scrollable, $Accessible {
        getHighlighter(): $Highlighter;
        setSelectionColor(arg0: $Color): void;
        setSelectionStart(arg0: number): void;
        setSelectionEnd(arg0: number): void;
        setSelectedTextColor(arg0: $Color): void;
        setUI(arg0: $TextUI): void;
        getSelectionEnd(): number;
        cut(): void;
        setDocument(arg0: $Document): void;
        /**
         * @deprecated
         */
        viewToModel(arg0: $Point): number;
        static addKeymap(arg0: string, arg1: $Keymap): $Keymap;
        /**
         * @deprecated
         */
        modelToView(arg0: number): $Rectangle;
        modelToView2D(arg0: number): $Rectangle2D;
        viewToModel2D(arg0: $Point2D): number;
        getSelectionStart(): number;
        setCaretPosition(arg0: number): void;
        moveCaretPosition(arg0: number): void;
        getPrintable(arg0: $MessageFormat, arg1: $MessageFormat): $Printable;
        replaceSelection(arg0: string): void;
        getKeymap(): $Keymap;
        static getKeymap(arg0: string): $Keymap;
        setCaret(arg0: $Caret): void;
        addCaretListener(arg0: $CaretListener_): void;
        removeCaretListener(arg0: $CaretListener_): void;
        getCaretListeners(): $CaretListener[];
        setMargin(arg0: $Insets): void;
        setNavigationFilter(arg0: $NavigationFilter): void;
        getNavigationFilter(): $NavigationFilter;
        setHighlighter(arg0: $Highlighter): void;
        setKeymap(arg0: $Keymap): void;
        static removeKeymap(arg0: string): $Keymap;
        static loadKeymap(arg0: $Keymap, arg1: $JTextComponent$KeyBinding[], arg2: $Action[]): void;
        getCaretColor(): $Color;
        setCaretColor(arg0: $Color): void;
        getSelectionColor(): $Color;
        getSelectedTextColor(): $Color;
        getDisabledTextColor(): $Color;
        setDisabledTextColor(arg0: $Color): void;
        setFocusAccelerator(arg0: string): void;
        getFocusAccelerator(): string;
        getCaretPosition(): number;
        setText(arg0: string): void;
        getDocument(): $Document;
        getCaret(): $Caret;
        setDragEnabled(arg0: boolean): void;
        getDragEnabled(): boolean;
        setDropMode(arg0: $DropMode_): void;
        getDropMode(): $DropMode;
        getDropLocation(): $JTextComponent$DropLocation;
        getPreferredScrollableViewportSize(): $Dimension;
        getScrollableUnitIncrement(arg0: $Rectangle, arg1: number, arg2: number): number;
        getScrollableBlockIncrement(arg0: $Rectangle, arg1: number, arg2: number): number;
        getScrollableTracksViewportWidth(): boolean;
        getScrollableTracksViewportHeight(): boolean;
        getMargin(): $Insets;
        isEditable(): boolean;
        setEditable(arg0: boolean): void;
        paste(): void;
        selectAll(): void;
        getSelectedText(): string;
        getText(): string;
        getText(arg0: number, arg1: number): string;
        select(arg0: number, arg1: number): void;
        write(arg0: $Writer): void;
        read(arg0: $Reader, arg1: $Object): void;
        getActions(): $Action[];
        print(arg0: $MessageFormat, arg1: $MessageFormat, arg2: boolean, arg3: $PrintService, arg4: $PrintRequestAttributeSet, arg5: boolean): boolean;
        print(arg0: $MessageFormat, arg1: $MessageFormat): boolean;
        print(): boolean;
        copy(): void;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static FOCUS_ACCELERATOR_KEY: string;
        static CENTER_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static BOTTOM_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        static DEFAULT_KEYMAP: string;
        static WHEN_IN_FOCUSED_WINDOW: number;
        static UNDEFINED_CONDITION: number;
        constructor();
        set UI(value: $TextUI);
        get caretListeners(): $CaretListener[];
        get dropLocation(): $JTextComponent$DropLocation;
        get preferredScrollableViewportSize(): $Dimension;
        get scrollableTracksViewportWidth(): boolean;
        get scrollableTracksViewportHeight(): boolean;
        get selectedText(): string;
        get actions(): $Action[];
    }
    export class $JTextComponent$DropLocation extends $TransferHandler$DropLocation {
        getBias(): $Position$Bias;
        getIndex(): number;
        get bias(): $Position$Bias;
        get index(): number;
    }
    export class $Highlighter$HighlightPainter {
    }
    export interface $Highlighter$HighlightPainter {
        paint(arg0: $Graphics, arg1: number, arg2: number, arg3: $Shape, arg4: $JTextComponent): void;
    }
    /**
     * Values that may be interpreted as {@link $Highlighter$HighlightPainter}.
     */
    export type $Highlighter$HighlightPainter_ = ((arg0: $Graphics, arg1: number, arg2: number, arg3: $Shape, arg4: $JTextComponent) => void);
    export class $JTextComponent$KeyBinding {
        key: $KeyStroke;
        actionName: string;
        constructor(arg0: $KeyStroke, arg1: string);
    }
    export class $Position$Bias {
        static Backward: $Position$Bias;
        static Forward: $Position$Bias;
    }
    export class $View implements $SwingConstants {
        insertUpdate(arg0: $DocumentEvent, arg1: $Shape, arg2: $ViewFactory_): void;
        removeUpdate(arg0: $DocumentEvent, arg1: $Shape, arg2: $ViewFactory_): void;
        changedUpdate(arg0: $DocumentEvent, arg1: $Shape, arg2: $ViewFactory_): void;
        getView(arg0: number): $View;
        isVisible(): boolean;
        createFragment(arg0: number, arg1: number): $View;
        getContainer(): $Container;
        getStartOffset(): number;
        getEndOffset(): number;
        /**
         * @deprecated
         */
        viewToModel(arg0: number, arg1: number, arg2: $Shape): number;
        viewToModel(arg0: number, arg1: number, arg2: $Shape, arg3: $Position$Bias[]): number;
        modelToView(arg0: number, arg1: $Shape, arg2: $Position$Bias): $Shape;
        modelToView(arg0: number, arg1: $Position$Bias, arg2: number, arg3: $Position$Bias, arg4: $Shape): $Shape;
        /**
         * @deprecated
         */
        modelToView(arg0: number, arg1: $Shape): $Shape;
        getGraphics(): $Graphics;
        getDocument(): $Document;
        getViewFactory(): $ViewFactory;
        getResizeWeight(arg0: number): number;
        getPreferredSpan(arg0: number): number;
        preferenceChanged(arg0: $View, arg1: boolean, arg2: boolean): void;
        getViewCount(): number;
        getViewIndex(arg0: number, arg1: number, arg2: $Shape): number;
        getViewIndex(arg0: number, arg1: $Position$Bias): number;
        getChildAllocation(arg0: number, arg1: $Shape): $Shape;
        getMinimumSpan(arg0: number): number;
        getMaximumSpan(arg0: number): number;
        breakView(arg0: number, arg1: number, arg2: number, arg3: number): $View;
        getBreakWeight(arg0: number, arg1: number, arg2: number): number;
        getNextVisualPositionFrom(arg0: number, arg1: $Position$Bias, arg2: $Shape, arg3: number, arg4: $Position$Bias[]): number;
        setParent(arg0: $View): void;
        getElement(): $Element;
        getToolTipText(arg0: number, arg1: number, arg2: $Shape): string;
        paint(arg0: $Graphics, arg1: $Shape): void;
        getAttributes(): $AttributeSet;
        removeAll(): void;
        setSize(arg0: number, arg1: number): void;
        getAlignment(arg0: number): number;
        remove(arg0: number): void;
        append(arg0: $View): void;
        insert(arg0: number, arg1: $View): void;
        replace(arg0: number, arg1: number, arg2: $View[]): void;
        getParent(): $View;
        static ForcedBreakWeight: number;
        static BadBreakWeight: number;
        static GoodBreakWeight: number;
        static X_AXIS: number;
        static ExcellentBreakWeight: number;
        static Y_AXIS: number;
        constructor(arg0: $Element);
        get visible(): boolean;
        get container(): $Container;
        get startOffset(): number;
        get endOffset(): number;
        get graphics(): $Graphics;
        get document(): $Document;
        get viewFactory(): $ViewFactory;
        get viewCount(): number;
        get element(): $Element;
        get attributes(): $AttributeSet;
    }
    export class $Document {
        static TitleProperty: string;
        static StreamDescriptionProperty: string;
    }
    export interface $Document {
        putProperty(arg0: $Object, arg1: $Object): void;
        insertString(arg0: number, arg1: string, arg2: $AttributeSet): void;
        getDefaultRootElement(): $Element;
        removeDocumentListener(arg0: $DocumentListener): void;
        addDocumentListener(arg0: $DocumentListener): void;
        createPosition(arg0: number): $Position;
        addUndoableEditListener(arg0: $UndoableEditListener_): void;
        removeUndoableEditListener(arg0: $UndoableEditListener_): void;
        getRootElements(): $Element[];
        getStartPosition(): $Position;
        getEndPosition(): $Position;
        getText(arg0: number, arg1: number): string;
        getText(arg0: number, arg1: number, arg2: $Segment): void;
        render(arg0: $Runnable_): void;
        remove(arg0: number, arg1: number): void;
        getProperty(arg0: $Object): $Object;
        getLength(): number;
        get defaultRootElement(): $Element;
        get rootElements(): $Element[];
        get startPosition(): $Position;
        get endPosition(): $Position;
        get length(): number;
    }
    export class $ViewFactory {
    }
    export interface $ViewFactory {
        create(arg0: $Element): $View;
    }
    /**
     * Values that may be interpreted as {@link $ViewFactory}.
     */
    export type $ViewFactory_ = ((arg0: $Element) => $View);
    export class $AttributeSet {
        static ResolveAttribute: $Object;
        static NameAttribute: $Object;
    }
    export interface $AttributeSet {
        getAttributeCount(): number;
        getResolveParent(): $AttributeSet;
        containsAttributes(arg0: $AttributeSet): boolean;
        copyAttributes(): $AttributeSet;
        containsAttribute(arg0: $Object, arg1: $Object): boolean;
        isDefined(arg0: $Object): boolean;
        isEqual(arg0: $AttributeSet): boolean;
        getAttribute(arg0: $Object): $Object;
        getAttributeNames(): $Enumeration<never>;
        get attributeCount(): number;
        get resolveParent(): $AttributeSet;
        get attributeNames(): $Enumeration<never>;
    }
}
