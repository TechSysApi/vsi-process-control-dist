export interface ParameterValue {
    /**
     * The name of the parameter for which the value is changed.
     */
    name: string

    /**
     * The new/requested value of the parameter.
     */
    newValue: string

    type?: ParameterType

    /**
     * The current/previous value of the parameter.
     */
    oldValue?: string
}

/**
 * The type of a parameter value.
 * Encoding / formatting follow the same rules as JSON encoding (i.e. String encoding = UTF8, dates = ISO 8601, booleans = true/false)
 */
export enum ParameterType {
    BOOLEAN,
    INTEGER,
    STRING,
    DATE,
    TIME,
    DATE_TIME
}

export interface ModuleState {
    name: string

    /**
     * Module state
     * Techsys:
     *  - publish statuschange: RDY=0,DSA=1,ERR=2
     *  - set status: ENA=10,DISA=11
     * @type integer
     * @minimum 0
     */
    value: number
}
