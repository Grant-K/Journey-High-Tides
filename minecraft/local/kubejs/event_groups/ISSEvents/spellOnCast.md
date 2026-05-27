# ISSEvents.spellOnCast

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: SpellOnCastEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getEntity |  |  | LivingEntity | ✘ |
| getSchoolType |  |  | SchoolType | ✘ |
| getSpellId |  |  | String | ✘ |
| getManaCost |  |  | int | ✘ |
| getSpellLevel |  |  | int | ✘ |
| getCastSource |  |  | CastSource | ✘ |
| getOriginalSpellLevel |  |  | int | ✘ |
| setSpellLevel | int |  | void | ✘ |
| getOriginalManaCost |  |  | int | ✘ |
| setManaCost | int |  | void | ✘ |
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

- `SchoolType getSchoolType()`
```
    Returns the school type of the spell that was cast.
```

- `String getSpellId()`
```
    Returns the spell ID of the spell that was cast.
```

- `int getManaCost()`
```
    Returns the new mana cost.
```

- `int getSpellLevel()`
```
    Returns the new spell level of the spell that was cast.
```

- `CastSource getCastSource()`
```
    Returns the cast source.
```

- `int getOriginalSpellLevel()`
```
    Returns the original spell level of the spell that was cast.
```

- `void setSpellLevel(int var0)`

  Parameters:
  - var0: int

```
    Sets the new spell level of the spell that was cast.
```

- `int getOriginalManaCost()`
```
    Returns the original mana cost.
```

- `void setManaCost(int var0)`

  Parameters:
  - var0: int

```
    Sets the new mana cost.
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
ISSEvents.spellOnCast((event) => {
	// This space (un)intentionally left blank
});
```

