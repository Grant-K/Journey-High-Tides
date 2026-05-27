import { $Consumer_, $Consumer, $UnaryOperator_, $BooleanSupplier, $BooleanSupplier_, $UnaryOperator } from "@package/java/util/function";
import { $SpiritLike_, $SpiritLike } from "@package/com/sammy/malum/core/systems/spirit/type";
import { $Style } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ProgressionEntryObject } from "@package/com/sammy/malum/client/screen/codex/objects/progression";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Enum, $Record } from "@package/java/lang";
import { $Collection_, $Collection } from "@package/java/util";
import { $EntryReference, $BookPage } from "@package/com/sammy/malum/client/screen/codex/pages";
export * as pages from "@package/com/sammy/malum/client/screen/codex/pages";
export * as screens from "@package/com/sammy/malum/client/screen/codex/screens";
export * as handlers from "@package/com/sammy/malum/client/screen/codex/handlers";
export * as objects from "@package/com/sammy/malum/client/screen/codex/objects";

declare module "@package/com/sammy/malum/client/screen/codex" {
    export class $WidgetDesign {
        getFrameTexture(): ($ResourceLocation) | undefined;
        getFrame(): $WidgetDesignType$FrameType;
        getDesignType(): $WidgetDesignType;
        getFillingTexture(): ($ResourceLocation) | undefined;
        getFilling(): $WidgetDesignType$FillingType;
        constructor(arg0: $WidgetDesignType, arg1: $WidgetDesignType$FrameType_, arg2: $WidgetDesignType$FillingType_);
        constructor(arg0: $WidgetDesignType, arg1: $WidgetDesignType$FrameType_, arg2: $WidgetDesignType$FillingType_, arg3: $ResourceLocation_, arg4: $ResourceLocation_);
        get frameTexture(): ($ResourceLocation) | undefined;
        get frame(): $WidgetDesignType$FrameType;
        get designType(): $WidgetDesignType;
        get fillingTexture(): ($ResourceLocation) | undefined;
        get filling(): $WidgetDesignType$FillingType;
    }
    export class $PlacedBookEntry$WidgetSupplier {
    }
    export interface $PlacedBookEntry$WidgetSupplier {
        getBookObject(arg0: $BookEntry, arg1: number, arg2: number): $ProgressionEntryObject;
    }
    /**
     * Values that may be interpreted as {@link $PlacedBookEntry$WidgetSupplier}.
     */
    export type $PlacedBookEntry$WidgetSupplier_ = ((arg0: $BookEntry, arg1: number, arg2: number) => $ProgressionEntryObject);
    export class $PlacedBookEntry$BookEntryWidgetPlacementData extends $Record {
        yOffset(): number;
        xOffset(): number;
        widgetSupplier(): $PlacedBookEntry$WidgetSupplier;
        widgetConfig(): $Consumer<$ProgressionEntryObject>;
        constructor(xOffset: number, yOffset: number, widgetSupplier: $PlacedBookEntry$WidgetSupplier_, widgetConfig: $Consumer_<$ProgressionEntryObject>);
    }
    /**
     * Values that may be interpreted as {@link $PlacedBookEntry$BookEntryWidgetPlacementData}.
     */
    export type $PlacedBookEntry$BookEntryWidgetPlacementData_ = { xOffset?: number, yOffset?: number, widgetConfig?: $Consumer_<$ProgressionEntryObject>, widgetSupplier?: $PlacedBookEntry$WidgetSupplier_,  } | [xOffset?: number, yOffset?: number, widgetConfig?: $Consumer_<$ProgressionEntryObject>, widgetSupplier?: $PlacedBookEntry$WidgetSupplier_, ];
    export class $WidgetDesignType$WidgetDesignBuilder {
        withFrame(arg0: $WidgetDesignType$FrameType_): $WidgetDesignType$WidgetDesignBuilder;
        withFilling(arg0: $WidgetDesignType$FillingType_): $WidgetDesignType$WidgetDesignBuilder;
        build(): $WidgetDesign;
        constructor(arg0: $WidgetDesignType);
    }
    export class $WidgetDesignType$FillingType extends $Enum<$WidgetDesignType$FillingType> {
        static values(): $WidgetDesignType$FillingType[];
        static valueOf(arg0: string): $WidgetDesignType$FillingType;
        getId(): string;
        static DARK: $WidgetDesignType$FillingType;
        static PAPER: $WidgetDesignType$FillingType;
        get id(): string;
    }
    /**
     * Values that may be interpreted as {@link $WidgetDesignType$FillingType}.
     */
    export type $WidgetDesignType$FillingType_ = "paper" | "dark";
    export class $PlacedEntryAcceptor {
    }
    export interface $PlacedEntryAcceptor {
        getEntries(): $Collection<$PlacedBookEntry>;
        addEntry(arg0: string, arg1: number, arg2: number, arg3: $Consumer_<$PlacedBookEntryBuilder>): void;
        addEntry(arg0: string, arg1: number, arg2: number): void;
        get entries(): $Collection<$PlacedBookEntry>;
    }
    /**
     * Values that may be interpreted as {@link $PlacedEntryAcceptor}.
     */
    export type $PlacedEntryAcceptor_ = (() => $Collection_<$PlacedBookEntry>);
    export class $WidgetDesignType {
        createDesign(arg0: $Consumer_<$WidgetDesignType$WidgetDesignBuilder>): $WidgetDesign;
        createDesign(arg0: $WidgetDesignType$FrameType_, arg1: $WidgetDesignType$FillingType_): $WidgetDesign;
        getGlowTexture(): $ResourceLocation;
        getOutlineTexture(): $ResourceLocation;
        getId(): string;
        static TOTEMIC: $WidgetDesignType;
        static SMALL: $WidgetDesignType;
        static GRAND: $WidgetDesignType;
        static SUBENTRY: $WidgetDesignType;
        static GILDED: $WidgetDesignType;
        static EMPTY: $WidgetDesignType;
        static DEFAULT: $WidgetDesignType;
        get glowTexture(): $ResourceLocation;
        get outlineTexture(): $ResourceLocation;
        get id(): string;
    }
    export class $PlacedBookEntry extends $BookEntry {
        getWidgetData(): $PlacedBookEntry$BookEntryWidgetPlacementData;
        isFragment: boolean;
        identifier: string;
        static AFTER_VOID_READER: $BooleanSupplier;
        references: $ImmutableList<$EntryReference>;
        subtitleStyle: $UnaryOperator<$Style>;
        condition: $BooleanSupplier;
        pages: $ImmutableList<$BookPage>;
        isVoid: boolean;
        associatedSpirit: $SpiritLike;
        static AFTER_UMBRAL_CRYSTAL: $BooleanSupplier;
        titleStyle: $UnaryOperator<$Style>;
        static AFTER_SOME_TIME: $BooleanSupplier;
        constructor(arg0: string, arg1: boolean, arg2: $PlacedBookEntry$BookEntryWidgetPlacementData_, arg3: $ImmutableList<$BookPage>, arg4: $ImmutableList<$EntryReference>, arg5: $BooleanSupplier_, arg6: $SpiritLike_, arg7: boolean, arg8: $UnaryOperator_<$Style>, arg9: $UnaryOperator_<$Style>, arg10: boolean);
        get widgetData(): $PlacedBookEntry$BookEntryWidgetPlacementData;
    }
    export class $PlacedBookEntryBuilder extends $BookEntryBuilder {
        hasFragment(): boolean;
        configureWidget(arg0: $Consumer_<$ProgressionEntryObject>): $PlacedBookEntryBuilder;
        setWidgetSupplier(arg0: $PlacedBookEntry$WidgetSupplier_): $PlacedBookEntryBuilder;
        withTraceFragmentEntry(): $PlacedBookEntryBuilder;
        buildFragment(): $PlacedBookEntry;
        withEmptyFragmentEntry(arg0: $WidgetDesignType): $PlacedBookEntryBuilder;
        withFragmentEntry(arg0: $Consumer_<$PlacedBookEntryBuilder>): $PlacedBookEntryBuilder;
        static SPACING: number;
        constructor(arg0: string, arg1: number, arg2: number);
        set widgetSupplier(value: $PlacedBookEntry$WidgetSupplier_);
    }
    export class $BookEntryBuilder {
        addPage(arg0: $BookPage): $BookEntryBuilder;
        afterUmbralCrystal(): $BookEntryBuilder;
        setAssociatedSpirit(arg0: $SpiritLike_): $BookEntryBuilder;
        afterSomeTime(): $BookEntryBuilder;
        withTitleStyle(arg0: $UnaryOperator_<$Style>): $BookEntryBuilder;
        setEntryCondition(arg0: $BooleanSupplier_): $BookEntryBuilder;
        afterVoidReader(): $BookEntryBuilder;
        withSubtitleStyle(arg0: $UnaryOperator_<$Style>): $BookEntryBuilder;
        disableTooltip(): $BookEntryBuilder;
        addReference(arg0: $EntryReference): $BookEntryBuilder;
        build(): $BookEntry;
        constructor(arg0: string);
        set associatedSpirit(value: $SpiritLike_);
        set entryCondition(value: $BooleanSupplier_);
    }
    export class $BookEntry {
        shouldShow(): boolean;
        descriptionTranslationKey(): string;
        hasTooltip(): boolean;
        hasContents(): boolean;
        static create(arg0: string): $BookEntryBuilder;
        static create(arg0: string, arg1: number, arg2: number): $PlacedBookEntryBuilder;
        translationKey(): string;
        isFragment: boolean;
        identifier: string;
        static AFTER_VOID_READER: $BooleanSupplier;
        references: $ImmutableList<$EntryReference>;
        subtitleStyle: $UnaryOperator<$Style>;
        condition: $BooleanSupplier;
        pages: $ImmutableList<$BookPage>;
        isVoid: boolean;
        associatedSpirit: $SpiritLike;
        static AFTER_UMBRAL_CRYSTAL: $BooleanSupplier;
        titleStyle: $UnaryOperator<$Style>;
        static AFTER_SOME_TIME: $BooleanSupplier;
        constructor(arg0: string, arg1: boolean, arg2: $ImmutableList<$BookPage>, arg3: $ImmutableList<$EntryReference>, arg4: $BooleanSupplier_, arg5: $SpiritLike_, arg6: boolean, arg7: $UnaryOperator_<$Style>, arg8: $UnaryOperator_<$Style>, arg9: boolean);
    }
    export class $WidgetDesignType$FrameType extends $Enum<$WidgetDesignType$FrameType> {
        static values(): $WidgetDesignType$FrameType[];
        static valueOf(arg0: string): $WidgetDesignType$FrameType;
        getId(): string;
        static SOULWOOD: $WidgetDesignType$FrameType;
        static RUNEWOOD: $WidgetDesignType$FrameType;
        static WITHERED: $WidgetDesignType$FrameType;
        get id(): string;
    }
    /**
     * Values that may be interpreted as {@link $WidgetDesignType$FrameType}.
     */
    export type $WidgetDesignType$FrameType_ = "runewood" | "soulwood" | "withered";
}
