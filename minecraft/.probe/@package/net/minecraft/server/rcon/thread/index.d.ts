import { $ServerInterface } from "@package/net/minecraft/server";
import { $Runnable } from "@package/java/lang";

declare module "@package/net/minecraft/server/rcon/thread" {
    export class $RconThread extends $GenericThread {
        static create(arg0: $ServerInterface): $RconThread;
    }
    export class $RconClient extends $GenericThread {
    }
    export class $QueryThreadGs4 extends $GenericThread {
        static create(arg0: $ServerInterface): $QueryThreadGs4;
    }
    export class $GenericThread implements $Runnable {
        isRunning(): boolean;
        start(): boolean;
        stop(): void;
        get running(): boolean;
    }
    export class $QueryThreadGs4$RequestChallenge {
    }
}
