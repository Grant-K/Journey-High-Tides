import { $File_ } from "@package/java/io";
import { $Logger } from "@package/org/slf4j";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $WorldGenerationInfo_ } from "@package/com/mojang/realmsclient/util";
import { $RealmsDownloadLatestWorldScreen$DownloadStatus, $UploadResult } from "@package/com/mojang/realmsclient/gui/screens";
import { $Minecraft, $User } from "@package/net/minecraft/client";
import { $LevelStorageSource } from "@package/net/minecraft/world/level/storage";
import { $List, $UUID_, $List_ } from "@package/java/util";
import { $RealmsHttpException } from "@package/com/mojang/realmsclient/exception";
import { $UploadInfo, $RealmsServer, $RealmsServerPlayerLists, $RealmsWorldOptions, $Subscription, $PendingInvitesList, $RealmsNews, $ServerActivityList, $RealmsServerAddress, $Ops, $RealmsServerList, $BackupList, $WorldTemplatePaginatedList, $RegionPingResult, $PingResult, $WorldDownload, $RealmsServer$WorldType_, $RealmsNotification } from "@package/com/mojang/realmsclient/dto";
import { $InputStreamEntity } from "@package/org/apache/http/entity";
import { $Consumer_ } from "@package/java/util/function";
import { $CountingOutputStream } from "@package/org/apache/commons/io/output";
import { $Proxy, $HttpURLConnection } from "@package/java/net";
import { $ActionListener } from "@package/java/awt/event";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/com/mojang/realmsclient/client" {
    export class $RealmsError$AuthenticationError extends $Record implements $RealmsError {
        errorCode(): number;
        logMessage(): string;
        errorMessage(): $Component;
        message(): string;
        static ERROR_CODE: number;
        constructor(arg0: string);
    }
    /**
     * Values that may be interpreted as {@link $RealmsError$AuthenticationError}.
     */
    export type $RealmsError$AuthenticationError_ = { message?: string,  } | [message?: string, ];
    export class $FileDownload {
        isFinished(): boolean;
        static findAvailableFolderName(arg0: string): string;
        contentLength(arg0: string): number;
        isExtracting(): boolean;
        isError(): boolean;
        download(arg0: $WorldDownload, arg1: string, arg2: $RealmsDownloadLatestWorldScreen$DownloadStatus, arg3: $LevelStorageSource): void;
        cancel(): void;
        constructor();
        get finished(): boolean;
        get extracting(): boolean;
        get error(): boolean;
    }
    export class $RealmsError$ErrorWithJsonPayload extends $Record implements $RealmsError {
        errorCode(): number;
        httpCode(): number;
        reason(): string;
        logMessage(): string;
        errorMessage(): $Component;
        code(): number;
        message(): string;
        constructor(arg0: number, arg1: number, arg2: string, arg3: string);
    }
    /**
     * Values that may be interpreted as {@link $RealmsError$ErrorWithJsonPayload}.
     */
    export type $RealmsError$ErrorWithJsonPayload_ = { reason?: string, code?: number, httpCode?: number, message?: string,  } | [reason?: string, code?: number, httpCode?: number, message?: string, ];
    export class $RealmsClient {
        createSnapshotRealm(arg0: number): $RealmsServer;
        getOwnRealm(arg0: number): $RealmsServer;
        initializeRealm(arg0: number, arg1: string, arg2: string): void;
        hasParentalConsent(): boolean;
        clientCompatible(): $RealmsClient$CompatibleVersionResponse;
        uninvite(arg0: number, arg1: $UUID_): void;
        uninviteMyselfFrom(arg0: number): void;
        backupsFor(arg0: number): $BackupList;
        switchSlot(arg0: number, arg1: number): boolean;
        restoreWorld(arg0: number, arg1: string): void;
        fetchWorldTemplates(arg0: number, arg1: number, arg2: $RealmsServer$WorldType_): $WorldTemplatePaginatedList;
        putIntoMinigameMode(arg0: number, arg1: string): boolean;
        resetWorldWithSeed(arg0: number, arg1: $WorldGenerationInfo_): boolean;
        resetWorldWithTemplate(arg0: number, arg1: string): boolean;
        subscriptionFor(arg0: number): $Subscription;
        pendingInvites(): $PendingInvitesList;
        acceptInvitation(arg0: string): void;
        requestDownloadInfo(arg0: number, arg1: number): $WorldDownload;
        requestUploadInfo(arg0: number, arg1: string): $UploadInfo;
        rejectInvitation(arg0: string): void;
        agreeToTos(): void;
        deleteRealm(arg0: number): void;
        getActivity(arg0: number): $ServerActivityList;
        getNotifications(): $List<$RealmsNotification>;
        deop(arg0: number, arg1: $UUID_): $Ops;
        invite(arg0: number, arg1: string): $RealmsServer;
        notificationsDismiss(arg0: $List_<$UUID_>): void;
        sendPingResults(arg0: $PingResult): void;
        notificationsSeen(arg0: $List_<$UUID_>): void;
        updateSlot(arg0: number, arg1: number, arg2: $RealmsWorldOptions): void;
        pendingInvitesCount(): number;
        trialAvailable(): boolean;
        getNews(): $RealmsNews;
        getLiveStats(): $RealmsServerPlayerLists;
        listRealms(): $RealmsServerList;
        listSnapshotEligibleRealms(): $List<$RealmsServer>;
        static create(): $RealmsClient;
        static create(arg0: $Minecraft): $RealmsClient;
        update(arg0: number, arg1: string, arg2: string): void;
        join(arg0: number): $RealmsServerAddress;
        op(arg0: number, arg1: $UUID_): $Ops;
        close(arg0: number): boolean;
        open(arg0: number): boolean;
        static ENVIRONMENT: $RealmsClient$Environment;
        constructor(arg0: string, arg1: string, arg2: $Minecraft);
        get notifications(): $List<$RealmsNotification>;
        get news(): $RealmsNews;
        get liveStats(): $RealmsServerPlayerLists;
    }
    export class $RealmsError$CustomError extends $Record implements $RealmsError {
        static noPayload(arg0: number): $RealmsError$CustomError;
        static unknownCompatibilityResponse(arg0: string): $RealmsError$CustomError;
        static connectivityError(arg0: $RealmsHttpException): $RealmsError$CustomError;
        errorCode(): number;
        httpCode(): number;
        static retry(arg0: number): $RealmsError$CustomError;
        logMessage(): string;
        errorMessage(): $Component;
        payload(): $Component;
        static SERVICE_BUSY: $RealmsError$CustomError;
        static RETRY_MESSAGE: $Component;
        constructor(arg0: number, arg1: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $RealmsError$CustomError}.
     */
    export type $RealmsError$CustomError_ = { httpCode?: number, payload?: $Component_,  } | [httpCode?: number, payload?: $Component_, ];
    export class $Request$Post extends $Request<$Request$Post> {
        doConnect(): $Request$Post;
        constructor(arg0: string, arg1: string, arg2: number, arg3: number);
    }
    export class $UploadStatus {
        bytesWritten: number;
        totalBytes: number;
        constructor();
    }
    export class $Request$Put extends $Request<$Request$Put> {
        doConnect(): $Request$Put;
        constructor(arg0: string, arg1: string, arg2: number, arg3: number);
    }
    export class $RealmsError {
        static parse(arg0: number, arg1: string): $RealmsError;
        static LOGGER: $Logger;
        static NO_MESSAGE: $Component;
    }
    export interface $RealmsError {
        errorCode(): number;
        logMessage(): string;
        errorMessage(): $Component;
    }
    export class $Ping$Region extends $Enum<$Ping$Region> {
        static values(): $Ping$Region[];
        static valueOf(arg0: string): $Ping$Region;
        static US_WEST_2: $Ping$Region;
        static US_WEST_1: $Ping$Region;
        static US_EAST_1: $Ping$Region;
        static SA_EAST_1: $Ping$Region;
        static AP_SOUTHEAST_1: $Ping$Region;
        static AP_SOUTHEAST_2: $Ping$Region;
        static AP_NORTHEAST_1: $Ping$Region;
        static EU_WEST_1: $Ping$Region;
    }
    /**
     * Values that may be interpreted as {@link $Ping$Region}.
     */
    export type $Ping$Region_ = "us_east_1" | "us_west_2" | "us_west_1" | "eu_west_1" | "ap_southeast_1" | "ap_southeast_2" | "ap_northeast_1" | "sa_east_1";
    export class $RealmsClient$Environment extends $Enum<$RealmsClient$Environment> {
        static byName(arg0: string): ($RealmsClient$Environment) | undefined;
        static values(): $RealmsClient$Environment[];
        static valueOf(arg0: string): $RealmsClient$Environment;
        baseUrl: string;
        protocol: string;
        static STAGE: $RealmsClient$Environment;
        static LOCAL: $RealmsClient$Environment;
        static PRODUCTION: $RealmsClient$Environment;
    }
    /**
     * Values that may be interpreted as {@link $RealmsClient$Environment}.
     */
    export type $RealmsClient$Environment_ = "production" | "stage" | "local";
    export class $FileDownload$ProgressListener implements $ActionListener {
    }
    export class $RealmsClient$CompatibleVersionResponse extends $Enum<$RealmsClient$CompatibleVersionResponse> {
        static values(): $RealmsClient$CompatibleVersionResponse[];
        static valueOf(arg0: string): $RealmsClient$CompatibleVersionResponse;
        static OTHER: $RealmsClient$CompatibleVersionResponse;
        static COMPATIBLE: $RealmsClient$CompatibleVersionResponse;
        static OUTDATED: $RealmsClient$CompatibleVersionResponse;
    }
    /**
     * Values that may be interpreted as {@link $RealmsClient$CompatibleVersionResponse}.
     */
    export type $RealmsClient$CompatibleVersionResponse_ = "compatible" | "outdated" | "other";
    export class $RealmsError$ErrorWithRawPayload extends $Record implements $RealmsError {
        errorCode(): number;
        httpCode(): number;
        logMessage(): string;
        errorMessage(): $Component;
        payload(): string;
        constructor(arg0: number, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $RealmsError$ErrorWithRawPayload}.
     */
    export type $RealmsError$ErrorWithRawPayload_ = { httpCode?: number, payload?: string,  } | [httpCode?: number, payload?: string, ];
    export class $Request$Delete extends $Request<$Request$Delete> {
        doConnect(): $Request$Delete;
        constructor(arg0: string, arg1: number, arg2: number);
    }
    export class $RealmsClientConfig {
        static getProxy(): $Proxy;
        static setProxy(arg0: $Proxy): void;
        constructor();
    }
    export class $Request$Get extends $Request<$Request$Get> {
        doConnect(): $Request$Get;
        constructor(arg0: string, arg1: number, arg2: number);
    }
    export class $FileDownload$DownloadCountingOutputStream extends $CountingOutputStream {
    }
    export class $FileUpload$CustomInputStreamEntity extends $InputStreamEntity {
    }
    export class $Ping {
        static ping(...arg0: $Ping$Region_[]): $List<$RegionPingResult>;
        static pingAllRegions(): $List<$RegionPingResult>;
        constructor();
    }
    export class $Request<T extends $Request<T>> {
        addSnapshotHeader(arg0: boolean): void;
        getRetryAfterHeader(): number;
        static getRetryAfterHeader(arg0: $HttpURLConnection): number;
        static cookie(arg0: $HttpURLConnection, arg1: string, arg2: string): void;
        cookie(arg0: string, arg1: string): void;
        text(): string;
        getHeader(arg0: string): string;
        static getHeader(arg0: $HttpURLConnection, arg1: string): string;
        static post(arg0: string, arg1: string, arg2: number, arg3: number): $Request<never>;
        static post(arg0: string, arg1: string): $Request<never>;
        responseCode(): number;
        static get(arg0: string, arg1: number, arg2: number): $Request<never>;
        static get(arg0: string): $Request<never>;
        static put(arg0: string, arg1: string, arg2: number, arg3: number): $Request<never>;
        static put(arg0: string, arg1: string): $Request<never>;
        static delete(arg0: string): $Request<never>;
        constructor(arg0: string, arg1: number, arg2: number);
    }
    export class $FileUpload {
        upload(arg0: $Consumer_<$UploadResult>): void;
        isFinished(): boolean;
        cancel(): void;
        constructor(arg0: $File_, arg1: number, arg2: number, arg3: $UploadInfo, arg4: $User, arg5: string, arg6: string, arg7: $UploadStatus);
        get finished(): boolean;
    }
    export class $FileDownload$ResourcePackProgressListener implements $ActionListener {
    }
}
