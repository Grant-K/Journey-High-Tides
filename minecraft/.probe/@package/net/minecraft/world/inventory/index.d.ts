import { $Recipe, $RecipeHolder, $CraftingInput, $AbstractCookingRecipe, $CraftingInput$Positioned, $RecipeHolder_, $CraftingRecipe, $SingleRecipeInput, $StonecutterRecipe, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Codec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $MenuTypeAccessor } from "@package/wily/factoryapi/mixin/base";
import { $EquipmentSlot_, $EquipmentSlot, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $RecipeBookCategories } from "@package/net/minecraft/client";
import { $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $AccessorCraftingMenu, $AccessorCrafterMenu, $AccessorInventoryMenu } from "@package/com/illusivesoulworks/polymorph/mixin/core";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $ScreenHandlerInvoker } from "@package/io/wispforest/owo/mixin";
import { $SlotAccessor as $SlotAccessor$1 } from "@package/io/wispforest/owo/mixin/ui";
import { $ContainerListener as $ContainerListener$1, $SimpleContainer, $Container } from "@package/net/minecraft/world";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IMenuTypeExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $MerchantOffer, $MerchantOffers, $Merchant, $ItemCost_ } from "@package/net/minecraft/world/item/trading";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SyncedProperty, $OwoScreenHandler, $ScreenInternals$LocalPacket_, $ScreenInternals$SyncPropertiesPacket_ } from "@package/io/wispforest/owo/client/screens";
import { $EnchantmentMenuAccessor } from "@package/fuzs/easymagic/mixin/accessor";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player, $StackedContents, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $CraftingContainerAccess, $ContainerAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors";
import { $CraftingMenuAccessor, $SlotAccessor } from "@package/io/wispforest/accessories/mixin";
import { $Endec } from "@package/io/wispforest/endec";
import { $ContainerLevelAccessMixin } from "@package/com/railwayteam/railways/neoforge/mixin";
import { $ArmorSlotExtension } from "@package/io/wispforest/accessories/pond";
import { $MenuTypeKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AbstractContainerMenuAccessor as $AbstractContainerMenuAccessor$1, $CraftingMenuAccessor as $CraftingMenuAccessor$1 } from "@package/com/aetherteam/aether/mixin/mixins/common/accessor";
import { $Set_, $Map, $OptionalInt, $List, $List_ } from "@package/java/util";
import { $AbstractHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $SlotAccessor as $SlotAccessor$2 } from "@package/net/blay09/mods/balm/mixin";
import { $AbstractFurnaceMenuAccessor } from "@package/it/hurts/octostudios/immersiveui/mixin";
import { $Consumer_, $BiFunction, $Predicate_, $Predicate, $BiConsumer_, $BiFunction_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $RegistryAccess, $Registry, $Holder_, $Holder, $NonNullList } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $OwoScreenHandlerExtension, $OwoSlotExtension } from "@package/io/wispforest/owo/util/pond";
import { $EnchantmentInstance } from "@package/net/minecraft/world/item/enchantment";
import { $PositionedRectangle } from "@package/io/wispforest/owo/ui/core";
import { $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Enum, $Record, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $AccessorMerchantMenu } from "@package/org/violetmoon/quark/mixin/mixins/accessor";
import { $Stream } from "@package/java/util/stream";
import { $AbstractContainerMenuAccessor } from "@package/net/blay09/mods/inventoryessentials/mixin";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $AccessorTransientCraftingContainer } from "@package/xfacthd/framedblocks/mixin";
import { $BlockEntity, $EnderChestBlockEntity, $BannerPattern } from "@package/net/minecraft/world/level/block/entity";
import { $ReflectiveEndecBuilder } from "@package/io/wispforest/endec/impl";
export * as tooltip from "@package/net/minecraft/world/inventory/tooltip";

