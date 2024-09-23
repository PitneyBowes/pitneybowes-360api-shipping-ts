# shipping.PickupsApi

All URIs are relative to *https://api-sandbox.sendpro360.pitneybowes.com/shipping*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelPickups**](PickupsApi.md#cancelPickups) | **PUT** /api/v1/pickups/cancel | Cancel Pickups
[**cancelledPickupDocument**](PickupsApi.md#cancelledPickupDocument) | **POST** /api/v1/pickups/document | Cancelled Pickup Document
[**getPickupDocument**](PickupsApi.md#getPickupDocument) | **GET** /api/v1/pickups/{pickupId}/document | Get Pickup Document
[**getPickups**](PickupsApi.md#getPickups) | **GET** /api/v1/pickups | Get Pickups
[**schedulePickup**](PickupsApi.md#schedulePickup) | **POST** /api/v1/pickups | Schedule Pickup


# **cancelPickups**
> SchedulePickupCancelResponse cancelPickups(schedulePickupCancelRequest)

This operation is used to Cancel the scheduled pickup.

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
const apiInstance = new shipping.PickupsApi(configuration);

let body:shipping.PickupsApiCancelPickupsRequest = {
  // SchedulePickupCancelRequest
  schedulePickupCancelRequest: {
    pickupIds: [
      "UPS10191697701340901",
    ],
    options: [
      {
        name: "REQUESTOR_NAME",
        value: "requestor name",
      },
    ],
  },
  // string | This is the Developer Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
};

apiInstance.cancelPickups(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schedulePickupCancelRequest** | **SchedulePickupCancelRequest**|  |
 **xPBDeveloperPartnerID** | [**string**] | This is the Developer Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined


### Return type

**SchedulePickupCancelResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pick up cancelled successfully. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cancelledPickupDocument**
> GetPickupCancelledDocumentResponse cancelledPickupDocument(getPickupCancelledDocumentRequest)

This operation is used to get receipt for pickup cancellation. The receipt generated is in PDF format. <br> This operation can create receipt for multiple pickups which are cancelled.

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
const apiInstance = new shipping.PickupsApi(configuration);

let body:shipping.PickupsApiCancelledPickupDocumentRequest = {
  // 'cancelled' | Indicates type of pickup. Supported value is `cancelled`.
  type: "cancelled",
  // GetPickupCancelledDocumentRequest
  getPickupCancelledDocumentRequest: {
    pickupIds: [
      "UPS10181697635567196",
    ],
  },
  // string | This is the Developer Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
};

apiInstance.cancelledPickupDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getPickupCancelledDocumentRequest** | **GetPickupCancelledDocumentRequest**|  |
 **type** | [**&#39;cancelled&#39;**]**Array<&#39;cancelled&#39;>** | Indicates type of pickup. Supported value is &#x60;cancelled&#x60;. | defaults to undefined
 **xPBDeveloperPartnerID** | [**string**] | This is the Developer Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined


### Return type

**GetPickupCancelledDocumentResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The pick up has been cancelled. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPickupDocument**
> GetPickupDocument getPickupDocument()

This operation returns the scheduled pickup or cancellation receipt in PDF format.

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
const apiInstance = new shipping.PickupsApi(configuration);

let body:shipping.PickupsApiGetPickupDocumentRequest = {
  // string | It specified the pickupId for which PDF receipt is needed.
  pickupId: "pickupId_example",
  // string | This is the Developer Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
};

apiInstance.getPickupDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pickupId** | [**string**] | It specified the pickupId for which PDF receipt is needed. | defaults to undefined
 **xPBDeveloperPartnerID** | [**string**] | This is the Developer Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined


### Return type

**GetPickupDocument**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pick up document have been fetched. |  * X-Pb-Transactionid - The X-PB-TransactionId is unique id for this request. <br>  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPickups**
> GetAllPickups getPickups()

This operation is used to view the history of pickups scheduled or cancelled for your packages.

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
const apiInstance = new shipping.PickupsApi(configuration);

let body:shipping.PickupsApiGetPickupsRequest = {
  // string | This is the Developer Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
  // string | Indicates CarrierID. If not provided, it would show pickups for all the carriers. (optional)
  carrier: "carrier_example",
  // string | Indicates start date from when you want to see the history. If not provided, it will take today\'s date. (optional)
  startDate: "startDate_example",
  // string | Indicates end date till you want to see the pickups history. If not provide, it will take today\'s date. (optional)
  endDate: "endDate_example",
  // 'scheduled' | 'cancelled' | Indicates status of the pickup(schedule or cancel). If not provided, it will show the response for both status. (optional)
  status: "scheduled",
  // number | Indicates page number, if not provided page would be 1. (optional)
  page: 3.14,
  // number | Indicates size of records, if not provided size would be 20 (optional)
  size: 3.14,
};

apiInstance.getPickups(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xPBDeveloperPartnerID** | [**string**] | This is the Developer Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined
 **carrier** | [**string**] | Indicates CarrierID. If not provided, it would show pickups for all the carriers. | (optional) defaults to undefined
 **startDate** | [**string**] | Indicates start date from when you want to see the history. If not provided, it will take today\&#39;s date. | (optional) defaults to undefined
 **endDate** | [**string**] | Indicates end date till you want to see the pickups history. If not provide, it will take today\&#39;s date. | (optional) defaults to undefined
 **status** | [**&#39;scheduled&#39; | &#39;cancelled&#39;**]**Array<&#39;scheduled&#39; &#124; &#39;cancelled&#39;>** | Indicates status of the pickup(schedule or cancel). If not provided, it will show the response for both status. | (optional) defaults to undefined
 **page** | [**number**] | Indicates page number, if not provided page would be 1. | (optional) defaults to undefined
 **size** | [**number**] | Indicates size of records, if not provided size would be 20 | (optional) defaults to undefined


### Return type

**GetAllPickups**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of pickups. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **schedulePickup**
> SchedulePickup200Response schedulePickup(schedulePickupRequest)

This operation allows to schedule Pickups with USPS, UPS, FedEx and DHLExpress for eligible shipments. <br> Below are four possible combinations for scheduling pickup <br>  <br> 1. When request does not specify `pickupSummary` and `shipmentIds`- The system would consider all eligible shipments created in a current day. <br> 2. When request specifies only `shipmentIds`- Pickup will be created for the shipmentIds mentioned <br> 3. When request specifies only `pickupSummary`- Pickup will be created for the pickup details mentioned in the pickupSummary <br> 4. When request specifies both `pickupSummary` and `shipmentIds`- Pickup will be created including details mentioned in both objects.

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
const apiInstance = new shipping.PickupsApi(configuration);

let body:shipping.PickupsApiSchedulePickupRequest = {
  // SchedulePickupRequest
  schedulePickupRequest: null,
  // string | This is the Developer Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
};

apiInstance.schedulePickup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schedulePickupRequest** | **SchedulePickupRequest**|  |
 **xPBDeveloperPartnerID** | [**string**] | This is the Developer Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined


### Return type

**SchedulePickup200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Pick up has been created successfully. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


