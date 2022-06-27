/**
 * Weight measurement of the mail piece.
 */
export interface Weight {
    /**
     * Actual weight in [g].
     *
     * @type integer
     * @maxLength 6
     */
    value?: number

    /**
     * The id of the scale (e.g. HAE-024)
     */
    scaleId?: string

    /**
     * Weighing errors
     */
    state?: WeightMeasurementState
}

export interface WeightMeasurementState {
    /**
     * False: Weight is not legal for trade.
     */
    isLegalForTrade: boolean

    packageDistanceError?: boolean
    packageLengthError?: boolean
    externalError?: boolean

    invalidMeasurement?: boolean

    /**
     * Weight higher than max. weight.
     */
    overweight?: boolean

    /**
     * Weight lower than min weight.
     */
    underweight?: boolean

    overload?: boolean
    underload?: boolean

    conveyorSpeedChangedDuringMeasurement?: boolean
    conveyorSpeedOutOfMaxLimit?: boolean
    alibiStorageAtScaleFailed?: boolean

    scaleDataFormatError?: boolean
}
