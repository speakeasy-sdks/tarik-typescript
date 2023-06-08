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
