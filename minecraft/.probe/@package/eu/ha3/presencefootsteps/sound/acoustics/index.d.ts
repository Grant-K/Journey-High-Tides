import { $JsonObject, $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $Reader } from "@package/java/io";
import { $BiFunction_, $BiConsumer_ } from "@package/java/util/function";
import { $SoundsKey_, $Association_ } from "@package/eu/ha3/presencefootsteps/world";
import { $Options, $State_ } from "@package/eu/ha3/presencefootsteps/sound";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Range, $Range_, $JsonObjectWriter_ } from "@package/eu/ha3/presencefootsteps/util";
import { $SoundPlayer } from "@package/eu/ha3/presencefootsteps/sound/player";
import { $Map_, $Map } from "@package/java/util";
import { $Record } from "@package/java/lang";

declare module "@package/eu/ha3/presencefootsteps/sound/acoustics" {
    export class $AcousticLibrary {
    }
    export interface $AcousticLibrary {
        playStep(arg0: $Association_, arg1: $State_, arg2: $Options): void;
        playAcoustic(arg0: $LivingEntity, arg1: $SoundsKey_, arg2: $State_, arg3: $Options): void;
        addAcoustic(arg0: string, arg1: $Acoustic): void;
        think(): void;
    }
    export class $Acoustic {
        static read(arg0: $AcousticsFile_, arg1: $JsonElement_): $Acoustic;
        static read(arg0: $AcousticsFile_, arg1: $JsonElement_, arg2: string): $Acoustic;
        static FACTORIES: $Map<string, $Acoustic$Serializer>;
    }
    export interface $Acoustic {
        playSound(arg0: $SoundPlayer, arg1: $LivingEntity, arg2: $State_, arg3: $Options): void;
        write(arg0: $AcousticsFile_, arg1: $JsonObjectWriter_): void;
    }
    export class $AcousticsFile extends $Record {
        defaultVolume(): $Range;
        defaultPitch(): $Range;
        soundRoot(): string;
        getSoundName(arg0: string): string;
        write(arg0: $JsonObjectWriter_, arg1: $Map_<string, $Acoustic>): void;
        static read(arg0: $Reader, arg1: $BiConsumer_<string, $Acoustic>, arg2: boolean): $AcousticsFile;
        constructor(defaultVolume: $Range_, defaultPitch: $Range_, soundRoot: string);
    }
    /**
     * Values that may be interpreted as {@link $AcousticsFile}.
     */
    export type $AcousticsFile_ = { defaultVolume?: $Range_, soundRoot?: string, defaultPitch?: $Range_,  } | [defaultVolume?: $Range_, soundRoot?: string, defaultPitch?: $Range_, ];
    export class $Acoustic$Serializer {
        static ofJsObject(arg0: $BiFunction_<$JsonObject, $AcousticsFile, $Acoustic>): $Acoustic$Serializer;
    }
    export interface $Acoustic$Serializer {
        create(arg0: $JsonElement_, arg1: $AcousticsFile_): $Acoustic;
    }
    /**
     * Values that may be interpreted as {@link $Acoustic$Serializer}.
     */
    export type $Acoustic$Serializer_ = ((arg0: $JsonElement, arg1: $AcousticsFile) => $Acoustic);
}
