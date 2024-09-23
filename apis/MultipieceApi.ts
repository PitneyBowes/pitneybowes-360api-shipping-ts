// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CancelShipment } from '../models/CancelShipment';
import { Errors } from '../models/Errors';
import { ModelError } from '../models/ModelError';
import { MultipieceDomesticShipmentResponse } from '../models/MultipieceDomesticShipmentResponse';
import { MultipieceRates200Response } from '../models/MultipieceRates200Response';
import { MultipieceRatesRequest } from '../models/MultipieceRatesRequest';
import { MultipieceShipment200Response } from '../models/MultipieceShipment200Response';
import { MultipieceShipmentRequest } from '../models/MultipieceShipmentRequest';

/**
 * no description
 */
export class MultipieceApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This API contains 2 operations, rate shop and single rate. Rate shop will fetch rates for all carrier services based on the given addresses (From and To), weight, and dimension for given parcelType in multiPieceParcels object. Single rate will get rate for specific service and special service (if requested) based on the given addresses (From and To), weight, and dimension, parcelType and serviceId with or without specialServices. Single rate will be used mainly to a rate a shipment before creating shipment.  <br> For UPS- multipiece shipment with Envelopes (having parcel Type as LTR) is not supported.  <br> For FEDEX Multipiece, all parcels must be of same packaging type while creating multipiece shipment
     * Multipiece Rateshop and Rates
     * @param multipieceRatesRequest 
     * @param xPBDeveloperPartnerID This is the Develover Partner ID. When the developer is the only partner, this field is not required.
     */
    public async multipieceRates(multipieceRatesRequest: MultipieceRatesRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'multipieceRatesRequest' is not null or undefined
        if (multipieceRatesRequest === null || multipieceRatesRequest === undefined) {
            throw new RequiredError("MultipieceApi", "multipieceRates", "multipieceRatesRequest");
        }



        // Path Params
        const localVarPath = '/api/v1/multipiece/rates';

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
            ObjectSerializer.serialize(multipieceRatesRequest, "MultipieceRatesRequest", ""),
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
     * This operation is used to create Multipiece Shipments. UPS, FedEx and DHL Express are supported for Multipiece Shipments.  <br> For UPS- multipiece shipment with Envelopes (having parcel Type as LTR) is not supported.  <br> For FEDEX Multipiece, all parcels must be of same packaging type while creating multipiece shipment
     * Multipiece Shipment
     * @param multipieceShipmentRequest 
     * @param xPBDeveloperPartnerID This is the Develover Partner ID. When the developer is the only partner, this field is not required.
     */
    public async multipieceShipment(multipieceShipmentRequest: MultipieceShipmentRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'multipieceShipmentRequest' is not null or undefined
        if (multipieceShipmentRequest === null || multipieceShipmentRequest === undefined) {
            throw new RequiredError("MultipieceApi", "multipieceShipment", "multipieceShipmentRequest");
        }



        // Path Params
        const localVarPath = '/api/v1/multipiece/shipments';

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
            ObjectSerializer.serialize(multipieceShipmentRequest, "MultipieceShipmentRequest", ""),
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
     * This operation is used to cancel the multipiece label. It takes the shipmentId of the multipiece shipment done.
     * Cancel Multipiece Shipment
     * @param shipmentId It specifies the shipmentId of onward shipment against which return label has to be created.
     * @param xPBDeveloperPartnerID This is the Develover Partner ID. When the developer is the only partner, this field is not required.
     */
    public async multipieceShipmentCancel(shipmentId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipmentId' is not null or undefined
        if (shipmentId === null || shipmentId === undefined) {
            throw new RequiredError("MultipieceApi", "multipieceShipmentCancel", "shipmentId");
        }



        // Path Params
        const localVarPath = '/api/v1/multipiece/shipments/{shipmentId}/cancel'
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
     * This operation is used to reprint the multipiece label. It takes the shipmentId of the multipiece shipment done.
     * Reprint Multipiece Shipment
     * @param shipmentId It specifies the shipmentId of onward shipment against which return label has to be created.
     * @param xPBDeveloperPartnerID This is the Develover Partner ID. When the developer is the only partner, this field is not required.
     */
    public async multipieceShipmentReprint(shipmentId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipmentId' is not null or undefined
        if (shipmentId === null || shipmentId === undefined) {
            throw new RequiredError("MultipieceApi", "multipieceShipmentReprint", "shipmentId");
        }



        // Path Params
        const localVarPath = '/api/v1/multipiece/shipments/{shipmentId}/reprint'
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

export class MultipieceApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to multipieceRates
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async multipieceRatesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MultipieceRates200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MultipieceRates200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MultipieceRates200Response", ""
            ) as MultipieceRates200Response;
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
            const body: MultipieceRates200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MultipieceRates200Response", ""
            ) as MultipieceRates200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to multipieceShipment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async multipieceShipmentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MultipieceShipment200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MultipieceShipment200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MultipieceShipment200Response", ""
            ) as MultipieceShipment200Response;
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
            const body: MultipieceShipment200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MultipieceShipment200Response", ""
            ) as MultipieceShipment200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to multipieceShipmentCancel
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async multipieceShipmentCancelWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CancelShipment >> {
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
     * @params response Response returned by the server for a request to multipieceShipmentReprint
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async multipieceShipmentReprintWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MultipieceDomesticShipmentResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MultipieceDomesticShipmentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MultipieceDomesticShipmentResponse", ""
            ) as MultipieceDomesticShipmentResponse;
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
            const body: MultipieceDomesticShipmentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MultipieceDomesticShipmentResponse", ""
            ) as MultipieceDomesticShipmentResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
