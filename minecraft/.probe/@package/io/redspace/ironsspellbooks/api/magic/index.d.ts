import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CastSource, $ICastData, $ICastData_, $CastType, $SpellData, $CastSource_, $AbstractSpell_ } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $SyncedSpellData, $PlayerCooldowns, $PlayerRecasts } from "@package/io/redspace/ironsspellbooks/capabilities/magic";
import { $List } from "@package/java/util";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $SpellSelection } from "@package/io/redspace/ironsspellbooks/gui/overlays";

declare module "@package/io/redspace/ironsspellbooks/api/magic" {
    export class $MagicData {
        getCastType(): $CastType;
        static getPlayerMagicData(arg0: $LivingEntity): $MagicData;
        markPoisoned(): void;
        setSyncedData(arg0: $SyncedSpellData): void;
        isCasting(): boolean;
        getSyncedData(): $SyncedSpellData;
        saveNBTData(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        loadNBTData(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        resetCastingState(): void;
        getCastingSpell(): $SpellData;
        getCastingSpellLevel(): number;
        getCastingSpellId(): string;
        handleCastDuration(): void;
        getCastDurationRemaining(): number;
        initiateCast(arg0: $AbstractSpell_, arg1: number, arg2: number, arg3: $CastSource_, arg4: string): void;
        setAdditionalCastData(arg0: $ICastData_): void;
        getPlayerCastingItem(): $ItemStack;
        addMana(arg0: number): void;
        popMarkedPoison(): boolean;
        setServerPlayer(arg0: $ServerPlayer): void;
        getCastCompletionPercent(): number;
        getCastDuration(): number;
        setPlayerRecasts(arg0: $PlayerRecasts): void;
        setPlayerCastingItem(arg0: $ItemStack_): void;
        getPlayerRecasts(): $PlayerRecasts;
        getMana(): number;
        setMana(arg0: number): void;
        getAdditionalCastData(): $ICastData;
        getCastSource(): $CastSource;
        getPlayerCooldowns(): $PlayerCooldowns;
        resetAdditionalCastData(): void;
        getCastingEquipmentSlot(): string;
        static MANA: string;
        static COOLDOWNS: string;
        static RECASTS: string;
        constructor();
        constructor(arg0: $ServerPlayer);
        constructor(arg0: boolean);
        get castType(): $CastType;
        get casting(): boolean;
        get castingSpell(): $SpellData;
        get castingSpellLevel(): number;
        get castingSpellId(): string;
        get castDurationRemaining(): number;
        set serverPlayer(value: $ServerPlayer);
        get castCompletionPercent(): number;
        get castDuration(): number;
        get castSource(): $CastSource;
        get playerCooldowns(): $PlayerCooldowns;
        get castingEquipmentSlot(): string;
    }
    export class $SpellSelectionManager$SpellSelectionEvent extends $PlayerEvent {
        addSelectionOption(arg0: $SpellData, arg1: string, arg2: number, arg3: number): void;
        addSelectionOption(arg0: $SpellData, arg1: string, arg2: number): void;
        getManager(): $SpellSelectionManager;
        constructor(arg0: $Player, arg1: $SpellSelectionManager);
        get manager(): $SpellSelectionManager;
    }
    export class $SpellSelectionManager$SelectionOption {
        getCastSource(): $CastSource;
        globalIndex: number;
        spellData: $SpellData;
        slot: string;
        slotIndex: number;
        constructor(arg0: $SpellData, arg1: string, arg2: number, arg3: number);
        get castSource(): $CastSource;
    }
    export class $SpellSelectionManager {
        getCurrentSelection(): $SpellSelection;
        getSpellForSlot(arg0: string, arg1: number): $SpellData;
        getSpellsForSlot(arg0: string): $List<$SpellSelectionManager$SelectionOption>;
        getGlobalSelectionIndex(): number;
        getSelection(): $SpellSelectionManager$SelectionOption;
        getSpellCount(): number;
        getAllSpells(): $List<$SpellSelectionManager$SelectionOption>;
        makeSelection(arg0: number): void;
        getSpellData(arg0: number): $SpellData;
        getSelectionIndex(): number;
        getSpellSlot(arg0: number): $SpellSelectionManager$SelectionOption;
        getSelectedSpellData(): $SpellData;
        static OFFHAND: string;
        static MAINHAND: string;
        constructor(arg0: $Player);
        get currentSelection(): $SpellSelection;
        get globalSelectionIndex(): number;
        get selection(): $SpellSelectionManager$SelectionOption;
        get spellCount(): number;
        get allSpells(): $List<$SpellSelectionManager$SelectionOption>;
        get selectionIndex(): number;
        get selectedSpellData(): $SpellData;
    }
}