declare module "@package/net/minecraft/world/inventory" {
    export class $FurnaceFuelSlot extends $Slot {
        static isBucket(arg0: $ItemStack_): boolean;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $AbstractFurnaceMenu, arg1: $Container, arg2: number, arg3: number, arg4: number);
    }
    export class $InventoryMenu extends $RecipeBookMenu<$CraftingInput, $CraftingRecipe> implements $AccessorInventoryMenu {
        static isHotbarSlot(arg0: number): boolean;
        getCraftSlots(): $CraftingContainer;
        getResultSlots(): $ResultContainer;
        getOwner(): $Player;
        static CRAFT_SLOT_END: number;
        static BLOCK_ATLAS: $ResourceLocation;
        static EMPTY_ARMOR_SLOT_BOOTS: $ResourceLocation;
        static TEXTURE_EMPTY_SLOTS: $Map<$EquipmentSlot, $ResourceLocation>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static USE_ROW_SLOT_START: number;
        static EMPTY_ARMOR_SLOT_CHESTPLATE: $ResourceLocation;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static CRAFT_SLOT_COUNT: number;
        static SHIELD_SLOT: number;
        static ARMOR_SLOT_START: number;
        static ARMOR_SLOT_COUNT: number;
        static INV_SLOT_START: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static CRAFT_SLOT_START: number;
        owner: $Player;
        carried: $ItemStack;
        static EMPTY_ARMOR_SLOT_HELMET: $ResourceLocation;
        static SLOT_IDS: $EquipmentSlot[];
        stateId: number;
        active: boolean;
        lastSlots: $NonNullList<$ItemStack>;
        static ARMOR_SLOT_END: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static USE_ROW_SLOT_END: number;
        static EMPTY_ARMOR_SLOT_SHIELD: $ResourceLocation;
        static SLOT_CLICKED_OUTSIDE: number;
        static INV_SLOT_END: number;
        static EMPTY_ARMOR_SLOT_LEGGINGS: $ResourceLocation;
        static CONTAINER_ID: number;
        constructor(arg0: $Inventory, arg1: boolean, arg2: $Player);
        get craftSlots(): $CraftingContainer;
        get resultSlots(): $ResultContainer;
    }
    export class $BeaconMenu$PaymentSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
    }
    export class $MerchantResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $Player, arg1: $Merchant, arg2: $MerchantContainer, arg3: number, arg4: number, arg5: number);
    }
    export class $SlotRanges {
        static nameToIds(arg0: string): $SlotRange;
        static singleSlotNames(): $Stream<string>;
        static allNames(): $Stream<string>;
        static CODEC: $Codec<$SlotRange>;
        constructor();
    }
    export class $ArmorSlot extends $Slot implements $ArmorSlotExtension {
        setAtlasLocation(atlasLocation: $ResourceLocation_): $ArmorSlot;
        getAtlasLocation(): $ResourceLocation;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $Container, arg1: $LivingEntity, arg2: $EquipmentSlot_, arg3: number, arg4: number, arg5: number, arg6: $ResourceLocation_);
    }
    export class $ResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $Player, arg1: $CraftingContainer, arg2: $Container, arg3: number, arg4: number, arg5: number);
    }
    export class $HorseInventoryMenu extends $AbstractContainerMenu {
        carried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $Container, arg3: $AbstractHorse, arg4: number);
    }
    export class $BrewingStandMenu$IngredientsSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
    }
    export class $SmithingMenu extends $ItemCombinerMenu {
        canMoveIntoInputSlots(arg0: $ItemStack_): boolean;
        handler$bjn001$immersiveui$onTake(player: $Player, stack: $ItemStack_, ci: $CallbackInfo): void;
        carried: $ItemStack;
        access: $ContainerLevelAccess;
        static ADDITIONAL_SLOT: number;
        static TEMPLATE_SLOT: number;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static ADDITIONAL_SLOT_X_PLACEMENT: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static BASE_SLOT_X_PLACEMENT: number;
        static BASE_SLOT: number;
        containerId: number;
        static SLOT_Y_PLACEMENT: number;
        static TEMPLATE_SLOT_X_PLACEMENT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
        constructor(arg0: number, arg1: $Inventory);
    }
    export class $MenuType<T extends $AbstractContainerMenu> implements $FeatureElement, $IMenuTypeExtension<T>, $MenuTypeAccessor, $MenuTypeKJS {
        requiredFeatures(): $FeatureFlagSet;
        kjs$getKey(): $ResourceKey<any>;
        kjs$getId(): string;
        create(arg0: number, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf): T;
        create(arg0: number, arg1: $Inventory): T;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        kjs$getRegistryId(): $ResourceKey<$Registry<$MenuType<never>>>;
        kjs$getRegistry(): $Registry<$MenuType<never>>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        asHolder(): $Holder<T>;
        getIdLocation(): $ResourceLocation;
        getMod(): string;
        getTagKeys(): $List<$TagKey<T>>;
        getTags(): $List<$ResourceLocation>;
        hasTag(tag: $ResourceLocation_): boolean;
        getConstructor(): $MenuType$MenuSupplier<never>;
        static ENCHANTMENT: $MenuType<$EnchantmentMenu>;
        static LOOM: $MenuType<$LoomMenu>;
        static BLAST_FURNACE: $MenuType<$BlastFurnaceMenu>;
        static CARTOGRAPHY_TABLE: $MenuType<$CartographyTableMenu>;
        static BEACON: $MenuType<$BeaconMenu>;
        static MERCHANT: $MenuType<$MerchantMenu>;
        static CRAFTER_3x3: $MenuType<$CrafterMenu>;
        static FURNACE: $MenuType<$FurnaceMenu>;
        static ANVIL: $MenuType<$AnvilMenu>;
        static STONECUTTER: $MenuType<$StonecutterMenu>;
        static GENERIC_3x3: $MenuType<$DispenserMenu>;
        static CRAFTING: $MenuType<$CraftingMenu>;
        static GENERIC_9x1: $MenuType<$ChestMenu>;
        static GENERIC_9x2: $MenuType<$ChestMenu>;
        static GENERIC_9x3: $MenuType<$ChestMenu>;
        static GENERIC_9x4: $MenuType<$ChestMenu>;
        static GENERIC_9x5: $MenuType<$ChestMenu>;
        static GENERIC_9x6: $MenuType<$ChestMenu>;
        static BREWING_STAND: $MenuType<$BrewingStandMenu>;
        static SMOKER: $MenuType<$SmokerMenu>;
        constructor: $MenuType$MenuSupplier<T>;
        static SMITHING: $MenuType<$SmithingMenu>;
        static HOPPER: $MenuType<$HopperMenu>;
        static LECTERN: $MenuType<$LecternMenu>;
        static GRINDSTONE: $MenuType<$GrindstoneMenu>;
        static SHULKER_BOX: $MenuType<$ShulkerBoxMenu>;
        constructor(arg0: $MenuType$MenuSupplier_<T>, arg1: $FeatureFlagSet);
        get idLocation(): $ResourceLocation;
        get mod(): string;
        get tagKeys(): $List<$TagKey<T>>;
        get tags(): $List<$ResourceLocation>;
    }
    /**
     * Values that may be interpreted as {@link $MenuType}.
     */
    export type $MenuType_<T> = RegistryTypes.Menu;
    export class $MerchantContainer implements $Container {
        stillValid(arg0: $Player): boolean;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        setChanged(): void;
        setItem(arg0: number, arg1: $ItemStack_): void;
        clearContent(): void;
        updateSellItem(): void;
        setSelectionHint(arg0: number): void;
        getFutureXp(): number;
        getActiveOffer(): $MerchantOffer;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getItem(arg0: number): $ItemStack;
        isEmpty(): boolean;
        getMaxStackSize(): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        self(): $Container;
        clear(): void;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        asContainer(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        isEmpty(): boolean;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(match: $ItemPredicate_): number;
        count(): number;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        constructor(arg0: $Merchant);
        get containerSize(): number;
        set selectionHint(value: number);
        get futureXp(): number;
        get activeOffer(): $MerchantOffer;
        set transferCooldown(value: number);
        get width(): number;
        get height(): number;
        get mutable(): boolean;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BeaconMenu extends $AbstractContainerMenu {
        getLevels(): number;
        static decodeEffect(arg0: number): $Holder<$MobEffect>;
        static encodeEffect(arg0: $Holder_<$MobEffect>): number;
        getPrimaryEffect(): $Holder<$MobEffect>;
        getSecondaryEffect(): $Holder<$MobEffect>;
        updateEffects(arg0: ($Holder_<$MobEffect>) | undefined, arg1: ($Holder_<$MobEffect>) | undefined): void;
        hasPayment(): boolean;
        carried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Container, arg2: $ContainerData, arg3: $ContainerLevelAccess_);
        constructor(arg0: number, arg1: $Container);
        get levels(): number;
        get primaryEffect(): $Holder<$MobEffect>;
        get secondaryEffect(): $Holder<$MobEffect>;
    }
    export class $CraftingMenu extends $RecipeBookMenu<$CraftingInput, $CraftingRecipe> implements $CraftingMenuAccessor, $AccessorCraftingMenu, $CraftingMenuAccessor$1 {
        beginPlacingRecipe(): void;
        finishPlacingRecipe(arg0: $RecipeHolder_<$CraftingRecipe>): void;
        static slotChangedCraftingGrid$accessories_$md$68cb88$0(arg0: $AbstractContainerMenu, arg1: $Level_, arg2: $Player, arg3: $CraftingContainer, arg4: $ResultContainer, arg5: $RecipeHolder_<any>): void;
        static callSlotChangedCraftingGrid$aether_$md$68cb88$3(arg0: $AbstractContainerMenu, arg1: $Level_, arg2: $Player, arg3: $CraftingContainer, arg4: $ResultContainer, arg5: $RecipeHolder_<any>): void;
        getCraftSlots(): $CraftingContainer;
        getPlayer(): $Player;
        getResultSlots(): $ResultContainer;
        carried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
        get craftSlots(): $CraftingContainer;
        get resultSlots(): $ResultContainer;
    }
    export class $CrafterSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $Container, arg1: number, arg2: number, arg3: number, arg4: $CrafterMenu);
    }
    export class $ChestMenu extends $AbstractContainerMenu {
        static threeRows(arg0: number, arg1: $Inventory, arg2: $Container): $ChestMenu;
        static threeRows(arg0: number, arg1: $Inventory): $ChestMenu;
        static oneRow(arg0: number, arg1: $Inventory): $ChestMenu;
        static twoRows(arg0: number, arg1: $Inventory): $ChestMenu;
        static fourRows(arg0: number, arg1: $Inventory): $ChestMenu;
        static fiveRows(arg0: number, arg1: $Inventory): $ChestMenu;
        static sixRows(arg0: number, arg1: $Inventory, arg2: $Container): $ChestMenu;
        static sixRows(arg0: number, arg1: $Inventory): $ChestMenu;
        getRowCount(): number;
        getContainer(): $Container;
        carried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $Container, arg4: number);
        get rowCount(): number;
        get container(): $Container;
    }
    export class $SmokerMenu extends $AbstractFurnaceMenu {
        carried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $Container, arg3: $ContainerData);
    }
    export class $ClickAction extends $Enum<$ClickAction> {
        static values(): $ClickAction[];
        static valueOf(arg0: string): $ClickAction;
        static SECONDARY: $ClickAction;
        static PRIMARY: $ClickAction;
    }
    /**
     * Values that may be interpreted as {@link $ClickAction}.
     */
    export type $ClickAction_ = "primary" | "secondary";
    export class $BrewingStandMenu extends $AbstractContainerMenu {
        getFuel(): number;
        getBrewingTicks(): number;
        carried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $Container, arg3: $ContainerData);
        constructor(arg0: number, arg1: $Inventory);
        get fuel(): number;
        get brewingTicks(): number;
    }
    export class $BrewingStandMenu$PotionSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
    }
    export class $MenuType$MenuSupplier<T extends $AbstractContainerMenu> {
    }
    export interface $MenuType$MenuSupplier<T extends $AbstractContainerMenu> {
        create(arg0: number, arg1: $Inventory): T;
    }
    /**
     * Values that may be interpreted as {@link $MenuType$MenuSupplier}.
     */
    export type $MenuType$MenuSupplier_<T> = ((arg0: number, arg1: $Inventory) => T);
    export class $LecternMenu extends $AbstractContainerMenu {
        getPage(): number;
        getBook(): $ItemStack;
        carried: $ItemStack;
        static BUTTON_PREV_PAGE: number;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static BUTTON_PAGE_JUMP_RANGE_START: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static BUTTON_NEXT_PAGE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static BUTTON_TAKE_BOOK: number;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Container, arg2: $ContainerData);
        constructor(arg0: number);
        get page(): number;
        get book(): $ItemStack;
    }
    export class $CraftingContainer {
    }
    export interface $CraftingContainer extends $Container, $StackedContentsCompatible {
        getItems(): $List<$ItemStack>;
        asCraftInput(): $CraftingInput;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        getWidth(): number;
        getHeight(): number;
        get items(): $List<$ItemStack>;
        get width(): number;
        get height(): number;
    }
    export class $LoomMenu extends $AbstractContainerMenu {
        modifyExpressionValue$mii000$quark$getLimit(arg0: number): number;
        registerUpdateListener(arg0: $Runnable_): void;
        wrapOperation$bgi000$supplementaries$supp$flagStuff(instance: $ItemStack_, original: $Operation_<any>): $Item;
        getBannerSlot(): $Slot;
        getDyeSlot(): $Slot;
        getPatternSlot(): $Slot;
        getSelectedBannerPatternIndex(): number;
        getSelectablePatterns(): $List<$Holder<$BannerPattern>>;
        getResultSlot(): $Slot;
        carried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
        get bannerSlot(): $Slot;
        get dyeSlot(): $Slot;
        get patternSlot(): $Slot;
        get selectedBannerPatternIndex(): number;
        get selectablePatterns(): $List<$Holder<$BannerPattern>>;
        get resultSlot(): $Slot;
    }
    export class $DispenserMenu extends $AbstractContainerMenu {
        carried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $Container);
        constructor(arg0: number, arg1: $Inventory);
    }
    export class $StackedContentsCompatible {
    }
    export interface $StackedContentsCompatible {
        fillStackedContents(arg0: $StackedContents): void;
    }
    /**
     * Values that may be interpreted as {@link $StackedContentsCompatible}.
     */
    export type $StackedContentsCompatible_ = ((arg0: $StackedContents) => void);
    export class $ShulkerBoxSlot extends $Slot {
        handler$bhc000$supplementaries$supp$preventInsertion(stack: $ItemStack_, cir: $CallbackInfoReturnable<any>): void;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $Container, arg1: number, arg2: number, arg3: number);
    }
    export class $PlayerEnderChestContainer extends $SimpleContainer {
        setActiveChest(arg0: $EnderChestBlockEntity): void;
        isActiveChest(arg0: $EnderChestBlockEntity): boolean;
        size: number;
        listeners: $List<$ContainerListener$1>;
        items: $NonNullList<$ItemStack>;
        constructor();
    }
    export class $ItemCombinerMenuSlotDefinition {
        getResultSlotIndex(): number;
        getNumOfInputSlots(): number;
        getInputSlotIndexes(): $List<number>;
        getResultSlot(): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        getSlot(arg0: number): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        static create(): $ItemCombinerMenuSlotDefinition$Builder;
        getSlots(): $List<$ItemCombinerMenuSlotDefinition$SlotDefinition>;
        hasSlot(arg0: number): boolean;
        get resultSlotIndex(): number;
        get numOfInputSlots(): number;
        get inputSlotIndexes(): $List<number>;
        get resultSlot(): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        get slots(): $List<$ItemCombinerMenuSlotDefinition$SlotDefinition>;
    }
    export class $SlotRange {
        static of(arg0: string, arg1: $IntList): $SlotRange;
    }
    export interface $SlotRange extends $StringRepresentable {
        slots(): $IntList;
        size(): number;
    }
    export class $MenuConstructor {
    }
    export interface $MenuConstructor {
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
    }
    /**
     * Values that may be interpreted as {@link $MenuConstructor}.
     */
    export type $MenuConstructor_ = ((arg0: number, arg1: $Inventory, arg2: $Player) => $AbstractContainerMenu);
    export class $ContainerData {
    }
    export interface $ContainerData {
        get(arg0: number): number;
        set(arg0: number, arg1: number): void;
        getCount(): number;
        get count(): number;
    }
    export class $EnchantmentMenu extends $AbstractContainerMenu implements $EnchantmentMenuAccessor {
        handler$ekc000$taxfreelevels$setLevelRequirement(player: $Player, id: number, cir: $CallbackInfoReturnable<any>): void;
        getEnchantmentList(arg0: $RegistryAccess, arg1: $ItemStack_, arg2: number, arg3: number): $List<$EnchantmentInstance>;
        getGoldCount(): number;
        getRandom(): $RandomSource;
        getEnchantmentSeed(): $DataSlot;
        setEnchantSlots(arg0: $Container): void;
        callGetEnchantmentList(arg0: $RegistryAccess, arg1: $ItemStack_, arg2: number, arg3: number): $List<$EnchantmentInstance>;
        carried: $ItemStack;
        costs: number[];
        access: $ContainerLevelAccess;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        enchantmentSeed: $DataSlot;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        random: $RandomSource;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        enchantSlots: $Container;
        enchantClue: number[];
        containerId: number;
        levelClue: number[];
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
        constructor(arg0: number, arg1: $Inventory);
        get goldCount(): number;
    }
    export class $ContainerLevelAccess {
        static create(arg0: $Level_, arg1: $BlockPos_): $ContainerLevelAccess;
        static NULL: $ContainerLevelAccess;
    }
    export interface $ContainerLevelAccess extends $ContainerLevelAccessMixin {
        evaluate<T>(arg0: $BiFunction_<$Level, $BlockPos, T>): (T) | undefined;
        evaluate<T>(arg0: $BiFunction_<$Level, $BlockPos, T>, arg1: T): T;
        execute(arg0: $BiConsumer_<$Level, $BlockPos>): void;
    }
    /**
     * Values that may be interpreted as {@link $ContainerLevelAccess}.
     */
    export type $ContainerLevelAccess_ = ((arg0: $BiFunction<$Level, $BlockPos, any>) => (T) | undefined);
    export class $CartographyTableMenu extends $AbstractContainerMenu {
        handler$bfe000$supplementaries$supp$getItem(player: $Player, index: number, cir: $CallbackInfoReturnable<any>, itemStack: $ItemStack_, slot: $Slot, itemStack2: $ItemStack_): void;
        handler$bfe000$supplementaries$supp$getItem(mapStack: $ItemStack_, firstSlotStack: $ItemStack_, resultSlotStack: $ItemStack_, level: $Level_, blockPos: $BlockPos_, ci: $CallbackInfo, mapItemSavedData: $MapItemSavedData): void;
        container: $Container;
        carried: $ItemStack;
        static ADDITIONAL_SLOT: number;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static MAP_SLOT: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
    }
    export class $ItemCombinerMenu extends $AbstractContainerMenu {
        getSlotToQuickMoveTo(arg0: $ItemStack_): number;
        createResult(): void;
        createInventorySlots(arg0: $Inventory): void;
        getResultSlot(): number;
        carried: $ItemStack;
        access: $ContainerLevelAccess;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $ContainerLevelAccess_);
        get resultSlot(): number;
    }
    export class $ResultContainer implements $Container, $RecipeCraftingHolder {
        stillValid(arg0: $Player): boolean;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        setChanged(): void;
        setItem(arg0: number, arg1: $ItemStack_): void;
        clearContent(): void;
        getRecipeUsed(): $RecipeHolder<never>;
        setRecipeUsed(arg0: $RecipeHolder_<never>): void;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getItem(arg0: number): $ItemStack;
        isEmpty(): boolean;
        getMaxStackSize(): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        awardUsedRecipes(arg0: $Player, arg1: $List_<$ItemStack_>): void;
        setRecipeUsed(arg0: $Level_, arg1: $ServerPlayer, arg2: $RecipeHolder_<never>): boolean;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        self(): $Container;
        clear(): void;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        asContainer(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        isEmpty(): boolean;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(match: $ItemPredicate_): number;
        count(): number;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        itemStacks: $NonNullList<$ItemStack>;
        constructor();
        get containerSize(): number;
        set transferCooldown(value: number);
        get width(): number;
        get height(): number;
        get mutable(): boolean;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $FurnaceMenu extends $AbstractFurnaceMenu {
        carried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $Container, arg3: $ContainerData);
    }
    export class $AbstractFurnaceMenu extends $RecipeBookMenu<$SingleRecipeInput, $AbstractCookingRecipe> implements $AbstractFurnaceMenuAccessor {
        isLit(): boolean;
        getBurnProgress(): number;
        getLitProgress(): number;
        getContainer(): $Container;
        carried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        get lit(): boolean;
        get burnProgress(): number;
        get litProgress(): number;
        get container(): $Container;
    }
    export class $HopperMenu extends $AbstractContainerMenu {
        carried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static CONTAINER_SIZE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $Container);
        constructor(arg0: number, arg1: $Inventory);
    }
    export class $SimpleContainerData implements $ContainerData {
        get(arg0: number): number;
        set(arg0: number, arg1: number): void;
        getCount(): number;
        constructor(arg0: number);
        get count(): number;
    }
    export class $StonecutterMenu extends $AbstractContainerMenu {
        registerUpdateListener(arg0: $Runnable_): void;
        getSelectedRecipeIndex(): number;
        getRecipes(): $List<$RecipeHolder<$StonecutterRecipe>>;
        getNumRecipes(): number;
        hasInputItem(): boolean;
        static INPUT_SLOT: number;
        container: $Container;
        carried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
        get selectedRecipeIndex(): number;
        get recipes(): $List<$RecipeHolder<$StonecutterRecipe>>;
        get numRecipes(): number;
    }
    export class $ShulkerBoxMenu extends $AbstractContainerMenu {
        container: $Container;
        carried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $Container);
        constructor(arg0: number, arg1: $Inventory);
    }
    export class $AbstractContainerMenu implements $ContainerAccess, $AbstractContainerMenuAccessor$1, $AbstractContainerMenuAccessor, $ScreenHandlerInvoker, $OwoScreenHandlerExtension, $OwoScreenHandler {
        player(): $Player;
        getCarried(): $ItemStack;
        clicked(arg0: number, arg1: number, arg2: $ClickType_, arg3: $Player): void;
        stillValid(arg0: $Player): boolean;
        broadcastChanges(): void;
        setCarried(arg0: $ItemStack_): void;
        static canItemQuickReplace(arg0: $Slot, arg1: $ItemStack_, arg2: boolean): boolean;
        canDragTo(arg0: $Slot): boolean;
        static getQuickCraftPlaceCount(arg0: $Set_<$Slot>, arg1: number, arg2: $ItemStack_): number;
        findSlot(arg0: $Container, arg1: number): $OptionalInt;
        canTakeItemForPickAll(arg0: $ItemStack_, arg1: $Slot): boolean;
        static getQuickcraftMask(arg0: number, arg1: number): number;
        addSlotListener(arg0: $ContainerListener): void;
        setSynchronizer(arg0: $ContainerSynchronizer): void;
        transferState(arg0: $AbstractContainerMenu): void;
        setRemoteSlot(arg0: number, arg1: $ItemStack_): void;
        sendMessage(message: $Record): void;
        setItem(arg0: number, arg1: number, arg2: $ItemStack_): void;
        owo$attachToPlayer(player: $Player): void;
        static getRedstoneSignalFromBlockEntity(arg0: $BlockEntity): number;
        static getRedstoneSignalFromContainer(arg0: $Container): number;
        getItems(): $NonNullList<$ItemStack>;
        suppressRemoteUpdates(): void;
        isValidSlotIndex(arg0: number): boolean;
        addSlot(arg0: $Slot): $Slot;
        addDataSlot(arg0: $DataSlot): $DataSlot;
        sendAllDataToRemote(): void;
        removeSlotListener(arg0: $ContainerListener): void;
        updateDataSlotListeners(arg0: number, arg1: number): void;
        broadcastFullState(): void;
        wrapOperation$hpf000$geckolib$forceGeckolibSlotChange(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        wrapOperation$hpf000$geckolib$forceGeckolibIdSync(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        setRemoteSlotNoCopy(arg0: number, arg1: $ItemStack_): void;
        setRemoteCarried(arg0: $ItemStack_): void;
        clickMenuButton(arg0: $Player, arg1: number): boolean;
        quickMoveStack(arg0: $Player, arg1: number): $ItemStack;
        handler$bjc000$refinedstorage$doClick(arg0: number, arg1: number, arg2: $ClickType_, arg3: $Player, arg4: $CallbackInfo): void;
        static getQuickcraftHeader(arg0: number): number;
        static getQuickcraftType(arg0: number): number;
        static isValidQuickcraftType(arg0: number, arg1: $Player): boolean;
        handler$med000$ae2things$CLONE(arg0: number, arg1: number, arg2: $ClickType_, arg3: $Player, arg4: $CallbackInfo): void;
        wrapOperation$hpf000$geckolib$removeGeckolibIdOnCopy(arg0: $ItemStack_, arg1: number, arg2: $Operation_<any>): $ItemStack;
        slotsChanged(arg0: $Container): void;
        initializeContents(arg0: number, arg1: $List_<$ItemStack_>, arg2: $ItemStack_): void;
        resumeRemoteUpdates(): void;
        getStateId(): number;
        incrementStateId(): number;
        wrapOperation$enf000$azurelib$syncAzureIDWithRemote(arg0: $ItemStack_, arg1: number, arg2: $Operation_<any>): $ItemStack;
        wrapOperation$enf000$azurelib$syncAzureIDWithRemote(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        wrapOperation$enf000$azurelib$detectSlotChangeWithAzureID(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        endecBuilder(): $ReflectiveEndecBuilder;
        addServerboundMessage(messageClass: $Class<any>, endec: $Endec<any>, handler: $Consumer_<any>): void;
        addClientboundMessage(messageClass: $Class<any>, endec: $Endec<any>, handler: $Consumer_<any>): void;
        owo$handlePacket(packet: $ScreenInternals$LocalPacket_, clientbound: boolean): void;
        owo$readPropertySync(packet: $ScreenInternals$SyncPropertiesPacket_): void;
        setData(arg0: number, arg1: number): void;
        getSlot(arg0: number): $Slot;
        removed(arg0: $Player): void;
        createProperty(clazz: $Class<any>, endec: $Endec<any>, initial: $Object): $SyncedProperty<any>;
        getType(): $MenuType<never>;
        addServerboundMessage<R extends $Record>(messageClass: $Class<R>, handler: $Consumer_<R>): void;
        addClientboundMessage<R extends $Record>(messageClass: $Class<R>, handler: $Consumer_<R>): void;
        createProperty<T>(clazz: $Class<T>, initial: T): $SyncedProperty<T>;
        getLastSlots(): $NonNullList<$ItemStack>;
        getRemoteSlots(): $NonNullList<$ItemStack>;
        aether$getLastSlots(): $NonNullList<$ItemStack>;
        aether$getRemoteSlots(): $NonNullList<$ItemStack>;
        aether$setContainerId(arg0: number): void;
        aether$setMenuType(arg0: $MenuType_<never>): void;
        balm$getMenuType(): $MenuType<never>;
        owo$insertItem(arg0: $ItemStack_, arg1: number, arg2: number, arg3: boolean): boolean;
        carried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        set synchronizer(value: $ContainerSynchronizer);
        get items(): $NonNullList<$ItemStack>;
        set remoteCarried(value: $ItemStack_);
        get type(): $MenuType<never>;
    }
    export class $Slot implements $SlotAccessor, $SlotAccessor$2, $SlotAccessor$1, $OwoSlotExtension {
        getMaxStackSize(arg0: $ItemStack_): number;
        getMaxStackSize(): number;
        getContainerSlot(): number;
        setChanged(): void;
        getNoItemIcon(): $Pair<$ResourceLocation, $ResourceLocation>;
        isFake(): boolean;
        mayPlace(arg0: $ItemStack_): boolean;
        mayPickup(arg0: $Player): boolean;
        isSameInventory(arg0: $Slot): boolean;
        owo$getScissorArea(): $PositionedRectangle;
        isHighlightable(): boolean;
        onQuickCraft(arg0: $ItemStack_, arg1: $ItemStack_): void;
        setByPlayer(arg0: $ItemStack_, arg1: $ItemStack_): void;
        setByPlayer(arg0: $ItemStack_): void;
        safeInsert(arg0: $ItemStack_): $ItemStack;
        safeInsert(arg0: $ItemStack_, arg1: number): $ItemStack;
        tryRemove(arg0: number, arg1: number, arg2: $Player): ($ItemStack) | undefined;
        onTake(arg0: $Player, arg1: $ItemStack_): void;
        safeTake(arg0: number, arg1: number, arg2: $Player): $ItemStack;
        allowModification(arg0: $Player): boolean;
        getSlotIndex(): number;
        setBackground(arg0: $ResourceLocation_, arg1: $ResourceLocation_): $Slot;
        owo$setDisabledOverride(disabled: boolean): void;
        owo$getDisabledOverride(): boolean;
        owo$setScissorArea(scissor: $PositionedRectangle): void;
        hasItem(): boolean;
        getItem(): $ItemStack;
        isActive(): boolean;
        remove(arg0: number): $ItemStack;
        set(arg0: $ItemStack_): void;
        setX(arg0: number): void;
        setY(arg0: number): void;
        accessories$setY(arg0: number): void;
        owo$setX(arg0: number): void;
        owo$setY(arg0: number): void;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $Container, arg1: number, arg2: number, arg3: number);
        get containerSlot(): number;
        get noItemIcon(): $Pair<$ResourceLocation, $ResourceLocation>;
        get fake(): boolean;
        get highlightable(): boolean;
        get slotIndex(): number;
        get item(): $ItemStack;
        get active(): boolean;
    }
    export class $DataSlot {
        static forContainer(arg0: $ContainerData, arg1: number): $DataSlot;
        checkAndClearUpdateFlag(): boolean;
        static standalone(): $DataSlot;
        static shared(arg0: number[], arg1: number): $DataSlot;
        get(): number;
        set(arg0: number): void;
        constructor();
    }
    export class $BrewingStandMenu$FuelSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
    }
    export class $RecipeBookType extends $Enum<$RecipeBookType> implements $IExtensibleEnum {
        static getExtensionInfo(): $ExtensionInfo;
        static values(): $RecipeBookType[];
        static valueOf(arg0: string): $RecipeBookType;
        static FURNACE: $RecipeBookType;
        static BLAST_FURNACE: $RecipeBookType;
        static AETHER_FREEZER: $RecipeBookType;
        static BREWINANDCHEWIN_FERMENTING: $RecipeBookType;
        static SMOKER: $RecipeBookType;
        static FARMERSDELIGHT_COOKING: $RecipeBookType;
        static CRAFTING: $RecipeBookType;
        static AETHER_INCUBATOR: $RecipeBookType;
        static AETHER_ALTAR: $RecipeBookType;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $RecipeBookType}.
     */
    export type $RecipeBookType_ = "crafting" | "furnace" | "blast_furnace" | "smoker" | "aether_altar" | "aether_freezer" | "aether_incubator" | "brewinandchewin_fermenting" | "farmersdelight_cooking";
    export class $ItemCombinerMenuSlotDefinition$SlotDefinition extends $Record {
        mayPlace(): $Predicate<$ItemStack>;
        slotIndex(): number;
        y(): number;
        x(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Predicate_<$ItemStack>);
    }
    /**
     * Values that may be interpreted as {@link $ItemCombinerMenuSlotDefinition$SlotDefinition}.
     */
    export type $ItemCombinerMenuSlotDefinition$SlotDefinition_ = { y?: number, mayPlace?: $Predicate_<$ItemStack>, slotIndex?: number, x?: number,  } | [y?: number, mayPlace?: $Predicate_<$ItemStack>, slotIndex?: number, x?: number, ];
    export class $ClickType extends $Enum<$ClickType> {
        static values(): $ClickType[];
        static valueOf(arg0: string): $ClickType;
        static QUICK_MOVE: $ClickType;
        static SWAP: $ClickType;
        static PICKUP_ALL: $ClickType;
        static THROW: $ClickType;
        static QUICK_CRAFT: $ClickType;
        static PICKUP: $ClickType;
        static CLONE: $ClickType;
    }
    /**
     * Values that may be interpreted as {@link $ClickType}.
     */
    export type $ClickType_ = "pickup" | "quick_move" | "swap" | "clone" | "throw" | "quick_craft" | "pickup_all";
    export class $TransientCraftingContainer implements $CraftingContainer, $CraftingContainerAccess, $AccessorTransientCraftingContainer {
        stillValid(arg0: $Player): boolean;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        setChanged(): void;
        setItem(arg0: number, arg1: $ItemStack_): void;
        clearContent(): void;
        getItems(): $List<$ItemStack>;
        fillStackedContents(arg0: $StackedContents): void;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getWidth(): number;
        getHeight(): number;
        getItem(arg0: number): $ItemStack;
        isEmpty(): boolean;
        asCraftInput(): $CraftingInput;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        getMaxStackSize(): number;
        getMaxStackSize(arg0: $ItemStack_): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        self(): $Container;
        clear(): void;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        asContainer(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        isEmpty(): boolean;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(match: $ItemPredicate_): number;
        count(): number;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        setItems(arg0: $NonNullList<$ItemStack_>): void;
        framedblocks$getItems(): $NonNullList<$ItemStack>;
        menu: $AbstractContainerMenu;
        items: $NonNullList<$ItemStack>;
        constructor(arg0: $AbstractContainerMenu, arg1: number, arg2: number);
        constructor(arg0: $AbstractContainerMenu, arg1: number, arg2: number, arg3: $NonNullList<$ItemStack_>);
        get containerSize(): number;
        set transferCooldown(value: number);
        get mutable(): boolean;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $ContainerSynchronizer {
    }
    export interface $ContainerSynchronizer {
        sendInitialData(arg0: $AbstractContainerMenu, arg1: $NonNullList<$ItemStack_>, arg2: $ItemStack_, arg3: number[]): void;
        sendSlotChange(arg0: $AbstractContainerMenu, arg1: number, arg2: $ItemStack_): void;
        sendDataChange(arg0: $AbstractContainerMenu, arg1: number, arg2: number): void;
        sendCarriedChange(arg0: $AbstractContainerMenu, arg1: $ItemStack_): void;
    }
    export class $MerchantMenu extends $AbstractContainerMenu implements $AccessorMerchantMenu {
        getOffers(): $MerchantOffers;
        setXp(arg0: number): void;
        tryMoveItems(arg0: number): void;
        setOffers(arg0: $MerchantOffers): void;
        canRestock(): boolean;
        showProgressBar(): boolean;
        setMerchantLevel(arg0: number): void;
        setCanRestock(arg0: boolean): void;
        setShowProgressBar(arg0: boolean): void;
        setSelectionHint(arg0: number): void;
        getTraderXp(): number;
        getFutureTraderXp(): number;
        getTraderLevel(): number;
        invokeMoveFromInventoryToPaymentSlot(arg0: number, arg1: $ItemCost_): void;
        carried: $ItemStack;
        stateId: number;
        trader: $Merchant;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        tradeContainer: $MerchantContainer;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $Merchant);
        constructor(arg0: number, arg1: $Inventory);
        set xp(value: number);
        set merchantLevel(value: number);
        set selectionHint(value: number);
        get traderXp(): number;
        get futureTraderXp(): number;
        get traderLevel(): number;
    }
    export class $GrindstoneMenu extends $AbstractContainerMenu {
        computeResult(arg0: $ItemStack_, arg1: $ItemStack_): $ItemStack;
        static INPUT_SLOT: number;
        carried: $ItemStack;
        static ADDITIONAL_SLOT: number;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static MAX_NAME_LENGTH: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
        constructor(arg0: number, arg1: $Inventory);
    }
    export class $RecipeCraftingHolder {
    }
    export interface $RecipeCraftingHolder {
        getRecipeUsed(): $RecipeHolder<never>;
        awardUsedRecipes(arg0: $Player, arg1: $List_<$ItemStack_>): void;
        setRecipeUsed(arg0: $Level_, arg1: $ServerPlayer, arg2: $RecipeHolder_<never>): boolean;
        setRecipeUsed(arg0: $RecipeHolder_<never>): void;
    }
    export class $RecipeBookMenu<I extends $RecipeInput, R extends $Recipe<I>> extends $AbstractContainerMenu {
        clearCraftingContent(): void;
        recipeMatches(arg0: $RecipeHolder_<R>): boolean;
        getResultSlotIndex(): number;
        getGridWidth(): number;
        getGridHeight(): number;
        getRecipeBookType(): $RecipeBookType;
        shouldMoveToInventory(arg0: number): boolean;
        handlePlacement(arg0: boolean, arg1: $RecipeHolder_<never>, arg2: $ServerPlayer): void;
        getRecipeBookCategories(): $List<$RecipeBookCategories>;
        fillCraftSlotsStackedContents(arg0: $StackedContents): void;
        getSize(): number;
        carried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number);
        get resultSlotIndex(): number;
        get gridWidth(): number;
        get gridHeight(): number;
        get recipeBookType(): $RecipeBookType;
        get recipeBookCategories(): $List<$RecipeBookCategories>;
        get size(): number;
    }
    export class $CrafterMenu extends $AbstractContainerMenu implements $ContainerListener, $AccessorCrafterMenu {
        slotChanged(arg0: $AbstractContainerMenu, arg1: number, arg2: $ItemStack_): void;
        isPowered(): boolean;
        dataChanged(arg0: $AbstractContainerMenu, arg1: number, arg2: number): void;
        setSlotState(arg0: number, arg1: boolean): void;
        isSlotDisabled(arg0: number): boolean;
        getContainer(): $Container;
        callRefreshRecipeResult(): void;
        carried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $CraftingContainer, arg3: $ContainerData);
        get powered(): boolean;
        get container(): $Container;
    }
    export class $NonInteractiveResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $Container, arg1: number, arg2: number, arg3: number);
    }
    export class $FurnaceResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $Player, arg1: $Container, arg2: number, arg3: number, arg4: number);
    }
    export class $BlastFurnaceMenu extends $AbstractFurnaceMenu {
        carried: $ItemStack;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $Container, arg3: $ContainerData);
    }
    export class $AnvilMenu extends $ItemCombinerMenu {
        modifyExpressionValue$mgj000$quark$isValidRepairItem(arg0: boolean, arg1: $ItemStack_, arg2: $ItemStack_): boolean;
        redirect$ghm000$apothic_enchanting$apoth_chargeOptimalLevels(arg0: $Player, arg1: number): void;
        modifyExpressionValue$mck000$ae2$setAnnihilationPlaneThreadLocal(arg0: boolean): boolean;
        constant$ghm000$apothic_enchanting$apoth_removeLevelCap(arg0: number): number;
        handler$ekb000$taxfreelevels$makeRenamingCheap(ci: $CallbackInfo, i: number, j: number): void;
        modifyExpressionValue$eke000$taxfreelevels$removeAnvilLimit(original: boolean): boolean;
        static calculateIncreasedRepairCost(arg0: number): number;
        setItemName(arg0: string): boolean;
        getCost(): number;
        setMaximumCost(arg0: number): void;
        handler$bji000$immersiveui$onTake(player: $Player, stack: $ItemStack_, ci: $CallbackInfo): void;
        static INPUT_SLOT: number;
        carried: $ItemStack;
        repairItemCountCost: number;
        cost: $DataSlot;
        access: $ContainerLevelAccess;
        static ADDITIONAL_SLOT: number;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static MAX_NAME_LENGTH: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        itemName: string;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
        constructor(arg0: number, arg1: $Inventory);
        set maximumCost(value: number);
    }
    export interface $MenuType<T> extends RegistryMarked<RegistryTypes.MenuTag, RegistryTypes.Menu> {}
    export class $ContainerListener {
    }
    export interface $ContainerListener {
        slotChanged(arg0: $AbstractContainerMenu, arg1: number, arg2: $ItemStack_): void;
        dataChanged(arg0: $AbstractContainerMenu, arg1: number, arg2: number): void;
    }
    export class $ItemCombinerMenuSlotDefinition$Builder {
        withSlot(arg0: number, arg1: number, arg2: number, arg3: $Predicate_<$ItemStack>): $ItemCombinerMenuSlotDefinition$Builder;
        withResultSlot(arg0: number, arg1: number, arg2: number): $ItemCombinerMenuSlotDefinition$Builder;
        build(): $ItemCombinerMenuSlotDefinition;
        constructor();
    }
}
