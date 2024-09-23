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

import { ShipmentERRCoversheet } from '../models/ShipmentERRCoversheet';
import { SpecialServiceERRInner } from '../models/SpecialServiceERRInner';
import { HttpFile } from '../http/http';

/**
* This ShipmentBatch contains the schema information for ERR Coversheet.
*/
export class CreateBulkShipmentsERRCoversheet {
    /**
    * Name of the of ERR Batch which consists of multiple shipments (shipments in bulk) for Coversheet printing., e.g. ERR-Coversheet07.
    */
    'name': string;
    /**
    * Indicates the name of the group of batches, which consists of multiple Batch groups.
    */
    'groupName'?: string;
    /**
    * This indicates the envelope size of the ERR Bulk Shipment, i.e., DocSize. We have indicated the example values in enum.
    */
    'size': CreateBulkShipmentsERRCoversheetSizeEnum;
    /**
    * This indicates the type of the ERR Batch Shipment, e.g., Coversheet.
    */
    'type': CreateBulkShipmentsERRCoversheetTypeEnum;
    /**
    * This defines the format type of the shipment which is printed. For example Coversheet prints in PDF form.
    */
    'format'?: CreateBulkShipmentsERRCoversheetFormatEnum;
    /**
    * The unique identifier associated with the user\'s registered USPS Account which will be required for this batch. User can override this value by defining it at Shipment level.
    */
    'carrierAccountId': string;
    /**
    * Parcel Type is required for creating a shipment while rating a parcel. And it varies as per USPS selected services, e.g. LTR, LGENV. User can override this value by defining it at shipment level.
    */
    'parcelType': string;
    /**
    * A unique identifier given  to the carrier-specific service which is used for this BulkShipment. User can override this value by defining it at shipment level.
    */
    'serviceId': string;
    'specialServices'?: Array<SpecialServiceERRInner>;
    'shipments': Array<ShipmentERRCoversheet>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "groupName",
            "baseName": "groupName",
            "type": "string",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "CreateBulkShipmentsERRCoversheetSizeEnum",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CreateBulkShipmentsERRCoversheetTypeEnum",
            "format": ""
        },
        {
            "name": "format",
            "baseName": "format",
            "type": "CreateBulkShipmentsERRCoversheetFormatEnum",
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
            "name": "specialServices",
            "baseName": "specialServices",
            "type": "Array<SpecialServiceERRInner>",
            "format": ""
        },
        {
            "name": "shipments",
            "baseName": "shipments",
            "type": "Array<ShipmentERRCoversheet>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateBulkShipmentsERRCoversheet.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CreateBulkShipmentsERRCoversheetSizeEnum {
    _10 = '10',
    _6X9 = '6 X 9',
    _6X95 = '6 X 9.5',
    _95X12 = '9.5 X 12'
}
export enum CreateBulkShipmentsERRCoversheetTypeEnum {
    Coversheet = 'COVERSHEET'
}
export enum CreateBulkShipmentsERRCoversheetFormatEnum {
    Pdf = 'PDF'
}

