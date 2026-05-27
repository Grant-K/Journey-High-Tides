import { $MapCodec } from "@package/com/mojang/serialization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Predicate, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ChunkRenderTypeSet } from "@package/net/neoforged/neoforge/client";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Object } from "@package/java/lang";
import { $BlockAndTintGetter, $BlockGetter, $Explosion, $Level_, $LevelReader } from "@package/net/minecraft/world/level";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MapColor, $FluidState } from "@package/net/minecraft/world/level/material";
import { $MutableComponent, $Component } from "@package/net/minecraft/network/chat";
import { $Particle } from "@package/net/minecraft/client/particle";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $QuadCacheKey } from "@package/xfacthd/framedblocks/api/model/cache";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $SoundType } from "@package/net/minecraft/world/level/block";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as block from "@package/xfacthd/framedblocks/api/camo/block";

declare module "@package/xfacthd/framedblocks/api/camo" {
    export class $CamoClientHandler<T extends $CamoContent<T>> {
        getOrCreateModel(arg0: T): $BakedModel;
        makeHitDestroyParticle(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: T, arg8: $BlockPos_): $Particle;
        getRenderTypes(arg0: T, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        constructor();
    }
    export class $CamoContainer<C extends $CamoContent<C>, T extends $CamoContainer<C, T>> {
        getBeaconColorMultiplier(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): number;
        getMapColor(arg0: $BlockGetter, arg1: $BlockPos_): $MapColor;
        getTintColor(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: number): number;
        getTintColor(arg0: $ItemStack_, arg1: number): number;
        canTriviallyConvertToItemStack(): boolean;
        canRotateCamo(): boolean;
        rotateCamo(): T;
        appendJadeTooltip(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: $Consumer_<$Component>): void;
        getContent(): C;
        isEmpty(): boolean;
        getFactory(): $CamoContainerFactory<T>;
        get content(): C;
        get empty(): boolean;
        get factory(): $CamoContainerFactory<T>;
    }
    export class $CamoContent<C extends $CamoContent<C>> implements $QuadCacheKey {
        canOcclude(): boolean;
        getSoundType(): $SoundType;
        getFriction(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity, arg3: number): number;
        getLightEmission(): number;
        getExplosionResistance(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): number;
        isSolid(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        canSustainPlant(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_): $TriState;
        getBeaconColorMultiplier(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): number;
        getFlammability(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        isFlammable(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getFireSpreadSpeed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        canEntityDestroy(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState): boolean;
        getMapColor(arg0: $BlockGetter, arg1: $BlockPos_): $MapColor;
        propagatesSkylightDown(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getShadeBrightness(arg0: $BlockGetter, arg1: $BlockPos_, arg2: number): number;
        getCamoName(): $MutableComponent;
        getAsBlockState(): $BlockState;
        isEmissive(): boolean;
        camo(): $CamoContent<never>;
        getTintColor(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: number): number;
        getTintColor(arg0: $ItemStack_, arg1: number): number;
        getCamoId(): string;
        makeRunningLandingParticles(arg0: $BlockPos_): $ParticleOptions;
        getAppearanceState(): $BlockState;
        isOccludedBy(arg0: $CamoContent<never>, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockPos_): boolean;
        isOccludedBy(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockPos_): boolean;
        occludes(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockPos_): boolean;
        getClientHandler(): $CamoClientHandler<C>;
        ctCtx(): $Object;
        isEmpty(): boolean;
        constructor();
        get soundType(): $SoundType;
        get lightEmission(): number;
        get camoName(): $MutableComponent;
        get asBlockState(): $BlockState;
        get emissive(): boolean;
        get camoId(): string;
        get appearanceState(): $BlockState;
        get clientHandler(): $CamoClientHandler<C>;
        get empty(): boolean;
    }
    export class $TriggerRegistrar {
        static DEFAULT_REMOVAL: $Predicate<$ItemStack>;
    }
    export interface $TriggerRegistrar {
        registerApplicationPredicate(arg0: $Predicate_<$ItemStack>): void;
        registerRemovalPredicate(arg0: $Predicate_<$ItemStack>): void;
        registerApplicationItem(arg0: $Item_): void;
        registerRemovalItem(arg0: $Item_): void;
    }
    export class $CamoContainerFactory<T extends $CamoContainer<never, T>> {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        handleInteraction(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: T, arg4: $ItemStack_, arg5: $InteractionHand_): T;
        /**
         * @deprecated
         */
        handleInteraction(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: T, arg4: $ItemStack_): T;
        getCraftingRemainder(arg0: $ItemStack_): $ItemStack;
        canTriviallyConvertToItemStack(): boolean;
        dropCamo(arg0: T): $ItemStack;
        registerTriggerItems(arg0: $TriggerRegistrar): void;
        validateCamo(arg0: T): boolean;
        removeCamo(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: $ItemStack_, arg4: T): boolean;
        applyCamo(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: $ItemStack_): T;
        canApplyInCraftingRecipe(arg0: $ItemStack_): boolean;
        applyCamoInCraftingRecipe(arg0: $ItemStack_): T;
        static MSG_BLACKLISTED: $Component;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $CamoContainerFactory}.
     */
    export type $CamoContainerFactory_<T> = RegistryTypes.FramedblocksCamoContainers;
    export interface $CamoContainerFactory<T> extends RegistryMarked<RegistryTypes.FramedblocksCamoContainersTag, RegistryTypes.FramedblocksCamoContainers> {}
}
