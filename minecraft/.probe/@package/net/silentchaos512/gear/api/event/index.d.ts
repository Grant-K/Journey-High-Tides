import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $GearPropertyValue, $GearProperty, $GearProperty_ } from "@package/net/silentchaos512/gear/api/property";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Trait } from "@package/net/silentchaos512/gear/gear/trait";
import { $PartInstance } from "@package/net/silentchaos512/gear/gear/part";
import { $PartType_, $PartList, $PartType } from "@package/net/silentchaos512/gear/api/part";
import { $Collection_, $List, $List_, $Map_, $Map, $Collection } from "@package/java/util";
import { $MaterialInstance } from "@package/net/silentchaos512/gear/gear/material";
import { $PropertyKey } from "@package/net/silentchaos512/gear/api/util";

declare module "@package/net/silentchaos512/gear/api/event" {
    export class $GearItemEvent extends $Event {
        getParts(): $PartList;
        getGear(): $ItemStack;
        constructor(arg0: $ItemStack_, arg1: $Collection_<$PartInstance>);
        get parts(): $PartList;
        get gear(): $ItemStack;
    }
    export class $GetMaterialPropertiesEvent extends $Event {
        getMaterial(): $MaterialInstance;
        getPartType(): $PartType;
        getProperty(): $GearProperty<never, never>;
        getModifiers(): $List<$GearPropertyValue<never>>;
        constructor(arg0: $MaterialInstance, arg1: $PartType_, arg2: $GearProperty_<never, never>, arg3: $Collection_<$GearPropertyValue<never>>);
        get material(): $MaterialInstance;
        get partType(): $PartType;
        get property(): $GearProperty<never, never>;
        get modifiers(): $List<$GearPropertyValue<never>>;
    }
    export class $GetTraitsEvent extends $GearItemEvent {
        getTraits(): $Map<$Trait, number>;
        constructor(arg0: $ItemStack_, arg1: $PartList, arg2: $Map_<$Trait, number>);
        get traits(): $Map<$Trait, number>;
    }
    export class $GearNamePrefixesEvent extends $GearItemEvent {
        getPrefixes(): $Collection<$Component>;
        constructor(arg0: $ItemStack_, arg1: $Collection_<$PartInstance>);
        get prefixes(): $Collection<$Component>;
    }
    export class $GetPropertyModifiersEvent<T, V extends $GearPropertyValue<T>> extends $Event {
        getPropertyKey(): $PropertyKey<T, V>;
        getPart(): $PartInstance;
        getModifiers(): $List<V>;
        constructor(arg0: $PartInstance, arg1: $PropertyKey<T, V>, arg2: $List_<V>);
        get propertyKey(): $PropertyKey<T, V>;
        get part(): $PartInstance;
        get modifiers(): $List<V>;
    }
}
