/**
 * Contains an array of fill levels.
 */
export interface FillLevels {
    /**
     * The date+timestamp which identifies the point in time, where the information was generated, including milliseconds.
     *
     * @format date-time
     */
    timestamp: string;

    fillLevels: FillLevel[];
}

/**
 * The actual fill level of the parcel sorter. The fill level will be used for visualization and control purposes.
 */
export interface FillLevel {
    /**
     * The location where the information was generated. (Siehe Anlagen Bezeichnungskonzept)
     */
    processPoint: string;

    /**
     * Number of parcels actually at the processpoint (Sorter / Conveyor).
     *
     * @type integer
     * @minimum 0
     */
    total: number;

    /**
     * Maximum number of parcels the processpoint (Sorter / Conveyor) can buffer. xy
     *
     * @type integer
     * @minimum 0
     */
    capacity: number;

    /**
     * Number of parcels with no destination.
     *
     * @type integer
     * @minimum 0
     */
    noDestination: number;

    /**
     * Number of parcels with destination MCS.
     *
     * @type integer
     * @minimum 0
     */
    destinationMCS: number;

    /**
     * Number of parcels with destination reject.
     *
     * @type integer
     * @minimum 0
     */
    destinationReject: number;
}