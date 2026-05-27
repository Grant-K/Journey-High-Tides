import { $LevelReader } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Set_, $Set } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/shadowsoffire/apothic_enchanting/table" {
    export class $EnchantmentTableStats$Builder {
        addEterna(arg0: number, arg1: number): void;
        addQuanta(arg0: number): void;
        addArcana(arg0: number): void;
        addClues(arg0: number): void;
        blacklistEnchant(arg0: $Holder_<$Enchantment>): void;
        setAllowsTreasure(arg0: boolean): void;
        setStable(arg0: boolean): void;
        build(): $EnchantmentTableStats;
        constructor(arg0: number);
        set allowsTreasure(value: boolean);
        set stable(value: boolean);
    }
    export class $ApothEnchantmentScreen$SuperRender {
    }
    export interface $ApothEnchantmentScreen$SuperRender {
        apoth_superRender(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ApothEnchantmentScreen$SuperRender}.
     */
    export type $ApothEnchantmentScreen$SuperRender_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number) => void);
    export class $EnchantmentTableStats extends $Record {
        static vanilla(arg0: number): $EnchantmentTableStats;
        static gatherStats(arg0: $LevelReader, arg1: $BlockPos_, arg2: number): $EnchantmentTableStats;
        static gatherStats(arg0: $EnchantmentTableStats$Builder, arg1: $LevelReader, arg2: $BlockPos_): void;
        eterna(): number;
        quanta(): number;
        arcana(): number;
        clues(): number;
        blacklist(): $Set<$Holder<$Enchantment>>;
        treasure(): boolean;
        static canReadStatsFrom(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): boolean;
        stable(): boolean;
        static INVALID: $EnchantmentTableStats;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EnchantmentTableStats>;
        constructor(eterna: number, quanta: number, arcana: number, clues: number, blacklist: $Set_<$Holder_<$Enchantment>>, treasure: boolean, stable: boolean);
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentTableStats}.
     */
    export type $EnchantmentTableStats_ = { clues?: number, stable?: boolean, eterna?: number, blacklist?: $Set_<$Holder_<$Enchantment>>, quanta?: number, arcana?: number, treasure?: boolean,  } | [clues?: number, stable?: boolean, eterna?: number, blacklist?: $Set_<$Holder_<$Enchantment>>, quanta?: number, arcana?: number, treasure?: boolean, ];
}
