import { $VeilEditorEnvironment, $VeilResourceManager, $VeilResource } from "@package/foundry/veil/api/resource";
import { $Predicate_ } from "@package/java/util/function";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ImFont } from "@package/imgui";
import { $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener, $ReloadableResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $NativeResource } from "@package/org/lwjgl/system";
import { $ResourceFileEditor$Factory_ } from "@package/foundry/veil/api/resource/editor";

declare module "@package/foundry/veil/api/client/editor" {
    export class $EditorManager implements $VeilEditorEnvironment, $PreparableReloadListener {
        setEnabled(arg0: boolean): void;
        renderLast(): void;
        getResourceManager(): $VeilResourceManager;
        getFont(arg0: boolean, arg1: boolean): $ImFont;
        getFont(arg0: $ResourceLocation_, arg1: boolean, arg2: boolean): $ImFont;
        isVisible(arg0: $Predicate_<$Inspector>): boolean;
        isVisible(arg0: $Inspector): boolean;
        rebuildFonts(): void;
        show(arg0: $Inspector): void;
        toggle(): void;
        hide(arg0: $Inspector): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        onFileChange(arg0: $VeilResource<never>): void;
        render(): void;
        remove(arg0: $Inspector): void;
        add(arg0: $Inspector): void;
        isEnabled(): boolean;
        open<T extends $VeilResource<never>>(arg0: T, arg1: $ResourceFileEditor$Factory_<T>): void;
        open(arg0: $VeilResource<never>, arg1: $ResourceLocation_): void;
        getName(): string;
        static DEFAULT_FONT: $ResourceLocation;
        constructor(arg0: $ReloadableResourceManager);
        get resourceManager(): $VeilResourceManager;
        get name(): string;
    }
    export class $Inspector {
        static group(arg0: $ResourceLocation_): $Component;
        static RESOURCE_GROUP: $Component;
        static EXAMPLE_GROUP: $Component;
        static DEFAULT_GROUP: $Component;
        static INFO_GROUP: $Component;
        static RENDERER_GROUP: $Component;
    }
    export interface $Inspector extends $NativeResource {
        renderLast(): void;
        getDisplayName(): $Component;
        renderMenuBar(): void;
        isMenuBarEnabled(): boolean;
        onShow(): void;
        onHide(): void;
        free(): void;
        render(): void;
        getGroup(): $Component;
        isEnabled(): boolean;
        isOpen(): boolean;
        get displayName(): $Component;
        get menuBarEnabled(): boolean;
        get enabled(): boolean;
        get open(): boolean;
    }
}
