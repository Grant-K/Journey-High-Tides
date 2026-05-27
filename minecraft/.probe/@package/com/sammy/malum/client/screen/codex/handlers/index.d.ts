import { $AbstractProgressionCodexScreen } from "@package/com/sammy/malum/client/screen/codex/screens/progression";
import { $AbstractMalumCodexScreen } from "@package/com/sammy/malum/client/screen/codex/screens";
import { $PlacedBookEntry } from "@package/com/sammy/malum/client/screen/codex";
import { $ProgressionEntryObject } from "@package/com/sammy/malum/client/screen/codex/objects/progression";
import { $BookObject } from "@package/com/sammy/malum/client/screen/codex/objects";
import { $List_, $ArrayList, $Collection_ } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/com/sammy/malum/client/screen/codex/handlers" {
    export class $BookObjectHandler<T extends $AbstractMalumCodexScreen> {
        click(arg0: T, arg1: number, arg2: number): boolean;
        renderObjects(arg0: T, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        renderObjectsLate(arg0: T, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number): void;
        hasVisibleObject(arg0: T): boolean;
        getObjects(): $ArrayList<$BookObject<T>>;
        renderObject(arg0: T, arg1: $GuiGraphics, arg2: $BookObject<T>, arg3: number, arg4: number, arg5: number): void;
        tick(arg0: T, arg1: number, arg2: number): void;
        tick(arg0: T): void;
        getFirst(): $BookObject<T>;
        remove(arg0: $BookObject<T>): void;
        get(arg0: number): $BookObject<T>;
        isEmpty(): boolean;
        add(arg0: $BookObject<T>): void;
        addAll(arg0: $Collection_<$BookObject<T>>): void;
        constructor();
        get objects(): $ArrayList<$BookObject<T>>;
        get first(): $BookObject<T>;
        get empty(): boolean;
    }
    export class $EntryObjectHandler extends $BookObjectHandler<$AbstractProgressionCodexScreen> {
        setupEntryObjects(arg0: $AbstractProgressionCodexScreen, arg1: $List_<$PlacedBookEntry>): void;
        setupEntryObjects(arg0: $AbstractProgressionCodexScreen): void;
        getOriginObject(): $ProgressionEntryObject;
        getObject(arg0: string): $ProgressionEntryObject;
        getObject(arg0: $PlacedBookEntry): $ProgressionEntryObject;
        constructor();
        get originObject(): $ProgressionEntryObject;
    }
}
