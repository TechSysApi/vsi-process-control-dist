import { ParameterType } from './common'

/**
 * Contains exactly one main element, based on the use case (XOR).
 */
export interface ParameterMetadata {
    /**
     * The date+timestamp which identifies the point in time, where the information was generated, including milliseconds.
     *
     * @format date-time
     */
    timestamp: string

    /**
     * List of parameters to be set.
     *
     * @minItems 1
     */
    parameters: Parameter[]
}

export interface Parameter {
    /**
     * The name of the parameter.
     *
     * @minimum 55
     */
    name: string

    /**
     * True if parameter is modifiable, false otherwise.
     */
    modifiable: boolean

    /**
     * The factory setting of parameter value.
     *
     * @minimum 50
     */
    factoryValue?: string

    type: ParameterType

    /**
     * For Integer, Date. Time and DateTime types the min value defines the lower limit of the value range.
     * For String value it defines the min length of the String.
     *
     * @minimum 25
     */
    min?: string

    /**
     * For Integer, Date. Time and DateTime types the max value defines the upper limit of the value range including the max value.
     * For String value it defines the max length of the String.
     *
     * @minimum 25
     */
    max?: string

    /**
     * The default description of the parameter.
     *
     * @minimum 2000
     */
    description: string
}
