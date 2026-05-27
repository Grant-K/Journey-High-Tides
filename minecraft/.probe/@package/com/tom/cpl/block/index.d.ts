import { $Object, $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Stack } from "@package/com/tom/cpl/item";
export * as entity from "@package/com/tom/cpl/block/entity";

declare module "@package/com/tom/cpl/block" {
    export class $World {
    }
    export interface $World {
        getBiome(): $Biome;
        getWeather(): $World$WeatherType;
        isCovered(): boolean;
        getMaxHeight(): number;
        getYHeight(): number;
        getMinHeight(): number;
        getDimension(): string;
        getBlock(arg0: number, arg1: number, arg2: number): $BlockState;
        get biome(): $Biome;
        get weather(): $World$WeatherType;
        get covered(): boolean;
        get maxHeight(): number;
        get YHeight(): number;
        get minHeight(): number;
        get dimension(): string;
    }
    export class $World$WeatherType extends $Enum<$World$WeatherType> {
        static values(): $World$WeatherType[];
        static valueOf(arg0: string): $World$WeatherType;
        static RAIN: $World$WeatherType;
        static CLEAR: $World$WeatherType;
        static THUNDER: $World$WeatherType;
    }
    /**
     * Values that may be interpreted as {@link $World$WeatherType}.
     */
    export type $World$WeatherType_ = "clear" | "rain" | "thunder";
    export class $Biome {
        getBiome(): $Object;
        listTags(): $List<string>;
        getTemperature(): number;
        getBiomeId(): string;
        getHumidity(): number;
        getRainType(): $BiomeHandler$RainType;
        isInTag(arg0: string): boolean;
        get biome(): $Object;
        get temperature(): number;
        get biomeId(): string;
        get humidity(): number;
        get rainType(): $BiomeHandler$RainType;
    }
    export class $BlockState {
        getBlockId(): string;
        getBlockStates(): $List<string>;
        listTags(): $List<string>;
        getPropertyValueInt(arg0: string): number;
        getAllValuesFor(arg0: string): $List<string>;
        equalsFull(arg0: $BlockState): boolean;
        getStackFromState(): $Stack;
        isInTag(arg0: string): boolean;
        getPropertyValue(arg0: string): string;
        static handler: $BlockStateHandler<$Object>;
        static AIR: $BlockState;
        get blockId(): string;
        get blockStates(): $List<string>;
        get stackFromState(): $Stack;
    }
}
