import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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

import { ObservableAddressApi } from "./ObservableAPI";
import { AddressApiRequestFactory, AddressApiResponseProcessor} from "../apis/AddressApi";

export interface AddressApiAddressSuggestRequest {
    /**
     * 
     * @type AddressSuggestRequest
     * @memberof AddressApiaddressSuggest
     */
    addressSuggestRequest: AddressSuggestRequest
}

export interface AddressApiAddressValidateRequest {
    /**
     * 
     * @type AddressValidateRequest
     * @memberof AddressApiaddressValidate
     */
    addressValidateRequest: AddressValidateRequest
    /**
     * If true, then only City, State, and PostalCode (zip) are validated. This option is specific for US domestic addresses only.
     * @type boolean
     * @memberof AddressApiaddressValidate
     */
    minimalAddressValidation?: boolean
}

export class ObjectAddressApi {
    private api: ObservableAddressApi

    public constructor(configuration: Configuration, requestFactory?: AddressApiRequestFactory, responseProcessor?: AddressApiResponseProcessor) {
        this.api = new ObservableAddressApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This operation displays a valid address to match the entered address, only if the address does not seem valid to the system address map. User can select the suggested address or edit the entered address to make it valid.
     * Address Suggest
     * @param param the request object
     */
    public addressSuggestWithHttpInfo(param: AddressApiAddressSuggestRequest, options?: Configuration): Promise<HttpInfo<AddressSuggestResponse>> {
        return this.api.addressSuggestWithHttpInfo(param.addressSuggestRequest,  options).toPromise();
    }

    /**
     * This operation displays a valid address to match the entered address, only if the address does not seem valid to the system address map. User can select the suggested address or edit the entered address to make it valid.
     * Address Suggest
     * @param param the request object
     */
    public addressSuggest(param: AddressApiAddressSuggestRequest, options?: Configuration): Promise<AddressSuggestResponse> {
        return this.api.addressSuggest(param.addressSuggestRequest,  options).toPromise();
    }

    /**
     * This operation validates address. This improves postal addresses within the country (e.g., United States) to help ensure that parcels are rated accurately and shipments arrive at the final destination on time.<br> The verify address operation sends an address to be verified. The response indicates whether the address is valid.
     * Address Validate
     * @param param the request object
     */
    public addressValidateWithHttpInfo(param: AddressApiAddressValidateRequest, options?: Configuration): Promise<HttpInfo<AddressValidateResponse>> {
        return this.api.addressValidateWithHttpInfo(param.addressValidateRequest, param.minimalAddressValidation,  options).toPromise();
    }

    /**
     * This operation validates address. This improves postal addresses within the country (e.g., United States) to help ensure that parcels are rated accurately and shipments arrive at the final destination on time.<br> The verify address operation sends an address to be verified. The response indicates whether the address is valid.
     * Address Validate
     * @param param the request object
     */
    public addressValidate(param: AddressApiAddressValidateRequest, options?: Configuration): Promise<AddressValidateResponse> {
        return this.api.addressValidate(param.addressValidateRequest, param.minimalAddressValidation,  options).toPromise();
    }

}

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiBulkImportAPIRequest {
    /**
     *  This is the Request body to bulk import shipments.
     * @type CreateBatchRequest
     * @memberof BatchApibulkImportAPI
     */
    body: CreateBatchRequest
    /**
     * This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof BatchApibulkImportAPI
     */
    xPBDeveloperPartnerID?: string
}

export interface BatchApiBulkImportAPIERRRequest {
    /**
     *  This is the request body to import ERR Bulk shipments.
     * @type CreateBatchRequestERR
     * @memberof BatchApibulkImportAPIERR
     */
    body: CreateBatchRequestERR
    /**
     * The PB-Developer-Partner-ID is assigned by PB to uniquely identify a developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     * @type string
     * @memberof BatchApibulkImportAPIERR
     */
    xPBDeveloperPartnerID?: string
}

export interface BatchApiCreateBulkShipmentsAPIRequest {
    /**
     * This is the Request body to create bulk shipments.
     * @type CreateBulkShipmentsAPIRequest
     * @memberof BatchApicreateBulkShipmentsAPI
     */
    body: CreateBulkShipmentsAPIRequest
    /**
     * This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof BatchApicreateBulkShipmentsAPI
     */
    xPBDeveloperPartnerID?: string
}

export interface BatchApiCreateBulkShipmentsAPIERRRequest {
    /**
     * This is the request body to create Bulk Shipment for ERR.
     * @type CreateBulkShipmentsAPIERRRequest
     * @memberof BatchApicreateBulkShipmentsAPIERR
     */
    body: CreateBulkShipmentsAPIERRRequest
    /**
     * The Developer-Partner-ID is assigned by PB to uniquely identify a developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     * @type string
     * @memberof BatchApicreateBulkShipmentsAPIERR
     */
    xPBDeveloperPartnerID?: string
}

export interface BatchApiGetBatchStatusAPIRequest {
    /**
     * This is a system-generated unique identifier assigned to the Batch while it is processed.
     * @type string
     * @memberof BatchApigetBatchStatusAPI
     */
    batchId: string
    /**
     * The Developer-Partner- ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     * @type string
     * @memberof BatchApigetBatchStatusAPI
     */
    xPBDeveloperPartnerID?: string
}

export interface BatchApiGetShipmentDetailsForBatchAPIRequest {
    /**
     * This is a system-generated unique identifier assigned to the Batch while it is processed
     * @type string
     * @memberof BatchApigetShipmentDetailsForBatchAPI
     */
    batchId: string
    /**
     * The Developer-Partner- ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     * @type string
     * @memberof BatchApigetShipmentDetailsForBatchAPI
     */
    xPBDeveloperPartnerID?: string
    /**
     * It returns detailed information for shipments status and it can cover in one or more pages. The default value for page number is 1.
     * @type number
     * @memberof BatchApigetShipmentDetailsForBatchAPI
     */
    page?: number
    /**
     * Indicates the number of records per page. The default value for records is 20.
     * @type number
     * @memberof BatchApigetShipmentDetailsForBatchAPI
     */
    size?: number
    /**
     * The status of the shipment. Values can be Failed or Success.
     * @type &#39;SUCCESS&#39; | &#39;FAILED&#39;
     * @memberof BatchApigetShipmentDetailsForBatchAPI
     */
    status?: 'SUCCESS' | 'FAILED'
    /**
     * Indicates various stages of the batch processing.
     * @type &#39;rating&#39; | &#39;addressValidation&#39; | &#39;labelGeneration&#39; | &#39;voidLabel&#39;
     * @memberof BatchApigetShipmentDetailsForBatchAPI
     */
    step?: 'rating' | 'addressValidation' | 'labelGeneration' | 'voidLabel'
}

export interface BatchApiProcessBatchAPIRequest {
    /**
     * This is a system-generated unique identifier assigned to the Batch while it is processed.
     * @type string
     * @memberof BatchApiprocessBatchAPI
     */
    batchId: string
    /**
     * The Developer-Partner-ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     * @type string
     * @memberof BatchApiprocessBatchAPI
     */
    xPBDeveloperPartnerID?: string
}

export interface BatchApiVoidShippingLabelRequest {
    /**
     * This is a system-generated unique identifier assigned to the Batch while it is processed.
     * @type string
     * @memberof BatchApivoidShippingLabel
     */
    batchId: string
    /**
     * The Developer-Partner-ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     * @type string
     * @memberof BatchApivoidShippingLabel
     */
    xPBDeveloperPartnerID?: string
    /**
     *  This is the request body for cancelling the selected shipments or entire Batch of shipments*.
     * @type VoidBatchRequest
     * @memberof BatchApivoidShippingLabel
     */
    voidBatchRequest?: VoidBatchRequest
}

export class ObjectBatchApi {
    private api: ObservableBatchApi

