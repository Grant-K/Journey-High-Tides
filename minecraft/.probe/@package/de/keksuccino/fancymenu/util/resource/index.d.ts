import { $InputStream, $Closeable } from "@package/java/io";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AspectRatio } from "@package/de/keksuccino/fancymenu/util/rendering";
export * as resources from "@package/de/keksuccino/fancymenu/util/resource/resources";

declare module "@package/de/keksuccino/fancymenu/util/resource" {
    export class $PlayableResource {
    }
    export interface $PlayableResource extends $Resource {
        play(): void;
        isPlaying(): boolean;
        pause(): void;
        isPaused(): boolean;
        stop(): void;
        get playing(): boolean;
        get paused(): boolean;
    }
    export class $Resource {
    }
    export interface $Resource extends $Closeable {
        waitForReady(arg0: number): void;
        isReady(): boolean;
        isLoadingCompleted(): boolean;
        isLoadingFailed(): boolean;
        waitForLoadingCompletedOrFailed(arg0: number): void;
        isClosed(): boolean;
        open(): $InputStream;
        get ready(): boolean;
        get loadingCompleted(): boolean;
        get loadingFailed(): boolean;
        get closed(): boolean;
    }
    export class $RenderableResource {
        static MISSING_TEXTURE_LOCATION: $ResourceLocation;
        static FULLY_TRANSPARENT_TEXTURE: $ResourceLocation;
    }
    export interface $RenderableResource extends $Resource {
        getAspectRatio(): $AspectRatio;
        getResourceLocation(): $ResourceLocation;
        getWidth(): number;
        getHeight(): number;
        reset(): void;
        get aspectRatio(): $AspectRatio;
        get resourceLocation(): $ResourceLocation;
        get width(): number;
        get height(): number;
    }
}
