import { $Consumer_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $AttachmentTargetInfo, $AttachmentChange_, $AttachmentChange } from "@package/net/fabricmc/fabric/impl/attachment/sync";
import { $AttachmentSyncPayloadS2C_ } from "@package/net/fabricmc/fabric/impl/attachment/sync/s2c";
import { $AttachmentType, $AttachmentTarget } from "@package/net/fabricmc/fabric/api/attachment/v1";
export * as sync from "@package/net/fabricmc/fabric/impl/attachment/sync";

declare module "@package/net/fabricmc/fabric/impl/attachment" {
    export class $AttachmentTargetImpl {
    }
    export interface $AttachmentTargetImpl extends $AttachmentTarget {
        acknowledgeSyncedEntry(arg0: $AttachmentType<never>, arg1: $AttachmentChange_): void;
        fabric_computeInitialSyncChanges(arg0: $ServerPlayer, arg1: $Consumer_<$AttachmentChange>): void;
        fabric_getSyncTargetInfo(): $AttachmentTargetInfo<never>;
        fabric_syncChange(arg0: $AttachmentType<never>, arg1: $AttachmentSyncPayloadS2C_): void;
        fabric_shouldTryToSync(): boolean;
        fabric_getDynamicRegistryManager(): $RegistryAccess;
        setAttached<A>(arg0: $AttachmentType<A>, arg1: A): A;
    }
    /**
     * Values that may be interpreted as {@link $AttachmentTargetImpl}.
     */
    export type $AttachmentTargetImpl_ = (() => $RegistryAccess);
}
