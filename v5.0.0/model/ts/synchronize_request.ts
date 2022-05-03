export interface SynchronizeRequest {
    /**
     * The date+timestamp which identifies the point in time, when control requested the synchronization of the device.
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
}
