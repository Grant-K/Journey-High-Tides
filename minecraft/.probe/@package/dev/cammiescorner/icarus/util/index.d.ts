
declare module "@package/dev/cammiescorner/icarus/util" {
    export class $StaminaProvider {
    }
    export interface $StaminaProvider {
        icarus$getStamina(): number;
        icarus$getMaxStamina(): number;
        icarus$modifyStamina(arg0: number): void;
        icarus$setStamina(arg0: number): void;
    }
}
