
declare module "@package/org/figuramc/figura/mixin/particle" {
    export class $ParticleAccessor {
    }
    export interface $ParticleAccessor {
        getZ(): number;
        getBbWidth(): number;
        getGravity(): number;
        setGravity(arg0: number): void;
        getAlpha(): number;
        getY(): number;
        getX(): number;
        setHasPhysics(arg0: boolean): void;
        getHasPhysics(): boolean;
        setXo(arg0: number): void;
        setYo(arg0: number): void;
        setZo(arg0: number): void;
        setParticleAlpha(arg0: number): void;
        getRCol(): number;
        getGCol(): number;
        getBCol(): number;
        getXd(): number;
        getYd(): number;
        getZd(): number;
        get z(): number;
        get bbWidth(): number;
        get alpha(): number;
        get y(): number;
        get x(): number;
        set xo(value: number);
        set yo(value: number);
        set zo(value: number);
        set particleAlpha(value: number);
        get RCol(): number;
        get GCol(): number;
        get BCol(): number;
        get xd(): number;
        get yd(): number;
        get zd(): number;
    }
}
