import { $Event } from "@package/net/neoforged/bus/api";
import { $Mob } from "@package/net/minecraft/world/entity";

declare module "@package/net/silentchaos512/powerscale/api/event" {
    export class $SetMobDifficultyEvent extends $Event {
        getNewDifficulty(): number;
        getMob(): $Mob;
        getOriginalDifficulty(): number;
        setNewDifficulty(arg0: number): void;
        getNewPowerLevel(): number;
        constructor(arg0: $Mob, arg1: number);
        get mob(): $Mob;
        get originalDifficulty(): number;
        get newPowerLevel(): number;
    }
}
