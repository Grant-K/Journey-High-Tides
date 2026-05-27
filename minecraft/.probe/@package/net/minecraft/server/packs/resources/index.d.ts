import { $FilterInputStream, $InputStream, $BufferedReader } from "@package/java/io";
import { $Gson, $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $PipelineReloadableResourceManagerAccessor } from "@package/foundry/veil/mixin/pipeline/accessor";
import { $NamespaceResourceManagerAccessor as $NamespaceResourceManagerAccessor$1 } from "@package/com/finndog/moogs_structures/mixins/resources";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Executor_, $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $ContextAwareReloadListener } from "@package/net/neoforged/neoforge/resource";
import { $RemolderLoader, $RemoldableResourceManager } from "@package/com/teamabnormals/blueprint/common/remolder";
import { $List, $Map_, $Collection_, $List_, $Map, $Set } from "@package/java/util";
import { $ZipEntry, $ZipFile } from "@package/java/util/zip";
import { $Unit_, $ResourceLocationPattern } from "@package/net/minecraft/util";
import { $MetadataSectionSerializer, $MetadataSectionType } from "@package/net/minecraft/server/packs/metadata";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $PackSource, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $Stream } from "@package/java/util/stream";
import { $Path_ } from "@package/java/nio/file";
import { $AtomicLong } from "@package/java/util/concurrent/atomic";
import { $PackResources, $PackType_, $PackType } from "@package/net/minecraft/server/packs";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FabricLifecycledResourceManager, $FabricResource } from "@package/net/fabricmc/fabric/impl/resource/loader";
import { $Enum, $Record, $AutoCloseable } from "@package/java/lang";
import { $NamespaceResourceManagerAccessor, $ReloadableResourceManagerImplAccessor } from "@package/com/craisinlord/integrated_api/mixins/resources";

