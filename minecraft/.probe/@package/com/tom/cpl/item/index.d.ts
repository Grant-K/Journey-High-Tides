import { $NBTTagCompound } from "@package/com/tom/cpl/nbt";
import { $Tag, $TagManager } from "@package/com/tom/cpl/tag";
import { $Object, $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";

declare module "@package/com/tom/cpl/item" {
    export class $NamedSlot extends $Enum<$NamedSlot> {
        static values(): $NamedSlot[];
        static valueOf(arg0: string): $NamedSlot;
        static ARMOR_HELMET: $NamedSlot;
        static ARMOR_LEGGINGS: $NamedSlot;
        static MAIN_HAND: $NamedSlot;
        static ARMOR_BOOTS: $NamedSlot;
        static ARMOR_CHESTPLATE: $NamedSlot;
        static OFF_HAND: $NamedSlot;
    }
    /**
     * Values that may be interpreted as {@link $NamedSlot}.
     */
    export type $NamedSlot_ = "main_hand" | "off_hand" | "armor_helmet" | "armor_chestplate" | "armor_leggings" | "armor_boots";
    export class $Inventory {
    }
    export interface $Inventory {
        getInSlot(arg0: number): $Stack;
        getNamedSlotId(arg0: $NamedSlot_): number;
        getStack(arg0: number): $Stack;
        size(): number;
        reset(): void;
    }
    export class $Stack {
        getDamage(): number;
        getMaxDamage(): number;
        getNbtTag(): $NBTTagCompound;
        getStackTags(arg0: $TagManager<$Stack>): $List<$Tag<$Stack>>;
        getDisplayName(): string;
        isInNativeTag(arg0: string): boolean;
        listNativeTags(): $List<string>;
        getMaxCount(): number;
        getItemId(): string;
        is(arg0: $Tag<$Stack>): boolean;
        getModId(): string;
        getCount(): number;
        static handler: $ItemStackHandler<$Object>;
        static EMPTY: $Stack;
        get damage(): number;
        get maxDamage(): number;
        get nbtTag(): $NBTTagCompound;
        get displayName(): string;
        get maxCount(): number;
        get itemId(): string;
        get modId(): string;
        get count(): number;
    }
}
