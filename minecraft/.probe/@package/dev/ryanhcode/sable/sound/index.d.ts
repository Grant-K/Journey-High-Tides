import { $SoundSource } from "@package/net/minecraft/sounds";
import { $WeighedSoundEvents, $AudioStream, $SoundBufferLibrary, $SoundManager } from "@package/net/minecraft/client/sounds";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Channel } from "@package/com/mojang/blaze3d/audio";
import { $SoundInstance$Attenuation, $Sound, $TickableSoundInstance, $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";

declare module "@package/dev/ryanhcode/sable/sound" {
    export class $SoundInstanceDelegated {
    }
    export interface $SoundInstanceDelegated {
        setDelegate(arg0: $MovingSoundInstanceDelegate): void;
        getDelegate(): $MovingSoundInstanceDelegate;
    }
    export class $MovingSoundInstanceDelegate implements $SoundInstance, $TickableSoundInstance {
        getZ(): number;
        getVolume(): number;
        getPitch(): number;
        getSound(): $Sound;
        canStartSilent(): boolean;
        canPlaySound(): boolean;
        isLooping(): boolean;
        getAttenuation(): $SoundInstance$Attenuation;
        tickWithChannel(arg0: $Channel): void;
        getY(): number;
        getX(): number;
        getDelay(): number;
        getStream(arg0: $SoundBufferLibrary, arg1: $Sound, arg2: boolean): $CompletableFuture<any>;
        tick(): void;
        getSource(): $SoundSource;
        isRelative(): boolean;
        unload(arg0: $Channel): void;
        isStopped(): boolean;
        getLocation(): $ResourceLocation;
        resolve(arg0: $SoundManager): $WeighedSoundEvents;
        getAudioStream(arg0: $SoundBufferLibrary, arg1: $ResourceLocation_, arg2: boolean): $CompletableFuture<$AudioStream>;
        instance: $SoundInstance;
        constructor(arg0: $SoundInstance, arg1: $SubLevel);
        get z(): number;
        get volume(): number;
        get pitch(): number;
        get sound(): $Sound;
        get looping(): boolean;
        get attenuation(): $SoundInstance$Attenuation;
        get y(): number;
        get x(): number;
        get delay(): number;
        get source(): $SoundSource;
        get relative(): boolean;
        get stopped(): boolean;
        get location(): $ResourceLocation;
    }
}
