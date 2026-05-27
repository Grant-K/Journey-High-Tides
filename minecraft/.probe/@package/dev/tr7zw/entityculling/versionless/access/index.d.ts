
declare module "@package/dev/tr7zw/entityculling/versionless/access" {
    export class $Cullable {
    }
    export interface $Cullable {
        isForcedVisible(): boolean;
        setCulled(arg0: boolean): void;
        isCulled(): boolean;
        setOutOfCamera(arg0: boolean): void;
        isOutOfCamera(): boolean;
        setTimeout(): void;
        get forcedVisible(): boolean;
    }
}
