import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $KubeJEIRecipe } from "@package/com/miiickey/kubejei/kubejs/jei/recipe";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $IDrawable } from "@package/mezz/jei/api/gui/drawable";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IRecipeSlotsView_, $IRecipeSlotsView } from "@package/mezz/jei/api/gui/ingredient";
import { $List, $List_ } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/com/miiickey/kubejei/kubejs/jei/category" {
    export class $KubeJEICategoryBuilder$KubeJEIDrawHandler {
    }
    export interface $KubeJEICategoryBuilder$KubeJEIDrawHandler {
        draw(arg0: $KubeJEIRecipe, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $KubeJEICategoryBuilder$KubeJEIDrawHandler}.
     */
    export type $KubeJEICategoryBuilder$KubeJEIDrawHandler_ = ((arg0: $KubeJEIRecipe, arg1: $IRecipeSlotsView, arg2: $GuiGraphics, arg3: number, arg4: number) => void);
    export class $KubeJEICategoryBuilder {
        setIcon(arg0: $ItemStack_): $KubeJEICategoryBuilder;
        setIcon(arg0: $Supplier_<$IDrawable>): $KubeJEICategoryBuilder;
        setTitle(arg0: $Component_): $KubeJEICategoryBuilder;
        setBackgroundTexture(arg0: $ResourceLocation_): $KubeJEICategoryBuilder;
        getBackgroundTexture(): $ResourceLocation;
        addCatalyst(arg0: $ItemStack_): $KubeJEICategoryBuilder;
        addCatalysts(arg0: $List_<$ItemStack_>): $KubeJEICategoryBuilder;
        setDrawHandler(arg0: $KubeJEICategoryBuilder$KubeJEIDrawHandler_): $KubeJEICategoryBuilder;
        getDrawHandler(): $KubeJEICategoryBuilder$KubeJEIDrawHandler;
        getWidth(): number;
        getHeight(): number;
        getCatalysts(): $List<$ItemStack>;
        getIconSupplier(): $Supplier<$IDrawable>;
        setSize(arg0: number, arg1: number): $KubeJEICategoryBuilder;
        getIcon(): $ItemStack;
        getTitle(): $Component;
        getId(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
        get width(): number;
        get height(): number;
        get catalysts(): $List<$ItemStack>;
        get iconSupplier(): $Supplier<$IDrawable>;
        get id(): $ResourceLocation;
    }
}
