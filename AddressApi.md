# shipping.AddressApi

All URIs are relative to *https://api-sandbox.sendpro360.pitneybowes.com/shipping*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addressSuggest**](AddressApi.md#addressSuggest) | **POST** /api/v1/address/suggest | Address Suggest
[**addressValidate**](AddressApi.md#addressValidate) | **POST** /api/v1/address/verify | Address Validate


# **addressSuggest**
> AddressSuggestResponse addressSuggest(addressSuggestRequest)

This operation displays a valid address to match the entered address, only if the address does not seem valid to the system address map. User can select the suggested address or edit the entered address to make it valid.

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
const apiInstance = new shipping.AddressApi(configuration);

let body:shipping.AddressApiAddressSuggestRequest = {
  // AddressSuggestRequest
  addressSuggestRequest: {
    address: {
      addressLine1: "27 Watervw Dr",
      addressLine2: "",
      addressLine3: "",
      cityTown: "Shelton",
      countryCode: "US",
      name: "John Smith",
      postalCode: "06484",
      stateProvince: "CT",
    },
  },
};

apiInstance.addressSuggest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressSuggestRequest** | **AddressSuggestRequest**|  |


### Return type

**AddressSuggestResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The address is suggested to use. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addressValidate**
> AddressValidateResponse addressValidate(addressValidateRequest)

This operation validates address. This improves postal addresses within the country (e.g., United States) to help ensure that parcels are rated accurately and shipments arrive at the final destination on time.<br> The verify address operation sends an address to be verified. The response indicates whether the address is valid.

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
const apiInstance = new shipping.AddressApi(configuration);

let body:shipping.AddressApiAddressValidateRequest = {
  // AddressValidateRequest
  addressValidateRequest: {
    addressLine1: "27 Watervw Dr",
    addressLine2: "near abc street",
    addressLine3: "near xyz street",
    cityTown: "Shelton",
    countryCode: "US",
    name: "John Smith",
    postalCode: "06484",
    stateProvince: "CT",
  },
  // boolean | If true, then only City, State, and PostalCode (zip) are validated. This option is specific for US domestic addresses only. (optional)
  minimalAddressValidation: true,
};

apiInstance.addressValidate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressValidateRequest** | **AddressValidateRequest**|  |
 **minimalAddressValidation** | [**boolean**] | If true, then only City, State, and PostalCode (zip) are validated. This option is specific for US domestic addresses only. | (optional) defaults to undefined


### Return type

**AddressValidateResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The address has been verified. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


