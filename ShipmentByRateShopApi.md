# shipping.ShipmentByRateShopApi

All URIs are relative to *https://api-sandbox.sendpro360.pitneybowes.com/shipping*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelShipmentByIdV2**](ShipmentByRateShopApi.md#cancelShipmentByIdV2) | **POST** /api/v2/shipments/cancel | Cancel Shipment
[**createShipmentV2**](ShipmentByRateShopApi.md#createShipmentV2) | **POST** /api/v2/shipments | Create Shipment
[**reprintShipmentByIdV2**](ShipmentByRateShopApi.md#reprintShipmentByIdV2) | **POST** /api/v2/shipments/reprint | Reprint Shipment


# **cancelShipmentByIdV2**
> CancelShipmentV2 cancelShipmentByIdV2(shipmentCancelV2)

The operation cancel/void shipment.

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
const apiInstance = new shipping.ShipmentByRateShopApi(configuration);

let body:shipping.ShipmentByRateShopApiCancelShipmentByIdV2Request = {
  // ShipmentCancelV2
  shipmentCancelV2: {
    shipmentId: "PUROLATOR2200626353009030",
    parcelTrackingNumber: "1234sjhgf",
    references: {
      additionalReference1: "612987641",
      additionalReference2: "989",
    },
  },
  // string | The Developer Partner ID is assigned by PB to uniquely identify a Developer\'s strategic business partners. If the developer is the sole business partner, this field isn\'t required. (optional)
  xPBDeveloperPartnerId: "X-PB-Developer-Partner-Id_example",
  // string | This is the Location ID assigned as per the Developer\'s and Partner\'s parsed locations, to which all transactions will be billed. <br /> Partner\'s location will be used for billing if it is configured, however, in case Partner\'s location is not given, then the Developer\'s location will be taken. Developer\'s location will be the default value. <br /> Additionally, Developers and Partners can use carriers belong to this location only. (optional)
  xPBLocationId: "X-PB-LocationId_example",
  // string | A unique Transaction ID provided by the partner which is used to enable debugging and linking between the client\'s transaction and the system. (optional)
  xPBTransactionId: "X-PB-TransactionId_example",
};

apiInstance.cancelShipmentByIdV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentCancelV2** | **ShipmentCancelV2**|  |
 **xPBDeveloperPartnerId** | [**string**] | The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required. | (optional) defaults to undefined
 **xPBLocationId** | [**string**] | This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only. | (optional) defaults to undefined
 **xPBTransactionId** | [**string**] | A unique Transaction ID provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system. | (optional) defaults to undefined


### Return type

**CancelShipmentV2**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Shipment has been cancelled. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**404** | The requested resource was not found. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createShipmentV2**
> DomesticShipmentResponseV2 createShipmentV2(createShipmentV2Request)

The operation creates a new Shipment or generate a Shipment Label. - To create a domestic shipment, the operation requires   - Domestic addresses \'To\' and \'From\' locations respectively within the same country   - carrier services, and   - associated special services. - While for the International shipment, the operation requires   - International address(es) for delivery, that is \'To\' address must be the international country location(s) and not the same country mentioned in \'From\' address   - supported international carrier services   - associated special service(s), and    - customs information. 

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
const apiInstance = new shipping.ShipmentByRateShopApi(configuration);

let body:shipping.ShipmentByRateShopApiCreateShipmentV2Request = {
  // CreateShipmentV2Request
  createShipmentV2Request: null,
  // string | The Developer Partner ID is assigned by PB to uniquely identify a Developer\'s strategic business partners. If the developer is the sole business partner, this field isn\'t required. (optional)
  xPBDeveloperPartnerId: "X-PB-Developer-Partner-Id_example",
  // string | This is the Location ID assigned as per the Developer\'s and Partner\'s parsed locations, to which all transactions will be billed. <br /> Partner\'s location will be used for billing if it is configured, however, in case Partner\'s location is not given, then the Developer\'s location will be taken. Developer\'s location will be the default value. <br /> Additionally, Developers and Partners can use carriers belong to this location only. (optional)
  xPBLocationId: "X-PB-LocationId_example",
  // string | A unique Transaction ID provided by the partner, which is used to enable debugging and linking between the client\'s transaction and the system. (optional)
  xPBTransactionId: "X-PB-TransactionId_example",
};

apiInstance.createShipmentV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createShipmentV2Request** | **CreateShipmentV2Request**|  |
 **xPBDeveloperPartnerId** | [**string**] | The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required. | (optional) defaults to undefined
 **xPBLocationId** | [**string**] | This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only. | (optional) defaults to undefined
 **xPBTransactionId** | [**string**] | A unique Transaction ID provided by the partner, which is used to enable debugging and linking between the client\&#39;s transaction and the system. | (optional) defaults to undefined


### Return type

**DomesticShipmentResponseV2**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The shipment has been created successfully. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **reprintShipmentByIdV2**
> ReprintShipmentV2 reprintShipmentByIdV2(shipmentReprintV2)

The operation reprints Shipment by the shipmentId. It retrieves an existing shipping label to reprint. The API sends the shipmentID returned by the original created shipment request. Use this only if the shipping label in the Create Shipment response is missing or lost.

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
const apiInstance = new shipping.ShipmentByRateShopApi(configuration);

let body:shipping.ShipmentByRateShopApiReprintShipmentByIdV2Request = {
  // ShipmentReprintV2
  shipmentReprintV2: {
    shipmentId: "PUROLATOR2200626353009030",
    printerAliasName: "ZPLtoSheltonTest",
    references: {
      additionalReference1: "612987641",
      additionalReference2: "989",
    },
  },
  // string | The Developer Partner ID is assigned by PB to uniquely identify a Developer\'s strategic business partners. If the developer is the sole business partner, this field isn\'t required. (optional)
  xPBDeveloperPartnerId: "X-PB-Developer-Partner-Id_example",
  // string | This is the Location ID assigned as per the Developer\'s and Partner\'s parsed locations, to which all transactions will be billed. <br /> Partner\'s location will be used for billing if it is configured, however, in case Partner\'s location is not given, then the Developer\'s location will be taken. Developer\'s location will be the default value. <br /> Additionally, Developers and Partners can use carriers belong to this location only. (optional)
  xPBLocationId: "X-PB-LocationId_example",
  // string | A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\'s transaction and the system. (optional)
  xPBTransactionId: "X-PB-TransactionId_example",
};

apiInstance.reprintShipmentByIdV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentReprintV2** | **ShipmentReprintV2**|  |
 **xPBDeveloperPartnerId** | [**string**] | The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required. | (optional) defaults to undefined
 **xPBLocationId** | [**string**] | This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only. | (optional) defaults to undefined
 **xPBTransactionId** | [**string**] | A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system. | (optional) defaults to undefined


### Return type

**ReprintShipmentV2**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The shipment has been reprinted. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**404** | The requested resource was not found. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


