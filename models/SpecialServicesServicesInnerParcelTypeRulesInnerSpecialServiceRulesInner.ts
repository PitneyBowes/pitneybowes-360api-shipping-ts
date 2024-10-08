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

import { SpecialServicesServicesInnerParcelTypeRulesInnerSpecialServiceRulesInnerInputParameterRulesInner } from '../models/SpecialServicesServicesInnerParcelTypeRulesInnerSpecialServiceRulesInnerInputParameterRulesInner';
import { SpecialServicesServicesInnerParcelTypeRulesInnerSpecialServiceRulesInnerPrerequisiteRulesInner } from '../models/SpecialServicesServicesInnerParcelTypeRulesInnerSpecialServiceRulesInnerPrerequisiteRulesInner';
import { HttpFile } from '../http/http';

export class SpecialServicesServicesInnerParcelTypeRulesInnerSpecialServiceRulesInner {
    /**
    * It display the unique id of the special service
    */
    'specialserviceId'?: string;
    /**
    * The brand name of the special service.
    */
    'brandedName'?: string;
    /**
    * The unique identifier associated with the special service based on the category.
    */
    'categoryId'?: string;
    /**
    * The special service is categorized with some name and rules, It indicates the category name of the special service.
    */
    'categoryName'?: string;
    /**
    * Indicates non-compatible special services with this special service
    */
    'incompatibleSpecialServices'?: Array<string>;
    /**
    * The rules defined for input parameters for this special service
    */
    'inputParameterRules'?: Array<SpecialServicesServicesInnerParcelTypeRulesInnerSpecialServiceRulesInnerInputParameterRulesInner>;
    /**
    * It displays other pre-requisite special services for this special service
    */
    'prerequisiteRules'?: Array<SpecialServicesServicesInnerParcelTypeRulesInnerSpecialServiceRulesInnerPrerequisiteRulesInner>;
    /**
    * If this special service is trackable or not
    */
    'trackable'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "specialserviceId",
            "baseName": "specialserviceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "brandedName",
            "baseName": "brandedName",
            "type": "string",
            "format": ""
        },
        {
            "name": "categoryId",
            "baseName": "categoryId",
            "type": "string",
            "format": ""
        },
        {
            "name": "categoryName",
            "baseName": "categoryName",
            "type": "string",
            "format": ""
        },
        {
            "name": "incompatibleSpecialServices",
            "baseName": "incompatibleSpecialServices",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "inputParameterRules",
            "baseName": "inputParameterRules",
            "type": "Array<SpecialServicesServicesInnerParcelTypeRulesInnerSpecialServiceRulesInnerInputParameterRulesInner>",
            "format": ""
        },
        {
            "name": "prerequisiteRules",
            "baseName": "prerequisiteRules",
            "type": "Array<SpecialServicesServicesInnerParcelTypeRulesInnerSpecialServiceRulesInnerPrerequisiteRulesInner>",
            "format": ""
        },
        {
            "name": "trackable",
            "baseName": "trackable",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SpecialServicesServicesInnerParcelTypeRulesInnerSpecialServiceRulesInner.attributeTypeMap;
    }

    public constructor() {
    }
}

