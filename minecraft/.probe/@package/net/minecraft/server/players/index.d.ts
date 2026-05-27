import { $JsonObject_ } from "@package/com/google/gson";
import { $MinecraftServer, $PlayerAdvancements, $RegistryLayer_ } from "@package/net/minecraft/server";
import { $StoredUserListAccessor } from "@package/com/aetherteam/aether/mixin/mixins/common/accessor";
import { $ChatPlayerListAccess } from "@package/umpaz/brewinandchewin/common/access";
import { $ServerAware } from "@package/com/illusivesoulworks/comforts/common/util";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity$RemovalReason_, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UUID, $List, $UUID_, $Date, $List_, $Collection, $Map } from "@package/java/util";
import { $Function_ } from "@package/java/util/function";
import { $SimpleDateFormat } from "@package/java/text";
import { $ServerLevel, $ServerPlayer, $ClientInformation_ } from "@package/net/minecraft/server/level";
import { $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $SocketAddress } from "@package/java/net";
import { $Connection } from "@package/net/minecraft/network";
import { $GameProfileRepository_, $GameProfile } from "@package/com/mojang/authlib";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $RuntimeException, $Object } from "@package/java/lang";
import { $PlayerListAccessor } from "@package/com/teamresourceful/resourcefulconfig/mixins/common";
import { $PlayerListAccess } from "@package/dev/ftb/mods/ftbessentials/mixin";
import { $File, $File_ } from "@package/java/io";
import { $Level } from "@package/net/minecraft/world/level";
import { $Component_, $PlayerChatMessage, $ChatType$Bound_, $Component, $PlayerChatMessage_ } from "@package/net/minecraft/network/chat";
import { $ServerGamePacketListenerImpl, $CommonListenerCookie_ } from "@package/net/minecraft/server/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PlayerDataStorage } from "@package/net/minecraft/world/level/storage";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $DedicatedServer } from "@package/net/minecraft/server/dedicated";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $ServerStatsCounter } from "@package/net/minecraft/stats";

