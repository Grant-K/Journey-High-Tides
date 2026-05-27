import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";

declare module "@package/com/falaut/kubejsnaturesaura/event" {
    export class $NaturesAuraEventJS implements $KubeEvent {
        createMultiblock(arg0: $ResourceLocation_, arg1: string[][], ...arg2: $Object[]): void;
        custom(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: number, arg3: number): void;
        custom(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: number): void;
        modify(arg0: $ResourceLocation_, arg1: string): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        static INSTANCE: $NaturesAuraEventJS;
        constructor();
    }
}
