import { $MinimapInterface } from "@package/xaero/common/minimap";
import { $ModSettings } from "@package/xaero/common/settings";
import { $List } from "@package/java/util";
import { $IntBuffer } from "@package/java/nio";

declare module "@package/xaero/common/minimap/region" {
    export class $MinimapChunk {
        putColour(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: number): void;
        getZ(): number;
        setChanged(arg0: boolean): void;
        bindTexture(arg0: number): number;
        getX(): number;
        getLevelToRefresh(arg0: number): number;
        isBlockTextureUpload(): boolean;
        getTile(arg0: number, arg1: number): $MinimapTile;
        getBuffer(arg0: number): $IntBuffer;
        isChanged(): boolean;
        isHasSomething(): boolean;
        updateBuffers(arg0: number, arg1: number[][]): void;
        setLevelsBuffered(arg0: number): void;
        recycleTiles(): void;
        getLevelsBuffered(): number;
        setBlockTextureUpload(arg0: boolean): void;
        getGlTexture(arg0: number): number;
        setGlTexture(arg0: number, arg1: number): void;
        isRefreshRequired(arg0: number): boolean;
        copyBuffer(arg0: number, arg1: $IntBuffer): void;
        setRefreshRequired(arg0: number, arg1: boolean): void;
        setTile(arg0: number, arg1: number, arg2: $MinimapTile): void;
        setHasSomething(arg0: boolean): void;
        cleanup(arg0: $MinimapInterface): void;
        reset(arg0: number, arg1: number): void;
        static LIGHT_LEVELS: number;
        static INT_BUFFER_SIZE: number;
        static SIZE_TILES: number;
        constructor(arg0: number, arg1: number);
        get z(): number;
        get x(): number;
    }
    export class $MinimapTile {
        getZ(): number;
        setHeight(arg0: number, arg1: number, arg2: number): void;
        isSuccess(): boolean;
        setSuccess(arg0: boolean): void;
        getRed(arg0: number, arg1: number, arg2: number): number;
        getGreen(arg0: number, arg1: number, arg2: number): number;
        getBlue(arg0: number, arg1: number, arg2: number): number;
        getX(): number;
        isWasTransfered(): boolean;
        isChunkGrid(): boolean;
        getHeight(arg0: number, arg1: number): number;
        setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static isSlimeChunk(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): boolean;
        isSlimeChunk(): boolean;
        recycle(): void;
        getHighlights(): number[];
        isHasSomething(): boolean;
        setWasTransfered(arg0: boolean): void;
        setHasSomething(arg0: boolean): void;
        getHighlightVersion(): number;
        static getANewTile(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): $MinimapTile;
        setHasTerrain(arg0: boolean): void;
        setHighlights(arg0: number[]): void;
        setHighlightVersion(arg0: number): void;
        hasTerrain(): boolean;
        pixelChanged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        setCode(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        static recycled: $List<$MinimapTile>;
        caveLevel: number;
        constructor(arg0: $ModSettings, arg1: number, arg2: number, arg3: number);
        get z(): number;
        get x(): number;
        get chunkGrid(): boolean;
    }
}
