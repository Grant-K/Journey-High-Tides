import { $StructureTemplatePool, $StructurePoolElement } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $StructureTemplate, $StructureProcessorType_, $StructureTemplate$Palette, $StructureTemplateManager, $StructureProcessorType, $StructureProcessorList } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $MutableObject } from "@package/org/apache/commons/lang3/mutable";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $Rotation_ } from "@package/net/minecraft/world/level/block";
import { $List, $List_ } from "@package/java/util";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";

declare module "@package/com/finndog/moogs_structures/mixins/structures" {
    export class $StructurePieceAccessor {
    }
    export interface $StructurePieceAccessor {
        setBoundingBox(arg0: $BoundingBox): void;
        set boundingBox(value: $BoundingBox);
    }
    /**
     * Values that may be interpreted as {@link $StructurePieceAccessor}.
     */
    export type $StructurePieceAccessor_ = ((arg0: $BoundingBox) => void);
    export class $PoolElementStructurePieceAccessor {
    }
    export interface $PoolElementStructurePieceAccessor {
        getStructureManager(): $StructureTemplateManager;
        setRotation(arg0: $Rotation_): void;
        get structureManager(): $StructureTemplateManager;
        set rotation(value: $Rotation_);
    }
    export class $StructureProcessorAccessor {
    }
    export interface $StructureProcessorAccessor {
        callGetType(): $StructureProcessorType<never>;
    }
    /**
     * Values that may be interpreted as {@link $StructureProcessorAccessor}.
     */
    export type $StructureProcessorAccessor_ = (() => $StructureProcessorType_<never>);
    export class $SinglePoolElementAccessor {
    }
    export interface $SinglePoolElementAccessor {
        callGetTemplate(arg0: $StructureTemplateManager): $StructureTemplate;
        moogs_structures_getTemplate(): $Either<$ResourceLocation, $StructureTemplate>;
        moogs_structures_getProcessors(): $Holder<$StructureProcessorList>;
    }
    export class $StructurePoolAccessor {
        static getCODEC_REFERENCE(): $MutableObject<$Codec<$Holder<$StructureTemplatePool>>>;
        static get CODEC_REFERENCE(): $MutableObject<$Codec<$Holder<$StructureTemplatePool>>>;
    }
    export interface $StructurePoolAccessor {
        moogs_structures_getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        moogs_structures_setRawTemplates(arg0: $List_<$Pair<$StructurePoolElement, number>>): void;
        moogs_structures_getTemplates(): $ObjectArrayList<$StructurePoolElement>;
        moogs_structures_setTemplates(arg0: $ObjectArrayList<$StructurePoolElement>): void;
    }
    export class $StructureTemplateManagerAccessor {
    }
    export interface $StructureTemplateManagerAccessor {
        moogs_structures_getResourceManager(): $ResourceManager;
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplateManagerAccessor}.
     */
    export type $StructureTemplateManagerAccessor_ = (() => $ResourceManager);
    export class $ListPoolElementAccessor {
    }
    export interface $ListPoolElementAccessor {
        moogs_structures_getElements(): $List<$StructurePoolElement>;
    }
    /**
     * Values that may be interpreted as {@link $ListPoolElementAccessor}.
     */
    export type $ListPoolElementAccessor_ = (() => $List_<$StructurePoolElement>);
    export class $TemplateAccessor {
    }
    export interface $TemplateAccessor {
        moogs_structures_getPalettes(): $List<$StructureTemplate$Palette>;
    }
    /**
     * Values that may be interpreted as {@link $TemplateAccessor}.
     */
    export type $TemplateAccessor_ = (() => $List_<$StructureTemplate$Palette>);
}
