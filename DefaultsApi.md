# shipping.DefaultsApi

All URIs are relative to *https://api-sandbox.sendpro360.pitneybowes.com/shipping*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDefaults**](DefaultsApi.md#createDefaults) | **POST** /api/v1/defaults | Create Defaults
[**deleteDefaultsById**](DefaultsApi.md#deleteDefaultsById) | **DELETE** /api/v1/defaults/{defaultID} | Delete Defaults by ID
[**getAllDefaults**](DefaultsApi.md#getAllDefaults) | **GET** /api/v1/defaults | Get All Defaults
[**getDefaultsById**](DefaultsApi.md#getDefaultsById) | **GET** /api/v1/defaults/{defaultID} | Get Defaults By ID
[**putDefaultsById**](DefaultsApi.md#putDefaultsById) | **PUT** /api/v1/defaults/{defaultID} | Update Defaults


# **createDefaults**
> CreateDefaultsResponse createDefaults(createDefaults)

While creating shipment, a few columns/ fields information are used mandatorily, and if the value for those columns are used repetitively, then it is always better to save last used values. And hence, this API has been introduced. Using this API, default values can be set up for frequently used columns/fields information like carrier, its linked services, and special services.  Setting up the defaults will save both time and efforts. 

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
const apiInstance = new shipping.DefaultsApi(configuration);

let body:shipping.DefaultsApiCreateDefaultsRequest = {
  // CreateDefaults
  createDefaults: {
    name: "FedEx-SAKS",
    defaultID: "0d4f3c51-059b-4c28-a83b-a8defa2962cc",
    sendingOptions: {
      carrier: "FedEx",
      service: "2DA",
      carrierAccounts: {
        key: "key_example",
        value: "value_example",
      },
      labelSize: "DOC_4X6",
      labelType: "SHIPPING_LABEL",
      labelFormat: "PDF",
      fromAddress: {
        name: "Paul Wright",
        addressLine1: "638 Manitoba Ave",
        cityTown: "Winnipeg",
        stateProvince: "MB",
        postalCode: "R2W 2H2",
        countryCode: "CA",
        company: "PB",
        phone: "203-555-1213",
        email: "john.publica@pb.com",
        residential: true,
      },
      parcel: {
        length: 2,
        width: 1,
        height: 1,
        dimUnit: "IN",
        weightUnit: "OZ",
        weight: 2,
        packageValue: 2,
      },
    },
  },
};

apiInstance.createDefaults(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDefaults** | **CreateDefaults**|  |


### Return type

**CreateDefaultsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Defaults (i.e., default values) have been created successfully. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteDefaultsById**
> void deleteDefaultsById()

This operation deletes the existing Defaults.

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
const apiInstance = new shipping.DefaultsApi(configuration);

let body:shipping.DefaultsApiDeleteDefaultsByIdRequest = {
  // string | This is unique identifier assigned to Defaults while its creation using CreateDefaults API.
  defaultID: "defaultID_example",
};

apiInstance.deleteDefaultsById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **defaultID** | [**string**] | This is unique identifier assigned to Defaults while its creation using CreateDefaults API. | defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Defaults (i.e., default values) have been deleted successfully. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllDefaults**
> AllDefaults getAllDefaults()

The operation fetches all created Defaults. If query parameters are not provided, it will consider default page as 1 and default size as 10.

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
const apiInstance = new shipping.DefaultsApi(configuration);

let body:shipping.DefaultsApiGetAllDefaultsRequest = {
  // string | The Developer Partner ID is assigned by PB to uniquely identify a Developer\'s strategic business partners. If the developer is the sole business partner, this field isn\'t required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
  // string | The page of the Defaults search result list. (optional)
  page: "page_example",
  // string | The size/count of the searched result list. (optional)
  size: "size_example",
};

apiInstance.getAllDefaults(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xPBDeveloperPartnerID** | [**string**] | The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required. | (optional) defaults to undefined
 **page** | [**string**] | The page of the Defaults search result list. | (optional) defaults to undefined
 **size** | [**string**] | The size/count of the searched result list. | (optional) defaults to undefined


### Return type

**AllDefaults**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of Defaults. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDefaultsById**
> DefaultResponse getDefaultsById()

This operation fetches the values set for the Defaults.

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
const apiInstance = new shipping.DefaultsApi(configuration);

let body:shipping.DefaultsApiGetDefaultsByIdRequest = {
  // string | This is unique identifier assigned to Defaults while its creation using CreateDefaults API.
  defaultID: "defaultID_example",
};

apiInstance.getDefaultsById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **defaultID** | [**string**] | This is unique identifier assigned to Defaults while its creation using CreateDefaults API. | defaults to undefined


### Return type

**DefaultResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Defaults values have been retrieved successfully. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **putDefaultsById**
> void putDefaultsById(createDefaults)

This operation updates the values set for Defaults.

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
const apiInstance = new shipping.DefaultsApi(configuration);

let body:shipping.DefaultsApiPutDefaultsByIdRequest = {
  // string | This is unique identifier assigned to Defaults while its creation using CreateDefaults API.
  defaultID: "defaultID_example",
  // CreateDefaults
  createDefaults: {
    name: "FedEx-SAKS",
    defaultID: "0d4f3c51-059b-4c28-a83b-a8defa2962cc",
    sendingOptions: {
      carrier: "FedEx",
      service: "2DA",
      carrierAccounts: {
        key: "key_example",
        value: "value_example",
      },
      labelSize: "DOC_4X6",
      labelType: "SHIPPING_LABEL",
      labelFormat: "PDF",
      fromAddress: {
        name: "Paul Wright",
        addressLine1: "638 Manitoba Ave",
        cityTown: "Winnipeg",
        stateProvince: "MB",
        postalCode: "R2W 2H2",
        countryCode: "CA",
        company: "PB",
        phone: "203-555-1213",
        email: "john.publica@pb.com",
        residential: true,
      },
      parcel: {
        length: 2,
        width: 1,
        height: 1,
        dimUnit: "IN",
        weightUnit: "OZ",
        weight: 2,
        packageValue: 2,
      },
    },
  },
};

apiInstance.putDefaultsById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDefaults** | **CreateDefaults**|  |
 **defaultID** | [**string**] | This is unique identifier assigned to Defaults while its creation using CreateDefaults API. | defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Defaults (i.e., default values) have been updated successfully. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


