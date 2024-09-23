// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BPODDownloadRequest } from '../models/BPODDownloadRequest';
import { BPODDownloadResponse } from '../models/BPODDownloadResponse';
import { CancelShipment } from '../models/CancelShipment';
import { CancelStampsRequestERR } from '../models/CancelStampsRequestERR';
import { CancelStampsResponseERR } from '../models/CancelStampsResponseERR';
import { Carriers } from '../models/Carriers';
import { CountriesInner } from '../models/CountriesInner';
import { CreateShipment200Response } from '../models/CreateShipment200Response';
import { CreateShipmentRequest } from '../models/CreateShipmentRequest';
import { Errors } from '../models/Errors';
import { GetAllShipments } from '../models/GetAllShipments';
import { GetCarrierAccounts200Response } from '../models/GetCarrierAccounts200Response';
import { GetRates200Response } from '../models/GetRates200Response';
import { GetRatesRequest } from '../models/GetRatesRequest';
import { GetSingleShipment } from '../models/GetSingleShipment';
import { ModelError } from '../models/ModelError';
import { NotFoundErrors } from '../models/NotFoundErrors';
import { ParcelTypesInner } from '../models/ParcelTypesInner';
import { ReprintShipment } from '../models/ReprintShipment';
import { ReturnLabel } from '../models/ReturnLabel';
import { ReturnLabelResponse } from '../models/ReturnLabelResponse';
import { ServicesInner } from '../models/ServicesInner';
import { SignatureFileResponse } from '../models/SignatureFileResponse';
import { SpecialServices } from '../models/SpecialServices';

/**
 * no description
 */
