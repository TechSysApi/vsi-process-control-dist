import { ParameterValue } from './common'

/**
 * Contains exactly one main element, based on the use case (XOR).
 */
export interface ParameterValues {
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
     * List of parameter values.
     *
     * @minItems 1
     */
    parameterValues: ParameterValue[]
}
