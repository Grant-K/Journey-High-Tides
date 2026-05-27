import { $EmojiContainer } from "@package/org/figuramc/figura/font";
import { $Particle, $SpriteSet } from "@package/net/minecraft/client/particle";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $Library$Pool_ } from "@package/com/mojang/blaze3d/audio";
import { $Avatar } from "@package/org/figuramc/figura/avatar";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $Camera } from "@package/net/minecraft/client";
import { $UUID_, $UUID } from "@package/java/util";
import { $SoundSource_ } from "@package/net/minecraft/sounds";
import { $SoundBufferLibrary, $ChannelAccess$ChannelHandle } from "@package/net/minecraft/client/sounds";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LuaSound } from "@package/org/figuramc/figura/lua/api/sound";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/org/figuramc/figura/ducks" {
    export class $GameRendererAccessor {
    }
    export interface $GameRendererAccessor {
        figura$getFov(arg0: $Camera, arg1: number, arg2: boolean): number;
    }
    /**
     * Values that may be interpreted as {@link $GameRendererAccessor}.
     */
    export type $GameRendererAccessor_ = ((arg0: $Camera, arg1: number, arg2: boolean) => number);
    export class $ChannelHandleAccessor {
    }
    export interface $ChannelHandleAccessor {
        setOwner(arg0: $UUID_): void;
        getOwner(): $UUID;
        getName(): string;
        setName(arg0: string): void;
    }
    export class $BitmapProviderGlyphAccessor {
    }
    export interface $BitmapProviderGlyphAccessor {
        figura$setAdvance(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $BitmapProviderGlyphAccessor}.
     */
    export type $BitmapProviderGlyphAccessor_ = ((arg0: number) => void);
    export class $EntityRendererAccessor {
    }
    export interface $EntityRendererAccessor {
        figura$isRenderingName(): boolean;
        figura$hasScore(): boolean;
    }
    export class $SoundEngineAccessor {
    }
    export interface $SoundEngineAccessor {
        figura$stopAllSounds(): void;
        figura$addSound(arg0: $LuaSound): void;
        figura$createHandle(arg0: $UUID_, arg1: string, arg2: $Library$Pool_): $ChannelAccess$ChannelHandle;
        figura$getVolume(arg0: $SoundSource_): number;
        figura$getSoundBuffers(): $SoundBufferLibrary;
        figura$isPlaying(arg0: $UUID_): boolean;
        figura$stopSound(arg0: $UUID_, arg1: string): void;
        figura$isEngineActive(): boolean;
    }
    export class $GuiMessageAccessor {
    }
    export interface $GuiMessageAccessor {
        figura$setColor(arg0: number): void;
        figura$getColor(): number;
    }
    export class $PlayerModelAccessor {
    }
    export interface $PlayerModelAccessor {
        figura$getFakeCloak(): $ModelPart;
        figura$getCloak(): $ModelPart;
    }
    export class $GeckolibGeoArmorAccessor {
    }
    export interface $GeckolibGeoArmorAccessor {
        figura$getAvatar(): $Avatar;
        figura$setEntityRenderTranslations(arg0: $Matrix4f): void;
        figura$getScaleWidth(): number;
        figura$getScaleHeight(): number;
        figura$setModelRenderTranslations(arg0: $Matrix4f): void;
    }
    export class $SingleQuadParticleAccessor {
    }
    export interface $SingleQuadParticleAccessor {
        figura$fixQuadSize(): void;
    }
    /**
     * Values that may be interpreted as {@link $SingleQuadParticleAccessor}.
     */
    export type $SingleQuadParticleAccessor_ = (() => void);
    export class $BakedGlyphAccessor {
    }
    export interface $BakedGlyphAccessor {
        figura$setupEmoji(arg0: $EmojiContainer, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $BakedGlyphAccessor}.
     */
    export type $BakedGlyphAccessor_ = ((arg0: $EmojiContainer, arg1: number) => void);
    export class $SuggestionsListAccessor {
    }
    export interface $SuggestionsListAccessor {
        figura$setFiguraList(arg0: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $SuggestionsListAccessor}.
     */
    export type $SuggestionsListAccessor_ = ((arg0: boolean) => void);
    export class $ParticleEngineAccessor {
    }
    export interface $ParticleEngineAccessor {
        figura$clearParticles(arg0: $UUID_): void;
        figura$makeParticle<T extends $ParticleOptions>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $Particle;
        figura$spawnParticle(arg0: $Particle, arg1: $UUID_): void;
        figura$getParticleSprite(arg0: $ResourceLocation_): $SpriteSet;
    }
    export class $SubtitleOverlayAccessor {
    }
    export interface $SubtitleOverlayAccessor {
        figura$PlaySound(arg0: $LuaSound, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $SubtitleOverlayAccessor}.
     */
    export type $SubtitleOverlayAccessor_ = ((arg0: $LuaSound, arg1: number) => void);
}
