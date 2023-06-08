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
