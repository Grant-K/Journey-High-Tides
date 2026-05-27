import { $BlockModificationKubeEvent } from "@package/dev/latvian/mods/kubejs/block";
import { $MenuScreenRegistryKubeEvent, $BlockEntityRendererRegistryKubeEvent, $KeybindRegistryKubeEvent, $EntityRendererRegistryKubeEvent } from "@package/dev/latvian/mods/kubejs/client";
import { $MoldEventJS } from "@package/com/jesz/createdieselgenerators/compat/kubejs";
import { $NaturesAuraEventJS } from "@package/com/falaut/kubejsnaturesaura/event";
import { VillagerProfession, Fluid, Block, Potion, IronsSpellbooksSchools, Item, MobEffect, VillagerType, IronsSpellbooksSpells, PointOfInterestType, ParticleType, CustomStat, CreativeModeTab, NeoforgeFluidType, Attribute, SoundEvent, ArmorMaterial } from "@side-only/startup/events/registry";
import { $CompatibilityEventJS } from "@package/dev/uncandango/kubejstweaks/kubejs/event";
import { $KubeStartupEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $ItemModelPropertiesKubeEvent, $ItemModificationKubeEvent } from "@package/dev/latvian/mods/kubejs/item";
import { $SpecialFluidHandlerEvent, $BoilerHeaterHandlerEvent, $SpecialSpoutHandlerEvent } from "@package/dev/latvian/mods/kubejs/create/events";
import { $SpellSelectionEventJS } from "@package/com/squoshi/irons_spells_js/event";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $RegisterCodecEventJS } from "@package/dev/uncandango/kubejstweaks/kubejs/kjs72/event";
import { $CreativeTabKubeEvent } from "@package/dev/latvian/mods/kubejs/item/creativetab";
import { $ItemToolTierRegistryKubeEvent } from "@package/dev/latvian/mods/kubejs/item/custom";
export * as registry from "@side-only/startup/events/registry";

declare module "@side-only/startup/events" {
}

export {};

declare global {
    namespace KubeJSTweaks {
        function schema(handler: ((event: $RegisterCodecEventJS) => void)): void;
        function checkCompatibility(handler: ((event: $CompatibilityEventJS) => void)): void;
    }
    namespace StartupEvents {
        function registry(type: "armor_material", handler: ((event: ArmorMaterial) => void)): void;
        function registry(type: "block", handler: ((event: Block) => void)): void;
        function registry(type: "potion", handler: ((event: Potion) => void)): void;
        function registry(type: "point_of_interest_type", handler: ((event: PointOfInterestType) => void)): void;
        function registry(type: "creative_mode_tab", handler: ((event: CreativeModeTab) => void)): void;
        function registry(type: "particle_type", handler: ((event: ParticleType) => void)): void;
        function registry(type: "custom_stat", handler: ((event: CustomStat) => void)): void;
        function registry(type: "irons_spellbooks:schools", handler: ((event: IronsSpellbooksSchools) => void)): void;
        function registry(type: "irons_spellbooks:spells", handler: ((event: IronsSpellbooksSpells) => void)): void;
        function registry(type: "villager_type", handler: ((event: VillagerType) => void)): void;
        function registry(type: "attribute", handler: ((event: Attribute) => void)): void;
        function registry(type: "fluid", handler: ((event: Fluid) => void)): void;
        function registry(type: "neoforge:fluid_type", handler: ((event: NeoforgeFluidType) => void)): void;
        function registry(type: "item", handler: ((event: Item) => void)): void;
        function registry(type: "villager_profession", handler: ((event: VillagerProfession) => void)): void;
        function registry(type: "sound_event", handler: ((event: SoundEvent) => void)): void;
        function registry(type: "mob_effect", handler: ((event: MobEffect) => void)): void;
    }
    namespace CreateEvents {
        function boilerHeatHandler(handler: ((event: $BoilerHeaterHandlerEvent) => void)): void;
        function pipeFluidEffect(handler: ((event: $SpecialFluidHandlerEvent) => void)): void;
        function spoutHandler(handler: ((event: $SpecialSpoutHandlerEvent) => void)): void;
    }
    namespace ItemEvents {
        function modelProperties(handler: ((event: $ItemModelPropertiesKubeEvent) => void)): void;
        /**
         * Invoked after all items are registered to modify them.
         */
        function modification(handler: ((event: $ItemModificationKubeEvent) => void)): void;
        /**
         * Invoked when the game is starting up and the item tool tiers are being registered.
         */
        function toolTierRegistry(handler: ((event: $ItemToolTierRegistryKubeEvent) => void)): void;
    }
    namespace NaturesAuraEvents {
        function init(handler: ((event: $NaturesAuraEventJS) => void)): void;
    }
    namespace ClientEvents {
        function blockEntityRendererRegistry(handler: ((event: $BlockEntityRendererRegistryKubeEvent) => void)): void;
        function menuScreenRegistry(handler: ((event: $MenuScreenRegistryKubeEvent) => void)): void;
        function entityRendererRegistry(handler: ((event: $EntityRendererRegistryKubeEvent) => void)): void;
    }
    namespace ISSEvents {
        function spellSelection(handler: ((event: $SpellSelectionEventJS) => void)): void;
    }
    namespace StartupEvents {
        function init(handler: ((event: $KubeStartupEvent) => void)): void;
        function modifyCreativeTab(extra: $ResourceLocation_, handler: ((event: $CreativeTabKubeEvent) => void)): void;
        function postInit(handler: ((event: $KubeStartupEvent) => void)): void;
    }
    namespace CDGEvents {
        function molds(handler: ((event: $MoldEventJS) => void)): void;
    }
    namespace BlockEvents {
        function modification(handler: ((event: $BlockModificationKubeEvent) => void)): void;
    }
    namespace KeyBindEvents {
        function registry(handler: ((event: $KeybindRegistryKubeEvent) => void)): void;
    }
}
