import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Holder_, $Holder, $Registry } from "@package/net/minecraft/core";
import { $ItemStack, $Item } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $IQuiverEntity } from "@package/net/mehvahdjukaar/supplementaries/common/entities";
import { $LivingEntity, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $MLMapDecorationType } from "@package/net/mehvahdjukaar/moonlight/api/map/decoration";

declare module "@package/net/mehvahdjukaar/supplementaries/common/utils" {
    export class $SlotReference$Empty extends $Record implements $SlotReference {
        getCodec(): $StreamCodec<$ByteBuf, $SlotReference$Empty>;
        get(player: $LivingEntity): $ItemStack;
        getItem(player: $LivingEntity): $Item;
        isEmpty(): boolean;
        static CODEC: $StreamCodec<$ByteBuf, $SlotReference$Empty>;
        constructor();
        get codec(): $StreamCodec<$ByteBuf, $SlotReference$Empty>;
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SlotReference$Empty}.
     */
    export type $SlotReference$Empty_ = {  } | [];
    export class $IExplorationFunctionExtension {
    }
    export interface $IExplorationFunctionExtension {
        supplementaries$getCustomDecoration(): $Holder<$MLMapDecorationType<never, never>>;
        supplementaries$setCustomDecoration(arg0: $Holder_<$MLMapDecorationType<never, never>>): void;
    }
    export class $IQuiverPlayer {
    }
    export interface $IQuiverPlayer extends $IQuiverEntity {
        supplementaries$getQuiverSlot(): $SlotReference;
        supplementaries$setQuiverSlot(arg0: $SlotReference): void;
    }
    export class $SlotReference {
        static hand(pUsedHand: $InteractionHand_): $SlotReference;
        static quiver(e: $IQuiverEntity): $SlotReference;
        static inv(invSlot: number): $SlotReference;
        static slot(equipmentSlot: $EquipmentSlot_): $SlotReference;
        static TYPE_REGISTRY_KEY: $ResourceKey<$Registry<$StreamCodec<$ByteBuf, $SlotReference>>>;
        static TYPE_REGISTRY: $Registry<$StreamCodec<$ByteBuf, $SlotReference>>;
        static EMPTY: $SlotReference$Empty;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SlotReference>;
    }
    export interface $SlotReference {
        getCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $SlotReference>;
        getItem(player: $LivingEntity): $Item;
        get(arg0: $LivingEntity): $ItemStack;
        isEmpty(): boolean;
        get codec(): $StreamCodec<$RegistryFriendlyByteBuf, $SlotReference>;
        get empty(): boolean;
    }
}
