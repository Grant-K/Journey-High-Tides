import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $AttributeModifier$Operation, $AttributeModifier, $AttributeModifier$Operation_, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Record } from "@package/java/lang";

declare module "@package/io/redspace/ironsspellbooks/item/weapons" {
    export class $AttributeContainer extends $Record {
        attribute(): $Holder<$Attribute>;
        createModifier(arg0: string): $AttributeModifier;
        operation(): $AttributeModifier$Operation;
        value(): number;
        constructor(attribute: $Holder_<$Attribute>, value: number, operation: $AttributeModifier$Operation_);
    }
    /**
     * Values that may be interpreted as {@link $AttributeContainer}.
     */
    export type $AttributeContainer_ = { value?: number, operation?: $AttributeModifier$Operation_, attribute?: $Holder_<$Attribute>,  } | [value?: number, operation?: $AttributeModifier$Operation_, attribute?: $Holder_<$Attribute>, ];
    export class $IronsWeaponTier {
    }
    export interface $IronsWeaponTier {
        getAttackDamageBonus(): number;
        getSpeed(): number;
        getAdditionalAttributes(): $AttributeContainer[];
        get attackDamageBonus(): number;
        get speed(): number;
        get additionalAttributes(): $AttributeContainer[];
    }
    export class $StaffTier implements $IronsWeaponTier {
        getAttackDamageBonus(): number;
        getSpeed(): number;
        getAdditionalAttributes(): $AttributeContainer[];
        static BLOOD_STAFF: $StaffTier;
        static PYRIUM_STAFF: $StaffTier;
        static ICE_STAFF: $StaffTier;
        static LIGHTNING_ROD: $StaffTier;
        static GRAYBEARD: $StaffTier;
        static ARTIFICER: $StaffTier;
        constructor(arg0: number, arg1: number, ...arg2: $AttributeContainer_[]);
        get attackDamageBonus(): number;
        get speed(): number;
        get additionalAttributes(): $AttributeContainer[];
    }
}
