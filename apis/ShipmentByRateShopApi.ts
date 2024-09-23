// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CancelShipmentV2 } from '../models/CancelShipmentV2';
import { CreateShipmentV2Request } from '../models/CreateShipmentV2Request';
import { DomesticShipmentResponseV2 } from '../models/DomesticShipmentResponseV2';
import { Errors } from '../models/Errors';
import { ModelError } from '../models/ModelError';
import { NotFoundErrors } from '../models/NotFoundErrors';
import { ReprintShipmentV2 } from '../models/ReprintShipmentV2';
import { ShipmentCancelV2 } from '../models/ShipmentCancelV2';
import { ShipmentReprintV2 } from '../models/ShipmentReprintV2';

/**
 * no description
 */
export class ShipmentByRateShopApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * The operation cancel/void shipment.
     * Cancel Shipment
     * @param shipmentCancelV2 
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique Transaction ID provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public async cancelShipmentByIdV2(shipmentCancelV2: ShipmentCancelV2, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipmentCancelV2' is not null or undefined
        if (shipmentCancelV2 === null || shipmentCancelV2 === undefined) {
            throw new RequiredError("ShipmentByRateShopApi", "cancelShipmentByIdV2", "shipmentCancelV2");
        }





        // Path Params
        const localVarPath = '/api/v2/shipments/cancel';

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
            ObjectSerializer.serialize(shipmentCancelV2, "ShipmentCancelV2", ""),
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
     * The operation creates a new Shipment or generate a Shipment Label. - To create a domestic shipment, the operation requires   - Domestic addresses \'To\' and \'From\' locations respectively within the same country   - carrier services, and   - associated special services. - While for the International shipment, the operation requires   - International address(es) for delivery, that is \'To\' address must be the international country location(s) and not the same country mentioned in \'From\' address   - supported international carrier services   - associated special service(s), and    - customs information. 
     * Create Shipment
     * @param createShipmentV2Request 
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique Transaction ID provided by the partner, which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public async createShipmentV2(createShipmentV2Request: CreateShipmentV2Request, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createShipmentV2Request' is not null or undefined
        if (createShipmentV2Request === null || createShipmentV2Request === undefined) {
            throw new RequiredError("ShipmentByRateShopApi", "createShipmentV2", "createShipmentV2Request");
        }





        // Path Params
        const localVarPath = '/api/v2/shipments';

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
            ObjectSerializer.serialize(createShipmentV2Request, "CreateShipmentV2Request", ""),
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
     * The operation reprints Shipment by the shipmentId. It retrieves an existing shipping label to reprint. The API sends the shipmentID returned by the original created shipment request. Use this only if the shipping label in the Create Shipment response is missing or lost.
     * Reprint Shipment
     * @param shipmentReprintV2 
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public async reprintShipmentByIdV2(shipmentReprintV2: ShipmentReprintV2, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipmentReprintV2' is not null or undefined
        if (shipmentReprintV2 === null || shipmentReprintV2 === undefined) {
            throw new RequiredError("ShipmentByRateShopApi", "reprintShipmentByIdV2", "shipmentReprintV2");
        }





        // Path Params
        const localVarPath = '/api/v2/shipments/reprint';

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
            ObjectSerializer.serialize(shipmentReprintV2, "ShipmentReprintV2", ""),
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

export class ShipmentByRateShopApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelShipmentByIdV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelShipmentByIdV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<CancelShipmentV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CancelShipmentV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CancelShipmentV2", ""
            ) as CancelShipmentV2;
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
            const body: CancelShipmentV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CancelShipmentV2", ""
            ) as CancelShipmentV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createShipmentV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createShipmentV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<DomesticShipmentResponseV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DomesticShipmentResponseV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomesticShipmentResponseV2", ""
            ) as DomesticShipmentResponseV2;
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
            const body: DomesticShipmentResponseV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomesticShipmentResponseV2", ""
            ) as DomesticShipmentResponseV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to reprintShipmentByIdV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async reprintShipmentByIdV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReprintShipmentV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReprintShipmentV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReprintShipmentV2", ""
            ) as ReprintShipmentV2;
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
            const body: ReprintShipmentV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReprintShipmentV2", ""
            ) as ReprintShipmentV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
