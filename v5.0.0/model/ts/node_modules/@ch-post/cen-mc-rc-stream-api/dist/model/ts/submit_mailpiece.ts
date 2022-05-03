import { InformationCarrier } from './information-carrier'
import { Weight } from './weight'

export enum MailpieceFace {
    TOP,
    LEFT,
    RIGHT,
    FRONT,
    REAR,
    BOTTOM,
    FRONT_LEFT,
    FRONT_RIGHT,
    REAR_LEFT,
    REAR_RIGHT
}

export enum MailpieceType {
    UNKNOWN,
    LETTER,
    LETTER_BUNDLE,
    FLAT,
    FLAT_BUNDLE,
    PARCEL
}

/**
 * Defines the sorting proess.
 * AUTOMATIC Sorted by the sorter
 * MANUAL_CODING_REJECT Device where a coder manually captures barcodes and enters address information
 * MANUAL_CODING_LIGHT Device where barcodes barcodes, products and the weight is captured (manual or partially automated)
 * MANUAL_CODING_BULK Device where barcodes, weight and dimensions and address information for bulky goods are captured or entered (manual or partially automated)
 * MANUAL_CODING_BULK_AUTOMATIC Device where a coder manually captures barcodes and other specific information for bulky goods
 */
export enum SortingProcess {
    AUTOMATIC,
    MANUAL_CODING_REJECT,
    MANUAL_CODING_LIGHT,
    MANUAL_CODING_BULK,
    MANUAL_CODING_BULK_AUTOMATIC
}

export interface SubmitMailpiece {
    /**
     * [ACTION] Attribute is required in future releases after WESort is rolled out in all sorting centers.
     * Unique identifier of the sorting center (ONRP).
     * @maxLength 200
     */
    locationKey?: string

    /**
     * [ACTION] Attribute is required in future releases after WESort is rolled out in all sorting centers.
     * Defines the sorting process.
     */
    sortingProcess?: SortingProcess

    /**
     * [ACTION] Attribute is required in future releases after WESort is rolled out in all sorting centers.
     * The machine specific identifier to track a mail item during a machine sorting cycle. The identifier is used to synchronize the data events between coding and sorting systems.
     * @maxLength 32
     */
    processingItemId?: string

    /**
     * [DEPRECATED] Is replaced by the attribute processingItemId. Attribute will be removed in future releases after WESort is rolled out in all sorting centers.
     * The machine specific identifier to track a mail item during a machine sorting cycle. The identifier is used to synchronize the data events between coding and sorting systems.
     * @maxLength 200
     */
    mailpieceId?: string

    /**
     * [DEPRECATED] Is replaced by the attribute idTags. Attribute will be removed in future releases when all target systems use the new field idTags.
     * Represents a long living identifier for the mail item
     * @maxLength 200
     */
    idTag?: string

    /**
     * Timestamp of data collection.
     * @format date-time
     */
    timestamp: string

    /**
     * Refers to a module id as event-source.
     * @pattern [A-Z]{3}[0-9]{2}
     */
    sourceId: string

    /**
     * The MailpieceAttrT type is assigned to the element mp_attr. It provides basic
     * mailpiece related information:
     *
     * - the kind of the mail item
     * - the mailclass of the mail item; important for the ED because it and may affect the address recognition
     * - the scanned faces of the mail item. The FaceSetT type is assigned to faces and allows providing a sequence of faces.
     *   The FaceSetT types allows to link a face with the corresponding image by a page attribute.
     * - a preknowledge result if a barcode reader or some other type of Enrichment Device is directly attached to the MC.
     *   This result will be in accordance with the result type specified in the IC-ED interface.
     *
     */
    mpAttr?: MailpieceAttr
}

/**
 * To specify a region location, the region descriptor LocationT listed subsequently is used. LocationT encloses
 * no information about the image orientation. The image orientation is specified in the TIFF header. Region
 * coordinates are given in pixel and are related to the image origin which corresponds to the upper left corner.
 * The coordinates are independent of the TIFF orientation.
 */
export interface Location {
    /**
     * # GER-TODO
     * Zur Erkennung auf welcher Seite (welche Kamera) der Identcode gelesen wurde (z.B. für VCS…).
     * Der Wert ist nur auf den Identcode (national) bezogen.
     */
    face?: MailpieceFace

