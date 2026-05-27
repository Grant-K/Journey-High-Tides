import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Slot, $ClickAction, $AbstractContainerMenu, $ClickAction_ } from "@package/net/minecraft/world/inventory";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $PlayerContainerEvent } from "@package/net/neoforged/neoforge/event/entity/player";

declare module "@package/it/hurts/sskirillss/relics/api/events/common" {
    export class $ContainerSlotClickEvent extends $PlayerContainerEvent implements $ICancellableEvent {
        getHeldStack(): $ItemStack;
        getSlotStack(): $ItemStack;
        getSlot(): $Slot;
        getAction(): $ClickAction;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $AbstractContainerMenu, arg2: $Slot, arg3: $ClickAction_, arg4: $ItemStack_, arg5: $ItemStack_);
        get heldStack(): $ItemStack;
        get slotStack(): $ItemStack;
        get slot(): $Slot;
        get action(): $ClickAction;
    }
    export class $EntityBlockSpeedFactorEvent extends $EntityEvent {
        getSpeedFactor(): number;
        setSpeedFactor(arg0: number): void;
        getState(): $BlockState;
        constructor(arg0: $Entity, arg1: $BlockState_, arg2: number);
        get state(): $BlockState;
    }
    export class $LivingSlippingEvent extends $LivingEvent {
        getFriction(): number;
        setFriction(arg0: number): void;
        getState(): $BlockState;
        constructor(arg0: $LivingEntity, arg1: $BlockState_, arg2: number);
        get state(): $BlockState;
    }
    export class $FluidCollisionEvent extends $LivingEvent implements $ICancellableEvent {
        getFluid(): $FluidState;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $FluidState);
        get fluid(): $FluidState;
    }
    export class $TooltipDisplayEvent extends $Event {
        getY(): number;
        getX(): number;
        getWidth(): number;
        getHeight(): number;
        getGraphics(): $GuiGraphics;
        getStack(): $ItemStack;
        constructor(arg0: $ItemStack_, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number);
        get y(): number;
        get x(): number;
        get width(): number;
        get height(): number;
        get graphics(): $GuiGraphics;
        get stack(): $ItemStack;
    }
}
