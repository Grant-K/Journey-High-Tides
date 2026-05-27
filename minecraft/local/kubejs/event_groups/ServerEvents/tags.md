# ServerEvents.tags

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: [TagKubeEvent](https://github.com/KubeJS-Mods/KubeJS/tree/main/src/main/java/dev/latvian/mods/kubejs/server/tag/TagKubeEvent.java)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| registryKey | ResourceKey<?> | ✘ |
| totalRemoved | int | ✘ |
| SOURCE | String | ✔ |
| vanillaRegistry | Registry<?> | ✘ |
| totalAdded | int | ✘ |
| TAG_EVENT_HANDLER | EventExceptionHandler | ✔ |
| tags | Map<ResourceLocation, TagWrapper> | ✘ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getElementIds |  |  | Set<ResourceLocation> | ✘ |
| removeAllTagsFrom | Object; |  | void | ✘ |
| removeAll | ResourceLocation |  | TagWrapper | ✘ |
| remove | ResourceLocation, Object; |  | TagWrapper | ✘ |
| get | ResourceLocation |  | TagWrapper | ✘ |
| add | ResourceLocation, Object; |  | TagWrapper | ✘ |
| getType |  |  | ResourceLocation | ✘ |
| success | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| exit | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |
| cancel | Context |  | Object | ✘ |


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
ServerEvents.tags(extra_id, (event) => {
	// This space (un)intentionally left blank
});
```

