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
