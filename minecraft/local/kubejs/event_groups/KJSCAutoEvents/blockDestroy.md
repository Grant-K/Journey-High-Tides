# KJSCAutoEvents.blockDestroy

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✔

- Event class: BlockDestroyEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getBreakSpeed |  |  | float | ✘ |
| getPos |  |  | BlockPos | ✘ |
| getHardness |  |  | float | ✘ |
| getBreaker |  |  | BlockBreakingKineticBlockEntity | ✘ |
| getTargetPos |  |  | BlockPos | ✘ |
| getLevel |  |  | Level | ✘ |
| getTargetBlock |  |  | LevelBlock | ✘ |
| getKineticSpeed |  |  | float | ✘ |
| getBlock |  |  | LevelBlock | ✘ |
| cancel | Context |  | Object | ✘ |
| getRegistries |  |  | RegistryAccess | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| success | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| exit | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |


### Documented members:

- `float getBreakSpeed()`
```
Computed break speed used by the breaker (usually abs(speed)/100).
```

- `BlockPos getPos()`
```
The position of the drill/saw block.
```

- `float getHardness()`
```
Block hardness at the target position (destroy speed).
```

- `BlockBreakingKineticBlockEntity getBreaker()`
```
The breaker block entity (e.g. a saw/drill block entity).
```

- `BlockPos getTargetPos()`
```
The position of the target block to be destroyed.
```

- `LevelBlock getTargetBlock()`
```
The target block to be destroyed
```

- `float getKineticSpeed()`
```
Kinetic speed of the breaker (raw, same sign as Create speed).
```

- `LevelBlock getBlock()`
```
The drill/saw block.
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
KJSCAutoEvents.blockDestroy((event) => {
	// This space (un)intentionally left blank
});
```

