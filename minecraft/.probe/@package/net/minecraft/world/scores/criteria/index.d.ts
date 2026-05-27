import { $Enum } from "@package/java/lang";
import { $Set } from "@package/java/util";
import { $StringRepresentable$EnumCodec, $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/scores/criteria" {
    export class $ObjectiveCriteria {
        static registerCustom(arg0: string, arg1: boolean, arg2: $ObjectiveCriteria$RenderType_): $ObjectiveCriteria;
        static registerCustom(arg0: string): $ObjectiveCriteria;
        static getCustomCriteriaNames(): $Set<string>;
        getDefaultRenderType(): $ObjectiveCriteria$RenderType;
        isReadOnly(): boolean;
        static byName(arg0: string): ($ObjectiveCriteria) | undefined;
        getName(): string;
        static DEATH_COUNT: $ObjectiveCriteria;
        static ARMOR: $ObjectiveCriteria;
        static TRIGGER: $ObjectiveCriteria;
        static KILL_COUNT_ALL: $ObjectiveCriteria;
        static AIR: $ObjectiveCriteria;
        static LEVEL: $ObjectiveCriteria;
        static DUMMY: $ObjectiveCriteria;
        static EXPERIENCE: $ObjectiveCriteria;
        static HEALTH: $ObjectiveCriteria;
        static KILL_COUNT_PLAYERS: $ObjectiveCriteria;
        static TEAM_KILL: $ObjectiveCriteria[];
        static KILLED_BY_TEAM: $ObjectiveCriteria[];
        static FOOD: $ObjectiveCriteria;
        static get customCriteriaNames(): $Set<string>;
        get defaultRenderType(): $ObjectiveCriteria$RenderType;
        get readOnly(): boolean;
        get name(): string;
    }
    export class $ObjectiveCriteria$RenderType extends $Enum<$ObjectiveCriteria$RenderType> implements $StringRepresentable {
        getSerializedName(): string;
        static byId(arg0: string): $ObjectiveCriteria$RenderType;
        static values(): $ObjectiveCriteria$RenderType[];
        static valueOf(arg0: string): $ObjectiveCriteria$RenderType;
        getId(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $StringRepresentable$EnumCodec<$ObjectiveCriteria$RenderType>;
        static HEARTS: $ObjectiveCriteria$RenderType;
        static INTEGER: $ObjectiveCriteria$RenderType;
        get serializedName(): string;
        get id(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ObjectiveCriteria$RenderType}.
     */
    export type $ObjectiveCriteria$RenderType_ = "integer" | "hearts";
}
