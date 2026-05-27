import { $JsonObject_, $JsonObject, $JsonArray, $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $OutputStream } from "@package/java/io";
import { $FileResponseHandler_ } from "@package/dev/latvian/apps/tinyserver/http/file";
import { $DynamicOps } from "@package/com/mojang/serialization";
import { $Tag_ } from "@package/net/minecraft/nbt";
import { $WSSession, $WSSessionFactory_, $WSHandler } from "@package/dev/latvian/apps/tinyserver/ws";
import { $List, $Map_, $Set_, $List_, $Map, $Set } from "@package/java/util";
import { $ResponseContent } from "@package/dev/latvian/apps/tinyserver/content";
import { $Supplier_, $Consumer_, $Supplier } from "@package/java/util/function";
import { $ServerRegistry, $HTTPConnection, $HTTPServer } from "@package/dev/latvian/apps/tinyserver";
import { $Lazy, $BaseProperties, $RegistryAccessContainer } from "@package/dev/latvian/mods/kubejs/util";
import { $Path_ } from "@package/java/nio/file";
import { $BlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $HttpRequest$BodyPublisher } from "@package/java/net/http";
import { $HTTPHandler_, $HTTPHandler, $HTTPRequest, $HTTPMethod_ } from "@package/dev/latvian/apps/tinyserver/http";
import { $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $Record, $Runnable_, $Comparable } from "@package/java/lang";
export * as local from "@package/dev/latvian/mods/kubejs/web/local";

