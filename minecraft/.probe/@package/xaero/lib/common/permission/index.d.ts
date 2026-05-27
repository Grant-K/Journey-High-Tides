import { $Component } from "@package/net/minecraft/network/chat";
import { $Class } from "@package/java/lang";
export * as config from "@package/xaero/lib/common/permission/config";

declare module "@package/xaero/lib/common/permission" {
    export class $PermissionNode<T> {
        getDisplayName(): $Component;
        getDefaultPath(): string;
        getActualPath(): string;
        getComment(): $Component;
        getModId(): string;
        getType(): $Class<T>;
        get displayName(): $Component;
        get defaultPath(): string;
        get actualPath(): string;
        get comment(): $Component;
        get modId(): string;
        get type(): $Class<T>;
    }
}