    public constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This operation imports the .CSV file, which includes all the required fields to create shipments in bulk. The payload contains information about the shipments you want to import, such as `carrier account`, `label layout`, `service`, and any `special services` required for the shipments. After batch is submitted, user needs to upload csv file of shipment transactions to the uploadURL returned in response.
     * Bulk Import Shipments
     * @param param the request object
     */
    public bulkImportAPIWithHttpInfo(param: BatchApiBulkImportAPIRequest, options?: Configuration): Promise<HttpInfo<ShipmentBatch>> {
        return this.api.bulkImportAPIWithHttpInfo(param.body, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation imports the .CSV file, which includes all the required fields to create shipments in bulk. The payload contains information about the shipments you want to import, such as `carrier account`, `label layout`, `service`, and any `special services` required for the shipments. After batch is submitted, user needs to upload csv file of shipment transactions to the uploadURL returned in response.
     * Bulk Import Shipments
     * @param param the request object
     */
    public bulkImportAPI(param: BatchApiBulkImportAPIRequest, options?: Configuration): Promise<ShipmentBatch> {
        return this.api.bulkImportAPI(param.body, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation imports the .CSV file which includes fields required for creating ERR (Electronic Return Receipt) Bulk Shipments.    The payload, which is used for shipment transactions, contains the following essential information in .CSV file:   - Carrier Account   - Output format: Shipping Label and Coversheet    - Services, and   - Special Services     The above-mentioned information are stored in AWS-S3 which in turn provides URL to users. When Batch is submitted, S3 returned URL along with .CSV file are uploaded, which generates BatchID.    The same BatchID is used to track the status of BulkImport. 
     * Bulk Import Shipments ERR
     * @param param the request object
     */
    public bulkImportAPIERRWithHttpInfo(param: BatchApiBulkImportAPIERRRequest, options?: Configuration): Promise<HttpInfo<ShipmentBatchResponseERR>> {
        return this.api.bulkImportAPIERRWithHttpInfo(param.body, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation imports the .CSV file which includes fields required for creating ERR (Electronic Return Receipt) Bulk Shipments.    The payload, which is used for shipment transactions, contains the following essential information in .CSV file:   - Carrier Account   - Output format: Shipping Label and Coversheet    - Services, and   - Special Services     The above-mentioned information are stored in AWS-S3 which in turn provides URL to users. When Batch is submitted, S3 returned URL along with .CSV file are uploaded, which generates BatchID.    The same BatchID is used to track the status of BulkImport. 
     * Bulk Import Shipments ERR
     * @param param the request object
     */
    public bulkImportAPIERR(param: BatchApiBulkImportAPIERRRequest, options?: Configuration): Promise<ShipmentBatchResponseERR> {
        return this.api.bulkImportAPIERR(param.body, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation creates a batch of bulk (larger quantities) shipments for single or multiple recipients. The shipments can be addressed to a single or multiple recipients with different combination of carrier, service special services and parcel type. `carrierAccountId`, `parcelType`, `serviceId` and `specialServices` are used as default when user do not wish to provide at shipment level. If user choose to provide these at Shipment level then it overrides the values provided at root level. At shipment level either you can wish to provide all of `carrierAccountId`, `parcelType`, `serviceId` and `specialServices` or not provide all of them if wants to use default ones from root level. If user do not provide any one out of `carrierAccountId`, `parcelType` and `serviceId` at shipment level it would result in validation error
     * Create Bulk Shipments
     * @param param the request object
     */
    public createBulkShipmentsAPIWithHttpInfo(param: BatchApiCreateBulkShipmentsAPIRequest, options?: Configuration): Promise<HttpInfo<BulkShipmentResponse>> {
        return this.api.createBulkShipmentsAPIWithHttpInfo(param.body, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation creates a batch of bulk (larger quantities) shipments for single or multiple recipients. The shipments can be addressed to a single or multiple recipients with different combination of carrier, service special services and parcel type. `carrierAccountId`, `parcelType`, `serviceId` and `specialServices` are used as default when user do not wish to provide at shipment level. If user choose to provide these at Shipment level then it overrides the values provided at root level. At shipment level either you can wish to provide all of `carrierAccountId`, `parcelType`, `serviceId` and `specialServices` or not provide all of them if wants to use default ones from root level. If user do not provide any one out of `carrierAccountId`, `parcelType` and `serviceId` at shipment level it would result in validation error
     * Create Bulk Shipments
     * @param param the request object
     */
    public createBulkShipmentsAPI(param: BatchApiCreateBulkShipmentsAPIRequest, options?: Configuration): Promise<BulkShipmentResponse> {
        return this.api.createBulkShipmentsAPI(param.body, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * ERR (Electronic Return Receipt) is an official United States Postal Service® (USPS) document designed to be equivalent to the hardcopy \'green card\' Return Receipt. <br />    It provides the following information:   - Name of the Recipient     - Time when article is delivered   - Signature (image) of the Recipient     - Address where the item is delivered, and    - Date when the article gets delivered.      ERR is combined with certain classes and categories of mails, which are as follow:   - First-Class Mail®    - Priority Mail®     ERR Batch supports two types of Shipment Document format:    - Shipping Label    - Coversheet       This API \"Create Bulk Shipments with ERR\" operation requires the following information:   - Recipient (Single or Multiple)   - Carrier - USPS   - Service   - Parcel Type, and   - Special Service.    The ERR API works at two levels: Shipment level and Root level. Root level is marked as Default, where multiple shipments are processed and entities are common for all shipments. While at Shipment level, entities might differ. <br />   User can either define values for *CarrierAccountID*, *ParcelType*, *ServiceID*, and *SpecialService* respectively at the Root level for all shipments, or mention the values at Shipment level, i.e., for individual shipment(s).     If user does not provide values for the above-mentioned fields combinedly at Shipment level, then the default values for these fields provided at Root level will be considered. While, if user provides these values combinedly at Shipment Level for individual shipment(s), it will override the values defined at Root level. <br />   <br />   *Condition: The fields *CarrierAccountID*, *ParcelType*, *ServiceID* are treated as a combination, and values against each field must be provided if user selects Shipment level. In case any of these field(s) out of the mentioned combination is/are missing, it will return validation error.*    
     * Create Bulk Shipments ERR
     * @param param the request object
     */
    public createBulkShipmentsAPIERRWithHttpInfo(param: BatchApiCreateBulkShipmentsAPIERRRequest, options?: Configuration): Promise<HttpInfo<BulkShipmentResponseERR>> {
        return this.api.createBulkShipmentsAPIERRWithHttpInfo(param.body, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * ERR (Electronic Return Receipt) is an official United States Postal Service® (USPS) document designed to be equivalent to the hardcopy \'green card\' Return Receipt. <br />    It provides the following information:   - Name of the Recipient     - Time when article is delivered   - Signature (image) of the Recipient     - Address where the item is delivered, and    - Date when the article gets delivered.      ERR is combined with certain classes and categories of mails, which are as follow:   - First-Class Mail®    - Priority Mail®     ERR Batch supports two types of Shipment Document format:    - Shipping Label    - Coversheet       This API \"Create Bulk Shipments with ERR\" operation requires the following information:   - Recipient (Single or Multiple)   - Carrier - USPS   - Service   - Parcel Type, and   - Special Service.    The ERR API works at two levels: Shipment level and Root level. Root level is marked as Default, where multiple shipments are processed and entities are common for all shipments. While at Shipment level, entities might differ. <br />   User can either define values for *CarrierAccountID*, *ParcelType*, *ServiceID*, and *SpecialService* respectively at the Root level for all shipments, or mention the values at Shipment level, i.e., for individual shipment(s).     If user does not provide values for the above-mentioned fields combinedly at Shipment level, then the default values for these fields provided at Root level will be considered. While, if user provides these values combinedly at Shipment Level for individual shipment(s), it will override the values defined at Root level. <br />   <br />   *Condition: The fields *CarrierAccountID*, *ParcelType*, *ServiceID* are treated as a combination, and values against each field must be provided if user selects Shipment level. In case any of these field(s) out of the mentioned combination is/are missing, it will return validation error.*    
     * Create Bulk Shipments ERR
     * @param param the request object
     */
    public createBulkShipmentsAPIERR(param: BatchApiCreateBulkShipmentsAPIERRRequest, options?: Configuration): Promise<BulkShipmentResponseERR> {
        return this.api.createBulkShipmentsAPIERR(param.body, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation retrieves the status of an existing Batch using *Batch ID*. Once the Job status is completed, the URL received from Response can be used to download the shipping label in PDF format.
     * Get Batch Status
     * @param param the request object
     */
    public getBatchStatusAPIWithHttpInfo(param: BatchApiGetBatchStatusAPIRequest, options?: Configuration): Promise<HttpInfo<GetStatusDetailedResponse>> {
        return this.api.getBatchStatusAPIWithHttpInfo(param.batchId, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation retrieves the status of an existing Batch using *Batch ID*. Once the Job status is completed, the URL received from Response can be used to download the shipping label in PDF format.
     * Get Batch Status
     * @param param the request object
     */
    public getBatchStatusAPI(param: BatchApiGetBatchStatusAPIRequest, options?: Configuration): Promise<GetStatusDetailedResponse> {
        return this.api.getBatchStatusAPI(param.batchId, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * \"This API operation provides the shipment details for those shipments which are SUCCESS or FAILED during batch processing at the following levels: - addressValidation - rating - labelGeneration, and - voidLabel  Based on fields/data mentioned in Query Parameter, user can check shipment details for particular status at any levels. <br /> If no values are provided in the fields mentioned in Query Parameter, the default for each will be: - Page: 1  - Size: 20 - Status: SUCCESS/FAILED. 
     * Get Batch Shipment Details
     * @param param the request object
     */
    public getShipmentDetailsForBatchAPIWithHttpInfo(param: BatchApiGetShipmentDetailsForBatchAPIRequest, options?: Configuration): Promise<HttpInfo<GetShipmentsForBatch>> {
        return this.api.getShipmentDetailsForBatchAPIWithHttpInfo(param.batchId, param.xPBDeveloperPartnerID, param.page, param.size, param.status, param.step,  options).toPromise();
    }

    /**
     * \"This API operation provides the shipment details for those shipments which are SUCCESS or FAILED during batch processing at the following levels: - addressValidation - rating - labelGeneration, and - voidLabel  Based on fields/data mentioned in Query Parameter, user can check shipment details for particular status at any levels. <br /> If no values are provided in the fields mentioned in Query Parameter, the default for each will be: - Page: 1  - Size: 20 - Status: SUCCESS/FAILED. 
     * Get Batch Shipment Details
     * @param param the request object
     */
    public getShipmentDetailsForBatchAPI(param: BatchApiGetShipmentDetailsForBatchAPIRequest, options?: Configuration): Promise<GetShipmentsForBatch> {
        return this.api.getShipmentDetailsForBatchAPI(param.batchId, param.xPBDeveloperPartnerID, param.page, param.size, param.status, param.step,  options).toPromise();
    }

    /**
     * This operation processes (executes) the existing Batch. The payload for this endpoint needs only an empty JSON object and no additional data is required in the request body. The BatchID parameter located in the endpoint specifies which batch of shipments to process.
     * Process Batch
     * @param param the request object
     */
    public processBatchAPIWithHttpInfo(param: BatchApiProcessBatchAPIRequest, options?: Configuration): Promise<HttpInfo<ProcessShipmentResponse>> {
        return this.api.processBatchAPIWithHttpInfo(param.batchId, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation processes (executes) the existing Batch. The payload for this endpoint needs only an empty JSON object and no additional data is required in the request body. The BatchID parameter located in the endpoint specifies which batch of shipments to process.
     * Process Batch
     * @param param the request object
     */
    public processBatchAPI(param: BatchApiProcessBatchAPIRequest, options?: Configuration): Promise<ProcessShipmentResponse> {
        return this.api.processBatchAPI(param.batchId, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation cancels (voids) shipments which are created using the Batch API operation `createBulkShipments`. <br /> If user wants to cancel specific shipment(s) of the Batch, then s/he needs to pass the *Shipment ID* for the selected shipments in the `shipmentIDs` array. While if user wants to cancel all shipments of the Batch, then s/he does not need to provide any *Shipment ID* in the array under request body.
     * Void Batch Shipping Labels
     * @param param the request object
     */
    public voidShippingLabelWithHttpInfo(param: BatchApiVoidShippingLabelRequest, options?: Configuration): Promise<HttpInfo<VoidBatchResponse>> {
        return this.api.voidShippingLabelWithHttpInfo(param.batchId, param.xPBDeveloperPartnerID, param.voidBatchRequest,  options).toPromise();
    }

    /**
     * This operation cancels (voids) shipments which are created using the Batch API operation `createBulkShipments`. <br /> If user wants to cancel specific shipment(s) of the Batch, then s/he needs to pass the *Shipment ID* for the selected shipments in the `shipmentIDs` array. While if user wants to cancel all shipments of the Batch, then s/he does not need to provide any *Shipment ID* in the array under request body.
     * Void Batch Shipping Labels
     * @param param the request object
     */
    public voidShippingLabel(param: BatchApiVoidShippingLabelRequest, options?: Configuration): Promise<VoidBatchResponse> {
        return this.api.voidShippingLabel(param.batchId, param.xPBDeveloperPartnerID, param.voidBatchRequest,  options).toPromise();
    }

}

import { ObservableDefaultsApi } from "./ObservableAPI";
import { DefaultsApiRequestFactory, DefaultsApiResponseProcessor} from "../apis/DefaultsApi";

export interface DefaultsApiCreateDefaultsRequest {
    /**
     * 
     * @type CreateDefaults
     * @memberof DefaultsApicreateDefaults
     */
    createDefaults: CreateDefaults
}

export interface DefaultsApiDeleteDefaultsByIdRequest {
    /**
     * This is unique identifier assigned to Defaults while its creation using CreateDefaults API.
     * @type string
     * @memberof DefaultsApideleteDefaultsById
     */
    defaultID: string
}

export interface DefaultsApiGetAllDefaultsRequest {
    /**
     * The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @type string
     * @memberof DefaultsApigetAllDefaults
     */
    xPBDeveloperPartnerID?: string
    /**
     * The page of the Defaults search result list.
     * @type string
     * @memberof DefaultsApigetAllDefaults
     */
    page?: string
    /**
     * The size/count of the searched result list.
     * @type string
     * @memberof DefaultsApigetAllDefaults
     */
    size?: string
}

export interface DefaultsApiGetDefaultsByIdRequest {
    /**
     * This is unique identifier assigned to Defaults while its creation using CreateDefaults API.
     * @type string
     * @memberof DefaultsApigetDefaultsById
     */
    defaultID: string
}

export interface DefaultsApiPutDefaultsByIdRequest {
    /**
     * This is unique identifier assigned to Defaults while its creation using CreateDefaults API.
     * @type string
     * @memberof DefaultsApiputDefaultsById
     */
    defaultID: string
    /**
     * 
     * @type CreateDefaults
     * @memberof DefaultsApiputDefaultsById
     */
    createDefaults: CreateDefaults
}

export class ObjectDefaultsApi {
    private api: ObservableDefaultsApi

    public constructor(configuration: Configuration, requestFactory?: DefaultsApiRequestFactory, responseProcessor?: DefaultsApiResponseProcessor) {
        this.api = new ObservableDefaultsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * While creating shipment, a few columns/ fields information are used mandatorily, and if the value for those columns are used repetitively, then it is always better to save last used values. And hence, this API has been introduced. Using this API, default values can be set up for frequently used columns/fields information like carrier, its linked services, and special services.  Setting up the defaults will save both time and efforts. 
     * Create Defaults
     * @param param the request object
     */
    public createDefaultsWithHttpInfo(param: DefaultsApiCreateDefaultsRequest, options?: Configuration): Promise<HttpInfo<CreateDefaultsResponse>> {
        return this.api.createDefaultsWithHttpInfo(param.createDefaults,  options).toPromise();
    }

    /**
     * While creating shipment, a few columns/ fields information are used mandatorily, and if the value for those columns are used repetitively, then it is always better to save last used values. And hence, this API has been introduced. Using this API, default values can be set up for frequently used columns/fields information like carrier, its linked services, and special services.  Setting up the defaults will save both time and efforts. 
     * Create Defaults
     * @param param the request object
     */
    public createDefaults(param: DefaultsApiCreateDefaultsRequest, options?: Configuration): Promise<CreateDefaultsResponse> {
        return this.api.createDefaults(param.createDefaults,  options).toPromise();
    }

    /**
     * This operation deletes the existing Defaults.
     * Delete Defaults by ID
     * @param param the request object
     */
    public deleteDefaultsByIdWithHttpInfo(param: DefaultsApiDeleteDefaultsByIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteDefaultsByIdWithHttpInfo(param.defaultID,  options).toPromise();
    }

    /**
     * This operation deletes the existing Defaults.
     * Delete Defaults by ID
     * @param param the request object
     */
    public deleteDefaultsById(param: DefaultsApiDeleteDefaultsByIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteDefaultsById(param.defaultID,  options).toPromise();
    }

    /**
     * The operation fetches all created Defaults. If query parameters are not provided, it will consider default page as 1 and default size as 10.
     * Get All Defaults
     * @param param the request object
     */
    public getAllDefaultsWithHttpInfo(param: DefaultsApiGetAllDefaultsRequest = {}, options?: Configuration): Promise<HttpInfo<AllDefaults>> {
        return this.api.getAllDefaultsWithHttpInfo(param.xPBDeveloperPartnerID, param.page, param.size,  options).toPromise();
    }

    /**
     * The operation fetches all created Defaults. If query parameters are not provided, it will consider default page as 1 and default size as 10.
     * Get All Defaults
     * @param param the request object
     */
    public getAllDefaults(param: DefaultsApiGetAllDefaultsRequest = {}, options?: Configuration): Promise<AllDefaults> {
        return this.api.getAllDefaults(param.xPBDeveloperPartnerID, param.page, param.size,  options).toPromise();
    }

    /**
     * This operation fetches the values set for the Defaults.
     * Get Defaults By ID
     * @param param the request object
     */
    public getDefaultsByIdWithHttpInfo(param: DefaultsApiGetDefaultsByIdRequest, options?: Configuration): Promise<HttpInfo<DefaultResponse>> {
        return this.api.getDefaultsByIdWithHttpInfo(param.defaultID,  options).toPromise();
    }

    /**
     * This operation fetches the values set for the Defaults.
     * Get Defaults By ID
     * @param param the request object
     */
    public getDefaultsById(param: DefaultsApiGetDefaultsByIdRequest, options?: Configuration): Promise<DefaultResponse> {
        return this.api.getDefaultsById(param.defaultID,  options).toPromise();
    }

    /**
     * This operation updates the values set for Defaults.
     * Update Defaults
     * @param param the request object
     */
    public putDefaultsByIdWithHttpInfo(param: DefaultsApiPutDefaultsByIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.putDefaultsByIdWithHttpInfo(param.defaultID, param.createDefaults,  options).toPromise();
    }

    /**
     * This operation updates the values set for Defaults.
     * Update Defaults
     * @param param the request object
     */
    public putDefaultsById(param: DefaultsApiPutDefaultsByIdRequest, options?: Configuration): Promise<void> {
        return this.api.putDefaultsById(param.defaultID, param.createDefaults,  options).toPromise();
    }

}

import { ObservableManifestApi } from "./ObservableAPI";
import { ManifestApiRequestFactory, ManifestApiResponseProcessor} from "../apis/ManifestApi";

export interface ManifestApiCreateManifestRequest {
    /**
     * This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof ManifestApicreateManifest
     */
    xPBDeveloperPartnerID?: string
    /**
     * This header defines if the response required is detailed or compact. When value is set to true, it will only return manifest details in response. 
     * @type boolean
     * @memberof ManifestApicreateManifest
     */
    compactResponse?: boolean
    /**
     * 
     * @type CreateManifestRequest
     * @memberof ManifestApicreateManifest
     */
    createManifestRequest?: CreateManifestRequest
}

export interface ManifestApiReprintManifestRequest {
    /**
     * This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof ManifestApireprintManifest
     */
    xPBDeveloperPartnerID?: string
    /**
     * This header defines if the response required is detailed or compact. When value is set to true, it will only return manifest details in response.
     * @type boolean
     * @memberof ManifestApireprintManifest
     */
    compactResponse?: boolean
    /**
     * 
     * @type ReprintManifestRequest
     * @memberof ManifestApireprintManifest
     */
    reprintManifestRequest?: ReprintManifestRequest
}

export class ObjectManifestApi {
    private api: ObservableManifestApi

    public constructor(configuration: Configuration, requestFactory?: ManifestApiRequestFactory, responseProcessor?: ManifestApiResponseProcessor) {
        this.api = new ObservableManifestApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This operation creates an end-of-day manifest (a compilation of information about all shipments) that combines all shipments of the day into a single form or electronic record, depending on the carrier. For different carriers, the Manifest process varies, e.g., USPS use SCAN Form while FedEx has Manifest Form.
     * Create Manifest
     * @param param the request object
     */
    public createManifestWithHttpInfo(param: ManifestApiCreateManifestRequest = {}, options?: Configuration): Promise<HttpInfo<CreateManifest200Response>> {
        return this.api.createManifestWithHttpInfo(param.xPBDeveloperPartnerID, param.compactResponse, param.createManifestRequest,  options).toPromise();
    }

    /**
     * This operation creates an end-of-day manifest (a compilation of information about all shipments) that combines all shipments of the day into a single form or electronic record, depending on the carrier. For different carriers, the Manifest process varies, e.g., USPS use SCAN Form while FedEx has Manifest Form.
     * Create Manifest
     * @param param the request object
     */
    public createManifest(param: ManifestApiCreateManifestRequest = {}, options?: Configuration): Promise<CreateManifest200Response> {
        return this.api.createManifest(param.xPBDeveloperPartnerID, param.compactResponse, param.createManifestRequest,  options).toPromise();
    }

    /**
     * This operation reprints a manifest for which the initial created manifest request was successful.
     * Reprint manifest
     * @param param the request object
     */
    public reprintManifestWithHttpInfo(param: ManifestApiReprintManifestRequest = {}, options?: Configuration): Promise<HttpInfo<CreateManifest200Response>> {
        return this.api.reprintManifestWithHttpInfo(param.xPBDeveloperPartnerID, param.compactResponse, param.reprintManifestRequest,  options).toPromise();
    }

    /**
     * This operation reprints a manifest for which the initial created manifest request was successful.
     * Reprint manifest
     * @param param the request object
     */
    public reprintManifest(param: ManifestApiReprintManifestRequest = {}, options?: Configuration): Promise<CreateManifest200Response> {
        return this.api.reprintManifest(param.xPBDeveloperPartnerID, param.compactResponse, param.reprintManifestRequest,  options).toPromise();
    }

}

import { ObservableMultipieceApi } from "./ObservableAPI";
import { MultipieceApiRequestFactory, MultipieceApiResponseProcessor} from "../apis/MultipieceApi";

export interface MultipieceApiMultipieceRatesRequest {
    /**
     * 
     * @type MultipieceRatesRequest
     * @memberof MultipieceApimultipieceRates
     */
    multipieceRatesRequest: MultipieceRatesRequest
    /**
     * This is the Develover Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof MultipieceApimultipieceRates
     */
    xPBDeveloperPartnerID?: string
}

export interface MultipieceApiMultipieceShipmentRequest {
    /**
     * 
     * @type MultipieceShipmentRequest
     * @memberof MultipieceApimultipieceShipment
     */
    multipieceShipmentRequest: MultipieceShipmentRequest
    /**
     * This is the Develover Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof MultipieceApimultipieceShipment
     */
    xPBDeveloperPartnerID?: string
}

export interface MultipieceApiMultipieceShipmentCancelRequest {
    /**
     * It specifies the shipmentId of onward shipment against which return label has to be created.
     * @type string
     * @memberof MultipieceApimultipieceShipmentCancel
     */
    shipmentId: string
    /**
     * This is the Develover Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof MultipieceApimultipieceShipmentCancel
     */
    xPBDeveloperPartnerID?: string
}

export interface MultipieceApiMultipieceShipmentReprintRequest {
    /**
     * It specifies the shipmentId of onward shipment against which return label has to be created.
     * @type string
     * @memberof MultipieceApimultipieceShipmentReprint
     */
    shipmentId: string
    /**
     * This is the Develover Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof MultipieceApimultipieceShipmentReprint
     */
    xPBDeveloperPartnerID?: string
}

export class ObjectMultipieceApi {
    private api: ObservableMultipieceApi

    public constructor(configuration: Configuration, requestFactory?: MultipieceApiRequestFactory, responseProcessor?: MultipieceApiResponseProcessor) {
        this.api = new ObservableMultipieceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API contains 2 operations, rate shop and single rate. Rate shop will fetch rates for all carrier services based on the given addresses (From and To), weight, and dimension for given parcelType in multiPieceParcels object. Single rate will get rate for specific service and special service (if requested) based on the given addresses (From and To), weight, and dimension, parcelType and serviceId with or without specialServices. Single rate will be used mainly to a rate a shipment before creating shipment.  <br> For UPS- multipiece shipment with Envelopes (having parcel Type as LTR) is not supported.  <br> For FEDEX Multipiece, all parcels must be of same packaging type while creating multipiece shipment
     * Multipiece Rateshop and Rates
     * @param param the request object
     */
    public multipieceRatesWithHttpInfo(param: MultipieceApiMultipieceRatesRequest, options?: Configuration): Promise<HttpInfo<MultipieceRates200Response>> {
        return this.api.multipieceRatesWithHttpInfo(param.multipieceRatesRequest, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This API contains 2 operations, rate shop and single rate. Rate shop will fetch rates for all carrier services based on the given addresses (From and To), weight, and dimension for given parcelType in multiPieceParcels object. Single rate will get rate for specific service and special service (if requested) based on the given addresses (From and To), weight, and dimension, parcelType and serviceId with or without specialServices. Single rate will be used mainly to a rate a shipment before creating shipment.  <br> For UPS- multipiece shipment with Envelopes (having parcel Type as LTR) is not supported.  <br> For FEDEX Multipiece, all parcels must be of same packaging type while creating multipiece shipment
     * Multipiece Rateshop and Rates
     * @param param the request object
     */
    public multipieceRates(param: MultipieceApiMultipieceRatesRequest, options?: Configuration): Promise<MultipieceRates200Response> {
        return this.api.multipieceRates(param.multipieceRatesRequest, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation is used to create Multipiece Shipments. UPS, FedEx and DHL Express are supported for Multipiece Shipments.  <br> For UPS- multipiece shipment with Envelopes (having parcel Type as LTR) is not supported.  <br> For FEDEX Multipiece, all parcels must be of same packaging type while creating multipiece shipment
     * Multipiece Shipment
     * @param param the request object
     */
    public multipieceShipmentWithHttpInfo(param: MultipieceApiMultipieceShipmentRequest, options?: Configuration): Promise<HttpInfo<MultipieceShipment200Response>> {
        return this.api.multipieceShipmentWithHttpInfo(param.multipieceShipmentRequest, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation is used to create Multipiece Shipments. UPS, FedEx and DHL Express are supported for Multipiece Shipments.  <br> For UPS- multipiece shipment with Envelopes (having parcel Type as LTR) is not supported.  <br> For FEDEX Multipiece, all parcels must be of same packaging type while creating multipiece shipment
     * Multipiece Shipment
     * @param param the request object
     */
    public multipieceShipment(param: MultipieceApiMultipieceShipmentRequest, options?: Configuration): Promise<MultipieceShipment200Response> {
        return this.api.multipieceShipment(param.multipieceShipmentRequest, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation is used to cancel the multipiece label. It takes the shipmentId of the multipiece shipment done.
     * Cancel Multipiece Shipment
     * @param param the request object
     */
    public multipieceShipmentCancelWithHttpInfo(param: MultipieceApiMultipieceShipmentCancelRequest, options?: Configuration): Promise<HttpInfo<CancelShipment>> {
        return this.api.multipieceShipmentCancelWithHttpInfo(param.shipmentId, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation is used to cancel the multipiece label. It takes the shipmentId of the multipiece shipment done.
     * Cancel Multipiece Shipment
     * @param param the request object
     */
    public multipieceShipmentCancel(param: MultipieceApiMultipieceShipmentCancelRequest, options?: Configuration): Promise<CancelShipment> {
        return this.api.multipieceShipmentCancel(param.shipmentId, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation is used to reprint the multipiece label. It takes the shipmentId of the multipiece shipment done.
     * Reprint Multipiece Shipment
     * @param param the request object
     */
    public multipieceShipmentReprintWithHttpInfo(param: MultipieceApiMultipieceShipmentReprintRequest, options?: Configuration): Promise<HttpInfo<MultipieceDomesticShipmentResponse>> {
        return this.api.multipieceShipmentReprintWithHttpInfo(param.shipmentId, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation is used to reprint the multipiece label. It takes the shipmentId of the multipiece shipment done.
     * Reprint Multipiece Shipment
     * @param param the request object
     */
    public multipieceShipmentReprint(param: MultipieceApiMultipieceShipmentReprintRequest, options?: Configuration): Promise<MultipieceDomesticShipmentResponse> {
        return this.api.multipieceShipmentReprint(param.shipmentId, param.xPBDeveloperPartnerID,  options).toPromise();
    }

}

import { ObservablePickupsApi } from "./ObservableAPI";
import { PickupsApiRequestFactory, PickupsApiResponseProcessor} from "../apis/PickupsApi";

export interface PickupsApiCancelPickupsRequest {
    /**
     * 
     * @type SchedulePickupCancelRequest
     * @memberof PickupsApicancelPickups
     */
    schedulePickupCancelRequest: SchedulePickupCancelRequest
    /**
     * This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof PickupsApicancelPickups
     */
    xPBDeveloperPartnerID?: string
}

export interface PickupsApiCancelledPickupDocumentRequest {
    /**
     * Indicates type of pickup. Supported value is &#x60;cancelled&#x60;.
     * @type &#39;cancelled&#39;
     * @memberof PickupsApicancelledPickupDocument
     */
    type: 'cancelled'
    /**
     * 
     * @type GetPickupCancelledDocumentRequest
     * @memberof PickupsApicancelledPickupDocument
     */
    getPickupCancelledDocumentRequest: GetPickupCancelledDocumentRequest
    /**
     * This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof PickupsApicancelledPickupDocument
     */
    xPBDeveloperPartnerID?: string
}

export interface PickupsApiGetPickupDocumentRequest {
    /**
     * It specified the pickupId for which PDF receipt is needed.
     * @type string
     * @memberof PickupsApigetPickupDocument
     */
    pickupId: string
    /**
     * This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof PickupsApigetPickupDocument
     */
    xPBDeveloperPartnerID?: string
}

export interface PickupsApiGetPickupsRequest {
    /**
     * This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof PickupsApigetPickups
     */
    xPBDeveloperPartnerID?: string
    /**
     * Indicates CarrierID. If not provided, it would show pickups for all the carriers.
     * @type string
     * @memberof PickupsApigetPickups
     */
    carrier?: string
    /**
     * Indicates start date from when you want to see the history. If not provided, it will take today\&#39;s date.
     * @type string
     * @memberof PickupsApigetPickups
     */
    startDate?: string
    /**
     * Indicates end date till you want to see the pickups history. If not provide, it will take today\&#39;s date.
     * @type string
     * @memberof PickupsApigetPickups
     */
    endDate?: string
    /**
     * Indicates status of the pickup(schedule or cancel). If not provided, it will show the response for both status.
     * @type &#39;scheduled&#39; | &#39;cancelled&#39;
     * @memberof PickupsApigetPickups
     */
    status?: 'scheduled' | 'cancelled'
    /**
     * Indicates page number, if not provided page would be 1.
     * @type number
     * @memberof PickupsApigetPickups
     */
    page?: number
    /**
     * Indicates size of records, if not provided size would be 20
     * @type number
     * @memberof PickupsApigetPickups
     */
    size?: number
}

export interface PickupsApiSchedulePickupRequest {
    /**
     * 
     * @type SchedulePickupRequest
     * @memberof PickupsApischedulePickup
     */
    schedulePickupRequest: SchedulePickupRequest
    /**
     * This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof PickupsApischedulePickup
     */
    xPBDeveloperPartnerID?: string
}

export class ObjectPickupsApi {
    private api: ObservablePickupsApi

    public constructor(configuration: Configuration, requestFactory?: PickupsApiRequestFactory, responseProcessor?: PickupsApiResponseProcessor) {
        this.api = new ObservablePickupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This operation is used to Cancel the scheduled pickup.
     * Cancel Pickups
     * @param param the request object
     */
    public cancelPickupsWithHttpInfo(param: PickupsApiCancelPickupsRequest, options?: Configuration): Promise<HttpInfo<SchedulePickupCancelResponse>> {
        return this.api.cancelPickupsWithHttpInfo(param.schedulePickupCancelRequest, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation is used to Cancel the scheduled pickup.
     * Cancel Pickups
     * @param param the request object
     */
    public cancelPickups(param: PickupsApiCancelPickupsRequest, options?: Configuration): Promise<SchedulePickupCancelResponse> {
        return this.api.cancelPickups(param.schedulePickupCancelRequest, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation is used to get receipt for pickup cancellation. The receipt generated is in PDF format. <br> This operation can create receipt for multiple pickups which are cancelled.
     * Cancelled Pickup Document
     * @param param the request object
     */
    public cancelledPickupDocumentWithHttpInfo(param: PickupsApiCancelledPickupDocumentRequest, options?: Configuration): Promise<HttpInfo<GetPickupCancelledDocumentResponse>> {
        return this.api.cancelledPickupDocumentWithHttpInfo(param.type, param.getPickupCancelledDocumentRequest, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation is used to get receipt for pickup cancellation. The receipt generated is in PDF format. <br> This operation can create receipt for multiple pickups which are cancelled.
     * Cancelled Pickup Document
     * @param param the request object
     */
    public cancelledPickupDocument(param: PickupsApiCancelledPickupDocumentRequest, options?: Configuration): Promise<GetPickupCancelledDocumentResponse> {
        return this.api.cancelledPickupDocument(param.type, param.getPickupCancelledDocumentRequest, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation returns the scheduled pickup or cancellation receipt in PDF format.
     * Get Pickup Document
     * @param param the request object
     */
    public getPickupDocumentWithHttpInfo(param: PickupsApiGetPickupDocumentRequest, options?: Configuration): Promise<HttpInfo<GetPickupDocument>> {
        return this.api.getPickupDocumentWithHttpInfo(param.pickupId, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation returns the scheduled pickup or cancellation receipt in PDF format.
     * Get Pickup Document
     * @param param the request object
     */
    public getPickupDocument(param: PickupsApiGetPickupDocumentRequest, options?: Configuration): Promise<GetPickupDocument> {
        return this.api.getPickupDocument(param.pickupId, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation is used to view the history of pickups scheduled or cancelled for your packages.
     * Get Pickups
     * @param param the request object
     */
    public getPickupsWithHttpInfo(param: PickupsApiGetPickupsRequest = {}, options?: Configuration): Promise<HttpInfo<GetAllPickups>> {
        return this.api.getPickupsWithHttpInfo(param.xPBDeveloperPartnerID, param.carrier, param.startDate, param.endDate, param.status, param.page, param.size,  options).toPromise();
    }

    /**
     * This operation is used to view the history of pickups scheduled or cancelled for your packages.
     * Get Pickups
     * @param param the request object
     */
    public getPickups(param: PickupsApiGetPickupsRequest = {}, options?: Configuration): Promise<GetAllPickups> {
        return this.api.getPickups(param.xPBDeveloperPartnerID, param.carrier, param.startDate, param.endDate, param.status, param.page, param.size,  options).toPromise();
    }

    /**
     * This operation allows to schedule Pickups with USPS, UPS, FedEx and DHLExpress for eligible shipments. <br> Below are four possible combinations for scheduling pickup <br>  <br> 1. When request does not specify `pickupSummary` and `shipmentIds`- The system would consider all eligible shipments created in a current day. <br> 2. When request specifies only `shipmentIds`- Pickup will be created for the shipmentIds mentioned <br> 3. When request specifies only `pickupSummary`- Pickup will be created for the pickup details mentioned in the pickupSummary <br> 4. When request specifies both `pickupSummary` and `shipmentIds`- Pickup will be created including details mentioned in both objects.
     * Schedule Pickup
     * @param param the request object
     */
    public schedulePickupWithHttpInfo(param: PickupsApiSchedulePickupRequest, options?: Configuration): Promise<HttpInfo<SchedulePickup200Response>> {
        return this.api.schedulePickupWithHttpInfo(param.schedulePickupRequest, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation allows to schedule Pickups with USPS, UPS, FedEx and DHLExpress for eligible shipments. <br> Below are four possible combinations for scheduling pickup <br>  <br> 1. When request does not specify `pickupSummary` and `shipmentIds`- The system would consider all eligible shipments created in a current day. <br> 2. When request specifies only `shipmentIds`- Pickup will be created for the shipmentIds mentioned <br> 3. When request specifies only `pickupSummary`- Pickup will be created for the pickup details mentioned in the pickupSummary <br> 4. When request specifies both `pickupSummary` and `shipmentIds`- Pickup will be created including details mentioned in both objects.
     * Schedule Pickup
     * @param param the request object
     */
    public schedulePickup(param: PickupsApiSchedulePickupRequest, options?: Configuration): Promise<SchedulePickup200Response> {
        return this.api.schedulePickup(param.schedulePickupRequest, param.xPBDeveloperPartnerID,  options).toPromise();
    }

}

import { ObservablePrintApi } from "./ObservableAPI";
import { PrintApiRequestFactory, PrintApiResponseProcessor} from "../apis/PrintApi";

export interface PrintApiDeletePrinterMappingRequest {
    /**
     * Refers to a printer connected (directly or via network) to a computer.
     * @type string
     * @memberof PrintApideletePrinterMapping
     */
    alias: string
    /**
     * The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @type string
     * @memberof PrintApideletePrinterMapping
     */
    xPBDeveloperPartnerId?: string
    /**
     * This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @type string
     * @memberof PrintApideletePrinterMapping
     */
    xPBLocationId?: string
    /**
     * A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     * @type string
     * @memberof PrintApideletePrinterMapping
     */
    xPBTransactionId?: string
}

export interface PrintApiGetPrinterMappingRequest {
    /**
     * Refers to a printer connected (directly or via network) to a computer.
     * @type string
     * @memberof PrintApigetPrinterMapping
     */
    alias: string
    /**
     * The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @type string
     * @memberof PrintApigetPrinterMapping
     */
    xPBDeveloperPartnerId?: string
    /**
     * This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @type string
     * @memberof PrintApigetPrinterMapping
     */
    xPBLocationId?: string
    /**
     * A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     * @type string
     * @memberof PrintApigetPrinterMapping
     */
    xPBTransactionId?: string
}

export interface PrintApiJobStatusRequest {
    /**
     * The jobId, a unique identifier assigned for the job.
     * @type string
     * @memberof PrintApijobStatus
     */
    jobId: string
    /**
     * The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @type string
     * @memberof PrintApijobStatus
     */
    xPBDeveloperPartnerId?: string
    /**
     * This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @type string
     * @memberof PrintApijobStatus
     */
    xPBLocationId?: string
    /**
     * A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     * @type string
     * @memberof PrintApijobStatus
     */
    xPBTransactionId?: string
}

export interface PrintApiPrintDocumentRequest {
    /**
     * 
     * @type PrintDocumentRequest
     * @memberof PrintApiprintDocument
     */
    printDocumentRequest: PrintDocumentRequest
    /**
     * The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @type string
     * @memberof PrintApiprintDocument
     */
    xPBDeveloperPartnerId?: string
    /**
     * This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @type string
     * @memberof PrintApiprintDocument
     */
    xPBLocationId?: string
    /**
     * A unique Transaction ID provided by the partner, which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     * @type string
     * @memberof PrintApiprintDocument
     */
    xPBTransactionId?: string
}

export interface PrintApiPrinterMappingRequest {
    /**
     * 
     * @type PrinterMappingRequest
     * @memberof PrintApiprinterMapping
     */
    printerMappingRequest: PrinterMappingRequest
    /**
     * The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @type string
     * @memberof PrintApiprinterMapping
     */
    xPBDeveloperPartnerId?: string
    /**
     * This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @type string
     * @memberof PrintApiprinterMapping
     */
    xPBLocationId?: string
    /**
     * A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     * @type string
     * @memberof PrintApiprinterMapping
     */
    xPBTransactionId?: string
}

export class ObjectPrintApi {
    private api: ObservablePrintApi

    public constructor(configuration: Configuration, requestFactory?: PrintApiRequestFactory, responseProcessor?: PrintApiResponseProcessor) {
        this.api = new ObservablePrintApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * delete printer mapping document
     * Delete Printer mapping
     * @param param the request object
     */
    public deletePrinterMappingWithHttpInfo(param: PrintApiDeletePrinterMappingRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deletePrinterMappingWithHttpInfo(param.alias, param.xPBDeveloperPartnerId, param.xPBLocationId, param.xPBTransactionId,  options).toPromise();
    }

    /**
     * delete printer mapping document
     * Delete Printer mapping
     * @param param the request object
     */
    public deletePrinterMapping(param: PrintApiDeletePrinterMappingRequest, options?: Configuration): Promise<void> {
        return this.api.deletePrinterMapping(param.alias, param.xPBDeveloperPartnerId, param.xPBLocationId, param.xPBTransactionId,  options).toPromise();
    }

    /**
     * Get printer mapping document
     * Get Printer mapping
     * @param param the request object
     */
    public getPrinterMappingWithHttpInfo(param: PrintApiGetPrinterMappingRequest, options?: Configuration): Promise<HttpInfo<PrinterMappingGetResponse>> {
        return this.api.getPrinterMappingWithHttpInfo(param.alias, param.xPBDeveloperPartnerId, param.xPBLocationId, param.xPBTransactionId,  options).toPromise();
    }

    /**
     * Get printer mapping document
     * Get Printer mapping
     * @param param the request object
     */
    public getPrinterMapping(param: PrintApiGetPrinterMappingRequest, options?: Configuration): Promise<PrinterMappingGetResponse> {
        return this.api.getPrinterMapping(param.alias, param.xPBDeveloperPartnerId, param.xPBLocationId, param.xPBTransactionId,  options).toPromise();
    }

    /**
     * job status
     * Job status
     * @param param the request object
     */
    public jobStatusWithHttpInfo(param: PrintApiJobStatusRequest, options?: Configuration): Promise<HttpInfo<JobStatus>> {
        return this.api.jobStatusWithHttpInfo(param.jobId, param.xPBDeveloperPartnerId, param.xPBLocationId, param.xPBTransactionId,  options).toPromise();
    }

    /**
     * job status
     * Job status
     * @param param the request object
     */
    public jobStatus(param: PrintApiJobStatusRequest, options?: Configuration): Promise<JobStatus> {
        return this.api.jobStatus(param.jobId, param.xPBDeveloperPartnerId, param.xPBLocationId, param.xPBTransactionId,  options).toPromise();
    }

    /**
     * It contains information about a label or a document, e.g. a shipping label, a customs form, manifest report etc., that pertains to a shipment or manifest.
     * Print Document
     * @param param the request object
     */
    public printDocumentWithHttpInfo(param: PrintApiPrintDocumentRequest, options?: Configuration): Promise<HttpInfo<PrintDocumentResponse>> {
        return this.api.printDocumentWithHttpInfo(param.printDocumentRequest, param.xPBDeveloperPartnerId, param.xPBLocationId, param.xPBTransactionId,  options).toPromise();
    }

    /**
     * It contains information about a label or a document, e.g. a shipping label, a customs form, manifest report etc., that pertains to a shipment or manifest.
     * Print Document
     * @param param the request object
     */
    public printDocument(param: PrintApiPrintDocumentRequest, options?: Configuration): Promise<PrintDocumentResponse> {
        return this.api.printDocument(param.printDocumentRequest, param.xPBDeveloperPartnerId, param.xPBLocationId, param.xPBTransactionId,  options).toPromise();
    }

    /**
     * printer mapping document
     * Printer mapping
     * @param param the request object
     */
    public printerMappingWithHttpInfo(param: PrintApiPrinterMappingRequest, options?: Configuration): Promise<HttpInfo<PrinterMappingResponse>> {
        return this.api.printerMappingWithHttpInfo(param.printerMappingRequest, param.xPBDeveloperPartnerId, param.xPBLocationId, param.xPBTransactionId,  options).toPromise();
    }

    /**
     * printer mapping document
     * Printer mapping
     * @param param the request object
     */
    public printerMapping(param: PrintApiPrinterMappingRequest, options?: Configuration): Promise<PrinterMappingResponse> {
        return this.api.printerMapping(param.printerMappingRequest, param.xPBDeveloperPartnerId, param.xPBLocationId, param.xPBTransactionId,  options).toPromise();
    }

}

import { ObservableShipmentApi } from "./ObservableAPI";
import { ShipmentApiRequestFactory, ShipmentApiResponseProcessor} from "../apis/ShipmentApi";

export interface ShipmentApiCancelShipmentByIdRequest {
    /**
     * This indicates the shipmentId, a unique identifier assigned for the Shipment.
     * @type string
     * @memberof ShipmentApicancelShipmentById
     */
    shipmentId: string
    /**
     * This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof ShipmentApicancelShipmentById
     */
    xPBDeveloperPartnerID?: string
}

export interface ShipmentApiCancelStampsERRRequest {
    /**
     * 
     * @type CancelStampsRequestERR
     * @memberof ShipmentApicancelStampsERR
     */
    cancelStampsRequestERR: CancelStampsRequestERR
    /**
     * The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     * @type string
     * @memberof ShipmentApicancelStampsERR
     */
    xPBDeveloperPartnerID?: string
}

export interface ShipmentApiCreateReturnLabelRequest {
    /**
     * It specifies the shipmentId of onward shipment against which return label has to be created.
     * @type string
     * @memberof ShipmentApicreateReturnLabel
     */
    shipmentId: string
    /**
     * 
     * @type ReturnLabel
     * @memberof ShipmentApicreateReturnLabel
     */
    returnLabel: ReturnLabel
    /**
     * This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof ShipmentApicreateReturnLabel
     */
    xPBDeveloperPartnerID?: string
}

export interface ShipmentApiCreateShipmentRequest {
    /**
     * 
     * @type CreateShipmentRequest
     * @memberof ShipmentApicreateShipment
     */
    createShipmentRequest: CreateShipmentRequest
    /**
     * This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof ShipmentApicreateShipment
     */
    xPBDeveloperPartnerID?: string
}

export interface ShipmentApiDownloadBpodFilesRequest {
    /**
     * The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     * @type string
     * @memberof ShipmentApidownloadBpodFiles
     */
    xPBDeveloperPartnerID?: string
    /**
     * The BPOD files to be downloaded from which Date is the startDate in the Date Range filter. This field is not required if the Shipment IDs provided in the request body.
     * @type string
     * @memberof ShipmentApidownloadBpodFiles
     */
    startDate?: string
    /**
     * The BPOD files to be downloaded till which Date is the endDate in the Date Range filter. This field is not required if the Shipment IDs provided in the request body.
     * @type string
     * @memberof ShipmentApidownloadBpodFiles
     */
    endDate?: string
    /**
     * This is the request body to download BPOD files. Request body supports max of 1000 ShipmentIDs in a request.
     * @type BPODDownloadRequest
     * @memberof ShipmentApidownloadBpodFiles
     */
    body?: BPODDownloadRequest
}

export interface ShipmentApiGetAllShipmentsRequest {
    /**
     * This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof ShipmentApigetAllShipments
     */
    xPBDeveloperPartnerID?: string
    /**
     * While searching shipments, user set a date range to get all created shipments. This indicatesthe start date of the set date range under shipment search criteria. The date format must be: YYYY-MM-DD.
     * @type string
     * @memberof ShipmentApigetAllShipments
     */
    startDate?: string
    /**
     * While searching shipments, user set a date range to get all created shipments. This indicatesthe end date of the set date range under shipment search criteria. The date format must be: YYYY-MM-DD.
     * @type string
     * @memberof ShipmentApigetAllShipments
     */
    endDate?: string
    /**
     * This indicates the page of the Shipments search result list.
     * @type string
     * @memberof ShipmentApigetAllShipments
     */
    page?: string
    /**
     * This indicates the size/count of the searched result list.
     * @type string
     * @memberof ShipmentApigetAllShipments
     */
    size?: string
}

export interface ShipmentApiGetCarrierAccountsRequest {
    /**
     * This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof ShipmentApigetCarrierAccounts
     */
    xPBDeveloperPartnerID?: string
}

export interface ShipmentApiGetCarriersRequest {
    /**
     * This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof ShipmentApigetCarriers
     */
    xPBDeveloperPartnerID?: string
}

export interface ShipmentApiGetCountriesRequest {
    /**
     * This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof ShipmentApigetCountries
     */
    xPBDeveloperPartnerID?: string
    /**
     * This indicates the carrierID, a unique identifier given to  an individual carrier.
     * @type string
     * @memberof ShipmentApigetCountries
     */
    carrier?: string
    /**
     * This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates.
     * @type string
     * @memberof ShipmentApigetCountries
     */
    originCountryCode?: string
}

export interface ShipmentApiGetParcelTypesRequest {
    /**
     * This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof ShipmentApigetParcelTypes
     */
    xPBDeveloperPartnerID?: string
    /**
     * This indicates the CarrierID, a unique identifier given to an individual carrier. It can be referred from the response of Get Carriers API
     * @type string
     * @memberof ShipmentApigetParcelTypes
     */
    carrier?: string
    /**
     * This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates.
     * @type string
     * @memberof ShipmentApigetParcelTypes
     */
    originCountryCode?: string
    /**
     * This indicates the Destination Country for the Shipment. The two-character ISO country code for the country where the shipment is to be delivered.
     * @type string
     * @memberof ShipmentApigetParcelTypes
     */
    destinationCountryCode?: string
}

export interface ShipmentApiGetRatesRequest {
    /**
     * 
     * @type GetRatesRequest
     * @memberof ShipmentApigetRates
     */
    getRatesRequest: GetRatesRequest
    /**
     * This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof ShipmentApigetRates
     */
    xPBDeveloperPartnerID?: string
    /**
     * This header defines if the response required is detailed or compact. When value is set to true, it will only return rates object in response.
     * @type boolean
     * @memberof ShipmentApigetRates
     */
    compactResponse?: boolean
}

export interface ShipmentApiGetServicesRequest {
    /**
     * This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof ShipmentApigetServices
     */
    xPBDeveloperPartnerID?: string
    /**
     * This indicates the CarrierID, a unique identifier provided to an individual carrier. It can be referred from the response of Get Carriers API
     * @type string
     * @memberof ShipmentApigetServices
     */
    carrier?: string
    /**
     * This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates.
     * @type string
     * @memberof ShipmentApigetServices
     */
    originCountryCode?: string
    /**
     * This indicates the Destination Country for the Shipment. The two-character ISO country code for the country where the shipment is to be delivered.
     * @type string
     * @memberof ShipmentApigetServices
     */
    destinationCountryCode?: string
}

export interface ShipmentApiGetSignatureImageERRRequest {
    /**
     * Shipment ID is a unique identifier for an individual shipment.
     * @type string
     * @memberof ShipmentApigetSignatureImageERR
     */
    shipmentId: string
    /**
     * The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field is not required.
     * @type string
     * @memberof ShipmentApigetSignatureImageERR
     */
    xPBDeveloperPartnerID?: string
}

export interface ShipmentApiGetSpecialServicesRequest {
    /**
     * This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof ShipmentApigetSpecialServices
     */
    xPBDeveloperPartnerID?: string
    /**
     * This indicates the serviceId. It can be referred from response of &#x60;Get Services&#x60; API
     * @type string
     * @memberof ShipmentApigetSpecialServices
     */
    service?: string
    /**
     * This indicates the parcel Id, a unique identifier named to individual package. It can be referred from response of &#x60;Get Parcel Types&#x60; API
     * @type string
     * @memberof ShipmentApigetSpecialServices
     */
    parcel?: string
    /**
     * This indicates the CarrierID, a unique identifier given to  an individual carrier. It can be referred from response of &#x60;Get Carriers&#x60; API
     * @type string
     * @memberof ShipmentApigetSpecialServices
     */
    carrier?: string
    /**
     * This indicates the Source Country. The two-character ISO country code for the country where the Shipment originates.
     * @type string
     * @memberof ShipmentApigetSpecialServices
     */
    originCountryCode?: string
    /**
     * This indicates the Destination Country for the Shipment. The two-character ISO country code for the country where the shipment is to be delivered.
     * @type string
     * @memberof ShipmentApigetSpecialServices
     */
    destinationCountryCode?: string
}

export interface ShipmentApiReprintShipmentByIdRequest {
    /**
     * This indicates the shipmentId, a unique identifier assigned to the Shipment.
     * @type string
     * @memberof ShipmentApireprintShipmentById
     */
    shipmentId: string
    /**
     * This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof ShipmentApireprintShipmentById
     */
    xPBDeveloperPartnerID?: string
    /**
     * This header defines if the response required is detailed or compact. When value is set to true, it will only return label layout details and parcel tracking number object in response.
     * @type boolean
     * @memberof ShipmentApireprintShipmentById
     */
    compactResponse?: boolean
}

export interface ShipmentApiShipmentByIdRequest {
    /**
     * This indicates the shipmentId, a unique identifier for an individual Shipment.
     * @type string
     * @memberof ShipmentApishipmentById
     */
    shipmentId: string
    /**
     * This is the Developer Partner ID. When the developer is the only partner, this field is not required.
     * @type string
     * @memberof ShipmentApishipmentById
     */
    xPBDeveloperPartnerID?: string
}

export class ObjectShipmentApi {
    private api: ObservableShipmentApi

    public constructor(configuration: Configuration, requestFactory?: ShipmentApiRequestFactory, responseProcessor?: ShipmentApiResponseProcessor) {
        this.api = new ObservableShipmentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This operation cancel/void shipment.
     * Cancel Shipment
     * @param param the request object
     */
    public cancelShipmentByIdWithHttpInfo(param: ShipmentApiCancelShipmentByIdRequest, options?: Configuration): Promise<HttpInfo<CancelShipment>> {
        return this.api.cancelShipmentByIdWithHttpInfo(param.shipmentId, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation cancel/void shipment.
     * Cancel Shipment
     * @param param the request object
     */
    public cancelShipmentById(param: ShipmentApiCancelShipmentByIdRequest, options?: Configuration): Promise<CancelShipment> {
        return this.api.cancelShipmentById(param.shipmentId, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation cancels (voids) stamps generated for ERR (Electronic Return Receipt).  - User needs to provide *Stamp IDs* to cancel those specific ERR stamps.  - User can download the *Refund Form* having details of generated Postage.  - At once, maximum 1000 stamps can be requested for cancelation. 
     * Cancel Stamps ERR
     * @param param the request object
     */
    public cancelStampsERRWithHttpInfo(param: ShipmentApiCancelStampsERRRequest, options?: Configuration): Promise<HttpInfo<CancelStampsResponseERR>> {
        return this.api.cancelStampsERRWithHttpInfo(param.cancelStampsRequestERR, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation cancels (voids) stamps generated for ERR (Electronic Return Receipt).  - User needs to provide *Stamp IDs* to cancel those specific ERR stamps.  - User can download the *Refund Form* having details of generated Postage.  - At once, maximum 1000 stamps can be requested for cancelation. 
     * Cancel Stamps ERR
     * @param param the request object
     */
    public cancelStampsERR(param: ShipmentApiCancelStampsERRRequest, options?: Configuration): Promise<CancelStampsResponseERR> {
        return this.api.cancelStampsERR(param.cancelStampsRequestERR, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation creates a return label based on a previous shipment. <br> The return label can be created in two ways:  <br> 1. User need not to provide any details of package, address and service. The API would take all details from the shipmentId mentioned in the path parameter and would swap the address and create return label. However for UPS `specialServices` object is required as carrier mandates to provide package description with PRL special service. <br> 2. User can customize the request by passing `fromAddress`, `toAddress`, `parcelType`, `serviceId` in the request itself. <br> Please Note that for UPS it is required to pass `specialServices` object with `PRL` service id and  input parameters with name as `RETURN_PKG_DESCRIPTION`. <br> For FedEx `specialServices` object is not required and PRL is added by default while creating return.  If user wishes to provide RMA number, it can be passed in `specialServices` object in the request body. <br> Please Note If user provides any information in this request it overrides the information in onward shipment which was created <br> For example if user provides toAddress in the request the return label will get created with recipient as mentioned in toAddress and  if user provides fromAddress in the request, the return label will be created with sender as mentioned in fromAddress
     * Create Return label shipment
     * @param param the request object
     */
    public createReturnLabelWithHttpInfo(param: ShipmentApiCreateReturnLabelRequest, options?: Configuration): Promise<HttpInfo<ReturnLabelResponse>> {
        return this.api.createReturnLabelWithHttpInfo(param.shipmentId, param.returnLabel, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation creates a return label based on a previous shipment. <br> The return label can be created in two ways:  <br> 1. User need not to provide any details of package, address and service. The API would take all details from the shipmentId mentioned in the path parameter and would swap the address and create return label. However for UPS `specialServices` object is required as carrier mandates to provide package description with PRL special service. <br> 2. User can customize the request by passing `fromAddress`, `toAddress`, `parcelType`, `serviceId` in the request itself. <br> Please Note that for UPS it is required to pass `specialServices` object with `PRL` service id and  input parameters with name as `RETURN_PKG_DESCRIPTION`. <br> For FedEx `specialServices` object is not required and PRL is added by default while creating return.  If user wishes to provide RMA number, it can be passed in `specialServices` object in the request body. <br> Please Note If user provides any information in this request it overrides the information in onward shipment which was created <br> For example if user provides toAddress in the request the return label will get created with recipient as mentioned in toAddress and  if user provides fromAddress in the request, the return label will be created with sender as mentioned in fromAddress
     * Create Return label shipment
     * @param param the request object
     */
    public createReturnLabel(param: ShipmentApiCreateReturnLabelRequest, options?: Configuration): Promise<ReturnLabelResponse> {
        return this.api.createReturnLabel(param.shipmentId, param.returnLabel, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation creates a new Shipment or Shipment Label. This is for both Domestic and International.<br> For domestic, Create a shipment requires domestic addresses (within same country)- ToAddress and FromAddress, and  carrier service and special service.<br> While for International, Create a shipment requires international delivery, that is ToAddress must be the different country (and not the same country mentioned in From Address), selected services, special services, and customs information. <br> <br> Note- To create Return shipment using this API- If PRL (return special service) is used, user need to provide sender address (from where return shipment is to be created) in `fromAddress` object and recipient address (to where return is to be created) in `toAddress` object. System will not swap the address for return in this API. If you want to create return for the already created shipment, you may use `Create Return Label Shipment` API. <br> <br> Note: Currently Shipment created from below API gets assigned to the Default location of the subscription.
     * Create Shipment
     * @param param the request object
     */
    public createShipmentWithHttpInfo(param: ShipmentApiCreateShipmentRequest, options?: Configuration): Promise<HttpInfo<CreateShipment200Response>> {
        return this.api.createShipmentWithHttpInfo(param.createShipmentRequest, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation creates a new Shipment or Shipment Label. This is for both Domestic and International.<br> For domestic, Create a shipment requires domestic addresses (within same country)- ToAddress and FromAddress, and  carrier service and special service.<br> While for International, Create a shipment requires international delivery, that is ToAddress must be the different country (and not the same country mentioned in From Address), selected services, special services, and customs information. <br> <br> Note- To create Return shipment using this API- If PRL (return special service) is used, user need to provide sender address (from where return shipment is to be created) in `fromAddress` object and recipient address (to where return is to be created) in `toAddress` object. System will not swap the address for return in this API. If you want to create return for the already created shipment, you may use `Create Return Label Shipment` API. <br> <br> Note: Currently Shipment created from below API gets assigned to the Default location of the subscription.
     * Create Shipment
     * @param param the request object
     */
    public createShipment(param: ShipmentApiCreateShipmentRequest, options?: Configuration): Promise<CreateShipment200Response> {
        return this.api.createShipment(param.createShipmentRequest, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This API operation is used to download bulk of ERR (*Electronic Return Receipt*) - POD (*Proof of Delivery*) files, which are specific to USPS carrier. <br />   User can download BPOD (*Bulk Proof of Delivery*) files either using *Shipment IDs* or *Date Range*.    If user wants to check records based on dates and download BPOD files accordingly, then *Start Date* and *End Date* need to be passed in the request body as filter. Else *Shipment IDs* will be used as default value when user does not provide *DateRange* filter. <br />   User is restricted to download 1000 BPOD files as max limit. 
     * Download BPOD Files
     * @param param the request object
     */
    public downloadBpodFilesWithHttpInfo(param: ShipmentApiDownloadBpodFilesRequest = {}, options?: Configuration): Promise<HttpInfo<BPODDownloadResponse>> {
        return this.api.downloadBpodFilesWithHttpInfo(param.xPBDeveloperPartnerID, param.startDate, param.endDate, param.body,  options).toPromise();
    }

    /**
     * This API operation is used to download bulk of ERR (*Electronic Return Receipt*) - POD (*Proof of Delivery*) files, which are specific to USPS carrier. <br />   User can download BPOD (*Bulk Proof of Delivery*) files either using *Shipment IDs* or *Date Range*.    If user wants to check records based on dates and download BPOD files accordingly, then *Start Date* and *End Date* need to be passed in the request body as filter. Else *Shipment IDs* will be used as default value when user does not provide *DateRange* filter. <br />   User is restricted to download 1000 BPOD files as max limit. 
     * Download BPOD Files
     * @param param the request object
     */
    public downloadBpodFiles(param: ShipmentApiDownloadBpodFilesRequest = {}, options?: Configuration): Promise<BPODDownloadResponse> {
        return this.api.downloadBpodFiles(param.xPBDeveloperPartnerID, param.startDate, param.endDate, param.body,  options).toPromise();
    }

    /**
     * This operation fetches all created Shipments. If query parameters are not provided, it will default endDate as current date, page as 1 and size as 10.
     * Get All Shipments
     * @param param the request object
     */
    public getAllShipmentsWithHttpInfo(param: ShipmentApiGetAllShipmentsRequest = {}, options?: Configuration): Promise<HttpInfo<GetAllShipments>> {
        return this.api.getAllShipmentsWithHttpInfo(param.xPBDeveloperPartnerID, param.startDate, param.endDate, param.page, param.size,  options).toPromise();
    }

    /**
     * This operation fetches all created Shipments. If query parameters are not provided, it will default endDate as current date, page as 1 and size as 10.
     * Get All Shipments
     * @param param the request object
     */
    public getAllShipments(param: ShipmentApiGetAllShipmentsRequest = {}, options?: Configuration): Promise<GetAllShipments> {
        return this.api.getAllShipments(param.xPBDeveloperPartnerID, param.startDate, param.endDate, param.page, param.size,  options).toPromise();
    }

    /**
     * This operation retrieves onboarded Carriers with their Carrier Account Ids which uniquely identify multiple accounts of same carrier.
     * Get Carrier Accounts
     * @param param the request object
     */
    public getCarrierAccountsWithHttpInfo(param: ShipmentApiGetCarrierAccountsRequest = {}, options?: Configuration): Promise<HttpInfo<GetCarrierAccounts200Response>> {
        return this.api.getCarrierAccountsWithHttpInfo(param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation retrieves onboarded Carriers with their Carrier Account Ids which uniquely identify multiple accounts of same carrier.
     * Get Carrier Accounts
     * @param param the request object
     */
    public getCarrierAccounts(param: ShipmentApiGetCarrierAccountsRequest = {}, options?: Configuration): Promise<GetCarrierAccounts200Response> {
        return this.api.getCarrierAccounts(param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation fetches all supported carriers. This service is used to get list of supported carriers and their properties.
     * Get Carriers
     * @param param the request object
     */
    public getCarriersWithHttpInfo(param: ShipmentApiGetCarriersRequest = {}, options?: Configuration): Promise<HttpInfo<Carriers>> {
        return this.api.getCarriersWithHttpInfo(param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation fetches all supported carriers. This service is used to get list of supported carriers and their properties.
     * Get Carriers
     * @param param the request object
     */
    public getCarriers(param: ShipmentApiGetCarriersRequest = {}, options?: Configuration): Promise<Carriers> {
        return this.api.getCarriers(param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation fetches list of supported destination countries for a provided carrier and origin country. If query parameters are not provided, it will default to `USPS` as carrier and `US` as origin country.
     * Get Countries
     * @param param the request object
     */
    public getCountriesWithHttpInfo(param: ShipmentApiGetCountriesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<CountriesInner>>> {
        return this.api.getCountriesWithHttpInfo(param.xPBDeveloperPartnerID, param.carrier, param.originCountryCode,  options).toPromise();
    }

    /**
     * This operation fetches list of supported destination countries for a provided carrier and origin country. If query parameters are not provided, it will default to `USPS` as carrier and `US` as origin country.
     * Get Countries
     * @param param the request object
     */
    public getCountries(param: ShipmentApiGetCountriesRequest = {}, options?: Configuration): Promise<Array<CountriesInner>> {
        return this.api.getCountries(param.xPBDeveloperPartnerID, param.carrier, param.originCountryCode,  options).toPromise();
    }

    /**
     * This operation fetches Parcel Types based on the provided carrier, origin county, and the destination country. If query parameters are not provided, this will default to `USPS` as carrier, `US` as both origin and destination country code.
     * Get Parcel Types
     * @param param the request object
     */
    public getParcelTypesWithHttpInfo(param: ShipmentApiGetParcelTypesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<ParcelTypesInner>>> {
        return this.api.getParcelTypesWithHttpInfo(param.xPBDeveloperPartnerID, param.carrier, param.originCountryCode, param.destinationCountryCode,  options).toPromise();
    }

    /**
     * This operation fetches Parcel Types based on the provided carrier, origin county, and the destination country. If query parameters are not provided, this will default to `USPS` as carrier, `US` as both origin and destination country code.
     * Get Parcel Types
     * @param param the request object
     */
    public getParcelTypes(param: ShipmentApiGetParcelTypesRequest = {}, options?: Configuration): Promise<Array<ParcelTypesInner>> {
        return this.api.getParcelTypes(param.xPBDeveloperPartnerID, param.carrier, param.originCountryCode, param.destinationCountryCode,  options).toPromise();
    }

    /**
     * This API contains 2 operations, rate shop and single rate. Rate shop will fetch rates for all carrier services based on the given addresses (From and To), weight, and dimension for given parcelType. If parcelType is not provided, it will default to `PKG`. Single rate will get rate for specific service and special service (if requested) based on the given addresses (From and To), weight, and dimension, parcelType and serviceId with or without specialServices. Single rate will be used mainly to a rate a shipment before creating shipment.
     * Rate Shop and Get Single Rate
     * @param param the request object
     */
    public getRatesWithHttpInfo(param: ShipmentApiGetRatesRequest, options?: Configuration): Promise<HttpInfo<GetRates200Response>> {
        return this.api.getRatesWithHttpInfo(param.getRatesRequest, param.xPBDeveloperPartnerID, param.compactResponse,  options).toPromise();
    }

    /**
     * This API contains 2 operations, rate shop and single rate. Rate shop will fetch rates for all carrier services based on the given addresses (From and To), weight, and dimension for given parcelType. If parcelType is not provided, it will default to `PKG`. Single rate will get rate for specific service and special service (if requested) based on the given addresses (From and To), weight, and dimension, parcelType and serviceId with or without specialServices. Single rate will be used mainly to a rate a shipment before creating shipment.
     * Rate Shop and Get Single Rate
     * @param param the request object
     */
    public getRates(param: ShipmentApiGetRatesRequest, options?: Configuration): Promise<GetRates200Response> {
        return this.api.getRates(param.getRatesRequest, param.xPBDeveloperPartnerID, param.compactResponse,  options).toPromise();
    }

    /**
     * This operation fetches a list of supported services for a carrier with respect to specific origin and destination country. If query parameters are not provided, this will default to `USPS` as carrier, `US` as both origin and destination country code.
     * Get Services
     * @param param the request object
     */
    public getServicesWithHttpInfo(param: ShipmentApiGetServicesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<ServicesInner>>> {
        return this.api.getServicesWithHttpInfo(param.xPBDeveloperPartnerID, param.carrier, param.originCountryCode, param.destinationCountryCode,  options).toPromise();
    }

    /**
     * This operation fetches a list of supported services for a carrier with respect to specific origin and destination country. If query parameters are not provided, this will default to `USPS` as carrier, `US` as both origin and destination country code.
     * Get Services
     * @param param the request object
     */
    public getServices(param: ShipmentApiGetServicesRequest = {}, options?: Configuration): Promise<Array<ServicesInner>> {
        return this.api.getServices(param.xPBDeveloperPartnerID, param.carrier, param.originCountryCode, param.destinationCountryCode,  options).toPromise();
    }

    /**
     * This operation provides a downloadable link which consists of a signature image for specific ERR (Electronic Return Receipt) shipment, and this is known as POD. <br /> Proof of Delivery (POD) is a document or file that shows an evidence of shipment delivery. This file contains the digital copy of recipient\'s signature, i.e., the signature image, in the form of downloadable link or URL.
     * Signature Image ERR
     * @param param the request object
     */
    public getSignatureImageERRWithHttpInfo(param: ShipmentApiGetSignatureImageERRRequest, options?: Configuration): Promise<HttpInfo<SignatureFileResponse>> {
        return this.api.getSignatureImageERRWithHttpInfo(param.shipmentId, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation provides a downloadable link which consists of a signature image for specific ERR (Electronic Return Receipt) shipment, and this is known as POD. <br /> Proof of Delivery (POD) is a document or file that shows an evidence of shipment delivery. This file contains the digital copy of recipient\'s signature, i.e., the signature image, in the form of downloadable link or URL.
     * Signature Image ERR
     * @param param the request object
     */
    public getSignatureImageERR(param: ShipmentApiGetSignatureImageERRRequest, options?: Configuration): Promise<SignatureFileResponse> {
        return this.api.getSignatureImageERR(param.shipmentId, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation fetches Special Services for a given carrier, service, origin country, and the destination country. If query parameters are not provided, it will default to `USPS` as carrier,`US` as both origin and destination country and would show for all service and parcel types
     * Get Special Services
     * @param param the request object
     */
    public getSpecialServicesWithHttpInfo(param: ShipmentApiGetSpecialServicesRequest = {}, options?: Configuration): Promise<HttpInfo<SpecialServices>> {
        return this.api.getSpecialServicesWithHttpInfo(param.xPBDeveloperPartnerID, param.service, param.parcel, param.carrier, param.originCountryCode, param.destinationCountryCode,  options).toPromise();
    }

    /**
     * This operation fetches Special Services for a given carrier, service, origin country, and the destination country. If query parameters are not provided, it will default to `USPS` as carrier,`US` as both origin and destination country and would show for all service and parcel types
     * Get Special Services
     * @param param the request object
     */
    public getSpecialServices(param: ShipmentApiGetSpecialServicesRequest = {}, options?: Configuration): Promise<SpecialServices> {
        return this.api.getSpecialServices(param.xPBDeveloperPartnerID, param.service, param.parcel, param.carrier, param.originCountryCode, param.destinationCountryCode,  options).toPromise();
    }

    /**
     * This operation reprints Shipment by the shipmentId. It retrieves an existing shipping label to reprint. The API sends the shipmentId returned by the original Created Shipment request. Use this only if the shipping label in the Create Shipment response was spoilt or lost.
     * Reprint Shipment
     * @param param the request object
     */
    public reprintShipmentByIdWithHttpInfo(param: ShipmentApiReprintShipmentByIdRequest, options?: Configuration): Promise<HttpInfo<ReprintShipment>> {
        return this.api.reprintShipmentByIdWithHttpInfo(param.shipmentId, param.xPBDeveloperPartnerID, param.compactResponse,  options).toPromise();
    }

    /**
     * This operation reprints Shipment by the shipmentId. It retrieves an existing shipping label to reprint. The API sends the shipmentId returned by the original Created Shipment request. Use this only if the shipping label in the Create Shipment response was spoilt or lost.
     * Reprint Shipment
     * @param param the request object
     */
    public reprintShipmentById(param: ShipmentApiReprintShipmentByIdRequest, options?: Configuration): Promise<ReprintShipment> {
        return this.api.reprintShipmentById(param.shipmentId, param.xPBDeveloperPartnerID, param.compactResponse,  options).toPromise();
    }

    /**
     * This operation retrieves shipment details using shipmentId.
     * Get Shipment by Id
     * @param param the request object
     */
    public shipmentByIdWithHttpInfo(param: ShipmentApiShipmentByIdRequest, options?: Configuration): Promise<HttpInfo<GetSingleShipment>> {
        return this.api.shipmentByIdWithHttpInfo(param.shipmentId, param.xPBDeveloperPartnerID,  options).toPromise();
    }

    /**
     * This operation retrieves shipment details using shipmentId.
     * Get Shipment by Id
     * @param param the request object
     */
    public shipmentById(param: ShipmentApiShipmentByIdRequest, options?: Configuration): Promise<GetSingleShipment> {
        return this.api.shipmentById(param.shipmentId, param.xPBDeveloperPartnerID,  options).toPromise();
    }

}

import { ObservableShipmentByRateShopApi } from "./ObservableAPI";
import { ShipmentByRateShopApiRequestFactory, ShipmentByRateShopApiResponseProcessor} from "../apis/ShipmentByRateShopApi";

export interface ShipmentByRateShopApiCancelShipmentByIdV2Request {
    /**
     * 
     * @type ShipmentCancelV2
     * @memberof ShipmentByRateShopApicancelShipmentByIdV2
     */
    shipmentCancelV2: ShipmentCancelV2
    /**
     * The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @type string
     * @memberof ShipmentByRateShopApicancelShipmentByIdV2
     */
    xPBDeveloperPartnerId?: string
    /**
     * This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @type string
     * @memberof ShipmentByRateShopApicancelShipmentByIdV2
     */
    xPBLocationId?: string
    /**
     * A unique Transaction ID provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     * @type string
     * @memberof ShipmentByRateShopApicancelShipmentByIdV2
     */
    xPBTransactionId?: string
}

export interface ShipmentByRateShopApiCreateShipmentV2Request {
    /**
     * 
     * @type CreateShipmentV2Request
     * @memberof ShipmentByRateShopApicreateShipmentV2
     */
    createShipmentV2Request: CreateShipmentV2Request
    /**
     * The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @type string
     * @memberof ShipmentByRateShopApicreateShipmentV2
     */
    xPBDeveloperPartnerId?: string
    /**
     * This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @type string
     * @memberof ShipmentByRateShopApicreateShipmentV2
     */
    xPBLocationId?: string
    /**
     * A unique Transaction ID provided by the partner, which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     * @type string
     * @memberof ShipmentByRateShopApicreateShipmentV2
     */
    xPBTransactionId?: string
}

export interface ShipmentByRateShopApiReprintShipmentByIdV2Request {
    /**
     * 
     * @type ShipmentReprintV2
     * @memberof ShipmentByRateShopApireprintShipmentByIdV2
     */
    shipmentReprintV2: ShipmentReprintV2
    /**
     * The Developer Partner ID is assigned by PB to uniquely identify a Developer\&#39;s strategic business partners. If the developer is the sole business partner, this field isn\&#39;t required.
     * @type string
     * @memberof ShipmentByRateShopApireprintShipmentByIdV2
     */
    xPBDeveloperPartnerId?: string
    /**
     * This is the Location ID assigned as per the Developer\&#39;s and Partner\&#39;s parsed locations, to which all transactions will be billed. &lt;br /&gt; Partner\&#39;s location will be used for billing if it is configured, however, in case Partner\&#39;s location is not given, then the Developer\&#39;s location will be taken. Developer\&#39;s location will be the default value. &lt;br /&gt; Additionally, Developers and Partners can use carriers belong to this location only.
     * @type string
     * @memberof ShipmentByRateShopApireprintShipmentByIdV2
     */
    xPBLocationId?: string
    /**
     * A unique transaction Id provided by the partner which is used to enable debugging and linking between the client\&#39;s transaction and the system.
     * @type string
     * @memberof ShipmentByRateShopApireprintShipmentByIdV2
     */
    xPBTransactionId?: string
}

export class ObjectShipmentByRateShopApi {
    private api: ObservableShipmentByRateShopApi

    public constructor(configuration: Configuration, requestFactory?: ShipmentByRateShopApiRequestFactory, responseProcessor?: ShipmentByRateShopApiResponseProcessor) {
        this.api = new ObservableShipmentByRateShopApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The operation cancel/void shipment.
     * Cancel Shipment
     * @param param the request object
     */
    public cancelShipmentByIdV2WithHttpInfo(param: ShipmentByRateShopApiCancelShipmentByIdV2Request, options?: Configuration): Promise<HttpInfo<CancelShipmentV2>> {
        return this.api.cancelShipmentByIdV2WithHttpInfo(param.shipmentCancelV2, param.xPBDeveloperPartnerId, param.xPBLocationId, param.xPBTransactionId,  options).toPromise();
    }

    /**
     * The operation cancel/void shipment.
     * Cancel Shipment
     * @param param the request object
     */
    public cancelShipmentByIdV2(param: ShipmentByRateShopApiCancelShipmentByIdV2Request, options?: Configuration): Promise<CancelShipmentV2> {
        return this.api.cancelShipmentByIdV2(param.shipmentCancelV2, param.xPBDeveloperPartnerId, param.xPBLocationId, param.xPBTransactionId,  options).toPromise();
    }

    /**
     * The operation creates a new Shipment or generate a Shipment Label. - To create a domestic shipment, the operation requires   - Domestic addresses \'To\' and \'From\' locations respectively within the same country   - carrier services, and   - associated special services. - While for the International shipment, the operation requires   - International address(es) for delivery, that is \'To\' address must be the international country location(s) and not the same country mentioned in \'From\' address   - supported international carrier services   - associated special service(s), and    - customs information. 
     * Create Shipment
     * @param param the request object
     */
    public createShipmentV2WithHttpInfo(param: ShipmentByRateShopApiCreateShipmentV2Request, options?: Configuration): Promise<HttpInfo<DomesticShipmentResponseV2>> {
        return this.api.createShipmentV2WithHttpInfo(param.createShipmentV2Request, param.xPBDeveloperPartnerId, param.xPBLocationId, param.xPBTransactionId,  options).toPromise();
    }

    /**
     * The operation creates a new Shipment or generate a Shipment Label. - To create a domestic shipment, the operation requires   - Domestic addresses \'To\' and \'From\' locations respectively within the same country   - carrier services, and   - associated special services. - While for the International shipment, the operation requires   - International address(es) for delivery, that is \'To\' address must be the international country location(s) and not the same country mentioned in \'From\' address   - supported international carrier services   - associated special service(s), and    - customs information. 
     * Create Shipment
     * @param param the request object
     */
    public createShipmentV2(param: ShipmentByRateShopApiCreateShipmentV2Request, options?: Configuration): Promise<DomesticShipmentResponseV2> {
        return this.api.createShipmentV2(param.createShipmentV2Request, param.xPBDeveloperPartnerId, param.xPBLocationId, param.xPBTransactionId,  options).toPromise();
    }

    /**
     * The operation reprints Shipment by the shipmentId. It retrieves an existing shipping label to reprint. The API sends the shipmentID returned by the original created shipment request. Use this only if the shipping label in the Create Shipment response is missing or lost.
     * Reprint Shipment
     * @param param the request object
     */
    public reprintShipmentByIdV2WithHttpInfo(param: ShipmentByRateShopApiReprintShipmentByIdV2Request, options?: Configuration): Promise<HttpInfo<ReprintShipmentV2>> {
        return this.api.reprintShipmentByIdV2WithHttpInfo(param.shipmentReprintV2, param.xPBDeveloperPartnerId, param.xPBLocationId, param.xPBTransactionId,  options).toPromise();
    }

    /**
     * The operation reprints Shipment by the shipmentId. It retrieves an existing shipping label to reprint. The API sends the shipmentID returned by the original created shipment request. Use this only if the shipping label in the Create Shipment response is missing or lost.
     * Reprint Shipment
     * @param param the request object
     */
    public reprintShipmentByIdV2(param: ShipmentByRateShopApiReprintShipmentByIdV2Request, options?: Configuration): Promise<ReprintShipmentV2> {
        return this.api.reprintShipmentByIdV2(param.shipmentReprintV2, param.xPBDeveloperPartnerId, param.xPBLocationId, param.xPBTransactionId,  options).toPromise();
    }

}
