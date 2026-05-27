import { $InputStream } from "@package/java/io";
import { $AnimationRegistry } from "@package/com/tom/cpm/shared/animation";
import { $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $IAllTags } from "@package/com/tom/cpl/tag";
import { $ItemTransform, $ItemRenderer, $VanillaModelPart } from "@package/com/tom/cpm/shared/model/render";
import { $UUID, $List, $Map, $UUID_, $Collection_, $List_ } from "@package/java/util";
import { $ModelPartCloneable, $IModelPart, $ModelPartLink } from "@package/com/tom/cpm/shared/parts";
import { $Predicate_, $Supplier_, $Function_ } from "@package/java/util/function";
import { $TextureProvider } from "@package/com/tom/cpm/shared/skin";
import { $Image, $ItemSlot_ } from "@package/com/tom/cpl/util";
import { $IOHelper } from "@package/com/tom/cpm/shared/io";
import { $MatrixStack } from "@package/com/tom/cpl/math";
import { $Player, $ResourceLoader$ResourceEncoding_, $PlayerSpecificConfigKey } from "@package/com/tom/cpm/shared/config";
import { $Throwable, $Runnable_, $Enum } from "@package/java/lang";
import { $ScaleData, $SkinType_, $PartPosition, $RootModelElement, $PartRoot, $RenderedCube, $SkinType, $TextureSheetType_ } from "@package/com/tom/cpm/shared/model";
import { $FormatText } from "@package/com/tom/cpl/text";

