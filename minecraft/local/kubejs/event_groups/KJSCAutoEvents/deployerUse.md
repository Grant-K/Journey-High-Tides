# KJSCAutoEvents.deployerUse

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✘

- Event class: DeployerUseEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getDamage |  |  | int | ✘ |
| getRemainder |  |  | ItemStack | ✘ |
| getTransportedItem |  |  | ItemStack | ✘ |
| setDamage | int |  | void | ✘ |
| getLevel |  |  | Level | ✘ |
| getHeldItem |  |  | ItemStack | ✘ |
| getBlock |  |  | LevelBlock | ✘ |
| getOutputs |  |  | List<ItemStack> | ✘ |
| getRegistries |  |  | RegistryAccess | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| success | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| exit | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |
| cancel | Context |  | Object | ✘ |


### Documented members:

- `ItemStack getRemainder()`
```
The remaining stack after consuming 1 item from transported input.
```

- `ItemStack getTransportedItem()`
```
The item that is put on the deposit or belt.
```

- `ItemStack getHeldItem()`
```
The item that the deployer holds.
```

- `List<ItemStack> getOutputs()`
```
All outputs produced by the recipe (may be empty or multiple).
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

- `Object cancel(Context var0)`

  Parameters:
  - var0: Context

```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```



### Example script:

```js
KJSCAutoEvents.deployerUse((event) => {
	// This space (un)intentionally left blank
});
```

