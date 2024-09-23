// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Errors } from '../models/Errors';
import { GetAllPickups } from '../models/GetAllPickups';
import { GetPickupCancelledDocumentRequest } from '../models/GetPickupCancelledDocumentRequest';
import { GetPickupCancelledDocumentResponse } from '../models/GetPickupCancelledDocumentResponse';
import { GetPickupDocument } from '../models/GetPickupDocument';
import { ModelError } from '../models/ModelError';
import { SchedulePickup200Response } from '../models/SchedulePickup200Response';
import { SchedulePickupCancelRequest } from '../models/SchedulePickupCancelRequest';
import { SchedulePickupCancelResponse } from '../models/SchedulePickupCancelResponse';
import { SchedulePickupRequest } from '../models/SchedulePickupRequest';

/**
 * no description
 */
export class PickupsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This operation is used to Cancel the scheduled pickup.
     * Cancel Pickups
     * @param schedulePickupCancelRequest 
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public async cancelPickups(schedulePickupCancelRequest: SchedulePickupCancelRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'schedulePickupCancelRequest' is not null or undefined
        if (schedulePickupCancelRequest === null || schedulePickupCancelRequest === undefined) {
            throw new RequiredError("PickupsApi", "cancelPickups", "schedulePickupCancelRequest");
        }



        // Path Params
        const localVarPath = '/api/v1/pickups/cancel';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
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
            ObjectSerializer.serialize(schedulePickupCancelRequest, "SchedulePickupCancelRequest", ""),
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
     * This operation is used to get receipt for pickup cancellation. The receipt generated is in PDF format. <br> This operation can create receipt for multiple pickups which are cancelled.
     * Cancelled Pickup Document
     * @param type Indicates type of pickup. Supported value is &#x60;cancelled&#x60;.
     * @param getPickupCancelledDocumentRequest 
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public async cancelledPickupDocument(type: 'cancelled', getPickupCancelledDocumentRequest: GetPickupCancelledDocumentRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new RequiredError("PickupsApi", "cancelledPickupDocument", "type");
        }


        // verify required parameter 'getPickupCancelledDocumentRequest' is not null or undefined
        if (getPickupCancelledDocumentRequest === null || getPickupCancelledDocumentRequest === undefined) {
            throw new RequiredError("PickupsApi", "cancelledPickupDocument", "getPickupCancelledDocumentRequest");
        }



        // Path Params
        const localVarPath = '/api/v1/pickups/document';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "'cancelled'", ""));
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
            ObjectSerializer.serialize(getPickupCancelledDocumentRequest, "GetPickupCancelledDocumentRequest", ""),
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
     * This operation returns the scheduled pickup or cancellation receipt in PDF format.
     * Get Pickup Document
     * @param pickupId It specified the pickupId for which PDF receipt is needed.
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public async getPickupDocument(pickupId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pickupId' is not null or undefined
        if (pickupId === null || pickupId === undefined) {
            throw new RequiredError("PickupsApi", "getPickupDocument", "pickupId");
        }



        // Path Params
        const localVarPath = '/api/v1/pickups/{pickupId}/document'
            .replace('{' + 'pickupId' + '}', encodeURIComponent(String(pickupId)));

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
     * This operation is used to view the history of pickups scheduled or cancelled for your packages.
     * Get Pickups
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param carrier Indicates CarrierID. If not provided, it would show pickups for all the carriers.
     * @param startDate Indicates start date from when you want to see the history. If not provided, it will take today\&#39;s date.
     * @param endDate Indicates end date till you want to see the pickups history. If not provide, it will take today\&#39;s date.
     * @param status Indicates status of the pickup(schedule or cancel). If not provided, it will show the response for both status.
     * @param page Indicates page number, if not provided page would be 1.
     * @param size Indicates size of records, if not provided size would be 20
     */
    public async getPickups(xPBDeveloperPartnerID?: string, carrier?: string, startDate?: string, endDate?: string, status?: 'scheduled' | 'cancelled', page?: number, size?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;








        // Path Params
        const localVarPath = '/api/v1/pickups';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (carrier !== undefined) {
            requestContext.setQueryParam("carrier", ObjectSerializer.serialize(carrier, "string", ""));
        }

        // Query Params
        if (startDate !== undefined) {
            requestContext.setQueryParam("startDate", ObjectSerializer.serialize(startDate, "string", ""));
        }

        // Query Params
        if (endDate !== undefined) {
            requestContext.setQueryParam("endDate", ObjectSerializer.serialize(endDate, "string", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "'scheduled' | 'cancelled'", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", ""));
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
     * This operation allows to schedule Pickups with USPS, UPS, FedEx and DHLExpress for eligible shipments. <br> Below are four possible combinations for scheduling pickup <br>  <br> 1. When request does not specify `pickupSummary` and `shipmentIds`- The system would consider all eligible shipments created in a current day. <br> 2. When request specifies only `shipmentIds`- Pickup will be created for the shipmentIds mentioned <br> 3. When request specifies only `pickupSummary`- Pickup will be created for the pickup details mentioned in the pickupSummary <br> 4. When request specifies both `pickupSummary` and `shipmentIds`- Pickup will be created including details mentioned in both objects.
     * Schedule Pickup
     * @param schedulePickupRequest 
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public async schedulePickup(schedulePickupRequest: SchedulePickupRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'schedulePickupRequest' is not null or undefined
        if (schedulePickupRequest === null || schedulePickupRequest === undefined) {
            throw new RequiredError("PickupsApi", "schedulePickup", "schedulePickupRequest");
        }



        // Path Params
        const localVarPath = '/api/v1/pickups';

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
            ObjectSerializer.serialize(schedulePickupRequest, "SchedulePickupRequest", ""),
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

export class PickupsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelPickups
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelPickupsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SchedulePickupCancelResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SchedulePickupCancelResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SchedulePickupCancelResponse", ""
            ) as SchedulePickupCancelResponse;
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
            const body: SchedulePickupCancelResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SchedulePickupCancelResponse", ""
            ) as SchedulePickupCancelResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelledPickupDocument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelledPickupDocumentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetPickupCancelledDocumentResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetPickupCancelledDocumentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPickupCancelledDocumentResponse", ""
            ) as GetPickupCancelledDocumentResponse;
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
            const body: GetPickupCancelledDocumentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPickupCancelledDocumentResponse", ""
            ) as GetPickupCancelledDocumentResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPickupDocument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPickupDocumentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetPickupDocument >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetPickupDocument = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPickupDocument", ""
            ) as GetPickupDocument;
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
            const body: GetPickupDocument = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPickupDocument", ""
            ) as GetPickupDocument;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPickups
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPickupsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetAllPickups >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetAllPickups = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAllPickups", ""
            ) as GetAllPickups;
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
            const body: GetAllPickups = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAllPickups", ""
            ) as GetAllPickups;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to schedulePickup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async schedulePickupWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SchedulePickup200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SchedulePickup200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SchedulePickup200Response", ""
            ) as SchedulePickup200Response;
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
            const body: SchedulePickup200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SchedulePickup200Response", ""
            ) as SchedulePickup200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
