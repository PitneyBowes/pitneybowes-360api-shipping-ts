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

/**
* This is additional customs information required along with item details.
*/
export class MultipieceInternationalShipmentRequestCustomsCustomsInfo {
    /**
    * The reason the commodity is being exported.
    */
    'reasonForExport': MultipieceInternationalShipmentRequestCustomsCustomsInfoReasonForExportEnum;
    /**
    * Item value in mentioned currencyCode
    */
    'customsDeclaredValue': number;
    /**
    * The currency used for declared value. Use three uppercase letters, per ISO 4217
    */
    'currencyCode': string;
    /**
    * A number provided by the Automated Export System (AES). This is required if the item is valued at more than $2,500 USD per Schedule B export codes.
    */
    'EELPFC'?: string;
    /**
    * The certificate number associated with the commodity.
    */
    'certificateNumber'?: string;
    /**
    * Free-form comments regarding the exported shipment.
    */
    'comments'?: string;
    /**
    * Free-form reference information provided by the requestor of the shipment. Depending on the carrier this information may or may not be rendered on the customs documents.
    */
    'fromCustomsReference'?: string;
    /**
    * A reference number used by the importer, such as a VAT number, PO number, or insured number.
    */
    'importerCustomsReference'?: string;
    /**
    * The commercial invoice number assigned by the exporter.
    */
    'invoiceNumber'?: string;
    /**
    * The export license number associated with the commodity.
    */
    'licenseNumber'?: string;
    /**
    * When an international parcel is insured, the insured value must be expressed in Special Drawing Rights values.
    */
    'sdrValue'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "reasonForExport",
            "baseName": "reasonForExport",
            "type": "MultipieceInternationalShipmentRequestCustomsCustomsInfoReasonForExportEnum",
            "format": ""
        },
        {
            "name": "customsDeclaredValue",
            "baseName": "customsDeclaredValue",
            "type": "number",
            "format": ""
        },
        {
            "name": "currencyCode",
            "baseName": "currencyCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "EELPFC",
            "baseName": "EELPFC",
            "type": "string",
            "format": ""
        },
        {
            "name": "certificateNumber",
            "baseName": "certificateNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "comments",
            "baseName": "comments",
            "type": "string",
            "format": ""
        },
        {
            "name": "fromCustomsReference",
            "baseName": "fromCustomsReference",
            "type": "string",
            "format": ""
        },
        {
            "name": "importerCustomsReference",
            "baseName": "importerCustomsReference",
            "type": "string",
            "format": ""
        },
        {
            "name": "invoiceNumber",
            "baseName": "invoiceNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "licenseNumber",
            "baseName": "licenseNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "sdrValue",
            "baseName": "sdrValue",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MultipieceInternationalShipmentRequestCustomsCustomsInfo.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum MultipieceInternationalShipmentRequestCustomsCustomsInfoReasonForExportEnum {
    Gift = 'GIFT',
    CommercialSample = 'COMMERCIAL_SAMPLE',
    Merchandise = 'MERCHANDISE',
    Documents = 'DOCUMENTS',
    ReturnedGoods = 'RETURNED_GOODS',
    Other = 'OTHER'
}

