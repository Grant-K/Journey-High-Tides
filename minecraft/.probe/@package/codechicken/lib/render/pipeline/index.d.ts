import { $CCRenderState } from "@package/codechicken/lib/render";

declare module "@package/codechicken/lib/render/pipeline" {
    export class $IVertexOperation {
        static registerOperation(): number;
        static operationCount(): number;
    }
    export interface $IVertexOperation {
        operationID(): number;
        operate(arg0: $CCRenderState): void;
        load(arg0: $CCRenderState): boolean;
    }
}
