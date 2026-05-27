import { $SequencedAssemblyItemBuilder, $SandpaperItemBuilder } from "@package/dev/latvian/mods/kubejs/create/item";
import { $SchoolTypeJSBuilder } from "@package/com/squoshi/irons_spells_js/spell/school";
import { $SchoolType, $AbstractSpell } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $ParticleType } from "@package/net/minecraft/core/particles";
import { $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $ArmorMaterialBuilder, $ItemBuilder } from "@package/dev/latvian/mods/kubejs/item";
import { $StructureFinderItemBuilder, $AuraCacheItemBuilder } from "@package/com/falaut/kubejsnaturesaura/custom";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $SlabBlockBuilder, $CropBlockBuilder, $PressurePlateBlockBuilder, $FenceGateBlockBuilder, $FenceBlockBuilder, $DoorBlockBuilder, $TrapdoorBlockBuilder, $BasicKubeBlock$Builder, $PillarBlockBuilder, $CarpetBlockBuilder, $StairBlockBuilder, $ButtonBlockBuilder, $FallingBlockBuilder, $WallBlockBuilder, $CardinalBlockBuilder } from "@package/dev/latvian/mods/kubejs/block/custom";
import { $CreativeTabBuilder } from "@package/dev/latvian/mods/kubejs/item/creativetab";
import { $KeyItemBuilder } from "@package/com/benbenlaw/roomopolis/integration/kubejs";
import { $SpellAttributeBuilderJS } from "@package/com/squoshi/irons_spells_js/entity/attribute";
import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $ParticleTypeBuilder, $CustomStatBuilder, $PoiTypeBuilder, $VillagerProfessionBuilder, $MobEffectBuilder, $PotionBuilder, $SoundEventBuilder, $VillagerTypeBuilder } from "@package/dev/latvian/mods/kubejs/misc";
import { $DetectorBlock$Builder } from "@package/dev/latvian/mods/kubejs/block";
import { $ArmorMaterial, $CreativeModeTab, $Item } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $CustomMagicSwordItem$Builder, $CustomSpellBook$Builder, $CustomStaff$Builder } from "@package/com/squoshi/irons_spells_js/item";
import { $ThickFluidBuilder, $ThinFluidBuilder, $FluidBuilder, $FluidTypeBuilder } from "@package/dev/latvian/mods/kubejs/fluid";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $VillagerType, $VillagerProfession } from "@package/net/minecraft/world/entity/npc";
import { $CustomSpell$Builder } from "@package/com/squoshi/irons_spells_js/spell";
import { $ResourceBlockBuilder } from "@package/com/benbenlaw/core/integration/kubejs";
import { $AttributeBuilder } from "@package/dev/latvian/mods/kubejs/entity";
import { $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $RitualDummyItemType } from "@package/com/klikli_dev/occultism_kubejs";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $RegistryKubeEvent } from "@package/dev/latvian/mods/kubejs/registry";
import { $HammerItemBuilder, $CutterItemBuilder } from "@package/dev/bluephs/dgjs/item";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $SmithingTemplateItemBuilder, $ArmorItemBuilder$Boots, $DiggerItemBuilder$Hoe, $DiggerItemBuilder$Shovel, $ArmorItemBuilder$Chestplate, $ArmorItemBuilder$AnimalArmor, $SwordItemBuilder, $DiggerItemBuilder$Axe, $ArmorItemBuilder$Helmet, $DiggerItemBuilder$Pickaxe, $ShearsItemBuilder, $ArmorItemBuilder$Leggings } from "@package/dev/latvian/mods/kubejs/item/custom";

