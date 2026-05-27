import { $IntSet } from "@package/it/unimi/dsi/fastutil/ints";
import { $GlyphProviderDefinition$Conditional_ } from "@package/net/minecraft/client/gui/font/providers";
import { $Codec } from "@package/com/mojang/serialization";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $BakedGlyph } from "@package/net/minecraft/client/gui/font/glyphs";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Minecraft, $Options } from "@package/net/minecraft/client";
import { $Iterator, $List, $Map_, $Set_, $List_, $Collection, $Map } from "@package/java/util";
import { $StringRepresentable, $DependencySorter$Entry } from "@package/net/minecraft/util";
import { $Consumer, $IntFunction_, $Supplier_, $Consumer_, $Predicate_, $Supplier } from "@package/java/util/function";
import { $SheetGlyphInfo, $GlyphProvider$Conditional, $GlyphProvider, $GlyphInfo, $GlyphProvider_, $GlyphProvider$Conditional_ } from "@package/com/mojang/blaze3d/font";
import { $SubtractiveTextGlyphRenderTypes } from "@package/com/sammy/malum/client/renderer/text";
import { $Path_ } from "@package/java/nio/file";
import { $AccessorFontManager } from "@package/net/darkhax/bookshelf/common/mixin/access/client";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FontResourceManagerAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $Dumpable, $AbstractTexture, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $Font, $Font$DisplayMode_ } from "@package/net/minecraft/client/gui";
import { $Enum, $Record, $AutoCloseable } from "@package/java/lang";
export * as providers from "@package/net/minecraft/client/gui/font/providers";
export * as glyphs from "@package/net/minecraft/client/gui/font/glyphs";

