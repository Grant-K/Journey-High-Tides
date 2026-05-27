import { $ConductorEntity } from "@package/com/railwayteam/railways/content/conductor";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack, $DyeColor_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $ToolboxBlockEntity } from "@package/com/simibubi/create/content/equipment/toolbox";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";

declare module "@package/com/railwayteam/railways/content/conductor/toolbox" {
    export class $MountedToolbox extends $ToolboxBlockEntity {
        getCloneItemStack(): $ItemStack;
        static openMenu(arg0: $ServerPlayer, arg1: $MountedToolbox): void;
        getDisplayStack(): $ItemStack;
        getConnectedPlayers(): $List<$Player>;
        readFromItem(arg0: $ItemStack_): void;
        getParent(): $ConductorEntity;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        static read(arg0: $ConductorEntity, arg1: $CompoundTag_): $MountedToolbox;
        drawers: $LerpedFloat;
        lid: $LerpedFloat;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $ConductorEntity, arg1: $DyeColor_);
        get cloneItemStack(): $ItemStack;
        get displayStack(): $ItemStack;
        get connectedPlayers(): $List<$Player>;
        get parent(): $ConductorEntity;
    }
}
