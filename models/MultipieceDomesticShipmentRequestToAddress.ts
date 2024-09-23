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

import { HttpFile } from '../http/http';

export class MultipieceDomesticShipmentRequestToAddress {
    /**
    * The addressLine1 can contain the Flat number, Building or Apartment Name/number (if any) or company name (if not residential).
    */
    'addressLine1': string;
    /**
    * The addressLine2 contains Street address or Landmark (if any).
    */
    'addressLine2'?: string;
    /**
    * The addressLine3 contains P.O.Box (if any) near the address.
    */
    'addressLine3'?: string;
    /**
    * The name of the city or town to where the address belongs.
    */
    'cityTown'?: string;
    /**
    * This indicates the two-character ISO code of the destination country from the ISO country list.
    */
    'countryCode': string;
    /**
    * Name of the recipient to which this address points.
    */
    'name'?: string;
    /**
    * This is recipient\'s phone number. Enter the digits with or without spaces or hyphens. The maximum characters for Phone number is 10 digits. 
    */
    'phone'?: string;
    /**
    * The postal code or ZIP code of the address. For US addresses, use either the 5-digit or 9-digit ZIP code in one of the following formats: \'12345\' or \'12345-6789\'. If you use a different format, such as 12345- or 123451234, will receive an error.
    */
    'postalCode': string;
    /**
    * The State or Province of the address. For a US or Canadian address, it is the 2-letter state or province code. 
    */
    'stateProvince': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "addressLine1",
            "baseName": "addressLine1",
            "type": "string",
            "format": ""
        },
        {
            "name": "addressLine2",
            "baseName": "addressLine2",
            "type": "string",
            "format": ""
        },
        {
            "name": "addressLine3",
            "baseName": "addressLine3",
            "type": "string",
            "format": ""
        },
        {
            "name": "cityTown",
            "baseName": "cityTown",
            "type": "string",
            "format": ""
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
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
            "name": "phone",
            "baseName": "phone",
            "type": "string",
            "format": ""
        },
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "stateProvince",
            "baseName": "stateProvince",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MultipieceDomesticShipmentRequestToAddress.attributeTypeMap;
    }

    public constructor() {
    }
}

