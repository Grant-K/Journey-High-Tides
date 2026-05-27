# BlockEvents.placed

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✔

- Event class: [BlockPlacedKubeEvent](https://github.com/KubeJS-Mods/KubeJS/tree/main/src/main/java/dev/latvian/mods/kubejs/block/BlockPlacedKubeEvent.java)

```
Invoked when a block is placed.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getEntity |  |  | Entity | ✘ |
| getLevel |  |  | Level | ✘ |
| getBlock |  |  | LevelBlock | ✘ |
| getPlayer |  |  | Player | ✘ |
| getRegistries |  |  | RegistryAccess | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| success | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| exit | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |
| cancel | Context |  | Object | ✘ |


### Documented members:

- `Entity getEntity()`
```
The entity that placed the block. Can be `null`, e.g. when a block is placed by a dispenser.
```

- `Level getLevel()`
```
The level of the block that was placed.
```

- `LevelBlock getBlock()`
```
The block that is placed.
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
BlockEvents.placed(/* extra_id (optional), */ (event) => {
	// This space (un)intentionally left blank
});
```

