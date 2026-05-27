import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
export * as power from "@package/com/brandon3055/brandonscore/api/power";
export * as math from "@package/com/brandon3055/brandonscore/api/math";
export * as event from "@package/com/brandon3055/brandonscore/api/event";
export * as hud from "@package/com/brandon3055/brandonscore/api/hud";

declare module "@package/com/brandon3055/brandonscore/api" {
    export class $IDataRetainingTile {
    }
    export interface $IDataRetainingTile {
        writeToItemStack(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: boolean): void;
        readFromItemStack(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        saveToItem(): boolean;
    }
}
