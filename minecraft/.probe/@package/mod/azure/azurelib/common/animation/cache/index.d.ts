import { $AzBakedModel, $AzBoneSnapshot } from "@package/mod/azure/azurelib/common/model";
import { $AzAnimationContext } from "@package/mod/azure/azurelib/common/animation";
import { $Map } from "@package/java/util";

declare module "@package/mod/azure/azurelib/common/animation/cache" {
    export class $AzBoneCache {
        getBoneSnapshotsByName(): $Map<string, $AzBoneSnapshot>;
        setBakedModel(arg0: $AzBakedModel): void;
        getTemplateModel(): $AzBakedModel;
        setActiveModel(arg0: $AzBakedModel): boolean;
        getBakedModel(): $AzBakedModel;
        update(arg0: $AzAnimationContext<never>): void;
        isEmpty(): boolean;
        constructor();
        get boneSnapshotsByName(): $Map<string, $AzBoneSnapshot>;
        get templateModel(): $AzBakedModel;
        set activeModel(value: $AzBakedModel);
        get empty(): boolean;
    }
}
