import { $Supplier_ } from "@package/java/util/function";
import { $Item, $ItemStack_, $ItemStack, $Item_ } from "@package/net/minecraft/world/item";
import { $CodexEntryScreen } from "@package/com/sammy/malum/client/screen/codex/screens";
import { $BookEntryBuilder, $BookEntry } from "@package/com/sammy/malum/client/screen/codex";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/com/sammy/malum/client/screen/codex/pages" {
    export class $BookPage {
        click(arg0: $CodexEntryScreen, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        static getRecipeInfoHeadlineKey(arg0: string): string;
        static getRecipeInfoKey(arg0: string): string;
        renderLate(arg0: $CodexEntryScreen, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean): void;
        isValid(): boolean;
        getBackground(arg0: boolean): $ResourceLocation;
        render(arg0: $CodexEntryScreen, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean): void;
        static isVoidThemed: boolean;
        static TEXT: string;
        static HEADLINE: string;
        constructor(arg0: $ResourceLocation_);
        get valid(): boolean;
    }
    export class $EntryReference {
        entry: $BookEntry;
        icon: $ItemStack;
        constructor(arg0: $Supplier_<$Item>, arg1: $BookEntryBuilder);
        constructor(arg0: $Item_, arg1: $BookEntryBuilder);
        constructor(arg0: $Supplier_<$Item>, arg1: $BookEntry);
        constructor(arg0: $ItemStack_, arg1: $BookEntryBuilder);
        constructor(arg0: $Item_, arg1: $BookEntry);
        constructor(arg0: $ItemStack_, arg1: $BookEntry);
    }
}
