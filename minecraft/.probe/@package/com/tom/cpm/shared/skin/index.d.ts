import { $File_ } from "@package/java/io";
import { $ModelDefinition } from "@package/com/tom/cpm/shared/definition";
import { $DynamicTexture, $Image } from "@package/com/tom/cpl/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Vec2i } from "@package/com/tom/cpl/math";
import { $IOHelper } from "@package/com/tom/cpm/shared/io";
import { $Enum } from "@package/java/lang";

declare module "@package/com/tom/cpm/shared/skin" {
    export class $TextureProvider {
        bind(): void;
        setImage(arg0: $Image): void;
        getSize(): $Vec2i;
        free(): void;
        getImage(): $Image;
        write(arg0: $IOHelper): void;
        size: $Vec2i;
        texture: $DynamicTexture;
        constructor();
        constructor(arg0: $Image, arg1: $Vec2i);
        constructor(arg0: $IOHelper, arg1: $ModelDefinition);
    }
    export class $TextureType extends $Enum<$TextureType> {
        static values(): $TextureType[];
        static valueOf(arg0: string): $TextureType;
        static ELYTRA: $TextureType;
        static VALUES: $TextureType[];
        static SKIN: $TextureType;
        static CAPE: $TextureType;
    }
    /**
     * Values that may be interpreted as {@link $TextureType}.
     */
    export type $TextureType_ = "skin" | "cape" | "elytra";
    export class $PlayerTextureLoader {
        hasTexture(arg0: $TextureType_): boolean;
        getTexture(arg0: $TextureType_): $CompletableFuture<$Image>;
        load(): $CompletableFuture<void>;
        constructor();
        constructor(arg0: $File_);
    }
}
