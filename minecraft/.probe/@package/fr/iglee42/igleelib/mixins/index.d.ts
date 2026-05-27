import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $ByteBufferBuilder } from "@package/com/mojang/blaze3d/vertex";
import { $SequencedMap } from "@package/java/util";

declare module "@package/fr/iglee42/igleelib/mixins" {
    export class $AccessorMultiBufferSource {
    }
    export interface $AccessorMultiBufferSource {
        getFixedBuffers(): $SequencedMap<$RenderType, $ByteBufferBuilder>;
        getFallbackBuffer(): $ByteBufferBuilder;
        get fixedBuffers(): $SequencedMap<$RenderType, $ByteBufferBuilder>;
        get fallbackBuffer(): $ByteBufferBuilder;
    }
}
