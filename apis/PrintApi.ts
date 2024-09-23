// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { JobStatus } from '../models/JobStatus';
import { ModelError } from '../models/ModelError';
import { PrintDocumentRequest } from '../models/PrintDocumentRequest';
import { PrintDocumentResponse } from '../models/PrintDocumentResponse';
import { PrinterMappingGetResponse } from '../models/PrinterMappingGetResponse';
import { PrinterMappingRequest } from '../models/PrinterMappingRequest';
import { PrinterMappingResponse } from '../models/PrinterMappingResponse';

/**
 * no description
 */
export class PrintApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * delete printer mapping document
     * Delete Printer mapping
     * @param alias Refers to a printer connected (directly or via network) to a computer.
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public async deletePrinterMapping(alias: string, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'alias' is not null or undefined
        if (alias === null || alias === undefined) {
            throw new RequiredError("PrintApi", "deletePrinterMapping", "alias");
        }





        // Path Params
        const localVarPath = '/api/v1/printer/mapping';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (alias !== undefined) {
            requestContext.setQueryParam("alias", ObjectSerializer.serialize(alias, "string", ""));
        }

        // Header Params
        if (xPBDeveloperPartnerId !== undefined) {
            requestContext.setHeaderParam("X-PB-Developer-Partner-Id", ObjectSerializer.serialize(xPBDeveloperPartnerId, "string", ""));
        }

        // Header Params
        if (xPBLocationId !== undefined) {
            requestContext.setHeaderParam("X-PB-LocationId", ObjectSerializer.serialize(xPBLocationId, "string", ""));
        }

        // Header Params
        if (xPBTransactionId !== undefined) {
            requestContext.setHeaderParam("X-PB-TransactionId", ObjectSerializer.serialize(xPBTransactionId, "string", ""));
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
     * Get printer mapping document
     * Get Printer mapping
     * @param alias Refers to a printer connected (directly or via network) to a computer.
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public async getPrinterMapping(alias: string, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'alias' is not null or undefined
        if (alias === null || alias === undefined) {
            throw new RequiredError("PrintApi", "getPrinterMapping", "alias");
        }





        // Path Params
        const localVarPath = '/api/v1/printer/mapping';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (alias !== undefined) {
            requestContext.setQueryParam("alias", ObjectSerializer.serialize(alias, "string", ""));
        }

        // Header Params
        if (xPBDeveloperPartnerId !== undefined) {
            requestContext.setHeaderParam("X-PB-Developer-Partner-Id", ObjectSerializer.serialize(xPBDeveloperPartnerId, "string", ""));
        }

        // Header Params
        if (xPBLocationId !== undefined) {
            requestContext.setHeaderParam("X-PB-LocationId", ObjectSerializer.serialize(xPBLocationId, "string", ""));
        }

        // Header Params
        if (xPBTransactionId !== undefined) {
            requestContext.setHeaderParam("X-PB-TransactionId", ObjectSerializer.serialize(xPBTransactionId, "string", ""));
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
     * job status
     * Job status
     * @param jobId The jobId, a unique identifier assigned for the job.
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public async jobStatus(jobId: string, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'jobId' is not null or undefined
        if (jobId === null || jobId === undefined) {
            throw new RequiredError("PrintApi", "jobStatus", "jobId");
        }





        // Path Params
        const localVarPath = '/api/v1/jobs/{jobId}'
            .replace('{' + 'jobId' + '}', encodeURIComponent(String(jobId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        if (xPBDeveloperPartnerId !== undefined) {
            requestContext.setHeaderParam("X-PB-Developer-Partner-Id", ObjectSerializer.serialize(xPBDeveloperPartnerId, "string", ""));
        }

        // Header Params
        if (xPBLocationId !== undefined) {
            requestContext.setHeaderParam("X-PB-LocationId", ObjectSerializer.serialize(xPBLocationId, "string", ""));
        }

        // Header Params
        if (xPBTransactionId !== undefined) {
            requestContext.setHeaderParam("X-PB-TransactionId", ObjectSerializer.serialize(xPBTransactionId, "string", ""));
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
     * It contains information about a label or a document, e.g. a shipping label, a customs form, manifest report etc., that pertains to a shipment or manifest.
     * Print Document
     * @param printDocumentRequest 
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique Transaction ID provided by the partner, which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public async printDocument(printDocumentRequest: PrintDocumentRequest, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'printDocumentRequest' is not null or undefined
        if (printDocumentRequest === null || printDocumentRequest === undefined) {
            throw new RequiredError("PrintApi", "printDocument", "printDocumentRequest");
        }





        // Path Params
        const localVarPath = '/api/v1/document/print';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        if (xPBDeveloperPartnerId !== undefined) {
            requestContext.setHeaderParam("X-PB-Developer-Partner-Id", ObjectSerializer.serialize(xPBDeveloperPartnerId, "string", ""));
        }

        // Header Params
        if (xPBLocationId !== undefined) {
            requestContext.setHeaderParam("X-PB-LocationId", ObjectSerializer.serialize(xPBLocationId, "string", ""));
        }

        // Header Params
        if (xPBTransactionId !== undefined) {
            requestContext.setHeaderParam("X-PB-TransactionId", ObjectSerializer.serialize(xPBTransactionId, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(printDocumentRequest, "PrintDocumentRequest", ""),
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
     * printer mapping document
     * Printer mapping
     * @param printerMappingRequest 
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public async printerMapping(printerMappingRequest: PrinterMappingRequest, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'printerMappingRequest' is not null or undefined
        if (printerMappingRequest === null || printerMappingRequest === undefined) {
            throw new RequiredError("PrintApi", "printerMapping", "printerMappingRequest");
        }





        // Path Params
        const localVarPath = '/api/v1/printer/mapping';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        if (xPBDeveloperPartnerId !== undefined) {
            requestContext.setHeaderParam("X-PB-Developer-Partner-Id", ObjectSerializer.serialize(xPBDeveloperPartnerId, "string", ""));
        }

        // Header Params
        if (xPBLocationId !== undefined) {
            requestContext.setHeaderParam("X-PB-LocationId", ObjectSerializer.serialize(xPBLocationId, "string", ""));
        }

        // Header Params
        if (xPBTransactionId !== undefined) {
            requestContext.setHeaderParam("X-PB-TransactionId", ObjectSerializer.serialize(xPBTransactionId, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(printerMappingRequest, "PrinterMappingRequest", ""),
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

export class PrintApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePrinterMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deletePrinterMappingWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(response.httpStatusCode, "The request could not be authorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPrinterMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPrinterMappingWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PrinterMappingGetResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PrinterMappingGetResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PrinterMappingGetResponse", ""
            ) as PrinterMappingGetResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(response.httpStatusCode, "The request could not be authorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PrinterMappingGetResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PrinterMappingGetResponse", ""
            ) as PrinterMappingGetResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async jobStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<JobStatus >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JobStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobStatus", ""
            ) as JobStatus;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(response.httpStatusCode, "The request could not be authorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JobStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobStatus", ""
            ) as JobStatus;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to printDocument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async printDocumentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PrintDocumentResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PrintDocumentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PrintDocumentResponse", ""
            ) as PrintDocumentResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(response.httpStatusCode, "The request could not be authorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PrintDocumentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PrintDocumentResponse", ""
            ) as PrintDocumentResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to printerMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async printerMappingWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PrinterMappingResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: PrinterMappingResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PrinterMappingResponse", ""
            ) as PrinterMappingResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ModelError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelError", ""
            ) as ModelError;
            throw new ApiException<ModelError>(response.httpStatusCode, "The request could not be authorized.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PrinterMappingResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PrinterMappingResponse", ""
            ) as PrinterMappingResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
