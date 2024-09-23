// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BulkShipmentResponse } from '../models/BulkShipmentResponse';
import { BulkShipmentResponseERR } from '../models/BulkShipmentResponseERR';
import { CreateBatchRequest } from '../models/CreateBatchRequest';
import { CreateBatchRequestERR } from '../models/CreateBatchRequestERR';
import { CreateBulkShipmentsAPIERRRequest } from '../models/CreateBulkShipmentsAPIERRRequest';
import { CreateBulkShipmentsAPIRequest } from '../models/CreateBulkShipmentsAPIRequest';
import { Errors } from '../models/Errors';
import { GetShipmentsForBatch } from '../models/GetShipmentsForBatch';
import { GetStatusDetailedResponse } from '../models/GetStatusDetailedResponse';
import { ModelError } from '../models/ModelError';
import { NotFoundErrors } from '../models/NotFoundErrors';
import { ProcessShipmentResponse } from '../models/ProcessShipmentResponse';
import { ShipmentBatch } from '../models/ShipmentBatch';
import { ShipmentBatchResponseERR } from '../models/ShipmentBatchResponseERR';
import { VoidBatchRequest } from '../models/VoidBatchRequest';
import { VoidBatchResponse } from '../models/VoidBatchResponse';

/**
 * no description
 */
