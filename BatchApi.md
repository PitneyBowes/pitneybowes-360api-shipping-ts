# shipping.BatchApi

All URIs are relative to *https://api-sandbox.sendpro360.pitneybowes.com/shipping*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkImportAPI**](BatchApi.md#bulkImportAPI) | **POST** /api/v1/shipments/importUrl | Bulk Import Shipments
[**bulkImportAPIERR**](BatchApi.md#bulkImportAPIERR) | **POST** /api/v1/err/shipments/importUrl | Bulk Import Shipments ERR
[**createBulkShipmentsAPI**](BatchApi.md#createBulkShipmentsAPI) | **POST** /api/v1/bulkShipments | Create Bulk Shipments
[**createBulkShipmentsAPIERR**](BatchApi.md#createBulkShipmentsAPIERR) | **POST** /api/v1/err/bulkShipments | Create Bulk Shipments ERR
[**getBatchStatusAPI**](BatchApi.md#getBatchStatusAPI) | **GET** /api/v1/shipments/batch/{batchId}/status | Get Batch Status
[**getShipmentDetailsForBatchAPI**](BatchApi.md#getShipmentDetailsForBatchAPI) | **GET** /api/v1/shipments/batch/{batchId}/shipments | Get Batch Shipment Details
[**processBatchAPI**](BatchApi.md#processBatchAPI) | **POST** /api/v1/shipments/batch/{batchId}/process | Process Batch
[**voidShippingLabel**](BatchApi.md#voidShippingLabel) | **POST** /api/v1/shipments/batch/{batchId}/void | Void Batch Shipping Labels


# **bulkImportAPI**
> ShipmentBatch bulkImportAPI(body)

This operation imports the .CSV file, which includes all the required fields to create shipments in bulk. The payload contains information about the shipments you want to import, such as `carrier account`, `label layout`, `service`, and any `special services` required for the shipments. After batch is submitted, user needs to upload csv file of shipment transactions to the uploadURL returned in response.

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
const apiInstance = new shipping.BatchApi(configuration);

let body:shipping.BatchApiBulkImportAPIRequest = {
  // CreateBatchRequest |  This is the Request body to bulk import shipments.
  body: {
    name: "name_example",
    groupName: "groupName_example",
    size: "DOC_8X11",
    type: "SHIPPING_LABEL",
    format: "PDF",
    carrierAccountId: "carrierAccountId_example",
    serviceId: "serviceId_example",
    parcelType: "parcelType_example",
    specialServices: [
      {
        inputParameters: [
          {
            name: "INPUT_VALUE",
            value: "100",
          },
        ],
        specialserviceId: "specialserviceId_example",
      },
    ],
  },
  // string | This is the Developer Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
};

apiInstance.bulkImportAPI(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateBatchRequest**|  This is the Request body to bulk import shipments. |
 **xPBDeveloperPartnerID** | [**string**] | This is the Developer Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined


### Return type

**ShipmentBatch**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  The bulk shipment has been successfully imported. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bulkImportAPIERR**
> ShipmentBatchResponseERR bulkImportAPIERR(body)

This operation imports the .CSV file which includes fields required for creating ERR (Electronic Return Receipt) Bulk Shipments.    The payload, which is used for shipment transactions, contains the following essential information in .CSV file:   - Carrier Account   - Output format: Shipping Label and Coversheet    - Services, and   - Special Services     The above-mentioned information are stored in AWS-S3 which in turn provides URL to users. When Batch is submitted, S3 returned URL along with .CSV file are uploaded, which generates BatchID.    The same BatchID is used to track the status of BulkImport. 

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
const apiInstance = new shipping.BatchApi(configuration);

let body:shipping.BatchApiBulkImportAPIERRRequest = {
  // CreateBatchRequestERR |  This is the request body to import ERR Bulk shipments.
  body: {
    name: "name_example",
    groupName: "groupName_example",
    size: "DOC_8X11",
    type: "SHIPPING_LABEL",
    format: "PDF",
    carrierAccountId: "carrierAccountId_example",
    serviceId: "serviceId_example",
    parcelType: "parcelType_example",
    specialServices: [
      {
        inputParameters: [
          {
            name: "INPUT_VALUE",
            value: "100",
          },
        ],
        specialserviceId: "specialserviceId_example",
      },
    ],
  },
  // string | The PB-Developer-Partner-ID is assigned by PB to uniquely identify a developer\'s strategic business partners. If the developer is the sole business partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
};

apiInstance.bulkImportAPIERR(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateBatchRequestERR**|  This is the request body to import ERR Bulk shipments. |
 **xPBDeveloperPartnerID** | [**string**] | The PB-Developer-Partner-ID is assigned by PB to uniquely identify a developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required. | (optional) defaults to undefined


### Return type

**ShipmentBatchResponseERR**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  ERR Bulk Shipment has been successfully imported. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createBulkShipmentsAPI**
> BulkShipmentResponse createBulkShipmentsAPI(body)

This operation creates a batch of bulk (larger quantities) shipments for single or multiple recipients. The shipments can be addressed to a single or multiple recipients with different combination of carrier, service special services and parcel type. `carrierAccountId`, `parcelType`, `serviceId` and `specialServices` are used as default when user do not wish to provide at shipment level. If user choose to provide these at Shipment level then it overrides the values provided at root level. At shipment level either you can wish to provide all of `carrierAccountId`, `parcelType`, `serviceId` and `specialServices` or not provide all of them if wants to use default ones from root level. If user do not provide any one out of `carrierAccountId`, `parcelType` and `serviceId` at shipment level it would result in validation error

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
const apiInstance = new shipping.BatchApi(configuration);

let body:shipping.BatchApiCreateBulkShipmentsAPIRequest = {
  // CreateBulkShipmentsAPIRequest | This is the Request body to create bulk shipments.
  body: null,
  // string | This is the Developer Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
};

apiInstance.createBulkShipmentsAPI(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateBulkShipmentsAPIRequest**| This is the Request body to create bulk shipments. |
 **xPBDeveloperPartnerID** | [**string**] | This is the Developer Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined


### Return type

**BulkShipmentResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Batch Shipment has been created. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createBulkShipmentsAPIERR**
> BulkShipmentResponseERR createBulkShipmentsAPIERR(body)

ERR (Electronic Return Receipt) is an official United States Postal Service® (USPS) document designed to be equivalent to the hardcopy \'green card\' Return Receipt. <br />    It provides the following information:   - Name of the Recipient     - Time when article is delivered   - Signature (image) of the Recipient     - Address where the item is delivered, and    - Date when the article gets delivered.      ERR is combined with certain classes and categories of mails, which are as follow:   - First-Class Mail®    - Priority Mail®     ERR Batch supports two types of Shipment Document format:    - Shipping Label    - Coversheet       This API \"Create Bulk Shipments with ERR\" operation requires the following information:   - Recipient (Single or Multiple)   - Carrier - USPS   - Service   - Parcel Type, and   - Special Service.    The ERR API works at two levels: Shipment level and Root level. Root level is marked as Default, where multiple shipments are processed and entities are common for all shipments. While at Shipment level, entities might differ. <br />   User can either define values for *CarrierAccountID*, *ParcelType*, *ServiceID*, and *SpecialService* respectively at the Root level for all shipments, or mention the values at Shipment level, i.e., for individual shipment(s).     If user does not provide values for the above-mentioned fields combinedly at Shipment level, then the default values for these fields provided at Root level will be considered. While, if user provides these values combinedly at Shipment Level for individual shipment(s), it will override the values defined at Root level. <br />   <br />   *Condition: The fields *CarrierAccountID*, *ParcelType*, *ServiceID* are treated as a combination, and values against each field must be provided if user selects Shipment level. In case any of these field(s) out of the mentioned combination is/are missing, it will return validation error.*    

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
const apiInstance = new shipping.BatchApi(configuration);

let body:shipping.BatchApiCreateBulkShipmentsAPIERRRequest = {
  // CreateBulkShipmentsAPIERRRequest | This is the request body to create Bulk Shipment for ERR.
  body: null,
  // string | The Developer-Partner-ID is assigned by PB to uniquely identify a developer\'s strategic business partners. If the developer is the sole business partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
};

apiInstance.createBulkShipmentsAPIERR(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateBulkShipmentsAPIERRRequest**| This is the request body to create Bulk Shipment for ERR. |
 **xPBDeveloperPartnerID** | [**string**] | The Developer-Partner-ID is assigned by PB to uniquely identify a developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required. | (optional) defaults to undefined


### Return type

**BulkShipmentResponseERR**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Bulk Shipment for ERR has been successfully created. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBatchStatusAPI**
> GetStatusDetailedResponse getBatchStatusAPI()

This operation retrieves the status of an existing Batch using *Batch ID*. Once the Job status is completed, the URL received from Response can be used to download the shipping label in PDF format.

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
const apiInstance = new shipping.BatchApi(configuration);

let body:shipping.BatchApiGetBatchStatusAPIRequest = {
  // string | This is a system-generated unique identifier assigned to the Batch while it is processed.
  batchId: "batchId_example",
  // string | The Developer-Partner- ID is assigned by PB to uniquely identify a Developer\'s strategic business partners. If the developer is the sole business partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
};

apiInstance.getBatchStatusAPI(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchId** | [**string**] | This is a system-generated unique identifier assigned to the Batch while it is processed. | defaults to undefined
 **xPBDeveloperPartnerID** | [**string**] | The Developer-Partner- ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required. | (optional) defaults to undefined


### Return type

**GetStatusDetailedResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Here, is the status of the Batch ID. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**404** | The requested resource was not found. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getShipmentDetailsForBatchAPI**
> GetShipmentsForBatch getShipmentDetailsForBatchAPI()

\"This API operation provides the shipment details for those shipments which are SUCCESS or FAILED during batch processing at the following levels: - addressValidation - rating - labelGeneration, and - voidLabel  Based on fields/data mentioned in Query Parameter, user can check shipment details for particular status at any levels. <br /> If no values are provided in the fields mentioned in Query Parameter, the default for each will be: - Page: 1  - Size: 20 - Status: SUCCESS/FAILED. 

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
const apiInstance = new shipping.BatchApi(configuration);

let body:shipping.BatchApiGetShipmentDetailsForBatchAPIRequest = {
  // string | This is a system-generated unique identifier assigned to the Batch while it is processed
  batchId: "batchId_example",
  // string | The Developer-Partner- ID is assigned by PB to uniquely identify a Developer\'s strategic business partners. If the developer is the sole business partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
  // number | It returns detailed information for shipments status and it can cover in one or more pages. The default value for page number is 1. (optional)
  page: 1,
  // number | Indicates the number of records per page. The default value for records is 20. (optional)
  size: 1,
  // 'SUCCESS' | 'FAILED' | The status of the shipment. Values can be Failed or Success. (optional)
  status: "SUCCESS",
  // 'rating' | 'addressValidation' | 'labelGeneration' | 'voidLabel' | Indicates various stages of the batch processing. (optional)
  step: "rating",
};

apiInstance.getShipmentDetailsForBatchAPI(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchId** | [**string**] | This is a system-generated unique identifier assigned to the Batch while it is processed | defaults to undefined
 **xPBDeveloperPartnerID** | [**string**] | The Developer-Partner- ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required. | (optional) defaults to undefined
 **page** | [**number**] | It returns detailed information for shipments status and it can cover in one or more pages. The default value for page number is 1. | (optional) defaults to undefined
 **size** | [**number**] | Indicates the number of records per page. The default value for records is 20. | (optional) defaults to undefined
 **status** | [**&#39;SUCCESS&#39; | &#39;FAILED&#39;**]**Array<&#39;SUCCESS&#39; &#124; &#39;FAILED&#39;>** | The status of the shipment. Values can be Failed or Success. | (optional) defaults to undefined
 **step** | [**&#39;rating&#39; | &#39;addressValidation&#39; | &#39;labelGeneration&#39; | &#39;voidLabel&#39;**]**Array<&#39;rating&#39; &#124; &#39;addressValidation&#39; &#124; &#39;labelGeneration&#39; &#124; &#39;voidLabel&#39;>** | Indicates various stages of the batch processing. | (optional) defaults to undefined


### Return type

**GetShipmentsForBatch**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Detailed status of processed shipments for the batch. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**404** | The requested resource was not found. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **processBatchAPI**
> ProcessShipmentResponse processBatchAPI()

This operation processes (executes) the existing Batch. The payload for this endpoint needs only an empty JSON object and no additional data is required in the request body. The BatchID parameter located in the endpoint specifies which batch of shipments to process.

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
const apiInstance = new shipping.BatchApi(configuration);

let body:shipping.BatchApiProcessBatchAPIRequest = {
  // string | This is a system-generated unique identifier assigned to the Batch while it is processed.
  batchId: "batchId_example",
  // string | The Developer-Partner-ID is assigned by PB to uniquely identify a Developer\'s strategic business partners. If the developer is the sole business partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
};

apiInstance.processBatchAPI(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchId** | [**string**] | This is a system-generated unique identifier assigned to the Batch while it is processed. | defaults to undefined
 **xPBDeveloperPartnerID** | [**string**] | The Developer-Partner-ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required. | (optional) defaults to undefined


### Return type

**ProcessShipmentResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Batch has been processed successfully. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**404** | The requested resource was not found. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **voidShippingLabel**
> VoidBatchResponse voidShippingLabel()

This operation cancels (voids) shipments which are created using the Batch API operation `createBulkShipments`. <br /> If user wants to cancel specific shipment(s) of the Batch, then s/he needs to pass the *Shipment ID* for the selected shipments in the `shipmentIDs` array. While if user wants to cancel all shipments of the Batch, then s/he does not need to provide any *Shipment ID* in the array under request body.

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
const apiInstance = new shipping.BatchApi(configuration);

let body:shipping.BatchApiVoidShippingLabelRequest = {
  // string | This is a system-generated unique identifier assigned to the Batch while it is processed.
  batchId: "batchId_example",
  // string | The Developer-Partner-ID is assigned by PB to uniquely identify a Developer\'s strategic business partners. If the developer is the sole business partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
  // VoidBatchRequest |  This is the request body for cancelling the selected shipments or entire Batch of shipments*. (optional)
  voidBatchRequest: {
    name: "batchTest",
    reason: "Not processing due to rating issue.",
    shipmentIds: [
      "USPS09998889999038",
    ],
  },
};

apiInstance.voidShippingLabel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voidBatchRequest** | **VoidBatchRequest**|  This is the request body for cancelling the selected shipments or entire Batch of shipments*. |
 **batchId** | [**string**] | This is a system-generated unique identifier assigned to the Batch while it is processed. | defaults to undefined
 **xPBDeveloperPartnerID** | [**string**] | The Developer-Partner-ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required. | (optional) defaults to undefined


### Return type

**VoidBatchResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The indicated shipment(s) of Batch have been successfully cancelled. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**404** | The requested resource was not found. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


