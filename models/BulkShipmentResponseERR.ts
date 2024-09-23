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

import { AddressCountStatus } from '../models/AddressCountStatus';
import { BulkShipmentResponseERRLabelDetails } from '../models/BulkShipmentResponseERRLabelDetails';
import { JobStatus } from '../models/JobStatus';
import { LabelGenerationCountStatus } from '../models/LabelGenerationCountStatus';
import { RatingCountStatusERR } from '../models/RatingCountStatusERR';
import { HttpFile } from '../http/http';

export class BulkShipmentResponseERR {
    /**
    *  This is a system-generated unique identifier assigned to the Batch while it is processed.
    */
    'batchId'?: string;
    /**
    *  Name of the of ERR Batch which consists of multiple shipments (shipments in bulk).
    */
    'name'?: string;
    /**
    * Indicates the name of the group of batches, which consists of multiple Batch groups.
    */
    'groupName'?: string;
    'status'?: JobStatus;
    'addressValidation'?: AddressCountStatus;
    'rating'?: RatingCountStatusERR;
    'labelGeneration'?: LabelGenerationCountStatus;
    'labelDetails'?: BulkShipmentResponseERRLabelDetails;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "batchId",
            "baseName": "batchId",
            "type": "string",
            "format": ""
        },
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
            "name": "status",
            "baseName": "status",
            "type": "JobStatus",
            "format": ""
        },
        {
            "name": "addressValidation",
            "baseName": "addressValidation",
            "type": "AddressCountStatus",
            "format": ""
        },
        {
            "name": "rating",
            "baseName": "rating",
            "type": "RatingCountStatusERR",
            "format": ""
        },
        {
            "name": "labelGeneration",
            "baseName": "labelGeneration",
            "type": "LabelGenerationCountStatus",
            "format": ""
        },
        {
            "name": "labelDetails",
            "baseName": "labelDetails",
            "type": "BulkShipmentResponseERRLabelDetails",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BulkShipmentResponseERR.attributeTypeMap;
    }

    public constructor() {
    }
}