export class BatchApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This operation imports the .CSV file, which includes all the required fields to create shipments in bulk. The payload contains information about the shipments you want to import, such as `carrier account`, `label layout`, `service`, and any `special services` required for the shipments. After batch is submitted, user needs to upload csv file of shipment transactions to the uploadURL returned in response.
     * Bulk Import Shipments
     * @param body  This is the Request body to bulk import shipments.
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public async bulkImportAPI(body: CreateBatchRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("BatchApi", "bulkImportAPI", "body");
        }



        // Path Params
        const localVarPath = '/api/v1/shipments/importUrl';

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
            ObjectSerializer.serialize(body, "CreateBatchRequest", ""),
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
     * This operation imports the .CSV file which includes fields required for creating ERR (Electronic Return Receipt) Bulk Shipments.    The payload, which is used for shipment transactions, contains the following essential information in .CSV file:   - Carrier Account   - Output format: Shipping Label and Coversheet    - Services, and   - Special Services     The above-mentioned information are stored in AWS-S3 which in turn provides URL to users. When Batch is submitted, S3 returned URL along with .CSV file are uploaded, which generates BatchID.    The same BatchID is used to track the status of BulkImport. 
     * Bulk Import Shipments ERR
     * @param body  This is the request body to import ERR Bulk shipments.
     * @param xPBDeveloperPartnerID The PB-Developer-Partner-ID is assigned by PB to uniquely identify a developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     */
    public async bulkImportAPIERR(body: CreateBatchRequestERR, xPBDeveloperPartnerID?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("BatchApi", "bulkImportAPIERR", "body");
        }



        // Path Params
        const localVarPath = '/api/v1/err/shipments/importUrl';

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
            ObjectSerializer.serialize(body, "CreateBatchRequestERR", ""),
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
     * This operation creates a batch of bulk (larger quantities) shipments for single or multiple recipients. The shipments can be addressed to a single or multiple recipients with different combination of carrier, service special services and parcel type. `carrierAccountId`, `parcelType`, `serviceId` and `specialServices` are used as default when user do not wish to provide at shipment level. If user choose to provide these at Shipment level then it overrides the values provided at root level. At shipment level either you can wish to provide all of `carrierAccountId`, `parcelType`, `serviceId` and `specialServices` or not provide all of them if wants to use default ones from root level. If user do not provide any one out of `carrierAccountId`, `parcelType` and `serviceId` at shipment level it would result in validation error
     * Create Bulk Shipments
     * @param body This is the Request body to create bulk shipments.
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public async createBulkShipmentsAPI(body: CreateBulkShipmentsAPIRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("BatchApi", "createBulkShipmentsAPI", "body");
        }



        // Path Params
        const localVarPath = '/api/v1/bulkShipments';

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
            ObjectSerializer.serialize(body, "CreateBulkShipmentsAPIRequest", ""),
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
     * ERR (Electronic Return Receipt) is an official United States Postal Service® (USPS) document designed to be equivalent to the hardcopy \'green card\' Return Receipt. <br />    It provides the following information:   - Name of the Recipient     - Time when article is delivered   - Signature (image) of the Recipient     - Address where the item is delivered, and    - Date when the article gets delivered.      ERR is combined with certain classes and categories of mails, which are as follow:   - First-Class Mail®    - Priority Mail®     ERR Batch supports two types of Shipment Document format:    - Shipping Label    - Coversheet       This API \"Create Bulk Shipments with ERR\" operation requires the following information:   - Recipient (Single or Multiple)   - Carrier - USPS   - Service   - Parcel Type, and   - Special Service.    The ERR API works at two levels: Shipment level and Root level. Root level is marked as Default, where multiple shipments are processed and entities are common for all shipments. While at Shipment level, entities might differ. <br />   User can either define values for *CarrierAccountID*, *ParcelType*, *ServiceID*, and *SpecialService* respectively at the Root level for all shipments, or mention the values at Shipment level, i.e., for individual shipment(s).     If user does not provide values for the above-mentioned fields combinedly at Shipment level, then the default values for these fields provided at Root level will be considered. While, if user provides these values combinedly at Shipment Level for individual shipment(s), it will override the values defined at Root level. <br />   <br />   *Condition: The fields *CarrierAccountID*, *ParcelType*, *ServiceID* are treated as a combination, and values against each field must be provided if user selects Shipment level. In case any of these field(s) out of the mentioned combination is/are missing, it will return validation error.*    
     * Create Bulk Shipments ERR
     * @param body This is the request body to create Bulk Shipment for ERR.
     * @param xPBDeveloperPartnerID The Developer-Partner-ID is assigned by PB to uniquely identify a developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     */
    public async createBulkShipmentsAPIERR(body: CreateBulkShipmentsAPIERRRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("BatchApi", "createBulkShipmentsAPIERR", "body");
        }



        // Path Params
        const localVarPath = '/api/v1/err/bulkShipments';

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
            ObjectSerializer.serialize(body, "CreateBulkShipmentsAPIERRRequest", ""),
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
     * This operation retrieves the status of an existing Batch using *Batch ID*. Once the Job status is completed, the URL received from Response can be used to download the shipping label in PDF format.
     * Get Batch Status
     * @param batchId This is a system-generated unique identifier assigned to the Batch while it is processed.
     * @param xPBDeveloperPartnerID The Developer-Partner- ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     */
    public async getBatchStatusAPI(batchId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'batchId' is not null or undefined
        if (batchId === null || batchId === undefined) {
            throw new RequiredError("BatchApi", "getBatchStatusAPI", "batchId");
        }



        // Path Params
        const localVarPath = '/api/v1/shipments/batch/{batchId}/status'
            .replace('{' + 'batchId' + '}', encodeURIComponent(String(batchId)));

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
     * \"This API operation provides the shipment details for those shipments which are SUCCESS or FAILED during batch processing at the following levels: - addressValidation - rating - labelGeneration, and - voidLabel  Based on fields/data mentioned in Query Parameter, user can check shipment details for particular status at any levels. <br /> If no values are provided in the fields mentioned in Query Parameter, the default for each will be: - Page: 1  - Size: 20 - Status: SUCCESS/FAILED. 
     * Get Batch Shipment Details
     * @param batchId This is a system-generated unique identifier assigned to the Batch while it is processed
     * @param xPBDeveloperPartnerID The Developer-Partner- ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     * @param page It returns detailed information for shipments status and it can cover in one or more pages. The default value for page number is 1.
     * @param size Indicates the number of records per page. The default value for records is 20.
     * @param status The status of the shipment. Values can be Failed or Success.
     * @param step Indicates various stages of the batch processing.
     */
    public async getShipmentDetailsForBatchAPI(batchId: string, xPBDeveloperPartnerID?: string, page?: number, size?: number, status?: 'SUCCESS' | 'FAILED', step?: 'rating' | 'addressValidation' | 'labelGeneration' | 'voidLabel', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'batchId' is not null or undefined
        if (batchId === null || batchId === undefined) {
            throw new RequiredError("BatchApi", "getShipmentDetailsForBatchAPI", "batchId");
        }







        // Path Params
        const localVarPath = '/api/v1/shipments/batch/{batchId}/shipments'
            .replace('{' + 'batchId' + '}', encodeURIComponent(String(batchId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "'SUCCESS' | 'FAILED'", ""));
        }

        // Query Params
        if (step !== undefined) {
            requestContext.setQueryParam("step", ObjectSerializer.serialize(step, "'rating' | 'addressValidation' | 'labelGeneration' | 'voidLabel'", ""));
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
     * This operation processes (executes) the existing Batch. The payload for this endpoint needs only an empty JSON object and no additional data is required in the request body. The BatchID parameter located in the endpoint specifies which batch of shipments to process.
     * Process Batch
     * @param batchId This is a system-generated unique identifier assigned to the Batch while it is processed.
     * @param xPBDeveloperPartnerID The Developer-Partner-ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     */
    public async processBatchAPI(batchId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'batchId' is not null or undefined
        if (batchId === null || batchId === undefined) {
            throw new RequiredError("BatchApi", "processBatchAPI", "batchId");
        }



        // Path Params
        const localVarPath = '/api/v1/shipments/batch/{batchId}/process'
            .replace('{' + 'batchId' + '}', encodeURIComponent(String(batchId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * This operation cancels (voids) shipments which are created using the Batch API operation `createBulkShipments`. <br /> If user wants to cancel specific shipment(s) of the Batch, then s/he needs to pass the *Shipment ID* for the selected shipments in the `shipmentIDs` array. While if user wants to cancel all shipments of the Batch, then s/he does not need to provide any *Shipment ID* in the array under request body.
     * Void Batch Shipping Labels
     * @param batchId This is a system-generated unique identifier assigned to the Batch while it is processed.
     * @param xPBDeveloperPartnerID The Developer-Partner-ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     * @param voidBatchRequest  This is the request body for cancelling the selected shipments or entire Batch of shipments*.
     */
    public async voidShippingLabel(batchId: string, xPBDeveloperPartnerID?: string, voidBatchRequest?: VoidBatchRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'batchId' is not null or undefined
        if (batchId === null || batchId === undefined) {
            throw new RequiredError("BatchApi", "voidShippingLabel", "batchId");
        }




        // Path Params
        const localVarPath = '/api/v1/shipments/batch/{batchId}/void'
            .replace('{' + 'batchId' + '}', encodeURIComponent(String(batchId)));

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
            ObjectSerializer.serialize(voidBatchRequest, "VoidBatchRequest", ""),
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

}

export class BatchApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to bulkImportAPI
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async bulkImportAPIWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ShipmentBatch >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ShipmentBatch = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShipmentBatch", ""
            ) as ShipmentBatch;
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
            const body: ShipmentBatch = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShipmentBatch", ""
            ) as ShipmentBatch;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to bulkImportAPIERR
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async bulkImportAPIERRWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ShipmentBatchResponseERR >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ShipmentBatchResponseERR = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShipmentBatchResponseERR", ""
            ) as ShipmentBatchResponseERR;
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
            const body: ShipmentBatchResponseERR = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ShipmentBatchResponseERR", ""
            ) as ShipmentBatchResponseERR;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBulkShipmentsAPI
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBulkShipmentsAPIWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BulkShipmentResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BulkShipmentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkShipmentResponse", ""
            ) as BulkShipmentResponse;
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
            const body: BulkShipmentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkShipmentResponse", ""
            ) as BulkShipmentResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBulkShipmentsAPIERR
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBulkShipmentsAPIERRWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BulkShipmentResponseERR >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BulkShipmentResponseERR = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkShipmentResponseERR", ""
            ) as BulkShipmentResponseERR;
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
            const body: BulkShipmentResponseERR = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkShipmentResponseERR", ""
            ) as BulkShipmentResponseERR;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBatchStatusAPI
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBatchStatusAPIWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetStatusDetailedResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetStatusDetailedResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetStatusDetailedResponse", ""
            ) as GetStatusDetailedResponse;
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
            const body: GetStatusDetailedResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetStatusDetailedResponse", ""
            ) as GetStatusDetailedResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getShipmentDetailsForBatchAPI
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getShipmentDetailsForBatchAPIWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetShipmentsForBatch >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetShipmentsForBatch = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetShipmentsForBatch", ""
            ) as GetShipmentsForBatch;
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
            const body: GetShipmentsForBatch = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetShipmentsForBatch", ""
            ) as GetShipmentsForBatch;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to processBatchAPI
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async processBatchAPIWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProcessShipmentResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProcessShipmentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProcessShipmentResponse", ""
            ) as ProcessShipmentResponse;
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
            const body: ProcessShipmentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProcessShipmentResponse", ""
            ) as ProcessShipmentResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to voidShippingLabel
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async voidShippingLabelWithHttpInfo(response: ResponseContext): Promise<HttpInfo<VoidBatchResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VoidBatchResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VoidBatchResponse", ""
            ) as VoidBatchResponse;
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
            const body: VoidBatchResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VoidBatchResponse", ""
            ) as VoidBatchResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
