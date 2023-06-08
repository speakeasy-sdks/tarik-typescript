# order

### Available Operations

* [orderSchemaApiV1OrdersSchemaGet](#orderschemaapiv1ordersschemaget) - Get JSON schema for order
* [orderValidatedApiV1OrdersPost](#ordervalidatedapiv1orderspost) - Add new order

## orderSchemaApiV1OrdersSchemaGet

Get JSON schema for order

### Example Usage

```typescript
import { Lk } from "LK";
import { OrderSchemaApiV1OrdersSchemaGetResponse } from "LK/dist/sdk/models/operations";

const sdk = new Lk();

sdk.order.orderSchemaApiV1OrdersSchemaGet().then((res: OrderSchemaApiV1OrdersSchemaGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## orderValidatedApiV1OrdersPost

Checks if JSON has valid schema and adds request to create new order. No multiple orders will be created for the same **order_id**, even if request is accepted. Only first order request for **order_id** is created.

### Example Usage

```typescript
import { Lk } from "LK";
import { OrderValidatedApiV1OrdersPostResponse } from "LK/dist/sdk/models/operations";
import { PaymentMethod, PaymentStatus, ShippingMethod } from "LK/dist/sdk/models/shared";

const sdk = new Lk();

sdk.order.orderValidatedApiV1OrdersPost({
  createdAt: new Date("2022-03-18T00:29:19.137Z"),
  customer: {
    email: "Junior.Kshlerin@hotmail.com",
    erpId: 925597,
    firstName: "Rocky",
    humanId: 71036,
    id: 337396,
    lastName: "Bogisich",
    middleName: "deserunt",
    phone: "489-818-8947",
  },
  items: [
    {
      name: "Deanna Sauer MD",
      price: 6399.21,
      quantity: 582020,
      sku: 143353,
    },
    {
      name: "Irvin Rosenbaum III",
      price: 4736,
      quantity: 264555,
      sku: 186332,
    },
    {
      name: "Jonathon Klocko",
      price: 1352.18,
      quantity: 18789,
      sku: 324141,
    },
    {
      name: "Louis Moore",
      price: 3864.89,
      quantity: 943749,
      sku: 902599,
    },
  ],
  merchantId: 681820,
  orderId: 449950,
  payment: {
    method: PaymentMethod.Zero,
    status: PaymentStatus.Zero,
  },
  shipping: {
    address: {
      city: "Kertzmannside",
      cityId: "b10faaa2-352c-4595-9907-aff1a3a2fa94",
      comment: "commodi",
      region: "quam",
      regionId: "739251aa-52c3-4f5a-9019-da1ffe78f097",
      settlementDescription: "cum",
      settlementType: "0074f154-71b5-4e6e-93b9-9d488e1e91e4",
      street: {
        name: "Elizabeth Orn",
      },
      warehouseId: "abd44269-802d-4502-a94b-b4f63c969e9a",
      warehouseNumber: 223081,
    },
    method: ShippingMethod.NovaposhtaPackstation,
    price: 8915.55,
    recipient: {
      firstName: "Veda",
      lastName: "Parisian",
      middleName: "in",
      phone: "896.227.8436 x825",
    },
  },
}, {
  oAuth2PasswordBearer: "",
}).then((res: OrderValidatedApiV1OrdersPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
