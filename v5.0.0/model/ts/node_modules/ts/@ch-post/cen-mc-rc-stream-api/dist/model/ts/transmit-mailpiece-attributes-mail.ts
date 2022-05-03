import { DateTime } from 'apikana/default-types'
import { IdentifierTags } from './identifier-tags'
import { SortingProcess } from './submit_mailpiece'

/**
 * This type contains the coding result for a mail piece that has been determined by CS (ORCA).
 **/
export interface TransmitMailpieceAttributesMail {
    /**
     * [ACTION] Attribute is required in future releases after WESort is rolled out in all sorting centers.
     * Unique identifier of the sorting center (ONRP).
     * @maxLength 200
     */
    locationKey?: string

    /**
     * [ACTION] Attribute is required in future releases after WESort is rolled out in all sorting centers.
     * Defines the sorting process.
     */
    sortingProcess?: SortingProcess

    /**
     * [ACTION] Attribute is required in future releases after WESort is rolled out in all sorting centers.
     * The machine specific identifier to track a mail item during a machine sorting cycle. The identifier is used to synchronize the data events between coding and sorting systems.
     * @maxLength 32
     */
    processingItemId?: string

    /**
     * [DEPRECATED] Is replaced by the attribute processingItemId. Attribute will be removed in future releases after WESort is rolled out in all sorting centers.
     * The machine specific identifier to track a mail item during a machine sorting cycle. The identifier is used to synchronize the data events between coding and sorting systems.
     * @maxLength 200
     */
    mailpieceId?: string

    /**
     * Contains a list of ids identifying the processing item.
     */
    idTags?: IdentifierTags

    /**
     * Timestamp of data collection.
     */
    timestamp: DateTime

    addressResult?: AddressResultMail
}

export interface AddressResultMail {
    /**
     * [This is no CEN-Field]
     * Proprietary Swiss Post Sort Code
     *
     * All numbers:
     *  __________ _____________________ ___________ _____ ________________
     * | Postcode | Post Code Extension | Code Type | BBZ | SequenceNumber |
     * |     4    |           2         |      1    |  3  |        4       |
     *
     * i.e. 17620013610850
     */
    sortCode?: string

    /**
     * If present, this element states that the mail piece cannot be sorted based on a distribution code.
     * Depending on the concrete reject reason, the mail piece may be processed again at a Manual Work Station in the mode ‘Reject’.
     * In case of early detection of NSA (change of address) or NIXIE (mail piece is not deliverable to the recognized address/customer),
     * the reject reasons ‘early_detection_nsa resp. ‘early_detection_nixie’ are set in order to indicate
     * that the mail piece shall be sorted out for being processed at a Manual Work Station in the mode ‘Rework (Nachbearbeitung)’.
     */
    rejectReason?: string

    /**
     * Boolean flag that states whether the CS may subsequently provide further coding results or not
     */
    finalCoded?: boolean

    /**
     * If the mail piece is a business reply mail, this element contains the type of business reply mail.
     * Used to recognize a special sort by matching the value with Machine Event Line column RCMI_BRM
     * @type integer
     */
    businessReplyMailType?: number

    /**
     * If the mail piece is a registered mail, this element contains the type of registered mail.
     * Used to recognize a special sort by matching the value with Machine Event Line column RCMI_REGISTERED_TYPE
     * @type integer
     */
    registeredMailType?: number

    /**
     * If the mail piece is an express mail, this element contains the express type.
     * Used to recognize a special sort by matching the value with Machine Event Line column RCMI_EXPRESS_TYPE
     * @type integer
     */
    expressMailType?: number

    /**
     * Name of the mail attribute category.
     * Used to determine the mailAttribute element. The mailAttribute is used in combination of the sortcode to find the sorting product
     * If value = «not_for_sequencing» the mailAttribute «attribute» is used in addition to the sortcode to find the destination in the sortplan.
     * The name «attribute» is a convention between the sorting system and the sort planning tool.
     * @maxLength 200
     */
    mailService?: string

    /**
     * Marks a detected violation of Revenue Protection rules.
     * Used to recognize a special sort by matching the value with Machine Event Line column RCMI_RP_VIOLATION
     * Currently used values: Suspect, Unknown_Device, Unknown_Invoice_Ref, Stolen, Unknown_Product, Duplicate, Authenticity, PCs_inconsistent, Non_Read, Unknown_Code, Non_Franked, Franking_Expired
     * @maxLength 200
     */
    revenueProtectionViolation?: string
}
