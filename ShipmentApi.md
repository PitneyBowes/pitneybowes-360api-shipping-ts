# shipping.ShipmentApi

All URIs are relative to *https://api-sandbox.sendpro360.pitneybowes.com/shipping*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelShipmentById**](ShipmentApi.md#cancelShipmentById) | **PUT** /api/v1/shipments/{shipmentId}/cancel | Cancel Shipment
[**cancelStampsERR**](ShipmentApi.md#cancelStampsERR) | **POST** /api/v1/err/stamps/void | Cancel Stamps ERR
[**createReturnLabel**](ShipmentApi.md#createReturnLabel) | **POST** /api/v1/shipments/{shipmentId}/return | Create Return label shipment
[**createShipment**](ShipmentApi.md#createShipment) | **POST** /api/v1/shipments | Create Shipment
[**downloadBpodFiles**](ShipmentApi.md#downloadBpodFiles) | **POST** /api/v1/err/shipments/bpod | Download BPOD Files
[**getAllShipments**](ShipmentApi.md#getAllShipments) | **GET** /api/v1/shipments | Get All Shipments
[**getCarrierAccounts**](ShipmentApi.md#getCarrierAccounts) | **GET** /api/v1/carrierAccounts | Get Carrier Accounts
[**getCarriers**](ShipmentApi.md#getCarriers) | **GET** /api/v1/carriers | Get Carriers
[**getCountries**](ShipmentApi.md#getCountries) | **GET** /api/v1/countries | Get Countries
[**getParcelTypes**](ShipmentApi.md#getParcelTypes) | **GET** /api/v1/parcelTypes | Get Parcel Types
[**getRates**](ShipmentApi.md#getRates) | **POST** /api/v1/rates | Rate Shop and Get Single Rate
[**getServices**](ShipmentApi.md#getServices) | **GET** /api/v1/services | Get Services
[**getSignatureImageERR**](ShipmentApi.md#getSignatureImageERR) | **GET** /api/v1/err/shipments/{shipmentId}/signaturefile | Signature Image ERR
[**getSpecialServices**](ShipmentApi.md#getSpecialServices) | **GET** /api/v1/specialServices | Get Special Services
[**reprintShipmentById**](ShipmentApi.md#reprintShipmentById) | **GET** /api/v1/shipments/{shipmentId}/reprint | Reprint Shipment
[**shipmentById**](ShipmentApi.md#shipmentById) | **GET** /api/v1/shipments/{shipmentId} | Get Shipment by Id


# **cancelShipmentById**
> CancelShipment cancelShipmentById()

This operation cancel/void shipment.

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
const apiInstance = new shipping.ShipmentApi(configuration);

let body:shipping.ShipmentApiCancelShipmentByIdRequest = {
  // string | This indicates the shipmentId, a unique identifier assigned for the Shipment.
  shipmentId: "shipmentId_example",
  // string | This is the Developer Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
};

apiInstance.cancelShipmentById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | [**string**] | This indicates the shipmentId, a unique identifier assigned for the Shipment. | defaults to undefined
 **xPBDeveloperPartnerID** | [**string**] | This is the Developer Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined


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
**200** | The Shipment has been cancelled. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**404** | The requested resource was not found. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cancelStampsERR**
> CancelStampsResponseERR cancelStampsERR(cancelStampsRequestERR)

This operation cancels (voids) stamps generated for ERR (Electronic Return Receipt).  - User needs to provide *Stamp IDs* to cancel those specific ERR stamps.  - User can download the *Refund Form* having details of generated Postage.  - At once, maximum 1000 stamps can be requested for cancelation. 

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
const apiInstance = new shipping.ShipmentApi(configuration);

let body:shipping.ShipmentApiCancelStampsERRRequest = {
  // CancelStampsRequestERR
  cancelStampsRequestERR: {
    stampIds: [
      "USPS2200000000000008",
    ],
  },
  // string | The Developer Partner ID is assigned by PB to uniquely identify a Developer\'s strategic business partners. If the developer is the sole business partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
};

apiInstance.cancelStampsERR(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cancelStampsRequestERR** | **CancelStampsRequestERR**|  |
 **xPBDeveloperPartnerID** | [**string**] | The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required. | (optional) defaults to undefined


### Return type

**CancelStampsResponseERR**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/pdf, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Stamps Refund Form has been generated. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createReturnLabel**
> ReturnLabelResponse createReturnLabel(returnLabel)

This operation creates a return label based on a previous shipment. <br> The return label can be created in two ways:  <br> 1. User need not to provide any details of package, address and service. The API would take all details from the shipmentId mentioned in the path parameter and would swap the address and create return label. However for UPS `specialServices` object is required as carrier mandates to provide package description with PRL special service. <br> 2. User can customize the request by passing `fromAddress`, `toAddress`, `parcelType`, `serviceId` in the request itself. <br> Please Note that for UPS it is required to pass `specialServices` object with `PRL` service id and  input parameters with name as `RETURN_PKG_DESCRIPTION`. <br> For FedEx `specialServices` object is not required and PRL is added by default while creating return.  If user wishes to provide RMA number, it can be passed in `specialServices` object in the request body. <br> Please Note If user provides any information in this request it overrides the information in onward shipment which was created <br> For example if user provides toAddress in the request the return label will get created with recipient as mentioned in toAddress and  if user provides fromAddress in the request, the return label will be created with sender as mentioned in fromAddress

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
const apiInstance = new shipping.ShipmentApi(configuration);

let body:shipping.ShipmentApiCreateReturnLabelRequest = {
  // string | It specifies the shipmentId of onward shipment against which return label has to be created.
  shipmentId: "shipmentId_example",
  // ReturnLabel
  returnLabel: {
    size: "DOC_8X11",
    type: "SHIPPING_LABEL",
    fromAddress: {
      addressLine1: "27 Watervw Dr",
      email: "watervw@gmail.com",
      cityTown: "Stamford",
      countryCode: "US",
      name: "Paul Wright",
      phone: "203-555-1213",
      postalCode: "06905",
      stateProvince: "CT",
    },
    parcel: {
      height: 1,
      length: 2,
      width: 1,
      dimUnit: "IN",
      weightUnit: "OZ",
      weight: 1,
    },
    carrierAccountId: "asas2223",
    parcelType: "PKG",
    parcelId: "PKG",
    serviceId: "PM",
    specialServices: [
      {
        specialServiceId: "PRL",
        inputParameters: [
          {
            name: "RETURN_PKG_DESCRIPTION",
            value: "test",
          },
        ],
      },
    ],
    shipmentOptions: {
      addToManifest: true,
      printCustomMessage: "Print Message 1",
      receiptOption: "RECEIPT_WITH_INSTRUCTIONS",
      printDepartment: "department",
      printInvoiceNumber: "invoicenumber",
      printPONumber: "ponumber",
      minimalAddressValidation: true,
    },
    metadata: [
      {
        name: "costAccountName",
        value: "cost account 123",
      },
    ],
    toAddress: {
      addressLine1: "762 Atlantic Ave",
      email: "email@gmail.com",
      cityTown: "Rochester",
      countryCode: "US",
      name: "Rufous Sirius Canid",
      company: "ABC Company",
      phone: "203-555-1213",
      postalCode: "14609",
      stateProvince: "NY",
    },
  },
  // string | This is the Developer Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
};

apiInstance.createReturnLabel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returnLabel** | **ReturnLabel**|  |
 **shipmentId** | [**string**] | It specifies the shipmentId of onward shipment against which return label has to be created. | defaults to undefined
 **xPBDeveloperPartnerID** | [**string**] | This is the Developer Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined


### Return type

**ReturnLabelResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Return Label has been created successfully. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createShipment**
> CreateShipment200Response createShipment(createShipmentRequest)

This operation creates a new Shipment or Shipment Label. This is for both Domestic and International.<br> For domestic, Create a shipment requires domestic addresses (within same country)- ToAddress and FromAddress, and  carrier service and special service.<br> While for International, Create a shipment requires international delivery, that is ToAddress must be the different country (and not the same country mentioned in From Address), selected services, special services, and customs information. <br> <br> Note- To create Return shipment using this API- If PRL (return special service) is used, user need to provide sender address (from where return shipment is to be created) in `fromAddress` object and recipient address (to where return is to be created) in `toAddress` object. System will not swap the address for return in this API. If you want to create return for the already created shipment, you may use `Create Return Label Shipment` API. <br> <br> Note: Currently Shipment created from below API gets assigned to the Default location of the subscription.

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
const apiInstance = new shipping.ShipmentApi(configuration);

let body:shipping.ShipmentApiCreateShipmentRequest = {
  // CreateShipmentRequest
  createShipmentRequest: null,
  // string | This is the Developer Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
};

apiInstance.createShipment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createShipmentRequest** | **CreateShipmentRequest**|  |
 **xPBDeveloperPartnerID** | [**string**] | This is the Developer Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined


### Return type

**CreateShipment200Response**

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

# **downloadBpodFiles**
> BPODDownloadResponse downloadBpodFiles()

This API operation is used to download bulk of ERR (*Electronic Return Receipt*) - POD (*Proof of Delivery*) files, which are specific to USPS carrier. <br />   User can download BPOD (*Bulk Proof of Delivery*) files either using *Shipment IDs* or *Date Range*.    If user wants to check records based on dates and download BPOD files accordingly, then *Start Date* and *End Date* need to be passed in the request body as filter. Else *Shipment IDs* will be used as default value when user does not provide *DateRange* filter. <br />   User is restricted to download 1000 BPOD files as max limit. 

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
const apiInstance = new shipping.ShipmentApi(configuration);

let body:shipping.ShipmentApiDownloadBpodFilesRequest = {
  // string | The Developer Partner ID is assigned by PB to uniquely identify a Developer\'s strategic business partners. If the developer is the sole business partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
  // string | The BPOD files to be downloaded from which Date is the startDate in the Date Range filter. This field is not required if the Shipment IDs provided in the request body. (optional)
  startDate: "startDate_example",
  // string | The BPOD files to be downloaded till which Date is the endDate in the Date Range filter. This field is not required if the Shipment IDs provided in the request body. (optional)
  endDate: "endDate_example",
  // BPODDownloadRequest | This is the request body to download BPOD files. Request body supports max of 1000 ShipmentIDs in a request. (optional)
  body: {
    shipmentIds: [
      "USPS09998889999038",
    ],
  },
};

apiInstance.downloadBpodFiles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **BPODDownloadRequest**| This is the request body to download BPOD files. Request body supports max of 1000 ShipmentIDs in a request. |
 **xPBDeveloperPartnerID** | [**string**] | The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required. | (optional) defaults to undefined
 **startDate** | [**string**] | The BPOD files to be downloaded from which Date is the startDate in the Date Range filter. This field is not required if the Shipment IDs provided in the request body. | (optional) defaults to undefined
 **endDate** | [**string**] | The BPOD files to be downloaded till which Date is the endDate in the Date Range filter. This field is not required if the Shipment IDs provided in the request body. | (optional) defaults to undefined


### Return type

**BPODDownloadResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The ZIP URL for BPOD files has been created for download. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllShipments**
> GetAllShipments getAllShipments()

This operation fetches all created Shipments. If query parameters are not provided, it will default endDate as current date, page as 1 and size as 10.

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
const apiInstance = new shipping.ShipmentApi(configuration);

let body:shipping.ShipmentApiGetAllShipmentsRequest = {
  // string | This is the Developer Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
  // string | While searching shipments, user set a date range to get all created shipments. This indicatesthe start date of the set date range under shipment search criteria. The date format must be: YYYY-MM-DD. (optional)
  startDate: "startDate_example",
  // string | While searching shipments, user set a date range to get all created shipments. This indicatesthe end date of the set date range under shipment search criteria. The date format must be: YYYY-MM-DD. (optional)
  endDate: "endDate_example",
  // string | This indicates the page of the Shipments search result list. (optional)
  page: "page_example",
  // string | This indicates the size/count of the searched result list. (optional)
  size: "size_example",
};

apiInstance.getAllShipments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xPBDeveloperPartnerID** | [**string**] | This is the Developer Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined
 **startDate** | [**string**] | While searching shipments, user set a date range to get all created shipments. This indicatesthe start date of the set date range under shipment search criteria. The date format must be: YYYY-MM-DD. | (optional) defaults to undefined
 **endDate** | [**string**] | While searching shipments, user set a date range to get all created shipments. This indicatesthe end date of the set date range under shipment search criteria. The date format must be: YYYY-MM-DD. | (optional) defaults to undefined
 **page** | [**string**] | This indicates the page of the Shipments search result list. | (optional) defaults to undefined
 **size** | [**string**] | This indicates the size/count of the searched result list. | (optional) defaults to undefined


### Return type

**GetAllShipments**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of shipments. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCarrierAccounts**
> GetCarrierAccounts200Response getCarrierAccounts()

This operation retrieves onboarded Carriers with their Carrier Account Ids which uniquely identify multiple accounts of same carrier.

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
const apiInstance = new shipping.ShipmentApi(configuration);

let body:shipping.ShipmentApiGetCarrierAccountsRequest = {
  // string | This is the Developer Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
};

apiInstance.getCarrierAccounts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xPBDeveloperPartnerID** | [**string**] | This is the Developer Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined


### Return type

**GetCarrierAccounts200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of Carrier Accounts has been fetched. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCarriers**
> Carriers getCarriers()

This operation fetches all supported carriers. This service is used to get list of supported carriers and their properties.

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
const apiInstance = new shipping.ShipmentApi(configuration);

let body:shipping.ShipmentApiGetCarriersRequest = {
  // string | This is the Developer Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
};

apiInstance.getCarriers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xPBDeveloperPartnerID** | [**string**] | This is the Developer Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined


### Return type

**Carriers**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The available carriers have been fetched. |  * X-Pb-Transactionid - The X-PB-TransactionId is unique id for this request. <br>  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCountries**
> Array<CountriesInner> getCountries()

This operation fetches list of supported destination countries for a provided carrier and origin country. If query parameters are not provided, it will default to `USPS` as carrier and `US` as origin country.

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
const apiInstance = new shipping.ShipmentApi(configuration);

let body:shipping.ShipmentApiGetCountriesRequest = {
  // string | This is the Developer Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
  // string | This indicates the carrierID, a unique identifier given to  an individual carrier. (optional)
  carrier: "carrier_example",
  // string | This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates. (optional)
  originCountryCode: "originCountryCode_example",
};

apiInstance.getCountries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xPBDeveloperPartnerID** | [**string**] | This is the Developer Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined
 **carrier** | [**string**] | This indicates the carrierID, a unique identifier given to  an individual carrier. | (optional) defaults to undefined
 **originCountryCode** | [**string**] | This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates. | (optional) defaults to undefined


### Return type

**Array<CountriesInner>**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of Countries has been fetched. |  * X-Pb-Transactionid - The X-PB-TransactionId is unique id for this request. <br>  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getParcelTypes**
> Array<ParcelTypesInner> getParcelTypes()

This operation fetches Parcel Types based on the provided carrier, origin county, and the destination country. If query parameters are not provided, this will default to `USPS` as carrier, `US` as both origin and destination country code.

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
const apiInstance = new shipping.ShipmentApi(configuration);

let body:shipping.ShipmentApiGetParcelTypesRequest = {
  // string | This is the Developer Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
  // string | This indicates the CarrierID, a unique identifier given to an individual carrier. It can be referred from the response of Get Carriers API (optional)
  carrier: "carrier_example",
  // string | This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates. (optional)
  originCountryCode: "originCountryCode_example",
  // string | This indicates the Destination Country for the Shipment. The two-character ISO country code for the country where the shipment is to be delivered. (optional)
  destinationCountryCode: "destinationCountryCode_example",
};

apiInstance.getParcelTypes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xPBDeveloperPartnerID** | [**string**] | This is the Developer Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined
 **carrier** | [**string**] | This indicates the CarrierID, a unique identifier given to an individual carrier. It can be referred from the response of Get Carriers API | (optional) defaults to undefined
 **originCountryCode** | [**string**] | This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates. | (optional) defaults to undefined
 **destinationCountryCode** | [**string**] | This indicates the Destination Country for the Shipment. The two-character ISO country code for the country where the shipment is to be delivered. | (optional) defaults to undefined


### Return type

**Array<ParcelTypesInner>**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of Parcel Types has been fetched. |  * X-Pb-Transactionid - The X-PB-TransactionId is unique id for this request. <br>  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getRates**
> GetRates200Response getRates(getRatesRequest)

This API contains 2 operations, rate shop and single rate. Rate shop will fetch rates for all carrier services based on the given addresses (From and To), weight, and dimension for given parcelType. If parcelType is not provided, it will default to `PKG`. Single rate will get rate for specific service and special service (if requested) based on the given addresses (From and To), weight, and dimension, parcelType and serviceId with or without specialServices. Single rate will be used mainly to a rate a shipment before creating shipment.

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
const apiInstance = new shipping.ShipmentApi(configuration);

let body:shipping.ShipmentApiGetRatesRequest = {
  // GetRatesRequest
  getRatesRequest: null,
  // string | This is the Developer Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
  // boolean | This header defines if the response required is detailed or compact. When value is set to true, it will only return rates object in response. (optional)
  compactResponse: true,
};

apiInstance.getRates(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getRatesRequest** | **GetRatesRequest**|  |
 **xPBDeveloperPartnerID** | [**string**] | This is the Developer Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined
 **compactResponse** | [**boolean**] | This header defines if the response required is detailed or compact. When value is set to true, it will only return rates object in response. | (optional) defaults to undefined


### Return type

**GetRates200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Rating is done for the shipment(s). |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getServices**
> Array<ServicesInner> getServices()

This operation fetches a list of supported services for a carrier with respect to specific origin and destination country. If query parameters are not provided, this will default to `USPS` as carrier, `US` as both origin and destination country code.

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
const apiInstance = new shipping.ShipmentApi(configuration);

let body:shipping.ShipmentApiGetServicesRequest = {
  // string | This is the Developer Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
  // string | This indicates the CarrierID, a unique identifier provided to an individual carrier. It can be referred from the response of Get Carriers API (optional)
  carrier: "carrier_example",
  // string | This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates. (optional)
  originCountryCode: "originCountryCode_example",
  // string | This indicates the Destination Country for the Shipment. The two-character ISO country code for the country where the shipment is to be delivered. (optional)
  destinationCountryCode: "destinationCountryCode_example",
};

apiInstance.getServices(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xPBDeveloperPartnerID** | [**string**] | This is the Developer Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined
 **carrier** | [**string**] | This indicates the CarrierID, a unique identifier provided to an individual carrier. It can be referred from the response of Get Carriers API | (optional) defaults to undefined
 **originCountryCode** | [**string**] | This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates. | (optional) defaults to undefined
 **destinationCountryCode** | [**string**] | This indicates the Destination Country for the Shipment. The two-character ISO country code for the country where the shipment is to be delivered. | (optional) defaults to undefined


### Return type

**Array<ServicesInner>**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of services has been fetched. |  * X-Pb-Transactionid - The X-PB-TransactionId is unique id for this request. <br>  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSignatureImageERR**
> SignatureFileResponse getSignatureImageERR()

This operation provides a downloadable link which consists of a signature image for specific ERR (Electronic Return Receipt) shipment, and this is known as POD. <br /> Proof of Delivery (POD) is a document or file that shows an evidence of shipment delivery. This file contains the digital copy of recipient\'s signature, i.e., the signature image, in the form of downloadable link or URL.

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
const apiInstance = new shipping.ShipmentApi(configuration);

let body:shipping.ShipmentApiGetSignatureImageERRRequest = {
  // string | Shipment ID is a unique identifier for an individual shipment.
  shipmentId: "shipmentId_example",
  // string | The Developer Partner ID is assigned by PB to uniquely identify a Developer\'s strategic business partners. If the developer is the sole business partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
};

apiInstance.getSignatureImageERR(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | [**string**] | Shipment ID is a unique identifier for an individual shipment. | defaults to undefined
 **xPBDeveloperPartnerID** | [**string**] | The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required. | (optional) defaults to undefined


### Return type

**SignatureFileResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Signature image as proof of delivered shipment. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSpecialServices**
> SpecialServices getSpecialServices()

This operation fetches Special Services for a given carrier, service, origin country, and the destination country. If query parameters are not provided, it will default to `USPS` as carrier,`US` as both origin and destination country and would show for all service and parcel types

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
const apiInstance = new shipping.ShipmentApi(configuration);

let body:shipping.ShipmentApiGetSpecialServicesRequest = {
  // string | This is the Developer Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
  // string | This indicates the serviceId. It can be referred from response of `Get Services` API (optional)
  service: "service_example",
  // string | This indicates the parcel Id, a unique identifier named to individual package. It can be referred from response of `Get Parcel Types` API (optional)
  parcel: "parcel_example",
  // string | This indicates the CarrierID, a unique identifier given to  an individual carrier. It can be referred from response of `Get Carriers` API (optional)
  carrier: "carrier_example",
  // string | This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates. (optional)
  originCountryCode: "originCountryCode_example",
  // string | This indicates the Destination Country for the Shipment. The two-character ISO country code for the country where the shipment is to be delivered. (optional)
  destinationCountryCode: "destinationCountryCode_example",
};

apiInstance.getSpecialServices(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xPBDeveloperPartnerID** | [**string**] | This is the Developer Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined
 **service** | [**string**] | This indicates the serviceId. It can be referred from response of &#x60;Get Services&#x60; API | (optional) defaults to undefined
 **parcel** | [**string**] | This indicates the parcel Id, a unique identifier named to individual package. It can be referred from response of &#x60;Get Parcel Types&#x60; API | (optional) defaults to undefined
 **carrier** | [**string**] | This indicates the CarrierID, a unique identifier given to  an individual carrier. It can be referred from response of &#x60;Get Carriers&#x60; API | (optional) defaults to undefined
 **originCountryCode** | [**string**] | This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates. | (optional) defaults to undefined
 **destinationCountryCode** | [**string**] | This indicates the Destination Country for the Shipment. The two-character ISO country code for the country where the shipment is to be delivered. | (optional) defaults to undefined


### Return type

**SpecialServices**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Special Service has been fetched successfully. |  * X-Pb-Transactionid - The X-PB-TransactionId is unique id for this request. <br>  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **reprintShipmentById**
> ReprintShipment reprintShipmentById()

This operation reprints Shipment by the shipmentId. It retrieves an existing shipping label to reprint. The API sends the shipmentId returned by the original Created Shipment request. Use this only if the shipping label in the Create Shipment response was spoilt or lost.

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
const apiInstance = new shipping.ShipmentApi(configuration);

let body:shipping.ShipmentApiReprintShipmentByIdRequest = {
  // string | This indicates the shipmentId, a unique identifier assigned to the Shipment.
  shipmentId: "shipmentId_example",
  // string | This is the Developer Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
  // boolean | This header defines if the response required is detailed or compact. When value is set to true, it will only return label layout details and parcel tracking number object in response. (optional)
  compactResponse: false,
};

apiInstance.reprintShipmentById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | [**string**] | This indicates the shipmentId, a unique identifier assigned to the Shipment. | defaults to undefined
 **xPBDeveloperPartnerID** | [**string**] | This is the Developer Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined
 **compactResponse** | [**boolean**] | This header defines if the response required is detailed or compact. When value is set to true, it will only return label layout details and parcel tracking number object in response. | (optional) defaults to undefined


### Return type

**ReprintShipment**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
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

# **shipmentById**
> GetSingleShipment shipmentById()

This operation retrieves shipment details using shipmentId.

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
const apiInstance = new shipping.ShipmentApi(configuration);

let body:shipping.ShipmentApiShipmentByIdRequest = {
  // string | This indicates the shipmentId, a unique identifier for an individual Shipment.
  shipmentId: "shipmentId_example",
  // string | This is the Developer Partner ID. When the developer is the only partner, this field is not required. (optional)
  xPBDeveloperPartnerID: "X-PB-Developer-Partner-ID_example",
};

apiInstance.shipmentById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | [**string**] | This indicates the shipmentId, a unique identifier for an individual Shipment. | defaults to undefined
 **xPBDeveloperPartnerID** | [**string**] | This is the Developer Partner ID. When the developer is the only partner, this field is not required. | (optional) defaults to undefined


### Return type

**GetSingleShipment**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The shipment has been retrieved. |  -  |
**400** | Invalid request. |  -  |
**401** | The request could not be authorized. |  -  |
**404** | The requested resource was not found. |  -  |
**500** | The request could not be completed due to an internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


