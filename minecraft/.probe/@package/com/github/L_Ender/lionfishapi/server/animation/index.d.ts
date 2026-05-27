
declare module "@package/com/github/L_Ender/lionfishapi/server/animation" {
    export class $Animation {
        setLooping(arg0: boolean): $Animation;
        doesLoop(): boolean;
        /**
         * @deprecated
         */
        getID(): number;
        getDuration(): number;
        /**
         * @deprecated
         */
        static create(arg0: number, arg1: number): $Animation;
        static create(arg0: number): $Animation;
        set looping(value: boolean);
        get ID(): number;
        get duration(): number;
    }
}
