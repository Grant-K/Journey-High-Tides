import { $InteractionResult } from "@package/net/minecraft/world";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $Item$Properties, $BlockItem, $Item } from "@package/net/minecraft/world/item";
import { $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $SoundType_, $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Map } from "@package/java/util";

declare module "@package/net/mehvahdjukaar/moonlight/api/item/additional_placements" {
    export class $AdditionalItemPlacement {
        overrideUseOn(pContext: $UseOnContext, foodProperties: $FoodProperties_): $InteractionResult;
        overrideGetPlacementState(pContext: $BlockPlaceContext): $BlockState;
        overridePlace(pContext: $BlockPlaceContext): $InteractionResult;
        overrideUpdatePlacementContext(context: $BlockPlaceContext): $BlockPlaceContext;
        static getBlockPlacer(): $BlockPlacerItem;
        getPlacedBlock(): $Block;
        constructor(placeable: $Block_);
        static get blockPlacer(): $BlockPlacerItem;
        get placedBlock(): $Block;
    }
    export class $BlockPlacerItem extends $BlockItem {
        canPlace(pContext: $BlockPlaceContext, pState: $BlockState_): boolean;
        mimicGetPlacementState(pContext: $BlockPlaceContext, toPlace: $Block_): $BlockState;
        mimicUseOn(pContext: $UseOnContext, toPlace: $Block_, foodProperties: $FoodProperties_): $InteractionResult;
        mimicPlace(pContext: $BlockPlaceContext, toPlace: $Block_, overrideSound: $SoundType_): $InteractionResult;
        static get(): $BlockPlacerItem;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        descriptionId: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        craftingRemainingItem: $Item;
        /**
         * @deprecated
         */
        block: $Block;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(pBlock: $Block_, pProperties: $Item$Properties);
    }
}
