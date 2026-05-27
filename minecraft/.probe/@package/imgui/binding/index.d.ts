
declare module "@package/imgui/binding" {
    export class $ImGuiStruct {
        isNotValidPtr(): boolean;
        isValidPtr(): boolean;
        ptr: number;
        constructor(arg0: number);
        get notValidPtr(): boolean;
        get validPtr(): boolean;
    }
    export class $ImGuiStructDestroyable extends $ImGuiStruct {
        destroy(): void;
        ptr: number;
        constructor(arg0: number);
        constructor();
    }
}
