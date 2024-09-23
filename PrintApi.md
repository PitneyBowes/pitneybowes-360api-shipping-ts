# shipping.PrintApi

All URIs are relative to *https://api-sandbox.sendpro360.pitneybowes.com/shipping*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePrinterMapping**](PrintApi.md#deletePrinterMapping) | **DELETE** /api/v1/printer/mapping | Delete Printer mapping
[**getPrinterMapping**](PrintApi.md#getPrinterMapping) | **GET** /api/v1/printer/mapping | Get Printer mapping
[**jobStatus**](PrintApi.md#jobStatus) | **GET** /api/v1/jobs/{jobId} | Job status
[**printDocument**](PrintApi.md#printDocument) | **POST** /api/v1/document/print | Print Document
[**printerMapping**](PrintApi.md#printerMapping) | **POST** /api/v1/printer/mapping | Printer mapping


# **deletePrinterMapping**
> void deletePrinterMapping()

delete printer mapping document

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
const apiInstance = new shipping.PrintApi(configuration);

let body:shipping.PrintApiDeletePrinterMappingRequest = {
  // string | Refers to a printer connected (directly or via network) to a computer.
  alias: "alias_example",
  // string | The Developer Partner ID is assigned by PB to uniquely identify a Developer\'s strategic business partners. If the developer is the sole business partner, this field isn\'t required. (optional)
  xPBDeveloperPartnerId: "X-PB-Developer-Partner-Id_example",
  // string | This is the Location ID assigned as per the Developer\'s and Partner\'s parsed locations, to which all transactions will be billed. <br /> Partner\'s location will be used for billing if it is configured, however, in case Partner\'s location is not given, then the Developer\'s location will be taken. Developer\'s location will be the default value. <br /> Additionally, Developers and Partners can use carriers belong to this location only. (optional)
  xPBLocationId: "X-PB-LocationId_example",
  // string | A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\'s transaction and the system. (optional)
  xPBTransactionId: "X-PB-TransactionId_example",
};

apiInstance.deletePrinterMapping(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alias** | [**string**] | Refers to a printer connected (directly or via network) to a computer. | defaults to undefined
 **xPBDeveloperPartnerId** | [**string**] | The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required. | (optional) defaults to undefined
 **xPBLocationId** | [**string**] | This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only. | (optional) defaults to undefined
 **xPBTransactionId** | [**string**] | A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system. | (optional) defaults to undefined


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
**200** | Successfully deleted printer mapping |  -  |
**401** | The request could not be authorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPrinterMapping**
> PrinterMappingGetResponse getPrinterMapping()

Get printer mapping document

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
const apiInstance = new shipping.PrintApi(configuration);

let body:shipping.PrintApiGetPrinterMappingRequest = {
  // string | Refers to a printer connected (directly or via network) to a computer.
  alias: "alias_example",
  // string | The Developer Partner ID is assigned by PB to uniquely identify a Developer\'s strategic business partners. If the developer is the sole business partner, this field isn\'t required. (optional)
  xPBDeveloperPartnerId: "X-PB-Developer-Partner-Id_example",
  // string | This is the Location ID assigned as per the Developer\'s and Partner\'s parsed locations, to which all transactions will be billed. <br /> Partner\'s location will be used for billing if it is configured, however, in case Partner\'s location is not given, then the Developer\'s location will be taken. Developer\'s location will be the default value. <br /> Additionally, Developers and Partners can use carriers belong to this location only. (optional)
  xPBLocationId: "X-PB-LocationId_example",
  // string | A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\'s transaction and the system. (optional)
  xPBTransactionId: "X-PB-TransactionId_example",
};

apiInstance.getPrinterMapping(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alias** | [**string**] | Refers to a printer connected (directly or via network) to a computer. | defaults to undefined
 **xPBDeveloperPartnerId** | [**string**] | The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required. | (optional) defaults to undefined
 **xPBLocationId** | [**string**] | This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only. | (optional) defaults to undefined
 **xPBTransactionId** | [**string**] | A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system. | (optional) defaults to undefined


### Return type

**PrinterMappingGetResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Mapping printer Get Successfully |  -  |
**401** | The request could not be authorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **jobStatus**
> JobStatus jobStatus()

job status

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
const apiInstance = new shipping.PrintApi(configuration);

let body:shipping.PrintApiJobStatusRequest = {
  // string | The jobId, a unique identifier assigned for the job.
  jobId: "jobId_example",
  // string | The Developer Partner ID is assigned by PB to uniquely identify a Developer\'s strategic business partners. If the developer is the sole business partner, this field isn\'t required. (optional)
  xPBDeveloperPartnerId: "X-PB-Developer-Partner-Id_example",
  // string | This is the Location ID assigned as per the Developer\'s and Partner\'s parsed locations, to which all transactions will be billed. <br /> Partner\'s location will be used for billing if it is configured, however, in case Partner\'s location is not given, then the Developer\'s location will be taken. Developer\'s location will be the default value. <br /> Additionally, Developers and Partners can use carriers belong to this location only. (optional)
  xPBLocationId: "X-PB-LocationId_example",
  // string | A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\'s transaction and the system. (optional)
  xPBTransactionId: "X-PB-TransactionId_example",
};

apiInstance.jobStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**string**] | The jobId, a unique identifier assigned for the job. | defaults to undefined
 **xPBDeveloperPartnerId** | [**string**] | The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required. | (optional) defaults to undefined
 **xPBLocationId** | [**string**] | This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only. | (optional) defaults to undefined
 **xPBTransactionId** | [**string**] | A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system. | (optional) defaults to undefined


### Return type

**JobStatus**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The document has been printed successfully. |  -  |
**401** | The request could not be authorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **printDocument**
> PrintDocumentResponse printDocument(printDocumentRequest)

It contains information about a label or a document, e.g. a shipping label, a customs form, manifest report etc., that pertains to a shipment or manifest.

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
const apiInstance = new shipping.PrintApi(configuration);

let body:shipping.PrintApiPrintDocumentRequest = {
  // PrintDocumentRequest
  printDocumentRequest: {
    printerAliasName: "Pitney Bowes Printer",
    data: "<<base64string>>",
    dataType: "BASE64",
    documentType: "ZPL2",
    formName: "ENV10",
    orientation: "PORTRAIT",
    reference: {
      reference1: "123456",
      reference2: "SendTech",
      reference3: "65439",
      reference4: "FedEx First Overnight",
    },
  },
  // string | The Developer Partner ID is assigned by PB to uniquely identify a Developer\'s strategic business partners. If the developer is the sole business partner, this field isn\'t required. (optional)
  xPBDeveloperPartnerId: "X-PB-Developer-Partner-Id_example",
  // string | This is the Location ID assigned as per the Developer\'s and Partner\'s parsed locations, to which all transactions will be billed. <br /> Partner\'s location will be used for billing if it is configured, however, in case Partner\'s location is not given, then the Developer\'s location will be taken. Developer\'s location will be the default value. <br /> Additionally, Developers and Partners can use carriers belong to this location only. (optional)
  xPBLocationId: "X-PB-LocationId_example",
  // string | A unique Transaction ID provided by the partner, which is used to enable debugging and linking between the client\'s transaction and the system. (optional)
  xPBTransactionId: "X-PB-TransactionId_example",
};

apiInstance.printDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **printDocumentRequest** | **PrintDocumentRequest**|  |
 **xPBDeveloperPartnerId** | [**string**] | The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required. | (optional) defaults to undefined
 **xPBLocationId** | [**string**] | This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only. | (optional) defaults to undefined
 **xPBTransactionId** | [**string**] | A unique Transaction ID provided by the partner, which is used to enable debugging and linking between the client\&#39;s transaction and the system. | (optional) defaults to undefined


### Return type

**PrintDocumentResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The document has been printed successfully. |  -  |
**401** | The request could not be authorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **printerMapping**
> PrinterMappingResponse printerMapping(printerMappingRequest)

printer mapping document

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
const apiInstance = new shipping.PrintApi(configuration);

let body:shipping.PrintApiPrinterMappingRequest = {
  // PrinterMappingRequest
  printerMappingRequest: {
    alias: "rohit2",
    serialNumber: "AP-DP1LZH3-0x919e698164-dev",
    printerName: "Brother QL-1110NWB",
  },
  // string | The Developer Partner ID is assigned by PB to uniquely identify a Developer\'s strategic business partners. If the developer is the sole business partner, this field isn\'t required. (optional)
  xPBDeveloperPartnerId: "X-PB-Developer-Partner-Id_example",
  // string | This is the Location ID assigned as per the Developer\'s and Partner\'s parsed locations, to which all transactions will be billed. <br /> Partner\'s location will be used for billing if it is configured, however, in case Partner\'s location is not given, then the Developer\'s location will be taken. Developer\'s location will be the default value. <br /> Additionally, Developers and Partners can use carriers belong to this location only. (optional)
  xPBLocationId: "X-PB-LocationId_example",
  // string | A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\'s transaction and the system. (optional)
  xPBTransactionId: "X-PB-TransactionId_example",
};

apiInstance.printerMapping(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **printerMappingRequest** | **PrinterMappingRequest**|  |
 **xPBDeveloperPartnerId** | [**string**] | The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required. | (optional) defaults to undefined
 **xPBLocationId** | [**string**] | This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only. | (optional) defaults to undefined
 **xPBTransactionId** | [**string**] | A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system. | (optional) defaults to undefined


### Return type

**PrinterMappingResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successfully mapped printer |  -  |
**401** | The request could not be authorized. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


