import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Holder_, $Registry } from "@package/net/minecraft/core";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Item_, $Item } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SchoolType } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $DamageType } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/squoshi/irons_spells_js/spell/school" {
    export class $SchoolTypeJSBuilder extends $BuilderBase<$SchoolType> {
        /**
         * Sets the ID of the item tag used for the focus item.
         *         ⚠️ Default tag is `${mod_id}:${school_name}_focus` ⚠️️
         */
        setDefaultFocusTag(arg0: $TagKey_<$Item>): $SchoolTypeJSBuilder;
        addFocusItems(...arg0: $Item_[]): $SchoolTypeJSBuilder;
        addFocusItemTags(...arg0: $TagKey_<$Item>[]): $SchoolTypeJSBuilder;
        /**
         * Sets the power attribute of the school. It takes either a String, ResourceLocation, or just an Attribute.
         */
        setPowerAttribute(arg0: $Holder_<$Attribute>): $SchoolTypeJSBuilder;
        /**
         * Sets the resistance attribute of the school. It takes either a String, ResourceLocation, or just an Attribute.
         */
        setResistanceAttribute(arg0: $Holder_<$Attribute>): $SchoolTypeJSBuilder;
        /**
         * Sets the default cast sound of the school. It takes either a String, ResourceLocation, or just a SoundEvent.
         */
        setDefaultCastSound(arg0: $Holder_<$SoundEvent>): $SchoolTypeJSBuilder;
        /**
         * Sets the damage type of the school. It takes either a String, ResourceLocation, or just a DamageType.
         *         Damage types can be created using datapacks or server scripts, or you can use an existing damage type.
         */
        setDamageType(arg0: $ResourceKey_<$DamageType>): $SchoolTypeJSBuilder;
        /**
         * Disables looting.
         */
        disableLooting(): $SchoolTypeJSBuilder;
        /**
         * Sets require learning to true.
         */
        requiresLearning(): $SchoolTypeJSBuilder;
        /**
         * Sets the name of the school. It requires a `Component`, which allows custom colors and formatting. You can also use `Text`.
         */
        setName(arg0: $Component_): $SchoolTypeJSBuilder;
        registryKey: $ResourceKey<$Registry<$SchoolType>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
        set defaultFocusTag(value: $TagKey_<$Item>);
        set powerAttribute(value: $Holder_<$Attribute>);
        set resistanceAttribute(value: $Holder_<$Attribute>);
        set defaultCastSound(value: $Holder_<$SoundEvent>);
        set damageType(value: $ResourceKey_<$DamageType>);
        set name(value: $Component_);
    }
}
