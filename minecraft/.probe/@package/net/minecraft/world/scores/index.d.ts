import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ObjectiveCriteria$RenderType, $ObjectiveCriteria, $ObjectiveCriteria$RenderType_ } from "@package/net/minecraft/world/scores/criteria";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $Collection } from "@package/java/util";
import { $NumberFormat } from "@package/net/minecraft/network/chat/numbers";
import { $StringRepresentable$EnumCodec, $StringRepresentable } from "@package/net/minecraft/util";
import { $IntFunction, $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ChatFormatting_, $ChatFormatting } from "@package/net/minecraft";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Enum, $Record } from "@package/java/lang";
export * as criteria from "@package/net/minecraft/world/scores/criteria";

declare module "@package/net/minecraft/world/scores" {
    export class $Scoreboard {
        getPlayerTeam(arg0: string): $PlayerTeam;
        addPlayerToTeam(arg0: string, arg1: $PlayerTeam): boolean;
        getPlayersTeam(arg0: string): $PlayerTeam;
        forAllObjectives(arg0: $ObjectiveCriteria, arg1: $ScoreHolder_, arg2: $Consumer_<$ScoreAccess>): void;
        onTeamChanged(arg0: $PlayerTeam): void;
        getObjective(arg0: string): $Objective;
        getPlayerScoreInfo(arg0: $ScoreHolder_, arg1: $Objective): $ReadOnlyScoreInfo;
        addObjective(arg0: string, arg1: $ObjectiveCriteria, arg2: $Component_, arg3: $ObjectiveCriteria$RenderType_, arg4: boolean, arg5: $NumberFormat): $Objective;
        onObjectiveAdded(arg0: $Objective): void;
        getOrCreatePlayerScore(arg0: $ScoreHolder_, arg1: $Objective, arg2: boolean): $ScoreAccess;
        getOrCreatePlayerScore(arg0: $ScoreHolder_, arg1: $Objective): $ScoreAccess;
        listPlayerScores(arg0: $ScoreHolder_): $Object2IntMap<$Objective>;
        listPlayerScores(arg0: $Objective): $Collection<$PlayerScoreEntry>;
        getObjectives(): $Collection<$Objective>;
        getObjectiveNames(): $Collection<string>;
        getTrackedPlayers(): $Collection<$ScoreHolder>;
        resetAllPlayerScores(arg0: $ScoreHolder_): void;
        onPlayerRemoved(arg0: $ScoreHolder_): void;
        resetSinglePlayerScore(arg0: $ScoreHolder_, arg1: $Objective): void;
        onPlayerScoreRemoved(arg0: $ScoreHolder_, arg1: $Objective): void;
        removeObjective(arg0: $Objective): void;
        getDisplayObjective(arg0: $DisplaySlot_): $Objective;
        setDisplayObjective(arg0: $DisplaySlot_, arg1: $Objective): void;
        onObjectiveRemoved(arg0: $Objective): void;
        addPlayerTeam(arg0: string): $PlayerTeam;
        onTeamAdded(arg0: $PlayerTeam): void;
        removePlayerTeam(arg0: $PlayerTeam): void;
        onTeamRemoved(arg0: $PlayerTeam): void;
        removePlayerFromTeam(arg0: string): boolean;
        removePlayerFromTeam(arg0: string, arg1: $PlayerTeam): void;
        getTeamNames(): $Collection<string>;
        getPlayerTeams(): $Collection<$PlayerTeam>;
        onObjectiveChanged(arg0: $Objective): void;
        entityRemoved(arg0: $Entity): void;
        static HIDDEN_SCORE_PREFIX: string;
        constructor();
        get objectives(): $Collection<$Objective>;
        get objectiveNames(): $Collection<string>;
        get trackedPlayers(): $Collection<$ScoreHolder>;
        get teamNames(): $Collection<string>;
        get playerTeams(): $Collection<$PlayerTeam>;
    }
    export class $ReadOnlyScoreInfo {
        static safeFormatValue(arg0: $ReadOnlyScoreInfo, arg1: $NumberFormat): $MutableComponent;
    }
    export interface $ReadOnlyScoreInfo {
        formatValue(arg0: $NumberFormat): $MutableComponent;
        numberFormat(): $NumberFormat;
        isLocked(): boolean;
        value(): number;
        get locked(): boolean;
    }
    export class $Objective {
        getRenderType(): $ObjectiveCriteria$RenderType;
        getScoreboard(): $Scoreboard;
        numberFormatOrDefault(arg0: $NumberFormat): $NumberFormat;
        getFormattedDisplayName(): $Component;
        setRenderType(arg0: $ObjectiveCriteria$RenderType_): void;
        getCriteria(): $ObjectiveCriteria;
        setDisplayName(arg0: $Component_): void;
        setDisplayAutoUpdate(arg0: boolean): void;
        displayAutoUpdate(): boolean;
        getDisplayName(): $Component;
        numberFormat(): $NumberFormat;
        setNumberFormat(arg0: $NumberFormat): void;
        getName(): string;
        constructor(arg0: $Scoreboard, arg1: string, arg2: $ObjectiveCriteria, arg3: $Component_, arg4: $ObjectiveCriteria$RenderType_, arg5: boolean, arg6: $NumberFormat);
        get scoreboard(): $Scoreboard;
        get formattedDisplayName(): $Component;
        get criteria(): $ObjectiveCriteria;
        get name(): string;
    }
    export class $DisplaySlot extends $Enum<$DisplaySlot> implements $StringRepresentable {
        getSerializedName(): string;
        static teamColorToSlot(arg0: $ChatFormatting_): $DisplaySlot;
        static values(): $DisplaySlot[];
        static valueOf(arg0: string): $DisplaySlot;
        id(): number;
        getRemappedEnumConstantName(): string;
        static BELOW_NAME: $DisplaySlot;
        static TEAM_GREEN: $DisplaySlot;
        static CODEC: $StringRepresentable$EnumCodec<$DisplaySlot>;
        static TEAM_BLACK: $DisplaySlot;
        static TEAM_DARK_GREEN: $DisplaySlot;
        static TEAM_BLUE: $DisplaySlot;
        static TEAM_DARK_RED: $DisplaySlot;
        static TEAM_YELLOW: $DisplaySlot;
        static TEAM_DARK_GRAY: $DisplaySlot;
        static TEAM_AQUA: $DisplaySlot;
        static BY_ID: $IntFunction<$DisplaySlot>;
        static SIDEBAR: $DisplaySlot;
        static TEAM_DARK_AQUA: $DisplaySlot;
        static TEAM_RED: $DisplaySlot;
        static TEAM_DARK_BLUE: $DisplaySlot;
        static TEAM_LIGHT_PURPLE: $DisplaySlot;
        static TEAM_DARK_PURPLE: $DisplaySlot;
        static TEAM_WHITE: $DisplaySlot;
        static TEAM_GOLD: $DisplaySlot;
        static LIST: $DisplaySlot;
        static TEAM_GRAY: $DisplaySlot;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DisplaySlot}.
     */
    export type $DisplaySlot_ = "list" | "sidebar" | "below_name" | "sidebar.team.black" | "sidebar.team.dark_blue" | "sidebar.team.dark_green" | "sidebar.team.dark_aqua" | "sidebar.team.dark_red" | "sidebar.team.dark_purple" | "sidebar.team.gold" | "sidebar.team.gray" | "sidebar.team.dark_gray" | "sidebar.team.blue" | "sidebar.team.green" | "sidebar.team.aqua" | "sidebar.team.red" | "sidebar.team.light_purple" | "sidebar.team.yellow" | "sidebar.team.white";
    export class $Score implements $ReadOnlyScoreInfo {
        numberFormat(arg0: $NumberFormat): void;
        numberFormat(): $NumberFormat;
        setLocked(arg0: boolean): void;
        display(): $Component;
        display(arg0: $Component_): void;
        isLocked(): boolean;
        value(): number;
        value(arg0: number): void;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $Score;
        formatValue(arg0: $NumberFormat): $MutableComponent;
        constructor();
    }
    export class $Team {
        getColor(): $ChatFormatting;
        isAllowFriendlyFire(): boolean;
        isAlliedTo(arg0: $Team): boolean;
        canSeeFriendlyInvisibles(): boolean;
        getDeathMessageVisibility(): $Team$Visibility;
        getPlayers(): $Collection<string>;
        getFormattedName(arg0: $Component_): $MutableComponent;
        getNameTagVisibility(): $Team$Visibility;
        getCollisionRule(): $Team$CollisionRule;
        getName(): string;
        constructor();
        get color(): $ChatFormatting;
        get allowFriendlyFire(): boolean;
        get deathMessageVisibility(): $Team$Visibility;
        get players(): $Collection<string>;
        get nameTagVisibility(): $Team$Visibility;
        get collisionRule(): $Team$CollisionRule;
        get name(): string;
    }
    export class $Team$CollisionRule extends $Enum<$Team$CollisionRule> {
        getDisplayName(): $Component;
        static byName(arg0: string): $Team$CollisionRule;
        static values(): $Team$CollisionRule[];
        static valueOf(arg0: string): $Team$CollisionRule;
        static PUSH_OTHER_TEAMS: $Team$CollisionRule;
        static NEVER: $Team$CollisionRule;
        id: number;
        static PUSH_OWN_TEAM: $Team$CollisionRule;
        static ALWAYS: $Team$CollisionRule;
        get displayName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Team$CollisionRule}.
     */
    export type $Team$CollisionRule_ = "always" | "never" | "push_other_teams" | "push_own_team";
    export class $ScoreHolder {
        static forNameOnly(arg0: string): $ScoreHolder;
        static fromGameProfile(arg0: $GameProfile): $ScoreHolder;
        static WILDCARD: $ScoreHolder;
        static WILDCARD_NAME: string;
    }
    export interface $ScoreHolder {
        getScoreboardName(): string;
        getFeedbackDisplayName(): $Component;
        getDisplayName(): $Component;
        get scoreboardName(): string;
        get feedbackDisplayName(): $Component;
        get displayName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ScoreHolder}.
     */
    export type $ScoreHolder_ = (() => string);
    export class $PlayerScoreEntry extends $Record {
        formatValue(arg0: $NumberFormat): $MutableComponent;
        numberFormatOverride(): $NumberFormat;
        display(): $Component;
        ownerName(): $Component;
        value(): number;
        isHidden(): boolean;
        owner(): string;
        constructor(arg0: string, arg1: number, arg2: $Component_, arg3: $NumberFormat);
        get hidden(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PlayerScoreEntry}.
     */
    export type $PlayerScoreEntry_ = { value?: number, display?: $Component_, owner?: string, numberFormatOverride?: $NumberFormat,  } | [value?: number, display?: $Component_, owner?: string, numberFormatOverride?: $NumberFormat, ];
    export class $Team$Visibility extends $Enum<$Team$Visibility> {
        static getAllNames(): string[];
        getDisplayName(): $Component;
        static byName(arg0: string): $Team$Visibility;
        static values(): $Team$Visibility[];
        static valueOf(arg0: string): $Team$Visibility;
        static HIDE_FOR_OTHER_TEAMS: $Team$Visibility;
        static NEVER: $Team$Visibility;
        id: number;
        static ALWAYS: $Team$Visibility;
        static HIDE_FOR_OWN_TEAM: $Team$Visibility;
        static get allNames(): string[];
        get displayName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Team$Visibility}.
     */
    export type $Team$Visibility_ = "always" | "never" | "hide_for_other_teams" | "hide_for_own_team";
    export class $PlayerScores {
    }
    export class $PlayerTeam extends $Team {
        getScoreboard(): $Scoreboard;
        static formatNameForTeam(arg0: $Team, arg1: $Component_): $MutableComponent;
        setPlayerPrefix(arg0: $Component_): void;
        getPlayerPrefix(): $Component;
        setPlayerSuffix(arg0: $Component_): void;
        getPlayerSuffix(): $Component;
        setAllowFriendlyFire(arg0: boolean): void;
        setSeeFriendlyInvisibles(arg0: boolean): void;
        setNameTagVisibility(arg0: $Team$Visibility_): void;
        setDeathMessageVisibility(arg0: $Team$Visibility_): void;
        setCollisionRule(arg0: $Team$CollisionRule_): void;
        packOptions(): number;
        unpackOptions(arg0: number): void;
        getFormattedDisplayName(): $MutableComponent;
        setDisplayName(arg0: $Component_): void;
        setColor(arg0: $ChatFormatting_): void;
        getDisplayName(): $Component;
        constructor(arg0: $Scoreboard, arg1: string);
        get scoreboard(): $Scoreboard;
        set allowFriendlyFire(value: boolean);
        set seeFriendlyInvisibles(value: boolean);
        set nameTagVisibility(value: $Team$Visibility_);
        set deathMessageVisibility(value: $Team$Visibility_);
        set collisionRule(value: $Team$CollisionRule_);
        get formattedDisplayName(): $MutableComponent;
        set color(value: $ChatFormatting_);
    }
    export class $ScoreboardSaveData extends $SavedData {
        load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $ScoreboardSaveData;
        static FILE_ID: string;
        constructor(arg0: $Scoreboard);
    }
    export class $ScoreAccess {
    }
    export interface $ScoreAccess {
        locked(): boolean;
        numberFormatOverride(arg0: $NumberFormat): void;
        display(arg0: $Component_): void;
        display(): $Component;
        lock(): void;
        reset(): void;
        get(): number;
        add(arg0: number): number;
        increment(): number;
        set(arg0: number): void;
        unlock(): void;
    }
}
