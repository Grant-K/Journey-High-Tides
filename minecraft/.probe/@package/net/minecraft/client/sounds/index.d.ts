import { $IMixinMusicManager } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $IMixinSoundEngine, $IMixinSoundManager } from "@package/de/keksuccino/melody/mixin/mixins/common/client";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $SoundBuffer, $ListenerTransform, $Library$Pool_, $Library, $Channel } from "@package/com/mojang/blaze3d/audio";
import { $SoundEngineAccessor as $SoundEngineAccessor$2 } from "@package/com/aetherteam/aether/mixin/mixins/client/accessor";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft, $Camera, $Options } from "@package/net/minecraft/client";
import { $SimplePreparableReloadListener, $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $UUID, $List, $UUID_, $Collection_, $Collection, $Map } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $SoundManagerAccessor as $SoundManagerAccessor$1 } from "@package/org/figuramc/figura/mixin/sound";
import { $SoundEngineAccessor as $SoundEngineAccessor$1, $ChannelHandleAccessor } from "@package/org/figuramc/figura/ducks";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Consumer, $Consumer_ } from "@package/java/util/function";
import { $SoundSource_, $Music } from "@package/net/minecraft/sounds";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Sound, $TickableSoundInstance, $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Enum, $Runnable } from "@package/java/lang";
import { $LuaSound } from "@package/org/figuramc/figura/lua/api/sound";
import { $SoundEngineAccessor as $SoundEngineAccessor$3, $SoundManagerAccessor } from "@package/com/blackgear/vanillabackport/core/mixin/access";
import { $FilterInputStream, $InputStream, $Closeable } from "@package/java/io";
import { $Component } from "@package/net/minecraft/network/chat";
import { $AudioFormat } from "@package/javax/sound/sampled";
import { $SoundEngineAccessor, $SoundManagerAccessor as $SoundManagerAccessor$2 } from "@package/com/telepathicgrunt/the_bumblezone/mixin/client";
import { $MusicManagerAccessor } from "@package/dev/eriksonn/aeronautics/mixin/custom_situational_music";
import { $FloatConsumer_, $FloatConsumer } from "@package/it/unimi/dsi/fastutil/floats";
import { $Stream } from "@package/java/util/stream";
import { $BlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/net/minecraft/client/sounds" {
    export class $SoundEventListener {
    }
    export interface $SoundEventListener {
        onPlaySound(arg0: $SoundInstance, arg1: $WeighedSoundEvents, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $SoundEventListener}.
     */
    export type $SoundEventListener_ = ((arg0: $SoundInstance, arg1: $WeighedSoundEvents, arg2: number) => void);
    export class $SoundEngineExecutor extends $BlockableEventLoop<$Runnable> {
        flush(): void;
        constructor();
    }
    export class $LoopingAudioStream$NoCloseBuffer extends $FilterInputStream {
    }
    export class $SoundEngine$DeviceCheckState extends $Enum<$SoundEngine$DeviceCheckState> {
    }
    /**
     * Values that may be interpreted as {@link $SoundEngine$DeviceCheckState}.
     */
    export type $SoundEngine$DeviceCheckState_ = "ongoing" | "change_detected" | "no_change";
    export class $LoopingAudioStream$AudioStreamProvider {
    }
    export interface $LoopingAudioStream$AudioStreamProvider {
        create(arg0: $InputStream): $AudioStream;
    }
    /**
     * Values that may be interpreted as {@link $LoopingAudioStream$AudioStreamProvider}.
     */
    export type $LoopingAudioStream$AudioStreamProvider_ = ((arg0: $InputStream) => $AudioStream);
    export class $SoundManager extends $SimplePreparableReloadListener<$SoundManager$Preparations> implements $SoundManagerAccessor$2, $IMixinSoundManager, $IdentifiableResourceReloadListener, $SoundManagerAccessor, $SoundManagerAccessor$1 {
        play(arg0: $SoundInstance): void;
        pause(): void;
        emergencyShutdown(): void;
        updateSource(arg0: $Camera): void;
        playDelayed(arg0: $SoundInstance, arg1: number): void;
        queueTickingSound(arg0: $TickableSoundInstance): void;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        updateSourceVolume(arg0: $SoundSource_, arg1: number): void;
        getAvailableSoundDevices(): $List<string>;
        getAvailableSounds(): $Collection<$ResourceLocation>;
        getSoundEvent(arg0: $ResourceLocation_): $WeighedSoundEvents;
        tick(arg0: boolean): void;
        reload(): void;
        getDebugString(): string;
        getListenerTransform(): $ListenerTransform;
        isActive(arg0: $SoundInstance): boolean;
        removeListener(arg0: $SoundEventListener_): void;
        addListener(arg0: $SoundEventListener_): void;
        stop(): void;
        stop(arg0: $SoundInstance): void;
        stop(arg0: $ResourceLocation_, arg1: $SoundSource_): void;
        resume(): void;
        destroy(): void;
        getSoundEngine(): $SoundEngine;
        bumblezone$getSoundEngine(): $SoundEngine;
        getSoundEngineMelody(): $SoundEngine;
        static EMPTY_SOUND: $Sound;
        static INTENTIONALLY_EMPTY_SOUND_EVENT: $WeighedSoundEvents;
        static EMPTY_SOUND_LOCATION: $ResourceLocation;
        static INTENTIONALLY_EMPTY_SOUND_LOCATION: $ResourceLocation;
        static INTENTIONALLY_EMPTY_SOUND: $Sound;
        constructor(arg0: $Options);
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get availableSoundDevices(): $List<string>;
        get availableSounds(): $Collection<$ResourceLocation>;
        get debugString(): string;
        get listenerTransform(): $ListenerTransform;
        get soundEngine(): $SoundEngine;
        get soundEngineMelody(): $SoundEngine;
    }
    export class $LoopingAudioStream implements $AudioStream {
        getFormat(): $AudioFormat;
        read(arg0: number): $ByteBuffer;
        close(): void;
        constructor(arg0: $LoopingAudioStream$AudioStreamProvider_, arg1: $InputStream);
        get format(): $AudioFormat;
    }
    export class $ChannelAccess$ChannelHandle implements $ChannelHandleAccessor {
        setOwner(uuid: $UUID_): void;
        release(): void;
        getOwner(): $UUID;
        isStopped(): boolean;
        getName(): string;
        execute(arg0: $Consumer_<$Channel>): void;
        setName(name: string): void;
        constructor(arg0: $ChannelAccess, arg1: $Channel);
        get stopped(): boolean;
    }
    export class $AudioStream {
    }
    export interface $AudioStream extends $Closeable {
        getFormat(): $AudioFormat;
        read(arg0: number): $ByteBuffer;
        get format(): $AudioFormat;
    }
    export class $SoundEngine implements $SoundEngineAccessor, $IMixinSoundEngine, $SoundEngineAccessor$3, $SoundEngineAccessor$1, $SoundEngineAccessor$2 {
        play(arg0: $SoundInstance): void;
        pause(): void;
        emergencyShutdown(): void;
        updateSource(arg0: $Camera): void;
        playDelayed(arg0: $SoundInstance, arg1: number): void;
        queueTickingSound(arg0: $TickableSoundInstance): void;
        getAvailableSoundDevices(): $List<string>;
        requestPreload(arg0: $Sound): void;
        handler$ncn000$spectrum$reverb$reloadSounds(arg0: $CallbackInfo): void;
        handler$ncn000$spectrum$reverb$tick(arg0: $CallbackInfo, arg1: $ChannelAccess$ChannelHandle, arg2: $SoundInstance): void;
        modifyExpressionValue$hgb000$immersiveengineering$adjustVolumeAtStart(arg0: number, arg1: $SoundInstance): number;
        handler$hol000$figura$play(sound: $SoundInstance, c: $CallbackInfo): void;
        handler$ncn000$spectrum$reverb$play(arg0: $SoundInstance, arg1: $CallbackInfo, arg2: $ChannelAccess$ChannelHandle): void;
        modifyReturnValue$hgb000$immersiveengineering$adjustVolumeForEarmuffs(arg0: number, arg1: $SoundInstance): number;
        figura$stopAllSounds(): void;
        figura$addSound(sound: $LuaSound): void;
        figura$createHandle(owner: $UUID_, name: string, pool: $Library$Pool_): $ChannelAccess$ChannelHandle;
        figura$getVolume(category: $SoundSource_): number;
        figura$getSoundBuffers(): $SoundBufferLibrary;
        figura$isPlaying(owner: $UUID_): boolean;
        stopAll(): void;
        addEventListener(arg0: $SoundEventListener_): void;
        removeEventListener(arg0: $SoundEventListener_): void;
        tick(arg0: boolean): void;
        reload(): void;
        figura$stopSound(owner: $UUID_, name: string): void;
        figura$isEngineActive(): boolean;
        getDebugString(): string;
        getListenerTransform(): $ListenerTransform;
        updateCategoryVolume(arg0: $SoundSource_, arg1: number): void;
        isActive(arg0: $SoundInstance): boolean;
        stop(arg0: $ResourceLocation_, arg1: $SoundSource_): void;
        stop(arg0: $SoundInstance): void;
        resume(): void;
        destroy(): void;
        bumblezone$getInstanceToChannel(): $Map<$SoundInstance, $ChannelAccess$ChannelHandle>;
        getLoadedMelody(): boolean;
        getInstanceToChannel(): $Map<$SoundInstance, $ChannelAccess$ChannelHandle>;
        callCalculateVolume(arg0: $SoundInstance): number;
        aether$getInstanceToChannel(): $Map<$SoundInstance, $ChannelAccess$ChannelHandle>;
        isLoaded(): boolean;
        static MISSING_SOUND: string;
        soundManager: $SoundManager;
        static OPEN_AL_SOFT_PREFIX: string;
        static OPEN_AL_SOFT_PREFIX_LENGTH: number;
        constructor(arg0: $SoundManager, arg1: $Options, arg2: $ResourceProvider_);
        get availableSoundDevices(): $List<string>;
        get debugString(): string;
        get listenerTransform(): $ListenerTransform;
        get loadedMelody(): boolean;
        get instanceToChannel(): $Map<$SoundInstance, $ChannelAccess$ChannelHandle>;
        get loaded(): boolean;
    }
    export class $SoundBufferLibrary {
        preload(arg0: $Collection_<$Sound>): $CompletableFuture<never>;
        getCompleteBuffer(arg0: $ResourceLocation_): $CompletableFuture<$SoundBuffer>;
        getStream(arg0: $ResourceLocation_, arg1: boolean): $CompletableFuture<$AudioStream>;
        clear(): void;
        constructor(arg0: $ResourceProvider_);
    }
    export class $ChunkedSampleByteBuf implements $FloatConsumer {
        size(): number;
        get(): $ByteBuffer;
        accept(arg0: number): void;
        andThen(arg0: $FloatConsumer_): $FloatConsumer;
        /**
         * @deprecated
         */
        andThen(arg0: $Consumer_<number>): $Consumer<number>;
        /**
         * @deprecated
         */
        accept(arg0: number): void;
        /**
         * @deprecated
         */
        accept(arg0: number): void;
        constructor(arg0: number);
    }
    export class $Weighted<T> {
    }
    export interface $Weighted<T> {
        getSound(arg0: $RandomSource): T;
        preloadIfRequired(arg0: $SoundEngine): void;
        getWeight(): number;
        get weight(): number;
    }
    export class $JOrbisAudioStream implements $FloatSampleSource {
        getFormat(): $AudioFormat;
        readChunk(arg0: $FloatConsumer_): boolean;
        close(): void;
        readAll(): $ByteBuffer;
        read(arg0: number): $ByteBuffer;
        constructor(arg0: $InputStream);
        get format(): $AudioFormat;
    }
    export class $SoundManager$Preparations {
    }
    export class $MusicManager implements $IMixinMusicManager, $MusicManagerAccessor {
        isPlayingMusic(arg0: $Music): boolean;
        tick(): void;
        stopPlaying(): void;
        stopPlaying(arg0: $Music): void;
        startPlaying(arg0: $Music): void;
        wrapOperation$bom000$cumulus_menus$injected(arg0: $Minecraft, arg1: $Operation_<any>): $Music;
        getCurrentMusic_FancyMenu(): $SoundInstance;
        getNextSongDelay(): number;
        setNextSongDelay(arg0: number): void;
        getCurrentMusic(): $SoundInstance;
        constructor(arg0: $Minecraft);
        get currentMusic_FancyMenu(): $SoundInstance;
        get currentMusic(): $SoundInstance;
    }
    export class $FiniteAudioStream {
    }
    export interface $FiniteAudioStream extends $AudioStream {
        readAll(): $ByteBuffer;
    }
    export class $FloatSampleSource {
        static EXPECTED_MAX_FRAME_SIZE: number;
    }
    export interface $FloatSampleSource extends $FiniteAudioStream {
        readChunk(arg0: $FloatConsumer_): boolean;
        readAll(): $ByteBuffer;
        read(arg0: number): $ByteBuffer;
    }
    export class $ChannelAccess {
        scheduleTick(): void;
        executeOnChannels(arg0: $Consumer_<$Stream<$Channel>>): void;
        createHandle(arg0: $Library$Pool_): $CompletableFuture<$ChannelAccess$ChannelHandle>;
        clear(): void;
        constructor(arg0: $Library, arg1: $Executor_);
    }
    export class $WeighedSoundEvents implements $Weighted<$Sound> {
        getSound(arg0: $RandomSource): $Sound;
        getSubtitle(): $Component;
        preloadIfRequired(arg0: $SoundEngine): void;
        addSound(arg0: $Weighted<$Sound>): void;
        getWeight(): number;
        constructor(arg0: $ResourceLocation_, arg1: string);
        get subtitle(): $Component;
        get weight(): number;
    }
}
