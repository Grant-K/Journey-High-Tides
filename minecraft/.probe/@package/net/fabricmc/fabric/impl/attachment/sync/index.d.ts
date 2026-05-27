import { $Level_ } from "@package/net/minecraft/world/level";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $AttachmentType, $AttachmentTarget } from "@package/net/fabricmc/fabric/api/attachment/v1";
import { $Object, $Record } from "@package/java/lang";
import { $Set_, $List_, $Set } from "@package/java/util";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";
export * as s2c from "@package/net/fabricmc/fabric/impl/attachment/sync/s2c";

declare module "@package/net/fabricmc/fabric/impl/attachment/sync" {
    export class $AttachmentTargetInfo$Type<T> extends $Record {
        packetCodec(): $StreamCodec<$ByteBuf, $AttachmentTargetInfo<T>>;
        id(): number;
        constructor(id: number, packetCodec: $StreamCodec_<$ByteBuf, $AttachmentTargetInfo<T>>);
    }
    /**
     * Values that may be interpreted as {@link $AttachmentTargetInfo$Type}.
     */
    export type $AttachmentTargetInfo$Type_<T> = { packetCodec?: $StreamCodec_<$ByteBuf, $AttachmentTargetInfo<any>>, id?: number,  } | [packetCodec?: $StreamCodec_<$ByteBuf, $AttachmentTargetInfo<any>>, id?: number, ];
    export class $AttachmentChange extends $Record {
        targetInfo(): $AttachmentTargetInfo<never>;
        tryApply(arg0: $Level_): void;
        static partitionAndSendPackets(arg0: $List_<$AttachmentChange_>, arg1: $ServerPlayer): void;
        decodeValue(arg0: $RegistryAccess): $Object;
        static create(arg0: $AttachmentTargetInfo<never>, arg1: $AttachmentType<never>, arg2: $Object, arg3: $RegistryAccess): $AttachmentChange;
        type(): $AttachmentType<never>;
        data(): number[];
        static PACKET_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AttachmentChange>;
        constructor(targetInfo: $AttachmentTargetInfo<never>, type: $AttachmentType<never>, data: number[]);
    }
    /**
     * Values that may be interpreted as {@link $AttachmentChange}.
     */
    export type $AttachmentChange_ = { data?: number[], targetInfo?: $AttachmentTargetInfo<never>, type?: $AttachmentType<never>,  } | [data?: number[], targetInfo?: $AttachmentTargetInfo<never>, type?: $AttachmentType<never>, ];
    export class $AttachmentTargetInfo<T> {
        static PACKET_CODEC: $StreamCodec<$ByteBuf, $AttachmentTargetInfo<never>>;
        static MAX_SIZE_IN_BYTES: number;
    }
    export interface $AttachmentTargetInfo<T> {
        appendDebugInformation(arg0: $MutableComponent_): void;
        getTarget(arg0: $Level_): $AttachmentTarget;
        getId(): number;
        getType(): $AttachmentTargetInfo$Type<T>;
        get id(): number;
        get type(): $AttachmentTargetInfo$Type<T>;
    }
    export class $SupportedAttachmentsClientConnection {
    }
    export interface $SupportedAttachmentsClientConnection {
        fabric_setSupportedAttachments(arg0: $Set_<$ResourceLocation_>): void;
        fabric_getSupportedAttachments(): $Set<$ResourceLocation>;
    }
}
