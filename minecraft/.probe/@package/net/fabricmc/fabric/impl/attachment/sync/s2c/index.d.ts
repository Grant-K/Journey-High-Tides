import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $AttachmentChange_, $AttachmentChange } from "@package/net/fabricmc/fabric/impl/attachment/sync";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $List, $List_ } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/fabricmc/fabric/impl/attachment/sync/s2c" {
    export class $AttachmentSyncPayloadS2C extends $Record implements $CustomPacketPayload {
        attachments(): $List<$AttachmentChange>;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static PACKET_ID: $ResourceLocation;
        static CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AttachmentSyncPayloadS2C>;
        static ID: $CustomPacketPayload$Type<$AttachmentSyncPayloadS2C>;
        constructor(attachments: $List_<$AttachmentChange_>);
    }
    /**
     * Values that may be interpreted as {@link $AttachmentSyncPayloadS2C}.
     */
    export type $AttachmentSyncPayloadS2C_ = { attachments?: $List_<$AttachmentChange_>,  } | [attachments?: $List_<$AttachmentChange_>, ];
}
