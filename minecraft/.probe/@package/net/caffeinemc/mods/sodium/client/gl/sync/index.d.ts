
declare module "@package/net/caffeinemc/mods/sodium/client/gl/sync" {
    export class $GlFence {
        isCompleted(): boolean;
        sync(arg0: number): void;
        sync(): void;
        delete(): void;
        constructor(arg0: number);
        get completed(): boolean;
    }
}
