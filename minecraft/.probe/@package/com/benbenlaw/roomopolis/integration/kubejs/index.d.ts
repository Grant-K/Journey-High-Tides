import { $Registry } from "@package/net/minecraft/core";
import { $Item } from "@package/net/minecraft/world/item";
import { $ResourceLocation, $ResourceLocation_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ItemBuilder } from "@package/dev/latvian/mods/kubejs/item";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/com/benbenlaw/roomopolis/integration/kubejs" {
    export class $KeyItemBuilder extends $ItemBuilder {
        /**
         * The maximum height the template can be placed, default 256
         */
        maxHeight(arg0: number): $KeyItemBuilder;
        /**
         * If true block placed by the template that become water logged will have there water logged state turned back to false, default false
         */
        replaceWaterLoggedBlocks(arg0: boolean): $KeyItemBuilder;
        /**
         * The height adjustment for the template to be placed
         */
        heightAdjustment(arg0: number): $KeyItemBuilder;
        /**
         * Is the key consumed when used, default true
         */
        consumeKey(arg0: boolean): $KeyItemBuilder;
        /**
         * The front adjustment for the template to be placed in front or behind the player -2 should be center of the player
         */
        frontAdjustment(arg0: number): $KeyItemBuilder;
        /**
         * If the template can only be placed on the side of a block, default true
         */
        sideOnlyPlacement(arg0: boolean): $KeyItemBuilder;
        /**
         * If the template can only be placed on top of a block, default false
         */
        topOnlyPlacement(arg0: boolean): $KeyItemBuilder;
        /**
         * If false normal checks for placement are done if true the template will be placed no matter the blocks in the world, default false
         */
        overrideExistingBlocks(arg0: boolean): $KeyItemBuilder;
        /**
         * How many block to the left of the key block an opening should be created, default 0
         */
        doorLeft(arg0: number): $KeyItemBuilder;
        /**
         * How many block to the right of the key block an opening should be created, default 0
         */
        doorRight(arg0: number): $KeyItemBuilder;
        /**
         * How many block above the key block an opening should be created, default 0
         */
        doorUp(arg0: number): $KeyItemBuilder;
        /**
         * How many block below the key block an opening should be created, default 0
         */
        doorDown(arg0: number): $KeyItemBuilder;
        /**
         * If using the key removes a 2 high door, default true
         */
        removeDoor(arg0: boolean): $KeyItemBuilder;
        /**
         * Resource location of the template eg roomopolis:tiny_room
         */
        templateId(arg0: string): $KeyItemBuilder;
        /**
         * If the template requires blocks to be placed, default false
         */
        blocksRequired(arg0: boolean): $KeyItemBuilder;
        /**
         * The block to use as the key eg minecraft:iron_block or #minecraft:logs for block tags, this is not required
         */
        keyBlock(arg0: string): $KeyItemBuilder;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(arg0: $ResourceLocation_);
    }
}
