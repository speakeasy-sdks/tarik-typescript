/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Authentication } from "./authentication";
import { Order } from "./order";
import { OrderStatus } from "./orderstatus";
import { OrderTicket } from "./orderticket";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://api.eva-dev.pro"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "0.9.1";
    sdkVersion = "1.0.1";
    genVersion = "2.37.2";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Merchant Center API: API for EVA marketplace backoffice. <br><br> Other documentation: <br><ul><li><a href="https://eva-product.atlassian.net/wiki/spaces/EVA/pages/107020299/Marketplace">Internal project docs</a></li><li><a href="/redoc">Reference Documentation</a></li></ul><br>Request is succeeded if response code is 200 and response JSON contains `{"success": true, ...}`
 */
export class Lk {
    public authentication: Authentication;
    public order: Order;
    public orderStatus: OrderStatus;
    public orderTicket: OrderTicket;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        const securityClient = defaultClient;

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.authentication = new Authentication(this.sdkConfiguration);
        this.order = new Order(this.sdkConfiguration);
        this.orderStatus = new OrderStatus(this.sdkConfiguration);
        this.orderTicket = new OrderTicket(this.sdkConfiguration);
    }
}
