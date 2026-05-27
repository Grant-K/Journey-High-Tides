# KJSCAutoEvents.basinOperation

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✔

- Event class: BasinOperationEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getRecipe |  |  | Recipe<?> | ✘ |
| getPos |  |  | BlockPos | ✘ |
| addInputFluid | FluidStack |  | void | ✘ |
| getLevel |  |  | Level | ✘ |
| addInput | ItemStack |  | void | ✘ |
| getBasin |  |  | BasinBlockEntity | ✘ |
| getHeatLevel |  |  | BlazeBurnerBlock$HeatLevel | ✘ |
| getRecipeId |  |  | ResourceLocation | ✘ |
| getFluidOutputs |  |  | List<FluidStack> | ✘ |
| getBlock |  |  | LevelBlock | ✘ |
| getOutputs |  |  | List<ItemStack> | ✘ |
| cancel | Context |  | Object | ✘ |
| getRegistries |  |  | RegistryAccess | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| success | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| exit | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |


### Documented members:

- `Recipe<?> getRecipe()`
```
The recipe being applied.
```

- `BlockPos getPos()`
```
Basin position.
```

- `BasinBlockEntity getBasin()`
```
The basin block entity.
```

- `BlazeBurnerBlock$HeatLevel getHeatLevel()`
```
Current heat level as seen by the basin.
```

- `List<FluidStack> getFluidOutputs()`
```
All fluid outputs.
```

- `LevelBlock getBlock()`
```
The basin block container.
```

- `List<ItemStack> getOutputs()`
```
All item outputs (this list may include crafting remainders because Create merges them into the same list).
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
KJSCAutoEvents.basinOperation((event) => {
	// This space (un)intentionally left blank
});
```

