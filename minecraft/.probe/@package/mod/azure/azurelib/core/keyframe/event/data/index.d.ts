
declare module "@package/mod/azure/azurelib/core/keyframe/event/data" {
    export class $KeyFrameData {
        getStartTick(): number;
        get startTick(): number;
    }
    export class $CustomInstructionKeyframeData extends $KeyFrameData {
        getInstructions(): string;
        constructor(arg0: number, arg1: string);
        get instructions(): string;
    }
    export class $ParticleKeyframeData extends $KeyFrameData {
        getEffect(): string;
        getLocator(): string;
        script(): string;
        constructor(arg0: number, arg1: string, arg2: string, arg3: string);
        get effect(): string;
        get locator(): string;
    }
    export class $SoundKeyframeData extends $KeyFrameData {
        getSound(): string;
        constructor(arg0: number, arg1: string);
        get sound(): string;
    }
}
