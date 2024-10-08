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

import { DocTabItem } from '../models/DocTabItem';
import { HttpFile } from '../http/http';

/**
* This option is used to provide additional information into the label\'s additional space
*/
export class ShipmentDomesticByCarrierDocTab {
    /**
    * This is an optional field and will be used when the client has multiple doctab options.
    */
    'templateName'?: string;
    'toAddressName'?: DocTabItem;
    'parcelTrackingNumber'?: DocTabItem;
    'carrier'?: DocTabItem;
    'serviceId'?: DocTabItem;
    'dateOfShipment'?: DocTabItem;
    'pieceNumber'?: DocTabItem;
    'packageTotalCarrierCharge'?: DocTabItem;
    'totalCarrierCharge'?: DocTabItem;
    'packageWeight'?: DocTabItem;
    'totalWeight'?: DocTabItem;
    'customField1'?: DocTabItem;
    'customField2'?: DocTabItem;
    'customField3'?: DocTabItem;
    'customField4'?: DocTabItem;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "templateName",
            "baseName": "templateName",
            "type": "string",
            "format": ""
        },
        {
            "name": "toAddressName",
            "baseName": "toAddressName",
            "type": "DocTabItem",
            "format": ""
        },
        {
            "name": "parcelTrackingNumber",
            "baseName": "parcelTrackingNumber",
            "type": "DocTabItem",
            "format": ""
        },
        {
            "name": "carrier",
            "baseName": "carrier",
            "type": "DocTabItem",
            "format": ""
        },
        {
            "name": "serviceId",
            "baseName": "serviceId",
            "type": "DocTabItem",
            "format": ""
        },
        {
            "name": "dateOfShipment",
            "baseName": "dateOfShipment",
            "type": "DocTabItem",
            "format": ""
        },
        {
            "name": "pieceNumber",
            "baseName": "pieceNumber",
            "type": "DocTabItem",
            "format": ""
        },
        {
            "name": "packageTotalCarrierCharge",
            "baseName": "packageTotalCarrierCharge",
            "type": "DocTabItem",
            "format": ""
        },
        {
            "name": "totalCarrierCharge",
            "baseName": "totalCarrierCharge",
            "type": "DocTabItem",
            "format": ""
        },
        {
            "name": "packageWeight",
            "baseName": "packageWeight",
            "type": "DocTabItem",
            "format": ""
        },
        {
            "name": "totalWeight",
            "baseName": "totalWeight",
            "type": "DocTabItem",
            "format": ""
        },
        {
            "name": "customField1",
            "baseName": "customField1",
            "type": "DocTabItem",
            "format": ""
        },
        {
            "name": "customField2",
            "baseName": "customField2",
            "type": "DocTabItem",
            "format": ""
        },
        {
            "name": "customField3",
            "baseName": "customField3",
            "type": "DocTabItem",
            "format": ""
        },
        {
            "name": "customField4",
            "baseName": "customField4",
            "type": "DocTabItem",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ShipmentDomesticByCarrierDocTab.attributeTypeMap;
    }

    public constructor() {
    }
}

