<!-- Start SDK Example Usage -->
```typescript
import { Lk } from "LK";
import { LoginApiV1TokenPostResponse } from "LK/dist/sdk/models/operations";

const sdk = new Lk();

sdk.authentication.loginApiV1TokenPost({
  clientId: "corrupti",
  clientSecret: "provident",
  grantType: "distinctio",
  password: "quibusdam",
  scope: "unde",
  username: "Ryan.Little62",
}).then((res: LoginApiV1TokenPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->