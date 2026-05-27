# ISSEvents.spellSelection

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: SpellSelectionEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getEntity |  |  | LivingEntity | ✘ |
| addSelectionOption | SpellData, String, int |  | void | ✘ |
| addSelectionOption | SpellData, String, int, int |  | void | ✘ |
| getManager |  |  | SpellSelectionManager | ✘ |
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

- `LivingEntity getEntity()`
```
    Returns the player that cast the spell.
```

- `void addSelectionOption(SpellData var0, String var1, int var2)`

  Parameters:
  - var0: SpellData
  - var1: String
  - var2: int

```
    Adds spell option to the end of a player's spell bar.
```

- `void addSelectionOption(SpellData var0, String var1, int var2, int var3)`

  Parameters:
  - var0: SpellData
  - var1: String
  - var2: int
  - var3: int

```
    Adds spell option to the end of a player's spell bar.
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
ISSEvents.spellSelection((event) => {
	// This space (un)intentionally left blank
});
```

