import { $AzAnimationControllerStateMachine$Context } from "@package/mod/azure/azurelib/common/animation/controller/state/machine";

declare module "@package/mod/azure/azurelib/common/animation/play_behavior" {
    export class $AzPlayBehavior {
        onFinish(arg0: $AzAnimationControllerStateMachine$Context<never>): void;
        onUpdate(arg0: $AzAnimationControllerStateMachine$Context<never>): void;
        name(): string;
    }
}
