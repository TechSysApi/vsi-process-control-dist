export interface HardwareRebootRequest {
    /**
     * The date+timestamp which identifies the point in time, where the reboot request was generated, including milliseconds.
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

export interface SoftwareRestartRequest {
    /**
     * The date+timestamp which identifies the point in time, where the restart request was generated, including milliseconds.
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
