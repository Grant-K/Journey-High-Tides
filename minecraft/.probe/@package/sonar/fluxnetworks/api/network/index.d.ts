import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Enum } from "@package/java/lang";
import { $UUID } from "@package/java/util";

declare module "@package/sonar/fluxnetworks/api/network" {
    export class $SecurityLevel extends $Enum<$SecurityLevel> {
        static fromId(arg0: number): $SecurityLevel;
        getName(): string;
        static values(): $SecurityLevel[];
        static valueOf(arg0: string): $SecurityLevel;
        getId(): number;
        static PUBLIC: $SecurityLevel;
        static VALUES: $SecurityLevel[];
        static ENCRYPTED: $SecurityLevel;
        static PRIVATE: $SecurityLevel;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $SecurityLevel}.
     */
    export type $SecurityLevel_ = "public" | "encrypted" | "private";
    export class $NetworkMember {
        getCachedName(): string;
        setAccessLevel(arg0: $AccessLevel_): boolean;
        getPlayerUUID(): $UUID;
        readNBT(arg0: $CompoundTag_): void;
        writeNBT(arg0: $CompoundTag_): void;
        getAccessLevel(): $AccessLevel;
        static create(arg0: $Player, arg1: $AccessLevel_): $NetworkMember;
        constructor(arg0: $CompoundTag_);
        get cachedName(): string;
        get playerUUID(): $UUID;
    }
    export class $AccessLevel extends $Enum<$AccessLevel> {
        getColor(): number;
        canEdit(): boolean;
        getFormattedName(): string;
        static fromKey(arg0: number): $AccessLevel;
        canDelete(): boolean;
        static values(): $AccessLevel[];
        static valueOf(arg0: string): $AccessLevel;
        getKey(): number;
        canUse(): boolean;
        static SUPER_ADMIN: $AccessLevel;
        static OWNER: $AccessLevel;
        static BLOCKED: $AccessLevel;
        static ADMIN: $AccessLevel;
        static USER: $AccessLevel;
        get color(): number;
        get formattedName(): string;
        get key(): number;
    }
    /**
     * Values that may be interpreted as {@link $AccessLevel}.
     */
    export type $AccessLevel_ = "owner" | "admin" | "user" | "blocked" | "super_admin";
}