declare module "@package/net/minecraft/client/gui/font" {
    export class $FontOption extends $Enum<$FontOption> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $FontOption[];
        static valueOf(arg0: string): $FontOption;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$FontOption>;
        static UNIFORM: $FontOption;
        static JAPANESE_VARIANTS: $FontOption;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FontOption}.
     */
    export type $FontOption_ = "uniform" | "jp";
    export class $FontTexture extends $AbstractTexture implements $Dumpable {
        dumpContents(arg0: $ResourceLocation_, arg1: $Path_): void;
        add(arg0: $SheetGlyphInfo): $BakedGlyph;
        static NOT_ASSIGNED: number;
        constructor(arg0: $GlyphRenderTypes_, arg1: boolean);
    }
    export class $FontSet$GlyphInfoFilter extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FontSet$GlyphInfoFilter}.
     */
    export type $FontSet$GlyphInfoFilter_ = { glyphInfo?: $GlyphInfo, glyphInfoNotFishy?: $GlyphInfo,  } | [glyphInfo?: $GlyphInfo, glyphInfoNotFishy?: $GlyphInfo, ];
    export class $CodepointMap$Output<T> {
    }
    export interface $CodepointMap$Output<T> {
        accept(arg0: number, arg1: T): void;
    }
    /**
     * Values that may be interpreted as {@link $CodepointMap$Output}.
     */
    export type $CodepointMap$Output_<T> = ((arg0: number, arg1: T) => void);
    export class $FontTexture$Node {
    }
    export class $TextFieldHelper$CursorStep extends $Enum<$TextFieldHelper$CursorStep> {
        static values(): $TextFieldHelper$CursorStep[];
        static valueOf(arg0: string): $TextFieldHelper$CursorStep;
        static WORD: $TextFieldHelper$CursorStep;
        static CHARACTER: $TextFieldHelper$CursorStep;
    }
    /**
     * Values that may be interpreted as {@link $TextFieldHelper$CursorStep}.
     */
    export type $TextFieldHelper$CursorStep_ = "character" | "word";
    export class $CodepointMap<T> {
        remove(arg0: number): T;
        get(arg0: number): T;
        put(arg0: number, arg1: T): T;
        clear(): void;
        forEach(arg0: $CodepointMap$Output_<T>): void;
        computeIfAbsent(arg0: number, arg1: $IntFunction_<T>): T;
        keySet(): $IntSet;
        constructor(arg0: $IntFunction_<T[]>, arg1: $IntFunction_<T[][]>);
    }
    export class $FontOption$Filter {
        apply(arg0: $Set_<$FontOption_>): boolean;
        merge(arg0: $FontOption$Filter): $FontOption$Filter;
        static CODEC: $Codec<$FontOption$Filter>;
        static ALWAYS_PASS: $FontOption$Filter;
        constructor(arg0: $Map_<$FontOption_, boolean>);
    }
    export class $FontManager$UnresolvedBuilderBundle extends $Record implements $DependencySorter$Entry<$ResourceLocation> {
    }
    /**
     * Values that may be interpreted as {@link $FontManager$UnresolvedBuilderBundle}.
     */
    export type $FontManager$UnresolvedBuilderBundle_ = { fontId?: $ResourceLocation_, dependencies?: $Set_<$ResourceLocation_>, builders?: $List_<$FontManager$BuilderResult_>,  } | [fontId?: $ResourceLocation_, dependencies?: $Set_<$ResourceLocation_>, builders?: $List_<$FontManager$BuilderResult_>, ];
    export class $FontManager$FontDefinitionFile extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FontManager$FontDefinitionFile}.
     */
    export type $FontManager$FontDefinitionFile_ = { providers?: $List_<$GlyphProviderDefinition$Conditional_>,  } | [providers?: $List_<$GlyphProviderDefinition$Conditional_>, ];
    export class $GlyphRenderTypes extends $Record implements $SubtractiveTextGlyphRenderTypes {
        polygonOffset(): $RenderType;
        static createForColorTexture(arg0: $ResourceLocation_): $GlyphRenderTypes;
        static createForIntensityTexture(arg0: $ResourceLocation_): $GlyphRenderTypes;
        seeThrough(): $RenderType;
        malum$getSubtractiveType(): $RenderType;
        normal(): $RenderType;
        select(arg0: $Font$DisplayMode_): $RenderType;
        constructor(arg0: $RenderType, arg1: $RenderType, arg2: $RenderType);
    }
    /**
     * Values that may be interpreted as {@link $GlyphRenderTypes}.
     */
    export type $GlyphRenderTypes_ = { normal?: $RenderType, polygonOffset?: $RenderType, seeThrough?: $RenderType,  } | [normal?: $RenderType, polygonOffset?: $RenderType, seeThrough?: $RenderType, ];
    export class $FontManager implements $PreparableReloadListener, $AutoCloseable, $AccessorFontManager, $IdentifiableResourceReloadListener, $FontResourceManagerAccess {
        createFont(): $Font;
        createFontFilterFishy(): $Font;
        updateOptions(arg0: $Options): void;
        getFabricId(): $ResourceLocation;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        prepare(arg0: $ResourceManager, arg1: $Executor_): $CompletableFuture<$FontManager$Preparation>;
        apply(arg0: $FontManager$Preparation_, arg1: $ProfilerFiller): void;
        close(): void;
        getName(): string;
        getFabricDependencies(): $Collection<$ResourceLocation>;
        getFontSets(): $Map<$ResourceLocation, $FontSet>;
        bookshelf$getFonts(): $Map<$ResourceLocation, $FontSet>;
        fontSets: $Map<$ResourceLocation, $FontSet>;
        static MISSING_FONT: $ResourceLocation;
        constructor(arg0: $TextureManager);
        get fabricId(): $ResourceLocation;
        get name(): string;
        get fabricDependencies(): $Collection<$ResourceLocation>;
    }
    export class $FontManager$Preparation extends $Record {
        allProviders(): $List<$GlyphProvider>;
        fontSets(): $Map<$ResourceLocation, $List<$GlyphProvider$Conditional>>;
    }
    /**
     * Values that may be interpreted as {@link $FontManager$Preparation}.
     */
    export type $FontManager$Preparation_ = { allProviders?: $List_<$GlyphProvider_>, fontSets?: $Map_<$ResourceLocation_, $List_<$GlyphProvider$Conditional_>>,  } | [allProviders?: $List_<$GlyphProvider_>, fontSets?: $Map_<$ResourceLocation_, $List_<$GlyphProvider$Conditional_>>, ];
    export class $FontSet implements $AutoCloseable {
        getGlyphInfo(arg0: number, arg1: boolean): $GlyphInfo;
        whiteGlyph(): $BakedGlyph;
        handler$hmd000$figura$computeBakedGlyphMixin(codePoint: number, cir: $CallbackInfoReturnable<any>): void;
        redirect$hmd000$figura$insertDataIntoBakedGlyph(instance: $FontTexture, glyphInfo: $SheetGlyphInfo): $BakedGlyph;
        getRandomGlyph(arg0: $GlyphInfo): $BakedGlyph;
        handler$hmd001$figura$reload(ci: $CallbackInfo): void;
        handler$hmd000$figura$thing(list: $List_<any>, set: $Set_<any>, i: number, ci: $CallbackInfo, var4: $Iterator<any>, glyphProvider: $GlyphProvider_, glyphInfo: $GlyphInfo): void;
        reload(arg0: $Set_<$FontOption_>): void;
        reload(arg0: $List_<$GlyphProvider$Conditional_>, arg1: $Set_<$FontOption_>): void;
        getGlyph(arg0: number): $BakedGlyph;
        name(): $ResourceLocation;
        close(): void;
        constructor(arg0: $TextureManager, arg1: $ResourceLocation_);
    }
    export class $TextFieldHelper {
        charTyped(arg0: string): boolean;
        keyPressed(arg0: number): boolean;
        insertText(arg0: string): void;
        removeFromCursor(arg0: number, arg1: $TextFieldHelper$CursorStep_): void;
        setCursorToStart(arg0: boolean): void;
        setCursorToStart(): void;
        static createClipboardGetter(arg0: $Minecraft): $Supplier<string>;
        static createClipboardSetter(arg0: $Minecraft): $Consumer<string>;
        cut(): void;
        removeWordsFromCursor(arg0: number): void;
        getCursorPos(): number;
        moveBy(arg0: number, arg1: boolean, arg2: $TextFieldHelper$CursorStep_): void;
        paste(): void;
        static setClipboardContents(arg0: $Minecraft, arg1: string): void;
        static getClipboardContents(arg0: $Minecraft): string;
        setCursorToEnd(): void;
        setCursorToEnd(arg0: boolean): void;
        selectAll(): void;
        moveByWords(arg0: number, arg1: boolean): void;
        moveByWords(arg0: number): void;
        removeCharsFromCursor(arg0: number): void;
        moveByChars(arg0: number): void;
        moveByChars(arg0: number, arg1: boolean): void;
        setCursorPos(arg0: number, arg1: boolean): void;
        setCursorPos(arg0: number): void;
        isSelecting(): boolean;
        setSelectionRange(arg0: number, arg1: number): void;
        getSelectionPos(): number;
        setSelectionPos(arg0: number): void;
        copy(): void;
        constructor(arg0: $Supplier_<string>, arg1: $Consumer_<string>, arg2: $Supplier_<string>, arg3: $Consumer_<string>, arg4: $Predicate_<string>);
        get selecting(): boolean;
    }
    export class $AllMissingGlyphProvider implements $GlyphProvider {
        getSupportedGlyphs(): $IntSet;
        getGlyph(arg0: number): $GlyphInfo;
        close(): void;
        constructor();
        get supportedGlyphs(): $IntSet;
    }
    export class $FontManager$BuilderId extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FontManager$BuilderId}.
     */
    export type $FontManager$BuilderId_ = { pack?: string, fontId?: $ResourceLocation_, index?: number,  } | [pack?: string, fontId?: $ResourceLocation_, index?: number, ];
    export class $FontManager$BuilderResult extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FontManager$BuilderResult}.
     */
    export type $FontManager$BuilderResult_ = { result?: $Either<$CompletableFuture<($GlyphProvider_) | undefined>, $ResourceLocation_>, id?: $FontManager$BuilderId_, filter?: $FontOption$Filter,  } | [result?: $Either<$CompletableFuture<($GlyphProvider_) | undefined>, $ResourceLocation_>, id?: $FontManager$BuilderId_, filter?: $FontOption$Filter, ];
}
