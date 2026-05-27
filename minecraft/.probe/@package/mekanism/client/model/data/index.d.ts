import { $ConnectionType_, $ConnectionType } from "@package/mekanism/common/lib/transmitter";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Map } from "@package/java/util";

declare module "@package/mekanism/client/model/data" {
    export class $TransmitterModelData {
        getConnectionType(side: $Direction_): $ConnectionType;
        setConnectionData(direction: $Direction_, connectionType: $ConnectionType_): void;
        getConnectionsMap(): $Map<$Direction, $ConnectionType>;
        setHasColor(hasColor: boolean): void;
        getHasColor(): boolean;
        check(...types: $ConnectionType_[]): boolean;
        constructor();
        get connectionsMap(): $Map<$Direction, $ConnectionType>;
    }
}