declare module "@side-only/startup/events/registry" {
    class VillagerProfession extends $RegistryKubeEvent<$VillagerProfession> {
        create(name: string): $VillagerProfessionBuilder;
    }
    class Potion extends $RegistryKubeEvent<$Potion> {
        create(name: string): $PotionBuilder;
    }
    class IronsSpellbooksSpells extends $RegistryKubeEvent<$AbstractSpell> {
        create(name: string): $CustomSpell$Builder;
    }
    class CreativeModeTab extends $RegistryKubeEvent<$CreativeModeTab> {
        create(name: string): $CreativeTabBuilder;
    }
    class NeoforgeFluidType extends $RegistryKubeEvent<$FluidType> {
        create(name: string): $FluidTypeBuilder;
    }
    class SoundEvent extends $RegistryKubeEvent<$SoundEvent> {
        create(name: string): $SoundEventBuilder;
    }
    class Fluid extends $RegistryKubeEvent<$Fluid> {
        create(name: string): $FluidBuilder;
        create(name: string, type: "kubejs:thin"): $ThinFluidBuilder;
        create(name: string, type: "kubejs:thick"): $ThickFluidBuilder;
    }
    class Block extends $RegistryKubeEvent<$Block> {
        create(name: string): $BasicKubeBlock$Builder;
        create(name: string, type: "kubejs:detector"): $DetectorBlock$Builder;
        create(name: string, type: "kubejs:slab"): $SlabBlockBuilder;
        create(name: string, type: "kubejs:stairs"): $StairBlockBuilder;
        create(name: string, type: "kubejs:fence"): $FenceBlockBuilder;
        create(name: string, type: "kubejs:wall"): $WallBlockBuilder;
        create(name: string, type: "kubejs:fence_gate"): $FenceGateBlockBuilder;
        create(name: string, type: "kubejs:pressure_plate"): $PressurePlateBlockBuilder;
        create(name: string, type: "kubejs:button"): $ButtonBlockBuilder;
        create(name: string, type: "kubejs:falling"): $FallingBlockBuilder;
        create(name: string, type: "kubejs:crop"): $CropBlockBuilder;
        create(name: string, type: "kubejs:cardinal"): $CardinalBlockBuilder;
        create(name: string, type: "kubejs:carpet"): $CarpetBlockBuilder;
        create(name: string, type: "kubejs:door"): $DoorBlockBuilder;
        create(name: string, type: "kubejs:trapdoor"): $TrapdoorBlockBuilder;
        create(name: string, type: "kubejs:pillar"): $PillarBlockBuilder;
        create(name: string, type: "kubejs:bblcore_resource_block"): $ResourceBlockBuilder;
    }
    class IronsSpellbooksSchools extends $RegistryKubeEvent<$SchoolType> {
        create(name: string): $SchoolTypeJSBuilder;
    }
    class Item extends $RegistryKubeEvent<$Item> {
        create(name: string): $ItemBuilder;
        create(name: string, type: "kubejs:sword"): $SwordItemBuilder;
        create(name: string, type: "kubejs:pickaxe"): $DiggerItemBuilder$Pickaxe;
        create(name: string, type: "kubejs:axe"): $DiggerItemBuilder$Axe;
        create(name: string, type: "kubejs:shovel"): $DiggerItemBuilder$Shovel;
        create(name: string, type: "kubejs:hoe"): $DiggerItemBuilder$Hoe;
        create(name: string, type: "kubejs:shears"): $ShearsItemBuilder;
        create(name: string, type: "kubejs:helmet"): $ArmorItemBuilder$Helmet;
        create(name: string, type: "kubejs:chestplate"): $ArmorItemBuilder$Chestplate;
        create(name: string, type: "kubejs:leggings"): $ArmorItemBuilder$Leggings;
        create(name: string, type: "kubejs:boots"): $ArmorItemBuilder$Boots;
        create(name: string, type: "kubejs:animal_armor"): $ArmorItemBuilder$AnimalArmor;
        create(name: string, type: "kubejs:smithing_template"): $SmithingTemplateItemBuilder;
        create(name: string, type: "naturesaura:aura_cache"): $AuraCacheItemBuilder;
        create(name: string, type: "naturesaura:structure_finder"): $StructureFinderItemBuilder;
        create(name: string, type: "irons_spells_js:magic_sword"): $CustomMagicSwordItem$Builder;
        create(name: string, type: "irons_spells_js:staff"): $CustomStaff$Builder;
        create(name: string, type: "irons_spells_js:spellbook"): $CustomSpellBook$Builder;
        create(name: string, type: "kubejs:roomopolis_key"): $KeyItemBuilder;
        create(name: string, type: "createdieselgenerators:hammer"): $HammerItemBuilder;
        create(name: string, type: "createdieselgenerators:wire_cutters"): $CutterItemBuilder;
        create(name: string, type: "occultism_kubejs:ritual_dummy"): $RitualDummyItemType;
        create(name: string, type: "create:sequenced_assembly"): $SequencedAssemblyItemBuilder;
        create(name: string, type: "create:sandpaper"): $SandpaperItemBuilder;
    }
    class MobEffect extends $RegistryKubeEvent<$MobEffect> {
        create(name: string): $MobEffectBuilder;
    }
    class VillagerType extends $RegistryKubeEvent<$VillagerType> {
        create(name: string): $VillagerTypeBuilder;
    }
    class PointOfInterestType extends $RegistryKubeEvent<$PoiType> {
        create(name: string): $PoiTypeBuilder;
    }
    class ParticleType extends $RegistryKubeEvent<$ParticleType<any>> {
        create(name: string): $ParticleTypeBuilder;
    }
    class CustomStat extends $RegistryKubeEvent<$ResourceLocation> {
        create(name: string): $CustomStatBuilder;
    }
    class Attribute extends $RegistryKubeEvent<$Attribute> {
        create(name: string): $AttributeBuilder;
        create(name: string, type: "irons_spells_js:spell"): $SpellAttributeBuilderJS;
    }
    class ArmorMaterial extends $RegistryKubeEvent<$ArmorMaterial> {
        create(name: string): $ArmorMaterialBuilder;
    }
}
