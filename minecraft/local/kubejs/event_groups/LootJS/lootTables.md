# LootJS.lootTables

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: LootTableEventJS (third-party)

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
| getLootTable | ResourceLocation |  | MutableLootTable | ✘ |
| getEntityTable | EntityType<?> |  | MutableLootTable | ✘ |
| getBlockTable | Block |  | MutableLootTable | ✘ |
| clearLootTables | IdFilter |  | void | ✘ |
| modifyLootTables | LootTableFilter; |  | LootTableList | ✘ |
| modifyLootTypeTables | LootType; |  | LootTableList | ✘ |
| getLootTableIds |  |  | Set<ResourceLocation> | ✘ |
| getLootTableIds | IdFilter |  | Set<ResourceLocation> | ✘ |
| forEachTable | Consumer<MutableLootTable> |  | void | ✘ |
| forEachTable | IdFilter, Consumer<MutableLootTable> |  | void | ✘ |
| modifyBlockTables | IdFilter |  | LootTableList | ✘ |
| modifyEntityTables | IdFilter |  | LootTableList | ✘ |
| hasLootTable | ResourceLocation |  | boolean | ✘ |
| create | ResourceLocation, LootType |  | MutableLootTable | ✘ |
| create | ResourceLocation |  | MutableLootTable | ✘ |


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
LootJS.lootTables((event) => {
	// This space (un)intentionally left blank
});
```

