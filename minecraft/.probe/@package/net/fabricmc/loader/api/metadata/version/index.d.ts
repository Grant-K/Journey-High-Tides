import { $Predicate } from "@package/java/util/function";
import { $Version } from "@package/net/fabricmc/loader/api";
import { $Collection, $Collection_, $List } from "@package/java/util";

declare module "@package/net/fabricmc/loader/api/metadata/version" {
    export class $VersionInterval {
        static or(arg0: $Collection_<$VersionInterval>, arg1: $VersionInterval): $List<$VersionInterval>;
        static not(arg0: $Collection_<$VersionInterval>): $List<$VersionInterval>;
        static not(arg0: $VersionInterval): $List<$VersionInterval>;
        static and(arg0: $Collection_<$VersionInterval>, arg1: $Collection_<$VersionInterval>): $List<$VersionInterval>;
        static and(arg0: $VersionInterval, arg1: $VersionInterval): $VersionInterval;
        static INFINITE: $VersionInterval;
    }
    export interface $VersionInterval {
        isSemantic(): boolean;
        isMaxInclusive(): boolean;
        isMinInclusive(): boolean;
        or(arg0: $Collection_<$VersionInterval>): $List<$VersionInterval>;
        not(): $List<$VersionInterval>;
        and(arg0: $VersionInterval): $VersionInterval;
        getMax(): $Version;
        getMin(): $Version;
        get semantic(): boolean;
        get maxInclusive(): boolean;
        get minInclusive(): boolean;
        get max(): $Version;
        get min(): $Version;
    }
    export class $VersionPredicate$PredicateTerm {
    }
    export interface $VersionPredicate$PredicateTerm {
        getReferenceVersion(): $Version;
        getOperator(): $VersionComparisonOperator;
        get referenceVersion(): $Version;
        get operator(): $VersionComparisonOperator;
    }
    export class $VersionPredicate {
        static parse(arg0: $Collection_<string>): $Collection<$VersionPredicate>;
        static parse(arg0: string): $VersionPredicate;
    }
    export interface $VersionPredicate extends $Predicate<$Version> {
        getTerms(): $Collection<$VersionPredicate$PredicateTerm>;
        getInterval(): $VersionInterval;
        get terms(): $Collection<$VersionPredicate$PredicateTerm>;
        get interval(): $VersionInterval;
    }
}
