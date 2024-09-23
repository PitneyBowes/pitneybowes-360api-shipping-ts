# shipping.ManifestApi

All URIs are relative to *https://api-sandbox.sendpro360.pitneybowes.com/shipping*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createManifest**](ManifestApi.md#createManifest) | **POST** /api/v1/manifests | Create Manifest
[**reprintManifest**](ManifestApi.md#reprintManifest) | **POST** /api/v1/manifests/reprint | Reprint manifest


# **createManifest**
> CreateManifest200Response createManifest()

This operation creates an end-of-day manifest (a compilation of information about all shipments) that combines all shipments of the day into a single form or electronic record, depending on the carrier. For different carriers, the Manifest process varies, e.g., USPS use SCAN Form while FedEx has Manifest Form.

### Example


```typescript
import * as shipping from '@pitneybowes/360api-shipping';

const resolveToken = async () => {
    const token = 'BEARER_TOKEN_STRING'
    return Promise.resolve(token)
}

const configuration = shipping.createConfiguration({
  baseServer: shipping.servers[0], // 0=sandbox (default), 1=production
  authMethods: {
    bearerAuth: {
      tokenProvider: {
        getToken: async () => await resolveToken(),
      },
    },
  },
});
const apiInstance = new shipping.ManifestApi(configuration);

let body:shipping.ManifestApiCreateManifestRequest = {
  // string | This is the Developer Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
  // boolean | This header defines if the response required is detailed or compact. When value is set to true, it will only return manifest details in response.  (optional)
  compactResponse: false,
  // CreateManifestRequest (optional)
  createManifestRequest: {
    carrierAccountId: "abcd12",
    fromAddress: {
      addressLine1: "27 Watervw Dr",
      addressLine2: "near abc street",
      addressLine3: "near xyz street",
      cityTown: "shelton",
      company: "",
      countryCode: "US",
      email: "",
      name: "",
      phone: "",
      postalCode: "06484",
      stateProvince: "CT",
    },
    submissionDate: "2023-05-25",
  },
};

apiInstance.createManifest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createManifestRequest** | **CreateManifestRequest**|  |
 **xPBDeveloperPartnerID** | [**string**] | This is the Developer Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined
 **compactResponse** | [**boolean**] | This header defines if the response required is detailed or compact. When value is set to true, it will only return manifest details in response.  | (optional) defaults to undefined


### Return type

**CreateManifest200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Manifest has been generated for the given carrier. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **reprintManifest**
> CreateManifest200Response reprintManifest()

This operation reprints a manifest for which the initial created manifest request was successful.

### Example


```typescript
import * as shipping from '@pitneybowes/360api-shipping';

const resolveToken = async () => {
    const token = 'BEARER_TOKEN_STRING'
    return Promise.resolve(token)
}

const configuration = shipping.createConfiguration({
  baseServer: shipping.servers[0], // 0=sandbox (default), 1=production
  authMethods: {
    bearerAuth: {
      tokenProvider: {
        getToken: async () => await resolveToken(),
      },
    },
  },
});
const apiInstance = new shipping.ManifestApi(configuration);

let body:shipping.ManifestApiReprintManifestRequest = {
  // string | This is the Developer Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
  // boolean | This header defines if the response required is detailed or compact. When value is set to true, it will only return manifest details in response. (optional)
  compactResponse: false,
  // ReprintManifestRequest (optional)
  reprintManifestRequest: {
    carrierAccountId: "JORx6bVG8mr",
    manifestID: "1234567890",
  },
};

apiInstance.reprintManifest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reprintManifestRequest** | **ReprintManifestRequest**|  |
 **xPBDeveloperPartnerID** | [**string**] | This is the Developer Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined
 **compactResponse** | [**boolean**] | This header defines if the response required is detailed or compact. When value is set to true, it will only return manifest details in response. | (optional) defaults to undefined


### Return type

**CreateManifest200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Manifest has been printed successfully. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**404** | The requested resource was not found. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


