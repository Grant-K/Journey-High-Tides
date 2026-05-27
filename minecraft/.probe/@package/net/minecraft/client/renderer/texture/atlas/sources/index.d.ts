import { $IntUnaryOperator, $Supplier_, $Function_, $Function, $Supplier } from "@package/java/util/function";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ResourceManager, $Resource } from "@package/net/minecraft/server/packs/resources";
import { $SpriteContents } from "@package/net/minecraft/client/renderer/texture";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $SpriteSource$SpriteSupplier, $SpriteResourceLoader, $SpriteSource$Output, $SpriteSourceType, $SpriteResourceLoader_, $SpriteSource } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $SpriteSourceListMixin$PalettedPermutationsAccessor } from "@package/com/blackgear/vanillabackport/core/mixin/client";
import { $ResourceLocationPattern } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/client/renderer/texture/atlas/sources" {
    export class $SingleFile implements $SpriteSource {
        run(arg0: $ResourceManager, arg1: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
        static CODEC: $MapCodec<$SingleFile>;
        constructor(arg0: $ResourceLocation_, arg1: ($ResourceLocation_) | undefined);
    }
    export class $PalettedPermutations implements $SpriteSource, $SpriteSourceListMixin$PalettedPermutationsAccessor {
        getTextures(): $List<any>;
        setTextures(arg0: $List_<any>): void;
        setPermutations(arg0: $Map_<any, any>): void;
        getPaletteKey(): $ResourceLocation;
        getPermutations(): $Map<any, any>;
        static loadPaletteEntryFromImage(arg0: $ResourceManager, arg1: $ResourceLocation_): number[];
        run(arg0: $ResourceManager, arg1: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
        static CODEC: $MapCodec<$PalettedPermutations>;
        constructor(arg0: $List_<$ResourceLocation_>, arg1: $ResourceLocation_, arg2: $Map_<string, $ResourceLocation_>);
        get paletteKey(): $ResourceLocation;
    }
    export class $LazyLoadedImage {
        release(): void;
        get(): $NativeImage;
        constructor(arg0: $ResourceLocation_, arg1: $Resource, arg2: number);
    }
    export class $Unstitcher$RegionInstance implements $SpriteSource$SpriteSupplier {
        discard(): void;
        apply(arg0: $SpriteResourceLoader_): $SpriteContents;
        compose<V>(arg0: $Function_<V, $SpriteResourceLoader>): $Function<V, $SpriteContents>;
        andThen<V>(arg0: $Function_<$SpriteContents, V>): $Function<$SpriteResourceLoader, V>;
        constructor(arg0: $LazyLoadedImage, arg1: $Unstitcher$Region_, arg2: number, arg3: number);
    }
    export class $Unstitcher implements $SpriteSource {
        run(arg0: $ResourceManager, arg1: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
        static CODEC: $MapCodec<$Unstitcher>;
        constructor(arg0: $ResourceLocation_, arg1: $List_<$Unstitcher$Region_>, arg2: number, arg3: number);
    }
    export class $DirectoryLister implements $SpriteSource {
        run(arg0: $ResourceManager, arg1: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
        static CODEC: $MapCodec<$DirectoryLister>;
        constructor(arg0: string, arg1: string);
    }
    export class $SourceFilter implements $SpriteSource {
        run(arg0: $ResourceManager, arg1: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
        static CODEC: $MapCodec<$SourceFilter>;
        constructor(arg0: $ResourceLocationPattern);
    }
    export class $PalettedPermutations$PalettedSpriteSupplier extends $Record implements $SpriteSource$SpriteSupplier {
        palette(): $Supplier<$IntUnaryOperator>;
        baseImage(): $LazyLoadedImage;
        permutationLocation(): $ResourceLocation;
        discard(): void;
        apply(arg0: $SpriteResourceLoader_): $SpriteContents;
        compose<V>(arg0: $Function_<V, $SpriteResourceLoader>): $Function<V, $SpriteContents>;
        andThen<V>(arg0: $Function_<$SpriteContents, V>): $Function<$SpriteResourceLoader, V>;
        constructor(arg0: $LazyLoadedImage, arg1: $Supplier_<$IntUnaryOperator>, arg2: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $PalettedPermutations$PalettedSpriteSupplier}.
     */
    export type $PalettedPermutations$PalettedSpriteSupplier_ = { palette?: $Supplier_<$IntUnaryOperator>, baseImage?: $LazyLoadedImage, permutationLocation?: $ResourceLocation_,  } | [palette?: $Supplier_<$IntUnaryOperator>, baseImage?: $LazyLoadedImage, permutationLocation?: $ResourceLocation_, ];
    export class $Unstitcher$Region extends $Record {
        sprite(): $ResourceLocation;
        y(): number;
        width(): number;
        height(): number;
        x(): number;
        static CODEC: $Codec<$Unstitcher$Region>;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    /**
     * Values that may be interpreted as {@link $Unstitcher$Region}.
     */
    export type $Unstitcher$Region_ = { y?: number, width?: number, sprite?: $ResourceLocation_, height?: number, x?: number,  } | [y?: number, width?: number, sprite?: $ResourceLocation_, height?: number, x?: number, ];
}
