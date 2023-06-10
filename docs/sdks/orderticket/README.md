# orderTicket

### Available Operations

* [newTicketApiV1TicketPost](#newticketapiv1ticketpost) - Add new order ticket
* [ticketStatusApiV1TicketTicketIdCommentPost](#ticketstatusapiv1ticketticketidcommentpost) - Add ticket comment

## newTicketApiV1TicketPost

Add new order ticket

### Example Usage

```typescript
import { Lk } from "LK";
import { NewTicketApiV1TicketPostResponse } from "LK/dist/sdk/models/operations";
import { OrderTicketStatus } from "LK/dist/sdk/models/shared";

const sdk = new Lk();

sdk.orderTicket.newTicketApiV1TicketPost({
  decision: "id",
  orderId: 501324,
  solutionTime: new Date("2021-02-02T01:24:52.629Z"),
  status: OrderTicketStatus.Sevene9f1204F46b1410Fb9a0050ba5d6c38,
  ticketId: "deserunt",
}, {
  oAuth2PasswordBearer: "",
}).then((res: NewTicketApiV1TicketPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [shared.OrderTicket](../../models/shared/orderticket.md)                                                   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.NewTicketApiV1TicketPostSecurity](../../models/operations/newticketapiv1ticketpostsecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.NewTicketApiV1TicketPostResponse](../../models/operations/newticketapiv1ticketpostresponse.md)>**


## ticketStatusApiV1TicketTicketIdCommentPost

Add ticket comment

### Example Usage

```typescript
import { Lk } from "LK";
import { TicketStatusApiV1TicketTicketIdCommentPostResponse } from "LK/dist/sdk/models/operations";
import { OrderTicketStatus } from "LK/dist/sdk/models/shared";

const sdk = new Lk();

sdk.orderTicket.ticketStatusApiV1TicketTicketIdCommentPost({
  orderTicket: {
    decision: "nisi",
    orderId: 423855,
    solutionTime: new Date("2021-10-15T07:59:26.631Z"),
    status: OrderTicketStatus.Threee7f420cF46b1410Fc9a0050ba5d6c38,
    ticketId: "perferendis",
  },
  ticketId: "nihil",
}, {
  oAuth2PasswordBearer: "",
}).then((res: TicketStatusApiV1TicketTicketIdCommentPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.TicketStatusApiV1TicketTicketIdCommentPostRequest](../../models/operations/ticketstatusapiv1ticketticketidcommentpostrequest.md)   | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `security`                                                                                                                                     | [operations.TicketStatusApiV1TicketTicketIdCommentPostSecurity](../../models/operations/ticketstatusapiv1ticketticketidcommentpostsecurity.md) | :heavy_check_mark:                                                                                                                             | The security requirements to use for the request.                                                                                              |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.TicketStatusApiV1TicketTicketIdCommentPostResponse](../../models/operations/ticketstatusapiv1ticketticketidcommentpostresponse.md)>**

