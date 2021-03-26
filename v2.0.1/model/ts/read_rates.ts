/**
 * Contains an array of read rates.
 */
export interface ReadRates {
    /**
     * The date+timestamp which identifies the point in time, where the information was generated, including milliseconds.
     *
     * @format date-time
     */
    timestamp: string

    readRates?: ReadRate[]
}

/**
 * The read rate event of an element. The counter will be used for visualization and statistic purposes.
 */
export interface ReadRate {
    /**
     * The location where the information was generated. (Siehe Anlagen Bezeichnungskonzept)
     */
    processPoint: string

    /**
     * Total number of parcel passed the reading device.
     *
     * @type integer
     * @minimum 0
     */
    total: number

    /**
     * Number of parcel successfully read at processpoint and the cen-mc-rc.submit-mailpiece event has been sent to the coding system.
     *
     * @type integer
     * @minimum 0
     */
    read: number
}
