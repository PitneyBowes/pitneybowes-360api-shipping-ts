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

import { SpecialServiceBatchERR } from '../models/SpecialServiceBatchERR';
import { HttpFile } from '../http/http';

export class CreateBatchRequestERR {
    /**
    * Name of the of ERR Batch which is imported, e.g. ERR-Import-05.
    */
    'name'?: string;
    /**
    * Indicates the name of the group of batches, which consists of multiple Batch groups.
    */
    'groupName'?: string;
    /**
    * This indicates the label size of the Bulk Shipment when it gets printed,i.e., DocSize.
    */
    'size': CreateBatchRequestERRSizeEnum;
    /**
    * This indicates the type of the Batch Shipment, e.g., Shipping Label and Coversheet.
    */
    'type': CreateBatchRequestERRTypeEnum;
    /**
    * This defines the type of the shipment which is printed, e.g., Shipping label gets printed in PDF form.
    */
    'format'?: CreateBatchRequestERRFormatEnum;
    /**
    * A unique identifier associated with the carrier account used by client users during shipment process. Default CarrierAccountID for this batch will be user\'s registered USPS account.
    */
    'carrierAccountId': string;
    /**
    * A unique identifier given to the carrier-specific service. User can override this value by defining it at Shipment level.
    */
    'serviceId': string;
    /**
    * Parcel Type is required for creating a shipment while rating a parcel. And it varies as per USPS selected services, e.g. FRPKG, LGENV, TUBE, and PKG.
    */
    'parcelType': string;
    'specialServices'?: Array<SpecialServiceBatchERR>;

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
            "type": "CreateBatchRequestERRSizeEnum",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CreateBatchRequestERRTypeEnum",
            "format": ""
        },
        {
            "name": "format",
            "baseName": "format",
            "type": "CreateBatchRequestERRFormatEnum",
            "format": ""
        },
        {
            "name": "carrierAccountId",
            "baseName": "carrierAccountId",
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
            "name": "parcelType",
            "baseName": "parcelType",
            "type": "string",
            "format": ""
        },
        {
            "name": "specialServices",
            "baseName": "specialServices",
            "type": "Array<SpecialServiceBatchERR>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateBatchRequestERR.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CreateBatchRequestERRSizeEnum {
    LabelDoc8X11AndDoc4X6 = 'ERR Label - DOC_8X11 and DOC_4X6.',
    Coversheet106X96X95And95X12 = 'ERR Coversheet - 10, 6 X 9, 6 X 9.5, and 9.5 X 12'
}
export enum CreateBatchRequestERRTypeEnum {
    ShippingLabel = 'SHIPPING_LABEL',
    Coversheet = 'COVERSHEET'
}
export enum CreateBatchRequestERRFormatEnum {
    Pdf = 'PDF'
}

