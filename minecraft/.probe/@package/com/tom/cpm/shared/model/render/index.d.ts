import { $Direction, $Direction$Axis, $ItemSlot, $ItemSlot_ } from "@package/com/tom/cpl/util";
import { $ActionBuilder } from "@package/com/tom/cpm/shared/editor/actions";
import { $IOHelper } from "@package/com/tom/cpm/shared/io";
import { $Vec4f, $MatrixStack, $MatrixStack$Entry } from "@package/com/tom/cpl/math";
import { $JsonMap } from "@package/com/tom/cpm/shared/editor/project";
import { $List, $Map } from "@package/java/util";
import { $Enum, $Object } from "@package/java/lang";
import { $ModelElement } from "@package/com/tom/cpm/shared/editor/elements";
import { $SkinType_, $RenderedCube, $PartValues } from "@package/com/tom/cpm/shared/model";
import { $VertexBuffer } from "@package/com/tom/cpl/render";
import { $TreeElement$TreeSettingElement } from "@package/com/tom/cpm/shared/editor/tree";

declare module "@package/com/tom/cpm/shared/model/render" {
    export class $Mesh {
        static EMPTY: $Mesh;
    }
    export interface $Mesh {
        free(): void;
        draw(arg0: $MatrixStack, arg1: $VertexBuffer, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getLayer(): $RenderMode;
        get layer(): $RenderMode;
    }
    export class $VanillaModelPart {
    }
    export interface $VanillaModelPart {
        needsPoseSetup(): boolean;
        getCopyFrom(): $VanillaModelPart;
        getDefaultSize(arg0: $SkinType_): $PartValues;
        getName(): string;
        getId(arg0: $RenderedCube): number;
        get copyFrom(): $VanillaModelPart;
        get name(): string;
    }
    export class $ItemRenderer {
        slotID: number;
        slot: $ItemSlot;
        constructor(arg0: $ItemSlot_, arg1: number);
        constructor(arg0: $ItemRenderer);
    }
    export class $ItemTransform {
        getMatrix(): $MatrixStack$Entry;
        set(arg0: $MatrixStack, arg1: boolean): void;
        constructor();
        get matrix(): $MatrixStack$Entry;
    }
    export class $PerFaceUV {
        isAutoUV(arg0: $Direction): boolean;
        getDragBoxes(arg0: $ModelElement): $List<$TreeElement$TreeSettingElement>;
        getFaceElement(arg0: $ModelElement, arg1: $Direction): $TreeElement$TreeSettingElement;
        getFaceElements(arg0: $ModelElement): $List<$TreeElement$TreeSettingElement>;
        readFaces(arg0: $IOHelper): void;
        writeFaces(arg0: $IOHelper): void;
        getRot(arg0: $Direction): $PerFaceUV$Rot;
        getVec(arg0: $Direction): $Vec4f;
        mirror(arg0: $ActionBuilder, arg1: $Direction$Axis): void;
        get(arg0: $Direction): $PerFaceUV$Face;
        contains(arg0: $Direction): boolean;
        toMap(): $Map<string, $Object>;
        faces: $Map<$Direction, $PerFaceUV$Face>;
        constructor(arg0: $JsonMap);
        constructor();
        constructor(arg0: $PerFaceUV);
        constructor(arg0: $ModelElement);
    }
    export class $PlayerModelSetup$ArmPose extends $Enum<$PlayerModelSetup$ArmPose> {
        isTwoHanded(): boolean;
        static values(): $PlayerModelSetup$ArmPose[];
        static valueOf(arg0: string): $PlayerModelSetup$ArmPose;
        static of<T extends $Enum<T>>(arg0: T): $PlayerModelSetup$ArmPose;
        static ITEM: $PlayerModelSetup$ArmPose;
        static BOW_AND_ARROW: $PlayerModelSetup$ArmPose;
        static BRUSH: $PlayerModelSetup$ArmPose;
        static TOOT_HORN: $PlayerModelSetup$ArmPose;
        static CROSSBOW_HOLD: $PlayerModelSetup$ArmPose;
        static BLOCK: $PlayerModelSetup$ArmPose;
        static VALUES: $PlayerModelSetup$ArmPose[];
        static CROSSBOW_CHARGE: $PlayerModelSetup$ArmPose;
        static THROW_SPEAR: $PlayerModelSetup$ArmPose;
        static EMPTY: $PlayerModelSetup$ArmPose;
        static SPYGLASS: $PlayerModelSetup$ArmPose;
        get twoHanded(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PlayerModelSetup$ArmPose}.
     */
    export type $PlayerModelSetup$ArmPose_ = "empty" | "item" | "block" | "bow_and_arrow" | "throw_spear" | "crossbow_charge" | "crossbow_hold" | "spyglass" | "toot_horn" | "brush";
}
