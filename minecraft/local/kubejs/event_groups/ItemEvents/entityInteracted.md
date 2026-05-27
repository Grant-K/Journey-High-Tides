# ItemEvents.entityInteracted

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✔

- Event class: [ItemEntityInteractedKubeEvent](https://github.com/KubeJS-Mods/KubeJS/tree/main/src/main/java/dev/latvian/mods/kubejs/item/ItemEntityInteractedKubeEvent.java)

```
Invoked when a player right clicks on an entity.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getHand |  |  | InteractionHand | ✘ |
| getEntity |  |  | LivingEntity | ✘ |
| getItem |  |  | ItemStack | ✘ |
| getTarget |  |  | Entity | ✘ |
| getPlayer |  |  | Player | ✘ |
| getLevel |  |  | Level | ✘ |
| getRegistries |  |  | RegistryAccess | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| success | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| exit | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |
| cancel | Context |  | Object | ✘ |


### Documented members:

- `InteractionHand getHand()`
```
The hand that was used to interact with the entity.
```

- `LivingEntity getEntity()`
```
The player that interacted with the entity.
```

- `ItemStack getItem()`
```
The item that was used to interact with the entity.
```

- `Entity getTarget()`
```
The entity that was interacted with.
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
ItemEvents.entityInteracted(/* extra_id (optional), */ (event) => {
	// This space (un)intentionally left blank
});
```

