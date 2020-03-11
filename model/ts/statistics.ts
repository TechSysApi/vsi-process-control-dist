/**
 * Used to send statistics data from the device to the control.
 */
export interface Statistics {
    /**
     * The date+timestamp which identifies the point in time, where the information was generated, including milliseconds.
     *
     * @format date-time
     */
    timestamp: string;

    stats?: Stats[];
}

/**
 * The statistic event of an element. The statistic will be used for visualization and control purposes.
 */
export interface Stats {
    /**
     * The timestamp identifies the beginning of the time slice. A separate timestamp is needed to correct the values from the previous statistics event.
     *
     * @format date-time
     */
    timeSliceStart: string;

    /**
     * The time period in minutes when the statistics data was collected.
     *
     * @type integer
     * @minimum 1
     */
    timeSlice: number;

    /**
     * The location where the information was generated. (Siehe Anlagen Bezeichnungskonzept)
     */
    processPoint: string;

    type: StatisticsType;

    values: string[];
}

/**
 * StatisticsType defines the contents in the statistics values.
 * List of values:
 * - UNKNOWN: Default enum value to map not supported values.
 * - INDUCTION: induction statistics (Einschleusung-Statistik)
 * - CHUTE: physical sort destination statistics (Endstellen-Statistik).
 * - SCANNER: scanner statistics (DWS-Statistik).
 * - SORTER: Up- and Downtime statistics (Sorter Verfügbarkeit-Statistik).
 * - TRAY_STAT: tray load statistics (Schalenauslastung-Statistik).
 * - DESTINATION_STAT: logical sort destination statistics (Zielstatistik).
 * - SPECIAL_DESTINATION: special sort statistics (Sonderziel- / Fehlerart-Statistik).
*/
export enum StatisticsType {
    UNKNOWN,
    INDUCTION,
    CHUTE,
    SCANNER,
    SORTER,
    TRAY_STAT,
    DESTINATION_STAT,
    SPECIAL_DESTINATION
}