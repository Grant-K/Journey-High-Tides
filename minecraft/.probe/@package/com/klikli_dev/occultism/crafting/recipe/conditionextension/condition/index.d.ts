import { $ConditionVisitor, $ConditionWrapper, $OccultismConditionContext } from "@package/com/klikli_dev/occultism/crafting/recipe/conditionextension";
import { $Level } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ICondition$IContext_, $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";

declare module "@package/com/klikli_dev/occultism/crafting/recipe/conditionextension/condition" {
    export class $IsInBiomeCondition implements $ICondition, $ConditionWrapper<$IsInBiomeCondition> {
        codec(): $MapCodec<$ICondition>;
        biome(): $Holder<$Biome>;
        test(arg0: $ICondition$IContext_): boolean;
        accept(arg0: $ConditionVisitor, arg1: $OccultismConditionContext): $MutableComponent;
        condition(): $IsInBiomeCondition;
        static CODEC: $MapCodec<$IsInBiomeCondition>;
        constructor(arg0: $Holder_<$Biome>);
    }
    export class $IsInDimensionCondition implements $ICondition, $ConditionWrapper<$IsInDimensionCondition> {
        codec(): $MapCodec<$ICondition>;
        dimension(): $ResourceKey<$Level>;
        test(arg0: $ICondition$IContext_): boolean;
        accept(arg0: $ConditionVisitor, arg1: $OccultismConditionContext): $MutableComponent;
        condition(): $IsInDimensionCondition;
        static CODEC: $MapCodec<$IsInDimensionCondition>;
        constructor(arg0: $ResourceKey_<$Level>);
    }
    export class $IsInBiomeWithTagCondition implements $ICondition, $ConditionWrapper<$IsInBiomeWithTagCondition> {
        codec(): $MapCodec<$ICondition>;
        tag(): $TagKey<$Biome>;
        test(arg0: $ICondition$IContext_): boolean;
        accept(arg0: $ConditionVisitor, arg1: $OccultismConditionContext): $MutableComponent;
        condition(): $IsInBiomeWithTagCondition;
        static CODEC: $MapCodec<$IsInBiomeWithTagCondition>;
        constructor(arg0: $TagKey_<$Biome>);
    }
    export class $IsInDimensionTypeCondition implements $ICondition, $ConditionWrapper<$IsInDimensionTypeCondition> {
        codec(): $MapCodec<$ICondition>;
        dimensionType(): $Holder<$DimensionType>;
        test(arg0: $ICondition$IContext_): boolean;
        accept(arg0: $ConditionVisitor, arg1: $OccultismConditionContext): $MutableComponent;
        condition(): $IsInDimensionTypeCondition;
        static CODEC: $MapCodec<$IsInDimensionTypeCondition>;
        constructor(arg0: $Holder_<$DimensionType>);
    }
}
