import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $AccessorMerchantOffer } from "@package/org/violetmoon/quark/mixin/mixins/accessor";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $MerchantOfferAccessor } from "@package/com/craisinlord/integrated_api/mixins/entities";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ArrayList } from "@package/java/util";
import { $UnaryOperator_ } from "@package/java/util/function";
import { $PseudoAccessorMerchantOffer } from "@package/org/violetmoon/quark/content/experimental/hax";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $DataComponentPredicate$Builder, $DataComponentPredicate } from "@package/net/minecraft/core/component";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/item/trading" {
    export class $MerchantOffer implements $MerchantOfferAccessor, $PseudoAccessorMerchantOffer, $AccessorMerchantOffer {
        assemble(): $ItemStack;
        getXp(): number;
        getUses(): number;
        resetSpecialPriceDiff(): void;
        updateDemand(): void;
        resetUses(): void;
        needsRestock(): boolean;
        getPriceMultiplier(): number;
        addToSpecialPriceDiff(arg0: number): void;
        getBaseCostA(): $ItemStack;
        shouldRewardExp(): boolean;
        getItemCostB(): ($ItemCost) | undefined;
        increaseUses(): void;
        getItemCostA(): $ItemCost;
        setSpecialPriceDiff(arg0: number): void;
        quark$setTier(arg0: number): void;
        getResult(): $ItemStack;
        take(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        getCostA(): $ItemStack;
        getCostB(): $ItemStack;
        getMaxUses(): number;
        getDemand(): number;
        getSpecialPriceDiff(): number;
        isOutOfStock(): boolean;
        setToOutOfStock(): void;
        satisfiedBy(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        static createFromStream(arg0: $RegistryFriendlyByteBuf): $MerchantOffer;
        quark$getTier(): number;
        copy(): $MerchantOffer;
        setMaxUses(arg0: number): void;
        quark$setRewardExp(arg0: boolean): void;
        static CODEC: $Codec<$MerchantOffer>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MerchantOffer>;
        constructor(arg0: $ItemCost_, arg1: ($ItemCost_) | undefined, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number);
        constructor(arg0: $ItemCost_, arg1: ($ItemCost_) | undefined, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number);
        constructor(arg0: $ItemCost_, arg1: ($ItemCost_) | undefined, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number);
        constructor(arg0: $ItemCost_, arg1: $ItemStack_, arg2: number, arg3: number, arg4: number);
        get xp(): number;
        get uses(): number;
        get priceMultiplier(): number;
        get baseCostA(): $ItemStack;
        get itemCostB(): ($ItemCost) | undefined;
        get itemCostA(): $ItemCost;
        get result(): $ItemStack;
        get costA(): $ItemStack;
        get costB(): $ItemStack;
        get demand(): number;
        get outOfStock(): boolean;
    }
    export class $MerchantOffers extends $ArrayList<$MerchantOffer> {
        getRecipeFor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: number): $MerchantOffer;
        copy(): $MerchantOffers;
        static CODEC: $Codec<$MerchantOffers>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MerchantOffers>;
        constructor();
    }
    export class $Merchant {
    }
    export interface $Merchant {
        isClientSide(): boolean;
        getOffers(): $MerchantOffers;
        getVillagerXp(): number;
        setTradingPlayer(arg0: $Player): void;
        openTradingScreen(arg0: $Player, arg1: $Component_, arg2: number): void;
        getTradingPlayer(): $Player;
        canRestock(): boolean;
        showProgressBar(): boolean;
        overrideOffers(arg0: $MerchantOffers): void;
        overrideXp(arg0: number): void;
        notifyTrade(arg0: $MerchantOffer): void;
        notifyTradeUpdated(arg0: $ItemStack_): void;
        getNotifyTradeSound(): $SoundEvent;
        get clientSide(): boolean;
        get offers(): $MerchantOffers;
        get villagerXp(): number;
        get notifyTradeSound(): $SoundEvent;
    }
    export class $ItemCost extends $Record {
        itemStack(): $ItemStack;
        withComponents(arg0: $UnaryOperator_<$DataComponentPredicate$Builder>): $ItemCost;
        item(): $Holder<$Item>;
        components(): $DataComponentPredicate;
        test(arg0: $ItemStack_): boolean;
        count(): number;
        static CODEC: $Codec<$ItemCost>;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, ($ItemCost) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemCost>;
        constructor(arg0: $ItemLike_);
        constructor(arg0: $ItemLike_, arg1: number);
        constructor(arg0: $Holder_<$Item>, arg1: number, arg2: $DataComponentPredicate);
        constructor(arg0: $Holder_<$Item>, arg1: number, arg2: $DataComponentPredicate, arg3: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $ItemCost}.
     */
    export type $ItemCost_ = { item?: $Holder_<$Item>, itemStack?: $ItemStack_, components?: $DataComponentPredicate, count?: number,  } | [item?: $Holder_<$Item>, itemStack?: $ItemStack_, components?: $DataComponentPredicate, count?: number, ];
}
