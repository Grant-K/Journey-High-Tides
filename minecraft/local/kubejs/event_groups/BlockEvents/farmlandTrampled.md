# BlockEvents.farmlandTrampled

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✔

- Event class: [FarmlandTrampledKubeEvent](https://github.com/KubeJS-Mods/KubeJS/tree/main/src/main/java/dev/latvian/mods/kubejs/block/FarmlandTrampledKubeEvent.java)

```
Invoked when an entity attempts to trample farmland.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getDistance |  |  | float | ✘ |
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

- `float getDistance()`
```
The distance of the entity from the block.
```

- `Entity getEntity()`
```
The entity that is attempting to trample the farmland.
```

- `Level getLevel()`
```
The level that the farmland and the entity are in.
```

- `LevelBlock getBlock()`
```
The farmland block.
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
BlockEvents.farmlandTrampled(/* extra_id (optional), */ (event) => {
	// This space (un)intentionally left blank
});
```

