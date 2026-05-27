# ClientEvents.generateAssets

## Basic info

- Valid script types: [CLIENT]

- Has result? ✘

- Event class: [KubeAssetGenerator](https://github.com/KubeJS-Mods/KubeJS/tree/main/src/main/java/dev/latvian/mods/kubejs/generator/KubeAssetGenerator.java)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| HANDHELD_ITEM_MODEL | ResourceLocation | ✔ |
| CUBE_BLOCK_MODEL | ResourceLocation | ✔ |
| CUBE_ALL_BLOCK_MODEL | ResourceLocation | ✔ |
| GENERATED_ITEM_MODEL | ResourceLocation | ✔ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| blockState | ResourceLocation, Consumer<VariantBlockStateGenerator> |  | void | ✘ |
| particle | ResourceLocation, Consumer<ParticleGenerator> |  | void | ✘ |
| sounds | String, Consumer<SoundsGenerator> |  | void | ✘ |
| loadTexture | ResourceLocation |  | LoadedTexture | ✘ |
| multipartState | ResourceLocation, Consumer<MultipartBlockStateGenerator> |  | void | ✘ |
| defaultItemModel | ResourceLocation |  | void | ✘ |
| defaultHandheldItemModel | ResourceLocation |  | void | ✘ |
| stencil | ResourceLocation, ResourceLocation, Map<KubeColor, KubeColor> |  | void | ✘ |
| texture | ResourceLocation, LoadedTexture |  | void | ✘ |
| blockModel | ResourceLocation, Consumer<ModelGenerator> |  | void | ✘ |
| itemModel | ResourceLocation, Consumer<ModelGenerator> |  | void | ✘ |
| mask | ResourceLocation, ResourceLocation, ResourceLocation |  | boolean | ✘ |
| getRegistries |  |  | RegistryAccessContainer | ✘ |
| getGenerated | ResourceLocation |  | GeneratedData | ✘ |
| text | ResourceLocation, String |  | void | ✘ |
| json | ResourceLocation, JsonElement |  | void | ✘ |
| flush |  |  | void | ✘ |
| add | GeneratedData |  | void | ✘ |
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
ClientEvents.generateAssets(extra_id, (event) => {
	// This space (un)intentionally left blank
});
```

