import { SortingProcess } from './submit_mailpiece'
import { SortReason } from './update_mailpiece_attributes'

/**
 * This type provides the requester with the ability to obtain the results of an enrichment response. The RC
 * returns the document either on request of the MC or in an unsolicited fashion.
 * The MC expects to get all defined attributes for the corresponding mailpiece from the RC System.
 **/
export interface RequestMailpieceAttributes {
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
     * The current list of machine specific sort reasons.
     */
    sortReasons?: SortReason[]

    /**
     * [DEPRECATED] Is replaced by the attribute idTags. Attribute will be removed in future releases when all target systems use the new field idTags.
     * Represents a long living identifier for the mail item
     * @maxLength 200
     */
    idTag?: string

    /**
     * Timestamp of data collection.
     * @format date-time
     */
    timestamp: string

    /**
     * Refers to a module id as event-source.
     * @pattern [A-Z]{3}[0-9]{2}
     */
    sourceId: string
}
