import { $List } from "@package/java/util";
import { $CreativeSubTab } from "@package/de/dafuqs/fractal/api";

declare module "@package/de/dafuqs/fractal/interfaces" {
    export class $ICreativeTabParent {
    }
    export interface $ICreativeTabParent {
        fractal$getChildren(): $List<$CreativeSubTab>;
        fractal$getSelectedChild(): $CreativeSubTab;
        fractal$setSelectedChild(arg0: $CreativeSubTab): void;
        fractal$getTabOffset(): number;
        fractal$getTextR(): number;
        fractal$getTextG(): number;
        fractal$getTextB(): number;
    }
    export class $ISubTabLocation {
    }
    export interface $ISubTabLocation {
        fractal$getY(): number;
        fractal$getX(): number;
        fractal$getH(): number;
        fractal$getX2(): number;
        fractal$getH2(): number;
    }
}
