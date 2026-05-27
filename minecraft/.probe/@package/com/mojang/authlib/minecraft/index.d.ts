import { $JsonObject_ } from "@package/com/google/gson";
import { $KeyPairResponse } from "@package/com/mojang/authlib/yggdrasil/response";
import { $Instant } from "@package/java/time";
import { $ProfileResult } from "@package/com/mojang/authlib/yggdrasil";
import { $Executor_ } from "@package/java/util/concurrent";
import { $InetAddress } from "@package/java/net";
import { $SignatureState_, $GameProfile, $SignatureState } from "@package/com/mojang/authlib";
import { $AbuseReportLimits } from "@package/com/mojang/authlib/minecraft/report";
import { $AbuseReportRequest_ } from "@package/com/mojang/authlib/yggdrasil/request";
import { $UUID, $Map_, $Map, $Set, $UUID_, $Set_ } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";
import { $Property_, $Property } from "@package/com/mojang/authlib/properties";
export * as report from "@package/com/mojang/authlib/minecraft/report";

declare module "@package/com/mojang/authlib/minecraft" {
    export class $TelemetryPropertyContainer {
        static forJsonObject(arg0: $JsonObject_): $TelemetryPropertyContainer;
    }
    export interface $TelemetryPropertyContainer {
        addNullProperty(arg0: string): void;
        addProperty(arg0: string, arg1: string): void;
        addProperty(arg0: string, arg1: boolean): void;
        addProperty(arg0: string, arg1: number): void;
        addProperty(arg0: string, arg1: number): void;
    }
    export class $TelemetryEvent {
        static EMPTY: $TelemetryEvent;
    }
    export interface $TelemetryEvent extends $TelemetryPropertyContainer {
        send(): void;
    }
    export class $MinecraftProfileTexture {
        getMetadata(arg0: string): string;
        getHash(): string;
        getUrl(): string;
        static PROFILE_TEXTURE_COUNT: number;
        constructor(arg0: string, arg1: $Map_<string, string>);
        get hash(): string;
        get url(): string;
    }
    export class $TelemetrySession {
        static DISABLED: $TelemetrySession;
    }
    export interface $TelemetrySession {
        createNewEvent(arg0: string): $TelemetryEvent;
        isEnabled(): boolean;
        get enabled(): boolean;
    }
    export class $UserApiService$UserProperties extends $Record {
        bannedScopes(): $Map<string, $BanDetails>;
        flags(): $Set<$UserApiService$UserFlag>;
        flag(arg0: $UserApiService$UserFlag_): boolean;
        constructor(flags: $Set_<$UserApiService$UserFlag_>, bannedScopes: $Map_<string, $BanDetails_>);
    }
    /**
     * Values that may be interpreted as {@link $UserApiService$UserProperties}.
     */
    export type $UserApiService$UserProperties_ = { bannedScopes?: $Map_<string, $BanDetails_>, flags?: $Set_<$UserApiService$UserFlag_>,  } | [bannedScopes?: $Map_<string, $BanDetails_>, flags?: $Set_<$UserApiService$UserFlag_>, ];
    export class $MinecraftSessionService {
    }
    export interface $MinecraftSessionService {
        fetchProfile(arg0: $UUID_, arg1: boolean): $ProfileResult;
        getTextures(arg0: $GameProfile): $MinecraftProfileTextures;
        getSecurePropertyValue(arg0: $Property_): string;
        getPackedTextures(arg0: $GameProfile): $Property;
        unpackTextures(arg0: $Property_): $MinecraftProfileTextures;
        joinServer(arg0: $UUID_, arg1: string, arg2: string): void;
        hasJoinedServer(arg0: string, arg1: string, arg2: $InetAddress): $ProfileResult;
    }
    export class $MinecraftProfileTextures extends $Record {
        skin(): $MinecraftProfileTexture;
        signatureState(): $SignatureState;
        elytra(): $MinecraftProfileTexture;
        cape(): $MinecraftProfileTexture;
        static EMPTY: $MinecraftProfileTextures;
        constructor(skin: $MinecraftProfileTexture, cape: $MinecraftProfileTexture, elytra: $MinecraftProfileTexture, signatureState: $SignatureState_);
    }
    /**
     * Values that may be interpreted as {@link $MinecraftProfileTextures}.
     */
    export type $MinecraftProfileTextures_ = { elytra?: $MinecraftProfileTexture, signatureState?: $SignatureState_, cape?: $MinecraftProfileTexture, skin?: $MinecraftProfileTexture,  } | [elytra?: $MinecraftProfileTexture, signatureState?: $SignatureState_, cape?: $MinecraftProfileTexture, skin?: $MinecraftProfileTexture, ];
    export class $UserApiService$UserFlag extends $Enum<$UserApiService$UserFlag> {
        static values(): $UserApiService$UserFlag[];
        static valueOf(arg0: string): $UserApiService$UserFlag;
        static CHAT_ALLOWED: $UserApiService$UserFlag;
        static TELEMETRY_ENABLED: $UserApiService$UserFlag;
        static OPTIONAL_TELEMETRY_AVAILABLE: $UserApiService$UserFlag;
        static REALMS_ALLOWED: $UserApiService$UserFlag;
        static PROFANITY_FILTER_ENABLED: $UserApiService$UserFlag;
        static SERVERS_ALLOWED: $UserApiService$UserFlag;
    }
    /**
     * Values that may be interpreted as {@link $UserApiService$UserFlag}.
     */
    export type $UserApiService$UserFlag_ = "servers_allowed" | "realms_allowed" | "chat_allowed" | "telemetry_enabled" | "profanity_filter_enabled" | "optional_telemetry_available";
    export class $UserApiService {
        static OFFLINE_PROPERTIES: $UserApiService$UserProperties;
        static OFFLINE: $UserApiService;
    }
    export interface $UserApiService {
        fetchProperties(): $UserApiService$UserProperties;
        refreshBlockList(): void;
        newTelemetrySession(arg0: $Executor_): $TelemetrySession;
        getKeyPair(): $KeyPairResponse;
        reportAbuse(arg0: $AbuseReportRequest_): void;
        canSendReports(): boolean;
        getAbuseReportLimits(): $AbuseReportLimits;
        isBlockedPlayer(arg0: $UUID_): boolean;
        get keyPair(): $KeyPairResponse;
        get abuseReportLimits(): $AbuseReportLimits;
    }
    export class $BanDetails extends $Record {
        reasonMessage(): string;
        expires(): $Instant;
        reason(): string;
        id(): $UUID;
        static MULTIPLAYER_SCOPE: string;
        constructor(id: $UUID_, expires: $Instant, reason: string, reasonMessage: string);
    }
    /**
     * Values that may be interpreted as {@link $BanDetails}.
     */
    export type $BanDetails_ = { reasonMessage?: string, reason?: string, expires?: $Instant, id?: $UUID_,  } | [reasonMessage?: string, reason?: string, expires?: $Instant, id?: $UUID_, ];
}
