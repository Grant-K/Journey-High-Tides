import { $CommentedConfig, $UnmodifiableCommentedConfig } from "@package/com/electronwill/nightconfig/core";
import { $Path } from "@package/java/nio/file";
import { $Enum } from "@package/java/lang";

declare module "@package/net/neoforged/fml/config" {
    export class $ModConfig$Type extends $Enum<$ModConfig$Type> {
        extension(): string;
        static values(): $ModConfig$Type[];
        static valueOf(arg0: string): $ModConfig$Type;
        static SERVER: $ModConfig$Type;
        static COMMON: $ModConfig$Type;
        static STARTUP: $ModConfig$Type;
        static CLIENT: $ModConfig$Type;
    }
    /**
     * Values that may be interpreted as {@link $ModConfig$Type}.
     */
    export type $ModConfig$Type_ = "common" | "client" | "server" | "startup";
    export class $ModConfig {
        getFullPath(): $Path;
        getLoadedConfig(): $IConfigSpec$ILoadedConfig;
        getFileName(): string;
        getSpec(): $IConfigSpec;
        getModId(): string;
        getType(): $ModConfig$Type;
        get fullPath(): $Path;
        get loadedConfig(): $IConfigSpec$ILoadedConfig;
        get fileName(): string;
        get spec(): $IConfigSpec;
        get modId(): string;
        get type(): $ModConfig$Type;
    }
    export class $IConfigSpec$ILoadedConfig {
    }
    export interface $IConfigSpec$ILoadedConfig {
        config(): $CommentedConfig;
        save(): void;
    }
    export class $IConfigSpec {
    }
    export interface $IConfigSpec {
        validateSpec(arg0: $ModConfig): void;
        acceptConfig(arg0: $IConfigSpec$ILoadedConfig): void;
        isCorrect(arg0: $UnmodifiableCommentedConfig): boolean;
        correct(arg0: $CommentedConfig): void;
        isEmpty(): boolean;
        get empty(): boolean;
    }
}
