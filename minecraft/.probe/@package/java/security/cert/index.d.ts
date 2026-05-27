import { $Serializable } from "@package/java/io";
import { $PublicKey, $Provider } from "@package/java/security";
import { $Iterator, $List } from "@package/java/util";

declare module "@package/java/security/cert" {
    export class $CertPath implements $Serializable {
        getEncodings(): $Iterator<string>;
        getEncoded(arg0: string): number[];
        getEncoded(): number[];
        getCertificates(): $List<$Certificate>;
        getType(): string;
        get encodings(): $Iterator<string>;
        get certificates(): $List<$Certificate>;
        get type(): string;
    }
    export class $Certificate implements $Serializable {
        getEncoded(): number[];
        verify(arg0: $PublicKey, arg1: $Provider): void;
        verify(arg0: $PublicKey): void;
        verify(arg0: $PublicKey, arg1: string): void;
        getPublicKey(): $PublicKey;
        getType(): string;
        get encoded(): number[];
        get publicKey(): $PublicKey;
        get type(): string;
    }
}
