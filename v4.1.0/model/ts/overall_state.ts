import { ModuleState } from './common'

/**
 * Contains an overall machine state and a list of (sub) moduleStates.
 */
export interface OverallState {
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

    /**
     * This is the single attribute which has a predefined name.
     * It represents the overall state of the machine represented by the Sorter instance.
     * If the Sorter is not able to calculate the overall state this value is not to be sent.
     * @type integer
     * @minimum 0
     */
    machineState: number

    /**
     * The set of attributes transmitting substates of a Sorter. This elements stands for a specific visualisation element / state variable.
     * There exists as many instances of this attribute in the group as necessary to express all state information of the Sorter role.
     */
    moduleStates: ModuleState[]
}
