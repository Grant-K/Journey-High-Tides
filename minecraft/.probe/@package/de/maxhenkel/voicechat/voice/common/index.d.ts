import { $SecretKeySpec } from "@package/javax/crypto/spec";
import { $RawUdpPacket } from "@package/de/maxhenkel/voicechat/api";
import { $SocketAddress } from "@package/java/net";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ClientConnection, $Server } from "@package/de/maxhenkel/voicechat/voice/server";
import { $UUID_, $UUID } from "@package/java/util";
import { $ByteBuf } from "@package/io/netty/buffer";

declare module "@package/de/maxhenkel/voicechat/voice/common" {
    export class $PingPacket implements $Packet<$PingPacket> {
        getTimestamp(): number;
        toBytes(arg0: $FriendlyByteBuf): void;
        getId(): $UUID;
        getTTL(): number;
        fromBytes(arg0: $FriendlyByteBuf): $PingPacket;
        constructor(arg0: $UUID_, arg1: number);
        constructor();
        get timestamp(): number;
        get id(): $UUID;
        get TTL(): number;
    }
    export class $MicPacket implements $Packet<$MicPacket> {
        setData(arg0: number[]): void;
        getTTL(): number;
        getData(): number[];
        getSequenceNumber(): number;
        isWhispering(): boolean;
        toBytes(arg0: $FriendlyByteBuf): void;
        fromBytes(arg0: $FriendlyByteBuf): $MicPacket;
        constructor(arg0: number[], arg1: boolean, arg2: number);
        constructor();
        get TTL(): number;
        get sequenceNumber(): number;
        get whispering(): boolean;
    }
    export class $PlayerState {
        setDisconnected(arg0: boolean): void;
        static fromBytes(arg0: $FriendlyByteBuf): $PlayerState;
        getUuid(): $UUID;
        isDisabled(): boolean;
        setUuid(arg0: $UUID_): void;
        setDisabled(arg0: boolean): void;
        isDisconnected(): boolean;
        setGroup(arg0: $UUID_): void;
        getGroup(): $UUID;
        hasGroup(): boolean;
        getName(): string;
        toBytes(arg0: $FriendlyByteBuf): void;
        setName(arg0: string): void;
        constructor(arg0: $UUID_, arg1: string, arg2: boolean, arg3: boolean);
    }
    export class $Packet<T extends $Packet<any>> {
    }
    export interface $Packet<T extends $Packet<any>> {
        fromBytes(arg0: $FriendlyByteBuf): T;
        getTTL(): number;
        toBytes(arg0: $FriendlyByteBuf): void;
        get TTL(): number;
    }
    export class $Secret {
        static generateNewRandomSecret(): $Secret;
        static fromBytes(arg0: number[]): $Secret;
        static fromBytes(arg0: $ByteBuf): $Secret;
        encrypt(arg0: number[]): number[];
        getKeySpec(): $SecretKeySpec;
        decrypt(arg0: number[]): number[];
        static generateIV(): number[];
        getSecret(): number[];
        toBytes(arg0: $ByteBuf): void;
        static IV_SIZE_BYTES: number;
        static CIPHER: string;
        static SECRET_SIZE_BYTES: number;
        static TAG_LEN_BITS: number;
        get keySpec(): $SecretKeySpec;
        get secret(): number[];
    }
    export class $SoundPacket<T extends $SoundPacket<any>> implements $Packet<T> {
        isFromClientAudioChannel(): boolean;
        getData(): number[];
        getSequenceNumber(): number;
        getChannelId(): $UUID;
        getSender(): $UUID;
        getCategory(): string;
        getTTL(): number;
        static WHISPER_MASK: number;
        static HAS_CATEGORY_MASK: number;
        constructor(arg0: $UUID_, arg1: $UUID_, arg2: number[], arg3: number, arg4: string);
        constructor(arg0: $UUID_, arg1: $UUID_, arg2: number[], arg3: string);
        constructor();
        get fromClientAudioChannel(): boolean;
        get data(): number[];
        get sequenceNumber(): number;
        get channelId(): $UUID;
        get sender(): $UUID;
        get category(): string;
        get TTL(): number;
    }
    export class $NetworkMessage {
        static readPacketServer(arg0: $RawUdpPacket, arg1: $Server): $NetworkMessage;
        getTTL(): number;
        getTimestamp(): number;
        static readFromBytes(arg0: $SocketAddress, arg1: $Secret, arg2: number[], arg3: number): $NetworkMessage;
        writeServer(arg0: $Server, arg1: $ClientConnection): number[];
        getPacket(): $Packet<$Packet<any>>;
        getAddress(): $SocketAddress;
        write(arg0: $Secret): number[];
        static MAGIC_BYTE: number;
        constructor(arg0: $Packet<never>);
        constructor(arg0: number, arg1: $Packet<never>);
        get TTL(): number;
        get timestamp(): number;
        get packet(): $Packet<$Packet<any>>;
        get address(): $SocketAddress;
    }
}
