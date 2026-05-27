import { $PublicKey } from "@package/java/security";
import { $ForwardingMultimap } from "@package/com/google/common/collect";
import { $Record } from "@package/java/lang";

declare module "@package/com/mojang/authlib/properties" {
    export class $Property extends $Record {
        hasSignature(): boolean;
        /**
         * @deprecated
         */
        isSignatureValid(arg0: $PublicKey): boolean;
        signature(): string;
        name(): string;
        value(): string;
        constructor(arg0: string, arg1: string);
        constructor(name: string, value: string, signature: string);
    }
    /**
     * Values that may be interpreted as {@link $Property}.
     */
    export type $Property_ = { value?: string, name?: string, signature?: string,  } | [value?: string, name?: string, signature?: string, ];
    export class $PropertyMap extends $ForwardingMultimap<string, $Property> {
        constructor();
    }
}
