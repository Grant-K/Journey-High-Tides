import { $ChannelAccess$ChannelHandle } from "@package/net/minecraft/client/sounds";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $SoundBuffer } from "@package/com/mojang/blaze3d/audio";
import { $Avatar } from "@package/org/figuramc/figura/avatar";
import { $FiguraVec3 } from "@package/org/figuramc/figura/math/vector";
import { $Sound } from "@package/net/minecraft/client/resources/sounds";
import { $Object } from "@package/java/lang";

declare module "@package/org/figuramc/figura/lua/api/sound" {
    export class $LuaSound {
        play(): $LuaSound;
        isPlaying(): boolean;
        pause(): $LuaSound;
        setPos(x: $Object, y: number, z: number): $LuaSound;
        getVolume(): number;
        getPitch(): number;
        volume(volume: number): $LuaSound;
        pitch(pitch: number): $LuaSound;
        getPos(): $FiguraVec3;
        isLooping(): boolean;
        getAttenuation(): number;
        subtitle(subtitle: string): $LuaSound;
        setSubtitle(subtitle: string): $LuaSound;
        getSubtitle(): string;
        calculateVolume(): number;
        getSubtitleText(): $Component;
        setAttenuation(attenuation: number): $LuaSound;
        attenuation(attenuation: number): $LuaSound;
        setLoop(loop: boolean): $LuaSound;
        setVolume(volume: number): $LuaSound;
        setPitch(pitch: number): $LuaSound;
        loop(loop: boolean): $LuaSound;
        pos(x: $Object, y: number, z: number): $LuaSound;
        getHandle(): $ChannelAccess$ChannelHandle;
        stop(): $LuaSound;
        getId(): string;
        constructor(sound: $Sound, id: string, subtitle: $Component_, owner: $Avatar);
        constructor(buffer: $SoundBuffer, id: string, owner: $Avatar);
        get playing(): boolean;
        get looping(): boolean;
        get subtitleText(): $Component;
        get handle(): $ChannelAccess$ChannelHandle;
        get id(): string;
    }
}
