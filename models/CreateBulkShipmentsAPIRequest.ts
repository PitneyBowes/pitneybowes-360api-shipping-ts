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

import { CreateBulkShipmentInternational } from '../models/CreateBulkShipmentInternational';
import { CreateBulkShipments } from '../models/CreateBulkShipments';
import { ShipmentInternational } from '../models/ShipmentInternational';
import { SpecialService } from '../models/SpecialService';
import { HttpFile } from '../http/http';

export class CreateBulkShipmentsAPIRequest {
    'groupName'?: string;
    /**
    * This indicates the label size of the Bulk Shipment, e.g., DocSize can be 8\' X 11\'.
    */
    'size': CreateBulkShipmentsAPIRequestSizeEnum;
    /**
    * This indicates the type of the Batch Shipment, e.g., Shipping Label.
    */
    'type': CreateBulkShipmentsAPIRequestTypeEnum;
    /**
    * This defines the type of the shipment which is printed, e.g., Shipping label gets printed in PDF form.
    */
    'format'?: CreateBulkShipmentsAPIRequestFormatEnum;
    'name': string;
    /**
    * Default `carrierAccountId` to be used for this batch. You can override this value by defining it at shipment level.
    */
    'carrierAccountId': string;
    /**
    * Default `parcelType` specific to the carrier, e.g., FRPKG, LGENV, TUBE,PKG to be used for this batch. You can override this value by defining it at shipment level.
    */
    'parcelType': string;
    /**
    * Default abbreviated name `serviceId` of the carrier-specific service to be used for this batch. You can override this value by defining it at shipment level.
    */
    'serviceId': string;
    /**
    * Default `specialServices` to be used for this batch. You can override this value by defining it at shipment level.
    */
    'specialServices'?: Array<SpecialService>;
    'shipments': Array<ShipmentInternational>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "groupName",
            "baseName": "groupName",
            "type": "string",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "CreateBulkShipmentsAPIRequestSizeEnum",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CreateBulkShipmentsAPIRequestTypeEnum",
            "format": ""
        },
        {
            "name": "format",
            "baseName": "format",
            "type": "CreateBulkShipmentsAPIRequestFormatEnum",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
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
            "type": "Array<SpecialService>",
            "format": ""
        },
        {
            "name": "shipments",
            "baseName": "shipments",
            "type": "Array<ShipmentInternational>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateBulkShipmentsAPIRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CreateBulkShipmentsAPIRequestSizeEnum {
    Doc8X11 = 'DOC_8X11'
}
export enum CreateBulkShipmentsAPIRequestTypeEnum {
    ShippingLabel = 'SHIPPING_LABEL'
}
export enum CreateBulkShipmentsAPIRequestFormatEnum {
    Pdf = 'PDF'
}

