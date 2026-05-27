import { $ChannelAccessor as $ChannelAccessor$1 } from "@package/dev/ryanhcode/sable/mixin/sublevel_sounds";
import { $AudioStream } from "@package/net/minecraft/client/sounds";
import { $SourceAccessor } from "@package/de/dafuqs/spectrum/mixin/client/accessors";
import { $AudioFormat } from "@package/javax/sound/sampled";
import { $ChannelAccessor } from "@package/com/sonicether/soundphysics/mixin";
import { $List, $OptionalInt } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Blaze3DAudioChannelAccessor } from "@package/rbasamoyai/createbigcannons/mixin/client";

declare module "@package/com/mojang/blaze3d/audio" {
    export class $Library$CountingChannelPool implements $Library$ChannelPool {
    }
    export class $ListenerTransform extends $Record {
        forward(): $Vec3;
        right(): $Vec3;
        up(): $Vec3;
        position(): $Vec3;
        static INITIAL: $ListenerTransform;
        constructor(arg0: $Vec3_, arg1: $Vec3_, arg2: $Vec3_);
    }
    /**
     * Values that may be interpreted as {@link $ListenerTransform}.
     */
    export type $ListenerTransform_ = { up?: $Vec3_, forward?: $Vec3_, position?: $Vec3_,  } | [up?: $Vec3_, forward?: $Vec3_, position?: $Vec3_, ];
    export class $Library {
        getAvailableSoundDevices(): $List<string>;
        isCurrentDeviceDisconnected(): boolean;
        static getDefaultDeviceName(): string;
        acquireChannel(arg0: $Library$Pool_): $Channel;
        releaseChannel(arg0: $Channel): void;
        hasDefaultDeviceChanged(): boolean;
        getCurrentDeviceName(): string;
        getListener(): $Listener;
        getDebugString(): string;
        cleanup(): void;
        init(arg0: string, arg1: boolean): void;
        constructor();
        get availableSoundDevices(): $List<string>;
        get currentDeviceDisconnected(): boolean;
        static get defaultDeviceName(): string;
        get currentDeviceName(): string;
        get listener(): $Listener;
        get debugString(): string;
    }
    export class $Library$Pool extends $Enum<$Library$Pool> {
        static values(): $Library$Pool[];
        static valueOf(arg0: string): $Library$Pool;
        static STREAMING: $Library$Pool;
        static STATIC: $Library$Pool;
    }
    /**
     * Values that may be interpreted as {@link $Library$Pool}.
     */
    export type $Library$Pool_ = "static" | "streaming";
    export class $Library$ChannelPool {
    }
    export interface $Library$ChannelPool {
    }
    export class $Listener {
        setGain(arg0: number): void;
        getGain(): number;
        getTransform(): $ListenerTransform;
        setTransform(arg0: $ListenerTransform_): void;
        reset(): void;
        constructor();
    }
    export class $OpenAlUtil {
        constructor();
    }
    export class $Channel implements $Blaze3DAudioChannelAccessor, $ChannelAccessor$1, $SourceAccessor, $ChannelAccessor {
        play(): void;
        pause(): void;
        attachBufferStream(arg0: $AudioStream): void;
        attachStaticBuffer(arg0: $SoundBuffer): void;
        linearAttenuation(arg0: number): void;
        disableAttenuation(): void;
        setSelfPosition(arg0: $Vec3_): void;
        updateStream(): void;
        setLooping(arg0: boolean): void;
        setVolume(arg0: number): void;
        setPitch(arg0: number): void;
        unpause(): void;
        playing(): boolean;
        setRelative(arg0: boolean): void;
        stopped(): boolean;
        stop(): void;
        destroy(): void;
        getSource(): number;
        static BUFFER_DURATION_SECONDS: number;
        set selfPosition(value: $Vec3_);
        set looping(value: boolean);
        set volume(value: number);
        set pitch(value: number);
        set relative(value: boolean);
        get source(): number;
    }
    export class $SoundBuffer {
        discardAlBuffer(): void;
        releaseAlBuffer(): $OptionalInt;
        constructor(arg0: $ByteBuffer, arg1: $AudioFormat);
    }
}
