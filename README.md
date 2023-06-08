# LK

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/tarik-typescript
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/tarik-typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [authentication](docs/authentication/README.md)

* [loginApiV1TokenPost](docs/authentication/README.md#loginapiv1tokenpost) - Login

### [order](docs/order/README.md)

* [orderSchemaApiV1OrdersSchemaGet](docs/order/README.md#orderschemaapiv1ordersschemaget) - Get JSON schema for order
* [orderValidatedApiV1OrdersPost](docs/order/README.md#ordervalidatedapiv1orderspost) - Add new order

### [orderStatus](docs/orderstatus/README.md)

* [statusRequestValidatedApiV1OrdersOrderIdStatusRequestPost](docs/orderstatus/README.md#statusrequestvalidatedapiv1ordersorderidstatusrequestpost) - Send order status request
* [statusSchemaApiV1OrdersStatusSchemaGet](docs/orderstatus/README.md#statusschemaapiv1ordersstatusschemaget) - Get JSON schema for order status
* [statusValidatedApiV1OrdersOrderIdStatusPost](docs/orderstatus/README.md#statusvalidatedapiv1ordersorderidstatuspost) - Set order status

### [orderTicket](docs/orderticket/README.md)

* [newTicketApiV1TicketPost](docs/orderticket/README.md#newticketapiv1ticketpost) - Add new order ticket
* [ticketStatusApiV1TicketTicketIdCommentPost](docs/orderticket/README.md#ticketstatusapiv1ticketticketidcommentpost) - Add ticket comment
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

