# KubeJSTweaks.noOp

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: NoOpEventJS (third-party)

```
Disables an entry at datapack level
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| recipes | ResourceLocation |  | void | ✘ |
| lootTables | ResourceLocation |  | void | ✘ |
| biomeModifiers | ResourceLocation |  | void | ✘ |
| lootTablesBlock | ResourceLocation |  | void | ✘ |
| json | ResourceLocation, JsonElement |  | void | ✘ |
| success | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| exit | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |
| cancel | Context |  | Object | ✘ |


### Documented members:

- `void recipes(ResourceLocation var0)`

  Parameters:
  - var0: ResourceLocation

```
Adds a condition that is always false, which effectively disables it
```

- `void lootTables(ResourceLocation var0)`

  Parameters:
  - var0: ResourceLocation

```
Adds a condition that is always false, which effectively disables it
```

- `void biomeModifiers(ResourceLocation var0)`

  Parameters:
  - var0: ResourceLocation

```
Adds a no-op type, disabling the biome modifier
```

- `void lootTablesBlock(ResourceLocation var0)`

  Parameters:
  - var0: ResourceLocation

```
Adds a condition that is always false, which effectively disables it
```

- `void json(ResourceLocation var0, JsonElement var1)`

  Parameters:
  - var0: ResourceLocation
  - var1: JsonElement

```
This is effectively the same event as generateData with "last" argument.
Use it to add any kind of json you wish
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
KubeJSTweaks.noOp((event) => {
	// This space (un)intentionally left blank
});
```