    /**
     * Achtung: Die Punkte in Förderrichtung durchnummeriert, im Unterschied zum CEN-Standard, wo sie im (Gegen-)Uhrzeigersinn ausgerichtet sind.
     * Die Punkte werden wie folgt ermittelt/ausgegeben:
     * erster Punkt in Förde-richtung ist der Start-punkt gezählt wird fortlaufend in Förderichtung (nicht Uhrzeigersinn)
     * alle Angaben sind bezogen auf den Triggernullpunkt (= Schalenanfang) ‚x’ wird in Förderrichtung ermittelt; ‚y’ quer zur Förderrichtung
     */
    polygon?: Polygon
}

export interface Polygon {
    dot: PolygonDot[]
}

export interface PolygonDot {
    x: number
    y: number
}

/**
 * This type is taken from CEN/TS 15448 and extended by a “preknowledge” element.
 * The type MailpieceAttrT specifies basic mailpiece attributes.
 */
export interface MailpieceAttr {
    /**
     * Defines the type of the mail item.
     */
    type: MailpieceType

    /**
     * Provides preknowledge to the RC System, e.g. a barcode
     * result if a barcode reader is integrated into the machine.
     *
     */
    preknowledge?: RecognitionResult
}

export interface RecognitionResult {
    /**
     * [DEPRECATED] Attribute will be removed in future releases after WESort is rolled out in all sorting centers.
     * If true, multiple identcodes were recognized by the camera.
     */
    multipleMailpiecdIdRecognized?: boolean

    /**
     * Contains the data from the information carrier identified by the reading system.
     * The reading system should read and send all available barcodes/matrix codes. The consuming systems will apply further classification and filtering.
     */
    informationCarriers?: InformationCarrier[]

    /**
     * [DEPRECATED] Is replaced by the attribute informationCarriers. Attribute will be removed in future releases after WESort is rolled out in all sorting centers.
     * Contains all barcodes/matrix codes identified by the reading system.
     * The reading system should read and send all available barcodes/matrix codes. The consuming systems will apply further classification and filtering.
     */
    barCodes?: BarCode[]

    location?: Location

    /**
     * dimension of the mail piece.
     */
    dimension?: Dimension

    /**
     * weight of the mail piece.
     */
    weight?: Weight

    /**
     * Legal For Trade information.
     */
    legalForTrade?: LegalForTrade

    binOccupancy?: BinOccupancyState
}

/**
 * Provides the valid symbologies of a barcode label
 */
export enum BarCodeSymbology {
    CODE_128,
    DATA_MATRIX
}

/**
 * 
# Description

This type defines the states a barcode can have.

* **NO_BARCODE**: The barcode symbol or the code value could not be detected.

* **DETECTED_AND_RECOGNIZED**: The barcode/matrix code matches at least one of the below patterns / validation rules

* **DETECTED_AND_NOT_RECOGNIZED**: The barcode/matrix code matches none of the below patterns / validation rules

---

Only recognized barcodes/matrix codes such as productCodes should be used by consuming systems.

Not recognized barcodes can be useful:
- in case of new barcode formats
- for systems outside of PL sorting systems
- for (error) analysis

# Patterns/ Validation Rules:

## CODE_128

    1. **Internationaler Barcode**

        Beispiel: EP923689367CH  
        Validierung: `[A-Z]{2}[0-9]{9}[A-Z]{2}` (13 Zeichen)

    2. **Nationaler Barcode**

        Beispiel: 994214393000008666  
        Validierung: `(98|99)[0-9]{16}` (18 Zeichen)

    3. **Produktcode: PRZL (Produkt/Zusatzleistungen)**

        Beispiel: 0509  
        Validierung: `[0-9]{4}` (4 Zeichen)

    3. **BoxId**

        Erste zwei Ziffern: Typ der Box: «45» für ThermoCare-Box, Letzte sechs Ziffern: Seriennummer der Box
        Beispiel: 45093456
        Validierung: `[0-9]{8}` (8 Zeichen)

    4. **Förderhilfentyp**

        Format: Erste zwei Ziffern: Typ der Förderhilfe, Letzte vier Ziffern: Gewicht der Förderhilfe in Gramm
        Beispiel: 020450
        Validierung: `[0-9]{6}` (6 Zeichen)

## DATA_MATRIX 
Datenfeld: Data Matrix 
- Validierung: ECC200
Beispiel: 756109025843770000010000000000000000000003489510005501606300
Validierung: ECC200 (Max. 90 Zeichen)
 */
