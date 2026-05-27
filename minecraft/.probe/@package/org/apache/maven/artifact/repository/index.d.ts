import { $Proxy } from "@package/org/apache/maven/repository";
import { $ArtifactRepositoryLayout } from "@package/org/apache/maven/artifact/repository/layout";
import { $Date, $List_, $List } from "@package/java/util";
import { $Artifact } from "@package/org/apache/maven/artifact";
import { $ArtifactMetadata } from "@package/org/apache/maven/artifact/metadata";
export * as layout from "@package/org/apache/maven/artifact/repository/layout";

declare module "@package/org/apache/maven/artifact/repository" {
    export class $ArtifactRepositoryPolicy {
        setChecksumPolicy(arg0: string): void;
        getChecksumPolicy(): string;
        checkOutOfDate(arg0: $Date): boolean;
        setEnabled(arg0: boolean): void;
        setUpdatePolicy(arg0: string): void;
        getUpdatePolicy(): string;
        isEnabled(): boolean;
        merge(arg0: $ArtifactRepositoryPolicy): void;
        static CHECKSUM_POLICY_IGNORE: string;
        static UPDATE_POLICY_DAILY: string;
        static CHECKSUM_POLICY_FAIL: string;
        static UPDATE_POLICY_NEVER: string;
        static CHECKSUM_POLICY_WARN: string;
        static UPDATE_POLICY_INTERVAL: string;
        static UPDATE_POLICY_ALWAYS: string;
        constructor(arg0: $ArtifactRepositoryPolicy);
        constructor(arg0: boolean, arg1: string, arg2: string);
        constructor();
    }
    export class $Authentication {
        getPassphrase(): string;
        setPassphrase(arg0: string): void;
        setPrivateKey(arg0: string): void;
        getUsername(): string;
        getPrivateKey(): string;
        setUsername(arg0: string): void;
        getPassword(): string;
        setPassword(arg0: string): void;
        constructor(arg0: string, arg1: string);
    }
    export class $ArtifactRepository {
    }
    export interface $ArtifactRepository {
        pathOfRemoteRepositoryMetadata(arg0: $ArtifactMetadata): string;
        pathOfLocalRepositoryMetadata(arg0: $ArtifactMetadata, arg1: $ArtifactRepository): string;
        setAuthentication(arg0: $Authentication): void;
        getAuthentication(): $Authentication;
        setSnapshotUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        /**
         * @deprecated
         */
        isUniqueVersion(): boolean;
        setReleaseUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        pathOf(arg0: $Artifact): string;
        getBasedir(): string;
        /**
         * @deprecated
         */
        setBlacklisted(arg0: boolean): void;
        getMirroredRepositories(): $List<$ArtifactRepository>;
        setMirroredRepositories(arg0: $List_<$ArtifactRepository>): void;
        findVersions(arg0: $Artifact): $List<string>;
        isProjectAware(): boolean;
        getProxy(): $Proxy;
        isBlocked(): boolean;
        setBlocked(arg0: boolean): void;
        /**
         * @deprecated
         */
        isBlacklisted(): boolean;
        setProxy(arg0: $Proxy): void;
        setUrl(arg0: string): void;
        getProtocol(): string;
        getUrl(): string;
        getLayout(): $ArtifactRepositoryLayout;
        setLayout(arg0: $ArtifactRepositoryLayout): void;
        setId(arg0: string): void;
        getReleases(): $ArtifactRepositoryPolicy;
        getSnapshots(): $ArtifactRepositoryPolicy;
        getKey(): string;
        find(arg0: $Artifact): $Artifact;
        getId(): string;
        set snapshotUpdatePolicy(value: $ArtifactRepositoryPolicy);
        get uniqueVersion(): boolean;
        set releaseUpdatePolicy(value: $ArtifactRepositoryPolicy);
        get basedir(): string;
        get projectAware(): boolean;
        get protocol(): string;
        get releases(): $ArtifactRepositoryPolicy;
        get snapshots(): $ArtifactRepositoryPolicy;
        get key(): string;
    }
}
