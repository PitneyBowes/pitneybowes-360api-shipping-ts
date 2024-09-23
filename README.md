## @pitneybowes/360api-shipping@1.0.0

PitneyBowes API 360 typescript client.

You must have a developer account with PitneyBowes to use our API. With a developer account you get a ClientID and Secret which can be used to generate Bearer Token for API authentication as explained below.


### Install

```
npm install @pitneybowes/360api-shipping@1.0.0 --save
```

### Authentication

This typescript client can be used to consume APIs from either our **sandbox** or **production** environments.

**sandbox**: `https://api-sandbox.sendpro360.pitneybowes.com`

**production**: `https://api.sendpro360.pitneybowes.com`

To use the API, generate a Bearer Token for the respective environment.

```sh
const resp = await fetch(
  `https://api-sandbox.sendpro360.pitneybowes.com/auth/api/v1/token`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa('<ClientID>:<Secret>')
    }
  }
);

const data = await resp.json();

// token response
console.log(data);

```

### Usage

To call a specific operation, refer to the details below

```sh
// import root module as shipping
import * as shipping from "@pitneybowes/360api-shipping"

// fetch and return bearer token
const resolveToken = async () => {
    const token = 'BEARER_TOKEN_STRING'
    return Promise.resolve(token)
}

// create configuration
const configuration = shipping.createConfiguration({
    baseServer: shipping.servers[0],  // 0=sandbox (default), 1=production
    authMethods: {
        bearerAuth: {
          tokenProvider: {
            getToken: async () => await resolveToken(),
          },
        },
    },
});

// example showing usage of ShipmentApi
const api = new shipping.ShipmentApi(configuration)
const response: shipping.GetCarrierAccounts200Response  = await api.getCarrierAccounts()
console.log(response.carrierAccounts)

