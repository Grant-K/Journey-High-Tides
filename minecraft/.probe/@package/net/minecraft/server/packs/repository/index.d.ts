import { $PackExtension } from "@package/com/supermartijn642/fusion/extensions";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $PackRepositoryAccessor } from "@package/com/blackgear/platform/core/mixin/access";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $List, $Set_, $Collection_, $List_, $Collection, $Set } from "@package/java/util";
import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $InclusiveRange, $InclusiveRange_ } from "@package/net/minecraft/util";
import { $Consumer, $BiConsumer_, $Function_, $Consumer_, $UnaryOperator_, $Predicate_, $UnaryOperator } from "@package/java/util/function";
import { $FusionPackMetadata } from "@package/com/supermartijn642/fusion/resources";
import { $Stream } from "@package/java/util/stream";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $PackSelectionConfig_, $PackResources, $PackType_, $PackLocationInfo, $PackLocationInfo_, $VanillaPackResources, $PackSelectionConfig } from "@package/net/minecraft/server/packs";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $FabricResourcePackProfile } from "@package/net/fabricmc/fabric/impl/resource/loader";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $PackMetadataSection_ } from "@package/net/minecraft/server/packs/metadata/pack";
import { $DirectoryValidator, $ForbiddenSymlinkInfo_ } from "@package/net/minecraft/world/level/validation";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/server/packs/repository" {
    export class $Pack$Position extends $Enum<$Pack$Position> {
        opposite(): $Pack$Position;
        static values(): $Pack$Position[];
        insert<T>(arg0: $List_<T>, arg1: T, arg2: $Function_<T, $PackSelectionConfig>, arg3: boolean): number;
        static valueOf(arg0: string): $Pack$Position;
        static TOP: $Pack$Position;
        static BOTTOM: $Pack$Position;
    }
    /**
     * Values that may be interpreted as {@link $Pack$Position}.
     */
    export type $Pack$Position_ = "top" | "bottom";
    export class $PackSource {
        static create(arg0: $UnaryOperator_<$Component>, arg1: boolean): $PackSource;
        static BUILT_IN: $PackSource;
        static SERVER: $PackSource;
        static FEATURE: $PackSource;
        static NO_DECORATION: $UnaryOperator<$Component>;
        static WORLD: $PackSource;
        static DEFAULT: $PackSource;
    }
    export interface $PackSource {
        shouldAddAutomatically(): boolean;
        decorate(arg0: $Component_): $Component;
    }
    export class $Pack$ResourcesSupplier {
    }
    export interface $Pack$ResourcesSupplier {
        openPrimary(arg0: $PackLocationInfo_): $PackResources;
        openFull(arg0: $PackLocationInfo_, arg1: $Pack$Metadata_): $PackResources;
    }
    export class $FolderRepositorySource implements $RepositorySource {
        static discoverPacks(arg0: $Path_, arg1: $DirectoryValidator, arg2: $BiConsumer_<$Path, $Pack$ResourcesSupplier>): void;
        loadPacks(arg0: $Consumer_<$Pack>): void;
        packSource: $PackSource;
        constructor(arg0: $Path_, arg1: $PackType_, arg2: $PackSource, arg3: $DirectoryValidator);
    }
    export class $PackRepository implements $PackRepositoryAccessor {
        openAllSelected(): $List<$PackResources>;
        getSelectedPacks(): $Collection<$Pack>;
        setSelected(arg0: $Collection_<string>): void;
        static displayPackList(arg0: $Collection_<$Pack>): string;
        getSelectedIds(): $Collection<string>;
        handler$ehi000$fabric_resource_loader_v0$construct(arg0: $RepositorySource_[], arg1: $CallbackInfo): void;
        rebuildSelected(arg0: $Collection_<string>): $List<$Pack>;
        addPack(arg0: string): boolean;
        removePack(arg0: string): boolean;
        getAvailablePacks(): $Collection<$Pack>;
        getAvailableIds(): $Collection<string>;
        getRequestedFeatureFlags(): $FeatureFlagSet;
        getPack(arg0: string): $Pack;
        addPackFinder(arg0: $RepositorySource_): void;
        isAvailable(arg0: string): boolean;
        reload(): void;
        setSources(arg0: $Set_<$RepositorySource_>): void;
        getSources(): $Set<$RepositorySource>;
        sources: $Set<$RepositorySource>;
        constructor(...arg0: $RepositorySource_[]);
        get selectedPacks(): $Collection<$Pack>;
        set selected(value: $Collection_<string>);
        get selectedIds(): $Collection<string>;
        get availablePacks(): $Collection<$Pack>;
        get availableIds(): $Collection<string>;
        get requestedFeatureFlags(): $FeatureFlagSet;
    }
    export class $KnownPack extends $Record {
        static vanilla(arg0: string): $KnownPack;
        isVanilla(): boolean;
        namespace(): string;
        version(): string;
        id(): string;
        static VANILLA_NAMESPACE: string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $KnownPack>;
        constructor(arg0: string, arg1: string, arg2: string);
    }
    /**
     * Values that may be interpreted as {@link $KnownPack}.
     */
    export type $KnownPack_ = { id?: string, version?: string, namespace?: string,  } | [id?: string, version?: string, namespace?: string, ];
    export class $FolderRepositorySource$FolderPackDetector extends $PackDetector<$Pack$ResourcesSupplier> {
    }
    export class $PackDetector<T> {
        detectPackResources(arg0: $Path_, arg1: $List_<$ForbiddenSymlinkInfo_>): T;
    }
    export class $ServerPacksSource extends $BuiltInPackSource {
        static createVanillaPackSource(): $VanillaPackResources;
        static createVanillaTrustedRepository(): $PackRepository;
        static createPackRepository(arg0: $Path_, arg1: $DirectoryValidator): $PackRepository;
        static createPackRepository(arg0: $LevelStorageSource$LevelStorageAccess): $PackRepository;
        static VANILLA_ID: string;
        static CORE_PACK_INFO: $KnownPack;
        constructor(arg0: $DirectoryValidator);
    }
    export class $Pack$Metadata extends $Record {
        requestedFeatures(): $FeatureFlagSet;
        overlays(): $List<string>;
        description(): $Component;
        compatibility(): $PackCompatibility;
        isHidden(): boolean;
        /**
         * @deprecated
         */
        constructor(arg0: $Component_, arg1: $PackCompatibility_, arg2: $FeatureFlagSet, arg3: $List_<string>);
        constructor(description: $Component_, compatibility: $PackCompatibility_, requestedFeatures: $FeatureFlagSet, overlays: $List_<string>, isHidden: boolean);
        get hidden(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Pack$Metadata}.
     */
    export type $Pack$Metadata_ = { isHidden?: boolean, requestedFeatures?: $FeatureFlagSet, description?: $Component_, overlays?: $List_<string>, compatibility?: $PackCompatibility_,  } | [isHidden?: boolean, requestedFeatures?: $FeatureFlagSet, description?: $Component_, overlays?: $List_<string>, compatibility?: $PackCompatibility_, ];
    export class $PackCompatibility extends $Enum<$PackCompatibility> {
        isCompatible(): boolean;
        static forVersion(arg0: $InclusiveRange_<number>, arg1: number): $PackCompatibility;
        getConfirmation(): $Component;
        getDescription(): $Component;
        static values(): $PackCompatibility[];
        static valueOf(arg0: string): $PackCompatibility;
        static TOO_OLD: $PackCompatibility;
        static COMPATIBLE: $PackCompatibility;
        static TOO_NEW: $PackCompatibility;
        get compatible(): boolean;
        get confirmation(): $Component;
        get description(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $PackCompatibility}.
     */
    export type $PackCompatibility_ = "too_old" | "too_new" | "compatible";
    export class $RepositorySource {
    }
    export interface $RepositorySource {
        loadPacks(arg0: $Consumer_<$Pack>): void;
    }
    /**
     * Values that may be interpreted as {@link $RepositorySource}.
     */
    export type $RepositorySource_ = ((arg0: $Consumer<$Pack>) => void);
    export class $Pack implements $PackExtension, $FabricResourcePackProfile {
        getCompatibility(): $PackCompatibility;
        static readPackMetadata(arg0: $PackLocationInfo_, arg1: $Pack$ResourcesSupplier, arg2: number): $Pack$Metadata;
        getDefaultPosition(): $Pack$Position;
        selectionConfig(): $PackSelectionConfig;
        getRequestedFeatures(): $FeatureFlagSet;
        streamSelfAndChildren(): $Stream<$Pack>;
        fabric_parentsEnabled(arg0: $Set_<any>): boolean;
        isFixedPosition(): boolean;
        static getDeclaredPackVersions(arg0: string, arg1: $PackMetadataSection_): $InclusiveRange<number>;
        getChatLink(arg0: boolean): $Component;
        getPackSource(): $PackSource;
        withChildren(arg0: $List_<$Pack>): $Pack;
        getFusionMetadata(): $FusionPackMetadata;
        fabric_isHidden(): boolean;
        fabric_setParentsPredicate(arg0: $Predicate_<any>): void;
        static readMetaAndCreate(arg0: $PackLocationInfo_, arg1: $Pack$ResourcesSupplier, arg2: $PackType_, arg3: $PackSelectionConfig_): $Pack;
        getChildren(): $List<$Pack>;
        getDescription(): $Component;
        getTitle(): $Component;
        isRequired(): boolean;
        hidden(): $Pack;
        isHidden(): boolean;
        location(): $PackLocationInfo;
        getId(): string;
        open(): $PackResources;
        constructor(arg0: $PackLocationInfo_, arg1: $Pack$ResourcesSupplier, arg2: $Pack$Metadata_, arg3: $PackSelectionConfig_);
        get compatibility(): $PackCompatibility;
        get defaultPosition(): $Pack$Position;
        get requestedFeatures(): $FeatureFlagSet;
        get fixedPosition(): boolean;
        get packSource(): $PackSource;
        get fusionMetadata(): $FusionPackMetadata;
        get children(): $List<$Pack>;
        get description(): $Component;
        get title(): $Component;
        get required(): boolean;
        get id(): string;
    }
    export class $BuiltInPackSource implements $RepositorySource {
        getVanillaPack(): $VanillaPackResources;
        static fixedResources(arg0: $PackResources): $Pack$ResourcesSupplier;
        static fromName(arg0: $Function_<$PackLocationInfo, $PackResources>): $Pack$ResourcesSupplier;
        loadPacks(arg0: $Consumer_<$Pack>): void;
        static VANILLA_ID: string;
        static CORE_PACK_INFO: $KnownPack;
        constructor(arg0: $PackType_, arg1: $VanillaPackResources, arg2: $ResourceLocation_, arg3: $DirectoryValidator);
        get vanillaPack(): $VanillaPackResources;
    }
}
