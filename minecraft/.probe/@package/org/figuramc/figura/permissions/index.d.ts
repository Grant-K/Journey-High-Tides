import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $Map, $List } from "@package/java/util";
import { $Enum } from "@package/java/lang";

declare module "@package/org/figuramc/figura/permissions" {
    export class $Permissions$Category extends $Enum<$Permissions$Category> {
        static values(): $Permissions$Category[];
        static indexOf(i: number): $Permissions$Category;
        static valueOf(name: string): $Permissions$Category;
        static HIGH: $Permissions$Category;
        color: number;
        static LOW: $Permissions$Category;
        static MAX: $Permissions$Category;
        static BLOCKED: $Permissions$Category;
        index: number;
        text: $MutableComponent;
        static DEFAULT: $Permissions$Category;
        info: $MutableComponent;
    }
    /**
     * Values that may be interpreted as {@link $Permissions$Category}.
     */
    export type $Permissions$Category_ = "blocked" | "low" | "default" | "high" | "max";
    export class $Permissions {
        checkInfinity(value: number): boolean;
        showSteps(): boolean;
        asBoolean(value: number): boolean;
        getDefault(category: $Permissions$Category_): number;
        static ANIMATION_INST: $Permissions;
        static RENDER_INST: $Permissions;
        static TEXTURE_SIZE: $Permissions;
        static CANCEL_SOUNDS: $Permissions;
        static PARTICLES: $Permissions;
        stepSize: number;
        static BUFFERS_COUNT: $Permissions;
        static CUSTOM_SKULL: $Permissions;
        min: number;
        static COMPLEXITY: $Permissions;
        static BB_ANIMATIONS: $Permissions;
        static NETWORKING: $Permissions;
        static BUFFER_SIZE: $Permissions;
        static VANILLA_MODEL_EDIT: $Permissions;
        static CUSTOM_SOUNDS: $Permissions;
        static WORLD_RENDER_INST: $Permissions;
        static OFFSCREEN_RENDERING: $Permissions;
        max: number;
        static WORLD_TICK_INST: $Permissions;
        static SOUNDS: $Permissions;
        static VOLUME: $Permissions;
        static TICK_INST: $Permissions;
        static INIT_INST: $Permissions;
        isToggle: boolean;
        name: string;
        static NAMEPLATE_EDIT: $Permissions;
        static DEFAULT: $List<$Permissions>;
        constructor(name: string, blocked: number, low: number, def: number, high: number, max: number);
        constructor(name: string, sliderMin: number, sliderMax: number, stepSize: number, blocked: number, low: number, def: number, high: number, max: number);
        constructor(name: string, sliderMin: number, sliderMax: number, blocked: number, low: number, def: number, high: number, max: number);
    }
    export class $PermissionPack$PlayerPermissionPack extends $PermissionPack {
        name: string;
        category: $PermissionPack$CategoryPermissionPack;
        constructor(category: $PermissionPack$CategoryPermissionPack, name: string);
    }
    export class $PermissionPack$CategoryPermissionPack extends $PermissionPack {
        name: string;
        category: $Permissions$Category;
        constructor(category: $Permissions$Category_);
    }
    export class $PermissionPack {
        setVisible(visible: boolean): void;
        getColor(): number;
        writeNbt(nbt: $CompoundTag_): void;
        isVisible(): boolean;
        loadNbt(nbt: $CompoundTag_): void;
        getCustomPermissions(): $Map<string, $Map<$Permissions, number>>;
        getCategoryName(): $MutableComponent;
        isChanged(permissions: $Permissions): boolean;
        hasChanges(): boolean;
        getCategory(): $Permissions$Category;
        setCategory(arg0: $PermissionPack$CategoryPermissionPack): void;
        reset(permissions: $Permissions): void;
        get(permissions: $Permissions): number;
        insert(permissions: $Permissions, value: number, id: string): void;
        clear(): void;
        getPermissions(): $Map<$Permissions, number>;
        name: string;
        constructor(name: string);
        get color(): number;
        get customPermissions(): $Map<string, $Map<$Permissions, number>>;
        get categoryName(): $MutableComponent;
        get permissions(): $Map<$Permissions, number>;
    }
}
