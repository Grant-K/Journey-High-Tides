import { $HTTPResponse, $HTTPPayload } from "@package/dev/latvian/apps/tinyserver/http/response";
import { $Instant } from "@package/java/time";
import { $OptionalString, $HTTPServer, $OptionalString_, $CompiledPath, $CompiledPath_, $HTTPConnection } from "@package/dev/latvian/apps/tinyserver";
import { $List, $Map_, $Map, $Set, $List_ } from "@package/java/util";
import { $Throwable, $Enum, $Record } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";
export * as file from "@package/dev/latvian/apps/tinyserver/http/file";
export * as response from "@package/dev/latvian/apps/tinyserver/http/response";

declare module "@package/dev/latvian/apps/tinyserver/http" {
    export class $HTTPMethod extends $Enum<$HTTPMethod> {
        body(): boolean;
        static fromString(method: string): $HTTPMethod;
        static values(): $HTTPMethod[];
        static valueOf(name: string): $HTTPMethod;
        static TRACE: $HTTPMethod;
        static HEAD: $HTTPMethod;
        static DELETE: $HTTPMethod;
        static POST: $HTTPMethod;
        static GET: $HTTPMethod;
        static CONNECT: $HTTPMethod;
        static OPTIONS: $HTTPMethod;
        static PUT: $HTTPMethod;
        static PATCH: $HTTPMethod;
    }
    /**
     * Values that may be interpreted as {@link $HTTPMethod}.
     */
    export type $HTTPMethod_ = "head" | "get" | "post" | "put" | "patch" | "delete" | "options" | "trace" | "connect";
    export class $HTTPPathHandler<REQ extends $HTTPRequest> extends $Record {
        path(): $CompiledPath;
        method(): $HTTPMethod;
        handler(): $HTTPHandler<REQ>;
        static DEFAULT: $HTTPPathHandler<never>;
        constructor(method: $HTTPMethod_, path: $CompiledPath_, handler: $HTTPHandler_<REQ>);
    }
    /**
     * Values that may be interpreted as {@link $HTTPPathHandler}.
     */
    export type $HTTPPathHandler_<REQ> = { method?: $HTTPMethod_, path?: $CompiledPath_, handler?: $HTTPHandler_<$HTTPRequest>,  } | [method?: $HTTPMethod_, path?: $CompiledPath_, handler?: $HTTPHandler_<$HTTPRequest>, ];
    export class $Body {
        text(): string;
        contentType(): string;
        getPostData(): $Map<string, $OptionalString>;
        property(key: string): $OptionalString;
        byteBuffer(): $ByteBuffer;
        name(): string;
        fileName(): string;
        bytes(): number[];
        constructor();
        get postData(): $Map<string, $OptionalString>;
    }
    export class $HTTPRequest {
        variables(): $Map<string, $OptionalString>;
        afterInit(): void;
        preInit(session: $HTTPConnection<never>, startTime: $Instant, method: $HTTPMethod_): void;
        ip(): string;
        country(): string;
        variable(name: string): $OptionalString;
        cookie(key: string): $OptionalString;
        cookies(): $Map<string, $OptionalString>;
        fullPath(): string;
        handleResponse(payload: $HTTPPayload, response: $HTTPResponse, error: $Throwable): $HTTPResponse;
        createPreResponse(handler: $HTTPHandler_<never>): $HTTPResponse;
        afterResponse(payload: $HTTPPayload, response: $HTTPResponse, handler: $HTTPHandler_<never>, error: $Throwable): void;
        queryString(): string;
        mainBody(): $Body;
        formData(): $Map<string, $OptionalString>;
        formData(key: string): $OptionalString;
        acceptedEncodings(): $Set<string>;
        bodyBuffer(): $ByteBuffer;
        bodyList(): $List<$Body>;
        gitHubSignature(): string;
        gitHubEvent(): string;
        query(): $Map<string, $OptionalString>;
        query(key: string): $OptionalString;
        path(): string;
        header(name: string): $OptionalString;
        server(): $HTTPServer<never>;
        connection(): $HTTPConnection<never>;
        userAgent(): string;
        pathParts(): string[];
        ipv6(): string;
        headers(): $List<$Header>;
        method(): $HTTPMethod;
        init(path: string, pathParts: string[], compiledPath: $CompiledPath_, headers: $List_<$Header_>, queryString: string, query: $Map_<string, $OptionalString_>): void;
        startTime(): $Instant;
        constructor();
    }
    export class $Header extends $Record {
        is(name: string): boolean;
        value(): $OptionalString;
        key(): string;
        constructor(key: string, value: string);
        constructor(key: string, value: $OptionalString_);
    }
    /**
     * Values that may be interpreted as {@link $Header}.
     */
    export type $Header_ = { value?: $OptionalString_, key?: string,  } | [value?: $OptionalString_, key?: string, ];
    export class $HTTPHandler<REQ extends $HTTPRequest> {
    }
    export interface $HTTPHandler<REQ extends $HTTPRequest> {
        isFileHandler(): boolean;
        handle(req: REQ): $HTTPResponse;
        get fileHandler(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $HTTPHandler}.
     */
    export type $HTTPHandler_<REQ> = ((req: REQ) => $HTTPResponse);
    export class $HTTPUpgrade<REQ extends $HTTPRequest> {
    }
    export interface $HTTPUpgrade<REQ extends $HTTPRequest> {
        protocol(): string;
        isClosed(): boolean;
        start(req: REQ): void;
        get closed(): boolean;
    }
}
