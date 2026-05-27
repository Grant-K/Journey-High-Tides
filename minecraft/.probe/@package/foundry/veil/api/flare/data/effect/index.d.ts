import { $MatrixStack } from "@package/foundry/veil/api/client/render";
import { $Codec } from "@package/com/mojang/serialization";
import { $EffectHost } from "@package/foundry/veil/api/flare";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BakedShell } from "@package/foundry/veil/api/flare/model";
import { $PropertyModifier } from "@package/foundry/veil/api/flare/modifier";
import { $Collection_, $List, $List_, $Map_, $Map } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $Property } from "@package/foundry/veil/api/client/property";
import { $Vector3fc } from "@package/org/joml";

declare module "@package/foundry/veil/api/flare/data/effect" {
    export class $FlareModel {
        getMaterials(): $FlareMaterial[];
        getShell(): $ResourceLocation;
        getRotationOffset(): $Vector3fc;
        getScaleOffset(): $Vector3fc;
        render(arg0: $EffectHost, arg1: $MatrixStack, arg2: $Map_<string, $List_<$PropertyModifier<never>>>, arg3: $Map_<$ResourceLocation_, $BakedShell>): void;
        getPositionOffset(): $Vector3fc;
        static CODEC: $Codec<$FlareModel>;
        static ROTATION_PROPERTY_NAME: string;
        static SCALE_PROPERTY_NAME: string;
        static POSITION_PROPERTY_NAME: string;
        constructor(arg0: $ResourceLocation_, arg1: $Vector3fc, arg2: $Vector3fc, arg3: $Vector3fc, arg4: $Collection_<$FlareMaterial>);
        get materials(): $FlareMaterial[];
        get shell(): $ResourceLocation;
        get rotationOffset(): $Vector3fc;
        get scaleOffset(): $Vector3fc;
        get positionOffset(): $Vector3fc;
    }
    export class $FlareSubModule extends $Record {
        templates(): $ResourceLocation[];
        render(arg0: $EffectHost, arg1: $MatrixStack, arg2: number, arg3: $Map_<$ResourceLocation_, $BakedShell>): void;
        render(arg0: $EffectHost, arg1: $MatrixStack, arg2: number): void;
        static CODEC: $Codec<$FlareSubModule>;
        constructor(templates: $ResourceLocation_[]);
        constructor(arg0: $Collection_<$ResourceLocation_>);
    }
    /**
     * Values that may be interpreted as {@link $FlareSubModule}.
     */
    export type $FlareSubModule_ = { templates?: $ResourceLocation_[],  } | [templates?: $ResourceLocation_[], ];
    export class $FlareEffectTemplate extends $Record {
        effectLayers(): $FlareEffectLayer[];
        activeEffectLayers(): $FlareEffectLayer[];
        render(arg0: $EffectHost, arg1: $MatrixStack, arg2: number, arg3: $Map_<$ResourceLocation_, $BakedShell>): void;
        render(arg0: $EffectHost, arg1: $MatrixStack, arg2: number): void;
        static CODEC: $Codec<$FlareEffectTemplate>;
        constructor(arg0: $Collection_<$FlareEffectLayer>);
        constructor(arg0: $FlareEffectLayer[]);
        constructor(effectLayers: $FlareEffectLayer[], activeEffectLayers: $FlareEffectLayer[]);
    }
    /**
     * Values that may be interpreted as {@link $FlareEffectTemplate}.
     */
    export type $FlareEffectTemplate_ = { activeEffectLayers?: $FlareEffectLayer[], effectLayers?: $FlareEffectLayer[],  } | [activeEffectLayers?: $FlareEffectLayer[], effectLayers?: $FlareEffectLayer[], ];
    export class $FlareModule extends $Record {
        subModules(): $Map<string, $FlareSubModule>;
        getSubModule(arg0: string): $FlareSubModule;
        static CODEC: $Codec<$FlareModule>;
        constructor(subModules: $Map_<string, $FlareSubModule_>);
    }
    /**
     * Values that may be interpreted as {@link $FlareModule}.
     */
    export type $FlareModule_ = { subModules?: $Map_<string, $FlareSubModule_>,  } | [subModules?: $Map_<string, $FlareSubModule_>, ];
    export class $FlareEffectLayer {
        isDisabled(): boolean;
        putModelProperties(arg0: $Map_<string, $Property<never>>): void;
        getOriginalModifiers(): $PropertyModifier<never>[];
        render(arg0: $EffectHost, arg1: $MatrixStack, arg2: number, arg3: $Map_<$ResourceLocation_, $BakedShell>): void;
        getModel(): $FlareModel;
        getName(): string;
        getModifiers(): $Map<string, $List<$PropertyModifier<never>>>;
        static CODEC: $Codec<$FlareEffectLayer>;
        constructor(arg0: string, arg1: boolean, arg2: $FlareModel, arg3: $List_<$PropertyModifier<never>>);
        get disabled(): boolean;
        get originalModifiers(): $PropertyModifier<never>[];
        get model(): $FlareModel;
        get name(): string;
        get modifiers(): $Map<string, $List<$PropertyModifier<never>>>;
    }
}