declare module "@package/net/minecraft/server/packs/resources" {
    export class $ResourceProvider {
        static fromMap(arg0: $Map_<$ResourceLocation_, $Resource>): $ResourceProvider;
        static EMPTY: $ResourceProvider;
    }
    export interface $ResourceProvider {
        getResourceOrThrow(arg0: $ResourceLocation_): $Resource;
        openAsReader(arg0: $ResourceLocation_): $BufferedReader;
        getResource(arg0: $ResourceLocation_): ($Resource) | undefined;
        open(arg0: $ResourceLocation_): $InputStream;
    }
    /**
     * Values that may be interpreted as {@link $ResourceProvider}.
     */
    export type $ResourceProvider_ = ((arg0: $ResourceLocation) => ($Resource) | undefined);
    export class $PreparableReloadListener$PreparationBarrier {
    }
    export interface $PreparableReloadListener$PreparationBarrier {
        wait<T>(arg0: T): $CompletableFuture<T>;
    }
    /**
     * Values that may be interpreted as {@link $PreparableReloadListener$PreparationBarrier}.
     */
    export type $PreparableReloadListener$PreparationBarrier_ = ((arg0: any) => $CompletableFuture<any>);
    export class $FallbackResourceManager$ResourceWithSource extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FallbackResourceManager$ResourceWithSource}.
     */
    export type $FallbackResourceManager$ResourceWithSource_ = { resource?: $IoSupplier_<$InputStream>, source?: $PackResources,  } | [resource?: $IoSupplier_<$InputStream>, source?: $PackResources, ];
    export class $ResourceMetadata$Builder {
        build(): $ResourceMetadata;
        put<T>(arg0: $MetadataSectionSerializer<T>, arg1: T): $ResourceMetadata$Builder;
        constructor();
    }
    export class $SimpleReloadInstance$StateFactory<S> {
    }
    export interface $SimpleReloadInstance$StateFactory<S> {
        create(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $PreparableReloadListener_, arg3: $Executor_, arg4: $Executor_): $CompletableFuture<S>;
    }
    /**
     * Values that may be interpreted as {@link $SimpleReloadInstance$StateFactory}.
     */
    export type $SimpleReloadInstance$StateFactory_<S> = ((arg0: $PreparableReloadListener$PreparationBarrier, arg1: $ResourceManager, arg2: $PreparableReloadListener, arg3: $Executor, arg4: $Executor) => $CompletableFuture<S>);
    export class $IoSupplier<T> {
        static create(arg0: $Path_): $IoSupplier<$InputStream>;
        static create(arg0: $ZipFile, arg1: $ZipEntry): $IoSupplier<$InputStream>;
    }
    export interface $IoSupplier<T> {
        get(): T;
    }
    /**
     * Values that may be interpreted as {@link $IoSupplier}.
     */
    export type $IoSupplier_<T> = (() => T);
    export class $PreparableReloadListener {
    }
    export interface $PreparableReloadListener {
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getName(): string;
        get name(): string;
    }
    /**
     * Values that may be interpreted as {@link $PreparableReloadListener}.
     */
    export type $PreparableReloadListener_ = ((arg0: $PreparableReloadListener$PreparationBarrier, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor, arg5: $Executor) => $CompletableFuture<void>);
    export class $SimpleJsonResourceReloadListener extends $SimplePreparableReloadListener<$Map<$ResourceLocation, $JsonElement>> {
        static scanDirectory(arg0: $ResourceManager, arg1: string, arg2: $Gson, arg3: $Map_<$ResourceLocation_, $JsonElement_>): void;
        constructor(arg0: $Gson, arg1: string);
    }
    export class $FallbackResourceManager$1ResourceWithSourceAndIndex extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FallbackResourceManager$1ResourceWithSourceAndIndex}.
     */
    export type $FallbackResourceManager$1ResourceWithSourceAndIndex_ = { packResources?: $PackResources, packIndex?: number, resource?: $IoSupplier_<$InputStream>,  } | [packResources?: $PackResources, packIndex?: number, resource?: $IoSupplier_<$InputStream>, ];
    export class $FallbackResourceManager$LeakedResourceWarningInputStream extends $FilterInputStream {
    }
    export class $ResourceMetadata {
        static fromJsonStream(arg0: $InputStream): $ResourceMetadata;
        static EMPTY_SUPPLIER: $IoSupplier<$ResourceMetadata>;
        static EMPTY: $ResourceMetadata;
    }
    export interface $ResourceMetadata {
        getSection<T>(arg0: $MetadataSectionSerializer<T>): (T) | undefined;
        copySections(arg0: $Collection_<$MetadataSectionSerializer<never>>): $ResourceMetadata;
    }
    /**
     * Values that may be interpreted as {@link $ResourceMetadata}.
     */
    export type $ResourceMetadata_ = ((arg0: $MetadataSectionSerializer<any>) => (T) | undefined);
    export class $ResourceManagerReloadListener {
    }
    export interface $ResourceManagerReloadListener extends $PreparableReloadListener {
        onResourceManagerReload(arg0: $ResourceManager): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
    }
    /**
     * Values that may be interpreted as {@link $ResourceManagerReloadListener}.
     */
    export type $ResourceManagerReloadListener_ = ((arg0: $ResourceManager) => void);
    export class $MultiPackResourceManager implements $CloseableResourceManager, $ReloadableResourceManagerImplAccessor, $FabricLifecycledResourceManager, $RemoldableResourceManager {
        getResourceStack(arg0: $ResourceLocation_): $List<$Resource>;
        listResourceStacks(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $List<$Resource>>;
        listPacks(): $Stream<$PackResources>;
        fabric_getResourceType(): $PackType;
        getRemolderLoader(): $RemolderLoader;
        updateRemolderLoader(arg0: $PackType_): $RemolderLoader;
        listResources(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $Resource>;
        getNamespaces(): $Set<string>;
        getResource(arg0: $ResourceLocation_): ($Resource) | undefined;
        close(): void;
        getResourceOrThrow(arg0: $ResourceLocation_): $Resource;
        openAsReader(arg0: $ResourceLocation_): $BufferedReader;
        open(arg0: $ResourceLocation_): $InputStream;
        integratedapi_getNamespacedManagers(): $Map<string, $FallbackResourceManager>;
        namespacedManagers: $Map<string, $FallbackResourceManager>;
        packs: $List<$PackResources>;
        constructor(arg0: $PackType_, arg1: $List_<$PackResources>);
        get remolderLoader(): $RemolderLoader;
        get namespaces(): $Set<string>;
    }
    export class $CloseableResourceManager {
    }
    export interface $CloseableResourceManager extends $ResourceManager, $AutoCloseable {
        close(): void;
    }
    export class $SimpleReloadInstance<S> implements $ReloadInstance {
        getActualProgress(): number;
        static create(arg0: $ResourceManager, arg1: $List_<$PreparableReloadListener_>, arg2: $Executor_, arg3: $Executor_, arg4: $CompletableFuture<$Unit_>, arg5: boolean): $ReloadInstance;
        done(): $CompletableFuture<never>;
        static of(arg0: $ResourceManager, arg1: $List_<$PreparableReloadListener_>, arg2: $Executor_, arg3: $Executor_, arg4: $CompletableFuture<$Unit_>): $SimpleReloadInstance<void>;
        checkExceptions(): void;
        isDone(): boolean;
        get actualProgress(): number;
    }
    export class $FallbackResourceManager$PackEntry extends $Record {
        filterAll(arg0: $Collection_<$ResourceLocation_>): void;
        isFiltered(arg0: $ResourceLocation_): boolean;
        name(): string;
        filter(): $Predicate<$ResourceLocation>;
        resources(): $PackResources;
    }
    /**
     * Values that may be interpreted as {@link $FallbackResourceManager$PackEntry}.
     */
    export type $FallbackResourceManager$PackEntry_ = { name?: string, resources?: $PackResources, filter?: $Predicate_<$ResourceLocation>,  } | [name?: string, resources?: $PackResources, filter?: $Predicate_<$ResourceLocation>, ];
    export class $FallbackResourceManager implements $ResourceManager, $NamespaceResourceManagerAccessor, $NamespaceResourceManagerAccessor$1 {
        getResourceStack(arg0: $ResourceLocation_): $List<$Resource>;
        listResourceStacks(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $List<$Resource>>;
        listPacks(): $Stream<$PackResources>;
        pushFilterOnly(arg0: string, arg1: $Predicate_<$ResourceLocation>): void;
        static getMetadataLocation(arg0: $ResourceLocation_): $ResourceLocation;
        static parseMetadata(arg0: $IoSupplier_<$InputStream>): $ResourceMetadata;
        push(arg0: $PackResources): void;
        push(arg0: $PackResources, arg1: $Predicate_<$ResourceLocation>): void;
        listResources(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $Resource>;
        getNamespaces(): $Set<string>;
        getResource(arg0: $ResourceLocation_): ($Resource) | undefined;
        getResourceOrThrow(arg0: $ResourceLocation_): $Resource;
        openAsReader(arg0: $ResourceLocation_): $BufferedReader;
        open(arg0: $ResourceLocation_): $InputStream;
        integratedapi_getFallbacks(): $List<$FallbackResourceManager$PackEntry>;
        moogs_structures_getFallbacks(): $List<$FallbackResourceManager$PackEntry>;
        fallbacks: $List<$FallbackResourceManager$PackEntry>;
        type: $PackType;
        constructor(arg0: $PackType_, arg1: string);
        get namespaces(): $Set<string>;
    }
    export class $ProfiledReloadInstance extends $SimpleReloadInstance<$ProfiledReloadInstance$State> {
        constructor(arg0: $ResourceManager, arg1: $List_<$PreparableReloadListener_>, arg2: $Executor_, arg3: $Executor_, arg4: $CompletableFuture<$Unit_>);
    }
    export class $ProfiledReloadInstance$State {
        reloadNanos: $AtomicLong;
        preparationNanos: $AtomicLong;
    }
    export class $ResourceManager$Empty extends $Enum<$ResourceManager$Empty> implements $ResourceManager {
        getResourceStack(arg0: $ResourceLocation_): $List<$Resource>;
        listResourceStacks(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $List<$Resource>>;
        listPacks(): $Stream<$PackResources>;
        listResources(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $Resource>;
        getNamespaces(): $Set<string>;
        static values(): $ResourceManager$Empty[];
        static valueOf(arg0: string): $ResourceManager$Empty;
        getResource(arg0: $ResourceLocation_): ($Resource) | undefined;
        getResourceOrThrow(arg0: $ResourceLocation_): $Resource;
        openAsReader(arg0: $ResourceLocation_): $BufferedReader;
        open(arg0: $ResourceLocation_): $InputStream;
        static INSTANCE: $ResourceManager$Empty;
        get namespaces(): $Set<string>;
    }
    /**
     * Values that may be interpreted as {@link $ResourceManager$Empty}.
     */
    export type $ResourceManager$Empty_ = "instance";
    export class $FallbackResourceManager$EntryStack extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FallbackResourceManager$EntryStack}.
     */
    export type $FallbackResourceManager$EntryStack_ = { fileLocation?: $ResourceLocation_, metaSources?: $Map_<$PackResources, $IoSupplier_<$InputStream>>, fileSources?: $List_<$FallbackResourceManager$ResourceWithSource_>, metadataLocation?: $ResourceLocation_,  } | [fileLocation?: $ResourceLocation_, metaSources?: $Map_<$PackResources, $IoSupplier_<$InputStream>>, fileSources?: $List_<$FallbackResourceManager$ResourceWithSource_>, metadataLocation?: $ResourceLocation_, ];
    export class $ReloadableResourceManager implements $ResourceManager, $AutoCloseable, $PipelineReloadableResourceManagerAccessor {
        registerReloadListener(arg0: $PreparableReloadListener_): void;
        createReload(arg0: $Executor_, arg1: $Executor_, arg2: $CompletableFuture<$Unit_>, arg3: $List_<$PackResources>): $ReloadInstance;
        getResourceStack(arg0: $ResourceLocation_): $List<$Resource>;
        listResourceStacks(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $List<$Resource>>;
        listPacks(): $Stream<$PackResources>;
        registerReloadListenerIfNotPresent(arg0: $PreparableReloadListener_): void;
        listResources(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $Resource>;
        getNamespaces(): $Set<string>;
        getResource(arg0: $ResourceLocation_): ($Resource) | undefined;
        close(): void;
        getResourceOrThrow(arg0: $ResourceLocation_): $Resource;
        openAsReader(arg0: $ResourceLocation_): $BufferedReader;
        open(arg0: $ResourceLocation_): $InputStream;
        getListeners(): $List<$PreparableReloadListener>;
        resources: $CloseableResourceManager;
        type: $PackType;
        constructor(arg0: $PackType_);
        get namespaces(): $Set<string>;
        get listeners(): $List<$PreparableReloadListener>;
    }
    /**
     * @deprecated
     */
    export class $SimplePreparableReloadListener<T> extends $ContextAwareReloadListener implements $PreparableReloadListener {
        constructor();
    }
    export class $ResourceManager {
    }
    export interface $ResourceManager extends $ResourceProvider {
        getResourceStack(arg0: $ResourceLocation_): $List<$Resource>;
        listResourceStacks(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $List<$Resource>>;
        listPacks(): $Stream<$PackResources>;
        listResources(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $Resource>;
        getNamespaces(): $Set<string>;
        get namespaces(): $Set<string>;
    }
    export class $Resource implements $FabricResource {
        sourcePackId(): string;
        openAsReader(): $BufferedReader;
        knownPackInfo(): ($KnownPack) | undefined;
        getFabricPackSource(): $PackSource;
        metadata(): $ResourceMetadata;
        source(): $PackResources;
        open(): $InputStream;
        constructor(arg0: $PackResources, arg1: $IoSupplier_<$InputStream>, arg2: $IoSupplier_<$ResourceMetadata>);
        constructor(arg0: $PackResources, arg1: $IoSupplier_<$InputStream>);
        get fabricPackSource(): $PackSource;
    }
    export class $ResourceFilterSection {
        isNamespaceFiltered(arg0: string): boolean;
        isPathFiltered(arg0: string): boolean;
        static TYPE: $MetadataSectionType<$ResourceFilterSection>;
        constructor(arg0: $List_<$ResourceLocationPattern>);
    }
    export class $ReloadInstance {
    }
    export interface $ReloadInstance {
        getActualProgress(): number;
        checkExceptions(): void;
        done(): $CompletableFuture<never>;
        isDone(): boolean;
        get actualProgress(): number;
    }
}
