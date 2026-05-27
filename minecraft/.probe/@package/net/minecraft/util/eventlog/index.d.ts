import { $Reader, $Closeable } from "@package/java/io";
import { $LocalDate } from "@package/java/time";
import { $Consumer_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $Stream } from "@package/java/util/stream";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Spliterator, $Iterator, $Set } from "@package/java/util";
import { $Iterable, $Record } from "@package/java/lang";
import { $FileChannel } from "@package/java/nio/channels";

declare module "@package/net/minecraft/util/eventlog" {
    export class $JsonEventLog<T> implements $Closeable {
        openReader(): $JsonEventLogReader<T>;
        write(arg0: T): void;
        close(): void;
        static open<T>(arg0: $Codec<T>, arg1: $Path_): $JsonEventLog<T>;
        constructor(arg0: $Codec<T>, arg1: $FileChannel);
    }
    export class $EventLogDirectory$RawFile extends $Record implements $EventLogDirectory$File {
        openReader(): $Reader;
        openChannel(): $FileChannel;
        path(): $Path;
        compress(): $EventLogDirectory$CompressedFile;
        id(): $EventLogDirectory$FileId;
        constructor(arg0: $Path_, arg1: $EventLogDirectory$FileId_);
    }
    /**
     * Values that may be interpreted as {@link $EventLogDirectory$RawFile}.
     */
    export type $EventLogDirectory$RawFile_ = { path?: $Path_, id?: $EventLogDirectory$FileId_,  } | [path?: $Path_, id?: $EventLogDirectory$FileId_, ];
    export class $EventLogDirectory {
        createNewFile(arg0: $LocalDate): $EventLogDirectory$RawFile;
        listFiles(): $EventLogDirectory$FileList;
        static open(arg0: $Path_, arg1: string): $EventLogDirectory;
    }
    export class $EventLogDirectory$FileId extends $Record {
        toFileName(arg0: string): string;
        date(): $LocalDate;
        index(): number;
        static parse(arg0: string): $EventLogDirectory$FileId;
        constructor(arg0: $LocalDate, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $EventLogDirectory$FileId}.
     */
    export type $EventLogDirectory$FileId_ = { date?: $LocalDate, index?: number,  } | [date?: $LocalDate, index?: number, ];
    export class $JsonEventLogReader<T> {
        static create<T>(arg0: $Codec<T>, arg1: $Reader): $JsonEventLogReader<T>;
    }
    export interface $JsonEventLogReader<T> extends $Closeable {
        next(): T;
    }
    export class $EventLogDirectory$FileList implements $Iterable<$EventLogDirectory$File> {
        compressAll(): $EventLogDirectory$FileList;
        ids(): $Set<$EventLogDirectory$FileId>;
        prune(arg0: $LocalDate, arg1: number): $EventLogDirectory$FileList;
        iterator(): $Iterator<$EventLogDirectory$File>;
        stream(): $Stream<$EventLogDirectory$File>;
        spliterator(): $Spliterator<$EventLogDirectory$File>;
        forEach(arg0: $Consumer_<$EventLogDirectory$File>): void;
        [Symbol.iterator](): Iterator<$EventLogDirectory$File>
    }
    export class $EventLogDirectory$File {
    }
    export interface $EventLogDirectory$File {
        openReader(): $Reader;
        path(): $Path;
        compress(): $EventLogDirectory$CompressedFile;
        id(): $EventLogDirectory$FileId;
    }
    export class $EventLogDirectory$CompressedFile extends $Record implements $EventLogDirectory$File {
        openReader(): $Reader;
        path(): $Path;
        compress(): $EventLogDirectory$CompressedFile;
        id(): $EventLogDirectory$FileId;
        constructor(arg0: $Path_, arg1: $EventLogDirectory$FileId_);
    }
    /**
     * Values that may be interpreted as {@link $EventLogDirectory$CompressedFile}.
     */
    export type $EventLogDirectory$CompressedFile_ = { path?: $Path_, id?: $EventLogDirectory$FileId_,  } | [path?: $Path_, id?: $EventLogDirectory$FileId_, ];
}
