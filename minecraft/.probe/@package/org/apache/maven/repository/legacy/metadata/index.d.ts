import { $ArtifactRepository } from "@package/org/apache/maven/artifact/repository";
import { $Object } from "@package/java/lang";

declare module "@package/org/apache/maven/repository/legacy/metadata" {
    export class $ArtifactMetadata {
    }
    export interface $ArtifactMetadata {
        getBaseVersion(): string;
        storedInArtifactVersionDirectory(): boolean;
        storedInGroupDirectory(): boolean;
        storeInLocalRepository(arg0: $ArtifactRepository, arg1: $ArtifactRepository): void;
        getLocalFilename(arg0: $ArtifactRepository): string;
        getRemoteFilename(): string;
        extendedToString(): string;
        getGroupId(): string;
        getArtifactId(): string;
        merge(arg0: $ArtifactMetadata): void;
        getKey(): $Object;
        get baseVersion(): string;
        get remoteFilename(): string;
        get groupId(): string;
        get artifactId(): string;
        get key(): $Object;
    }
}
