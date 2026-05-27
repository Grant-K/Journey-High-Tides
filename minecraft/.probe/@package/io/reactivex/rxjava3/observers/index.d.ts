import { $Disposable } from "@package/io/reactivex/rxjava3/disposables";
import { $Throwable } from "@package/java/lang";
import { $SingleObserver, $CompletableObserver, $Observer, $MaybeObserver } from "@package/io/reactivex/rxjava3/core";

declare module "@package/io/reactivex/rxjava3/observers" {
    export class $TestObserver<T> extends $BaseTestConsumer<T, $TestObserver<T>> implements $Observer<T>, $Disposable, $MaybeObserver<T>, $SingleObserver<T>, $CompletableObserver {
        hasSubscription(): boolean;
        onError(t: $Throwable): void;
        onSuccess(value: T): void;
        isDisposed(): boolean;
        onSubscribe(d: $Disposable): void;
        onNext(t: T): void;
        dispose(): void;
        onComplete(): void;
        static create<T>(delegate: $Observer<T>): $TestObserver<T>;
        static create<T>(): $TestObserver<T>;
        constructor(downstream: $Observer<T>);
        constructor();
    }
}
