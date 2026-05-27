
declare module "@package/javax/swing/undo" {
    export class $UndoableEdit {
    }
    export interface $UndoableEdit {
        redo(): void;
        undo(): void;
        die(): void;
        canRedo(): boolean;
        addEdit(arg0: $UndoableEdit): boolean;
        replaceEdit(arg0: $UndoableEdit): boolean;
        isSignificant(): boolean;
        getPresentationName(): string;
        getUndoPresentationName(): string;
        getRedoPresentationName(): string;
        canUndo(): boolean;
        get significant(): boolean;
        get presentationName(): string;
        get undoPresentationName(): string;
        get redoPresentationName(): string;
    }
}
