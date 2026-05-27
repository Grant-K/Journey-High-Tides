# ContraptionEvents.afterBlockDestroy

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✔

- Event class: ContraptionAfterBlockDestroyEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getDrops |  |  | List<ItemStack> | ✘ |
| cancel | Context |  | Object | ✘ |
| getBreakSpeed |  |  | float | ✘ |
| getHardness |  |  | float | ✘ |
| getActorPos |  |  | BlockPos | ✘ |
| getActorState |  |  | BlockState | ✘ |
| getTargetPos |  |  | BlockPos | ✘ |
| getLevel |  |  | Level | ✘ |
| getTargetBlock |  |  | LevelBlock | ✘ |
| getAnimationSpeed |  |  | float | ✘ |
| getContraptionEntity |  |  | AbstractContraptionEntity | ✘ |
| getRegistries |  |  | RegistryAccess | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| success | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| exit | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |


### Documented members:

- `Object cancel(Context var0)`

  Parameters:
  - var0: Context

```
This event is not cancellable. You could clear the drop list instead. Or use the 'before' version of this event.
```

- `float getBreakSpeed()`
```
Computed break speed used by the contraption breaker.
```

- `float getHardness()`
```
Block hardness at the target position (destroy speed).
```

- `BlockPos getActorPos()`
```
Local position of the actor block inside the contraption (if available).
```

- `BlockState getActorState()`
```
BlockState of the actor block (e.g. create:mechanical_drill/create:mechanical_saw) mounted on the contraption.
```

- `BlockPos getTargetPos()`
```
The position of the target block to be destroyed in the world.
```

- `LevelBlock getTargetBlock()`
```
The target block to be destroyed.
```

- `float getAnimationSpeed()`
```
Animation speed of the contraption context (Create internal; usually based on kinetic speed).
```

- `AbstractContraptionEntity getContraptionEntity()`
```
The contraption entity performing the breaking action.
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
ContraptionEvents.afterBlockDestroy((event) => {
	// This space (un)intentionally left blank
});
```

