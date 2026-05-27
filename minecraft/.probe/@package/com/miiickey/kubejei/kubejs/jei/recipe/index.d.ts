import { $IRecipeLayoutBuilder, $IRecipeSlotBuilder } from "@package/mezz/jei/api/gui/builder";
import { $Consumer_ } from "@package/java/util/function";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IGuiHelper } from "@package/mezz/jei/api/helpers";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $List, $List_ } from "@package/java/util";
import { $Record } from "@package/java/lang";

declare module "@package/com/miiickey/kubejei/kubejs/jei/recipe" {
    export class $KubeJEIRecipeWrapper extends $Record {
        recipes(): $List<$KubeJEIRecipe>;
        add(arg0: $Consumer_<$KubeJEIRecipeLayout>): $KubeJEIRecipeWrapper;
        add(arg0: $ResourceLocation_, arg1: $Consumer_<$KubeJEIRecipeLayout>): $KubeJEIRecipeWrapper;
        constructor(recipes: $List_<$KubeJEIRecipe>);
    }
    /**
     * Values that may be interpreted as {@link $KubeJEIRecipeWrapper}.
     */
    export type $KubeJEIRecipeWrapper_ = { recipes?: $List_<$KubeJEIRecipe>,  } | [recipes?: $List_<$KubeJEIRecipe>, ];
    export class $KubeJEIRecipeLayout extends $Record {
        guiHelper(): $IGuiHelper;
        addInput(arg0: number, arg1: number): $KubeJEIRecipeSlot;
        addCatalyst(arg0: number, arg1: number): $KubeJEIRecipeSlot;
        addRenderOnly(arg0: number, arg1: number): $KubeJEIRecipeSlot;
        addOutput(arg0: number, arg1: number): $KubeJEIRecipeSlot;
        builder(): $IRecipeLayoutBuilder;
        constructor(builder: $IRecipeLayoutBuilder, guiHelper: $IGuiHelper);
    }
    /**
     * Values that may be interpreted as {@link $KubeJEIRecipeLayout}.
     */
    export type $KubeJEIRecipeLayout_ = { guiHelper?: $IGuiHelper, builder?: $IRecipeLayoutBuilder,  } | [guiHelper?: $IGuiHelper, builder?: $IRecipeLayoutBuilder, ];
    export class $KubeJEIRecipe {
        setId(arg0: $ResourceLocation_): void;
        getId(): $ResourceLocation;
        constructor(arg0: $Consumer_<$KubeJEIRecipeLayout>);
    }
    export class $KubeJEIRecipeSlot extends $Record {
        setOutputSlotBackground(): $KubeJEIRecipeSlot;
        setStandardSlotBackground(): $KubeJEIRecipeSlot;
        setSlotName(arg0: string): $KubeJEIRecipeSlot;
        setOverlay(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number): $KubeJEIRecipeSlot;
        setTooltip(arg0: $List_<$Component_>): $KubeJEIRecipeSlot;
        guiHelper(): $IGuiHelper;
        addItemStack(arg0: $ItemStack_): $KubeJEIRecipeSlot;
        setBackground(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number): $KubeJEIRecipeSlot;
        addIngredient(arg0: $Ingredient_): $KubeJEIRecipeSlot;
        addFluidStack(arg0: $FluidStack_): $KubeJEIRecipeSlot;
        builder(): $IRecipeSlotBuilder;
        constructor(builder: $IRecipeSlotBuilder, guiHelper: $IGuiHelper);
        set slotName(value: string);
        set tooltip(value: $List_<$Component_>);
    }
    /**
     * Values that may be interpreted as {@link $KubeJEIRecipeSlot}.
     */
    export type $KubeJEIRecipeSlot_ = { guiHelper?: $IGuiHelper, builder?: $IRecipeSlotBuilder,  } | [guiHelper?: $IGuiHelper, builder?: $IRecipeSlotBuilder, ];
}