export enum BarCodeStatus {
    NO_BARCODE,
    DETECTED_AND_RECOGNIZED,
    DETECTED_AND_NOT_RECOGNIZED
}

/**
 * This type contains a barcode.
 */
export interface BarCode {
    type?: BarCodeSymbology // Provides the valid symbologies of a barcode label.
    value?: string // This element contains the value of the barcode.
    status: BarCodeStatus // This element contains the status of the barcode.
}

/**
 * Dimension measurement of the mail piece
 */
export interface Dimension {
    /**
     * Length in [mm].
     *
     * @type integer
     */
    length?: number

    /**
     * Width in [mm].
     *
     * @type integer
     */
    width?: number

    /**
     * Height in [mm].
     *
     * @type integer
     */
    height?: number

    state?: DimensionMeasurementState
}

/**
 * State of the measurement.
 */
export interface DimensionMeasurementState {
    measurementResult: DimensionMeasurementResultType
    measurementRange: DimensionMeasurementRangeType
    itemSizeClassification: ItemSizeClassificationType
}

/**
 * Measurement result state.
 *
 * - OK: Measurement VMS ok
 * - NOK: Measurement VMS not ok
 * - NOT_RECOGNIZED: No object recognized
 */
export enum DimensionMeasurementResultType {
    OK,
    NOK,
    NOT_RECOGNIZED
}

/**
 * - INSIDE: Object is within the measurement range
 * - OUTSIDE: Object is outside of the measurement range
 */
export enum DimensionMeasurementRangeType {
    INSIDE,
    OUTSIDE
}

export interface ItemSizeClassificationType {
    /**
     * True: object size ok
     * False: Object size not ok (over and/or undersized, see corresponding flags)
     */
    ok: boolean

    /**
     * object too big to be measured
     */
    oversized: boolean

    /**
     * object too small to be measured
     */
    undersized: boolean
}
/**
 * Customs information
 */
export interface LegalForTrade {
    /**
     * # GER-TODO
     *
     * Realvolumen VMS#1 wenn VMS#1 = VMS420/520 Realvolumen = 000000 bei VMS#1 = VMS410/510
     * [dm3]
     *
     * @type integer
     * @maxLength 5
     */
    actualVolume?: number

    /**
     * Boxvolumen = Länge x Breite x Höhe
     * [dm3]
     *
     * @type integer
     * @maxLength 5
     */
    boxVolume?: number

    /**
     * Realvolumen / Boxvolumen in % ganzzahlig
     *
     * @type integer
     */
    volumeRatio?: number

    /**
     * Die Paketform.
     */
    shape?: ShapeType

    state?: LegalForTradeState
}

/**
 * Detailed information on legal for trade relevant measurements.
 *
 * - If all flags are false, the measurements are legal for trade.
 * - If only weightError is true, dimension measurement is legal for trade.
 * - If only dimensionError is true, weight measurement is legal for trade.
 * - Otherwise, measurements are not legal for trade.
 */
export interface LegalForTradeState {
    /**
     * Conveyor speed is out of tolerance.
     */
    conveyorSpeedError: boolean

    /**
     * Alibi storage error.
     */
    storageError: boolean

    /**
     * VMS data is not legal for trade.
     */
    dimensionError: boolean

    /**
     * Weight data not legal for trade.
     */
    weightError: boolean
}

export enum ShapeType {
    CUBIC,
    IRREGULAR
}

/**
 * Doppelbelegung / Leerschalen-kontrolle
 * emptyBinOccupied: Belegte Leerschale
 * binMultipleItemOccupied: Doppelbelegung - Erkennung der Schalenbelegung von DWS
 * frontOverlappingLimitExceeded: Überstand vorne zu groß
 * backOverlappingLimitExceeded: Überstand hinten zu groß
 * multipleItemsDetected: >= 2 Objekt erkannt
 * conveyingAidDetected: Förderhilfe erkannt
 */
export interface BinOccupancyState {
    emptyBinOccupied: boolean
    binMultipleItemOccupied: boolean
    frontOverlappingLimitExceeded: boolean
    backOverlappingLimitExceeded: boolean
    multipleItemsDetected: boolean
    conveyingAidDetected: boolean
}
