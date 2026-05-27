export * as ui from "@package/de/keksuccino/fancymenu/util/rendering/ui";

declare module "@package/de/keksuccino/fancymenu/util/rendering" {
    export class $AspectRatio {
        getInputWidth(): number;
        getInputHeight(): number;
        getAspectRatioSizeByMinimumSize(arg0: number, arg1: number): number[];
        getAspectRatioSizeByMaximumSize(arg0: number, arg1: number): number[];
        getAspectRatioHeight(arg0: number): number;
        getAspectRatioWidth(arg0: number): number;
        constructor(arg0: number, arg1: number);
        get inputWidth(): number;
        get inputHeight(): number;
    }
}
