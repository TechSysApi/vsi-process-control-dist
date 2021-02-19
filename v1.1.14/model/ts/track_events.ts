import { MailpieceAttr } from '@ch-post/cen-mc-rc-stream-api/dist/model/ts/submit_mailpiece'
/**
 * This element represents an event-driven data generation of a piece of MPE.
 */
export interface TrackEvents {
    /**
     * The date+timestamp which identifies the point in time, where the information was generated, including milliseconds.
     *
     * @format date-time
     */
    timestamp: string;

    trackEvents: TrackEvent[];
}

/**
 * The track event of an parcel. The event will be used for statistic purpose.
 */
export interface TrackEvent {
    eventType: TrackEventType;

    /**
     * The location where the information was generated. (Siehe Anlagen Bezeichnungskonzept)
     */
    processPoint: string;

    /**
     * The id of the mailpiece assigned by the sorting machine during sorting.
     */
    itemId: string;

    /**
     * Represents the national identifier for the mailpiece item.
     *
     * @pattern (98|99)[0-9]{16}
     */
    mailpieceId?: string;

    /**
     * Reason of discharge. Only relevant for discharge events.
     */
    dischargeReason?: SortReason;

    /**
     * Refers to a module id as event-source, e.g. DWS02
     * <b>Validation:</b> sourceId must be set when eventType = TRACK
     * @pattern [A-Z]{3}[0-9]{2}
     */
    sourceId?: string;

    /**
     * <b>Dependency:</b> The MailpieceAttrT type is imported from cen-mc-rc-stream-api where it is used for the submit-mailpiece topic
     * <b>Validation:</b> MailpieceAttr should only be set when eventType = TRACK
     * The MailpieceAttrT type provides basic mailpiece related information:
     * - the kind of the mail item
     * - the mailclass of the mail item; important for the ED because it and may affect the address recognition
     * - the scanned faces of the mail item. The FaceSetT type is assigned to faces and allows providing a sequence of faces.
     *   The FaceSetT types allows to link a face with the corresponding image by a page attribute.
     * - a preknowledge result if a barcode reader or some other type of Enrichment Device is directly attached to the MC.
     *   This result will be in accordance with the result type specified in the IC-ED interface.
     **/
    mailpieceAttributes?: MailpieceAttr;   

}

/**
 * Defines the track event type.
 * List of values:
 * - UNKNOWN: Default enum value to map not supported values.
 * - INDUCTION: Event occured during induction
 * - TRACK: Event occured on the sorter
 * - DISCHARGE: Event occured during discharge
 */
export enum TrackEventType {
    UNKNOWN,
    INDUCTION,
    TRACK,
    DISCHARGE
}

/**
 * Defines the machine specific sort reasons.
 * List of values:
 * - UNKNOWN: Default enum value to map not supported values.
 * - OK: Discharge OK. This describes just a "regular" item
 * - MAX_RECIRCULATION: Item has reached the max allowed amount of recirculations.
 * - ITEM_NO_READ: Item has reached the max allowed amount of scans and the last attempt was a no read.
 * - ITEM_MULTIPLE_READ: Multiple national or international id barcodes could be identified. 
 * - SCANNER_TIMEOUT: Item has reached the max allowed amount of scans and the last attempt was a "no answer" from scanner. 
 * - ITEM_STRAY: Stray item detected. 
 * - ITEM_INDUCTION_ERROR: Induction error item detected (occupied twice, wrong tray). 
 * - ITEM_DISCHARGE_ERROR: Discharge faults. 
 * - ITEM_ERROR: Item has a Logical error. 
 * - ITEM_TRACKING_ERROR: item was inducted with tracking fault.
 * - ITEM_OCCUPIED_TWICE_ERROR: item was inducted on occupied tray.
 * - ITEM_DISAPPEARED: The parcel was lost at unknown location.
 * - OUTLET_NOT_AVAILABLE: No available chute could be found.
 * - OUTLET_UNKNOWN: Logical destination not defined.
 * - UNDEFINED_ERROR: Internal error happened.
 * - NO_CAPACITY: The destination outlet has no more capacity.
 * - DIMENSION_ERROR: Item oversize. The parcel was discharge, because of dimension exceed. 
 * - WEIGHT_ERROR: Item too heavy. The parcel was discharge, because of weight exceed.
 * - SORTPLAN_ERROR: Sortplan error. 
 * - DIRECT_SORTING_MODE: Item sorted by the direct sorting mode. 
 * - ITEM_NO_SORTCODE: No sortcode has been received for this item. 
 * - OUTLET_MISSED: Sortcode has been updated (push or repetitive requests), physical outlet already passed.
*/
export enum SortReason {
    UNKNOWN,
    OK,
    MAX_RECIRCULATION,
    ITEM_NO_READ,
    ITEM_MULTIPLE_READ,
    SCANNER_TIMEOUT,
    ITEM_STRAY,
    ITEM_INDUCTION_ERROR,
    ITEM_DISCHARGE_ERROR,
    ITEM_ERROR,
    ITEM_TRACKING_ERROR,
    ITEM_OCCUPIED_TWICE_ERROR,
    ITEM_DISAPPEARED,
    OUTLET_NOT_AVAILABLE,
    OUTLET_UNKNOWN,
    UNDEFINED_ERROR,
    NO_CAPACITY,
    DIMENSION_ERROR,
    WEIGHT_ERROR,
    SORTPLAN_ERROR,
    DIRECT_SORTING_MODE,
    ITEM_NO_SORTCODE,
    OUTLET_MISSED
}