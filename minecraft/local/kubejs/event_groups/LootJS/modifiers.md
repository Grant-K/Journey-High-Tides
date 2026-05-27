# LootJS.modifiers

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: LootModificationEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| success | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| exit | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |
| cancel | Context |  | Object | ✘ |
| getGlobalModifiers |  |  | List<String> | ✘ |
| removeGlobalModifiers | IdFilter; |  | void | ✘ |
| disableLootModification | IdFilter; |  | void | ✘ |
| addTableModifier | LootTableFilter; |  | LootModifier$Builder | ✘ |
| addTypeModifier | LootType; |  | LootModifier$Builder | ✘ |
| addBlockModifier | BlockFilter |  | LootModifier$Builder | ✘ |
| addEntityModifier | HolderSet<EntityType<?>> |  | LootModifier$Builder | ✘ |
| disableWitherStarDrop |  |  | void | ✘ |
| disableCreeperHeadDrop |  |  | void | ✘ |
| disableSkeletonHeadDrop |  |  | void | ✘ |
| disableZombieHeadDrop |  |  | void | ✘ |
| enableLogging |  |  | void | ✘ |


### Documented members:

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
LootJS.modifiers((event) => {
	// This space (un)intentionally left blank
});
```

