/**
 * Response of the device to a Request.
 */
export interface RequestStatus {
    /**
     * The date+timestamp which identifies the point in time, where the information was generated, including milliseconds.
     *
     * @format date-time
     */
    timestamp: string

    /**
     * [ACTION] Attribute is required in future releases after WESort is rolled out in all sorting centers.
     * Unique identifier of the sorting center (ONRP).
     * @maxLength 200
     */
    locationKey?: string

    state: RequestState

    /**
     * May contain additional information on the status, e.g. error reason
     * in case of ERROR. Messages are not meant to be processed
     * automatically but should just be used for problem
     * tracking.
     */
    message?: string
}

export enum RequestState {
    OK,
    ERROR,
    PROCESSING
}
