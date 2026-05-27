# ContraptionEvents.beforeDisassemble

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✔

- Event class: ContraptionBeforeDisassembleEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getTargetPositions |  |  | List<BlockPos> | ✘ |
| getContraptionBounds |  |  | AABB | ✘ |
| getMinPos |  |  | BlockPos | ✘ |
| testTargetBlock | Predicate<LevelBlock> |  | boolean | ✘ |
| getTransform |  |  | StructureTransform | ✘ |
| getMaxPos |  |  | BlockPos | ✘ |
| getLevel |  |  | Level | ✘ |
| getTargetBlocks |  |  | List<LevelBlock> | ✘ |
| getContraptionEntity |  |  | AbstractContraptionEntity | ✘ |
| cancel | Context |  | Object | ✘ |
| getRegistries |  |  | RegistryAccess | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| success | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| exit | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |


### Documented members:

- `List<BlockPos> getTargetPositions()`
```
All target world positions this contraption will try to place blocks into during disassembly.
```

- `AABB getContraptionBounds()`
```
The world-space bounding box of the contraption at the moment before disassembly.
```

- `BlockPos getMinPos()`
```
Minimum world position of the contraption bounds.
```

- `StructureTransform getTransform()`
```
The StructureTransform that will be used when placing blocks back into the world.
```

- `BlockPos getMaxPos()`
```
Maximum world position of the contraption bounds.
```

- `List<LevelBlock> getTargetBlocks()`
```
All world blocks at target positions this contraption will try to place into during disassembly.
```

- `AbstractContraptionEntity getContraptionEntity()`
```
The contraption entity that is about to disassemble.
```

- `Object cancel(Context var0)`

  Parameters:
  - var0: Context

```
If canceled, this contraption disassembly will not proceed.
```

- `Object success(Context var0, Object var1)`

  Parameters:
  - var0: Context
  - var1: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success(Context var0)`

  Parameters:
  - var0: Context

```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object exit(Context var0, Object var1)`

  Parameters:
  - var0: Context
  - var1: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit(Context var0)`

  Parameters:
  - var0: Context

```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object cancel(Context var0, Object var1)`

  Parameters:
  - var0: Context
  - var1: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```



### Example script:

```js
ContraptionEvents.beforeDisassemble((event) => {
	// This space (un)intentionally left blank
});
```

