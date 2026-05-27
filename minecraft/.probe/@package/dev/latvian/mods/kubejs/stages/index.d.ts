import { $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Collection, $Collection_ } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";

declare module "@package/dev/latvian/mods/kubejs/stages" {
    export class $Stages {
    }
    export interface $Stages {
        getPlayer(): $Player;
        toggle(stage: string): boolean;
        has(stage: string): boolean;
        addNoUpdate(stage: string): boolean;
        removeNoUpdate(stage: string): boolean;
        sync(): void;
        getAll(): $Collection<string>;
        remove(stage: string): boolean;
        clear(): boolean;
        replace(stages: $Collection_<string>): void;
        add(stage: string): boolean;
        set(stage: string, enabled: boolean): boolean;
        get player(): $Player;
        get all(): $Collection<string>;
    }
    export class $TagWrapperStages extends $Record implements $Stages {
        player(): $Player;
        getPlayer(): $Player;
        addNoUpdate(stage: string): boolean;
        removeNoUpdate(stage: string): boolean;
        getAll(): $Collection<string>;
        clear(): boolean;
        replace(stages: $Collection_<string>): void;
        toggle(stage: string): boolean;
        has(stage: string): boolean;
        sync(): void;
        remove(stage: string): boolean;
        add(stage: string): boolean;
        set(stage: string, enabled: boolean): boolean;
        constructor(player: $Player);
        get all(): $Collection<string>;
    }
    /**
     * Values that may be interpreted as {@link $TagWrapperStages}.
     */
    export type $TagWrapperStages_ = { player?: $Player,  } | [player?: $Player, ];
    export class $StageCreationEvent extends $PlayerEvent implements $ICancellableEvent {
        getPlayerStages(): $Stages;
        setPlayerStages(s: $Stages): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
    }
    export class $StageEvents {
        static create(player: $Player): $Stages;
        static get(player: $Player): $Stages;
    }
    export interface $StageEvents {
    }
    export class $NoStages extends $Record implements $Stages {
        player(): $Player;
        getPlayer(): $Player;
        has(stage: string): boolean;
        addNoUpdate(stage: string): boolean;
        removeNoUpdate(stage: string): boolean;
        sync(): void;
        getAll(): $Collection<string>;
        clear(): boolean;
        replace(stages: $Collection_<string>): void;
        toggle(stage: string): boolean;
        remove(stage: string): boolean;
        add(stage: string): boolean;
        set(stage: string, enabled: boolean): boolean;
        static NULL_INSTANCE: $NoStages;
        constructor(player: $Player);
        get all(): $Collection<string>;
    }
    /**
     * Values that may be interpreted as {@link $NoStages}.
     */
    export type $NoStages_ = { player?: $Player,  } | [player?: $Player, ];
}
