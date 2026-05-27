# LevelEvents.afterExplosion

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✘

- Event class: [ExplosionKubeEvent$After](https://github.com/KubeJS-Mods/KubeJS/tree/main/src/main/java/dev/latvian/mods/kubejs/level/After.java)

```
Invoked right after an explosion happens.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| removeAllAffectedBlocks |  |  | void | ✘ |
| removeAffectedEntity | Entity |  | void | ✘ |
| removeAllAffectedEntities |  |  | void | ✘ |
| removeAffectedBlock | LevelBlock |  | void | ✘ |
| removeKnockback |  |  | void | ✘ |
| getAffectedBlocks |  |  | List<LevelBlock> | ✘ |
| getAffectedEntities |  |  | EntityArrayList | ✘ |
| getZ |  |  | double | ✘ |
| getExploder |  |  | LivingEntity | ✘ |
| getPosition |  |  | Vec3 | ✘ |
| getY |  |  | double | ✘ |
| getX |  |  | double | ✘ |
| getLevel |  |  | Level | ✘ |
| getBlock |  |  | LevelBlock | ✘ |
| getRegistries |  |  | RegistryAccess | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| success | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| exit | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |
| cancel | Context |  | Object | ✘ |


### Documented members:

- `void removeAllAffectedBlocks()`
```
Remove all blocks from the list of affected blocks.
```

- `void removeAffectedEntity(Entity var0)`

  Parameters:
  - var0: Entity

```
Remove an entity from the list of affected entities.
```

- `void removeAllAffectedEntities()`
```
Remove all entities from the list of affected entities.
```

- `void removeAffectedBlock(LevelBlock var0)`

  Parameters:
  - var0: LevelBlock

```
Remove a block from the list of affected blocks.
```

- `void removeKnockback()`
```
Remove all knockback from all affected *players*.
```

- `List<LevelBlock> getAffectedBlocks()`
```
Gets a list of all blocks affected by the explosion.
```

- `EntityArrayList getAffectedEntities()`
```
Gets a list of all entities affected by the explosion.
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
LevelEvents.afterExplosion(/* extra_id (optional), */ (event) => {
	// This space (un)intentionally left blank
});
```

