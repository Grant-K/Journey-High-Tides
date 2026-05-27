import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/foundry/veil/api/flare/data/model" {
    export class $FlareBakedQuad {
        putBakedQuadInto(arg0: $VertexConsumer, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: number): void;
        putBakedQuadInto(arg0: $VertexConsumer): void;
        putBakedQuadInto(arg0: $VertexConsumer, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        constructor(arg0: number[]);
    }
}
