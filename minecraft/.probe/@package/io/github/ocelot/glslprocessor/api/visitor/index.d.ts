import { $GlslVariableDeclarationNode, $GlslStructDeclarationNode, $GlslGetFieldNode, $GlslNewFieldNode, $GlslGetArrayNode, $GlslVariableNode } from "@package/io/github/ocelot/glslprocessor/api/node/variable";
import { $GlslFunctionNode, $GlslPrimitiveConstructorNode, $GlslInvokeFunctionNode } from "@package/io/github/ocelot/glslprocessor/api/node/function";
import { $GlslVersionStatement } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $GlslConstantNode } from "@package/io/github/ocelot/glslprocessor/api/node/constant";
import { $GlslJumpNode_, $GlslCaseLabelNode, $GlslSwitchNode, $GlslIfNode, $GlslForLoopNode, $GlslWhileLoopNode, $GlslReturnNode } from "@package/io/github/ocelot/glslprocessor/api/node/branch";
import { $GlslNode, $GlslTree } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $Map_ } from "@package/java/util";
import { $GlslUnaryNode, $GlslAssignmentNode, $GlslPrecisionNode, $GlslCompareNode, $GlslBitwiseNode, $GlslConditionalNode, $GlslOperationNode } from "@package/io/github/ocelot/glslprocessor/api/node/expression";

declare module "@package/io/github/ocelot/glslprocessor/api/visitor" {
    export class $GlslNodeVisitor {
        visitConstant(arg0: $GlslConstantNode): void;
        visitOperation(arg0: $GlslOperationNode): void;
        visitForLoopEnd(arg0: $GlslForLoopNode): void;
        visitWhileLoopEnd(arg0: $GlslWhileLoopNode): void;
        visitJump(arg0: $GlslJumpNode_): void;
        visitReturn(arg0: $GlslReturnNode): void;
        visitIf(arg0: $GlslIfNode): $GlslIfVisitor;
        visitBitwise(arg0: $GlslBitwiseNode): $GlslBitwiseVisitor;
        visitAssign(arg0: $GlslAssignmentNode): void;
        visitCompare(arg0: $GlslCompareNode): void;
        visitCondition(arg0: $GlslConditionalNode): void;
        visitPrecision(arg0: $GlslPrecisionNode): void;
        visitUnary(arg0: $GlslUnaryNode): void;
        visitFunctionInvocation(arg0: $GlslInvokeFunctionNode): $GlslInvokeVisitor;
        visitPrimitiveConstructor(arg0: $GlslPrimitiveConstructorNode): void;
        visitVariableDeclaration(arg0: $GlslVariableDeclarationNode): void;
        visitGetArray(arg0: $GlslGetArrayNode): void;
        visitGetField(arg0: $GlslGetFieldNode): void;
        visitNewField(arg0: $GlslNewFieldNode): void;
        visitStructDeclaration(arg0: $GlslStructDeclarationNode): void;
        visitVariable(arg0: $GlslVariableNode): void;
        visitForLoop(arg0: $GlslForLoopNode): $GlslNodeVisitor;
        visitWhileLoop(arg0: $GlslWhileLoopNode): $GlslNodeVisitor;
        visitSwitch(arg0: $GlslSwitchNode): $GlslSwitchVisitor;
        constructor();
        constructor(arg0: $GlslNodeVisitor);
    }
    export class $GlslTreeVisitor {
        visitFunctionEnd(arg0: $GlslFunctionNode): void;
        visitDeclaration(arg0: $GlslVariableDeclarationNode): void;
        visitMarkers(arg0: $Map_<string, $GlslNode>): void;
        visitVersion(arg0: $GlslVersionStatement): void;
        visitDirective(arg0: string): void;
        visitMacro(arg0: string, arg1: string): void;
        visitTreeEnd(arg0: $GlslTree): void;
        visitNewField(arg0: $GlslNewFieldNode): void;
        visitStructDeclaration(arg0: $GlslStructDeclarationNode): void;
        visitFunction(arg0: $GlslFunctionNode): $GlslNodeVisitor;
        constructor(arg0: $GlslTreeVisitor);
        constructor();
    }
    export class $GlslSwitchVisitor {
        visitLabel(arg0: $GlslCaseLabelNode): $GlslNodeVisitor;
        visitSwitchEnd(arg0: $GlslSwitchNode): void;
        constructor(arg0: $GlslSwitchVisitor);
        constructor();
    }
    export class $GlslBitwiseVisitor {
        visitBitwiseExpressionEnd(arg0: $GlslBitwiseNode): void;
        visitNode(arg0: number): $GlslNodeVisitor;
        constructor(arg0: $GlslBitwiseVisitor);
        constructor();
    }
    export class $GlslInvokeVisitor {
        visitParameter(arg0: number): $GlslNodeVisitor;
        visitHeader(): void;
        visitInvokeEnd(arg0: $GlslInvokeFunctionNode): void;
        constructor(arg0: $GlslInvokeVisitor);
        constructor();
    }
    export class $GlslIfVisitor {
        visitIf(): $GlslNodeVisitor;
        visitElse(): $GlslNodeVisitor;
        visitIfEnd(arg0: $GlslIfNode): void;
        constructor(arg0: $GlslIfVisitor);
        constructor();
    }
}
