import { $Stream } from "@package/java/util/stream";
import { $Path } from "@package/java/nio/file";
import { $URI, $URL } from "@package/java/net";
import { $Charset } from "@package/java/nio/charset";
import { $Throwable, $CharSequence, $Exception, $Comparable, $Object, $AutoCloseable, $Appendable, $Readable } from "@package/java/lang";
import { $Locale } from "@package/java/util";
import { $CharBuffer } from "@package/java/nio";

declare module "@package/java/io" {
    export class $DataInputStream extends $FilterInputStream implements $DataInput {
        readFully(arg0: number[], arg1: number, arg2: number): void;
        readFully(arg0: number[]): void;
        static readUTF(arg0: $DataInput): string;
        readUTF(): string;
        readChar(): string;
        readFloat(): number;
        readUnsignedByte(): number;
        readUnsignedShort(): number;
        skipBytes(arg0: number): number;
        readBoolean(): boolean;
        readByte(): number;
        readShort(): number;
        readLong(): number;
        readDouble(): number;
        /**
         * @deprecated
         */
        readLine(): string;
        readInt(): number;
        constructor(arg0: $InputStream);
    }
    export class $ObjectInput {
    }
    export interface $ObjectInput extends $DataInput, $AutoCloseable {
        skip(arg0: number): number;
        available(): number;
        readObject(): $Object;
        read(arg0: number[], arg1: number, arg2: number): number;
        read(arg0: number[]): number;
        read(): number;
        close(): void;
    }
    export class $Reader implements $Readable, $Closeable {
        static nullReader(): $Reader;
        ready(): boolean;
        mark(arg0: number): void;
        transferTo(arg0: $Writer): number;
        skip(arg0: number): number;
        markSupported(): boolean;
        reset(): void;
        read(arg0: $CharBuffer): number;
        read(): number;
        read(arg0: string[]): number;
        read(arg0: string[], arg1: number, arg2: number): number;
        close(): void;
    }
    export class $InputStream implements $Closeable {
        mark(arg0: number): void;
        readNBytes(arg0: number): number[];
        readNBytes(arg0: number[], arg1: number, arg2: number): number;
        transferTo(arg0: $OutputStream): number;
        skip(arg0: number): number;
        available(): number;
        markSupported(): boolean;
        static nullInputStream(): $InputStream;
        skipNBytes(arg0: number): void;
        reset(): void;
        read(arg0: number[], arg1: number, arg2: number): number;
        read(): number;
        read(arg0: number[]): number;
        close(): void;
        readAllBytes(): number[];
        constructor();
    }
    export class $Closeable {
    }
    export interface $Closeable extends $AutoCloseable {
        close(): void;
    }
    /**
     * Values that may be interpreted as {@link $Closeable}.
     */
    export type $Closeable_ = (() => void);
    export class $Flushable {
    }
    export interface $Flushable {
        flush(): void;
    }
    /**
     * Values that may be interpreted as {@link $Flushable}.
     */
    export type $Flushable_ = (() => void);
    export class $Externalizable {
    }
    export interface $Externalizable extends $Serializable {
        writeExternal(arg0: $ObjectOutput): void;
        readExternal(arg0: $ObjectInput): void;
    }
    export class $FilterInputStream extends $InputStream {
    }
    export class $BufferedReader extends $Reader {
        lines(): $Stream<string>;
        readLine(): string;
        constructor(arg0: $Reader, arg1: number);
        constructor(arg0: $Reader);
    }
    export class $FilterOutputStream extends $OutputStream {
        constructor(arg0: $OutputStream);
    }
    export class $DataOutputStream extends $FilterOutputStream implements $DataOutput {
        writeUTF(arg0: string): void;
        writeBytes(arg0: string): void;
        writeChar(arg0: number): void;
        writeFloat(arg0: number): void;
        writeShort(arg0: number): void;
        writeBoolean(arg0: boolean): void;
        writeByte(arg0: number): void;
        writeLong(arg0: number): void;
        writeDouble(arg0: number): void;
        writeChars(arg0: string): void;
        size(): number;
        writeInt(arg0: number): void;
        constructor(arg0: $OutputStream);
    }
    export class $ObjectOutput {
    }
    export interface $ObjectOutput extends $DataOutput, $AutoCloseable {
        flush(): void;
        write(arg0: number[], arg1: number, arg2: number): void;
        write(arg0: number[]): void;
        write(arg0: number): void;
        writeObject(arg0: $Object): void;
        close(): void;
    }
    export class $Writer implements $Appendable, $Closeable, $Flushable {
        static nullWriter(): $Writer;
        append(arg0: $CharSequence, arg1: number, arg2: number): $Writer;
        append(arg0: string): $Writer;
        append(arg0: $CharSequence): $Writer;
        flush(): void;
        write(arg0: string, arg1: number, arg2: number): void;
        write(arg0: string[]): void;
        write(arg0: number): void;
        write(arg0: string[], arg1: number, arg2: number): void;
        write(arg0: string): void;
        close(): void;
    }
    export class $DataInput {
    }
    export interface $DataInput {
        readFully(arg0: number[]): void;
        readFully(arg0: number[], arg1: number, arg2: number): void;
        readUTF(): string;
        readChar(): string;
        readFloat(): number;
        readUnsignedByte(): number;
        readUnsignedShort(): number;
        skipBytes(arg0: number): number;
        readBoolean(): boolean;
        readByte(): number;
        readShort(): number;
        readLong(): number;
        readDouble(): number;
        readLine(): string;
        readInt(): number;
    }
    export class $IOException extends $Exception {
        constructor(arg0: $Throwable);
        constructor(arg0: string, arg1: $Throwable);
        constructor(arg0: string);
        constructor();
    }
    export class $FilenameFilter {
    }
    export interface $FilenameFilter {
        accept(arg0: $File_, arg1: string): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FilenameFilter}.
     */
    export type $FilenameFilter_ = ((arg0: $File, arg1: string) => boolean);
    export class $OutputStream implements $Closeable, $Flushable {
        static nullOutputStream(): $OutputStream;
        flush(): void;
        write(arg0: number[], arg1: number, arg2: number): void;
        write(arg0: number[]): void;
        write(arg0: number): void;
        close(): void;
        constructor();
    }
    export class $Serializable {
    }
    export interface $Serializable {
    }
    export class $FileFilter {
    }
    export interface $FileFilter {
        accept(arg0: $File_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FileFilter}.
     */
    export type $FileFilter_ = ((arg0: $File) => boolean);
    export class $ByteArrayOutputStream extends $OutputStream {
        toByteArray(): number[];
        writeBytes(arg0: number[]): void;
        writeTo(arg0: $OutputStream): void;
        size(): number;
        reset(): void;
        toString(arg0: $Charset): string;
        /**
         * @deprecated
         */
        toString(arg0: number): string;
        toString(arg0: string): string;
        constructor();
        constructor(arg0: number);
    }
    export class $PrintWriter extends $Writer {
        checkError(): boolean;
        println(arg0: number): void;
        println(arg0: string): void;
        println(arg0: boolean): void;
        println(): void;
        println(arg0: $Object): void;
        println(arg0: string): void;
        println(arg0: string[]): void;
        println(arg0: number): void;
        println(arg0: number): void;
        println(arg0: number): void;
        format(arg0: string, ...arg1: $Object[]): $PrintWriter;
        format(arg0: $Locale, arg1: string, ...arg2: $Object[]): $PrintWriter;
        printf(arg0: $Locale, arg1: string, ...arg2: $Object[]): $PrintWriter;
        printf(arg0: string, ...arg1: $Object[]): $PrintWriter;
        print(arg0: number): void;
        print(arg0: boolean): void;
        print(arg0: string): void;
        print(arg0: string): void;
        print(arg0: $Object): void;
        print(arg0: string[]): void;
        print(arg0: number): void;
        print(arg0: number): void;
        print(arg0: number): void;
        constructor(arg0: $OutputStream, arg1: boolean);
        constructor(arg0: $OutputStream, arg1: boolean, arg2: $Charset);
        constructor(arg0: $File_, arg1: $Charset);
        constructor(arg0: $Writer);
        constructor(arg0: $Writer, arg1: boolean);
        constructor(arg0: $OutputStream);
        constructor(arg0: string, arg1: string);
        constructor(arg0: $File_, arg1: string);
        constructor(arg0: $File_);
        constructor(arg0: string, arg1: $Charset);
        constructor(arg0: string);
    }
    export class $PrintStream extends $FilterOutputStream implements $Appendable, $Closeable {
        writeBytes(arg0: number[]): void;
        checkError(): boolean;
        println(arg0: number): void;
        println(arg0: number): void;
        println(arg0: string[]): void;
        println(arg0: string): void;
        println(arg0: boolean): void;
        println(): void;
        println(arg0: string): void;
        println(arg0: number): void;
        println(arg0: number): void;
        println(arg0: $Object): void;
        format(arg0: $Locale, arg1: string, ...arg2: $Object[]): $PrintStream;
        format(arg0: string, ...arg1: $Object[]): $PrintStream;
        charset(): $Charset;
        printf(arg0: string, ...arg1: $Object[]): $PrintStream;
        printf(arg0: $Locale, arg1: string, ...arg2: $Object[]): $PrintStream;
        print(arg0: boolean): void;
        print(arg0: number): void;
        print(arg0: number): void;
        print(arg0: string[]): void;
        print(arg0: string): void;
        print(arg0: $Object): void;
        print(arg0: number): void;
        print(arg0: number): void;
        print(arg0: string): void;
        append(arg0: $CharSequence): $Appendable;
        append(arg0: $CharSequence): $Appendable;
        append(arg0: $CharSequence, arg1: number, arg2: number): $Appendable;
        constructor(arg0: $OutputStream, arg1: boolean);
        constructor(arg0: $OutputStream, arg1: boolean, arg2: string);
        constructor(arg0: $OutputStream);
        constructor(arg0: string, arg1: string);
        constructor(arg0: $File_, arg1: $Charset);
        constructor(arg0: $File_);
        constructor(arg0: $File_, arg1: string);
        constructor(arg0: string, arg1: $Charset);
        constructor(arg0: $OutputStream, arg1: boolean, arg2: $Charset);
        constructor(arg0: string);
    }
    export class $DataOutput {
    }
    export interface $DataOutput {
        writeUTF(arg0: string): void;
        writeBytes(arg0: string): void;
        writeChar(arg0: number): void;
        writeFloat(arg0: number): void;
        writeShort(arg0: number): void;
        writeBoolean(arg0: boolean): void;
        writeByte(arg0: number): void;
        writeLong(arg0: number): void;
        writeDouble(arg0: number): void;
        writeChars(arg0: string): void;
        write(arg0: number[]): void;
        write(arg0: number[], arg1: number, arg2: number): void;
        write(arg0: number): void;
        writeInt(arg0: number): void;
    }
    export class $File implements $Serializable, $Comparable<$File> {
        getPath(): string;
        toURI(): $URI;
        /**
         * @deprecated
         */
        toURL(): $URL;
        getAbsolutePath(): string;
        exists(): boolean;
        createNewFile(): boolean;
        renameTo(arg0: $File_): boolean;
        isDirectory(): boolean;
        getCanonicalPath(): string;
        getAbsoluteFile(): $File;
        mkdir(): boolean;
        getCanonicalFile(): $File;
        getParentFile(): $File;
        mkdirs(): boolean;
        setWritable(arg0: boolean, arg1: boolean): boolean;
        setWritable(arg0: boolean): boolean;
        setReadable(arg0: boolean): boolean;
        setReadable(arg0: boolean, arg1: boolean): boolean;
        setExecutable(arg0: boolean): boolean;
        setExecutable(arg0: boolean, arg1: boolean): boolean;
        static listRoots(): $File[];
        static createTempFile(arg0: string, arg1: string): $File;
        static createTempFile(arg0: string, arg1: string, arg2: $File_): $File;
        canWrite(): boolean;
        isFile(): boolean;
        lastModified(): number;
        deleteOnExit(): void;
        listFiles(arg0: $FilenameFilter_): $File[];
        listFiles(): $File[];
        listFiles(arg0: $FileFilter_): $File[];
        setLastModified(arg0: number): boolean;
        canExecute(): boolean;
        getTotalSpace(): number;
        getFreeSpace(): number;
        getUsableSpace(): number;
        toPath(): $Path;
        getName(): string;
        length(): number;
        isHidden(): boolean;
        compareTo(arg0: $File_): number;
        list(arg0: $FilenameFilter_): string[];
        list(): string[];
        isAbsolute(): boolean;
        getParent(): string;
        delete(): boolean;
        setReadOnly(): boolean;
        canRead(): boolean;
        static pathSeparator: string;
        static pathSeparatorChar: string;
        static separatorChar: string;
        static separator: string;
        constructor(arg0: $URI);
        constructor(arg0: string);
        constructor(arg0: string, arg1: string);
        constructor(arg0: $File_, arg1: string);
        get path(): string;
        get absolutePath(): string;
        get directory(): boolean;
        get canonicalPath(): string;
        get absoluteFile(): $File;
        get canonicalFile(): $File;
        get parentFile(): $File;
        get file(): boolean;
        get totalSpace(): number;
        get freeSpace(): number;
        get usableSpace(): number;
        get name(): string;
        get hidden(): boolean;
        get absolute(): boolean;
        get parent(): string;
    }
    /**
     * Values that may be interpreted as {@link $File}.
     */
    export type $File_ = $Path;
}
