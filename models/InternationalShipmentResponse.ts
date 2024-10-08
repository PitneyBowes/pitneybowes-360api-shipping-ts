/**
 * Shipping APIs
 * ### Introduction  The Shipping APIs include a variety of operations that allow users to manage and track their shipping requests.   Some of the key API operations available in the Shipping API includes: ### Shipment API  | Operation      | Description | | ----------- | ----------- |  | Get Carriers    | This operation fetches all onboarded carriers. Typically, user will use this service to get list of onboarded carriers and supported properties for those carriers.  |  | Get Countries | This operation fetches list of supported destination countries for a provided carrier and origin country.  |  | Get Services | This operation fetches a list of supported services for a carrier with respect to specific origin and destination country. |  | Get ParcelTypes| This operation fetches ParcelTypes based on carrier, origin and destination country. |  | Get Special Services| This operation fetches Special Services for a given carrier, service, origin and destination country. |  | Get Carrier Accounts| This operation retrieves onboarded Carriers with their Carrier Account Ids which uniquely identify multiple accounts of same carrier.  |  | Rate Shop and Get Single Rate| This API contains 2 operations, rate shop and single rate. Rate shop will fetch rates for all carrier services based on the given addresses (From and To), weight, and dimension for given parcelType. Single rate will get rate for specific service and special service (if requested) based on the given addresses (From and To), weight, and dimension, parcelType and serviceId with or without specialServices. Single rate will be used mainly to a rate a shipment before creating shipment.  |  | Create Shipment| This operation creates a new Shipment or Shipment Label. This is for both Domestic and International. | | Get All Shipments| This operation fetches all created Shipments. |  | Get Shipment by Id| Retrieves single shipment using Shipment Id. |  | Reprint Shipment| This operation reprints Shipment by the shipmentId. It retrieves an existing shipping label to reprint. The API sends the shipmentId returned by the original Created Shipment request. Use this only if the shipping label in the Create Shipment response was spoilt or lost. |  | Cancel Shipment| This operation cancels previously created shipment. |  
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DomesticShipmentResponseLabelLayoutInner } from '../models/DomesticShipmentResponseLabelLayoutInner';
import { InternationalShipmentResponseCustoms } from '../models/InternationalShipmentResponseCustoms';
import { InternationalShipmentResponseRate } from '../models/InternationalShipmentResponseRate';
import { ReprintShipmentFromAddress } from '../models/ReprintShipmentFromAddress';
import { ReprintShipmentToAddress } from '../models/ReprintShipmentToAddress';
import { ShipmentDomesticParcel } from '../models/ShipmentDomesticParcel';
import { ShipmentOptions } from '../models/ShipmentOptions';
import { HttpFile } from '../http/http';

export class InternationalShipmentResponse {
    /**
    * This is a GUID (globally unique identifier) that\'s automatically generated for every request that the webserver receives.
    */
    'correlationId'?: string;
    /**
    * This indicates the label layout and generated label details
    */
    'labelLayout'?: Array<DomesticShipmentResponseLabelLayoutInner>;
    'fromAddress'?: ReprintShipmentFromAddress;
    'parcel'?: ShipmentDomesticParcel;
    /**
    * >-Parcel Id is optional and would be visible in case when is present in the request.
    */
    'parcelId'?: string;
    /**
    * The Tracking number given to the Parcel for tracking purpose.
    */
    'parcelTrackingNumber'?: string;
    'rate'?: InternationalShipmentResponseRate;
    /**
    * A unique identifier associated with the Shipment.
    */
    'shipmentId'?: string;
    'shipmentOptions'?: ShipmentOptions;
    'toAddress'?: ReprintShipmentToAddress;
    'customs'?: InternationalShipmentResponseCustoms;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "correlationId",
            "baseName": "correlationId",
            "type": "string",
            "format": ""
        },
        {
            "name": "labelLayout",
            "baseName": "labelLayout",
            "type": "Array<DomesticShipmentResponseLabelLayoutInner>",
            "format": ""
        },
        {
            "name": "fromAddress",
            "baseName": "fromAddress",
            "type": "ReprintShipmentFromAddress",
            "format": ""
        },
        {
            "name": "parcel",
            "baseName": "parcel",
            "type": "ShipmentDomesticParcel",
            "format": ""
        },
        {
            "name": "parcelId",
            "baseName": "parcelId",
            "type": "string",
            "format": ""
        },
        {
            "name": "parcelTrackingNumber",
            "baseName": "parcelTrackingNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "rate",
            "baseName": "rate",
            "type": "InternationalShipmentResponseRate",
            "format": ""
        },
        {
            "name": "shipmentId",
            "baseName": "shipmentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "shipmentOptions",
            "baseName": "shipmentOptions",
            "type": "ShipmentOptions",
            "format": ""
        },
        {
            "name": "toAddress",
            "baseName": "toAddress",
            "type": "ReprintShipmentToAddress",
            "format": ""
        },
        {
            "name": "customs",
            "baseName": "customs",
            "type": "InternationalShipmentResponseCustoms",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InternationalShipmentResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