declare module "@package/dev/latvian/mods/kubejs/web" {
    export class $KJSWSSession extends $WSSession<$KJSHTTPRequest> {
        onEvent(type: string, payload: $JsonElement_): void;
        info: $SessionInfo;
        constructor();
    }
    export class $LocalWebServerAPIRegistry {
    }
    export interface $LocalWebServerAPIRegistry {
        register(id: $ResourceLocation_, version: number): void;
    }
    /**
     * Values that may be interpreted as {@link $LocalWebServerAPIRegistry}.
     */
    export type $LocalWebServerAPIRegistry_ = ((id: $ResourceLocation, version: number) => void);
    export class $JsonContent extends $Record implements $ResponseContent {
        static any(json: $Supplier_<$JsonElement>): $JsonContent;
        static object(json: $Consumer_<$JsonObject>): $JsonContent;
        json(): $Lazy<number[]>;
        type(): string;
        length(): number;
        static array(json: $Consumer_<$JsonArray>): $JsonContent;
        write(out: $OutputStream): void;
        bodyPublisher(): $HttpRequest$BodyPublisher;
        hasData(): boolean;
        transferTo(connection: $HTTPConnection<never>): void;
        toBytes(): number[];
        constructor(json: $Lazy<number[]>);
    }
    /**
     * Values that may be interpreted as {@link $JsonContent}.
     */
    export type $JsonContent_ = { json?: $Lazy<number[]>,  } | [json?: $Lazy<number[]>, ];
    export class $KJSHTTPServer$RequestFactory extends $Record implements $Supplier<$KJSHTTPRequest> {
    }
    /**
     * Values that may be interpreted as {@link $KJSHTTPServer$RequestFactory}.
     */
    export type $KJSHTTPServer$RequestFactory_ = { eventLoop?: $BlockableEventLoop<never>,  } | [eventLoop?: $BlockableEventLoop<never>, ];
    export class $LocalWebServerRegistry$AuthHandler extends $Record implements $HTTPHandler<$KJSHTTPRequest> {
        isFileHandler(): boolean;
        get fileHandler(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LocalWebServerRegistry$AuthHandler}.
     */
    export type $LocalWebServerRegistry$AuthHandler_ = { match?: string, handler?: $HTTPHandler_<$KJSHTTPRequest>,  } | [match?: string, handler?: $HTTPHandler_<$KJSHTTPRequest>, ];
    export class $KJSHTTPServer extends $HTTPServer<$KJSHTTPRequest> {
    }
    export class $LocalWebServerRegistry implements $ServerRegistry<$KJSHTTPRequest> {
        ws<WSS extends $WSSession<$KJSHTTPRequest>>(path: string, factory: $WSSessionFactory_<$KJSHTTPRequest, WSS>): $WSHandler<$KJSHTTPRequest, WSS>;
        http(method: $HTTPMethod_, path: string, handler: $HTTPHandler_<$KJSHTTPRequest>): void;
        redirect(path: string, redirect: string): void;
        ws<WSS extends $WSSession<REQ>>(path: string): $WSHandler<$KJSHTTPRequest, WSS>;
        post(path: string, handler: $HTTPHandler_<$KJSHTTPRequest>): void;
        singleFile(path: string, file: $Path_, responseHandler: $FileResponseHandler_): void;
        acceptPostString(path: string, handler: $Consumer_<string>): void;
        acceptPostTask(path: string, task: $Runnable_): void;
        dynamicFiles(path: string, directory: $Path_, responseHandler: $FileResponseHandler_, autoIndex: boolean): void;
        staticFiles(path: string, directory: $Path_, responseHandler: $FileResponseHandler_, autoIndex: boolean): void;
        patch(path: string, handler: $HTTPHandler_<$KJSHTTPRequest>): void;
        get(path: string, handler: $HTTPHandler_<$KJSHTTPRequest>): void;
        put(path: string, handler: $HTTPHandler_<$KJSHTTPRequest>): void;
        delete(path: string, handler: $HTTPHandler_<$KJSHTTPRequest>): void;
    }
    export class $KJSHTTPRequest extends $HTTPRequest {
        registries(): $RegistryAccessContainer;
        runInMainThread(task: $Runnable_): void;
        supplyInMainThread<T>(task: $Supplier_<T>): T;
        components(ops: $DynamicOps<$Tag_>): $DataComponentPatch;
        id(): $ResourceLocation;
        id(ns: string, path: string): $ResourceLocation;
        eventLoop: $BlockableEventLoop<never>;
        constructor(eventLoop: $BlockableEventLoop<never>);
    }
    export class $WebServerProperties extends $BaseProperties {
        static reload(): void;
        static get(): $WebServerProperties;
        port: number;
        auth: string;
        publicAddress: string;
        enabled: boolean;
    }
    export class $LocalWebServer$Endpoint extends $Record implements $Comparable<$LocalWebServer$Endpoint> {
        auth(): boolean;
        path(): string;
        method(): string;
        compareTo(o: $LocalWebServer$Endpoint_): number;
        constructor(method: string, path: string, auth: boolean);
    }
    /**
     * Values that may be interpreted as {@link $LocalWebServer$Endpoint}.
     */
    export type $LocalWebServer$Endpoint_ = { method?: string, auth?: boolean, path?: string,  } | [method?: string, auth?: boolean, path?: string, ];
    export class $RelativeURL extends $Record {
        fullString(): string;
        query(): $Map<string, string>;
        path(): string;
        constructor(path: string);
        constructor(path: string, query: $Map_<string, string>);
    }
    /**
     * Values that may be interpreted as {@link $RelativeURL}.
     */
    export type $RelativeURL_ = { path?: string, query?: $Map_<string, string>,  } | [path?: string, query?: $Map_<string, string>, ];
    export class $LocalWebServer extends $Record {
        explorerCode(): string;
        server(): $KJSHTTPServer;
        endpoints(): $List<$LocalWebServer$Endpoint>;
        url(): string;
        constructor(server: $KJSHTTPServer, url: string, endpoints: $List_<$LocalWebServer$Endpoint_>, explorerCode: string);
    }
    /**
     * Values that may be interpreted as {@link $LocalWebServer}.
     */
    export type $LocalWebServer_ = { server?: $KJSHTTPServer, explorerCode?: string, endpoints?: $List_<$LocalWebServer$Endpoint_>, url?: string,  } | [server?: $KJSHTTPServer, explorerCode?: string, endpoints?: $List_<$LocalWebServer$Endpoint_>, url?: string, ];
    export class $SessionInfo extends $Record {
        tags(): $Set<string>;
        static fromJson(info: $SessionInfo_, json: $JsonObject_): $SessionInfo;
        source(): string;
        static NONE: $SessionInfo;
        constructor(source: string, tags: $Set_<string>);
    }
    /**
     * Values that may be interpreted as {@link $SessionInfo}.
     */
    export type $SessionInfo_ = { tags?: $Set_<string>, source?: string,  } | [tags?: $Set_<string>, source?: string, ];
}
