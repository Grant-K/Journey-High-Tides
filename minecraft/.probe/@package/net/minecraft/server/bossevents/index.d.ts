import { $ServerPlayer, $ServerBossEvent } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $UUID_, $Collection_, $Collection } from "@package/java/util";

declare module "@package/net/minecraft/server/bossevents" {
    export class $CustomBossEvents {
        getIds(): $Collection<$ResourceLocation>;
        getEvents(): $Collection<$CustomBossEvent>;
        onPlayerConnect(arg0: $ServerPlayer): void;
        onPlayerDisconnect(arg0: $ServerPlayer): void;
        create(arg0: $ResourceLocation_, arg1: $Component_): $CustomBossEvent;
        remove(arg0: $CustomBossEvent): void;
        get(arg0: $ResourceLocation_): $CustomBossEvent;
        load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        save(arg0: $HolderLookup$Provider): $CompoundTag;
        constructor();
        get ids(): $Collection<$ResourceLocation>;
        get events(): $Collection<$CustomBossEvent>;
    }
    export class $CustomBossEvent extends $ServerBossEvent {
        getTextId(): $ResourceLocation;
        setMax(arg0: number): void;
        addOfflinePlayer(arg0: $UUID_): void;
        setPlayers(arg0: $Collection_<$ServerPlayer>): boolean;
        getDisplayName(): $Component;
        onPlayerConnect(arg0: $ServerPlayer): void;
        onPlayerDisconnect(arg0: $ServerPlayer): void;
        getMax(): number;
        static load(arg0: $CompoundTag_, arg1: $ResourceLocation_, arg2: $HolderLookup$Provider): $CustomBossEvent;
        getValue(): number;
        save(arg0: $HolderLookup$Provider): $CompoundTag;
        setValue(arg0: number): void;
        constructor(arg0: $ResourceLocation_, arg1: $Component_);
        get textId(): $ResourceLocation;
        set players(value: $Collection_<$ServerPlayer>);
        get displayName(): $Component;
    }
}
