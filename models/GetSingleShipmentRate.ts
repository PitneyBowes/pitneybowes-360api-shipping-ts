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

import { GetSingleShipmentRateSpecialServicesInner } from '../models/GetSingleShipmentRateSpecialServicesInner';
import { HttpFile } from '../http/http';

export class GetSingleShipmentRate {
    /**
    * The base service charge is payable to the carrier, excluding special service charges.
    */
    'baseCharge'?: number;
    /**
    * Carrier is a service used to transport the parcels or couriers from one place to another.
    */
    'carrier'?: string;
    /**
    * A three-character (all uppercase letter) symbol of a currency according to the international ISO standard. As a rule, the first two letters denote the name of the country, and the third letter, the name of the currency thereof.For example, for US - the currency is Dollars and code is USD. Similarly for Canada, the currencycode is CAD, and for India, it is INR. 
    */
    'currencyCode'?: string;
    /**
    * The postal code where a shipment or shipments are tendered to a carrier. This can be different from the Sender’s address.
    */
    'inductionPostalCode'?: string;
    /**
    * Parcel Type is required for creating a shipment while rating a parcel, which varies as per Carrier selection. ParcelType have categories like Package, Envelopes, Paks, Boxes, Tube, etc. 
    */
    'parcelType'?: string;
    /**
    * Its value can be CONTRACT_RATES, COMMERCIAL or COMMERCIAL_BASE for USPS and COMMERCIAL for other carriers depending on the Pitney Bowes contract/subscription
    */
    'rateTypeId'?: string;
    /**
    * The unique identifier given to the carrier specific service.
    */
    'serviceId'?: string;
    /**
    * This provides a carrier-service based special or extra sevice.
    */
    'specialServices'?: Array<GetSingleShipmentRateSpecialServicesInner>;
    /**
    * The total amount payable to the carrier, including special service fees, surcharges, and any international taxes and duties, except as noted below:
    */
    'totalCarrierCharge'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "baseCharge",
            "baseName": "baseCharge",
            "type": "number",
            "format": ""
        },
        {
            "name": "carrier",
            "baseName": "carrier",
            "type": "string",
            "format": ""
        },
        {
            "name": "currencyCode",
            "baseName": "currencyCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "inductionPostalCode",
            "baseName": "inductionPostalCode",
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
            "name": "rateTypeId",
            "baseName": "rateTypeId",
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
            "type": "Array<GetSingleShipmentRateSpecialServicesInner>",
            "format": ""
        },
        {
            "name": "totalCarrierCharge",
            "baseName": "totalCarrierCharge",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetSingleShipmentRate.attributeTypeMap;
    }

    public constructor() {
    }
}

