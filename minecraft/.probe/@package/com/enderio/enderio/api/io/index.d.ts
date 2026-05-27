import { $IntFunction } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/com/enderio/enderio/api/io" {
    export class $RedstoneControl extends $Enum<$RedstoneControl> implements $StringRepresentable {
        getSerializedName(): string;
        isRedstoneSensitive(): boolean;
        isActive(arg0: boolean): boolean;
        getComponent(): $MutableComponent;
        static values(): $RedstoneControl[];
        static valueOf(arg0: string): $RedstoneControl;
        save(arg0: $HolderLookup$Provider): $Tag;
        static parse(arg0: $HolderLookup$Provider, arg1: $Tag_): $RedstoneControl;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$RedstoneControl>;
        static ALWAYS_ACTIVE: $RedstoneControl;
        static BY_ID: $IntFunction<$RedstoneControl>;
        static NEVER_ACTIVE: $RedstoneControl;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RedstoneControl>;
        static ACTIVE_WITH_SIGNAL: $RedstoneControl;
        static ACTIVE_WITHOUT_SIGNAL: $RedstoneControl;
        get serializedName(): string;
        get redstoneSensitive(): boolean;
        get component(): $MutableComponent;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RedstoneControl}.
     */
    export type $RedstoneControl_ = "always_active" | "active_with_signal" | "active_without_signal" | "never_active";
}
