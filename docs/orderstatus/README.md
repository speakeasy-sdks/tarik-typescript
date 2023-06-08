# orderStatus

### Available Operations

* [statusRequestValidatedApiV1OrdersOrderIdStatusRequestPost](#statusrequestvalidatedapiv1ordersorderidstatusrequestpost) - Send order status request
* [statusSchemaApiV1OrdersStatusSchemaGet](#statusschemaapiv1ordersstatusschemaget) - Get JSON schema for order status
* [statusValidatedApiV1OrdersOrderIdStatusPost](#statusvalidatedapiv1ordersorderidstatuspost) - Set order status

## statusRequestValidatedApiV1OrdersOrderIdStatusRequestPost

Send order status request

### Example Usage

```typescript
import { Lk } from "LK";
import { StatusRequestValidatedApiV1OrdersOrderIdStatusRequestPostResponse } from "LK/dist/sdk/models/operations";
import { OrderStatuses } from "LK/dist/sdk/models/shared";

const sdk = new Lk();

sdk.orderStatus.statusRequestValidatedApiV1OrdersOrderIdStatusRequestPost({
  orderStatus: {
    orderId: 313218,
    status: OrderStatuses.One,
  },
  orderId: 965417,
}, {
  oAuth2PasswordBearer: "",
}).then((res: StatusRequestValidatedApiV1OrdersOrderIdStatusRequestPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## statusSchemaApiV1OrdersStatusSchemaGet

Get JSON schema for order status

### Example Usage

```typescript
import { Lk } from "LK";
import { StatusSchemaApiV1OrdersStatusSchemaGetResponse } from "LK/dist/sdk/models/operations";

const sdk = new Lk();

sdk.orderStatus.statusSchemaApiV1OrdersStatusSchemaGet().then((res: StatusSchemaApiV1OrdersStatusSchemaGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## statusValidatedApiV1OrdersOrderIdStatusPost

Set order status

### Example Usage

```typescript
import { Lk } from "LK";
import { StatusValidatedApiV1OrdersOrderIdStatusPostResponse } from "LK/dist/sdk/models/operations";
import { OrderStatuses } from "LK/dist/sdk/models/shared";

const sdk = new Lk();

sdk.orderStatus.statusValidatedApiV1OrdersOrderIdStatusPost({
  orderStatus: {
    orderId: 692532,
    status: OrderStatuses.One,
  },
  orderId: 725255,
}, {
  oAuth2PasswordBearer: "",
}).then((res: StatusValidatedApiV1OrdersOrderIdStatusPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
