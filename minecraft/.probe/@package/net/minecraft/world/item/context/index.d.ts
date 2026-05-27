import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $UseOnContextAccessor as $UseOnContextAccessor$1 } from "@package/com/telepathicgrunt/the_bumblezone/mixin/neoforge/block";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $UseOnContextInvoker } from "@package/com/jesz/createdieselgenerators/mixins";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UseOnContextAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/item/context" {
    export class $BlockPlaceContext extends $UseOnContext {
        getNearestLookingDirections(): $Direction[];
        getNearestLookingDirection(): $Direction;
        canPlace(): boolean;
        replacingClickedOnBlock(): boolean;
        getNearestLookingVerticalDirection(): $Direction;
        handler$lpp000$moonlight$fixNotAccountingForNullPlayer1(cir: $CallbackInfoReturnable<any>): void;
        handler$lpp000$moonlight$fixNotAccountingForNullPlayer2(cir: $CallbackInfoReturnable<any>): void;
        handler$lpp000$moonlight$fixNotAccountingForNullPlayer3(cir: $CallbackInfoReturnable<any>): void;
        static at(arg0: $BlockPlaceContext, arg1: $BlockPos_, arg2: $Direction_): $BlockPlaceContext;
        constructor(arg0: $Player, arg1: $InteractionHand_, arg2: $ItemStack_, arg3: $BlockHitResult);
        constructor(arg0: $UseOnContext);
        constructor(arg0: $Level_, arg1: $Player, arg2: $InteractionHand_, arg3: $ItemStack_, arg4: $BlockHitResult);
        get nearestLookingDirections(): $Direction[];
        get nearestLookingDirection(): $Direction;
        get nearestLookingVerticalDirection(): $Direction;
    }
    export class $DirectionalPlaceContext extends $BlockPlaceContext {
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $ItemStack_, arg4: $Direction_);
    }
    export class $UseOnContext implements $UseOnContextAccessor$1, $UseOnContextAccessor, $UseOnContextInvoker {
        getItemInHand(): $ItemStack;
        getRotation(): number;
        isSecondaryUseActive(): boolean;
        getHand(): $InteractionHand;
        getPlayer(): $Player;
        getClickedPos(): $BlockPos;
        getClickedFace(): $Direction;
        isInside(): boolean;
        getClickLocation(): $Vec3;
        getHorizontalDirection(): $Direction;
        getHitResult(): $BlockHitResult;
        getLevel(): $Level;
        bumblezone$getHitResult(): $BlockHitResult;
        cdg_getHitResult(): $BlockHitResult;
        create$getHitResult(): $BlockHitResult;
        constructor(arg0: $Player, arg1: $InteractionHand_, arg2: $BlockHitResult);
        constructor(arg0: $Level_, arg1: $Player, arg2: $InteractionHand_, arg3: $ItemStack_, arg4: $BlockHitResult);
        get itemInHand(): $ItemStack;
        get rotation(): number;
        get secondaryUseActive(): boolean;
        get hand(): $InteractionHand;
        get player(): $Player;
        get clickedPos(): $BlockPos;
        get clickedFace(): $Direction;
        get inside(): boolean;
        get clickLocation(): $Vec3;
        get horizontalDirection(): $Direction;
        get hitResult(): $BlockHitResult;
        get level(): $Level;
    }
}
