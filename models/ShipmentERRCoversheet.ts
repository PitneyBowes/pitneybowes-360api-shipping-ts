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

import { FromAddress } from '../models/FromAddress';
import { Parcel } from '../models/Parcel';
import { ShipmentERRCoversheetMetadataInner } from '../models/ShipmentERRCoversheetMetadataInner';
import { ShipmentOptionsERR } from '../models/ShipmentOptionsERR';
import { SpecialServiceERRInner } from '../models/SpecialServiceERRInner';
import { ToAddress } from '../models/ToAddress';
import { HttpFile } from '../http/http';

export class ShipmentERRCoversheet {
    /**
    * This is a user-defined value provided by users just for their reference. This is for mapping purpose against each shipment.
    */
    'externalId'?: string;
    'fromAddress': FromAddress;
    'toAddress': ToAddress;
    'parcel': Parcel;
    /**
    * A unique identifier associated with the user\'s registered USPS account which is used by client users while shipment process.
    */
    'carrierAccountId'?: string;
    /**
    * >-Packaging type varies as per USPS selected services, e.g., LTR, LGENV.
    */
    'parcelType'?: string;
    /**
    * >-A unique identifier given to the carrier-specific service. ERR supports two services: First Class Mail (FCM) and Priority Mail (PM).
    */
    'serviceId'?: string;
    /**
    * The date when shipment gets created.
    */
    'dateOfShipment'?: string;
    'specialServices'?: Array<SpecialServiceERRInner>;
    'shipmentOptions'?: ShipmentOptionsERR;
    /**
    * Additional metadata that needs to be stored for this shipment, can be added here. For now, `costAccountName` is supported.
    */
    'metadata'?: Array<ShipmentERRCoversheetMetadataInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string",
            "format": ""
        },
        {
            "name": "fromAddress",
            "baseName": "fromAddress",
            "type": "FromAddress",
            "format": ""
        },
        {
            "name": "toAddress",
            "baseName": "toAddress",
            "type": "ToAddress",
            "format": ""
        },
        {
            "name": "parcel",
            "baseName": "parcel",
            "type": "Parcel",
            "format": ""
        },
        {
            "name": "carrierAccountId",
            "baseName": "carrierAccountId",
            "type": "string",
            "format": ""
        },
        {
            "name": "parcelType",
            "baseName": "parcelType",
            "type": "string",
            "format": ""
        },
        {
            "name": "serviceId",
            "baseName": "serviceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "dateOfShipment",
            "baseName": "dateOfShipment",
            "type": "string",
            "format": ""
        },
        {
            "name": "specialServices",
            "baseName": "specialServices",
            "type": "Array<SpecialServiceERRInner>",
            "format": ""
        },
        {
            "name": "shipmentOptions",
            "baseName": "shipmentOptions",
            "type": "ShipmentOptionsERR",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "Array<ShipmentERRCoversheetMetadataInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ShipmentERRCoversheet.attributeTypeMap;
    }

    public constructor() {
    }
}