declare module "@package/com/tom/cpm/shared/definition" {
    export class $SafetyException$BlockReason extends $Enum<$SafetyException$BlockReason> {
        static values(): $SafetyException$BlockReason[];
        static valueOf(arg0: string): $SafetyException$BlockReason;
        static UUID_LOCK: $SafetyException$BlockReason;
        static TEXTURE_OVERFLOW: $SafetyException$BlockReason;
        static BLOCK_LIST: $SafetyException$BlockReason;
        static LINK_OVERFLOW: $SafetyException$BlockReason;
        static CONFIG_DISABLED: $SafetyException$BlockReason;
        static TOO_MANY_CUBES: $SafetyException$BlockReason;
    }
    /**
     * Values that may be interpreted as {@link $SafetyException$BlockReason}.
     */
    export type $SafetyException$BlockReason_ = "block_list" | "link_overflow" | "config_disabled" | "too_many_cubes" | "texture_overflow" | "uuid_lock";
    export class $ModelDefinitionLoader<GP> {
        getPlayers(): $List<$Player<never>>;
        reloadPlayer(arg0: GP, arg1: string): $Player<never>;
        putLocalResource(arg0: $Link, arg1: number[]): void;
        getLoadedPlayer(arg0: GP): $Player<never>;
        getGP_UUID(arg0: GP): $UUID;
        getGP_Name(arg0: GP): string;
        cloneModel(arg0: $Player<never>, arg1: string): $CompletableFuture<boolean>;
        clearCache(): void;
        clearServerData(): void;
        loadPlayer(arg0: GP, arg1: string): $Player<never>;
        loadModel(arg0: string, arg1: $Player<never>): $ModelDefinition;
        loadModel(arg0: $Image, arg1: $Player<never>): $ModelDefinition;
        loadModel(arg0: number[], arg1: $Player<never>): $ModelDefinition;
        static parseLink(arg0: string): $Link;
        settingsChanged(arg0: $UUID_): void;
        setModel(arg0: GP, arg1: number[], arg2: boolean): void;
        getModel(arg0: GP): number[];
        getTemplate(): $Image;
        load(arg0: $Link, arg1: $ResourceLoader$ResourceEncoding_, arg2: $ModelDefinition): $InputStream;
        execute(arg0: $Runnable_): void;
        static HEADER: number;
        static PLAYER_UNIQUE: string;
        static SKULL_UNIQUE: string;
        static THREAD_POOL: $Executor;
        constructor(arg0: $Function_<GP, $Player<never>>, arg1: $Function_<GP, $UUID>, arg2: $Function_<GP, string>);
        get players(): $List<$Player<never>>;
        set tingsChanged(value: $UUID_);
        get template(): $Image;
    }
    export class $ModelDefinition$ModelLoadingState extends $Enum<$ModelDefinition$ModelLoadingState> {
        static values(): $ModelDefinition$ModelLoadingState[];
        static valueOf(arg0: string): $ModelDefinition$ModelLoadingState;
        static NEW: $ModelDefinition$ModelLoadingState;
        static SAFETY_BLOCKED: $ModelDefinition$ModelLoadingState;
        static ERRORRED: $ModelDefinition$ModelLoadingState;
        static CLEANED_UP: $ModelDefinition$ModelLoadingState;
        static LOADED: $ModelDefinition$ModelLoadingState;
        static RESOLVING: $ModelDefinition$ModelLoadingState;
    }
    /**
     * Values that may be interpreted as {@link $ModelDefinition$ModelLoadingState}.
     */
    export type $ModelDefinition$ModelLoadingState_ = "new" | "resolving" | "loaded" | "safety_blocked" | "errorred" | "cleaned_up";
    export class $Link {
        getPath(): string;
        getLoader(): string;
        write(arg0: $IOHelper): void;
        constructor(arg0: $IOHelper);
        constructor(arg0: string, arg1: string);
        constructor(arg0: string);
        get path(): string;
        get loader(): string;
    }
    export class $ModelDefinition {
        getScale(): $ScaleData;
        setTexture(arg0: $TextureSheetType_, arg1: $TextureProvider): void;
        getTransform(arg0: $ItemSlot_): $ItemTransform;
        getTransform(arg0: $ItemRenderer): $ItemTransform;
        static createVanilla(arg0: $Supplier_<$TextureProvider>, arg1: $SkinType_): $ModelDefinition;
        getElementById(arg0: number): $RenderedCube;
        resolveAll(): void;
        getSkinType(): $SkinType;
        setParts(arg0: $List_<$IModelPart>): $ModelDefinition;
        getBlockReason(): $SafetyException$BlockReason;
        getPlayerObj(): $Player<never>;
        getModelElementFor(arg0: $VanillaModelPart): $PartRoot;
        isHideHeadIfSkull(): boolean;
        getResolveState(): $ModelDefinition$ModelLoadingState;
        startResolve(): void;
        resetAnimationPos(): void;
        isRemoveArmorOffset(): boolean;
        storeTransform(arg0: $ItemRenderer, arg1: $MatrixStack, arg2: boolean): void;
        addRoot(arg0: number, arg1: $VanillaModelPart): $RootModelElement;
        findDefLink(): $ModelPartLink;
        isStitchedTexture(): boolean;
        hasRoot(arg0: $VanillaModelPart): boolean;
        addCubes(arg0: $Collection_<$RenderedCube>): void;
        setScale(arg0: $ScaleData): void;
        getAnimations(): $AnimationRegistry;
        doRender(): boolean;
        isEditor(): boolean;
        check<V>(arg0: $PlayerSpecificConfigKey<V>, arg1: $Predicate_<V>, arg2: $SafetyException$BlockReason_): void;
        setError(arg0: $Throwable): void;
        cleanup(): void;
        getLoader(): $ModelDefinitionLoader<never>;
        getStatus(): $FormatText;
        getTexture(arg0: $TextureSheetType_, arg1: boolean): $TextureProvider;
        getError(): $Throwable;
        validate(): void;
        removeBedOffset: boolean;
        modelTagManager: $IAllTags;
        fpLeftHand: $PartPosition;
        enableInvisGlow: boolean;
        hideHeadIfSkull: boolean;
        itemTransforms: $Map<$ItemRenderer, $ItemTransform>;
        fpRightHand: $PartPosition;
        cloneable: $ModelPartCloneable;
        removeArmorOffset: boolean;
        constructor(arg0: $Throwable, arg1: $Player<never>);
        constructor(arg0: $ModelDefinitionLoader<never>, arg1: $Player<never>);
        get skinType(): $SkinType;
        set parts(value: $List_<$IModelPart>);
        get blockReason(): $SafetyException$BlockReason;
        get playerObj(): $Player<never>;
        get resolveState(): $ModelDefinition$ModelLoadingState;
        get stitchedTexture(): boolean;
        get animations(): $AnimationRegistry;
        get editor(): boolean;
        get loader(): $ModelDefinitionLoader<never>;
        get status(): $FormatText;
    }
}
