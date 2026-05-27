import { $SmartFluidTank } from "@package/com/simibubi/create/foundation/fluid";

declare module "@package/io/github/irishgreencitrus/occultengineering/mixin/accessor" {
    export class $TankSegmentAccessor {
    }
    export interface $TankSegmentAccessor {
        getTank(): $SmartFluidTank;
        get tank(): $SmartFluidTank;
    }
    /**
     * Values that may be interpreted as {@link $TankSegmentAccessor}.
     */
    export type $TankSegmentAccessor_ = (() => $SmartFluidTank);
}
