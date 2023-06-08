/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export class BodyLoginApiV1TokenPost extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "form, name=client_id" })
    clientId?: string;

    @SpeakeasyMetadata({ data: "form, name=client_secret" })
    clientSecret?: string;

    @SpeakeasyMetadata({ data: "form, name=grant_type" })
    grantType?: string;

    @SpeakeasyMetadata({ data: "form, name=password" })
    password: string;

    @SpeakeasyMetadata({ data: "form, name=scope" })
    scope?: string;

    @SpeakeasyMetadata({ data: "form, name=username" })
    username: string;
}
