import { $NativeTagManager } from "@package/com/tom/cpl/tag";
import { $Object } from "@package/java/lang";
import { $List } from "@package/java/util";

declare module "@package/com/tom/cpl/block/entity" {
    export class $EntityType {
        getId(): string;
        getType(): $Object;
        static handler: $EntityTypeHandler<$Object>;
        constructor(arg0: $Object);
        get id(): string;
        get type(): $Object;
    }
    export class $ActiveEffect {
        duration: number;
        effectId: string;
        hidden: boolean;
        amplifier: number;
        constructor(arg0: string, arg1: number, arg2: number, arg3: boolean);
    }
    export class $EntityTypeHandler<E> implements $NativeTagManager<$EntityType> {
        listTags(arg0: E): $List<string>;
        getEntityId(arg0: E): string;
        isInNativeTag(arg0: string, arg1: $EntityType): boolean;
        listNativeTags(arg0: $EntityType): $List<string>;
        listAllActiveEffectTypes(): $List<string>;
        isInTag(arg0: string, arg1: E): boolean;
        unwrap(arg0: $EntityType): E;
        equals(arg0: E, arg1: E): boolean;
        wrap(arg0: E): $EntityType;
        getId(arg0: $EntityType): string;
        constructor();
    }
}
