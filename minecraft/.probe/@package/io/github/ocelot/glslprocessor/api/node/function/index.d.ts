import { $GlslNewFieldNode, $GlslVariableDeclarationNode, $GlslStructDeclarationNode } from "@package/io/github/ocelot/glslprocessor/api/node/variable";
import { $Stream } from "@package/java/util/stream";
import { $GlslSpecifiedType, $GlslFunctionHeader, $GlslParameterDeclaration, $GlslTypeSpecifier, $GlslTypeSpecifier_ } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $GlslNode, $GlslRootNode, $GlslNodeList, $GlslNodeType } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $Collection_, $List } from "@package/java/util";
import { $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";

declare module "@package/io/github/ocelot/glslprocessor/api/node/function" {
    export class $GlslFunctionNode implements $GlslRootNode {
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getHeader(): $GlslFunctionHeader;
        setHeader(arg0: $GlslFunctionHeader): void;
        getParameters(): $List<$GlslParameterDeclaration>;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        getReturnType(): $GlslSpecifiedType;
        asFunction(): $GlslFunctionNode;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        isStruct(): boolean;
        asField(): $GlslNewFieldNode;
        isField(): boolean;
        isDeclaration(): boolean;
        isFunction(): boolean;
        toSourceString(): string;
        setBody(...arg0: $GlslNode[]): boolean;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        setName(arg0: string): $GlslRootNode;
        constructor(arg0: $GlslFunctionHeader, arg1: $Collection_<$GlslNode>);
        get nodeType(): $GlslNodeType;
        get parameters(): $List<$GlslParameterDeclaration>;
        get returnType(): $GlslSpecifiedType;
        get struct(): boolean;
        get field(): boolean;
        get declaration(): boolean;
        get function(): boolean;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslInvokeFunctionNode implements $GlslNode {
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getHeader(): $GlslNode;
        setHeader(arg0: $GlslNode): void;
        getParameters(): $List<$GlslNode>;
        stream(): $Stream<$GlslNode>;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: $GlslNode, arg1: $Collection_<$GlslNode>);
        get nodeType(): $GlslNodeType;
        get parameters(): $List<$GlslNode>;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslPrimitiveConstructorNode implements $GlslNode {
        setPrimitiveType(arg0: $GlslTypeSpecifier_): void;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getPrimitiveType(): $GlslTypeSpecifier;
        stream(): $Stream<$GlslNode>;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: $GlslTypeSpecifier_);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
}
