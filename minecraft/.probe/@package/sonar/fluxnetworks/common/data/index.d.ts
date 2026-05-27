import { $Codec } from "@package/com/mojang/serialization";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/sonar/fluxnetworks/common/data" {
    export class $FluxDeviceConfigComponent extends $Record {
        networkId(): number;
        getLimit(): number;
        surgeMode(): (boolean) | undefined;
        withNetwork(arg0: number): $FluxDeviceConfigComponent;
        withNetworkAndName(arg0: number, arg1: string): $FluxDeviceConfigComponent;
        disableLimit(): (boolean) | undefined;
        customName(): (string) | undefined;
        priority(): (number) | undefined;
        limit(): (number) | undefined;
        getPriority(): number;
        static CODEC: $Codec<$FluxDeviceConfigComponent>;
        static EMPTY: $FluxDeviceConfigComponent;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FluxDeviceConfigComponent>;
        constructor(networkId: number, customName: (string) | undefined, priority: (number) | undefined, surgeMode: (boolean) | undefined, limit: (number) | undefined, disableLimit: (boolean) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $FluxDeviceConfigComponent}.
     */
    export type $FluxDeviceConfigComponent_ = { priority?: (number) | undefined, networkId?: number, surgeMode?: (boolean) | undefined, customName?: (string) | undefined, disableLimit?: (boolean) | undefined, limit?: (number) | undefined,  } | [priority?: (number) | undefined, networkId?: number, surgeMode?: (boolean) | undefined, customName?: (string) | undefined, disableLimit?: (boolean) | undefined, limit?: (number) | undefined, ];
}
