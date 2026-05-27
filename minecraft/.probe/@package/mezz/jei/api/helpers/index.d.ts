import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IDrawableBuilder, $IDrawable, $IDrawableAnimated, $IDrawableAnimated$StartDirection_, $IDrawableStatic } from "@package/mezz/jei/api/gui/drawable";
import { $IVanillaRecipeFactory } from "@package/mezz/jei/api/recipe/vanilla";
import { $ICraftingGridHelper } from "@package/mezz/jei/api/gui/ingredient";
import { $List, $Set, $List_ } from "@package/java/util";
import { $IIngredientVisibility, $IIngredientManager } from "@package/mezz/jei/api/runtime";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
import { $Holder_ } from "@package/net/minecraft/core";
import { $IIngredientType_, $IIngredientTypeWithSubtypes, $IIngredientType, $ITypedIngredient, $IIngredientHelper } from "@package/mezz/jei/api/ingredients";
import { $Stream } from "@package/java/util/stream";
import { $IRecipeManager, $IFocusFactory, $RecipeType } from "@package/mezz/jei/api/recipe";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $UidContext_ } from "@package/mezz/jei/api/ingredients/subtypes";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Object, $Class } from "@package/java/lang";
import { $ITickTimer } from "@package/mezz/jei/api/gui";
import { $IScrollGridWidgetFactory, $IScrollBoxWidget, $IRecipeWidget } from "@package/mezz/jei/api/gui/widgets";

