import { $IOException } from "@package/java/io";
import { $Executor_, $BlockingQueue } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $UUID, $List, $Map, $UUID_ } from "@package/java/util";
import { $SecretPacket } from "@package/de/maxhenkel/voicechat/net";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $Speaker } from "@package/de/maxhenkel/voicechat/voice/client/speaker";
import { $ALCCapabilities, $ALCapabilities } from "@package/org/lwjgl/openal";
import { $ClientVoicechatSocket } from "@package/de/maxhenkel/voicechat/api";
import { $Path_, $Path } from "@package/java/nio/file";
import { $InetAddress } from "@package/java/net";
import { $ServerConfig$Codec } from "@package/de/maxhenkel/voicechat/config";
import { $Secret, $NetworkMessage, $SoundPacket } from "@package/de/maxhenkel/voicechat/voice/common";
import { $Thread, $Runnable_, $Exception } from "@package/java/lang";
export * as speaker from "@package/de/maxhenkel/voicechat/voice/client/speaker";

declare module "@package/de/maxhenkel/voicechat/voice/client" {
    export class $ClientVoicechat {
        getSoundManager(): $SoundManager;
        reloadSoundManager(): void;
        closeMicThread(): void;
        reloadAudio(): void;
        getInitializationData(): $InitializationData;
        setRecording(arg0: boolean): boolean;
        closeAudioChannel(arg0: $UUID_): boolean;
        processSoundPacket(arg0: $SoundPacket<any>): void;
        getMicThread(): $MicThread;
        getTalkCache(): $TalkCache;
        getAudioChannels(): $Map<$UUID, $AudioChannel>;
        getConnection(): $ClientVoicechatConnection;
        getRecorder(): $AudioRecorder;
        onVoiceChatConnected(arg0: $ClientVoicechatConnection): void;
        onVoiceChatDisconnected(): void;
        toggleRecording(): boolean;
        getStartTime(): number;
        connect(arg0: $InitializationData): void;
        close(): void;
        constructor();
        get soundManager(): $SoundManager;
        get initializationData(): $InitializationData;
        set recording(value: boolean);
        get micThread(): $MicThread;
        get talkCache(): $TalkCache;
        get audioChannels(): $Map<$UUID, $AudioChannel>;
        get connection(): $ClientVoicechatConnection;
        get recorder(): $AudioRecorder;
        get startTime(): number;
    }
    export class $AudioChannel extends $Thread {
        getSpeaker(): $Speaker;
        getLostPackets(): number;
        getPacketBuffer(): $AudioPacketBuffer;
        closeAndKill(): void;
        canKill(): boolean;
        getChannelId(): $UUID;
        addToQueue(arg0: $SoundPacket<never>): void;
        isClosed(): boolean;
        getQueue(): $BlockingQueue<$SoundPacket<never>>;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $InitializationData, arg2: $UUID_);
        get speaker(): $Speaker;
        get lostPackets(): number;
        get packetBuffer(): $AudioPacketBuffer;
        get channelId(): $UUID;
        get closed(): boolean;
        get queue(): $BlockingQueue<$SoundPacket<never>>;
    }
    export class $AudioRecorder {
        getRecordedPlayerCount(): number;
        getStorage(): string;
        getStorage(arg0: number): string;
        getDuration(arg0: number): string;
        getDuration(): string;
        flushChunkThreaded(arg0: $UUID_): void;
        appendChunk(arg0: $UUID_, arg1: number, arg2: number[]): void;
        saveAndClose(): void;
        static create(): $AudioRecorder;
        getStartTime(): number;
        getLocation(): $Path;
        close(): void;
        constructor(arg0: $Path_, arg1: number);
        get recordedPlayerCount(): number;
        get startTime(): number;
        get location(): $Path;
    }
    export class $InitializationData {
        getCodec(): $ServerConfig$Codec;
        getMtuSize(): number;
        getServerPort(): number;
        getServerIP(): string;
        getKeepAlive(): number;
        getPlayerUUID(): $UUID;
        getSecret(): $Secret;
        getVoiceChatDistance(): number;
        allowRecording(): boolean;
        groupsEnabled(): boolean;
        constructor(arg0: string, arg1: $SecretPacket);
        get codec(): $ServerConfig$Codec;
        get mtuSize(): number;
        get serverPort(): number;
        get serverIP(): string;
        get keepAlive(): number;
        get playerUUID(): $UUID;
        get secret(): $Secret;
        get voiceChatDistance(): number;
    }
    export class $MicrophoneException extends $IOException {
        constructor(arg0: string);
        constructor(arg0: $Exception);
    }
    export class $AudioPacketBuffer {
        getSize(): number;
        poll(arg0: $BlockingQueue<$SoundPacket<never>>): $SoundPacket<never>;
        clear(): void;
        constructor(arg0: number);
        get size(): number;
    }
    export class $SoundManager {
        static checkAlcError(arg0: number): boolean;
        static getAlcError(arg0: number): string;
        static getAllSpeakers(): $List<string>;
        static canEnumerateAll(): boolean;
        static canEnumerate(): boolean;
        runInContext(arg0: $Executor_, arg1: $Runnable_): void;
        openContext(): boolean;
        closeContext(): void;
        static checkAlError(): boolean;
        static getAlError(arg0: number): string;
        static cleanDeviceName(arg0: string): string;
        getMaxGain(): number;
        static create(arg0: string): $SoundManager;
        static create(): $SoundManager;
        isClosed(): boolean;
        close(): void;
        constructor(arg0: string, arg1: number, arg2: number, arg3: $ALCCapabilities, arg4: $ALCapabilities, arg5: number);
        static get allSpeakers(): $List<string>;
        get maxGain(): number;
        get closed(): boolean;
    }
    export class $TalkCache {
        getPlayerAudioLevel(arg0: $UUID_): number;
        getCategoryAudioLevel(arg0: string): number;
        /**
         * @deprecated
         */
        updateTalking(arg0: $UUID_, arg1: boolean): void;
        setTimestampSupplier(arg0: $Supplier_<number>): void;
        updateLevel(arg0: $UUID_, arg1: string, arg2: boolean, arg3: number[]): void;
        updateCategoryVolume(arg0: string, arg1: number): void;
        isTalking(arg0: $UUID_): boolean;
        isTalking(arg0: $Entity): boolean;
        isWhispering(arg0: $UUID_): boolean;
        isWhispering(arg0: $Entity): boolean;
        constructor();
        set timestampSupplier(value: $Supplier_<number>);
    }
    export class $ClientVoicechatConnection extends $Thread {
        sendToServer(arg0: $NetworkMessage): boolean;
        checkTimeout(): void;
        isConnected(): boolean;
        getData(): $InitializationData;
        getSocket(): $ClientVoicechatSocket;
        getAddress(): $InetAddress;
        disconnect(): void;
        isInitialized(): boolean;
        close(): void;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $InitializationData);
        get connected(): boolean;
        get data(): $InitializationData;
        get socket(): $ClientVoicechatSocket;
        get address(): $InetAddress;
        get initialized(): boolean;
    }
    export class $MicThread extends $Thread {
        pollProcessedAudio(arg0: boolean): number[];
        shouldTransmitAudio(): boolean;
        pollMic(): number[];
        setMicrophoneLocked(arg0: boolean): void;
        isTalking(): boolean;
        isWhispering(): boolean;
        isClosed(): boolean;
        getError(arg0: $Consumer_<$MicrophoneException>): void;
        close(): void;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $ClientVoicechatConnection, arg2: $Consumer_<$MicrophoneException>);
        set microphoneLocked(value: boolean);
        get talking(): boolean;
        get whispering(): boolean;
        get closed(): boolean;
    }
}
