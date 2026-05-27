# AE2Events.storageThreshold

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: AppliedKJSEvents$StorageThresholdKubeEvent (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| oldAmount | long | ✘ |
| keyJson | String | ✘ |
| delta | long | ✘ |
| keyId | String | ✘ |
| threshold | long | ✘ |
| extracted | boolean | ✘ |
| inserted | boolean | ✘ |
| watchName | String | ✘ |
| gridId | String | ✘ |
| newAmount | long | ✘ |
| keyType | String | ✘ |
| dimension | String | ✘ |
| direction | String | ✘ |
| timestamp | long | ✘ |

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
AE2Events.storageThreshold((event) => {
	// This space (un)intentionally left blank
});
```

