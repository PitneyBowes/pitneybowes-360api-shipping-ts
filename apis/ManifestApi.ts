// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CreateManifest200Response } from '../models/CreateManifest200Response';
import { CreateManifestRequest } from '../models/CreateManifestRequest';
import { Errors } from '../models/Errors';
import { ModelError } from '../models/ModelError';
import { NotFoundErrors } from '../models/NotFoundErrors';
import { ReprintManifestRequest } from '../models/ReprintManifestRequest';

/**
 * no description
 */
export class ManifestApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This operation creates an end-of-day manifest (a compilation of information about all shipments) that combines all shipments of the day into a single form or electronic record, depending on the carrier. For different carriers, the Manifest process varies, e.g., USPS use SCAN Form while FedEx has Manifest Form.
     * Create Manifest
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param compactResponse This header defines if the response required is detailed or compact. When value is set to true, it will only return manifest details in response. 
     * @param createManifestRequest 
     */
    public async createManifest(xPBDeveloperPartnerID?: string, compactResponse?: boolean, createManifestRequest?: CreateManifestRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/api/v1/manifests';

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
            ObjectSerializer.serialize(createManifestRequest, "CreateManifestRequest", ""),
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
     * This operation reprints a manifest for which the initial created manifest request was successful.
     * Reprint manifest
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param compactResponse This header defines if the response required is detailed or compact. When value is set to true, it will only return manifest details in response.
     * @param reprintManifestRequest 
     */
    public async reprintManifest(xPBDeveloperPartnerID?: string, compactResponse?: boolean, reprintManifestRequest?: ReprintManifestRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/api/v1/manifests/reprint';

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
            ObjectSerializer.serialize(reprintManifestRequest, "ReprintManifestRequest", ""),
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

export class ManifestApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createManifest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createManifestWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateManifest200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateManifest200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateManifest200Response", ""
            ) as CreateManifest200Response;
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
            const body: CreateManifest200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateManifest200Response", ""
            ) as CreateManifest200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to reprintManifest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async reprintManifestWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateManifest200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateManifest200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateManifest200Response", ""
            ) as CreateManifest200Response;
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
            const body: CreateManifest200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateManifest200Response", ""
            ) as CreateManifest200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
