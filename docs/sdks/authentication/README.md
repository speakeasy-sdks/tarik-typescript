# authentication

### Available Operations

* [loginApiV1TokenPost](#loginapiv1tokenpost) - Login

## loginApiV1TokenPost

Login

### Example Usage

```typescript
import { Lk } from "LK";
import { LoginApiV1TokenPostResponse } from "LK/dist/sdk/models/operations";

const sdk = new Lk();

sdk.authentication.loginApiV1TokenPost({
  clientId: "deserunt",
  clientSecret: "suscipit",
  grantType: "iure",
  password: "magnam",
  scope: "debitis",
  username: "Anahi38",
}).then((res: LoginApiV1TokenPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.BodyLoginApiV1TokenPost](../../models/shared/bodyloginapiv1tokenpost.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.LoginApiV1TokenPostResponse](../../models/operations/loginapiv1tokenpostresponse.md)>**

