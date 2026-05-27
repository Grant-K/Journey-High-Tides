import { $ItemEntry } from "@package/com/tterrag/registrate/util/entry";
import { $Component } from "@package/net/minecraft/network/chat";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";

declare module "@package/com/drmangotea/tfmg/content/electricity/connection/cable_type" {
    export class $CableType$Properties {
        spool(arg0: $ItemEntry<never>): $CableType$Properties;
        color(arg0: number): $CableType$Properties;
        wire(arg0: $ItemEntry<never>): $CableType$Properties;
        constructor(arg0: $ResourceLocation_);
    }
    export interface $CableType extends RegistryMarked<RegistryTypes.TfmgCableTypesTag, RegistryTypes.TfmgCableTypes> {}
    export class $CableType {
        getDescriptionId(): string;
        getColor(): number;
        getOrCreateDescriptionId(): string;
        getWire(): $ItemEntry<never>;
        getDisplayName(): $Component;
        getSpool(): $ItemEntry<never>;
        getKey(): $ResourceLocation;
        constructor(arg0: $CableType$Properties);
        get descriptionId(): string;
        get color(): number;
        get orCreateDescriptionId(): string;
        get wire(): $ItemEntry<never>;
        get displayName(): $Component;
        get spool(): $ItemEntry<never>;
        get key(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $CableType}.
     */
    export type $CableType_ = RegistryTypes.TfmgCableTypes;
}
