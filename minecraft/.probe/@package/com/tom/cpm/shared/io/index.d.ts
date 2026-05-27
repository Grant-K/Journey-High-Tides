import { $DataInput, $DataOutput, $InputStream, $DataInputStream, $DataOutputStream, $OutputStream, $Closeable } from "@package/java/io";
import { $NBTTag, $NBTTagCompound } from "@package/com/tom/cpl/nbt";
import { $Function_ } from "@package/java/util/function";
import { $Image } from "@package/com/tom/cpl/util";
import { $Vec3f, $Vec2i } from "@package/com/tom/cpl/math";
import { $UUID_, $UUID } from "@package/java/util";
import { $Enum } from "@package/java/lang";

declare module "@package/com/tom/cpm/shared/io" {
    export class $IOHelper$ObjectReader<T, R> {
    }
    export interface $IOHelper$ObjectReader<T, R> {
        read(arg0: T, arg1: $IOHelper): R;
    }
    /**
     * Values that may be interpreted as {@link $IOHelper$ObjectReader}.
     */
    export type $IOHelper$ObjectReader_<T, R> = ((arg0: T, arg1: $IOHelper) => R);
    export class $IOHelper implements $DataInput, $DataOutput, $Closeable {
        readUUID(): $UUID;
        writeUUID(arg0: $UUID_): void;
        readByteArray(): number[];
        writeByteArray(arg0: number[]): void;
        readFloat2(): number;
        writeFloat2(arg0: number): void;
        readVarFloat(): number;
        writeVarFloat(arg0: number): void;
        readNextBlock(): $IOHelper;
        writeNextBlock(): $IOHelper;
        readVec3ub(): $Vec3f;
        writeVec3ub(arg0: $Vec3f): void;
        readVec3b(): $Vec3f;
        writeVec3b(arg0: $Vec3f): void;
        readAngle(): $Vec3f;
        writeAngle(arg0: $Vec3f): void;
        readVec6b(): $Vec3f;
        writeVec6b(arg0: $Vec3f): void;
        readVarVec3(): $Vec3f;
        writeVarVec3(arg0: $Vec3f): void;
        read2s(): $Vec2i;
        write2s(arg0: $Vec2i): void;
        read2v(): $Vec2i;
        write2v(arg0: $Vec2i): void;
        getDin(): $DataInputStream;
        writeObjectBlock<T extends $Enum<T>, B extends $IOHelper$ObjectBlock<T>>(arg0: B): void;
        writeObjectBlock<T extends $Enum<T>, B>(arg0: B, arg1: $Function_<B, T>, arg2: $IOHelper$ObjectWriter_<B>): void;
        writeNextObjectBlock<T extends $Enum<T>>(arg0: T): $IOHelper;
        toB64(): string;
        readVarInt(): number;
        writeVarInt(arg0: number): void;
        readObjectBlock<T extends $Enum<T>, B>(arg0: T[], arg1: $IOHelper$ObjectReader_<T, B>): B;
        writeImage(arg0: $Image): void;
        getDout(): $DataOutputStream;
        readFully(arg0: number[], arg1: number, arg2: number): void;
        readFully(arg0: number[]): void;
        readEnum<T extends $Enum<T>>(arg0: T[]): T;
        writeEnum<T extends $Enum<T>>(arg0: T): void;
        readImage(): $IOHelper$ImageBlock;
        writeJUTF(arg0: string): void;
        readJUTF(): string;
        readSignedVarInt(): number;
        writeSignedVarInt(arg0: number): void;
        writeBlock(arg0: $IOHelper): void;
        writeBoolArray(arg0: number, arg1: boolean[]): void;
        readBoolArray(arg0: number): boolean[];
        writeNBT(arg0: $NBTTag): void;
        readNBT(): $NBTTagCompound;
        writeUTF(arg0: string): void;
        readUTF(): string;
        available(): number;
        flip(): $IOHelper;
        writeBytes(arg0: string): void;
        writeChar(arg0: number): void;
        readChar(): string;
        writeFloat(arg0: number): void;
        readFloat(): number;
        readUnsignedByte(): number;
        readUnsignedShort(): number;
        writeShort(arg0: number): void;
        skipBytes(arg0: number): number;
        readBoolean(): boolean;
        readByte(): number;
        readShort(): number;
        readLong(): number;
        readDouble(): number;
        writeBoolean(arg0: boolean): void;
        writeByte(arg0: number): void;
        writeLong(arg0: number): void;
        writeDouble(arg0: number): void;
        writeChars(arg0: string): void;
        size(): number;
        reset(): void;
        toBytes(): number[];
        write(arg0: number[]): void;
        write(arg0: number): void;
        write(arg0: number[], arg1: number, arg2: number): void;
        read(): number;
        /**
         * @deprecated
         */
        readLine(): string;
        close(): void;
        writeInt(arg0: number): void;
        readInt(): number;
        static copy(arg0: $InputStream, arg1: $OutputStream): void;
        constructor(arg0: string);
        constructor(arg0: number[]);
        constructor();
        constructor(arg0: $OutputStream);
        constructor(arg0: $InputStream);
        constructor(arg0: $DataOutputStream);
        constructor(arg0: $DataInputStream);
        get din(): $DataInputStream;
        get dout(): $DataOutputStream;
    }
    export class $IOHelper$ObjectBlock<T extends $Enum<T>> {
    }
    export interface $IOHelper$ObjectBlock<T extends $Enum<T>> {
        write(arg0: $IOHelper): void;
        getType(): T;
        get type(): T;
    }
    export class $IOHelper$ImageBlock {
        doReadImage(): void;
        getWidth(): number;
        getHeight(): number;
        getImage(): $Image;
        constructor(arg0: $IOHelper);
        get width(): number;
        get height(): number;
        get image(): $Image;
    }
    export class $IOHelper$ObjectWriter<B> {
    }
    export interface $IOHelper$ObjectWriter<B> {
        write(arg0: B, arg1: $IOHelper): void;
    }
    /**
     * Values that may be interpreted as {@link $IOHelper$ObjectWriter}.
     */
    export type $IOHelper$ObjectWriter_<B> = ((arg0: B, arg1: $IOHelper) => void);
}
