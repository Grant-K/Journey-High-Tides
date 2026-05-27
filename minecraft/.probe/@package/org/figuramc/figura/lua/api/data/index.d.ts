import { $InputStream, $OutputStream } from "@package/java/io";
import { $Avatar } from "@package/org/figuramc/figura/avatar";
import { $Throwable, $AutoCloseable } from "@package/java/lang";
import { $LuaValue, $LuaString } from "@package/org/luaj/vm2";

declare module "@package/org/figuramc/figura/lua/api/data" {
    export class $FiguraBuffer implements $AutoCloseable {
        readByteArray(length: number): $LuaString;
        writeByteArray(val: $LuaValue): number;
        setPosition(position: number): void;
        readShortLE(): number;
        readIntLE(): number;
        readLongLE(): number;
        readFloatLE(): number;
        readDoubleLE(): number;
        writeShortLE(val: number): void;
        writeIntLE(val: number): void;
        writeLongLE(val: number): void;
        writeFloatLE(val: number): void;
        writeDoubleLE(val: number): void;
        readUShortLE(): number;
        readBase64(length: number): string;
        writeUShort(val: number): void;
        writeUShortLE(val: number): void;
        writeBase64(base64String: string): number;
        asInputStream(): $FiguraBuffer$FiguraBufferInputStream;
        readUShort(): number;
        getPosition(): number;
        baseClose(): void;
        getMaxCapacity(): number;
        readFromStream(stream: $FiguraInputStream, amount: number): number;
        writeToStream(stream: $FiguraOutputStream, amount: number): number;
        available(): number;
        writeFloat(val: number): void;
        readFloat(): number;
        readString(length: number, encoding: string): string;
        writeString(val: string, encoding: string): number;
        writeShort(val: number): void;
        readShort(): number;
        readLong(): number;
        readDouble(): number;
        writeLong(val: number): void;
        writeDouble(val: number): void;
        isClosed(): boolean;
        getLength(): number;
        clear(): void;
        write(val: number): void;
        read(): number;
        close(): void;
        writeInt(val: number): void;
        readInt(): number;
        constructor(parent: $Avatar, cap: number);
        constructor(parent: $Avatar);
        get maxCapacity(): number;
        get closed(): boolean;
        get length(): number;
    }
    export class $FiguraFuture<T> {
        getOrError(): T;
        complete(value: T): void;
        throwError(): void;
        handle(value: T, error: $Throwable): void;
        error(t: $Throwable): void;
        hasError(): boolean;
        getValue(): T;
        isDone(): boolean;
        constructor();
        get orError(): T;
        get value(): T;
        get done(): boolean;
    }
    export class $FiguraInputStream extends $InputStream {
        readAsync(limit: number): $FiguraFuture<$LuaString>;
        isAsyncOnly(): boolean;
        constructor(parent: $Avatar, sourceStream: $InputStream);
        constructor(parent: $Avatar, sourceStream: $InputStream, asyncOnly: boolean);
        get asyncOnly(): boolean;
    }
    export class $FiguraBuffer$FiguraBufferInputStream extends $InputStream {
        constructor(figuraBuffer: $FiguraBuffer);
    }
    export class $FiguraOutputStream extends $OutputStream {
        constructor(parent: $Avatar, destinationStream: $OutputStream);
    }
}
