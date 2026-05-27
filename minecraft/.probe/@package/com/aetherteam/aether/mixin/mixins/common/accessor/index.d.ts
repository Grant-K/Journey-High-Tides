import { $BlockGetter, $SpawnData, $Level_, $LevelReader, $SpawnData_ } from "@package/net/minecraft/world/level";
import { $AbstractCookingRecipe, $RecipeManager$CachedCheck, $RecipeHolder_, $SingleRecipeInput, $CraftingRecipe } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $StoredUserEntry } from "@package/net/minecraft/server/players";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerLevelData, $WritableLevelData, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $Map } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Predicate, $Consumer_, $Consumer } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $RegistryAccess, $NonNullList } from "@package/net/minecraft/core";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $CraftingContainer, $MenuType_, $ResultContainer, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $LootContextParamSet$Builder, $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $NoiseChunk } from "@package/net/minecraft/world/level/levelgen";
import { $AbstractFurnaceBlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/aetherteam/aether/mixin/mixins/common/accessor" {
    export class $SpreadingSnowyDirtBlockAccessor {
        static callCanBeGrass(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        static callCanPropagate(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
    }
    export interface $SpreadingSnowyDirtBlockAccessor {
    }
    export class $LootContextParamSetsAccessor {
        static callRegister(arg0: string, arg1: $Consumer_<$LootContextParamSet$Builder>): $LootContextParamSet;
    }
    export interface $LootContextParamSetsAccessor {
    }
    export class $LevelAccessor {
    }
    export interface $LevelAccessor {
        aether$getLevelData(): $WritableLevelData;
        aether$setLevelData(arg0: $WritableLevelData): void;
    }
    export class $MinecraftServerAccessor {
    }
    export interface $MinecraftServerAccessor {
        aether$getStorageSource(): $LevelStorageSource$LevelStorageAccess;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServerAccessor}.
     */
    export type $MinecraftServerAccessor_ = (() => $LevelStorageSource$LevelStorageAccess);
    export class $ConcretePowderBlockAccessor {
        static callShouldSolidify(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): boolean;
    }
    export interface $ConcretePowderBlockAccessor {
        aether$getConcrete(): $Block;
    }
    /**
     * Values that may be interpreted as {@link $ConcretePowderBlockAccessor}.
     */
    export type $ConcretePowderBlockAccessor_ = (() => $Block_);
    export class $BaseSpawnerAccessor {
    }
    export interface $BaseSpawnerAccessor {
        aether$getNextSpawnData(): $SpawnData;
    }
    /**
     * Values that may be interpreted as {@link $BaseSpawnerAccessor}.
     */
    export type $BaseSpawnerAccessor_ = (() => $SpawnData_);
    export class $AbstractContainerMenuAccessor {
    }
    export interface $AbstractContainerMenuAccessor {
        aether$getLastSlots(): $NonNullList<$ItemStack>;
        aether$getRemoteSlots(): $NonNullList<$ItemStack>;
        aether$setContainerId(arg0: number): void;
        aether$setMenuType(arg0: $MenuType_<never>): void;
    }
    export class $CraftingMenuAccessor {
        static callSlotChangedCraftingGrid(arg0: $AbstractContainerMenu, arg1: $Level_, arg2: $Player, arg3: $CraftingContainer, arg4: $ResultContainer, arg5: $RecipeHolder_<$CraftingRecipe>): void;
    }
    export interface $CraftingMenuAccessor {
    }
    export class $LivingEntityAccessor {
    }
    export interface $LivingEntityAccessor {
        callUpdateEffectVisibility(): void;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityAccessor}.
     */
    export type $LivingEntityAccessor_ = (() => void);
    export class $BoatAccessor {
    }
    export interface $BoatAccessor {
        aether$getDeltaRotation(): number;
        aether$setDeltaRotation(arg0: number): void;
    }
    export class $AbstractFurnaceBlockEntityAccessor {
        static callCanBurn(arg0: $RegistryAccess, arg1: $RecipeHolder_<never>, arg2: $NonNullList<$ItemStack_>, arg3: number, arg4: $AbstractFurnaceBlockEntity): boolean;
        static callGetTotalCookTime(arg0: $Level_, arg1: $AbstractFurnaceBlockEntity): number;
    }
    export interface $AbstractFurnaceBlockEntityAccessor {
        aether$getQuickCheck(): $RecipeManager$CachedCheck<$SingleRecipeInput, $AbstractCookingRecipe>;
        aether$getLitTime(): number;
        aether$setLitTime(arg0: number): void;
        aether$setLitDuration(arg0: number): void;
        aether$getCookingProgress(): number;
        aether$setCookingProgress(arg0: number): void;
        aether$getCookingTotalTime(): number;
        aether$setCookingTotalTime(arg0: number): void;
        callIsLit(): boolean;
        aether$getItems(): $NonNullList<$ItemStack>;
        callGetBurnDuration(arg0: $ItemStack_): number;
    }
    export class $StoredUserListAccessor {
    }
    export interface $StoredUserListAccessor {
        callContains<K, V extends $StoredUserEntry<K>>(arg0: K): boolean;
    }
    /**
     * Values that may be interpreted as {@link $StoredUserListAccessor}.
     */
    export type $StoredUserListAccessor_ = ((arg0: any) => boolean);
    export class $FireBlockAccessor {
    }
    export interface $FireBlockAccessor {
        callSetFlammable(arg0: $Block_, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $FireBlockAccessor}.
     */
    export type $FireBlockAccessor_ = ((arg0: $Block, arg1: number, arg2: number) => void);
    export class $LookAtPlayerGoalAccessor {
    }
    export interface $LookAtPlayerGoalAccessor {
        aether$setLookAtContext(arg0: $TargetingConditions): void;
    }
    /**
     * Values that may be interpreted as {@link $LookAtPlayerGoalAccessor}.
     */
    export type $LookAtPlayerGoalAccessor_ = ((arg0: $TargetingConditions) => void);
    export class $ChunkAccessAccessor {
    }
    export interface $ChunkAccessAccessor {
        aether$getNoiseChunk(): $NoiseChunk;
    }
    /**
     * Values that may be interpreted as {@link $ChunkAccessAccessor}.
     */
    export type $ChunkAccessAccessor_ = (() => $NoiseChunk);
    export class $ServerGamePacketListenerImplAccessor {
    }
    export interface $ServerGamePacketListenerImplAccessor {
        aether$setAboveGroundTickCount(arg0: number): void;
        aether$setAboveGroundVehicleTickCount(arg0: number): void;
    }
    export class $HoeItemAccessor {
        static aether$getTillables(): $Map<$Block, $Pair<$Predicate<$UseOnContext>, $Consumer<$UseOnContext>>>;
    }
    export interface $HoeItemAccessor {
    }
    export class $BeeAccessor {
    }
    export interface $BeeAccessor {
        callGetCropsGrownSincePollination(): number;
        callIsHiveValid(): boolean;
        callIncrementNumCropsGrownSincePollination(): void;
    }
    export class $ZombifiedPiglinAccessor {
    }
    export interface $ZombifiedPiglinAccessor {
        callAlertOthers(): void;
    }
    /**
     * Values that may be interpreted as {@link $ZombifiedPiglinAccessor}.
     */
    export type $ZombifiedPiglinAccessor_ = (() => void);
    export class $BushBlockAccessor {
    }
    export interface $BushBlockAccessor {
        callMayPlaceOn(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BushBlockAccessor}.
     */
    export type $BushBlockAccessor_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => boolean);
    export class $ServerLevelAccessor {
    }
    export interface $ServerLevelAccessor {
        aether$getServerLevelData(): $ServerLevelData;
        aether$setServerLevelData(arg0: $ServerLevelData): void;
    }
    export class $BlockLootAccessor {
        static aether$getNormalLeavesSaplingChances(): number[];
    }
    export interface $BlockLootAccessor {
    }
    export class $EntityAccessor {
    }
    export interface $EntityAccessor {
        aether$getRandom(): $RandomSource;
    }
    /**
     * Values that may be interpreted as {@link $EntityAccessor}.
     */
    export type $EntityAccessor_ = (() => $RandomSource);
    export class $PlayerAccessor {
    }
    export interface $PlayerAccessor {
        callHurtCurrentlyUsedShield(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $PlayerAccessor}.
     */
    export type $PlayerAccessor_ = ((arg0: number) => void);
}
