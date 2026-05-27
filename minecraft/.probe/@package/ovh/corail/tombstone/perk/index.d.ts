import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $Component } from "@package/net/minecraft/network/chat";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Comparable, $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/ovh/corail/tombstone/perk" {
    export class $PerkBranch extends $Enum<$PerkBranch> implements $StringRepresentable {
        getColor(): number;
        getSerializedName(): string;
        static values(): $PerkBranch[];
        static valueOf(arg0: string): $PerkBranch;
        getRemappedEnumConstantName(): string;
        static ARKANOTROPY: $PerkBranch;
        static ANIMATHURGY: $PerkBranch;
        static THANATOMANCY: $PerkBranch;
        static ATHANOCRATY: $PerkBranch;
        get color(): number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PerkBranch}.
     */
    export type $PerkBranch_ = "thanatomancy" | "athanocraty" | "arkanotropy" | "animathurgy";
    export class $Perk implements $Comparable<$Perk>, $StringRepresentable {
        getSerializedName(): string;
        getTranslation(): $Component;
        getTranslationKey(): string;
        getCost(arg0: number): number;
        isDisabled(arg0: $Player): boolean;
        getCurrentBonusInfo(arg0: number): $Component;
        getLevelMax(): number;
        getBranch(): $PerkBranch;
        getBranchTier(): number;
        getDisabledInfo(arg0: $Player): $Component;
        getLevelBonus(arg0: $Player): number;
        getNextBonusInfo(arg0: number): $Component;
        getIcon(): $Either<$ResourceLocation, $Supplier<$ItemStack>>;
        getDescription(): $Component;
        compareTo(arg0: $Perk_): number;
        getParent(): $Perk;
        getRemappedEnumConstantName(): string;
        constructor(arg0: string, arg1: $PerkBranch_, arg2: number, arg3: $Supplier_<$ItemStack>);
        constructor(arg0: string, arg1: $PerkBranch_, arg2: number, arg3: $ResourceLocation_);
        get serializedName(): string;
        get translation(): $Component;
        get translationKey(): string;
        get levelMax(): number;
        get branch(): $PerkBranch;
        get branchTier(): number;
        get icon(): $Either<$ResourceLocation, $Supplier<$ItemStack>>;
        get description(): $Component;
        get parent(): $Perk;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Perk}.
     */
    export type $Perk_ = RegistryTypes.TombstonePerks;
    export interface $Perk extends RegistryMarked<RegistryTypes.TombstonePerksTag, RegistryTypes.TombstonePerks> {}
}
