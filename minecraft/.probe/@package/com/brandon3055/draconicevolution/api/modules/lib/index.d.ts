import { $ModuleHost } from "@package/com/brandon3055/draconicevolution/api/capability";
import { $ItemStack_, $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $IOPStorage } from "@package/com/brandon3055/brandonscore/api/power";
import { $Codec } from "@package/com/mojang/serialization";
import { $MCDataOutput, $MCDataInput } from "@package/codechicken/lib/data";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $Multimap } from "@package/com/google/common/collect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AttributeModifier_, $Attribute_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $List, $List_ } from "@package/java/util";
import { $GuiElement } from "@package/codechicken/lib/gui/modular/elements";
import { $ConfigProperty } from "@package/com/brandon3055/draconicevolution/api/config";
import { $Consumer_ } from "@package/java/util/function";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ModuleData } from "@package/com/brandon3055/draconicevolution/api/modules/data";
import { $GuiRender } from "@package/codechicken/lib/gui/modular/lib";
import { $ClickType_ } from "@package/net/minecraft/world/inventory";
import { $Enum } from "@package/java/lang";
import { $Module, $Module_ } from "@package/com/brandon3055/draconicevolution/api/modules";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/brandon3055/draconicevolution/api/modules/lib" {
    export class $ModuleContext {
        getOpStorage(): $IOPStorage;
        getType(): $ModuleContext$Type;
        constructor();
        get opStorage(): $IOPStorage;
        get type(): $ModuleContext$Type;
    }
    export class $InstallResult {
        getBlockingResult(arg0: $InstallResult): $InstallResult;
        reason: $List<$Component>;
        module: $Module<never>;
        resultType: $InstallResult$InstallResultType;
        incompatibleModule: $Module<never>;
        constructor(arg0: $InstallResult$InstallResultType_, arg1: $Module_<never>, arg2: $Module_<never>, arg3: $Component_);
        constructor(arg0: $InstallResult$InstallResultType_, arg1: $Module_<never>, arg2: $Module_<never>, arg3: $List_<$Component_>);
    }
    export class $InstallResult$InstallResultType extends $Enum<$InstallResult$InstallResultType> {
        static values(): $InstallResult$InstallResultType[];
        static valueOf(arg0: string): $InstallResult$InstallResultType;
        static OVERRIDE: $InstallResult$InstallResultType;
        static NO: $InstallResult$InstallResultType;
        static YES: $InstallResult$InstallResultType;
        static ONLY_WHEN_OVERRIDEN: $InstallResult$InstallResultType;
    }
    /**
     * Values that may be interpreted as {@link $InstallResult$InstallResultType}.
     */
    export type $InstallResult$InstallResultType_ = "yes" | "only_when_overriden" | "override" | "no";
    export class $ModuleEntity<T extends $ModuleData<T>> {
        setPos(arg0: number, arg1: number): void;
        getAttributeModifiers(arg0: $EquipmentSlot_, arg1: $ItemStack_, arg2: $Multimap<$Attribute_, $AttributeModifier_>): void;
        markDirty(): void;
        intersects(arg0: $ModuleEntity<any>): boolean;
        tick(arg0: $ModuleContext): void;
        checkPos(arg0: number, arg1: number): boolean;
        onRemoved(arg0: $ModuleContext): void;
        getGridX(): number;
        addHostHoverText(arg0: $ItemStack_, arg1: $Item$TooltipContext, arg2: $List_<$Component_>, arg3: $TooltipFlag): void;
        getGridY(): number;
        addToolTip(arg0: $List_<$Component_>): void;
        handleClientMessage(arg0: $MCDataInput): void;
        loadEntityFromStack(arg0: $ItemStack_, arg1: $ModuleContext): void;
        static optionalDefault<T>(arg0: T, arg1: (T) | undefined): (T) | undefined;
        setGridY(arg0: number): void;
        setGridX(arg0: number): void;
        saveEntityToStack(arg0: $ItemStack_, arg1: $ModuleContext): void;
        getMaxGridX(): number;
        getMaxGridY(): number;
        static drawBackgroundString(arg0: $GuiRender, arg1: $Component_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: boolean): void;
        onInstalled(arg0: $ModuleContext): void;
        getEntityProperties(arg0: $List_<$ConfigProperty>): void;
        renderModule(arg0: $GuiElement<never>, arg1: $GuiRender, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number): void;
        renderModuleOverlay(arg0: $GuiElement<never>, arg1: $ModuleContext, arg2: $GuiRender, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): boolean;
        clientModuleClicked(arg0: $GuiElement<never>, arg1: $Player, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): boolean;
        moduleClicked(arg0: $Player, arg1: number, arg2: number, arg3: number, arg4: $ClickType_): boolean;
        isPosValid(arg0: number, arg1: number): boolean;
        sendMessageToServer(arg0: $RegistryAccess, arg1: $Consumer_<$MCDataOutput>): void;
        getWidth(): number;
        getHeight(): number;
        setHost(arg0: $ModuleHost): void;
        clearCaches(): void;
        getModule(): $Module<T>;
        contains(arg0: number, arg1: number): boolean;
        copy(): $ModuleEntity<never>;
        static CODEC: $Codec<$ModuleEntity<never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ModuleEntity<never>>;
        get maxGridX(): number;
        get maxGridY(): number;
        get width(): number;
        get height(): number;
        set host(value: $ModuleHost);
        get module(): $Module<T>;
    }
    export class $ModuleContext$Type extends $Enum<$ModuleContext$Type> {
        static values(): $ModuleContext$Type[];
        static valueOf(arg0: string): $ModuleContext$Type;
        static LIMITED: $ModuleContext$Type;
        static ITEM_STACK: $ModuleContext$Type;
        static TILE_ENTITY: $ModuleContext$Type;
    }
    /**
     * Values that may be interpreted as {@link $ModuleContext$Type}.
     */
    export type $ModuleContext$Type_ = "item_stack" | "tile_entity" | "limited";
}
