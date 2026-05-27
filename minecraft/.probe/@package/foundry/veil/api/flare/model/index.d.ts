import { $FlareBakedQuad } from "@package/foundry/veil/api/flare/data/model";
import { $VertexArray } from "@package/foundry/veil/api/client/render/vertex";
import { $Collection } from "@package/java/util";
import { $NativeResource } from "@package/org/lwjgl/system";

declare module "@package/foundry/veil/api/flare/model" {
    export class $BakedShell {
    }
    export interface $BakedShell extends $NativeResource {
        getQuads(): $Collection<$FlareBakedQuad>;
        getVertexArray(): $VertexArray;
        get quads(): $Collection<$FlareBakedQuad>;
        get vertexArray(): $VertexArray;
    }
}
