import { $GlslFunctionNode } from "@package/io/github/ocelot/glslprocessor/api/node/function";
import { $Stream } from "@package/java/util/stream";
import { $GlslTypeQualifier, $GlslSpecifiedType, $GlslStructSpecifier, $GlslType_ } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $GlslNode, $GlslRootNode, $GlslNodeList, $GlslNodeType } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $Collection_, $List } from "@package/java/util";
import { $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";

declare module "@package/io/github/ocelot/glslprocessor/api/node/variable" {
    export class $GlslGetArrayNode implements $GlslNode {
        setIndex(arg0: $GlslNode): $GlslGetArrayNode;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getIndex(): $GlslNode;
        setExpression(arg0: $GlslNode): $GlslGetArrayNode;
        getExpression(): $GlslNode;
        stream(): $Stream<$GlslNode>;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: $GlslNode, arg1: $GlslNode);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslVariableNode implements $GlslNode {
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslVariableNode;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: string);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslStructDeclarationNode implements $GlslRootNode {
        getStructSpecifier(): $GlslStructSpecifier;
        setSpecifiedType(arg0: $GlslSpecifiedType): $GlslStructDeclarationNode;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getSpecifiedType(): $GlslSpecifiedType;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslStructDeclarationNode;
        asFunction(): $GlslFunctionNode;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        isStruct(): boolean;
        asField(): $GlslNewFieldNode;
        isField(): boolean;
        isDeclaration(): boolean;
        isFunction(): boolean;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: $GlslSpecifiedType);
        get structSpecifier(): $GlslStructSpecifier;
        get nodeType(): $GlslNodeType;
        get struct(): boolean;
        get field(): boolean;
        get declaration(): boolean;
        get function(): boolean;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslGetFieldNode implements $GlslNode {
        setFieldSelection(arg0: string): $GlslGetFieldNode;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getFieldSelection(): string;
        setExpression(arg0: $GlslNode): $GlslGetFieldNode;
        getExpression(): $GlslNode;
        stream(): $Stream<$GlslNode>;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: $GlslNode, arg1: string);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslNewFieldNode implements $GlslRootNode {
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        setType(arg0: $GlslType_): $GlslNewFieldNode;
        getInitializer(): $GlslNode;
        setInitializer(arg0: $GlslNode): $GlslNewFieldNode;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslNewFieldNode;
        getType(): $GlslSpecifiedType;
        asFunction(): $GlslFunctionNode;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        isStruct(): boolean;
        asField(): $GlslNewFieldNode;
        isField(): boolean;
        isDeclaration(): boolean;
        isFunction(): boolean;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toList(): $List<$GlslNode>;
        constructor(arg0: $GlslType_, arg1: string, arg2: $GlslNode);
        get nodeType(): $GlslNodeType;
        get struct(): boolean;
        get field(): boolean;
        get declaration(): boolean;
        get function(): boolean;
    }
    export class $GlslVariableDeclarationNode implements $GlslRootNode {
        getNames(): $List<string>;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getTypeQualifiers(): $List<$GlslTypeQualifier>;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslRootNode;
        asFunction(): $GlslFunctionNode;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        isStruct(): boolean;
        asField(): $GlslNewFieldNode;
        isField(): boolean;
        isDeclaration(): boolean;
        isFunction(): boolean;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: $Collection_<$GlslTypeQualifier>, arg1: $Collection_<string>);
        get names(): $List<string>;
        get nodeType(): $GlslNodeType;
        get typeQualifiers(): $List<$GlslTypeQualifier>;
        get struct(): boolean;
        get field(): boolean;
        get declaration(): boolean;
        get function(): boolean;
        get type(): $GlslSpecifiedType;
    }
}