```

## Documentation for API Endpoints

All URIs are relative to *https://api-sandbox.sendpro360.pitneybowes.com/shipping*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AddressApi* | [**addressSuggest**](AddressApi.md#addresssuggest) | **POST** /api/v1/address/suggest | Address Suggest
*AddressApi* | [**addressValidate**](AddressApi.md#addressvalidate) | **POST** /api/v1/address/verify | Address Validate
*BatchApi* | [**bulkImportAPI**](BatchApi.md#bulkimportapi) | **POST** /api/v1/shipments/importUrl | Bulk Import Shipments
*BatchApi* | [**bulkImportAPIERR**](BatchApi.md#bulkimportapierr) | **POST** /api/v1/err/shipments/importUrl | Bulk Import Shipments ERR
*BatchApi* | [**createBulkShipmentsAPI**](BatchApi.md#createbulkshipmentsapi) | **POST** /api/v1/bulkShipments | Create Bulk Shipments
*BatchApi* | [**createBulkShipmentsAPIERR**](BatchApi.md#createbulkshipmentsapierr) | **POST** /api/v1/err/bulkShipments | Create Bulk Shipments ERR
*BatchApi* | [**getBatchStatusAPI**](BatchApi.md#getbatchstatusapi) | **GET** /api/v1/shipments/batch/{batchId}/status | Get Batch Status
*BatchApi* | [**getShipmentDetailsForBatchAPI**](BatchApi.md#getshipmentdetailsforbatchapi) | **GET** /api/v1/shipments/batch/{batchId}/shipments | Get Batch Shipment Details
*BatchApi* | [**processBatchAPI**](BatchApi.md#processbatchapi) | **POST** /api/v1/shipments/batch/{batchId}/process | Process Batch
*BatchApi* | [**voidShippingLabel**](BatchApi.md#voidshippinglabel) | **POST** /api/v1/shipments/batch/{batchId}/void | Void Batch Shipping Labels
*DefaultsApi* | [**createDefaults**](DefaultsApi.md#createdefaults) | **POST** /api/v1/defaults | Create Defaults
*DefaultsApi* | [**deleteDefaultsById**](DefaultsApi.md#deletedefaultsbyid) | **DELETE** /api/v1/defaults/{defaultID} | Delete Defaults by ID
*DefaultsApi* | [**getAllDefaults**](DefaultsApi.md#getalldefaults) | **GET** /api/v1/defaults | Get All Defaults
*DefaultsApi* | [**getDefaultsById**](DefaultsApi.md#getdefaultsbyid) | **GET** /api/v1/defaults/{defaultID} | Get Defaults By ID
*DefaultsApi* | [**putDefaultsById**](DefaultsApi.md#putdefaultsbyid) | **PUT** /api/v1/defaults/{defaultID} | Update Defaults
*ManifestApi* | [**createManifest**](ManifestApi.md#createmanifest) | **POST** /api/v1/manifests | Create Manifest
*ManifestApi* | [**reprintManifest**](ManifestApi.md#reprintmanifest) | **POST** /api/v1/manifests/reprint | Reprint manifest
*MultipieceApi* | [**multipieceRates**](MultipieceApi.md#multipiecerates) | **POST** /api/v1/multipiece/rates | Multipiece Rateshop and Rates
*MultipieceApi* | [**multipieceShipment**](MultipieceApi.md#multipieceshipment) | **POST** /api/v1/multipiece/shipments | Multipiece Shipment
*MultipieceApi* | [**multipieceShipmentCancel**](MultipieceApi.md#multipieceshipmentcancel) | **PUT** /api/v1/multipiece/shipments/{shipmentId}/cancel | Cancel Multipiece Shipment
*MultipieceApi* | [**multipieceShipmentReprint**](MultipieceApi.md#multipieceshipmentreprint) | **GET** /api/v1/multipiece/shipments/{shipmentId}/reprint | Reprint Multipiece Shipment
*PickupsApi* | [**cancelPickups**](PickupsApi.md#cancelpickups) | **PUT** /api/v1/pickups/cancel | Cancel Pickups
*PickupsApi* | [**cancelledPickupDocument**](PickupsApi.md#cancelledpickupdocument) | **POST** /api/v1/pickups/document | Cancelled Pickup Document
*PickupsApi* | [**getPickupDocument**](PickupsApi.md#getpickupdocument) | **GET** /api/v1/pickups/{pickupId}/document | Get Pickup Document
*PickupsApi* | [**getPickups**](PickupsApi.md#getpickups) | **GET** /api/v1/pickups | Get Pickups
*PickupsApi* | [**schedulePickup**](PickupsApi.md#schedulepickup) | **POST** /api/v1/pickups | Schedule Pickup
*PrintApi* | [**deletePrinterMapping**](PrintApi.md#deleteprintermapping) | **DELETE** /api/v1/printer/mapping | Delete Printer mapping
*PrintApi* | [**getPrinterMapping**](PrintApi.md#getprintermapping) | **GET** /api/v1/printer/mapping | Get Printer mapping
*PrintApi* | [**jobStatus**](PrintApi.md#jobstatus) | **GET** /api/v1/jobs/{jobId} | Job status
*PrintApi* | [**printDocument**](PrintApi.md#printdocument) | **POST** /api/v1/document/print | Print Document
*PrintApi* | [**printerMapping**](PrintApi.md#printermapping) | **POST** /api/v1/printer/mapping | Printer mapping
*ShipmentApi* | [**cancelShipmentById**](ShipmentApi.md#cancelshipmentbyid) | **PUT** /api/v1/shipments/{shipmentId}/cancel | Cancel Shipment
*ShipmentApi* | [**cancelStampsERR**](ShipmentApi.md#cancelstampserr) | **POST** /api/v1/err/stamps/void | Cancel Stamps ERR
*ShipmentApi* | [**createReturnLabel**](ShipmentApi.md#createreturnlabel) | **POST** /api/v1/shipments/{shipmentId}/return | Create Return label shipment
*ShipmentApi* | [**createShipment**](ShipmentApi.md#createshipment) | **POST** /api/v1/shipments | Create Shipment
*ShipmentApi* | [**downloadBpodFiles**](ShipmentApi.md#downloadbpodfiles) | **POST** /api/v1/err/shipments/bpod | Download BPOD Files
*ShipmentApi* | [**getAllShipments**](ShipmentApi.md#getallshipments) | **GET** /api/v1/shipments | Get All Shipments
*ShipmentApi* | [**getCarrierAccounts**](ShipmentApi.md#getcarrieraccounts) | **GET** /api/v1/carrierAccounts | Get Carrier Accounts
*ShipmentApi* | [**getCarriers**](ShipmentApi.md#getcarriers) | **GET** /api/v1/carriers | Get Carriers
*ShipmentApi* | [**getCountries**](ShipmentApi.md#getcountries) | **GET** /api/v1/countries | Get Countries
*ShipmentApi* | [**getParcelTypes**](ShipmentApi.md#getparceltypes) | **GET** /api/v1/parcelTypes | Get Parcel Types
*ShipmentApi* | [**getRates**](ShipmentApi.md#getrates) | **POST** /api/v1/rates | Rate Shop and Get Single Rate
*ShipmentApi* | [**getServices**](ShipmentApi.md#getservices) | **GET** /api/v1/services | Get Services
*ShipmentApi* | [**getSignatureImageERR**](ShipmentApi.md#getsignatureimageerr) | **GET** /api/v1/err/shipments/{shipmentId}/signaturefile | Signature Image ERR
*ShipmentApi* | [**getSpecialServices**](ShipmentApi.md#getspecialservices) | **GET** /api/v1/specialServices | Get Special Services
*ShipmentApi* | [**reprintShipmentById**](ShipmentApi.md#reprintshipmentbyid) | **GET** /api/v1/shipments/{shipmentId}/reprint | Reprint Shipment
*ShipmentApi* | [**shipmentById**](ShipmentApi.md#shipmentbyid) | **GET** /api/v1/shipments/{shipmentId} | Get Shipment by Id
*ShipmentByRateShopApi* | [**cancelShipmentByIdV2**](ShipmentByRateShopApi.md#cancelshipmentbyidv2) | **POST** /api/v2/shipments/cancel | Cancel Shipment
*ShipmentByRateShopApi* | [**createShipmentV2**](ShipmentByRateShopApi.md#createshipmentv2) | **POST** /api/v2/shipments | Create Shipment
*ShipmentByRateShopApi* | [**reprintShipmentByIdV2**](ShipmentByRateShopApi.md#reprintshipmentbyidv2) | **POST** /api/v2/shipments/reprint | Reprint Shipment

