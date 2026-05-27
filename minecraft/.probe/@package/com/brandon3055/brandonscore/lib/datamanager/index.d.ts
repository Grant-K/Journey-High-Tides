import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MCDataOutput, $MCDataInput } from "@package/codechicken/lib/data";
import { $PacketCustom } from "@package/codechicken/lib/packet";

declare module "@package/com/brandon3055/brandonscore/lib/datamanager" {
    export class $IDataManager {
    }
    export interface $IDataManager {
        isClientSide(): boolean;
        sendToServer(arg0: $IManagedData): void;
        detectAndSendChanges(): void;
        markDirty(): void;
        writeToNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        readFromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getDataByName(arg0: string): $IManagedData;
        createSyncPacket(): $PacketCustom;
        getDataByIndex(arg0: number): $IManagedData;
        receiveSyncData(arg0: $MCDataInput): void;
        get clientSide(): boolean;
    }
    export class $AbstractManagedData<T> implements $IManagedData {
        markDirty(): void;
        setCCSCS(): void;
        addValueListener(arg0: $Consumer_<T>): void;
        removeValueListener(arg0: $Consumer_<T>): void;
        isDirty(arg0: boolean): boolean;
        getDataManager(): $IDataManager;
        getIndex(): number;
        addFlags(...arg0: $DataFlags[]): void;
        getName(): string;
        flags(): $DataFlags;
        init(arg0: $IDataManager, arg1: number): void;
        constructor(arg0: string, ...arg1: $DataFlags[]);
        get dataManager(): $IDataManager;
        get index(): number;
        get name(): string;
    }
    export class $IManagedData {
    }
    export interface $IManagedData {
        toNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        fromBytes(arg0: $MCDataInput): void;
        markDirty(): void;
        fromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        isDirty(arg0: boolean): boolean;
        getDataManager(): $IDataManager;
        getIndex(): number;
        getName(): string;
        flags(): $DataFlags;
        toBytes(arg0: $MCDataOutput): void;
        validate(): void;
        init(arg0: $IDataManager, arg1: number): void;
        get dataManager(): $IDataManager;
        get index(): number;
        get name(): string;
    }
    export class $IDataManagerProvider {
    }
    export interface $IDataManagerProvider {
        getDataManager(): $IDataManager;
        get dataManager(): $IDataManager;
    }
    /**
     * Values that may be interpreted as {@link $IDataManagerProvider}.
     */
    export type $IDataManagerProvider_ = (() => $IDataManager);
    export class $ManagedBool extends $AbstractManagedData<boolean> {
        invert(): boolean;
        setValidator(arg0: $Function_<boolean, boolean>): $ManagedBool;
        get(): boolean;
        set(arg0: boolean): boolean;
        constructor(arg0: string, arg1: boolean, ...arg2: $DataFlags[]);
        constructor(arg0: string, ...arg1: $DataFlags[]);
        set validator(value: $Function_<boolean, boolean>);
    }
    export class $DataFlags {
        syncViaPacket(): boolean;
        /**
         * @deprecated
         */
        static DONT_DIRTY: $DataFlags;
        syncTile: boolean;
        saveItem: boolean;
        static SAVE_BOTH_SYNC_CONTAINER: $DataFlags;
        saveNBT: boolean;
        static SYNC_TILE: $DataFlags;
        static SAVE_NBT_SYNC_TILE: $DataFlags;
        static SAVE_NBT_SYNC_CONTAINER: $DataFlags;
        static SYNC_ON_SET: $DataFlags;
        static CLIENT_CONTROL: $DataFlags;
        static SAVE_NBT: $DataFlags;
        static SAVE_BOTH: $DataFlags;
        allowClientControl: boolean;
        static SAVE_BOTH_SYNC_TILE: $DataFlags;
        syncContainer: boolean;
        static SYNC_CONTAINER: $DataFlags;
        static TRIGGER_UPDATE: $DataFlags;
        static SAVE_ITEM: $DataFlags;
        dontMark: boolean;
        static NONE: $DataFlags;
        syncOnSet: boolean;
        triggerUpdate: boolean;
    }
}
