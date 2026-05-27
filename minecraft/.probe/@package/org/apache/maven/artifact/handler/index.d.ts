
declare module "@package/org/apache/maven/artifact/handler" {
    export class $ArtifactHandler {
        static ROLE: string;
    }
    export interface $ArtifactHandler {
        getPackaging(): string;
        isIncludesDependencies(): boolean;
        isAddedToClasspath(): boolean;
        getDirectory(): string;
        getExtension(): string;
        getLanguage(): string;
        getClassifier(): string;
        get packaging(): string;
        get includesDependencies(): boolean;
        get addedToClasspath(): boolean;
        get directory(): string;
        get extension(): string;
        get language(): string;
        get classifier(): string;
    }
}
