import { $Stream } from "@package/java/util/stream";
import { $GlslSpecifiedType } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $GlslNode, $GlslNodeList, $GlslNodeType } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $Collection_, $List } from "@package/java/util";
import { $Enum } from "@package/java/lang";
import { $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";

declare module "@package/io/github/ocelot/glslprocessor/api/node/branch" {
    export class $GlslJumpNode extends $Enum<$GlslJumpNode> implements $GlslNode {
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        static values(): $GlslJumpNode[];
        static valueOf(arg0: string): $GlslJumpNode;
        stream(): $Stream<$GlslNode>;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        static CONTINUE: $GlslJumpNode;
        static DISCARD: $GlslJumpNode;
        static BREAK: $GlslJumpNode;
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    /**
     * Values that may be interpreted as {@link $GlslJumpNode}.
     */
    export type $GlslJumpNode_ = "continue" | "break" | "discard";
    export class $GlslSwitchNode implements $GlslNode {
        setBranches(arg0: $Collection_<$GlslNode>): $GlslSwitchNode;
        setBranches(...arg0: $GlslNode[]): $GlslSwitchNode;
        getBranches(): $List<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getCondition(): $GlslNode;
        setCondition(arg0: $GlslNode): $GlslSwitchNode;
        stream(): $Stream<$GlslNode>;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: $GlslNode, arg1: $Collection_<$GlslNode>);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslWhileLoopNode implements $GlslNode {
        setLoopType(arg0: $GlslWhileLoopNode$Type_): $GlslWhileLoopNode;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getCondition(): $GlslNode;
        setCondition(arg0: $GlslNode): $GlslWhileLoopNode;
        getLoopType(): $GlslWhileLoopNode$Type;
        getBody(): $GlslNodeList;
        stream(): $Stream<$GlslNode>;
        toSourceString(): string;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: $GlslNode, arg1: $Collection_<$GlslNode>, arg2: $GlslWhileLoopNode$Type_);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslCaseLabelNode implements $GlslNode {
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getCondition(): $GlslNode;
        setCondition(arg0: $GlslNode): void;
        isDefault(): boolean;
        stream(): $Stream<$GlslNode>;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: $GlslNode);
        get nodeType(): $GlslNodeType;
        get default(): boolean;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslIfNode implements $GlslNode {
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        setFirst(arg0: $Collection_<$GlslNode>): $GlslIfNode;
        setSecond(arg0: $Collection_<$GlslNode>): $GlslIfNode;
        getFirst(): $GlslNodeList;
        getSecond(): $GlslNodeList;
        setExpression(arg0: $GlslNode): void;
        getExpression(): $GlslNode;
        stream(): $Stream<$GlslNode>;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: $GlslNode, arg1: $Collection_<$GlslNode>, arg2: $Collection_<$GlslNode>);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslReturnNode implements $GlslNode {
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getValue(): $GlslNode;
        stream(): $Stream<$GlslNode>;
        setValue(arg0: $GlslNode): void;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: $GlslNode);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslWhileLoopNode$Type extends $Enum<$GlslWhileLoopNode$Type> {
        static values(): $GlslWhileLoopNode$Type[];
        static valueOf(arg0: string): $GlslWhileLoopNode$Type;
        static WHILE: $GlslWhileLoopNode$Type;
        static DO: $GlslWhileLoopNode$Type;
    }
    /**
     * Values that may be interpreted as {@link $GlslWhileLoopNode$Type}.
     */
    export type $GlslWhileLoopNode$Type_ = "while" | "do";
    export class $GlslForLoopNode implements $GlslNode {
        getIncrement(): $GlslNode;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getInit(): $GlslNode;
        getCondition(): $GlslNode;
        setIncrement(arg0: $GlslNode): $GlslForLoopNode;
        setCondition(arg0: $GlslNode): $GlslForLoopNode;
        getBody(): $GlslNodeList;
        setInit(arg0: $GlslNode): $GlslForLoopNode;
        stream(): $Stream<$GlslNode>;
        toSourceString(): string;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: $GlslNode, arg1: $GlslNode, arg2: $GlslNode, arg3: $Collection_<$GlslNode>);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
}
