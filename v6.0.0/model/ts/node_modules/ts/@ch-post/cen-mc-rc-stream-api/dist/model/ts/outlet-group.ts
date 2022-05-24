import { Outlet } from './outlet'
import { Position } from './position'
/**
 * Groupings of physical outlets for each sequencing pass
 */
export interface OutletGroup {
    /**
     * A unique key inside the sort plan to identify this occurrence of OutletGroup
     * Primary key 🔑
     * @maxLength 200
     */
    name: string

    /**
     * Defines the usage made of the outlet group.
     */
    specialType?: OutletArea

    /**
     * The list of physical outlets to be used.
     * i.e. Endstellen
     */
    outlets?: Outlet[]

    /**
     * The list of positions to be used.
     * i.e. RX-Stellplatz
     */
    positions?: Position[]
}

/**
 * Defines the outlet area. SEQ_AREA and SEQ_OV_AREA are not used for parcel sorting.
 * - UNKNOWN: Default enum value to map not supported values.
 * - STANDARD_AREA (STD_AREA): Area used for non-sequenced mail piece;
 * - SEQUENCED_AREA(SEQ_AREA): Area used for sequenced mail piece;
 * - REJECT_AREA: Area for SpecialSort: application specific (ZDS.SpecialVZ) or machine specific (ASL) destinations.
 * - SEQUENCED_OVERFLOW_AREA(SEQ_OV_AREA): Area for overflow stackers, typically used in the 1st pass when the mail volume is not yet precisely known. This area consists of all the remaining stackers.
 * - MANUAL_CODING_STATION_AREA (MCS_AREA): Area for manual coding systems
 */
export enum OutletArea {
    UNKNOWN,
    STANDARD_AREA,
    SEQUENCED_AREA,
    REJECT_AREA,
    SEQUENCED_OVERFLOW_AREA,
    MANUAL_CODING_STATION_AREA
}
