import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { Address } from '../models/Address';
import { AddressCountStatus } from '../models/AddressCountStatus';
import { AddressSuggestRequest } from '../models/AddressSuggestRequest';
import { AddressSuggestRequestAddress } from '../models/AddressSuggestRequestAddress';
import { AddressSuggestResponse } from '../models/AddressSuggestResponse';
import { AddressSuggestResponseAddress } from '../models/AddressSuggestResponseAddress';
import { AddressSuggestResponseSuggestions } from '../models/AddressSuggestResponseSuggestions';
import { AddressSuggestResponseSuggestionsAddressesInner } from '../models/AddressSuggestResponseSuggestionsAddressesInner';
import { AddressValidateRequest } from '../models/AddressValidateRequest';
import { AddressValidateResponse } from '../models/AddressValidateResponse';
import { AllDefaults } from '../models/AllDefaults';
import { AllDefaultsDataInner } from '../models/AllDefaultsDataInner';
import { AllDefaultsPageInfo } from '../models/AllDefaultsPageInfo';
import { BPODDownloadRequest } from '../models/BPODDownloadRequest';
import { BPODDownloadResponse } from '../models/BPODDownloadResponse';
import { BulkShipmentResponse } from '../models/BulkShipmentResponse';
import { BulkShipmentResponseERR } from '../models/BulkShipmentResponseERR';
import { BulkShipmentResponseERRLabelDetails } from '../models/BulkShipmentResponseERRLabelDetails';
import { BulkShipmentResponseERRLabelDetailsLayout } from '../models/BulkShipmentResponseERRLabelDetailsLayout';
import { ByCarrierV2 } from '../models/ByCarrierV2';
import { CancelShipment } from '../models/CancelShipment';
import { CancelShipmentV2 } from '../models/CancelShipmentV2';
import { CancelShipmentV2References } from '../models/CancelShipmentV2References';
import { CancelStampsRequestERR } from '../models/CancelStampsRequestERR';
import { CancelStampsResponseERR } from '../models/CancelStampsResponseERR';
import { Carriers } from '../models/Carriers';
import { CarriersCarriersInner } from '../models/CarriersCarriersInner';
import { CarriersCarriersInnerProperties } from '../models/CarriersCarriersInnerProperties';
import { CounterStatus } from '../models/CounterStatus';
import { CountriesInner } from '../models/CountriesInner';
import { CreateBatchRequest } from '../models/CreateBatchRequest';
import { CreateBatchRequestERR } from '../models/CreateBatchRequestERR';
import { CreateBulkShipmentInternational } from '../models/CreateBulkShipmentInternational';
import { CreateBulkShipments } from '../models/CreateBulkShipments';
import { CreateBulkShipmentsAPIERRRequest } from '../models/CreateBulkShipmentsAPIERRRequest';
import { CreateBulkShipmentsAPIRequest } from '../models/CreateBulkShipmentsAPIRequest';
import { CreateBulkShipmentsERRCoversheet } from '../models/CreateBulkShipmentsERRCoversheet';
import { CreateBulkShipmentsERRLabel } from '../models/CreateBulkShipmentsERRLabel';
import { CreateDefaults } from '../models/CreateDefaults';
import { CreateDefaultsResponse } from '../models/CreateDefaultsResponse';
import { CreateManifest200Response } from '../models/CreateManifest200Response';
import { CreateManifestRequest } from '../models/CreateManifestRequest';
import { CreateManifestRequestFromAddress } from '../models/CreateManifestRequestFromAddress';
import { CreateShipment200Response } from '../models/CreateShipment200Response';
import { CreateShipmentRequest } from '../models/CreateShipmentRequest';
import { CreateShipmentV2Request } from '../models/CreateShipmentV2Request';
import { Customs } from '../models/Customs';
import { CustomsInfo } from '../models/CustomsInfo';
import { CustomsItem } from '../models/CustomsItem';
import { DefaultResponse } from '../models/DefaultResponse';
import { DocTabItem } from '../models/DocTabItem';
import { DomesticShipmentResponse } from '../models/DomesticShipmentResponse';
import { DomesticShipmentResponseFromAddress } from '../models/DomesticShipmentResponseFromAddress';
import { DomesticShipmentResponseLabelLayoutInner } from '../models/DomesticShipmentResponseLabelLayoutInner';
import { DomesticShipmentResponseRate } from '../models/DomesticShipmentResponseRate';
import { DomesticShipmentResponseRateSpecialServicesInner } from '../models/DomesticShipmentResponseRateSpecialServicesInner';
import { DomesticShipmentResponseRateSpecialServicesInnerInputParametersInner } from '../models/DomesticShipmentResponseRateSpecialServicesInnerInputParametersInner';
import { DomesticShipmentResponseToAddress } from '../models/DomesticShipmentResponseToAddress';
import { DomesticShipmentResponseV2 } from '../models/DomesticShipmentResponseV2';
import { DomesticShipmentResponseV2LabelLayoutInner } from '../models/DomesticShipmentResponseV2LabelLayoutInner';
import { DomesticShipmentResponseV2PrintError } from '../models/DomesticShipmentResponseV2PrintError';
import { Errors } from '../models/Errors';
import { ErrorsErrorsInner } from '../models/ErrorsErrorsInner';
import { FromAddress } from '../models/FromAddress';
import { FromAddressV2 } from '../models/FromAddressV2';
import { FromAddressV2Response } from '../models/FromAddressV2Response';
import { GetAllPickups } from '../models/GetAllPickups';
import { GetAllPickupsDataInner } from '../models/GetAllPickupsDataInner';
import { GetAllPickupsDataInnerPickupOptions } from '../models/GetAllPickupsDataInnerPickupOptions';
import { GetAllPickupsDataInnerPickupSummaryInner } from '../models/GetAllPickupsDataInnerPickupSummaryInner';
import { GetAllPickupsPageInfo } from '../models/GetAllPickupsPageInfo';
import { GetAllShipments } from '../models/GetAllShipments';
import { GetAllShipmentsDataInner } from '../models/GetAllShipmentsDataInner';
import { GetAllShipmentsDataInnerFromAddress } from '../models/GetAllShipmentsDataInnerFromAddress';
import { GetAllShipmentsDataInnerMetadataInner } from '../models/GetAllShipmentsDataInnerMetadataInner';
import { GetAllShipmentsDataInnerParcel } from '../models/GetAllShipmentsDataInnerParcel';
import { GetAllShipmentsDataInnerRate } from '../models/GetAllShipmentsDataInnerRate';
import { GetAllShipmentsDataInnerRateSpecialServicesInner } from '../models/GetAllShipmentsDataInnerRateSpecialServicesInner';
import { GetAllShipmentsDataInnerRateSpecialServicesInnerInputParametersInner } from '../models/GetAllShipmentsDataInnerRateSpecialServicesInnerInputParametersInner';
import { GetAllShipmentsDataInnerToAddress } from '../models/GetAllShipmentsDataInnerToAddress';
import { GetCarrierAccounts200Response } from '../models/GetCarrierAccounts200Response';
import { GetCarrierAccounts200ResponseCarrierAccountsInner } from '../models/GetCarrierAccounts200ResponseCarrierAccountsInner';
import { GetDefaultsById } from '../models/GetDefaultsById';
import { GetPickupCancelledDocumentRequest } from '../models/GetPickupCancelledDocumentRequest';
import { GetPickupCancelledDocumentResponse } from '../models/GetPickupCancelledDocumentResponse';
import { GetPickupDocument } from '../models/GetPickupDocument';
import { GetRates200Response } from '../models/GetRates200Response';
import { GetRatesRequest } from '../models/GetRatesRequest';
import { GetShipmentsForBatch } from '../models/GetShipmentsForBatch';
import { GetShipmentsForBatchDataInner } from '../models/GetShipmentsForBatchDataInner';
import { GetShipmentsForBatchDataInnerLabelLayout } from '../models/GetShipmentsForBatchDataInnerLabelLayout';
import { GetShipmentsForBatchDataInnerMetadataInner } from '../models/GetShipmentsForBatchDataInnerMetadataInner';
import { GetShipmentsForBatchDataInnerSpecialServicesInner } from '../models/GetShipmentsForBatchDataInnerSpecialServicesInner';
import { GetShipmentsForBatchDataInnerStepStatus } from '../models/GetShipmentsForBatchDataInnerStepStatus';
import { GetShipmentsForBatchPageInfo } from '../models/GetShipmentsForBatchPageInfo';
import { GetSingleShipment } from '../models/GetSingleShipment';
import { GetSingleShipmentFromAddress } from '../models/GetSingleShipmentFromAddress';
import { GetSingleShipmentRate } from '../models/GetSingleShipmentRate';
import { GetSingleShipmentRateSpecialServicesInner } from '../models/GetSingleShipmentRateSpecialServicesInner';
import { GetSingleShipmentRateSpecialServicesInnerInputParametersInner } from '../models/GetSingleShipmentRateSpecialServicesInnerInputParametersInner';
import { GetSingleShipmentToAddress } from '../models/GetSingleShipmentToAddress';
import { GetStatusDetailedResponse } from '../models/GetStatusDetailedResponse';
import { GetStatusDetailedResponseLabelDetails } from '../models/GetStatusDetailedResponseLabelDetails';
import { GetStatusDetailedResponseLabelDetailsResultsInner } from '../models/GetStatusDetailedResponseLabelDetailsResultsInner';
import { GetStatusDetailedResponseLabelDetailsResultsInnerShipmentIdentifiersInner } from '../models/GetStatusDetailedResponseLabelDetailsResultsInnerShipmentIdentifiersInner';
import { ImportCountStatus } from '../models/ImportCountStatus';
import { InternationalShipmentResponse } from '../models/InternationalShipmentResponse';
import { InternationalShipmentResponseCustoms } from '../models/InternationalShipmentResponseCustoms';
import { InternationalShipmentResponseCustomsCustomsInfo } from '../models/InternationalShipmentResponseCustomsCustomsInfo';
import { InternationalShipmentResponseCustomsCustomsItemsInner } from '../models/InternationalShipmentResponseCustomsCustomsItemsInner';
import { InternationalShipmentResponseRate } from '../models/InternationalShipmentResponseRate';
import { InternationalShipmentResponseRateSpecialServicesInner } from '../models/InternationalShipmentResponseRateSpecialServicesInner';
import { InternationalShipmentResponseRateSpecialServicesInnerInputParametersInner } from '../models/InternationalShipmentResponseRateSpecialServicesInnerInputParametersInner';
import { JobStatus } from '../models/JobStatus';
import { JobStatusPrintStatusTransactionInner } from '../models/JobStatusPrintStatusTransactionInner';
import { LabelGenerationCountStatus } from '../models/LabelGenerationCountStatus';
import { ManifestCompactResponse } from '../models/ManifestCompactResponse';
import { ManifestCompactResponseManifestDocumentsInner } from '../models/ManifestCompactResponseManifestDocumentsInner';
import { ManifestDetailedResponse } from '../models/ManifestDetailedResponse';
import { ManifestDetailedResponseFromAddress } from '../models/ManifestDetailedResponseFromAddress';
import { ManifestDetailedResponseManifestDocumentsInner } from '../models/ManifestDetailedResponseManifestDocumentsInner';
import { ModelError } from '../models/ModelError';
import { MultipieceDomesticShipmentRequest } from '../models/MultipieceDomesticShipmentRequest';
import { MultipieceDomesticShipmentRequestFromAddress } from '../models/MultipieceDomesticShipmentRequestFromAddress';
import { MultipieceDomesticShipmentRequestMetadataInner } from '../models/MultipieceDomesticShipmentRequestMetadataInner';
import { MultipieceDomesticShipmentRequestMultiPieceParcelsInner } from '../models/MultipieceDomesticShipmentRequestMultiPieceParcelsInner';
import { MultipieceDomesticShipmentRequestMultiPieceParcelsInnerParcel } from '../models/MultipieceDomesticShipmentRequestMultiPieceParcelsInnerParcel';
import { MultipieceDomesticShipmentRequestShipmentOptions } from '../models/MultipieceDomesticShipmentRequestShipmentOptions';
import { MultipieceDomesticShipmentRequestToAddress } from '../models/MultipieceDomesticShipmentRequestToAddress';
import { MultipieceDomesticShipmentResponse } from '../models/MultipieceDomesticShipmentResponse';
import { MultipieceDomesticShipmentResponseLabelLayoutInner } from '../models/MultipieceDomesticShipmentResponseLabelLayoutInner';
import { MultipieceDomesticShipmentResponseMultiPieceRatesInner } from '../models/MultipieceDomesticShipmentResponseMultiPieceRatesInner';
import { MultipieceDomesticShipmentResponseMultiPieceRatesInnerMultiPieceParcelsInner } from '../models/MultipieceDomesticShipmentResponseMultiPieceRatesInnerMultiPieceParcelsInner';
import { MultipieceDomesticShipmentResponseMultiPieceRatesInnerMultiPieceParcelsInnerParcel } from '../models/MultipieceDomesticShipmentResponseMultiPieceRatesInnerMultiPieceParcelsInnerParcel';
import { MultipieceDomesticShipmentResponseMultiPieceRatesInnerMultiPieceParcelsInnerParcelRate } from '../models/MultipieceDomesticShipmentResponseMultiPieceRatesInnerMultiPieceParcelsInnerParcelRate';
import { MultipieceDomesticShipmentResponseMultiPieceRatesInnerMultiPieceParcelsInnerParcelRateSurchargesInner } from '../models/MultipieceDomesticShipmentResponseMultiPieceRatesInnerMultiPieceParcelsInnerParcelRateSurchargesInner';
import { MultipieceDomesticShipmentResponseMultiPieceRatesInnerSurchargesInner } from '../models/MultipieceDomesticShipmentResponseMultiPieceRatesInnerSurchargesInner';
import { MultipieceInternationalShipmentRequest } from '../models/MultipieceInternationalShipmentRequest';
import { MultipieceInternationalShipmentRequestCustoms } from '../models/MultipieceInternationalShipmentRequestCustoms';
import { MultipieceInternationalShipmentRequestCustomsCustomsInfo } from '../models/MultipieceInternationalShipmentRequestCustomsCustomsInfo';
import { MultipieceInternationalShipmentRequestMultiPieceParcelsInner } from '../models/MultipieceInternationalShipmentRequestMultiPieceParcelsInner';
import { MultipieceInternationalShipmentRequestMultiPieceParcelsInnerParcel } from '../models/MultipieceInternationalShipmentRequestMultiPieceParcelsInnerParcel';
import { MultipieceInternationalShipmentRequestToAddress } from '../models/MultipieceInternationalShipmentRequestToAddress';
import { MultipieceInternationalShipmentResponse } from '../models/MultipieceInternationalShipmentResponse';
import { MultipieceInternationalShipmentResponseCustoms } from '../models/MultipieceInternationalShipmentResponseCustoms';
import { MultipieceInternationalShipmentResponseCustomsCustomsInfo } from '../models/MultipieceInternationalShipmentResponseCustomsCustomsInfo';
import { MultipieceRateShopRequest } from '../models/MultipieceRateShopRequest';
import { MultipieceRateShopRequestMultiPieceParcelsInner } from '../models/MultipieceRateShopRequestMultiPieceParcelsInner';
import { MultipieceRateShopRequestMultiPieceParcelsInnerParcel } from '../models/MultipieceRateShopRequestMultiPieceParcelsInnerParcel';
import { MultipieceRateShopResponse } from '../models/MultipieceRateShopResponse';
import { MultipieceRateShopResponseErrorsInner } from '../models/MultipieceRateShopResponseErrorsInner';
import { MultipieceRateShopResponseRatesInner } from '../models/MultipieceRateShopResponseRatesInner';
import { MultipieceRateShopResponseRatesInnerMultiPieceParcelsInner } from '../models/MultipieceRateShopResponseRatesInnerMultiPieceParcelsInner';
import { MultipieceRateShopResponseRatesInnerMultiPieceParcelsInnerParcelRate } from '../models/MultipieceRateShopResponseRatesInnerMultiPieceParcelsInnerParcelRate';
import { MultipieceRates200Response } from '../models/MultipieceRates200Response';
import { MultipieceRatesRequest } from '../models/MultipieceRatesRequest';
import { MultipieceRatesRequestFromAddress } from '../models/MultipieceRatesRequestFromAddress';
import { MultipieceRatesRequestMultiPieceParcelsInner } from '../models/MultipieceRatesRequestMultiPieceParcelsInner';
import { MultipieceRatesRequestMultiPieceParcelsInnerParcel } from '../models/MultipieceRatesRequestMultiPieceParcelsInnerParcel';
import { MultipieceRatesRequestToAddress } from '../models/MultipieceRatesRequestToAddress';
import { MultipieceRatesResponse } from '../models/MultipieceRatesResponse';
import { MultipieceRatesResponseRatesInner } from '../models/MultipieceRatesResponseRatesInner';
import { MultipieceRatesResponseRatesInnerMultiPieceParcelsInner } from '../models/MultipieceRatesResponseRatesInnerMultiPieceParcelsInner';
import { MultipieceRatesResponseRatesInnerMultiPieceParcelsInnerParcel } from '../models/MultipieceRatesResponseRatesInnerMultiPieceParcelsInnerParcel';
import { MultipieceRatesResponseRatesInnerMultiPieceParcelsInnerParcelRate } from '../models/MultipieceRatesResponseRatesInnerMultiPieceParcelsInnerParcelRate';
import { MultipieceRatesResponseRatesInnerMultiPieceParcelsInnerParcelRateSurchargesInner } from '../models/MultipieceRatesResponseRatesInnerMultiPieceParcelsInnerParcelRateSurchargesInner';
import { MultipieceRatesResponseRatesInnerSurchargesInner } from '../models/MultipieceRatesResponseRatesInnerSurchargesInner';
import { MultipieceShipment200Response } from '../models/MultipieceShipment200Response';
import { MultipieceShipmentRequest } from '../models/MultipieceShipmentRequest';
import { NotFoundErrors } from '../models/NotFoundErrors';
import { NotFoundErrorsErrorsInner } from '../models/NotFoundErrorsErrorsInner';
import { Parameter } from '../models/Parameter';
import { Parcel } from '../models/Parcel';
import { ParcelTypesInner } from '../models/ParcelTypesInner';
import { ParcelTypesInnerBrandedDimensions } from '../models/ParcelTypesInnerBrandedDimensions';
import { ParcelTypesInnerDimensionRulesInner } from '../models/ParcelTypesInnerDimensionRulesInner';
import { ParcelTypesInnerDimensionRulesInnerMaxParcelDimensions } from '../models/ParcelTypesInnerDimensionRulesInnerMaxParcelDimensions';
import { ParcelTypesInnerDimensionRulesInnerMinParcelDimensions } from '../models/ParcelTypesInnerDimensionRulesInnerMinParcelDimensions';
import { ParcelTypesInnerWeightRulesInner } from '../models/ParcelTypesInnerWeightRulesInner';
import { ParcelV2 } from '../models/ParcelV2';
import { ParcelV2Response } from '../models/ParcelV2Response';
import { PrintDocumentRequest } from '../models/PrintDocumentRequest';
import { PrintDocumentRequestReference } from '../models/PrintDocumentRequestReference';
import { PrintDocumentResponse } from '../models/PrintDocumentResponse';
import { PrinterMappingGetResponse } from '../models/PrinterMappingGetResponse';
import { PrinterMappingRequest } from '../models/PrinterMappingRequest';
import { PrinterMappingResponse } from '../models/PrinterMappingResponse';
import { ProcessShipmentResponse } from '../models/ProcessShipmentResponse';
import { RateResponseV2 } from '../models/RateResponseV2';
import { RateResponseV2DeliveryCommitment } from '../models/RateResponseV2DeliveryCommitment';
import { RateResponseV2SurchargesInner } from '../models/RateResponseV2SurchargesInner';
import { RateShop } from '../models/RateShop';
import { RateShopFromAddress } from '../models/RateShopFromAddress';
import { RateShopParcel } from '../models/RateShopParcel';
import { RateShopResponse } from '../models/RateShopResponse';
import { RateShopResponseErrorsInner } from '../models/RateShopResponseErrorsInner';
import { RateShopResponseFromAddress } from '../models/RateShopResponseFromAddress';
import { RateShopResponseParcel } from '../models/RateShopResponseParcel';
import { RateShopResponseRatesInner } from '../models/RateShopResponseRatesInner';
import { RateShopResponseRatesInnerDeliveryCommitment } from '../models/RateShopResponseRatesInnerDeliveryCommitment';
import { RateShopResponseRatesInnerSurchargesInner } from '../models/RateShopResponseRatesInnerSurchargesInner';
import { RateShopResponseToAddress } from '../models/RateShopResponseToAddress';
import { RatingCountStatus } from '../models/RatingCountStatus';
import { RatingCountStatusERR } from '../models/RatingCountStatusERR';
import { ReferenceV2 } from '../models/ReferenceV2';
import { ReprintManifestRequest } from '../models/ReprintManifestRequest';
import { ReprintShipment } from '../models/ReprintShipment';
import { ReprintShipmentFromAddress } from '../models/ReprintShipmentFromAddress';
import { ReprintShipmentParcel } from '../models/ReprintShipmentParcel';
import { ReprintShipmentRate } from '../models/ReprintShipmentRate';
import { ReprintShipmentRateSpecialServicesInner } from '../models/ReprintShipmentRateSpecialServicesInner';
import { ReprintShipmentToAddress } from '../models/ReprintShipmentToAddress';
import { ReprintShipmentV2 } from '../models/ReprintShipmentV2';
import { ReprintShipmentV2LabelLayoutInner } from '../models/ReprintShipmentV2LabelLayoutInner';
import { ReturnLabel } from '../models/ReturnLabel';
import { ReturnLabelFromAddress } from '../models/ReturnLabelFromAddress';
import { ReturnLabelResponse } from '../models/ReturnLabelResponse';
import { ReturnLabelResponseLabelLayoutInner } from '../models/ReturnLabelResponseLabelLayoutInner';
import { ReturnLabelResponseRate } from '../models/ReturnLabelResponseRate';
import { ReturnLabelResponseRateSpecialServicesInner } from '../models/ReturnLabelResponseRateSpecialServicesInner';
import { ReturnLabelResponseRateSpecialServicesInnerInputParametersInner } from '../models/ReturnLabelResponseRateSpecialServicesInnerInputParametersInner';
import { ReturnLabelResponseRateSurchargesInner } from '../models/ReturnLabelResponseRateSurchargesInner';
import { ReturnLabelResponseToAddress } from '../models/ReturnLabelResponseToAddress';
import { ReturnLabelSpecialServicesInner } from '../models/ReturnLabelSpecialServicesInner';
import { ReturnLabelSpecialServicesInnerInputParametersInner } from '../models/ReturnLabelSpecialServicesInnerInputParametersInner';
import { ReturnLabelToAddress } from '../models/ReturnLabelToAddress';
import { SchedulePickup200Response } from '../models/SchedulePickup200Response';
import { SchedulePickupCancelRequest } from '../models/SchedulePickupCancelRequest';
import { SchedulePickupCancelRequestOptionsInner } from '../models/SchedulePickupCancelRequestOptionsInner';
import { SchedulePickupCancelResponse } from '../models/SchedulePickupCancelResponse';
import { SchedulePickupCancelResponsePickups } from '../models/SchedulePickupCancelResponsePickups';
import { SchedulePickupCancelResponsePickupsUPS10191697701340901 } from '../models/SchedulePickupCancelResponsePickupsUPS10191697701340901';
import { SchedulePickupDHLEXPRequest } from '../models/SchedulePickupDHLEXPRequest';
import { SchedulePickupDHLEXPRequestPickupAddress } from '../models/SchedulePickupDHLEXPRequestPickupAddress';
import { SchedulePickupDHLEXPRequestPickupOptions } from '../models/SchedulePickupDHLEXPRequestPickupOptions';
import { SchedulePickupDHLEXPRequestPickupSummaryInner } from '../models/SchedulePickupDHLEXPRequestPickupSummaryInner';
import { SchedulePickupDHLEXPRequestPickupSummaryInnerPackageDetailsInner } from '../models/SchedulePickupDHLEXPRequestPickupSummaryInnerPackageDetailsInner';
import { SchedulePickupDHLEXPResponse } from '../models/SchedulePickupDHLEXPResponse';
import { SchedulePickupDHLEXPResponsePickupAddress } from '../models/SchedulePickupDHLEXPResponsePickupAddress';
import { SchedulePickupDHLEXPResponsePickupOptions } from '../models/SchedulePickupDHLEXPResponsePickupOptions';
import { SchedulePickupDHLEXPResponsePickupSummaryInner } from '../models/SchedulePickupDHLEXPResponsePickupSummaryInner';
import { SchedulePickupFedexRequest } from '../models/SchedulePickupFedexRequest';
import { SchedulePickupFedexRequestPickupOptions } from '../models/SchedulePickupFedexRequestPickupOptions';
import { SchedulePickupFedexRequestPickupSummaryInner } from '../models/SchedulePickupFedexRequestPickupSummaryInner';
import { SchedulePickupFedexResponse } from '../models/SchedulePickupFedexResponse';
import { SchedulePickupRequest } from '../models/SchedulePickupRequest';
import { SchedulePickupUPSRequest } from '../models/SchedulePickupUPSRequest';
import { SchedulePickupUPSRequestPickupOptions } from '../models/SchedulePickupUPSRequestPickupOptions';
import { SchedulePickupUPSRequestPickupSummaryInner } from '../models/SchedulePickupUPSRequestPickupSummaryInner';
import { SchedulePickupUPSResponse } from '../models/SchedulePickupUPSResponse';
import { SchedulePickupUPSResponsePickupOptions } from '../models/SchedulePickupUPSResponsePickupOptions';
import { SchedulePickupUPSResponsePickupRate } from '../models/SchedulePickupUPSResponsePickupRate';
import { SchedulePickupUPSResponsePickupRateSurchargesInner } from '../models/SchedulePickupUPSResponsePickupRateSurchargesInner';
import { SchedulePickupUPSResponsePickupSummaryInner } from '../models/SchedulePickupUPSResponsePickupSummaryInner';
import { SchedulePickupUSPSRequest } from '../models/SchedulePickupUSPSRequest';
import { SchedulePickupUSPSRequestPickupSummaryInner } from '../models/SchedulePickupUSPSRequestPickupSummaryInner';
import { SchedulePickupUSPSResponse } from '../models/SchedulePickupUSPSResponse';
import { SchedulePickupUSPSResponsePickupSummaryInner } from '../models/SchedulePickupUSPSResponsePickupSummaryInner';
import { SendingOptions } from '../models/SendingOptions';
import { SendingOptionsCarrierAccounts } from '../models/SendingOptionsCarrierAccounts';
import { SendingOptionsResponse } from '../models/SendingOptionsResponse';
import { SendingOptionsResponseCarrierAccounts } from '../models/SendingOptionsResponseCarrierAccounts';
import { ServicesInner } from '../models/ServicesInner';
import { Shipment } from '../models/Shipment';
import { ShipmentBatch } from '../models/ShipmentBatch';
import { ShipmentBatchResponseERR } from '../models/ShipmentBatchResponseERR';
import { ShipmentCancelV2 } from '../models/ShipmentCancelV2';
import { ShipmentDomestic } from '../models/ShipmentDomestic';
import { ShipmentDomesticByCarrier } from '../models/ShipmentDomesticByCarrier';
import { ShipmentDomesticByCarrierDeliveryOption } from '../models/ShipmentDomesticByCarrierDeliveryOption';
import { ShipmentDomesticByCarrierDocTab } from '../models/ShipmentDomesticByCarrierDocTab';
import { ShipmentDomesticByCarrierMetadataInner } from '../models/ShipmentDomesticByCarrierMetadataInner';
import { ShipmentDomesticByCarrierShipmentOptions } from '../models/ShipmentDomesticByCarrierShipmentOptions';
import { ShipmentDomesticByRateGroup } from '../models/ShipmentDomesticByRateGroup';
import { ShipmentDomesticByRateGroupByRateGroup } from '../models/ShipmentDomesticByRateGroupByRateGroup';
import { ShipmentDomesticByRateGroupMetadataInner } from '../models/ShipmentDomesticByRateGroupMetadataInner';
import { ShipmentDomesticByRateGroupShipmentOptions } from '../models/ShipmentDomesticByRateGroupShipmentOptions';
import { ShipmentDomesticByRuleset } from '../models/ShipmentDomesticByRuleset';
import { ShipmentDomesticByRulesetByRuleSet } from '../models/ShipmentDomesticByRulesetByRuleSet';
import { ShipmentDomesticByRulesetDeliveryOption } from '../models/ShipmentDomesticByRulesetDeliveryOption';
import { ShipmentDomesticByRulesetMetadataInner } from '../models/ShipmentDomesticByRulesetMetadataInner';
import { ShipmentDomesticByRulesetShipmentOptions } from '../models/ShipmentDomesticByRulesetShipmentOptions';
import { ShipmentDomesticFromAddress } from '../models/ShipmentDomesticFromAddress';
import { ShipmentDomesticMetadataInner } from '../models/ShipmentDomesticMetadataInner';
import { ShipmentDomesticParcel } from '../models/ShipmentDomesticParcel';
import { ShipmentDomesticToAddress } from '../models/ShipmentDomesticToAddress';
import { ShipmentERR } from '../models/ShipmentERR';
import { ShipmentERRCoversheet } from '../models/ShipmentERRCoversheet';
import { ShipmentERRCoversheetMetadataInner } from '../models/ShipmentERRCoversheetMetadataInner';
import { ShipmentERRMetadataInner } from '../models/ShipmentERRMetadataInner';
import { ShipmentInternational } from '../models/ShipmentInternational';
import { ShipmentInternationalCustoms } from '../models/ShipmentInternationalCustoms';
import { ShipmentInternationalCustomsCustomsInfo } from '../models/ShipmentInternationalCustomsCustomsInfo';
import { ShipmentInternationalCustomsCustomsItemsInner } from '../models/ShipmentInternationalCustomsCustomsItemsInner';
import { ShipmentInternationalFromAddress } from '../models/ShipmentInternationalFromAddress';
import { ShipmentInternationalMetadataInner } from '../models/ShipmentInternationalMetadataInner';
import { ShipmentInternationalParcel } from '../models/ShipmentInternationalParcel';
import { ShipmentInternationalToAddress } from '../models/ShipmentInternationalToAddress';
import { ShipmentMetadataInner } from '../models/ShipmentMetadataInner';
import { ShipmentOptions } from '../models/ShipmentOptions';
import { ShipmentOptionsERR } from '../models/ShipmentOptionsERR';
import { ShipmentOptionsV2 } from '../models/ShipmentOptionsV2';
import { ShipmentReprintV2 } from '../models/ShipmentReprintV2';
import { ShipmentReprintV2References } from '../models/ShipmentReprintV2References';
import { ShipmentToAddress } from '../models/ShipmentToAddress';
import { SignatureFileResponse } from '../models/SignatureFileResponse';
import { SingleRate } from '../models/SingleRate';
import { SingleRateFromAddress } from '../models/SingleRateFromAddress';
import { SingleRateParcel } from '../models/SingleRateParcel';
import { SingleRateResponse } from '../models/SingleRateResponse';
import { SingleRateResponseFromAddress } from '../models/SingleRateResponseFromAddress';
import { SingleRateResponseParcel } from '../models/SingleRateResponseParcel';
import { SingleRateResponseRatesInner } from '../models/SingleRateResponseRatesInner';
import { SingleRateResponseRatesInnerSpecialServicesInner } from '../models/SingleRateResponseRatesInnerSpecialServicesInner';
import { SingleRateResponseToAddress } from '../models/SingleRateResponseToAddress';
import { SingleRateToAddress } from '../models/SingleRateToAddress';
import { SpecialService } from '../models/SpecialService';
import { SpecialServiceBatch } from '../models/SpecialServiceBatch';
import { SpecialServiceBatchERR } from '../models/SpecialServiceBatchERR';
import { SpecialServiceERRInner } from '../models/SpecialServiceERRInner';
import { SpecialServices } from '../models/SpecialServices';
import { SpecialServicesServicesInner } from '../models/SpecialServicesServicesInner';
import { SpecialServicesServicesInnerParcelTypeRulesInner } from '../models/SpecialServicesServicesInnerParcelTypeRulesInner';
import { SpecialServicesServicesInnerParcelTypeRulesInnerSpecialServiceRulesInner } from '../models/SpecialServicesServicesInnerParcelTypeRulesInnerSpecialServiceRulesInner';
import { SpecialServicesServicesInnerParcelTypeRulesInnerSpecialServiceRulesInnerInputParameterRulesInner } from '../models/SpecialServicesServicesInnerParcelTypeRulesInnerSpecialServiceRulesInnerInputParameterRulesInner';
import { SpecialServicesServicesInnerParcelTypeRulesInnerSpecialServiceRulesInnerPrerequisiteRulesInner } from '../models/SpecialServicesServicesInnerParcelTypeRulesInnerSpecialServiceRulesInnerPrerequisiteRulesInner';
import { ToAddress } from '../models/ToAddress';
import { ToAddressV2 } from '../models/ToAddressV2';
import { ToAddressV2Response } from '../models/ToAddressV2Response';
import { VoidBatchRequest } from '../models/VoidBatchRequest';
import { VoidBatchResponse } from '../models/VoidBatchResponse';
import { VoidCountStatus } from '../models/VoidCountStatus';