declare module "@package/net/minecraft/server/players" {
    export class $ServerOpListEntry extends $StoredUserEntry<$GameProfile> {
        getBypassesPlayerLimit(): boolean;
        getLevel(): number;
        constructor(arg0: $JsonObject_);
        constructor(arg0: $GameProfile, arg1: number, arg2: boolean);
        get bypassesPlayerLimit(): boolean;
        get level(): number;
    }
    export class $OldUsersConverter {
        static serverReadyAfterUserconversion(arg0: $MinecraftServer): boolean;
        static convertUserBanlist(arg0: $MinecraftServer): boolean;
        static convertIpBanlist(arg0: $MinecraftServer): boolean;
        static convertOpsList(arg0: $MinecraftServer): boolean;
        static convertWhiteList(arg0: $MinecraftServer): boolean;
        static convertPlayers(arg0: $DedicatedServer): boolean;
        static convertMobOwnerIfNecessary(arg0: $MinecraftServer, arg1: string): $UUID;
        static OLD_OPLIST: $File;
        static OLD_USERBANLIST: $File;
        static OLD_IPBANLIST: $File;
        static OLD_WHITELIST: $File;
        constructor();
    }
    export class $GameProfileCache {
        setExecutor(arg0: $Executor_): void;
        static setUsesAuthentication(arg0: boolean): void;
        clearExecutor(): void;
        getAsync(arg0: string): $CompletableFuture<($GameProfile) | undefined>;
        get(arg0: string): ($GameProfile) | undefined;
        get(arg0: $UUID_): ($GameProfile) | undefined;
        load(): $List<$GameProfileCache$GameProfileInfo>;
        add(arg0: $GameProfile): void;
        save(): void;
        profilesByName: $Map<string, $GameProfileCache$GameProfileInfo>;
        constructor(arg0: $GameProfileRepository_, arg1: $File_);
        set executor(value: $Executor_);
        static set usesAuthentication(value: boolean);
    }
    export class $UserBanListEntry extends $BanListEntry<$GameProfile> {
        static DATE_FORMAT: $SimpleDateFormat;
        static EXPIRES_NEVER: string;
        constructor(arg0: $JsonObject_);
        constructor(arg0: $GameProfile, arg1: $Date, arg2: string, arg3: $Date, arg4: string);
        constructor(arg0: $GameProfile);
    }
    export class $BanListEntry<T> extends $StoredUserEntry<T> {
        getDisplayName(): $Component;
        getReason(): string;
        getSource(): string;
        getCreated(): $Date;
        getExpires(): $Date;
        static DATE_FORMAT: $SimpleDateFormat;
        static EXPIRES_NEVER: string;
        constructor(arg0: T, arg1: $Date, arg2: string, arg3: $Date, arg4: string);
        get displayName(): $Component;
        get reason(): string;
        get source(): string;
        get created(): $Date;
        get expires(): $Date;
    }
    export class $IpBanList extends $StoredUserList<string, $IpBanListEntry> {
        isBanned(arg0: string): boolean;
        isBanned(arg0: $SocketAddress): boolean;
        get(arg0: $SocketAddress): $IpBanListEntry;
        constructor(arg0: $File_);
    }
    export class $UserWhiteListEntry extends $StoredUserEntry<$GameProfile> {
        constructor(arg0: $JsonObject_);
        constructor(arg0: $GameProfile);
    }
    export class $SleepStatus implements $ServerAware {
        comforts$getServer(): $ServerLevel;
        areEnoughSleeping(arg0: number): boolean;
        areEnoughDeepSleeping(arg0: number, arg1: $List_<$ServerPlayer>): boolean;
        removeAllSleepers(): void;
        amountSleeping(): number;
        sleepersNeeded(arg0: number): number;
        comforts$setServer(arg0: $ServerLevel): void;
        update(arg0: $List_<$ServerPlayer>): boolean;
        constructor();
    }
    export class $ServerOpList extends $StoredUserList<$GameProfile, $ServerOpListEntry> {
        canBypassPlayerLimit(arg0: $GameProfile): boolean;
        constructor(arg0: $File_);
    }
    export class $GameProfileCache$GameProfileInfo {
        getLastAccess(): number;
        getExpirationDate(): $Date;
        setLastAccess(arg0: number): void;
        getProfile(): $GameProfile;
        get expirationDate(): $Date;
        get profile(): $GameProfile;
    }
    export class $UserBanList extends $StoredUserList<$GameProfile, $UserBanListEntry> {
        isBanned(arg0: $GameProfile): boolean;
        constructor(arg0: $File_);
    }
    export class $UserWhiteList extends $StoredUserList<$GameProfile, $UserWhiteListEntry> {
        isWhiteListed(arg0: $GameProfile): boolean;
        constructor(arg0: $File_);
    }
    export class $PlayerList implements $PlayerListAccess, $ChatPlayerListAccess, $PlayerListAccessor {
        respawn(arg0: $ServerPlayer, arg1: boolean, arg2: $Entity$RemovalReason_): $ServerPlayer;
        getOps(): $ServerOpList;
        getServer(): $MinecraftServer;
        getPlayer(arg0: $UUID_): $ServerPlayer;
        addWorldborderListener(arg0: $ServerLevel): void;
        getSingleplayerData(): $CompoundTag;
        getMaxPlayers(): number;
        getPlayerCount(): number;
        getPlayerNamesArray(): string[];
        reloadResources(): void;
        getWhiteList(): $UserWhiteList;
        isAllowCommandsForAllPlayers(): boolean;
        isOp(arg0: $GameProfile): boolean;
        getPlayerStats(arg0: $Player): $ServerStatsCounter;
        getPlayerAdvancements(arg0: $ServerPlayer): $PlayerAdvancements;
        broadcastSystemMessage(arg0: $Component_, arg1: boolean): void;
        broadcastSystemMessage(arg0: $Component_, arg1: $Function_<$ServerPlayer, $Component>, arg2: boolean): void;
        broadcastSystemToTeam(arg0: $Player, arg1: $Component_): void;
        broadcastSystemToAllExceptTeam(arg0: $Player, arg1: $Component_): void;
        sendPlayerPermissionLevel(arg0: $ServerPlayer): void;
        sendLevelInfo(arg0: $ServerPlayer, arg1: $ServerLevel): void;
        sendAllPlayerInfo(arg0: $ServerPlayer): void;
        sendActivePlayerEffects(arg0: $ServerPlayer): void;
        broadcastAll(arg0: $Packet<never>): void;
        broadcastAll(arg0: $Packet<never>, arg1: $ResourceKey_<$Level>): void;
        sendActiveEffects(arg0: $LivingEntity, arg1: $ServerGamePacketListenerImpl): void;
        getBans(): $UserBanList;
        getViewDistance(): number;
        getSimulationDistance(): number;
        saveAll(): void;
        getPlayers(): $List<$ServerPlayer>;
        isWhiteListed(arg0: $GameProfile): boolean;
        getPlayerByName(arg0: string): $ServerPlayer;
        tick(): void;
        broadcast(arg0: $Player, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $ResourceKey_<any>, arg6: $Packet<any>): void;
        placeNewPlayer(arg0: $Connection, arg1: $ServerPlayer, arg2: $CommonListenerCookie_): void;
        handler$eob000$factory_api$placeNewPlayer(connection: $Connection, serverPlayer: $ServerPlayer, commonListenerCookie: $CommonListenerCookie_, ci: $CallbackInfo): void;
        handler$eob000$factory_api$remove(serverPlayer: $ServerPlayer, ci: $CallbackInfo): void;
        canPlayerLogin(arg0: $SocketAddress, arg1: $GameProfile): $Component;
        handler$ghk000$e4mc$allowOwnerLogin(socketAddress: $SocketAddress, gameProfile: $Object, cir: $CallbackInfoReturnable<any>): void;
        canBypassPlayerLimit(arg0: $GameProfile): boolean;
        getPlayerForLogin(arg0: $GameProfile, arg1: $ClientInformation_): $ServerPlayer;
        disconnectAllPlayersWithProfile(arg0: $GameProfile): boolean;
        getIpBans(): $IpBanList;
        deop(arg0: $GameProfile): void;
        getWhiteListNames(): string[];
        getOpNames(): string[];
        reloadWhiteList(): void;
        handler$ehd000$xaerolib$onSendLevelInfo(arg0: $ServerPlayer, arg1: $ServerLevel, arg2: $CallbackInfo): void;
        handler$hib000$xaerominimap$onSendWorldInfo(arg0: $ServerPlayer, arg1: $ServerLevel, arg2: $CallbackInfo): void;
        handler$icc001$xaeroworldmap$onSendWorldInfo(arg0: $ServerPlayer, arg1: $ServerLevel, arg2: $CallbackInfo): void;
        isUsingWhitelist(): boolean;
        setUsingWhiteList(arg0: boolean): void;
        getPlayersWithAddress(arg0: string): $List<$ServerPlayer>;
        setAllowCommandsForAllPlayers(arg0: boolean): void;
        localvar$dfd000$brewinandchewin$sendOriginalChatMessageToClients(arg0: $PlayerChatMessage_, arg1: $ChatType$Bound_): $PlayerChatMessage;
        setSimulationDistance(arg0: number): void;
        handler$eob001$factory_api$remove(ci: $CallbackInfo): void;
        broadcastChatMessage(arg0: $PlayerChatMessage_, arg1: $ServerPlayer, arg2: $ChatType$Bound_): void;
        broadcastChatMessage(arg0: $PlayerChatMessage_, arg1: $CommandSourceStack, arg2: $ChatType$Bound_): void;
        brewinandchewin$setOriginalMessage(arg0: $Component_): void;
        setViewDistance(arg0: number): void;
        removeAll(): void;
        remove(arg0: $ServerPlayer): void;
        load(arg0: $ServerPlayer): ($CompoundTag) | undefined;
        op(arg0: $GameProfile): void;
        getStats(): $Map<$UUID, $ServerStatsCounter>;
        setMaxPlayers(arg0: number): void;
        static WHITELIST_FILE: $File;
        playerIo: $PlayerDataStorage;
        static USERBANLIST_FILE: $File;
        static IPBANLIST_FILE: $File;
        static OPLIST_FILE: $File;
        static CHAT_FILTERED_FULL: $Component;
        static DUPLICATE_LOGIN_DISCONNECT_MESSAGE: $Component;
        constructor(arg0: $MinecraftServer, arg1: $LayeredRegistryAccess<$RegistryLayer_>, arg2: $PlayerDataStorage, arg3: number);
        get ops(): $ServerOpList;
        get server(): $MinecraftServer;
        get singleplayerData(): $CompoundTag;
        get playerCount(): number;
        get playerNamesArray(): string[];
        get whiteList(): $UserWhiteList;
        get bans(): $UserBanList;
        get players(): $List<$ServerPlayer>;
        get ipBans(): $IpBanList;
        get whiteListNames(): string[];
        get opNames(): string[];
        get usingWhitelist(): boolean;
        set usingWhiteList(value: boolean);
        get stats(): $Map<$UUID, $ServerStatsCounter>;
    }
    export class $StoredUserList<K, V extends $StoredUserEntry<K>> implements $StoredUserListAccessor {
        getUserList(): string[];
        getFile(): $File;
        getEntries(): $Collection<V>;
        remove(arg0: K): void;
        remove(arg0: $StoredUserEntry<K>): void;
        get(arg0: K): V;
        load(): void;
        isEmpty(): boolean;
        add(arg0: V): void;
        save(): void;
        callContains<K, V extends $StoredUserEntry<K>>(arg0: K): boolean;
        constructor(arg0: $File_);
        get userList(): string[];
        get file(): $File;
        get entries(): $Collection<V>;
        get empty(): boolean;
    }
    export class $StoredUserEntry<T> {
        constructor(arg0: T);
    }
    export class $OldUsersConverter$ConversionError extends $RuntimeException {
    }
    export class $IpBanListEntry extends $BanListEntry<string> {
        static DATE_FORMAT: $SimpleDateFormat;
        static EXPIRES_NEVER: string;
        constructor(arg0: string);
        constructor(arg0: $JsonObject_);
        constructor(arg0: string, arg1: $Date, arg2: string, arg3: $Date, arg4: string);
    }
}
