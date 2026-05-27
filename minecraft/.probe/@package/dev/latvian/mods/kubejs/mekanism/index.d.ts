import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Item } from "@package/net/minecraft/world/item";
import { $DataResult } from "@package/com/mojang/serialization";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $List_ } from "@package/java/util";
import { $ChemicalStackIngredient } from "@package/mekanism/api/recipes/ingredients";
import { $ChemicalStack, $Chemical } from "@package/mekanism/api/chemical";
import { $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Holder_, $Holder, $Registry } from "@package/net/minecraft/core";
import { $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $ChemicalIngredient } from "@package/mekanism/api/recipes/ingredients/chemical";
import { $Object } from "@package/java/lang";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/dev/latvian/mods/kubejs/mekanism" {
    export class $KubeChemicalBuilder$CleanSlurry extends $KubeChemicalBuilder {
        registryKey: $ResourceKey<$Registry<$Chemical>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    export class $KubeChemicalBuilder$Liquid extends $KubeChemicalBuilder {
        registryKey: $ResourceKey<$Registry<$Chemical>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    export class $MekanismChemicalWrapper {
        static ingredientStack(ingredient: $ChemicalIngredient, amount: number): $ChemicalStackIngredient;
        static stackOf(from: $Object): $ChemicalStack;
        static ingredientOf(from: $Object): $ChemicalIngredient;
        static stackIngredientOf(from: $Object): $ChemicalStackIngredient;
        static readIngredient(reader: $StringReader): $DataResult<$ChemicalIngredient>;
        static readStack(reader: $StringReader): $DataResult<$ChemicalStack>;
        static readStackIngredient(reader: $StringReader): $DataResult<$ChemicalStackIngredient>;
        static ingredientExcept(ingredient: $ChemicalIngredient, except: $ChemicalIngredient): $ChemicalIngredient;
        static ingredientIntersection(children: $List_<$ChemicalIngredient>): $ChemicalIngredient;
        static stack(chemical: $Holder_<$Chemical>, amount: number): $ChemicalStack;
        static of(from: $Object): $Holder<$Chemical>;
        static read(reader: $StringReader): $DataResult<$Holder<$Chemical>>;
        static EMPTY_STACK_RESULT: $DataResult<$ChemicalStack>;
        static CHEMICAL_STACK_INGREDIENT_TYPE_INFO: $TypeInfo;
        static CHEMICAL_STACK_TYPE_INFO: $TypeInfo;
        static CHEMICAL_INGREDIENT_TYPE_INFO: $TypeInfo;
        static CHEMICAL_HOLDER_TYPE_INFO: $TypeInfo;
        static EMPTY_INGREDIENT_RESULT: $DataResult<$ChemicalIngredient>;
        static CHEMICAL_TYPE_INFO: $TypeInfo;
    }
    export interface $MekanismChemicalWrapper {
    }
    export class $KubeChemicalBuilder$DirtySlurry extends $KubeChemicalBuilder {
        registryKey: $ResourceKey<$Registry<$Chemical>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    export class $KubeChemicalBuilder$InfuseType extends $KubeChemicalBuilder {
        registryKey: $ResourceKey<$Registry<$Chemical>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    export class $KubeChemicalBuilder extends $BuilderBase<$Chemical> {
        fuel(burnTicks: $TickDuration_, energyDensity: number): this;
        ore(oreTag: $TagKey_<$Item>): this;
        tint(tint: $KubeColor_): this;
        heatedCoolant(chemical: $Holder_<$Chemical>, thermalEnthalpy: number, conductivity: number, temperature: number): this;
        heatedCoolant(chemical: $Holder_<$Chemical>, thermalEnthalpy: number, conductivity: number): this;
        gaseous(): this;
        radiation(radioactivity: number): this;
        cooledCoolant(chemical: $Holder_<$Chemical>, thermalEnthalpy: number, conductivity: number): this;
        registryKey: $ResourceKey<$Registry<$Chemical>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    export class $KubeChemicalBuilder$Pigment extends $KubeChemicalBuilder {
        registryKey: $ResourceKey<$Registry<$Chemical>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    export class $KubeChemicalBuilder$Default extends $KubeChemicalBuilder {
        texture(texture: $ResourceLocation_): this;
        registryKey: $ResourceKey<$Registry<$Chemical>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
}