import { AddressApiRequestFactory, AddressApiResponseProcessor} from "../apis/AddressApi";
export class ObservableAddressApi {
    private requestFactory: AddressApiRequestFactory;
    private responseProcessor: AddressApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AddressApiRequestFactory,
        responseProcessor?: AddressApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AddressApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AddressApiResponseProcessor();
    }

    /**
     * This operation displays a valid address to match the entered address, only if the address does not seem valid to the system address map. User can select the suggested address or edit the entered address to make it valid.
     * Address Suggest
     * @param addressSuggestRequest 
     */
    public addressSuggestWithHttpInfo(addressSuggestRequest: AddressSuggestRequest, _options?: Configuration): Observable<HttpInfo<AddressSuggestResponse>> {
        const requestContextPromise = this.requestFactory.addressSuggest(addressSuggestRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addressSuggestWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation displays a valid address to match the entered address, only if the address does not seem valid to the system address map. User can select the suggested address or edit the entered address to make it valid.
     * Address Suggest
     * @param addressSuggestRequest 
     */
    public addressSuggest(addressSuggestRequest: AddressSuggestRequest, _options?: Configuration): Observable<AddressSuggestResponse> {
        return this.addressSuggestWithHttpInfo(addressSuggestRequest, _options).pipe(map((apiResponse: HttpInfo<AddressSuggestResponse>) => apiResponse.data));
    }

    /**
     * This operation validates address. This improves postal addresses within the country (e.g., United States) to help ensure that parcels are rated accurately and shipments arrive at the final destination on time.<br> The verify address operation sends an address to be verified. The response indicates whether the address is valid.
     * Address Validate
     * @param addressValidateRequest 
     * @param minimalAddressValidation If true, then only City, State, and PostalCode (zip) are validated. This option is specific for US domestic addresses only.
     */
    public addressValidateWithHttpInfo(addressValidateRequest: AddressValidateRequest, minimalAddressValidation?: boolean, _options?: Configuration): Observable<HttpInfo<AddressValidateResponse>> {
        const requestContextPromise = this.requestFactory.addressValidate(addressValidateRequest, minimalAddressValidation, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addressValidateWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation validates address. This improves postal addresses within the country (e.g., United States) to help ensure that parcels are rated accurately and shipments arrive at the final destination on time.<br> The verify address operation sends an address to be verified. The response indicates whether the address is valid.
     * Address Validate
     * @param addressValidateRequest 
     * @param minimalAddressValidation If true, then only City, State, and PostalCode (zip) are validated. This option is specific for US domestic addresses only.
     */
    public addressValidate(addressValidateRequest: AddressValidateRequest, minimalAddressValidation?: boolean, _options?: Configuration): Observable<AddressValidateResponse> {
        return this.addressValidateWithHttpInfo(addressValidateRequest, minimalAddressValidation, _options).pipe(map((apiResponse: HttpInfo<AddressValidateResponse>) => apiResponse.data));
    }

}

import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";
export class ObservableBatchApi {
    private requestFactory: BatchApiRequestFactory;
    private responseProcessor: BatchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BatchApiRequestFactory,
        responseProcessor?: BatchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BatchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BatchApiResponseProcessor();
    }

    /**
     * This operation imports the .CSV file, which includes all the required fields to create shipments in bulk. The payload contains information about the shipments you want to import, such as `carrier account`, `label layout`, `service`, and any `special services` required for the shipments. After batch is submitted, user needs to upload csv file of shipment transactions to the uploadURL returned in response.
     * Bulk Import Shipments
     * @param body  This is the Request body to bulk import shipments.
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public bulkImportAPIWithHttpInfo(body: CreateBatchRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<HttpInfo<ShipmentBatch>> {
        const requestContextPromise = this.requestFactory.bulkImportAPI(body, xPBDeveloperPartnerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bulkImportAPIWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation imports the .CSV file, which includes all the required fields to create shipments in bulk. The payload contains information about the shipments you want to import, such as `carrier account`, `label layout`, `service`, and any `special services` required for the shipments. After batch is submitted, user needs to upload csv file of shipment transactions to the uploadURL returned in response.
     * Bulk Import Shipments
     * @param body  This is the Request body to bulk import shipments.
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public bulkImportAPI(body: CreateBatchRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<ShipmentBatch> {
        return this.bulkImportAPIWithHttpInfo(body, xPBDeveloperPartnerID, _options).pipe(map((apiResponse: HttpInfo<ShipmentBatch>) => apiResponse.data));
    }

    /**
     * This operation imports the .CSV file which includes fields required for creating ERR (Electronic Return Receipt) Bulk Shipments.    The payload, which is used for shipment transactions, contains the following essential information in .CSV file:   - Carrier Account   - Output format: Shipping Label and Coversheet    - Services, and   - Special Services     The above-mentioned information are stored in AWS-S3 which in turn provides URL to users. When Batch is submitted, S3 returned URL along with .CSV file are uploaded, which generates BatchID.    The same BatchID is used to track the status of BulkImport. 
     * Bulk Import Shipments ERR
     * @param body  This is the request body to import ERR Bulk shipments.
     * @param xPBDeveloperPartnerID The PB-Developer-Partner-ID is assigned by PB to uniquely identify a developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     */
    public bulkImportAPIERRWithHttpInfo(body: CreateBatchRequestERR, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<HttpInfo<ShipmentBatchResponseERR>> {
        const requestContextPromise = this.requestFactory.bulkImportAPIERR(body, xPBDeveloperPartnerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bulkImportAPIERRWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation imports the .CSV file which includes fields required for creating ERR (Electronic Return Receipt) Bulk Shipments.    The payload, which is used for shipment transactions, contains the following essential information in .CSV file:   - Carrier Account   - Output format: Shipping Label and Coversheet    - Services, and   - Special Services     The above-mentioned information are stored in AWS-S3 which in turn provides URL to users. When Batch is submitted, S3 returned URL along with .CSV file are uploaded, which generates BatchID.    The same BatchID is used to track the status of BulkImport. 
     * Bulk Import Shipments ERR
     * @param body  This is the request body to import ERR Bulk shipments.
     * @param xPBDeveloperPartnerID The PB-Developer-Partner-ID is assigned by PB to uniquely identify a developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     */
    public bulkImportAPIERR(body: CreateBatchRequestERR, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<ShipmentBatchResponseERR> {
        return this.bulkImportAPIERRWithHttpInfo(body, xPBDeveloperPartnerID, _options).pipe(map((apiResponse: HttpInfo<ShipmentBatchResponseERR>) => apiResponse.data));
    }

    /**
     * This operation creates a batch of bulk (larger quantities) shipments for single or multiple recipients. The shipments can be addressed to a single or multiple recipients with different combination of carrier, service special services and parcel type. `carrierAccountId`, `parcelType`, `serviceId` and `specialServices` are used as default when user do not wish to provide at shipment level. If user choose to provide these at Shipment level then it overrides the values provided at root level. At shipment level either you can wish to provide all of `carrierAccountId`, `parcelType`, `serviceId` and `specialServices` or not provide all of them if wants to use default ones from root level. If user do not provide any one out of `carrierAccountId`, `parcelType` and `serviceId` at shipment level it would result in validation error
     * Create Bulk Shipments
     * @param body This is the Request body to create bulk shipments.
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public createBulkShipmentsAPIWithHttpInfo(body: CreateBulkShipmentsAPIRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<HttpInfo<BulkShipmentResponse>> {
        const requestContextPromise = this.requestFactory.createBulkShipmentsAPI(body, xPBDeveloperPartnerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBulkShipmentsAPIWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation creates a batch of bulk (larger quantities) shipments for single or multiple recipients. The shipments can be addressed to a single or multiple recipients with different combination of carrier, service special services and parcel type. `carrierAccountId`, `parcelType`, `serviceId` and `specialServices` are used as default when user do not wish to provide at shipment level. If user choose to provide these at Shipment level then it overrides the values provided at root level. At shipment level either you can wish to provide all of `carrierAccountId`, `parcelType`, `serviceId` and `specialServices` or not provide all of them if wants to use default ones from root level. If user do not provide any one out of `carrierAccountId`, `parcelType` and `serviceId` at shipment level it would result in validation error
     * Create Bulk Shipments
     * @param body This is the Request body to create bulk shipments.
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public createBulkShipmentsAPI(body: CreateBulkShipmentsAPIRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<BulkShipmentResponse> {
        return this.createBulkShipmentsAPIWithHttpInfo(body, xPBDeveloperPartnerID, _options).pipe(map((apiResponse: HttpInfo<BulkShipmentResponse>) => apiResponse.data));
    }

    /**
     * ERR (Electronic Return Receipt) is an official United States Postal Service® (USPS) document designed to be equivalent to the hardcopy \'green card\' Return Receipt. <br />    It provides the following information:   - Name of the Recipient     - Time when article is delivered   - Signature (image) of the Recipient     - Address where the item is delivered, and    - Date when the article gets delivered.      ERR is combined with certain classes and categories of mails, which are as follow:   - First-Class Mail®    - Priority Mail®     ERR Batch supports two types of Shipment Document format:    - Shipping Label    - Coversheet       This API \"Create Bulk Shipments with ERR\" operation requires the following information:   - Recipient (Single or Multiple)   - Carrier - USPS   - Service   - Parcel Type, and   - Special Service.    The ERR API works at two levels: Shipment level and Root level. Root level is marked as Default, where multiple shipments are processed and entities are common for all shipments. While at Shipment level, entities might differ. <br />   User can either define values for *CarrierAccountID*, *ParcelType*, *ServiceID*, and *SpecialService* respectively at the Root level for all shipments, or mention the values at Shipment level, i.e., for individual shipment(s).     If user does not provide values for the above-mentioned fields combinedly at Shipment level, then the default values for these fields provided at Root level will be considered. While, if user provides these values combinedly at Shipment Level for individual shipment(s), it will override the values defined at Root level. <br />   <br />   *Condition: The fields *CarrierAccountID*, *ParcelType*, *ServiceID* are treated as a combination, and values against each field must be provided if user selects Shipment level. In case any of these field(s) out of the mentioned combination is/are missing, it will return validation error.*    
     * Create Bulk Shipments ERR
     * @param body This is the request body to create Bulk Shipment for ERR.
     * @param xPBDeveloperPartnerID The Developer-Partner-ID is assigned by PB to uniquely identify a developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     */
    public createBulkShipmentsAPIERRWithHttpInfo(body: CreateBulkShipmentsAPIERRRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<HttpInfo<BulkShipmentResponseERR>> {
        const requestContextPromise = this.requestFactory.createBulkShipmentsAPIERR(body, xPBDeveloperPartnerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBulkShipmentsAPIERRWithHttpInfo(rsp)));
            }));
    }

    /**
     * ERR (Electronic Return Receipt) is an official United States Postal Service® (USPS) document designed to be equivalent to the hardcopy \'green card\' Return Receipt. <br />    It provides the following information:   - Name of the Recipient     - Time when article is delivered   - Signature (image) of the Recipient     - Address where the item is delivered, and    - Date when the article gets delivered.      ERR is combined with certain classes and categories of mails, which are as follow:   - First-Class Mail®    - Priority Mail®     ERR Batch supports two types of Shipment Document format:    - Shipping Label    - Coversheet       This API \"Create Bulk Shipments with ERR\" operation requires the following information:   - Recipient (Single or Multiple)   - Carrier - USPS   - Service   - Parcel Type, and   - Special Service.    The ERR API works at two levels: Shipment level and Root level. Root level is marked as Default, where multiple shipments are processed and entities are common for all shipments. While at Shipment level, entities might differ. <br />   User can either define values for *CarrierAccountID*, *ParcelType*, *ServiceID*, and *SpecialService* respectively at the Root level for all shipments, or mention the values at Shipment level, i.e., for individual shipment(s).     If user does not provide values for the above-mentioned fields combinedly at Shipment level, then the default values for these fields provided at Root level will be considered. While, if user provides these values combinedly at Shipment Level for individual shipment(s), it will override the values defined at Root level. <br />   <br />   *Condition: The fields *CarrierAccountID*, *ParcelType*, *ServiceID* are treated as a combination, and values against each field must be provided if user selects Shipment level. In case any of these field(s) out of the mentioned combination is/are missing, it will return validation error.*    
     * Create Bulk Shipments ERR
     * @param body This is the request body to create Bulk Shipment for ERR.
     * @param xPBDeveloperPartnerID The Developer-Partner-ID is assigned by PB to uniquely identify a developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     */
    public createBulkShipmentsAPIERR(body: CreateBulkShipmentsAPIERRRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<BulkShipmentResponseERR> {
        return this.createBulkShipmentsAPIERRWithHttpInfo(body, xPBDeveloperPartnerID, _options).pipe(map((apiResponse: HttpInfo<BulkShipmentResponseERR>) => apiResponse.data));
    }

    /**
     * This operation retrieves the status of an existing Batch using *Batch ID*. Once the Job status is completed, the URL received from Response can be used to download the shipping label in PDF format.
     * Get Batch Status
     * @param batchId This is a system-generated unique identifier assigned to the Batch while it is processed.
     * @param xPBDeveloperPartnerID The Developer-Partner- ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     */
    public getBatchStatusAPIWithHttpInfo(batchId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<HttpInfo<GetStatusDetailedResponse>> {
        const requestContextPromise = this.requestFactory.getBatchStatusAPI(batchId, xPBDeveloperPartnerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBatchStatusAPIWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation retrieves the status of an existing Batch using *Batch ID*. Once the Job status is completed, the URL received from Response can be used to download the shipping label in PDF format.
     * Get Batch Status
     * @param batchId This is a system-generated unique identifier assigned to the Batch while it is processed.
     * @param xPBDeveloperPartnerID The Developer-Partner- ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     */
    public getBatchStatusAPI(batchId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<GetStatusDetailedResponse> {
        return this.getBatchStatusAPIWithHttpInfo(batchId, xPBDeveloperPartnerID, _options).pipe(map((apiResponse: HttpInfo<GetStatusDetailedResponse>) => apiResponse.data));
    }

    /**
     * \"This API operation provides the shipment details for those shipments which are SUCCESS or FAILED during batch processing at the following levels: - addressValidation - rating - labelGeneration, and - voidLabel  Based on fields/data mentioned in Query Parameter, user can check shipment details for particular status at any levels. <br /> If no values are provided in the fields mentioned in Query Parameter, the default for each will be: - Page: 1  - Size: 20 - Status: SUCCESS/FAILED. 
     * Get Batch Shipment Details
     * @param batchId This is a system-generated unique identifier assigned to the Batch while it is processed
     * @param xPBDeveloperPartnerID The Developer-Partner- ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     * @param page It returns detailed information for shipments status and it can cover in one or more pages. The default value for page number is 1.
     * @param size Indicates the number of records per page. The default value for records is 20.
     * @param status The status of the shipment. Values can be Failed or Success.
     * @param step Indicates various stages of the batch processing.
     */
    public getShipmentDetailsForBatchAPIWithHttpInfo(batchId: string, xPBDeveloperPartnerID?: string, page?: number, size?: number, status?: 'SUCCESS' | 'FAILED', step?: 'rating' | 'addressValidation' | 'labelGeneration' | 'voidLabel', _options?: Configuration): Observable<HttpInfo<GetShipmentsForBatch>> {
        const requestContextPromise = this.requestFactory.getShipmentDetailsForBatchAPI(batchId, xPBDeveloperPartnerID, page, size, status, step, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getShipmentDetailsForBatchAPIWithHttpInfo(rsp)));
            }));
    }

    /**
     * \"This API operation provides the shipment details for those shipments which are SUCCESS or FAILED during batch processing at the following levels: - addressValidation - rating - labelGeneration, and - voidLabel  Based on fields/data mentioned in Query Parameter, user can check shipment details for particular status at any levels. <br /> If no values are provided in the fields mentioned in Query Parameter, the default for each will be: - Page: 1  - Size: 20 - Status: SUCCESS/FAILED. 
     * Get Batch Shipment Details
     * @param batchId This is a system-generated unique identifier assigned to the Batch while it is processed
     * @param xPBDeveloperPartnerID The Developer-Partner- ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     * @param page It returns detailed information for shipments status and it can cover in one or more pages. The default value for page number is 1.
     * @param size Indicates the number of records per page. The default value for records is 20.
     * @param status The status of the shipment. Values can be Failed or Success.
     * @param step Indicates various stages of the batch processing.
     */
    public getShipmentDetailsForBatchAPI(batchId: string, xPBDeveloperPartnerID?: string, page?: number, size?: number, status?: 'SUCCESS' | 'FAILED', step?: 'rating' | 'addressValidation' | 'labelGeneration' | 'voidLabel', _options?: Configuration): Observable<GetShipmentsForBatch> {
        return this.getShipmentDetailsForBatchAPIWithHttpInfo(batchId, xPBDeveloperPartnerID, page, size, status, step, _options).pipe(map((apiResponse: HttpInfo<GetShipmentsForBatch>) => apiResponse.data));
    }

    /**
     * This operation processes (executes) the existing Batch. The payload for this endpoint needs only an empty JSON object and no additional data is required in the request body. The BatchID parameter located in the endpoint specifies which batch of shipments to process.
     * Process Batch
     * @param batchId This is a system-generated unique identifier assigned to the Batch while it is processed.
     * @param xPBDeveloperPartnerID The Developer-Partner-ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     */
    public processBatchAPIWithHttpInfo(batchId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<HttpInfo<ProcessShipmentResponse>> {
        const requestContextPromise = this.requestFactory.processBatchAPI(batchId, xPBDeveloperPartnerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.processBatchAPIWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation processes (executes) the existing Batch. The payload for this endpoint needs only an empty JSON object and no additional data is required in the request body. The BatchID parameter located in the endpoint specifies which batch of shipments to process.
     * Process Batch
     * @param batchId This is a system-generated unique identifier assigned to the Batch while it is processed.
     * @param xPBDeveloperPartnerID The Developer-Partner-ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     */
    public processBatchAPI(batchId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<ProcessShipmentResponse> {
        return this.processBatchAPIWithHttpInfo(batchId, xPBDeveloperPartnerID, _options).pipe(map((apiResponse: HttpInfo<ProcessShipmentResponse>) => apiResponse.data));
    }

    /**
     * This operation cancels (voids) shipments which are created using the Batch API operation `createBulkShipments`. <br /> If user wants to cancel specific shipment(s) of the Batch, then s/he needs to pass the *Shipment ID* for the selected shipments in the `shipmentIDs` array. While if user wants to cancel all shipments of the Batch, then s/he does not need to provide any *Shipment ID* in the array under request body.
     * Void Batch Shipping Labels
     * @param batchId This is a system-generated unique identifier assigned to the Batch while it is processed.
     * @param xPBDeveloperPartnerID The Developer-Partner-ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     * @param voidBatchRequest  This is the request body for cancelling the selected shipments or entire Batch of shipments*.
     */
    public voidShippingLabelWithHttpInfo(batchId: string, xPBDeveloperPartnerID?: string, voidBatchRequest?: VoidBatchRequest, _options?: Configuration): Observable<HttpInfo<VoidBatchResponse>> {
        const requestContextPromise = this.requestFactory.voidShippingLabel(batchId, xPBDeveloperPartnerID, voidBatchRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.voidShippingLabelWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation cancels (voids) shipments which are created using the Batch API operation `createBulkShipments`. <br /> If user wants to cancel specific shipment(s) of the Batch, then s/he needs to pass the *Shipment ID* for the selected shipments in the `shipmentIDs` array. While if user wants to cancel all shipments of the Batch, then s/he does not need to provide any *Shipment ID* in the array under request body.
     * Void Batch Shipping Labels
     * @param batchId This is a system-generated unique identifier assigned to the Batch while it is processed.
     * @param xPBDeveloperPartnerID The Developer-Partner-ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     * @param voidBatchRequest  This is the request body for cancelling the selected shipments or entire Batch of shipments*.
     */
    public voidShippingLabel(batchId: string, xPBDeveloperPartnerID?: string, voidBatchRequest?: VoidBatchRequest, _options?: Configuration): Observable<VoidBatchResponse> {
        return this.voidShippingLabelWithHttpInfo(batchId, xPBDeveloperPartnerID, voidBatchRequest, _options).pipe(map((apiResponse: HttpInfo<VoidBatchResponse>) => apiResponse.data));
    }

}

import { DefaultsApiRequestFactory, DefaultsApiResponseProcessor} from "../apis/DefaultsApi";
export class ObservableDefaultsApi {
    private requestFactory: DefaultsApiRequestFactory;
    private responseProcessor: DefaultsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultsApiRequestFactory,
        responseProcessor?: DefaultsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultsApiResponseProcessor();
    }

    /**
     * While creating shipment, a few columns/ fields information are used mandatorily, and if the value for those columns are used repetitively, then it is always better to save last used values. And hence, this API has been introduced. Using this API, default values can be set up for frequently used columns/fields information like carrier, its linked services, and special services.  Setting up the defaults will save both time and efforts. 
     * Create Defaults
     * @param createDefaults 
     */
    public createDefaultsWithHttpInfo(createDefaults: CreateDefaults, _options?: Configuration): Observable<HttpInfo<CreateDefaultsResponse>> {
        const requestContextPromise = this.requestFactory.createDefaults(createDefaults, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDefaultsWithHttpInfo(rsp)));
            }));
    }

    /**
     * While creating shipment, a few columns/ fields information are used mandatorily, and if the value for those columns are used repetitively, then it is always better to save last used values. And hence, this API has been introduced. Using this API, default values can be set up for frequently used columns/fields information like carrier, its linked services, and special services.  Setting up the defaults will save both time and efforts. 
     * Create Defaults
     * @param createDefaults 
     */
    public createDefaults(createDefaults: CreateDefaults, _options?: Configuration): Observable<CreateDefaultsResponse> {
        return this.createDefaultsWithHttpInfo(createDefaults, _options).pipe(map((apiResponse: HttpInfo<CreateDefaultsResponse>) => apiResponse.data));
    }

    /**
     * This operation deletes the existing Defaults.
     * Delete Defaults by ID
     * @param defaultID This is unique identifier assigned to Defaults while its creation using CreateDefaults API.
     */
    public deleteDefaultsByIdWithHttpInfo(defaultID: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteDefaultsById(defaultID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDefaultsByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation deletes the existing Defaults.
     * Delete Defaults by ID
     * @param defaultID This is unique identifier assigned to Defaults while its creation using CreateDefaults API.
     */
    public deleteDefaultsById(defaultID: string, _options?: Configuration): Observable<void> {
        return this.deleteDefaultsByIdWithHttpInfo(defaultID, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * The operation fetches all created Defaults. If query parameters are not provided, it will consider default page as 1 and default size as 10.
     * Get All Defaults
     * @param xPBDeveloperPartnerID The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param page The page of the Defaults search result list.
     * @param size The size/count of the searched result list.
     */
    public getAllDefaultsWithHttpInfo(xPBDeveloperPartnerID?: string, page?: string, size?: string, _options?: Configuration): Observable<HttpInfo<AllDefaults>> {
        const requestContextPromise = this.requestFactory.getAllDefaults(xPBDeveloperPartnerID, page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllDefaultsWithHttpInfo(rsp)));
            }));
    }

    /**
     * The operation fetches all created Defaults. If query parameters are not provided, it will consider default page as 1 and default size as 10.
     * Get All Defaults
     * @param xPBDeveloperPartnerID The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param page The page of the Defaults search result list.
     * @param size The size/count of the searched result list.
     */
    public getAllDefaults(xPBDeveloperPartnerID?: string, page?: string, size?: string, _options?: Configuration): Observable<AllDefaults> {
        return this.getAllDefaultsWithHttpInfo(xPBDeveloperPartnerID, page, size, _options).pipe(map((apiResponse: HttpInfo<AllDefaults>) => apiResponse.data));
    }

    /**
     * This operation fetches the values set for the Defaults.
     * Get Defaults By ID
     * @param defaultID This is unique identifier assigned to Defaults while its creation using CreateDefaults API.
     */
    public getDefaultsByIdWithHttpInfo(defaultID: string, _options?: Configuration): Observable<HttpInfo<DefaultResponse>> {
        const requestContextPromise = this.requestFactory.getDefaultsById(defaultID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDefaultsByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation fetches the values set for the Defaults.
     * Get Defaults By ID
     * @param defaultID This is unique identifier assigned to Defaults while its creation using CreateDefaults API.
     */
    public getDefaultsById(defaultID: string, _options?: Configuration): Observable<DefaultResponse> {
        return this.getDefaultsByIdWithHttpInfo(defaultID, _options).pipe(map((apiResponse: HttpInfo<DefaultResponse>) => apiResponse.data));
    }

    /**
     * This operation updates the values set for Defaults.
     * Update Defaults
     * @param defaultID This is unique identifier assigned to Defaults while its creation using CreateDefaults API.
     * @param createDefaults 
     */
    public putDefaultsByIdWithHttpInfo(defaultID: string, createDefaults: CreateDefaults, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.putDefaultsById(defaultID, createDefaults, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putDefaultsByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation updates the values set for Defaults.
     * Update Defaults
     * @param defaultID This is unique identifier assigned to Defaults while its creation using CreateDefaults API.
     * @param createDefaults 
     */
    public putDefaultsById(defaultID: string, createDefaults: CreateDefaults, _options?: Configuration): Observable<void> {
        return this.putDefaultsByIdWithHttpInfo(defaultID, createDefaults, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ManifestApiRequestFactory, ManifestApiResponseProcessor} from "../apis/ManifestApi";
export class ObservableManifestApi {
    private requestFactory: ManifestApiRequestFactory;
    private responseProcessor: ManifestApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ManifestApiRequestFactory,
        responseProcessor?: ManifestApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ManifestApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ManifestApiResponseProcessor();
    }

    /**
     * This operation creates an end-of-day manifest (a compilation of information about all shipments) that combines all shipments of the day into a single form or electronic record, depending on the carrier. For different carriers, the Manifest process varies, e.g., USPS use SCAN Form while FedEx has Manifest Form.
     * Create Manifest
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param compactResponse This header defines if the response required is detailed or compact. When value is set to true, it will only return manifest details in response. 
     * @param createManifestRequest 
     */
    public createManifestWithHttpInfo(xPBDeveloperPartnerID?: string, compactResponse?: boolean, createManifestRequest?: CreateManifestRequest, _options?: Configuration): Observable<HttpInfo<CreateManifest200Response>> {
        const requestContextPromise = this.requestFactory.createManifest(xPBDeveloperPartnerID, compactResponse, createManifestRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createManifestWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation creates an end-of-day manifest (a compilation of information about all shipments) that combines all shipments of the day into a single form or electronic record, depending on the carrier. For different carriers, the Manifest process varies, e.g., USPS use SCAN Form while FedEx has Manifest Form.
     * Create Manifest
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param compactResponse This header defines if the response required is detailed or compact. When value is set to true, it will only return manifest details in response. 
     * @param createManifestRequest 
     */
    public createManifest(xPBDeveloperPartnerID?: string, compactResponse?: boolean, createManifestRequest?: CreateManifestRequest, _options?: Configuration): Observable<CreateManifest200Response> {
        return this.createManifestWithHttpInfo(xPBDeveloperPartnerID, compactResponse, createManifestRequest, _options).pipe(map((apiResponse: HttpInfo<CreateManifest200Response>) => apiResponse.data));
    }

    /**
     * This operation reprints a manifest for which the initial created manifest request was successful.
     * Reprint manifest
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param compactResponse This header defines if the response required is detailed or compact. When value is set to true, it will only return manifest details in response.
     * @param reprintManifestRequest 
     */
    public reprintManifestWithHttpInfo(xPBDeveloperPartnerID?: string, compactResponse?: boolean, reprintManifestRequest?: ReprintManifestRequest, _options?: Configuration): Observable<HttpInfo<CreateManifest200Response>> {
        const requestContextPromise = this.requestFactory.reprintManifest(xPBDeveloperPartnerID, compactResponse, reprintManifestRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.reprintManifestWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation reprints a manifest for which the initial created manifest request was successful.
     * Reprint manifest
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param compactResponse This header defines if the response required is detailed or compact. When value is set to true, it will only return manifest details in response.
     * @param reprintManifestRequest 
     */
    public reprintManifest(xPBDeveloperPartnerID?: string, compactResponse?: boolean, reprintManifestRequest?: ReprintManifestRequest, _options?: Configuration): Observable<CreateManifest200Response> {
        return this.reprintManifestWithHttpInfo(xPBDeveloperPartnerID, compactResponse, reprintManifestRequest, _options).pipe(map((apiResponse: HttpInfo<CreateManifest200Response>) => apiResponse.data));
    }

}

import { MultipieceApiRequestFactory, MultipieceApiResponseProcessor} from "../apis/MultipieceApi";
export class ObservableMultipieceApi {
    private requestFactory: MultipieceApiRequestFactory;
    private responseProcessor: MultipieceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MultipieceApiRequestFactory,
        responseProcessor?: MultipieceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MultipieceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MultipieceApiResponseProcessor();
    }

    /**
     * This API contains 2 operations, rate shop and single rate. Rate shop will fetch rates for all carrier services based on the given addresses (From and To), weight, and dimension for given parcelType in multiPieceParcels object. Single rate will get rate for specific service and special service (if requested) based on the given addresses (From and To), weight, and dimension, parcelType and serviceId with or without specialServices. Single rate will be used mainly to a rate a shipment before creating shipment.  <br> For UPS- multipiece shipment with Envelopes (having parcel Type as LTR) is not supported.  <br> For FEDEX Multipiece, all parcels must be of same packaging type while creating multipiece shipment
     * Multipiece Rateshop and Rates
     * @param multipieceRatesRequest 
     * @param xPBDeveloperPartnerID This is the Develover Partner ID. When the developer is the only partner, this field is not required.
     */
    public multipieceRatesWithHttpInfo(multipieceRatesRequest: MultipieceRatesRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<HttpInfo<MultipieceRates200Response>> {
        const requestContextPromise = this.requestFactory.multipieceRates(multipieceRatesRequest, xPBDeveloperPartnerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.multipieceRatesWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API contains 2 operations, rate shop and single rate. Rate shop will fetch rates for all carrier services based on the given addresses (From and To), weight, and dimension for given parcelType in multiPieceParcels object. Single rate will get rate for specific service and special service (if requested) based on the given addresses (From and To), weight, and dimension, parcelType and serviceId with or without specialServices. Single rate will be used mainly to a rate a shipment before creating shipment.  <br> For UPS- multipiece shipment with Envelopes (having parcel Type as LTR) is not supported.  <br> For FEDEX Multipiece, all parcels must be of same packaging type while creating multipiece shipment
     * Multipiece Rateshop and Rates
     * @param multipieceRatesRequest 
     * @param xPBDeveloperPartnerID This is the Develover Partner ID. When the developer is the only partner, this field is not required.
     */
    public multipieceRates(multipieceRatesRequest: MultipieceRatesRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<MultipieceRates200Response> {
        return this.multipieceRatesWithHttpInfo(multipieceRatesRequest, xPBDeveloperPartnerID, _options).pipe(map((apiResponse: HttpInfo<MultipieceRates200Response>) => apiResponse.data));
    }

    /**
     * This operation is used to create Multipiece Shipments. UPS, FedEx and DHL Express are supported for Multipiece Shipments.  <br> For UPS- multipiece shipment with Envelopes (having parcel Type as LTR) is not supported.  <br> For FEDEX Multipiece, all parcels must be of same packaging type while creating multipiece shipment
     * Multipiece Shipment
     * @param multipieceShipmentRequest 
     * @param xPBDeveloperPartnerID This is the Develover Partner ID. When the developer is the only partner, this field is not required.
     */
    public multipieceShipmentWithHttpInfo(multipieceShipmentRequest: MultipieceShipmentRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<HttpInfo<MultipieceShipment200Response>> {
        const requestContextPromise = this.requestFactory.multipieceShipment(multipieceShipmentRequest, xPBDeveloperPartnerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.multipieceShipmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation is used to create Multipiece Shipments. UPS, FedEx and DHL Express are supported for Multipiece Shipments.  <br> For UPS- multipiece shipment with Envelopes (having parcel Type as LTR) is not supported.  <br> For FEDEX Multipiece, all parcels must be of same packaging type while creating multipiece shipment
     * Multipiece Shipment
     * @param multipieceShipmentRequest 
     * @param xPBDeveloperPartnerID This is the Develover Partner ID. When the developer is the only partner, this field is not required.
     */
    public multipieceShipment(multipieceShipmentRequest: MultipieceShipmentRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<MultipieceShipment200Response> {
        return this.multipieceShipmentWithHttpInfo(multipieceShipmentRequest, xPBDeveloperPartnerID, _options).pipe(map((apiResponse: HttpInfo<MultipieceShipment200Response>) => apiResponse.data));
    }

    /**
     * This operation is used to cancel the multipiece label. It takes the shipmentId of the multipiece shipment done.
     * Cancel Multipiece Shipment
     * @param shipmentId It specifies the shipmentId of onward shipment against which return label has to be created.
     * @param xPBDeveloperPartnerID This is the Develover Partner ID. When the developer is the only partner, this field is not required.
     */
    public multipieceShipmentCancelWithHttpInfo(shipmentId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<HttpInfo<CancelShipment>> {
        const requestContextPromise = this.requestFactory.multipieceShipmentCancel(shipmentId, xPBDeveloperPartnerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.multipieceShipmentCancelWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation is used to cancel the multipiece label. It takes the shipmentId of the multipiece shipment done.
     * Cancel Multipiece Shipment
     * @param shipmentId It specifies the shipmentId of onward shipment against which return label has to be created.
     * @param xPBDeveloperPartnerID This is the Develover Partner ID. When the developer is the only partner, this field is not required.
     */
    public multipieceShipmentCancel(shipmentId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<CancelShipment> {
        return this.multipieceShipmentCancelWithHttpInfo(shipmentId, xPBDeveloperPartnerID, _options).pipe(map((apiResponse: HttpInfo<CancelShipment>) => apiResponse.data));
    }

    /**
     * This operation is used to reprint the multipiece label. It takes the shipmentId of the multipiece shipment done.
     * Reprint Multipiece Shipment
     * @param shipmentId It specifies the shipmentId of onward shipment against which return label has to be created.
     * @param xPBDeveloperPartnerID This is the Develover Partner ID. When the developer is the only partner, this field is not required.
     */
    public multipieceShipmentReprintWithHttpInfo(shipmentId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<HttpInfo<MultipieceDomesticShipmentResponse>> {
        const requestContextPromise = this.requestFactory.multipieceShipmentReprint(shipmentId, xPBDeveloperPartnerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.multipieceShipmentReprintWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation is used to reprint the multipiece label. It takes the shipmentId of the multipiece shipment done.
     * Reprint Multipiece Shipment
     * @param shipmentId It specifies the shipmentId of onward shipment against which return label has to be created.
     * @param xPBDeveloperPartnerID This is the Develover Partner ID. When the developer is the only partner, this field is not required.
     */
    public multipieceShipmentReprint(shipmentId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<MultipieceDomesticShipmentResponse> {
        return this.multipieceShipmentReprintWithHttpInfo(shipmentId, xPBDeveloperPartnerID, _options).pipe(map((apiResponse: HttpInfo<MultipieceDomesticShipmentResponse>) => apiResponse.data));
    }

}

import { PickupsApiRequestFactory, PickupsApiResponseProcessor} from "../apis/PickupsApi";
export class ObservablePickupsApi {
    private requestFactory: PickupsApiRequestFactory;
    private responseProcessor: PickupsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PickupsApiRequestFactory,
        responseProcessor?: PickupsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PickupsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PickupsApiResponseProcessor();
    }

    /**
     * This operation is used to Cancel the scheduled pickup.
     * Cancel Pickups
     * @param schedulePickupCancelRequest 
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public cancelPickupsWithHttpInfo(schedulePickupCancelRequest: SchedulePickupCancelRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<HttpInfo<SchedulePickupCancelResponse>> {
        const requestContextPromise = this.requestFactory.cancelPickups(schedulePickupCancelRequest, xPBDeveloperPartnerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelPickupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation is used to Cancel the scheduled pickup.
     * Cancel Pickups
     * @param schedulePickupCancelRequest 
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public cancelPickups(schedulePickupCancelRequest: SchedulePickupCancelRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<SchedulePickupCancelResponse> {
        return this.cancelPickupsWithHttpInfo(schedulePickupCancelRequest, xPBDeveloperPartnerID, _options).pipe(map((apiResponse: HttpInfo<SchedulePickupCancelResponse>) => apiResponse.data));
    }

    /**
     * This operation is used to get receipt for pickup cancellation. The receipt generated is in PDF format. <br> This operation can create receipt for multiple pickups which are cancelled.
     * Cancelled Pickup Document
     * @param type Indicates type of pickup. Supported value is &#x60;cancelled&#x60;.
     * @param getPickupCancelledDocumentRequest 
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public cancelledPickupDocumentWithHttpInfo(type: 'cancelled', getPickupCancelledDocumentRequest: GetPickupCancelledDocumentRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<HttpInfo<GetPickupCancelledDocumentResponse>> {
        const requestContextPromise = this.requestFactory.cancelledPickupDocument(type, getPickupCancelledDocumentRequest, xPBDeveloperPartnerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelledPickupDocumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation is used to get receipt for pickup cancellation. The receipt generated is in PDF format. <br> This operation can create receipt for multiple pickups which are cancelled.
     * Cancelled Pickup Document
     * @param type Indicates type of pickup. Supported value is &#x60;cancelled&#x60;.
     * @param getPickupCancelledDocumentRequest 
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public cancelledPickupDocument(type: 'cancelled', getPickupCancelledDocumentRequest: GetPickupCancelledDocumentRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<GetPickupCancelledDocumentResponse> {
        return this.cancelledPickupDocumentWithHttpInfo(type, getPickupCancelledDocumentRequest, xPBDeveloperPartnerID, _options).pipe(map((apiResponse: HttpInfo<GetPickupCancelledDocumentResponse>) => apiResponse.data));
    }

    /**
     * This operation returns the scheduled pickup or cancellation receipt in PDF format.
     * Get Pickup Document
     * @param pickupId It specified the pickupId for which PDF receipt is needed.
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public getPickupDocumentWithHttpInfo(pickupId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<HttpInfo<GetPickupDocument>> {
        const requestContextPromise = this.requestFactory.getPickupDocument(pickupId, xPBDeveloperPartnerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPickupDocumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation returns the scheduled pickup or cancellation receipt in PDF format.
     * Get Pickup Document
     * @param pickupId It specified the pickupId for which PDF receipt is needed.
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public getPickupDocument(pickupId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<GetPickupDocument> {
        return this.getPickupDocumentWithHttpInfo(pickupId, xPBDeveloperPartnerID, _options).pipe(map((apiResponse: HttpInfo<GetPickupDocument>) => apiResponse.data));
    }

    /**
     * This operation is used to view the history of pickups scheduled or cancelled for your packages.
     * Get Pickups
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param carrier Indicates CarrierID. If not provided, it would show pickups for all the carriers.
     * @param startDate Indicates start date from when you want to see the history. If not provided, it will take today\&#39;s date.
     * @param endDate Indicates end date till you want to see the pickups history. If not provide, it will take today\&#39;s date.
     * @param status Indicates status of the pickup(schedule or cancel). If not provided, it will show the response for both status.
     * @param page Indicates page number, if not provided page would be 1.
     * @param size Indicates size of records, if not provided size would be 20
     */
    public getPickupsWithHttpInfo(xPBDeveloperPartnerID?: string, carrier?: string, startDate?: string, endDate?: string, status?: 'scheduled' | 'cancelled', page?: number, size?: number, _options?: Configuration): Observable<HttpInfo<GetAllPickups>> {
        const requestContextPromise = this.requestFactory.getPickups(xPBDeveloperPartnerID, carrier, startDate, endDate, status, page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPickupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation is used to view the history of pickups scheduled or cancelled for your packages.
     * Get Pickups
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param carrier Indicates CarrierID. If not provided, it would show pickups for all the carriers.
     * @param startDate Indicates start date from when you want to see the history. If not provided, it will take today\&#39;s date.
     * @param endDate Indicates end date till you want to see the pickups history. If not provide, it will take today\&#39;s date.
     * @param status Indicates status of the pickup(schedule or cancel). If not provided, it will show the response for both status.
     * @param page Indicates page number, if not provided page would be 1.
     * @param size Indicates size of records, if not provided size would be 20
     */
    public getPickups(xPBDeveloperPartnerID?: string, carrier?: string, startDate?: string, endDate?: string, status?: 'scheduled' | 'cancelled', page?: number, size?: number, _options?: Configuration): Observable<GetAllPickups> {
        return this.getPickupsWithHttpInfo(xPBDeveloperPartnerID, carrier, startDate, endDate, status, page, size, _options).pipe(map((apiResponse: HttpInfo<GetAllPickups>) => apiResponse.data));
    }

    /**
     * This operation allows to schedule Pickups with USPS, UPS, FedEx and DHLExpress for eligible shipments. <br> Below are four possible combinations for scheduling pickup <br>  <br> 1. When request does not specify `pickupSummary` and `shipmentIds`- The system would consider all eligible shipments created in a current day. <br> 2. When request specifies only `shipmentIds`- Pickup will be created for the shipmentIds mentioned <br> 3. When request specifies only `pickupSummary`- Pickup will be created for the pickup details mentioned in the pickupSummary <br> 4. When request specifies both `pickupSummary` and `shipmentIds`- Pickup will be created including details mentioned in both objects.
     * Schedule Pickup
     * @param schedulePickupRequest 
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public schedulePickupWithHttpInfo(schedulePickupRequest: SchedulePickupRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<HttpInfo<SchedulePickup200Response>> {
        const requestContextPromise = this.requestFactory.schedulePickup(schedulePickupRequest, xPBDeveloperPartnerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.schedulePickupWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation allows to schedule Pickups with USPS, UPS, FedEx and DHLExpress for eligible shipments. <br> Below are four possible combinations for scheduling pickup <br>  <br> 1. When request does not specify `pickupSummary` and `shipmentIds`- The system would consider all eligible shipments created in a current day. <br> 2. When request specifies only `shipmentIds`- Pickup will be created for the shipmentIds mentioned <br> 3. When request specifies only `pickupSummary`- Pickup will be created for the pickup details mentioned in the pickupSummary <br> 4. When request specifies both `pickupSummary` and `shipmentIds`- Pickup will be created including details mentioned in both objects.
     * Schedule Pickup
     * @param schedulePickupRequest 
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public schedulePickup(schedulePickupRequest: SchedulePickupRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<SchedulePickup200Response> {
        return this.schedulePickupWithHttpInfo(schedulePickupRequest, xPBDeveloperPartnerID, _options).pipe(map((apiResponse: HttpInfo<SchedulePickup200Response>) => apiResponse.data));
    }

}

import { PrintApiRequestFactory, PrintApiResponseProcessor} from "../apis/PrintApi";
export class ObservablePrintApi {
    private requestFactory: PrintApiRequestFactory;
    private responseProcessor: PrintApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PrintApiRequestFactory,
        responseProcessor?: PrintApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PrintApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PrintApiResponseProcessor();
    }

    /**
     * delete printer mapping document
     * Delete Printer mapping
     * @param alias Refers to a printer connected (directly or via network) to a computer.
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public deletePrinterMappingWithHttpInfo(alias: string, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deletePrinterMapping(alias, xPBDeveloperPartnerId, xPBLocationId, xPBTransactionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePrinterMappingWithHttpInfo(rsp)));
            }));
    }

    /**
     * delete printer mapping document
     * Delete Printer mapping
     * @param alias Refers to a printer connected (directly or via network) to a computer.
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public deletePrinterMapping(alias: string, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Observable<void> {
        return this.deletePrinterMappingWithHttpInfo(alias, xPBDeveloperPartnerId, xPBLocationId, xPBTransactionId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get printer mapping document
     * Get Printer mapping
     * @param alias Refers to a printer connected (directly or via network) to a computer.
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public getPrinterMappingWithHttpInfo(alias: string, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Observable<HttpInfo<PrinterMappingGetResponse>> {
        const requestContextPromise = this.requestFactory.getPrinterMapping(alias, xPBDeveloperPartnerId, xPBLocationId, xPBTransactionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPrinterMappingWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get printer mapping document
     * Get Printer mapping
     * @param alias Refers to a printer connected (directly or via network) to a computer.
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public getPrinterMapping(alias: string, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Observable<PrinterMappingGetResponse> {
        return this.getPrinterMappingWithHttpInfo(alias, xPBDeveloperPartnerId, xPBLocationId, xPBTransactionId, _options).pipe(map((apiResponse: HttpInfo<PrinterMappingGetResponse>) => apiResponse.data));
    }

    /**
     * job status
     * Job status
     * @param jobId The jobId, a unique identifier assigned for the job.
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public jobStatusWithHttpInfo(jobId: string, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Observable<HttpInfo<JobStatus>> {
        const requestContextPromise = this.requestFactory.jobStatus(jobId, xPBDeveloperPartnerId, xPBLocationId, xPBTransactionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.jobStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * job status
     * Job status
     * @param jobId The jobId, a unique identifier assigned for the job.
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public jobStatus(jobId: string, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Observable<JobStatus> {
        return this.jobStatusWithHttpInfo(jobId, xPBDeveloperPartnerId, xPBLocationId, xPBTransactionId, _options).pipe(map((apiResponse: HttpInfo<JobStatus>) => apiResponse.data));
    }

    /**
     * It contains information about a label or a document, e.g. a shipping label, a customs form, manifest report etc., that pertains to a shipment or manifest.
     * Print Document
     * @param printDocumentRequest 
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique Transaction ID provided by the partner, which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public printDocumentWithHttpInfo(printDocumentRequest: PrintDocumentRequest, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Observable<HttpInfo<PrintDocumentResponse>> {
        const requestContextPromise = this.requestFactory.printDocument(printDocumentRequest, xPBDeveloperPartnerId, xPBLocationId, xPBTransactionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.printDocumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * It contains information about a label or a document, e.g. a shipping label, a customs form, manifest report etc., that pertains to a shipment or manifest.
     * Print Document
     * @param printDocumentRequest 
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique Transaction ID provided by the partner, which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public printDocument(printDocumentRequest: PrintDocumentRequest, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Observable<PrintDocumentResponse> {
        return this.printDocumentWithHttpInfo(printDocumentRequest, xPBDeveloperPartnerId, xPBLocationId, xPBTransactionId, _options).pipe(map((apiResponse: HttpInfo<PrintDocumentResponse>) => apiResponse.data));
    }

    /**
     * printer mapping document
     * Printer mapping
     * @param printerMappingRequest 
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public printerMappingWithHttpInfo(printerMappingRequest: PrinterMappingRequest, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Observable<HttpInfo<PrinterMappingResponse>> {
        const requestContextPromise = this.requestFactory.printerMapping(printerMappingRequest, xPBDeveloperPartnerId, xPBLocationId, xPBTransactionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.printerMappingWithHttpInfo(rsp)));
            }));
    }

    /**
     * printer mapping document
     * Printer mapping
     * @param printerMappingRequest 
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public printerMapping(printerMappingRequest: PrinterMappingRequest, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Observable<PrinterMappingResponse> {
        return this.printerMappingWithHttpInfo(printerMappingRequest, xPBDeveloperPartnerId, xPBLocationId, xPBTransactionId, _options).pipe(map((apiResponse: HttpInfo<PrinterMappingResponse>) => apiResponse.data));
    }

}

import { ShipmentApiRequestFactory, ShipmentApiResponseProcessor} from "../apis/ShipmentApi";
export class ObservableShipmentApi {
    private requestFactory: ShipmentApiRequestFactory;
    private responseProcessor: ShipmentApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ShipmentApiRequestFactory,
        responseProcessor?: ShipmentApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ShipmentApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ShipmentApiResponseProcessor();
    }

    /**
     * This operation cancel/void shipment.
     * Cancel Shipment
     * @param shipmentId This indicates the shipmentId, a unique identifier assigned for the Shipment.
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public cancelShipmentByIdWithHttpInfo(shipmentId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<HttpInfo<CancelShipment>> {
        const requestContextPromise = this.requestFactory.cancelShipmentById(shipmentId, xPBDeveloperPartnerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelShipmentByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation cancel/void shipment.
     * Cancel Shipment
     * @param shipmentId This indicates the shipmentId, a unique identifier assigned for the Shipment.
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public cancelShipmentById(shipmentId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<CancelShipment> {
        return this.cancelShipmentByIdWithHttpInfo(shipmentId, xPBDeveloperPartnerID, _options).pipe(map((apiResponse: HttpInfo<CancelShipment>) => apiResponse.data));
    }

    /**
     * This operation cancels (voids) stamps generated for ERR (Electronic Return Receipt).  - User needs to provide *Stamp IDs* to cancel those specific ERR stamps.  - User can download the *Refund Form* having details of generated Postage.  - At once, maximum 1000 stamps can be requested for cancelation. 
     * Cancel Stamps ERR
     * @param cancelStampsRequestERR 
     * @param xPBDeveloperPartnerID The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     */
    public cancelStampsERRWithHttpInfo(cancelStampsRequestERR: CancelStampsRequestERR, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<HttpInfo<CancelStampsResponseERR>> {
        const requestContextPromise = this.requestFactory.cancelStampsERR(cancelStampsRequestERR, xPBDeveloperPartnerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelStampsERRWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation cancels (voids) stamps generated for ERR (Electronic Return Receipt).  - User needs to provide *Stamp IDs* to cancel those specific ERR stamps.  - User can download the *Refund Form* having details of generated Postage.  - At once, maximum 1000 stamps can be requested for cancelation. 
     * Cancel Stamps ERR
     * @param cancelStampsRequestERR 
     * @param xPBDeveloperPartnerID The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     */
    public cancelStampsERR(cancelStampsRequestERR: CancelStampsRequestERR, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<CancelStampsResponseERR> {
        return this.cancelStampsERRWithHttpInfo(cancelStampsRequestERR, xPBDeveloperPartnerID, _options).pipe(map((apiResponse: HttpInfo<CancelStampsResponseERR>) => apiResponse.data));
    }

    /**
     * This operation creates a return label based on a previous shipment. <br> The return label can be created in two ways:  <br> 1. User need not to provide any details of package, address and service. The API would take all details from the shipmentId mentioned in the path parameter and would swap the address and create return label. However for UPS `specialServices` object is required as carrier mandates to provide package description with PRL special service. <br> 2. User can customize the request by passing `fromAddress`, `toAddress`, `parcelType`, `serviceId` in the request itself. <br> Please Note that for UPS it is required to pass `specialServices` object with `PRL` service id and  input parameters with name as `RETURN_PKG_DESCRIPTION`. <br> For FedEx `specialServices` object is not required and PRL is added by default while creating return.  If user wishes to provide RMA number, it can be passed in `specialServices` object in the request body. <br> Please Note If user provides any information in this request it overrides the information in onward shipment which was created <br> For example if user provides toAddress in the request the return label will get created with recipient as mentioned in toAddress and  if user provides fromAddress in the request, the return label will be created with sender as mentioned in fromAddress
     * Create Return label shipment
     * @param shipmentId It specifies the shipmentId of onward shipment against which return label has to be created.
     * @param returnLabel 
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public createReturnLabelWithHttpInfo(shipmentId: string, returnLabel: ReturnLabel, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<HttpInfo<ReturnLabelResponse>> {
        const requestContextPromise = this.requestFactory.createReturnLabel(shipmentId, returnLabel, xPBDeveloperPartnerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createReturnLabelWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation creates a return label based on a previous shipment. <br> The return label can be created in two ways:  <br> 1. User need not to provide any details of package, address and service. The API would take all details from the shipmentId mentioned in the path parameter and would swap the address and create return label. However for UPS `specialServices` object is required as carrier mandates to provide package description with PRL special service. <br> 2. User can customize the request by passing `fromAddress`, `toAddress`, `parcelType`, `serviceId` in the request itself. <br> Please Note that for UPS it is required to pass `specialServices` object with `PRL` service id and  input parameters with name as `RETURN_PKG_DESCRIPTION`. <br> For FedEx `specialServices` object is not required and PRL is added by default while creating return.  If user wishes to provide RMA number, it can be passed in `specialServices` object in the request body. <br> Please Note If user provides any information in this request it overrides the information in onward shipment which was created <br> For example if user provides toAddress in the request the return label will get created with recipient as mentioned in toAddress and  if user provides fromAddress in the request, the return label will be created with sender as mentioned in fromAddress
     * Create Return label shipment
     * @param shipmentId It specifies the shipmentId of onward shipment against which return label has to be created.
     * @param returnLabel 
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public createReturnLabel(shipmentId: string, returnLabel: ReturnLabel, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<ReturnLabelResponse> {
        return this.createReturnLabelWithHttpInfo(shipmentId, returnLabel, xPBDeveloperPartnerID, _options).pipe(map((apiResponse: HttpInfo<ReturnLabelResponse>) => apiResponse.data));
    }

    /**
     * This operation creates a new Shipment or Shipment Label. This is for both Domestic and International.<br> For domestic, Create a shipment requires domestic addresses (within same country)- ToAddress and FromAddress, and  carrier service and special service.<br> While for International, Create a shipment requires international delivery, that is ToAddress must be the different country (and not the same country mentioned in From Address), selected services, special services, and customs information. <br> <br> Note- To create Return shipment using this API- If PRL (return special service) is used, user need to provide sender address (from where return shipment is to be created) in `fromAddress` object and recipient address (to where return is to be created) in `toAddress` object. System will not swap the address for return in this API. If you want to create return for the already created shipment, you may use `Create Return Label Shipment` API. <br> <br> Note: Currently Shipment created from below API gets assigned to the Default location of the subscription.
     * Create Shipment
     * @param createShipmentRequest 
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public createShipmentWithHttpInfo(createShipmentRequest: CreateShipmentRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<HttpInfo<CreateShipment200Response>> {
        const requestContextPromise = this.requestFactory.createShipment(createShipmentRequest, xPBDeveloperPartnerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createShipmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation creates a new Shipment or Shipment Label. This is for both Domestic and International.<br> For domestic, Create a shipment requires domestic addresses (within same country)- ToAddress and FromAddress, and  carrier service and special service.<br> While for International, Create a shipment requires international delivery, that is ToAddress must be the different country (and not the same country mentioned in From Address), selected services, special services, and customs information. <br> <br> Note- To create Return shipment using this API- If PRL (return special service) is used, user need to provide sender address (from where return shipment is to be created) in `fromAddress` object and recipient address (to where return is to be created) in `toAddress` object. System will not swap the address for return in this API. If you want to create return for the already created shipment, you may use `Create Return Label Shipment` API. <br> <br> Note: Currently Shipment created from below API gets assigned to the Default location of the subscription.
     * Create Shipment
     * @param createShipmentRequest 
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public createShipment(createShipmentRequest: CreateShipmentRequest, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<CreateShipment200Response> {
        return this.createShipmentWithHttpInfo(createShipmentRequest, xPBDeveloperPartnerID, _options).pipe(map((apiResponse: HttpInfo<CreateShipment200Response>) => apiResponse.data));
    }

    /**
     * This API operation is used to download bulk of ERR (*Electronic Return Receipt*) - POD (*Proof of Delivery*) files, which are specific to USPS carrier. <br />   User can download BPOD (*Bulk Proof of Delivery*) files either using *Shipment IDs* or *Date Range*.    If user wants to check records based on dates and download BPOD files accordingly, then *Start Date* and *End Date* need to be passed in the request body as filter. Else *Shipment IDs* will be used as default value when user does not provide *DateRange* filter. <br />   User is restricted to download 1000 BPOD files as max limit. 
     * Download BPOD Files
     * @param xPBDeveloperPartnerID The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     * @param startDate The BPOD files to be downloaded from which Date is the startDate in the Date Range filter. This field is not required if the Shipment IDs provided in the request body.
     * @param endDate The BPOD files to be downloaded till which Date is the endDate in the Date Range filter. This field is not required if the Shipment IDs provided in the request body.
     * @param body This is the request body to download BPOD files. Request body supports max of 1000 ShipmentIDs in a request.
     */
    public downloadBpodFilesWithHttpInfo(xPBDeveloperPartnerID?: string, startDate?: string, endDate?: string, body?: BPODDownloadRequest, _options?: Configuration): Observable<HttpInfo<BPODDownloadResponse>> {
        const requestContextPromise = this.requestFactory.downloadBpodFiles(xPBDeveloperPartnerID, startDate, endDate, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadBpodFilesWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API operation is used to download bulk of ERR (*Electronic Return Receipt*) - POD (*Proof of Delivery*) files, which are specific to USPS carrier. <br />   User can download BPOD (*Bulk Proof of Delivery*) files either using *Shipment IDs* or *Date Range*.    If user wants to check records based on dates and download BPOD files accordingly, then *Start Date* and *End Date* need to be passed in the request body as filter. Else *Shipment IDs* will be used as default value when user does not provide *DateRange* filter. <br />   User is restricted to download 1000 BPOD files as max limit. 
     * Download BPOD Files
     * @param xPBDeveloperPartnerID The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     * @param startDate The BPOD files to be downloaded from which Date is the startDate in the Date Range filter. This field is not required if the Shipment IDs provided in the request body.
     * @param endDate The BPOD files to be downloaded till which Date is the endDate in the Date Range filter. This field is not required if the Shipment IDs provided in the request body.
     * @param body This is the request body to download BPOD files. Request body supports max of 1000 ShipmentIDs in a request.
     */
    public downloadBpodFiles(xPBDeveloperPartnerID?: string, startDate?: string, endDate?: string, body?: BPODDownloadRequest, _options?: Configuration): Observable<BPODDownloadResponse> {
        return this.downloadBpodFilesWithHttpInfo(xPBDeveloperPartnerID, startDate, endDate, body, _options).pipe(map((apiResponse: HttpInfo<BPODDownloadResponse>) => apiResponse.data));
    }

    /**
     * This operation fetches all created Shipments. If query parameters are not provided, it will default endDate as current date, page as 1 and size as 10.
     * Get All Shipments
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param startDate While searching shipments, user set a date range to get all created shipments. This indicatesthe start date of the set date range under shipment search criteria. The date format must be: YYYY-MM-DD.
     * @param endDate While searching shipments, user set a date range to get all created shipments. This indicatesthe end date of the set date range under shipment search criteria. The date format must be: YYYY-MM-DD.
     * @param page This indicates the page of the Shipments search result list.
     * @param size This indicates the size/count of the searched result list.
     */
    public getAllShipmentsWithHttpInfo(xPBDeveloperPartnerID?: string, startDate?: string, endDate?: string, page?: string, size?: string, _options?: Configuration): Observable<HttpInfo<GetAllShipments>> {
        const requestContextPromise = this.requestFactory.getAllShipments(xPBDeveloperPartnerID, startDate, endDate, page, size, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllShipmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation fetches all created Shipments. If query parameters are not provided, it will default endDate as current date, page as 1 and size as 10.
     * Get All Shipments
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param startDate While searching shipments, user set a date range to get all created shipments. This indicatesthe start date of the set date range under shipment search criteria. The date format must be: YYYY-MM-DD.
     * @param endDate While searching shipments, user set a date range to get all created shipments. This indicatesthe end date of the set date range under shipment search criteria. The date format must be: YYYY-MM-DD.
     * @param page This indicates the page of the Shipments search result list.
     * @param size This indicates the size/count of the searched result list.
     */
    public getAllShipments(xPBDeveloperPartnerID?: string, startDate?: string, endDate?: string, page?: string, size?: string, _options?: Configuration): Observable<GetAllShipments> {
        return this.getAllShipmentsWithHttpInfo(xPBDeveloperPartnerID, startDate, endDate, page, size, _options).pipe(map((apiResponse: HttpInfo<GetAllShipments>) => apiResponse.data));
    }

    /**
     * This operation retrieves onboarded Carriers with their Carrier Account Ids which uniquely identify multiple accounts of same carrier.
     * Get Carrier Accounts
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public getCarrierAccountsWithHttpInfo(xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<HttpInfo<GetCarrierAccounts200Response>> {
        const requestContextPromise = this.requestFactory.getCarrierAccounts(xPBDeveloperPartnerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCarrierAccountsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation retrieves onboarded Carriers with their Carrier Account Ids which uniquely identify multiple accounts of same carrier.
     * Get Carrier Accounts
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public getCarrierAccounts(xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<GetCarrierAccounts200Response> {
        return this.getCarrierAccountsWithHttpInfo(xPBDeveloperPartnerID, _options).pipe(map((apiResponse: HttpInfo<GetCarrierAccounts200Response>) => apiResponse.data));
    }

    /**
     * This operation fetches all supported carriers. This service is used to get list of supported carriers and their properties.
     * Get Carriers
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public getCarriersWithHttpInfo(xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<HttpInfo<Carriers>> {
        const requestContextPromise = this.requestFactory.getCarriers(xPBDeveloperPartnerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCarriersWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation fetches all supported carriers. This service is used to get list of supported carriers and their properties.
     * Get Carriers
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public getCarriers(xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<Carriers> {
        return this.getCarriersWithHttpInfo(xPBDeveloperPartnerID, _options).pipe(map((apiResponse: HttpInfo<Carriers>) => apiResponse.data));
    }

    /**
     * This operation fetches list of supported destination countries for a provided carrier and origin country. If query parameters are not provided, it will default to `USPS` as carrier and `US` as origin country.
     * Get Countries
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param carrier This indicates the carrierID, a unique identifier given to  an individual carrier.
     * @param originCountryCode This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates.
     */
    public getCountriesWithHttpInfo(xPBDeveloperPartnerID?: string, carrier?: string, originCountryCode?: string, _options?: Configuration): Observable<HttpInfo<Array<CountriesInner>>> {
        const requestContextPromise = this.requestFactory.getCountries(xPBDeveloperPartnerID, carrier, originCountryCode, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCountriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation fetches list of supported destination countries for a provided carrier and origin country. If query parameters are not provided, it will default to `USPS` as carrier and `US` as origin country.
     * Get Countries
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param carrier This indicates the carrierID, a unique identifier given to  an individual carrier.
     * @param originCountryCode This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates.
     */
    public getCountries(xPBDeveloperPartnerID?: string, carrier?: string, originCountryCode?: string, _options?: Configuration): Observable<Array<CountriesInner>> {
        return this.getCountriesWithHttpInfo(xPBDeveloperPartnerID, carrier, originCountryCode, _options).pipe(map((apiResponse: HttpInfo<Array<CountriesInner>>) => apiResponse.data));
    }

    /**
     * This operation fetches Parcel Types based on the provided carrier, origin county, and the destination country. If query parameters are not provided, this will default to `USPS` as carrier, `US` as both origin and destination country code.
     * Get Parcel Types
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param carrier This indicates the CarrierID, a unique identifier given to an individual carrier. It can be referred from the response of Get Carriers API
     * @param originCountryCode This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates.
     * @param destinationCountryCode This indicates the Destination Country for the Shipment. The two-character ISO country code for the country where the shipment is to be delivered.
     */
    public getParcelTypesWithHttpInfo(xPBDeveloperPartnerID?: string, carrier?: string, originCountryCode?: string, destinationCountryCode?: string, _options?: Configuration): Observable<HttpInfo<Array<ParcelTypesInner>>> {
        const requestContextPromise = this.requestFactory.getParcelTypes(xPBDeveloperPartnerID, carrier, originCountryCode, destinationCountryCode, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getParcelTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation fetches Parcel Types based on the provided carrier, origin county, and the destination country. If query parameters are not provided, this will default to `USPS` as carrier, `US` as both origin and destination country code.
     * Get Parcel Types
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param carrier This indicates the CarrierID, a unique identifier given to an individual carrier. It can be referred from the response of Get Carriers API
     * @param originCountryCode This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates.
     * @param destinationCountryCode This indicates the Destination Country for the Shipment. The two-character ISO country code for the country where the shipment is to be delivered.
     */
    public getParcelTypes(xPBDeveloperPartnerID?: string, carrier?: string, originCountryCode?: string, destinationCountryCode?: string, _options?: Configuration): Observable<Array<ParcelTypesInner>> {
        return this.getParcelTypesWithHttpInfo(xPBDeveloperPartnerID, carrier, originCountryCode, destinationCountryCode, _options).pipe(map((apiResponse: HttpInfo<Array<ParcelTypesInner>>) => apiResponse.data));
    }

    /**
     * This API contains 2 operations, rate shop and single rate. Rate shop will fetch rates for all carrier services based on the given addresses (From and To), weight, and dimension for given parcelType. If parcelType is not provided, it will default to `PKG`. Single rate will get rate for specific service and special service (if requested) based on the given addresses (From and To), weight, and dimension, parcelType and serviceId with or without specialServices. Single rate will be used mainly to a rate a shipment before creating shipment.
     * Rate Shop and Get Single Rate
     * @param getRatesRequest 
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param compactResponse This header defines if the response required is detailed or compact. When value is set to true, it will only return rates object in response.
     */
    public getRatesWithHttpInfo(getRatesRequest: GetRatesRequest, xPBDeveloperPartnerID?: string, compactResponse?: boolean, _options?: Configuration): Observable<HttpInfo<GetRates200Response>> {
        const requestContextPromise = this.requestFactory.getRates(getRatesRequest, xPBDeveloperPartnerID, compactResponse, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRatesWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API contains 2 operations, rate shop and single rate. Rate shop will fetch rates for all carrier services based on the given addresses (From and To), weight, and dimension for given parcelType. If parcelType is not provided, it will default to `PKG`. Single rate will get rate for specific service and special service (if requested) based on the given addresses (From and To), weight, and dimension, parcelType and serviceId with or without specialServices. Single rate will be used mainly to a rate a shipment before creating shipment.
     * Rate Shop and Get Single Rate
     * @param getRatesRequest 
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param compactResponse This header defines if the response required is detailed or compact. When value is set to true, it will only return rates object in response.
     */
    public getRates(getRatesRequest: GetRatesRequest, xPBDeveloperPartnerID?: string, compactResponse?: boolean, _options?: Configuration): Observable<GetRates200Response> {
        return this.getRatesWithHttpInfo(getRatesRequest, xPBDeveloperPartnerID, compactResponse, _options).pipe(map((apiResponse: HttpInfo<GetRates200Response>) => apiResponse.data));
    }

    /**
     * This operation fetches a list of supported services for a carrier with respect to specific origin and destination country. If query parameters are not provided, this will default to `USPS` as carrier, `US` as both origin and destination country code.
     * Get Services
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param carrier This indicates the CarrierID, a unique identifier provided to an individual carrier. It can be referred from the response of Get Carriers API
     * @param originCountryCode This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates.
     * @param destinationCountryCode This indicates the Destination Country for the Shipment. The two-character ISO country code for the country where the shipment is to be delivered.
     */
    public getServicesWithHttpInfo(xPBDeveloperPartnerID?: string, carrier?: string, originCountryCode?: string, destinationCountryCode?: string, _options?: Configuration): Observable<HttpInfo<Array<ServicesInner>>> {
        const requestContextPromise = this.requestFactory.getServices(xPBDeveloperPartnerID, carrier, originCountryCode, destinationCountryCode, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getServicesWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation fetches a list of supported services for a carrier with respect to specific origin and destination country. If query parameters are not provided, this will default to `USPS` as carrier, `US` as both origin and destination country code.
     * Get Services
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param carrier This indicates the CarrierID, a unique identifier provided to an individual carrier. It can be referred from the response of Get Carriers API
     * @param originCountryCode This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates.
     * @param destinationCountryCode This indicates the Destination Country for the Shipment. The two-character ISO country code for the country where the shipment is to be delivered.
     */
    public getServices(xPBDeveloperPartnerID?: string, carrier?: string, originCountryCode?: string, destinationCountryCode?: string, _options?: Configuration): Observable<Array<ServicesInner>> {
        return this.getServicesWithHttpInfo(xPBDeveloperPartnerID, carrier, originCountryCode, destinationCountryCode, _options).pipe(map((apiResponse: HttpInfo<Array<ServicesInner>>) => apiResponse.data));
    }

    /**
     * This operation provides a downloadable link which consists of a signature image for specific ERR (Electronic Return Receipt) shipment, and this is known as POD. <br /> Proof of Delivery (POD) is a document or file that shows an evidence of shipment delivery. This file contains the digital copy of recipient\'s signature, i.e., the signature image, in the form of downloadable link or URL.
     * Signature Image ERR
     * @param shipmentId Shipment ID is a unique identifier for an individual shipment.
     * @param xPBDeveloperPartnerID The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     */
    public getSignatureImageERRWithHttpInfo(shipmentId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<HttpInfo<SignatureFileResponse>> {
        const requestContextPromise = this.requestFactory.getSignatureImageERR(shipmentId, xPBDeveloperPartnerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSignatureImageERRWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation provides a downloadable link which consists of a signature image for specific ERR (Electronic Return Receipt) shipment, and this is known as POD. <br /> Proof of Delivery (POD) is a document or file that shows an evidence of shipment delivery. This file contains the digital copy of recipient\'s signature, i.e., the signature image, in the form of downloadable link or URL.
     * Signature Image ERR
     * @param shipmentId Shipment ID is a unique identifier for an individual shipment.
     * @param xPBDeveloperPartnerID The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     */
    public getSignatureImageERR(shipmentId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<SignatureFileResponse> {
        return this.getSignatureImageERRWithHttpInfo(shipmentId, xPBDeveloperPartnerID, _options).pipe(map((apiResponse: HttpInfo<SignatureFileResponse>) => apiResponse.data));
    }

    /**
     * This operation fetches Special Services for a given carrier, service, origin country, and the destination country. If query parameters are not provided, it will default to `USPS` as carrier,`US` as both origin and destination country and would show for all service and parcel types
     * Get Special Services
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param service This indicates the serviceId. It can be referred from response of &#x60;Get Services&#x60; API
     * @param parcel This indicates the parcel Id, a unique identifier named to individual package. It can be referred from response of &#x60;Get Parcel Types&#x60; API
     * @param carrier This indicates the CarrierID, a unique identifier given to  an individual carrier. It can be referred from response of &#x60;Get Carriers&#x60; API
     * @param originCountryCode This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates.
     * @param destinationCountryCode This indicates the Destination Country for the Shipment. The two-character ISO country code for the country where the shipment is to be delivered.
     */
    public getSpecialServicesWithHttpInfo(xPBDeveloperPartnerID?: string, service?: string, parcel?: string, carrier?: string, originCountryCode?: string, destinationCountryCode?: string, _options?: Configuration): Observable<HttpInfo<SpecialServices>> {
        const requestContextPromise = this.requestFactory.getSpecialServices(xPBDeveloperPartnerID, service, parcel, carrier, originCountryCode, destinationCountryCode, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSpecialServicesWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation fetches Special Services for a given carrier, service, origin country, and the destination country. If query parameters are not provided, it will default to `USPS` as carrier,`US` as both origin and destination country and would show for all service and parcel types
     * Get Special Services
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param service This indicates the serviceId. It can be referred from response of &#x60;Get Services&#x60; API
     * @param parcel This indicates the parcel Id, a unique identifier named to individual package. It can be referred from response of &#x60;Get Parcel Types&#x60; API
     * @param carrier This indicates the CarrierID, a unique identifier given to  an individual carrier. It can be referred from response of &#x60;Get Carriers&#x60; API
     * @param originCountryCode This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates.
     * @param destinationCountryCode This indicates the Destination Country for the Shipment. The two-character ISO country code for the country where the shipment is to be delivered.
     */
    public getSpecialServices(xPBDeveloperPartnerID?: string, service?: string, parcel?: string, carrier?: string, originCountryCode?: string, destinationCountryCode?: string, _options?: Configuration): Observable<SpecialServices> {
        return this.getSpecialServicesWithHttpInfo(xPBDeveloperPartnerID, service, parcel, carrier, originCountryCode, destinationCountryCode, _options).pipe(map((apiResponse: HttpInfo<SpecialServices>) => apiResponse.data));
    }

    /**
     * This operation reprints Shipment by the shipmentId. It retrieves an existing shipping label to reprint. The API sends the shipmentId returned by the original Created Shipment request. Use this only if the shipping label in the Create Shipment response was spoilt or lost.
     * Reprint Shipment
     * @param shipmentId This indicates the shipmentId, a unique identifier assigned to the Shipment.
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param compactResponse This header defines if the response required is detailed or compact. When value is set to true, it will only return label layout details and parcel tracking number object in response.
     */
    public reprintShipmentByIdWithHttpInfo(shipmentId: string, xPBDeveloperPartnerID?: string, compactResponse?: boolean, _options?: Configuration): Observable<HttpInfo<ReprintShipment>> {
        const requestContextPromise = this.requestFactory.reprintShipmentById(shipmentId, xPBDeveloperPartnerID, compactResponse, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.reprintShipmentByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation reprints Shipment by the shipmentId. It retrieves an existing shipping label to reprint. The API sends the shipmentId returned by the original Created Shipment request. Use this only if the shipping label in the Create Shipment response was spoilt or lost.
     * Reprint Shipment
     * @param shipmentId This indicates the shipmentId, a unique identifier assigned to the Shipment.
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @param compactResponse This header defines if the response required is detailed or compact. When value is set to true, it will only return label layout details and parcel tracking number object in response.
     */
    public reprintShipmentById(shipmentId: string, xPBDeveloperPartnerID?: string, compactResponse?: boolean, _options?: Configuration): Observable<ReprintShipment> {
        return this.reprintShipmentByIdWithHttpInfo(shipmentId, xPBDeveloperPartnerID, compactResponse, _options).pipe(map((apiResponse: HttpInfo<ReprintShipment>) => apiResponse.data));
    }

    /**
     * This operation retrieves shipment details using shipmentId.
     * Get Shipment by Id
     * @param shipmentId This indicates the shipmentId, a unique identifier for an individual Shipment.
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public shipmentByIdWithHttpInfo(shipmentId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<HttpInfo<GetSingleShipment>> {
        const requestContextPromise = this.requestFactory.shipmentById(shipmentId, xPBDeveloperPartnerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.shipmentByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * This operation retrieves shipment details using shipmentId.
     * Get Shipment by Id
     * @param shipmentId This indicates the shipmentId, a unique identifier for an individual Shipment.
     * @param xPBDeveloperPartnerID This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     */
    public shipmentById(shipmentId: string, xPBDeveloperPartnerID?: string, _options?: Configuration): Observable<GetSingleShipment> {
        return this.shipmentByIdWithHttpInfo(shipmentId, xPBDeveloperPartnerID, _options).pipe(map((apiResponse: HttpInfo<GetSingleShipment>) => apiResponse.data));
    }

}

import { ShipmentByRateShopApiRequestFactory, ShipmentByRateShopApiResponseProcessor} from "../apis/ShipmentByRateShopApi";
export class ObservableShipmentByRateShopApi {
    private requestFactory: ShipmentByRateShopApiRequestFactory;
    private responseProcessor: ShipmentByRateShopApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ShipmentByRateShopApiRequestFactory,
        responseProcessor?: ShipmentByRateShopApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ShipmentByRateShopApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ShipmentByRateShopApiResponseProcessor();
    }

    /**
     * The operation cancel/void shipment.
     * Cancel Shipment
     * @param shipmentCancelV2 
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique Transaction ID provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public cancelShipmentByIdV2WithHttpInfo(shipmentCancelV2: ShipmentCancelV2, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Observable<HttpInfo<CancelShipmentV2>> {
        const requestContextPromise = this.requestFactory.cancelShipmentByIdV2(shipmentCancelV2, xPBDeveloperPartnerId, xPBLocationId, xPBTransactionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelShipmentByIdV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * The operation cancel/void shipment.
     * Cancel Shipment
     * @param shipmentCancelV2 
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique Transaction ID provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public cancelShipmentByIdV2(shipmentCancelV2: ShipmentCancelV2, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Observable<CancelShipmentV2> {
        return this.cancelShipmentByIdV2WithHttpInfo(shipmentCancelV2, xPBDeveloperPartnerId, xPBLocationId, xPBTransactionId, _options).pipe(map((apiResponse: HttpInfo<CancelShipmentV2>) => apiResponse.data));
    }

    /**
     * The operation creates a new Shipment or generate a Shipment Label. - To create a domestic shipment, the operation requires   - Domestic addresses \'To\' and \'From\' locations respectively within the same country   - carrier services, and   - associated special services. - While for the International shipment, the operation requires   - International address(es) for delivery, that is \'To\' address must be the international country location(s) and not the same country mentioned in \'From\' address   - supported international carrier services   - associated special service(s), and    - customs information. 
     * Create Shipment
     * @param createShipmentV2Request 
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique Transaction ID provided by the partner, which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public createShipmentV2WithHttpInfo(createShipmentV2Request: CreateShipmentV2Request, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Observable<HttpInfo<DomesticShipmentResponseV2>> {
        const requestContextPromise = this.requestFactory.createShipmentV2(createShipmentV2Request, xPBDeveloperPartnerId, xPBLocationId, xPBTransactionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createShipmentV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * The operation creates a new Shipment or generate a Shipment Label. - To create a domestic shipment, the operation requires   - Domestic addresses \'To\' and \'From\' locations respectively within the same country   - carrier services, and   - associated special services. - While for the International shipment, the operation requires   - International address(es) for delivery, that is \'To\' address must be the international country location(s) and not the same country mentioned in \'From\' address   - supported international carrier services   - associated special service(s), and    - customs information. 
     * Create Shipment
     * @param createShipmentV2Request 
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique Transaction ID provided by the partner, which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public createShipmentV2(createShipmentV2Request: CreateShipmentV2Request, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Observable<DomesticShipmentResponseV2> {
        return this.createShipmentV2WithHttpInfo(createShipmentV2Request, xPBDeveloperPartnerId, xPBLocationId, xPBTransactionId, _options).pipe(map((apiResponse: HttpInfo<DomesticShipmentResponseV2>) => apiResponse.data));
    }

    /**
     * The operation reprints Shipment by the shipmentId. It retrieves an existing shipping label to reprint. The API sends the shipmentID returned by the original created shipment request. Use this only if the shipping label in the Create Shipment response is missing or lost.
     * Reprint Shipment
     * @param shipmentReprintV2 
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public reprintShipmentByIdV2WithHttpInfo(shipmentReprintV2: ShipmentReprintV2, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Observable<HttpInfo<ReprintShipmentV2>> {
        const requestContextPromise = this.requestFactory.reprintShipmentByIdV2(shipmentReprintV2, xPBDeveloperPartnerId, xPBLocationId, xPBTransactionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.reprintShipmentByIdV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * The operation reprints Shipment by the shipmentId. It retrieves an existing shipping label to reprint. The API sends the shipmentID returned by the original created shipment request. Use this only if the shipping label in the Create Shipment response is missing or lost.
     * Reprint Shipment
     * @param shipmentReprintV2 
     * @param xPBDeveloperPartnerId The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @param xPBLocationId This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @param xPBTransactionId A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     */
    public reprintShipmentByIdV2(shipmentReprintV2: ShipmentReprintV2, xPBDeveloperPartnerId?: string, xPBLocationId?: string, xPBTransactionId?: string, _options?: Configuration): Observable<ReprintShipmentV2> {
        return this.reprintShipmentByIdV2WithHttpInfo(shipmentReprintV2, xPBDeveloperPartnerId, xPBLocationId, xPBTransactionId, _options).pipe(map((apiResponse: HttpInfo<ReprintShipmentV2>) => apiResponse.data));
    }

}
