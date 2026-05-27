import { $EnvType_ } from "@package/net/fabricmc/api";
import { $Path } from "@package/java/nio/file";
import { $Version } from "@package/net/fabricmc/loader/api";
import { $Iterable, $Number, $Enum } from "@package/java/lang";
import { $VersionPredicate, $VersionInterval } from "@package/net/fabricmc/loader/api/metadata/version";
import { $List, $Map, $Map$Entry, $Collection } from "@package/java/util";
export * as version from "@package/net/fabricmc/loader/api/metadata/version";

declare module "@package/net/fabricmc/loader/api/metadata" {
    export class $ModOrigin {
    }
    export interface $ModOrigin {
        getParentModId(): string;
        getParentSubLocation(): string;
        getPaths(): $List<$Path>;
        getKind(): $ModOrigin$Kind;
        get parentModId(): string;
        get parentSubLocation(): string;
        get paths(): $List<$Path>;
        get kind(): $ModOrigin$Kind;
    }
    export class $CustomValue$CvObject {
    }
    export interface $CustomValue$CvObject extends $CustomValue, $Iterable<$Map$Entry<string, $CustomValue>> {
        size(): number;
        get(arg0: string): $CustomValue;
        containsKey(arg0: string): boolean;
    }
    export class $Person {
    }
    export interface $Person {
        getContact(): $ContactInformation;
        getName(): string;
        get contact(): $ContactInformation;
        get name(): string;
    }
    export class $ModDependency$Kind extends $Enum<$ModDependency$Kind> {
        isPositive(): boolean;
        isSoft(): boolean;
        static values(): $ModDependency$Kind[];
        static valueOf(arg0: string): $ModDependency$Kind;
        getKey(): string;
        static parse(arg0: string): $ModDependency$Kind;
        static CONFLICTS: $ModDependency$Kind;
        static RECOMMENDS: $ModDependency$Kind;
        static BREAKS: $ModDependency$Kind;
        static DEPENDS: $ModDependency$Kind;
        static SUGGESTS: $ModDependency$Kind;
        get positive(): boolean;
        get soft(): boolean;
        get key(): string;
    }
    /**
     * Values that may be interpreted as {@link $ModDependency$Kind}.
     */
    export type $ModDependency$Kind_ = "depends" | "recommends" | "suggests" | "conflicts" | "breaks";
    export class $ContactInformation {
        static EMPTY: $ContactInformation;
    }
    export interface $ContactInformation {
        asMap(): $Map<string, string>;
        get(arg0: string): (string) | undefined;
    }
    export class $CustomValue$CvArray {
    }
    export interface $CustomValue$CvArray extends $CustomValue, $Iterable<$CustomValue> {
        size(): number;
        get(arg0: number): $CustomValue;
    }
    export class $ModOrigin$Kind extends $Enum<$ModOrigin$Kind> {
        static values(): $ModOrigin$Kind[];
        static valueOf(arg0: string): $ModOrigin$Kind;
        static PATH: $ModOrigin$Kind;
        static NESTED: $ModOrigin$Kind;
        static UNKNOWN: $ModOrigin$Kind;
    }
    /**
     * Values that may be interpreted as {@link $ModOrigin$Kind}.
     */
    export type $ModOrigin$Kind_ = "path" | "nested" | "unknown";
    export class $CustomValue$CvType extends $Enum<$CustomValue$CvType> {
        static values(): $CustomValue$CvType[];
        static valueOf(arg0: string): $CustomValue$CvType;
        static NUMBER: $CustomValue$CvType;
        static ARRAY: $CustomValue$CvType;
        static NULL: $CustomValue$CvType;
        static STRING: $CustomValue$CvType;
        static OBJECT: $CustomValue$CvType;
        static BOOLEAN: $CustomValue$CvType;
    }
    /**
     * Values that may be interpreted as {@link $CustomValue$CvType}.
     */
    export type $CustomValue$CvType_ = "object" | "array" | "string" | "number" | "boolean" | "null";
    export class $ModEnvironment extends $Enum<$ModEnvironment> {
        static values(): $ModEnvironment[];
        static valueOf(arg0: string): $ModEnvironment;
        matches(arg0: $EnvType_): boolean;
        static UNIVERSAL: $ModEnvironment;
        static SERVER: $ModEnvironment;
        static CLIENT: $ModEnvironment;
    }
    /**
     * Values that may be interpreted as {@link $ModEnvironment}.
     */
    export type $ModEnvironment_ = "client" | "server" | "universal";
    export class $ModMetadata {
    }
    export interface $ModMetadata {
        getProvides(): $Collection<string>;
        /**
         * @deprecated
         */
        getSuggests(): $Collection<$ModDependency>;
        /**
         * @deprecated
         */
        getConflicts(): $Collection<$ModDependency>;
        /**
         * @deprecated
         */
        getBreaks(): $Collection<$ModDependency>;
        getAuthors(): $Collection<$Person>;
        getContributors(): $Collection<$Person>;
        getContact(): $ContactInformation;
        getIconPath(arg0: number): (string) | undefined;
        containsCustomValue(arg0: string): boolean;
        getCustomValue(arg0: string): $CustomValue;
        getCustomValues(): $Map<string, $CustomValue>;
        /**
         * @deprecated
         */
        containsCustomElement(arg0: string): boolean;
        /**
         * @deprecated
         */
        getDepends(): $Collection<$ModDependency>;
        /**
         * @deprecated
         */
        getRecommends(): $Collection<$ModDependency>;
        getVersion(): $Version;
        getEnvironment(): $ModEnvironment;
        getDescription(): string;
        getLicense(): $Collection<string>;
        getDependencies(): $Collection<$ModDependency>;
        getName(): string;
        getId(): string;
        getType(): string;
        get provides(): $Collection<string>;
        get suggests(): $Collection<$ModDependency>;
        get conflicts(): $Collection<$ModDependency>;
        get breaks(): $Collection<$ModDependency>;
        get authors(): $Collection<$Person>;
        get contributors(): $Collection<$Person>;
        get contact(): $ContactInformation;
        get customValues(): $Map<string, $CustomValue>;
        get depends(): $Collection<$ModDependency>;
        get recommends(): $Collection<$ModDependency>;
        get version(): $Version;
        get environment(): $ModEnvironment;
        get description(): string;
        get license(): $Collection<string>;
        get dependencies(): $Collection<$ModDependency>;
        get name(): string;
        get id(): string;
        get type(): string;
    }
    export class $CustomValue {
    }
    export interface $CustomValue {
        getAsArray(): $CustomValue$CvArray;
        getAsObject(): $CustomValue$CvObject;
        getAsString(): string;
        getAsBoolean(): boolean;
        getAsNumber(): $Number;
        getType(): $CustomValue$CvType;
        get asArray(): $CustomValue$CvArray;
        get asObject(): $CustomValue$CvObject;
        get asString(): string;
        get asBoolean(): boolean;
        get asNumber(): $Number;
        get type(): $CustomValue$CvType;
    }
    export class $ModDependency {
    }
    export interface $ModDependency {
        getVersionIntervals(): $List<$VersionInterval>;
        getVersionRequirements(): $Collection<$VersionPredicate>;
        getModId(): string;
        getKind(): $ModDependency$Kind;
        matches(arg0: $Version): boolean;
        get versionIntervals(): $List<$VersionInterval>;
        get versionRequirements(): $Collection<$VersionPredicate>;
        get modId(): string;
        get kind(): $ModDependency$Kind;
    }
}
