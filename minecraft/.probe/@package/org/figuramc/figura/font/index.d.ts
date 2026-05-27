import { $JsonObject_ } from "@package/com/google/gson";
import { $Component_, $Component, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Collection } from "@package/java/util";

declare module "@package/org/figuramc/figura/font" {
    export class $EmojiMetadata {
        getCurrentFrame(): number;
        tickAnimation(): void;
        frames: number;
        frameTime: number;
        width: number;
        constructor(entry: $JsonObject_);
        constructor(frames: number, frameTime: number, width: number);
        get currentFrame(): number;
    }
    export class $EmojiUnicodeLookup {
        unicodeValues(): $Collection<string>;
        putMetadata(codepoint: number, metadata: $EmojiMetadata): void;
        putAliases(aliases: string[], unicode: string): void;
        putShortcuts(shortcuts: string[], unicode: string): void;
        metadataValues(): $Collection<$EmojiMetadata>;
        getUnicode(emojiAlias: string): string;
        getUnicodeForShortcut(shortcut: string): string;
        getMetadata(codepoint: number): $EmojiMetadata;
        getShortcuts(unicode: string): string[];
        getShortcuts(): $Collection<string>;
        getNames(): $Collection<string>;
        getNames(unicode: string): string[];
        constructor();
    }
    export class $EmojiContainer {
        getFont(): $ResourceLocation;
        getShortcutComponent(shortcut: string): $Component;
        getEmojiComponent(key: string, hover: $MutableComponent_): $Component;
        getEmojiComponent(key: string): $Component;
        getLookup(): $EmojiUnicodeLookup;
        blacklist(text: $Component_): $Component;
        tickAnimations(): void;
        static JSON_KEY_WIDTH: string;
        static JSON_KEY_NAMES: string;
        static JSON_KEY_FRAME_TIME: string;
        name: string;
        static JSON_KEY_SHORTCUTS: string;
        static JSON_KEY_FRAMES: string;
        constructor(containerName: string, data: $JsonObject_);
        get font(): $ResourceLocation;
        get lookup(): $EmojiUnicodeLookup;
    }
}
