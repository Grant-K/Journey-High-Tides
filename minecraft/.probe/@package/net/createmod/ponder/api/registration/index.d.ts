import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Function_, $BiConsumer_ } from "@package/java/util/function";
import { $PonderScene } from "@package/net/createmod/ponder/foundation";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PonderStoryBoard } from "@package/net/createmod/ponder/api/scene";
import { $Object, $Enum, $Record } from "@package/java/lang";
import { $Collection_, $List, $Collection, $Map$Entry } from "@package/java/util";

declare module "@package/net/createmod/ponder/api/registration" {
    export class $StoryBoardEntry {
    }
    export interface $StoryBoardEntry {
        getTags(): $List<$ResourceLocation>;
        getNamespace(): string;
        orderBefore(arg0: string, arg1: string): $StoryBoardEntry;
        orderBefore(arg0: string): $StoryBoardEntry;
        orderAfter(arg0: string, arg1: string): $StoryBoardEntry;
        orderAfter(arg0: string): $StoryBoardEntry;
        highlightTag(arg0: $ResourceLocation_): $StoryBoardEntry;
        highlightAllTags(): $StoryBoardEntry;
        highlightTags(...arg0: $ResourceLocation_[]): $StoryBoardEntry;
        getSchematicLocation(): $ResourceLocation;
        getOrderingEntries(): $List<$StoryBoardEntry$SceneOrderingEntry>;
        getBoard(): $PonderStoryBoard;
        getComponent(): $ResourceLocation;
        get tags(): $List<$ResourceLocation>;
        get namespace(): string;
        get schematicLocation(): $ResourceLocation;
        get orderingEntries(): $List<$StoryBoardEntry$SceneOrderingEntry>;
        get board(): $PonderStoryBoard;
        get component(): $ResourceLocation;
    }
    export class $MultiTagBuilder$Component {
    }
    export interface $MultiTagBuilder$Component {
        add(arg0: $ResourceLocation_): $MultiTagBuilder$Component;
    }
    /**
     * Values that may be interpreted as {@link $MultiTagBuilder$Component}.
     */
    export type $MultiTagBuilder$Component_ = ((arg0: $ResourceLocation) => $MultiTagBuilder$Component);
    export class $MultiTagBuilder$Tag<T> {
    }
    export interface $MultiTagBuilder$Tag<T> {
        add(arg0: T): $MultiTagBuilder$Tag<T>;
    }
    /**
     * Values that may be interpreted as {@link $MultiTagBuilder$Tag}.
     */
    export type $MultiTagBuilder$Tag_<T> = ((arg0: T) => $MultiTagBuilder$Tag<T>);
    export class $StoryBoardEntry$SceneOrderingType extends $Enum<$StoryBoardEntry$SceneOrderingType> {
        static values(): $StoryBoardEntry$SceneOrderingType[];
        static valueOf(arg0: string): $StoryBoardEntry$SceneOrderingType;
        static BEFORE: $StoryBoardEntry$SceneOrderingType;
        static AFTER: $StoryBoardEntry$SceneOrderingType;
    }
    /**
     * Values that may be interpreted as {@link $StoryBoardEntry$SceneOrderingType}.
     */
    export type $StoryBoardEntry$SceneOrderingType_ = "before" | "after";
    export class $StoryBoardEntry$SceneOrderingEntry extends $Record {
        sceneId(): $ResourceLocation;
        static before(arg0: string, arg1: string): $StoryBoardEntry$SceneOrderingEntry;
        static after(arg0: string, arg1: string): $StoryBoardEntry$SceneOrderingEntry;
        type(): $StoryBoardEntry$SceneOrderingType;
        constructor(type: $StoryBoardEntry$SceneOrderingType_, sceneId: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $StoryBoardEntry$SceneOrderingEntry}.
     */
    export type $StoryBoardEntry$SceneOrderingEntry_ = { type?: $StoryBoardEntry$SceneOrderingType_, sceneId?: $ResourceLocation_,  } | [type?: $StoryBoardEntry$SceneOrderingType_, sceneId?: $ResourceLocation_, ];
    export class $PonderTagRegistrationHelper<T> {
    }
    export interface $PonderTagRegistrationHelper<T> {
        registerTag(arg0: string): $TagBuilder;
        registerTag(arg0: $ResourceLocation_): $TagBuilder;
        addToTag(...arg0: $ResourceLocation_[]): $MultiTagBuilder$Tag<T>;
        addToTag(arg0: $ResourceLocation_): $MultiTagBuilder$Tag<T>;
        withKeyFunction<S>(arg0: $Function_<S, T>): $PonderTagRegistrationHelper<S>;
        addTagToComponent(arg0: T, arg1: $ResourceLocation_): void;
        addToComponent(arg0: T): $MultiTagBuilder$Component;
        addToComponent(...arg0: T[]): $MultiTagBuilder$Component;
    }
    export class $TagBuilder {
    }
    export interface $TagBuilder {
        idAsIcon(): $TagBuilder;
        addToIndex(): $TagBuilder;
        item(arg0: $ItemLike_): $TagBuilder;
        item(arg0: $ItemLike_, arg1: boolean, arg2: boolean): $TagBuilder;
        icon(arg0: string): $TagBuilder;
        icon(arg0: $ResourceLocation_): $TagBuilder;
        description(arg0: string): $TagBuilder;
        title(arg0: string): $TagBuilder;
        register(): void;
    }
    export class $SceneRegistryAccess {
    }
    export interface $SceneRegistryAccess {
        doScenesExistForId(arg0: $ResourceLocation_): boolean;
        getRegisteredEntries(): $Collection<$Map$Entry<$ResourceLocation, $StoryBoardEntry>>;
        compile(arg0: $Collection_<$StoryBoardEntry>): $List<$PonderScene>;
        compile(arg0: $ResourceLocation_): $List<$PonderScene>;
        get registeredEntries(): $Collection<$Map$Entry<$ResourceLocation, $StoryBoardEntry>>;
    }
    export class $LangRegistryAccess {
    }
    export interface $LangRegistryAccess {
        provideLang(arg0: string, arg1: $BiConsumer_<string, string>): void;
        getShared(arg0: $ResourceLocation_, ...arg1: $Object[]): string;
        getShared(arg0: $ResourceLocation_): string;
        getTagDescription(arg0: $ResourceLocation_): string;
        getSpecific(arg0: $ResourceLocation_, arg1: string): string;
        getSpecific(arg0: $ResourceLocation_, arg1: string, ...arg2: $Object[]): string;
        getTagName(arg0: $ResourceLocation_): string;
    }
}
