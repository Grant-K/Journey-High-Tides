import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $Chemical_, $Chemical } from "@package/mekanism/api/chemical";
import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Stream } from "@package/java/util/stream";
import { $List } from "@package/java/util";

declare module "@package/mekanism/api/recipes/ingredients/chemical" {
    export class $ChemicalIngredient implements $Predicate<$Chemical> {
        codec(): $MapCodec<$ChemicalIngredient>;
        generateChemicalHolders(): $Stream<$Holder<$Chemical>>;
        /**
         * @deprecated
         */
        generateChemicals(): $Stream<$Chemical>;
        getChemicalHolders(): $List<$Holder<$Chemical>>;
        /**
         * @deprecated
         */
        getChemicals(): $List<$Chemical>;
        hasNoChemicals(): boolean;
        logMissingTags(): void;
        /**
         * @deprecated
         */
        test(arg0: $Chemical_): boolean;
        test(arg0: $Holder_<$Chemical>): boolean;
        isEmpty(): boolean;
        negate(): $Predicate<$Chemical>;
        and(arg0: $Predicate_<$Chemical>): $Predicate<$Chemical>;
        or(arg0: $Predicate_<$Chemical>): $Predicate<$Chemical>;
        constructor();
        get chemicalHolders(): $List<$Holder<$Chemical>>;
        get chemicals(): $List<$Chemical>;
        get empty(): boolean;
    }
}
