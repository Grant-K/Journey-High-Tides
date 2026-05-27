
declare module "@package/me/kall/doespotatotick/ext" {
    export class $Tickable {
    }
    export interface $Tickable {
        dpt$tickable(): boolean;
        dpt$alwaysTick(): boolean;
        dpt$setTickable(arg0: boolean): void;
        dpt$setAlwaysTick(arg0: boolean): void;
        dpt$checkAlwaysTick(): boolean;
    }
    export class $Tickable$Level {
    }
    export interface $Tickable$Level {
        dpt$valid(): boolean;
        dpt$setValid(arg0: boolean): void;
        dpt$hasRaids(): boolean;
    }
}
