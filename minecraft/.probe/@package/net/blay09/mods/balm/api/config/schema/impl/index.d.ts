import { $LoadedConfig } from "@package/net/blay09/mods/balm/api/config";
import { $Function_ } from "@package/java/util/function";
import { $ConfigPropertyBuilder, $ConfigCategory, $ConfigCategoryBuilder } from "@package/net/blay09/mods/balm/api/config/schema/builder";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List, $Collection } from "@package/java/util";
import { $ConfiguredProperty, $BalmConfigSchema, $ConfigSchemaBuilder } from "@package/net/blay09/mods/balm/api/config/schema";

declare module "@package/net/blay09/mods/balm/api/config/schema/impl" {
    export class $ConfigSchemaImpl implements $BalmConfigSchema, $ConfigSchemaBuilder {
        category(arg0: string): $ConfigCategoryBuilder;
        identifier(): $ResourceLocation;
        rootProperties(): $Collection<$ConfiguredProperty<never>>;
        findRootProperty(arg0: string): $ConfiguredProperty<never>;
        addAndReturn<T extends $ConfiguredProperty<never>>(arg0: T): T;
        property(arg0: string): $ConfigPropertyBuilder;
        categories(): $Collection<$ConfigCategory>;
        findProperty(arg0: string, arg1: string): $ConfiguredProperty<never>;
        defaults(): $LoadedConfig;
        constructor(arg0: $ResourceLocation_);
    }
    export class $ConfigCategoryImpl implements $ConfigCategoryBuilder, $ConfigCategory {
        via<T>(arg0: $Function_<$ConfigCategoryBuilder, T>): T;
        parentSchema(): $BalmConfigSchema;
        property(arg0: string): $ConfigPropertyBuilder;
        addProperty<T extends $ConfiguredProperty<never>>(arg0: T): void;
        name(): string;
        properties(): $List<$ConfiguredProperty<never>>;
        comment(): string;
        comment(arg0: string): $ConfigCategoryImpl;
        constructor(arg0: $ConfigSchemaImpl, arg1: string);
    }
}