export class ShipmentApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This operation cancel/void shipment.
     * Cancel Shipment
     * @param shipmentId This indicates the shipmentId, a unique identifier assigned for the Shipment.
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public async cancelShipmentById(shipmentId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipmentId' is not null or undefined
        if (shipmentId === null || shipmentId === undefined) {
            throw new RequiredError("ShipmentApi", "cancelShipmentById", "shipmentId");
        }



        // Path Params
        const localVarPath = '/api/v1/shipments/{shipmentId}/cancel'
            .replace('{' + 'shipmentId' + '}', encodeURIComponent(String(shipmentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        if (xPBDeveloperPartnerID !== undefined) {
            requestContext.setHeaderParam("X-PB-Developer-Partner-ID", ObjectSerializer.serialize(xPBDeveloperPartnerID, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This operation cancels (voids) stamps generated for ERR (Electronic Return Receipt).  - User needs to provide *Stamp IDs* to cancel those specific ERR stamps.  - User can download the *Refund Form* having details of generated Postage.  - At once, maximum 1000 stamps can be requested for cancelation. 
     * Cancel Stamps ERR
     * @param cancelStampsRequestERR 
     * @param xPBDeveloperPartnerID The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     */
    public async cancelStampsERR(cancelStampsRequestERR: CancelStampsRequestERR, xPBDeveloperPartnerID?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cancelStampsRequestERR' is not null or undefined
        if (cancelStampsRequestERR === null || cancelStampsRequestERR === undefined) {
            throw new RequiredError("ShipmentApi", "cancelStampsERR", "cancelStampsRequestERR");
        }



        // Path Params
        const localVarPath = '/api/v1/err/stamps/void';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        if (xPBDeveloperPartnerID !== undefined) {
            requestContext.setHeaderParam("X-PB-Developer-Partner-ID", ObjectSerializer.serialize(xPBDeveloperPartnerID, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(cancelStampsRequestERR, "CancelStampsRequestERR", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This operation creates a return label based on a previous shipment. <br> The return label can be created in two ways:  <br> 1. User need not to provide any details of package, address and service. The API would take all details from the shipmentId mentioned in the path parameter and would swap the address and create return label. However for UPS `specialServices` object is required as carrier mandates to provide package description with PRL special service. <br> 2. User can customize the request by passing `fromAddress`, `toAddress`, `parcelType`, `serviceId` in the request itself. <br> Please Note that for UPS it is required to pass `specialServices` object with `PRL` service id and  input parameters with name as `RETURN_PKG_DESCRIPTION`. <br> For FedEx `specialServices` object is not required and PRL is added by default while creating return.  If user wishes to provide RMA number, it can be passed in `specialServices` object in the request body. <br> Please Note If user provides any information in this request it overrides the information in onward shipment which was created <br> For example if user provides toAddress in the request the return label will get created with recipient as mentioned in toAddress and  if user provides fromAddress in the request, the return label will be created with sender as mentioned in fromAddress
     * Create Return label shipment
     * @param shipmentId It specifies the shipmentId of onward shipment against which return label has to be created.
     * @param returnLabel 
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public async createReturnLabel(shipmentId: string, returnLabel: ReturnLabel, xPBDeveloperPartnerID?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipmentId' is not null or undefined
        if (shipmentId === null || shipmentId === undefined) {
            throw new RequiredError("ShipmentApi", "createReturnLabel", "shipmentId");
        }


        // verify required parameter 'returnLabel' is not null or undefined
        if (returnLabel === null || returnLabel === undefined) {
            throw new RequiredError("ShipmentApi", "createReturnLabel", "returnLabel");
        }



        // Path Params
        const localVarPath = '/api/v1/shipments/{shipmentId}/return'
            .replace('{' + 'shipmentId' + '}', encodeURIComponent(String(shipmentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        if (xPBDeveloperPartnerID !== undefined) {
            requestContext.setHeaderParam("X-PB-Developer-Partner-ID", ObjectSerializer.serialize(xPBDeveloperPartnerID, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(returnLabel, "ReturnLabel", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This operation creates a new Shipment or Shipment Label. This is for both Domestic and International.<br> For domestic, Create a shipment requires domestic addresses (within same country)- ToAddress and FromAddress, and  carrier service and special service.<br> While for International, Create a shipment requires international delivery, that is ToAddress must be the different country (and not the same country mentioned in From Address), selected services, special services, and customs information. <br> <br> Note- To create Return shipment using this API- If PRL (return special service) is used, user need to provide sender address (from where return shipment is to be created) in `fromAddress` object and recipient address (to where return is to be created) in `toAddress` object. System will not swap the address for return in this API. If you want to create return for the already created shipment, you may use `Create Return Label Shipment` API. <br> <br> Note: Currently Shipment created from below API gets assigned to the Default location of the subscription.
     * Create Shipment
     * @param createShipmentRequest 
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public async createShipment(createShipmentRequest: CreateShipmentRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createShipmentRequest' is not null or undefined
        if (createShipmentRequest === null || createShipmentRequest === undefined) {
            throw new RequiredError("ShipmentApi", "createShipment", "createShipmentRequest");
        }



        // Path Params
        const localVarPath = '/api/v1/shipments';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        if (xPBDeveloperPartnerID !== undefined) {
            requestContext.setHeaderParam("X-PB-Developer-Partner-ID", ObjectSerializer.serialize(xPBDeveloperPartnerID, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createShipmentRequest, "CreateShipmentRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This API operation is used to download bulk of ERR (*Electronic Return Receipt*) - POD (*Proof of Delivery*) files, which are specific to USPS carrier. <br />   User can download BPOD (*Bulk Proof of Delivery*) files either using *Shipment IDs* or *Date Range*.    If user wants to check records based on dates and download BPOD files accordingly, then *Start Date* and *End Date* need to be passed in the request body as filter. Else *Shipment IDs* will be used as default value when user does not provide *DateRange* filter. <br />   User is restricted to download 1000 BPOD files as max limit. 
     * Download BPOD Files
     * @param xPBDeveloperPartnerID The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     * @param startDate The BPOD files to be downloaded from which Date is the startDate in the Date Range filter. This field is not required if the Shipment IDs provided in the request body.
     * @param endDate The BPOD files to be downloaded till which Date is the endDate in the Date Range filter. This field is not required if the Shipment IDs provided in the request body.
     * @param body This is the request body to download BPOD files. Request body supports max of 1000 ShipmentIDs in a request.
     */
    public async downloadBpodFiles(xPBDeveloperPartnerID?: string, startDate?: string, endDate?: string, body?: BPODDownloadRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/api/v1/err/shipments/bpod';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (startDate !== undefined) {
            requestContext.setQueryParam("startDate", ObjectSerializer.serialize(startDate, "string", ""));
        }

        // Query Params
        if (endDate !== undefined) {
            requestContext.setQueryParam("endDate", ObjectSerializer.serialize(endDate, "string", ""));
        }

        // Header Params
        if (xPBDeveloperPartnerID !== undefined) {
            requestContext.setHeaderParam("X-PB-Developer-Partner-ID", ObjectSerializer.serialize(xPBDeveloperPartnerID, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "BPODDownloadRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This operation fetches all created Shipments. If query parameters are not provided, it will default endDate as current date, page as 1 and size as 10.
     * Get All Shipments
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param startDate While searching shipments, user set a date range to get all created shipments. This indicatesthe start date of the set date range under shipment search criteria. The date format must be: YYYY-MM-DD.
     * @param endDate While searching shipments, user set a date range to get all created shipments. This indicatesthe end date of the set date range under shipment search criteria. The date format must be: YYYY-MM-DD.
     * @param page This indicates the page of the Shipments search result list.
     * @param size This indicates the size/count of the searched result list.
     */
    public async getAllShipments(xPBDeveloperPartnerID?: string, startDate?: string, endDate?: string, page?: string, size?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/api/v1/shipments';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (startDate !== undefined) {
            requestContext.setQueryParam("startDate", ObjectSerializer.serialize(startDate, "string", ""));
        }

        // Query Params
        if (endDate !== undefined) {
            requestContext.setQueryParam("endDate", ObjectSerializer.serialize(endDate, "string", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "string", ""));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "string", ""));
        }

        // Header Params
        if (xPBDeveloperPartnerID !== undefined) {
            requestContext.setHeaderParam("X-PB-Developer-Partner-ID", ObjectSerializer.serialize(xPBDeveloperPartnerID, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This operation retrieves onboarded Carriers with their Carrier Account Ids which uniquely identify multiple accounts of same carrier.
     * Get Carrier Accounts
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public async getCarrierAccounts(xPBDeveloperPartnerID?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/api/v1/carrierAccounts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        if (xPBDeveloperPartnerID !== undefined) {
            requestContext.setHeaderParam("X-PB-Developer-Partner-ID", ObjectSerializer.serialize(xPBDeveloperPartnerID, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This operation fetches all supported carriers. This service is used to get list of supported carriers and their properties.
     * Get Carriers
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public async getCarriers(xPBDeveloperPartnerID?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/api/v1/carriers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        if (xPBDeveloperPartnerID !== undefined) {
            requestContext.setHeaderParam("X-PB-Developer-Partner-ID", ObjectSerializer.serialize(xPBDeveloperPartnerID, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This operation fetches list of supported destination countries for a provided carrier and origin country. If query parameters are not provided, it will default to `USPS` as carrier and `US` as origin country.
     * Get Countries
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param carrier This indicates the carrierID, a unique identifier given to  an individual carrier.
     * @param originCountryCode This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates.
     */
    public async getCountries(xPBDeveloperPartnerID?: string, carrier?: string, originCountryCode?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/api/v1/countries';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (carrier !== undefined) {
            requestContext.setQueryParam("carrier", ObjectSerializer.serialize(carrier, "string", ""));
        }

        // Query Params
        if (originCountryCode !== undefined) {
            requestContext.setQueryParam("originCountryCode", ObjectSerializer.serialize(originCountryCode, "string", ""));
        }

        // Header Params
        if (xPBDeveloperPartnerID !== undefined) {
            requestContext.setHeaderParam("X-PB-Developer-Partner-ID", ObjectSerializer.serialize(xPBDeveloperPartnerID, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This operation fetches Parcel Types based on the provided carrier, origin county, and the destination country. If query parameters are not provided, this will default to `USPS` as carrier, `US` as both origin and destination country code.
     * Get Parcel Types
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param carrier This indicates the CarrierID, a unique identifier given to an individual carrier. It can be referred from the response of Get Carriers API
     * @param originCountryCode This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates.
     * @param destinationCountryCode This indicates the Destination Country for the Shipment. The two-character ISO country code for the country where the shipment is to be delivered.
     */
    public async getParcelTypes(xPBDeveloperPartnerID?: string, carrier?: string, originCountryCode?: string, destinationCountryCode?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/api/v1/parcelTypes';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (carrier !== undefined) {
            requestContext.setQueryParam("carrier", ObjectSerializer.serialize(carrier, "string", ""));
        }

        // Query Params
        if (originCountryCode !== undefined) {
            requestContext.setQueryParam("originCountryCode", ObjectSerializer.serialize(originCountryCode, "string", ""));
        }

        // Query Params
        if (destinationCountryCode !== undefined) {
            requestContext.setQueryParam("destinationCountryCode", ObjectSerializer.serialize(destinationCountryCode, "string", ""));
        }

        // Header Params
        if (xPBDeveloperPartnerID !== undefined) {
            requestContext.setHeaderParam("X-PB-Developer-Partner-ID", ObjectSerializer.serialize(xPBDeveloperPartnerID, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This API contains 2 operations, rate shop and single rate. Rate shop will fetch rates for all carrier services based on the given addresses (From and To), weight, and dimension for given parcelType. If parcelType is not provided, it will default to `PKG`. Single rate will get rate for specific service and special service (if requested) based on the given addresses (From and To), weight, and dimension, parcelType and serviceId with or without specialServices. Single rate will be used mainly to a rate a shipment before creating shipment.
     * Rate Shop and Get Single Rate
     * @param getRatesRequest 
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param compactResponse This header defines if the response required is detailed or compact. When value is set to true, it will only return rates object in response.
     */
    public async getRates(getRatesRequest: GetRatesRequest, xPBDeveloperPartnerID?: string, compactResponse?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'getRatesRequest' is not null or undefined
        if (getRatesRequest === null || getRatesRequest === undefined) {
            throw new RequiredError("ShipmentApi", "getRates", "getRatesRequest");
        }




        // Path Params
        const localVarPath = '/api/v1/rates';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        if (xPBDeveloperPartnerID !== undefined) {
            requestContext.setHeaderParam("X-PB-Developer-Partner-ID", ObjectSerializer.serialize(xPBDeveloperPartnerID, "string", ""));
        }

        // Header Params
        if (compactResponse !== undefined) {
            requestContext.setHeaderParam("compactResponse", ObjectSerializer.serialize(compactResponse, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(getRatesRequest, "GetRatesRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This operation fetches a list of supported services for a carrier with respect to specific origin and destination country. If query parameters are not provided, this will default to `USPS` as carrier, `US` as both origin and destination country code.
     * Get Services
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param carrier This indicates the CarrierID, a unique identifier provided to an individual carrier. It can be referred from the response of Get Carriers API
     * @param originCountryCode This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates.
     * @param destinationCountryCode This indicates the Destination Country for the Shipment. The two-character ISO country code for the country where the shipment is to be delivered.
     */
    public async getServices(xPBDeveloperPartnerID?: string, carrier?: string, originCountryCode?: string, destinationCountryCode?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/api/v1/services';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (carrier !== undefined) {
            requestContext.setQueryParam("carrier", ObjectSerializer.serialize(carrier, "string", ""));
        }

        // Query Params
        if (originCountryCode !== undefined) {
            requestContext.setQueryParam("originCountryCode", ObjectSerializer.serialize(originCountryCode, "string", ""));
        }

        // Query Params
        if (destinationCountryCode !== undefined) {
            requestContext.setQueryParam("destinationCountryCode", ObjectSerializer.serialize(destinationCountryCode, "string", ""));
        }

        // Header Params
        if (xPBDeveloperPartnerID !== undefined) {
            requestContext.setHeaderParam("X-PB-Developer-Partner-ID", ObjectSerializer.serialize(xPBDeveloperPartnerID, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This operation provides a downloadable link which consists of a signature image for specific ERR (Electronic Return Receipt) shipment, and this is known as POD. <br /> Proof of Delivery (POD) is a document or file that shows an evidence of shipment delivery. This file contains the digital copy of recipient\'s signature, i.e., the signature image, in the form of downloadable link or URL.
     * Signature Image ERR
     * @param shipmentId Shipment ID is a unique identifier for an individual shipment.
     * @param xPBDeveloperPartnerID The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     */
    public async getSignatureImageERR(shipmentId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipmentId' is not null or undefined
        if (shipmentId === null || shipmentId === undefined) {
            throw new RequiredError("ShipmentApi", "getSignatureImageERR", "shipmentId");
        }



        // Path Params
        const localVarPath = '/api/v1/err/shipments/{shipmentId}/signaturefile'
            .replace('{' + 'shipmentId' + '}', encodeURIComponent(String(shipmentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        if (xPBDeveloperPartnerID !== undefined) {
            requestContext.setHeaderParam("X-PB-Developer-Partner-ID", ObjectSerializer.serialize(xPBDeveloperPartnerID, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This operation fetches Special Services for a given carrier, service, origin country, and the destination country. If query parameters are not provided, it will default to `USPS` as carrier,`US` as both origin and destination country and would show for all service and parcel types
     * Get Special Services
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param service This indicates the serviceId. It can be referred from response of &#x60;Get Services&#x60; API
     * @param parcel This indicates the parcel Id, a unique identifier named to individual package. It can be referred from response of &#x60;Get Parcel Types&#x60; API
     * @param carrier This indicates the CarrierID, a unique identifier given to  an individual carrier. It can be referred from response of &#x60;Get Carriers&#x60; API
     * @param originCountryCode This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates.
     * @param destinationCountryCode This indicates the Destination Country for the Shipment. The two-character ISO country code for the country where the shipment is to be delivered.
     */
    public async getSpecialServices(xPBDeveloperPartnerID?: string, service?: string, parcel?: string, carrier?: string, originCountryCode?: string, destinationCountryCode?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/api/v1/specialServices';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (service !== undefined) {
            requestContext.setQueryParam("service", ObjectSerializer.serialize(service, "string", ""));
        }

        // Query Params
        if (parcel !== undefined) {
            requestContext.setQueryParam("parcel", ObjectSerializer.serialize(parcel, "string", ""));
        }

        // Query Params
        if (carrier !== undefined) {
            requestContext.setQueryParam("carrier", ObjectSerializer.serialize(carrier, "string", ""));
        }

        // Query Params
        if (originCountryCode !== undefined) {
            requestContext.setQueryParam("originCountryCode", ObjectSerializer.serialize(originCountryCode, "string", ""));
        }

        // Query Params
        if (destinationCountryCode !== undefined) {
            requestContext.setQueryParam("destinationCountryCode", ObjectSerializer.serialize(destinationCountryCode, "string", ""));
        }

        // Header Params
        if (xPBDeveloperPartnerID !== undefined) {
            requestContext.setHeaderParam("X-PB-Developer-Partner-ID", ObjectSerializer.serialize(xPBDeveloperPartnerID, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This operation reprints Shipment by the shipmentId. It retrieves an existing shipping label to reprint. The API sends the shipmentId returned by the original Created Shipment request. Use this only if the shipping label in the Create Shipment response was spoilt or lost.
     * Reprint Shipment
     * @param shipmentId This indicates the shipmentId, a unique identifier assigned to the Shipment.
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param compactResponse This header defines if the response required is detailed or compact. When value is set to true, it will only return label layout details and parcel tracking number object in response.
     */
    public async reprintShipmentById(shipmentId: string, xPBDeveloperPartnerID?: string, compactResponse?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipmentId' is not null or undefined
        if (shipmentId === null || shipmentId === undefined) {
            throw new RequiredError("ShipmentApi", "reprintShipmentById", "shipmentId");
        }




        // Path Params
        const localVarPath = '/api/v1/shipments/{shipmentId}/reprint'
            .replace('{' + 'shipmentId' + '}', encodeURIComponent(String(shipmentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        if (xPBDeveloperPartnerID !== undefined) {
            requestContext.setHeaderParam("X-PB-Developer-Partner-ID", ObjectSerializer.serialize(xPBDeveloperPartnerID, "string", ""));
        }

        // Header Params
        if (compactResponse !== undefined) {
            requestContext.setHeaderParam("compactResponse", ObjectSerializer.serialize(compactResponse, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This operation retrieves shipment details using shipmentId.
     * Get Shipment by Id
     * @param shipmentId This indicates the shipmentId, a unique identifier for an individual Shipment.
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public async shipmentById(shipmentId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipmentId' is not null or undefined
        if (shipmentId === null || shipmentId === undefined) {
            throw new RequiredError("ShipmentApi", "shipmentById", "shipmentId");
        }



        // Path Params
        const localVarPath = '/api/v1/shipments/{shipmentId}'
            .replace('{' + 'shipmentId' + '}', encodeURIComponent(String(shipmentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        if (xPBDeveloperPartnerID !== undefined) {
            requestContext.setHeaderParam("X-PB-Developer-Partner-ID", ObjectSerializer.serialize(xPBDeveloperPartnerID, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ShipmentApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelShipmentById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelShipmentByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CancelShipment >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CancelShipment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CancelShipment", ""
            ) as CancelShipment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Invalid request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(response.httpStatusCode, "The request could not be authorized.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundErrors", ""
            ) as NotFoundErrors;
            throw new ApiException<NotFoundErrors>(response.httpStatusCode, "The requested resource was not found.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request could not be completed due to an internal error.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CancelShipment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CancelShipment", ""
            ) as CancelShipment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelStampsERR
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelStampsERRWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CancelStampsResponseERR >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CancelStampsResponseERR = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CancelStampsResponseERR", ""
            ) as CancelStampsResponseERR;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Invalid request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(response.httpStatusCode, "The request could not be authorized.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request could not be completed due to an internal error.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CancelStampsResponseERR = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CancelStampsResponseERR", ""
            ) as CancelStampsResponseERR;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createReturnLabel
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createReturnLabelWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReturnLabelResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReturnLabelResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReturnLabelResponse", ""
            ) as ReturnLabelResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Invalid request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(response.httpStatusCode, "The request could not be authorized.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request could not be completed due to an internal error.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReturnLabelResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReturnLabelResponse", ""
            ) as ReturnLabelResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createShipment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createShipmentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateShipment200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateShipment200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateShipment200Response", ""
            ) as CreateShipment200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Invalid request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(response.httpStatusCode, "The request could not be authorized.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request could not be completed due to an internal error.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateShipment200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateShipment200Response", ""
            ) as CreateShipment200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to downloadBpodFiles
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async downloadBpodFilesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BPODDownloadResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BPODDownloadResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BPODDownloadResponse", ""
            ) as BPODDownloadResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Invalid request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(response.httpStatusCode, "The request could not be authorized.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request could not be completed due to an internal error.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BPODDownloadResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BPODDownloadResponse", ""
            ) as BPODDownloadResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllShipments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllShipmentsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetAllShipments >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetAllShipments = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAllShipments", ""
            ) as GetAllShipments;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Invalid request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(response.httpStatusCode, "The request could not be authorized.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request could not be completed due to an internal error.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetAllShipments = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAllShipments", ""
            ) as GetAllShipments;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCarrierAccounts
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCarrierAccountsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetCarrierAccounts200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCarrierAccounts200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCarrierAccounts200Response", ""
            ) as GetCarrierAccounts200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Invalid request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(response.httpStatusCode, "The request could not be authorized.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request could not be completed due to an internal error.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCarrierAccounts200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCarrierAccounts200Response", ""
            ) as GetCarrierAccounts200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCarriers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCarriersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Carriers >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Carriers = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Carriers", ""
            ) as Carriers;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Invalid request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(response.httpStatusCode, "The request could not be authorized.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request could not be completed due to an internal error.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Carriers = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Carriers", ""
            ) as Carriers;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCountries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCountriesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<CountriesInner> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<CountriesInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CountriesInner>", ""
            ) as Array<CountriesInner>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Invalid request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(response.httpStatusCode, "The request could not be authorized.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request could not be completed due to an internal error.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<CountriesInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CountriesInner>", ""
            ) as Array<CountriesInner>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getParcelTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getParcelTypesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<ParcelTypesInner> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ParcelTypesInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ParcelTypesInner>", ""
            ) as Array<ParcelTypesInner>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Invalid request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(response.httpStatusCode, "The request could not be authorized.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request could not be completed due to an internal error.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ParcelTypesInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ParcelTypesInner>", ""
            ) as Array<ParcelTypesInner>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRates
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRatesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetRates200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetRates200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetRates200Response", ""
            ) as GetRates200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Invalid request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(response.httpStatusCode, "The request could not be authorized.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request could not be completed due to an internal error.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetRates200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetRates200Response", ""
            ) as GetRates200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getServices
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getServicesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<ServicesInner> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ServicesInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ServicesInner>", ""
            ) as Array<ServicesInner>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Invalid request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(response.httpStatusCode, "The request could not be authorized.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request could not be completed due to an internal error.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ServicesInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ServicesInner>", ""
            ) as Array<ServicesInner>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSignatureImageERR
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSignatureImageERRWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SignatureFileResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SignatureFileResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SignatureFileResponse", ""
            ) as SignatureFileResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Invalid request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(response.httpStatusCode, "The request could not be authorized.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request could not be completed due to an internal error.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SignatureFileResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SignatureFileResponse", ""
            ) as SignatureFileResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSpecialServices
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSpecialServicesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SpecialServices >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SpecialServices = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SpecialServices", ""
            ) as SpecialServices;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Invalid request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(response.httpStatusCode, "The request could not be authorized.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request could not be completed due to an internal error.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SpecialServices = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SpecialServices", ""
            ) as SpecialServices;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to reprintShipmentById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async reprintShipmentByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReprintShipment >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReprintShipment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReprintShipment", ""
            ) as ReprintShipment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Invalid request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(response.httpStatusCode, "The request could not be authorized.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundErrors", ""
            ) as NotFoundErrors;
            throw new ApiException<NotFoundErrors>(response.httpStatusCode, "The requested resource was not found.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request could not be completed due to an internal error.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReprintShipment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReprintShipment", ""
            ) as ReprintShipment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to shipmentById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async shipmentByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetSingleShipment >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetSingleShipment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetSingleShipment", ""
            ) as GetSingleShipment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Invalid request.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(response.httpStatusCode, "The request could not be authorized.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NotFoundErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NotFoundErrors", ""
            ) as NotFoundErrors;
            throw new ApiException<NotFoundErrors>(response.httpStatusCode, "The requested resource was not found.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The request could not be completed due to an internal error.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetSingleShipment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetSingleShipment", ""
            ) as GetSingleShipment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