declare module "@package/mezz/jei/api/helpers" {
    export class $ICodecHelper {
    }
    export interface $ICodecHelper {
        getRecipeHolderCodec<T extends $RecipeHolder<never>>(): $Codec<T>;
        getSlowRecipeCategoryCodec<T>(arg0: $IRecipeCategory<T>, arg1: $IRecipeManager): $Codec<T>;
        getIngredientTypeCodec(): $Codec<$IIngredientType<never>>;
        getRecipeTypeCodec(arg0: $IRecipeManager): $Codec<$RecipeType<never>>;
        getTypedIngredientCodec(): $MapCodec<$ITypedIngredient<never>>;
        getTypedIngredientCodec<T>(arg0: $IIngredientType_<T>): $Codec<$ITypedIngredient<T>>;
        get recipeHolderCodec(): $Codec<T>;
        get ingredientTypeCodec(): $Codec<$IIngredientType<never>>;
    }
    export class $IPlatformFluidHelper<T> {
    }
    export interface $IPlatformFluidHelper<T> {
        bucketVolume(): number;
        getFluidIngredientType(): $IIngredientTypeWithSubtypes<$Fluid, T>;
        create(arg0: $Holder_<$Fluid>, arg1: number, arg2: $DataComponentPatch_): T;
        create(arg0: $Holder_<$Fluid>, arg1: number): T;
        get fluidIngredientType(): $IIngredientTypeWithSubtypes<$Fluid, T>;
    }
    export class $IStackHelper {
    }
    export interface $IStackHelper {
        getUidForStack(arg0: $ItemStack_, arg1: $UidContext_): $Object;
        getUidForStack(arg0: $ITypedIngredient<$ItemStack_>, arg1: $UidContext_): $Object;
        /**
         * @deprecated
         */
        getUniqueIdentifierForStack(arg0: $ItemStack_, arg1: $UidContext_): string;
        isEquivalent(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $UidContext_): boolean;
    }
    export class $IJeiHelpers {
    }
    export interface $IJeiHelpers {
        getGuiHelper(): $IGuiHelper;
        getRecipeType(arg0: $ResourceLocation_): ($RecipeType<never>) | undefined;
        getRecipeType<T>(arg0: $ResourceLocation_, arg1: $Class<T>): ($RecipeType<T>) | undefined;
        getIngredientManager(): $IIngredientManager;
        getVanillaRecipeFactory(): $IVanillaRecipeFactory;
        getPlatformFluidHelper(): $IPlatformFluidHelper<never>;
        getModIdHelper(): $IModIdHelper;
        getStackHelper(): $IStackHelper;
        getAllRecipeTypes(): $Stream<$RecipeType<never>>;
        getIngredientVisibility(): $IIngredientVisibility;
        getColorHelper(): $IColorHelper;
        getFocusFactory(): $IFocusFactory;
        getCodecHelper(): $ICodecHelper;
        get guiHelper(): $IGuiHelper;
        get ingredientManager(): $IIngredientManager;
        get vanillaRecipeFactory(): $IVanillaRecipeFactory;
        get platformFluidHelper(): $IPlatformFluidHelper<never>;
        get modIdHelper(): $IModIdHelper;
        get stackHelper(): $IStackHelper;
        get allRecipeTypes(): $Stream<$RecipeType<never>>;
        get ingredientVisibility(): $IIngredientVisibility;
        get colorHelper(): $IColorHelper;
        get focusFactory(): $IFocusFactory;
        get codecHelper(): $ICodecHelper;
    }
    export class $IColorHelper {
    }
    export interface $IColorHelper {
        getColors(arg0: $TextureAtlasSprite, arg1: number, arg2: number): $List<number>;
        getColors(arg0: $ItemStack_, arg1: number): $List<number>;
        getClosestColorName(arg0: number): string;
    }
    export class $IModIdHelper {
    }
    export interface $IModIdHelper {
        getFormattedModNameForModId(arg0: string): string;
        isDisplayingModNameEnabled(): boolean;
        /**
         * @deprecated
         */
        addModNameToIngredientTooltip<T>(arg0: $List_<$Component_>, arg1: $ITypedIngredient<T>): $List<$Component>;
        /**
         * @deprecated
         */
        addModNameToIngredientTooltip<T>(arg0: $List_<$Component_>, arg1: T, arg2: $IIngredientHelper<T>): $List<$Component>;
        getModNameForTooltip<T>(arg0: $ITypedIngredient<T>): ($Component) | undefined;
        getModAliases(arg0: string): $Set<string>;
        getModNameForModId(arg0: string): string;
        get displayingModNameEnabled(): boolean;
    }
    export class $IGuiHelper {
    }
    export interface $IGuiHelper {
        getRecipeFlameEmpty(): $IDrawableStatic;
        createAnimatedRecipeArrow(arg0: number): $IDrawableAnimated;
        createAnimatedRecipeFlame(arg0: number): $IDrawableAnimated;
        createWidgetFromDrawable(arg0: $IDrawable, arg1: number, arg2: number): $IRecipeWidget;
        createBlankDrawable(arg0: number, arg1: number): $IDrawableStatic;
        createCraftingGridHelper(): $ICraftingGridHelper;
        /**
         * @deprecated
         */
        createScrollGridFactory(arg0: number, arg1: number): $IScrollGridWidgetFactory<never>;
        /**
         * @deprecated
         */
        createScrollBoxWidget(arg0: $IDrawable, arg1: number, arg2: number, arg3: number): $IScrollBoxWidget;
        createScrollBoxWidget(arg0: number, arg1: number, arg2: number, arg3: number): $IScrollBoxWidget;
        createTickTimer(arg0: number, arg1: number, arg2: boolean): $ITickTimer;
        createAnimatedDrawable(arg0: $IDrawableStatic, arg1: $ITickTimer, arg2: $IDrawableAnimated$StartDirection_): $IDrawableAnimated;
        createAnimatedDrawable(arg0: $IDrawableStatic, arg1: number, arg2: $IDrawableAnimated$StartDirection_, arg3: boolean): $IDrawableAnimated;
        getRecipeFlameFilled(): $IDrawableStatic;
        /**
         * @deprecated
         */
        getScrollBoxScrollbarExtraWidth(): number;
        createDrawableItemStack(arg0: $ItemStack_): $IDrawable;
        createDrawableItemLike(arg0: $ItemLike_): $IDrawable;
        getRecipeArrow(): $IDrawableStatic;
        getRecipeArrowFilled(): $IDrawableStatic;
        getRecipePlusSign(): $IDrawableStatic;
        getOutputSlot(): $IDrawableStatic;
        createDrawable(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number): $IDrawableStatic;
        createDrawableIngredient<V>(arg0: $ITypedIngredient<V>): $IDrawable;
        createDrawableIngredient<V>(arg0: $IIngredientType_<V>, arg1: V): $IDrawable;
        drawableBuilder(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number): $IDrawableBuilder;
        getSlotDrawable(): $IDrawableStatic;
        get recipeFlameEmpty(): $IDrawableStatic;
        get recipeFlameFilled(): $IDrawableStatic;
        get scrollBoxScrollbarExtraWidth(): number;
        get recipeArrow(): $IDrawableStatic;
        get recipeArrowFilled(): $IDrawableStatic;
        get recipePlusSign(): $IDrawableStatic;
        get outputSlot(): $IDrawableStatic;
        get slotDrawable(): $IDrawableStatic;
    }
}
