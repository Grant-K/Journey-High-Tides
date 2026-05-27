import { $AbuseReport_, $AbuseReport } from "@package/com/mojang/authlib/minecraft/report";
import { $UUID_, $UUID } from "@package/java/util";
import { $Record } from "@package/java/lang";

declare module "@package/com/mojang/authlib/yggdrasil/request" {
    export class $AbuseReportRequest$RealmInfo extends $Record {
        slotId(): number;
        realmId(): string;
        constructor(realmId: string, slotId: number);
    }
    /**
     * Values that may be interpreted as {@link $AbuseReportRequest$RealmInfo}.
     */
    export type $AbuseReportRequest$RealmInfo_ = { slotId?: number, realmId?: string,  } | [slotId?: number, realmId?: string, ];
    export class $AbuseReportRequest extends $Record {
        reportType(): string;
        report(): $AbuseReport;
        clientInfo(): $AbuseReportRequest$ClientInfo;
        thirdPartyServerInfo(): $AbuseReportRequest$ThirdPartyServerInfo;
        realmInfo(): $AbuseReportRequest$RealmInfo;
        version(): number;
        id(): $UUID;
        constructor(version: number, id: $UUID_, report: $AbuseReport_, clientInfo: $AbuseReportRequest$ClientInfo_, thirdPartyServerInfo: $AbuseReportRequest$ThirdPartyServerInfo_, realmInfo: $AbuseReportRequest$RealmInfo_, reportType: string);
    }
    /**
     * Values that may be interpreted as {@link $AbuseReportRequest}.
     */
    export type $AbuseReportRequest_ = { reportType?: string, clientInfo?: $AbuseReportRequest$ClientInfo_, thirdPartyServerInfo?: $AbuseReportRequest$ThirdPartyServerInfo_, realmInfo?: $AbuseReportRequest$RealmInfo_, id?: $UUID_, report?: $AbuseReport_, version?: number,  } | [reportType?: string, clientInfo?: $AbuseReportRequest$ClientInfo_, thirdPartyServerInfo?: $AbuseReportRequest$ThirdPartyServerInfo_, realmInfo?: $AbuseReportRequest$RealmInfo_, id?: $UUID_, report?: $AbuseReport_, version?: number, ];
    export class $AbuseReportRequest$ClientInfo extends $Record {
        clientVersion(): string;
        locale(): string;
        constructor(clientVersion: string, locale: string);
    }
    /**
     * Values that may be interpreted as {@link $AbuseReportRequest$ClientInfo}.
     */
    export type $AbuseReportRequest$ClientInfo_ = { clientVersion?: string, locale?: string,  } | [clientVersion?: string, locale?: string, ];
    export class $AbuseReportRequest$ThirdPartyServerInfo extends $Record {
        address(): string;
        constructor(address: string);
    }
    /**
     * Values that may be interpreted as {@link $AbuseReportRequest$ThirdPartyServerInfo}.
     */
    export type $AbuseReportRequest$ThirdPartyServerInfo_ = { address?: string,  } | [address?: string, ];
}
