import { $Object } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";
import { $AttachmentTargetImpl } from "@package/net/fabricmc/fabric/impl/attachment";
import { $AttachmentType, $IAttachmentSerializer, $AttachmentType_ } from "@package/net/neoforged/neoforge/attachment";

declare module "@package/net/fabricmc/fabric/mixin/attachment" {
    export class $AttachmentHolderAccessor {
    }
    export interface $AttachmentHolderAccessor {
        invokeGetAttachmentMap(): $Map<$AttachmentType<never>, $Object>;
    }
    /**
     * Values that may be interpreted as {@link $AttachmentHolderAccessor}.
     */
    export type $AttachmentHolderAccessor_ = (() => $Map_<$AttachmentType_<never>, $Object>);
    export class $CustomPayloadS2CPacketAccessor {
        static getMaxPayloadSize(): number;
        static get maxPayloadSize(): number;
    }
    export interface $CustomPayloadS2CPacketAccessor {
    }
    export class $AttachmentTypeAccessor {
    }
    export interface $AttachmentTypeAccessor {
        getSerializer(): $IAttachmentSerializer<never, never>;
        get serializer(): $IAttachmentSerializer<never, never>;
    }
    /**
     * Values that may be interpreted as {@link $AttachmentTypeAccessor}.
     */
    export type $AttachmentTypeAccessor_ = (() => $IAttachmentSerializer<never, never>);
    export class $VarIntsAccessor {
        static getMaxByteSize(): number;
        static get maxByteSize(): number;
    }
    export interface $VarIntsAccessor {
    }
    export class $IAttachmentHolderMixin {
    }
    export interface $IAttachmentHolderMixin extends $AttachmentTargetImpl {
    }
    /**
     * Values that may be interpreted as {@link $IAttachmentHolderMixin}.
     */
    export type $IAttachmentHolderMixin_ = (() => void);
    export class $BaseMappedRegistryAccessor {
    }
    export interface $BaseMappedRegistryAccessor {
        invokeUnfreeze(): void;
    }
    /**
     * Values that may be interpreted as {@link $BaseMappedRegistryAccessor}.
     */
    export type $BaseMappedRegistryAccessor_ = (() => void);
}
