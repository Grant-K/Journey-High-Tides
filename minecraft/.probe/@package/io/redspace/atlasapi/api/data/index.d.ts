import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $List_, $List } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $Transformation } from "@package/com/mojang/math";

declare module "@package/io/redspace/atlasapi/api/data" {
    export class $BakingPreparations extends $Record {
        static empty(): $BakingPreparations;
        layers(): $List<$ModelLayer>;
        constructor(layers: $List_<$ModelLayer_>);
    }
    /**
     * Values that may be interpreted as {@link $BakingPreparations}.
     */
    export type $BakingPreparations_ = { layers?: $List_<$ModelLayer_>,  } | [layers?: $List_<$ModelLayer_>, ];
    export class $ModelLayer extends $Record {
        transformation(): ($Transformation) | undefined;
        spriteLocation(): $ResourceLocation;
        drawOrder(): number;
        constructor(spriteLocation: $ResourceLocation_, drawOrder: number, transformation: ($Transformation) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ModelLayer}.
     */
    export type $ModelLayer_ = { drawOrder?: number, transformation?: ($Transformation) | undefined, spriteLocation?: $ResourceLocation_,  } | [drawOrder?: number, transformation?: ($Transformation) | undefined, spriteLocation?: $ResourceLocation_, ];
}
