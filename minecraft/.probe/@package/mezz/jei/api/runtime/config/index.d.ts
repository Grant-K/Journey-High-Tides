import { $Path } from "@package/java/nio/file";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Collection, $Collection_, $List } from "@package/java/util";

declare module "@package/mezz/jei/api/runtime/config" {
    export class $IJeiConfigFile {
    }
    export interface $IJeiConfigFile {
        getCategories(): $List<$IJeiConfigCategory>;
        getPath(): $Path;
        get categories(): $List<$IJeiConfigCategory>;
        get path(): $Path;
    }
    export class $IJeiConfigValue<T> {
    }
    export interface $IJeiConfigValue<T> {
        getSerializer(): $IJeiConfigValueSerializer<T>;
        getLocalizedName(): $Component;
        getLocalizedDescription(): $Component;
        getDefaultValue(): T;
        /**
         * @deprecated
         */
        getDescription(): string;
        getName(): string;
        getValue(): T;
        set(arg0: T): boolean;
        get serializer(): $IJeiConfigValueSerializer<T>;
        get localizedName(): $Component;
        get localizedDescription(): $Component;
        get defaultValue(): T;
        get description(): string;
        get name(): string;
        get value(): T;
    }
    export class $IJeiConfigManager {
    }
    export interface $IJeiConfigManager {
        getConfigFiles(): $Collection<$IJeiConfigFile>;
        get configFiles(): $Collection<$IJeiConfigFile>;
    }
    /**
     * Values that may be interpreted as {@link $IJeiConfigManager}.
     */
    export type $IJeiConfigManager_ = (() => $Collection_<$IJeiConfigFile>);
    export class $IJeiConfigValueSerializer<T> {
    }
    export interface $IJeiConfigValueSerializer<T> {
        isValid(arg0: T): boolean;
        getAllValidValues(): ($Collection<T>) | undefined;
        getValidValuesDescription(): string;
        deserialize(arg0: string): $IJeiConfigValueSerializer$IDeserializeResult<T>;
        serialize(arg0: T): string;
        get allValidValues(): ($Collection<T>) | undefined;
        get validValuesDescription(): string;
    }
    export class $IJeiConfigCategory {
    }
    export interface $IJeiConfigCategory {
        getConfigValues(): $Collection<$IJeiConfigValue<never>>;
        getName(): string;
        get configValues(): $Collection<$IJeiConfigValue<never>>;
        get name(): string;
    }
}
