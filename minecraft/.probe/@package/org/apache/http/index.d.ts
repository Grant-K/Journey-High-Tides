import { $OutputStream, $InputStream } from "@package/java/io";
export * as entity from "@package/org/apache/http/entity";

declare module "@package/org/apache/http" {
    export class $HttpEntity {
    }
    export interface $HttpEntity {
        isChunked(): boolean;
        isRepeatable(): boolean;
        isStreaming(): boolean;
        /**
         * @deprecated
         */
        consumeContent(): void;
        getContentType(): $Header;
        getContentEncoding(): $Header;
        getContent(): $InputStream;
        getContentLength(): number;
        writeTo(arg0: $OutputStream): void;
        get chunked(): boolean;
        get repeatable(): boolean;
        get streaming(): boolean;
        get contentType(): $Header;
        get contentEncoding(): $Header;
        get content(): $InputStream;
        get contentLength(): number;
    }
    export class $HeaderElement {
    }
    export interface $HeaderElement {
        getParameterByName(arg0: string): $NameValuePair;
        getParameters(): $NameValuePair[];
        getParameter(arg0: number): $NameValuePair;
        getName(): string;
        getValue(): string;
        getParameterCount(): number;
        get parameters(): $NameValuePair[];
        get name(): string;
        get value(): string;
        get parameterCount(): number;
    }
    export class $Header {
    }
    export interface $Header extends $NameValuePair {
        getElements(): $HeaderElement[];
        get elements(): $HeaderElement[];
    }
    export class $NameValuePair {
    }
    export interface $NameValuePair {
        getName(): string;
        getValue(): string;
        get name(): string;
        get value(): string;
    }
}
