# shipping.MultipieceApi

All URIs are relative to *https://api-sandbox.sendpro360.pitneybowes.com/shipping*

Method | HTTP request | Description
------------- | ------------- | -------------
[**multipieceRates**](MultipieceApi.md#multipieceRates) | **POST** /api/v1/multipiece/rates | Multipiece Rateshop and Rates
[**multipieceShipment**](MultipieceApi.md#multipieceShipment) | **POST** /api/v1/multipiece/shipments | Multipiece Shipment
[**multipieceShipmentCancel**](MultipieceApi.md#multipieceShipmentCancel) | **PUT** /api/v1/multipiece/shipments/{shipmentId}/cancel | Cancel Multipiece Shipment
[**multipieceShipmentReprint**](MultipieceApi.md#multipieceShipmentReprint) | **GET** /api/v1/multipiece/shipments/{shipmentId}/reprint | Reprint Multipiece Shipment


# **multipieceRates**
> MultipieceRates200Response multipieceRates(multipieceRatesRequest)

This API contains 2 operations, rate shop and single rate. Rate shop will fetch rates for all carrier services based on the given addresses (From and To), weight, and dimension for given parcelType in multiPieceParcels object. Single rate will get rate for specific service and special service (if requested) based on the given addresses (From and To), weight, and dimension, parcelType and serviceId with or without specialServices. Single rate will be used mainly to a rate a shipment before creating shipment.  <br> For UPS- multipiece shipment with Envelopes (having parcel Type as LTR) is not supported.  <br> For FEDEX Multipiece, all parcels must be of same packaging type while creating multipiece shipment

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
const apiInstance = new shipping.MultipieceApi(configuration);

let body:shipping.MultipieceApiMultipieceRatesRequest = {
  // MultipieceRatesRequest
  multipieceRatesRequest: null,
  // string | This is the Develover Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
};

apiInstance.multipieceRates(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multipieceRatesRequest** | **MultipieceRatesRequest**|  |
 **xPBDeveloperPartnerID** | [**string**] | This is the Develover Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined


### Return type

**MultipieceRates200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Multipiece Rates created successfully. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **multipieceShipment**
> MultipieceShipment200Response multipieceShipment(multipieceShipmentRequest)

This operation is used to create Multipiece Shipments. UPS, FedEx and DHL Express are supported for Multipiece Shipments.  <br> For UPS- multipiece shipment with Envelopes (having parcel Type as LTR) is not supported.  <br> For FEDEX Multipiece, all parcels must be of same packaging type while creating multipiece shipment

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
const apiInstance = new shipping.MultipieceApi(configuration);

let body:shipping.MultipieceApiMultipieceShipmentRequest = {
  // MultipieceShipmentRequest
  multipieceShipmentRequest: null,
  // string | This is the Develover Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
};

apiInstance.multipieceShipment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multipieceShipmentRequest** | **MultipieceShipmentRequest**|  |
 **xPBDeveloperPartnerID** | [**string**] | This is the Develover Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined


### Return type

**MultipieceShipment200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Multipiece Shipment created successfully. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **multipieceShipmentCancel**
> CancelShipment multipieceShipmentCancel()

This operation is used to cancel the multipiece label. It takes the shipmentId of the multipiece shipment done.

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
const apiInstance = new shipping.MultipieceApi(configuration);

let body:shipping.MultipieceApiMultipieceShipmentCancelRequest = {
  // string | It specifies the shipmentId of onward shipment against which return label has to be created.
  shipmentId: "shipmentId_example",
  // string | This is the Develover Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
};

apiInstance.multipieceShipmentCancel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | [**string**] | It specifies the shipmentId of onward shipment against which return label has to be created. | defaults to undefined
 **xPBDeveloperPartnerID** | [**string**] | This is the Develover Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined


### Return type

**CancelShipment**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Multipiece Shipment created successfully. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **multipieceShipmentReprint**
> MultipieceDomesticShipmentResponse multipieceShipmentReprint()

This operation is used to reprint the multipiece label. It takes the shipmentId of the multipiece shipment done.

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
const apiInstance = new shipping.MultipieceApi(configuration);

let body:shipping.MultipieceApiMultipieceShipmentReprintRequest = {
  // string | It specifies the shipmentId of onward shipment against which return label has to be created.
  shipmentId: "shipmentId_example",
  // string | This is the Develover Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
};

apiInstance.multipieceShipmentReprint(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | [**string**] | It specifies the shipmentId of onward shipment against which return label has to be created. | defaults to undefined
 **xPBDeveloperPartnerID** | [**string**] | This is the Develover Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined


### Return type

**MultipieceDomesticShipmentResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Multipiece Shipment created successfully. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


