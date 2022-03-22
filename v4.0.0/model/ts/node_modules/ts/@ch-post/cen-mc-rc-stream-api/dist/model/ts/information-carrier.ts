import { DateTime } from 'apikana/default-types'

/**
 * Identified and captured information carrier (e.g. barcodes, logos)
 */
export interface InformationCarrier {
    /**
     * Symbology of an information carrier
     */
    symbology: Symbology

    /**
     * Value of an information carrier
     */
    value: string
}

/**
 * NOT_RECOGNIZED The symbology is not recognized
 * ADDON Barcode Zusatz zu EAN und UPC
 * CODABAR Barcode Codabar
 * CODE_39 Barcode 39
 * CODE_93 Barcode 93
 * CODE_128 Barcode 128
 * DATA_MATRIX Data Matrix Code
 * EAN_8 International Article Number
 * EAN_13 International Article Number
 * EAN_128 International Article Number
 * I2OF5 Interleved 2 of 5 Code
 * MAXI_CODE Barcode Maxicode
 * PDF_417 Barcode PDF417
 * QR QR Barcode
 * UPC_A Barcode Universal Product Codes (Normalversion)
 * UPC_E Barcode Universal Product Codes (Kurzvariante)
 */

export enum Symbology {
    NOT_RECOGNIZED,
    ADDON,
    CODABAR,
    CODE_39,
    CODE_93,
    CODE_128,
    DATA_MATRIX,
    EAN_8,
    EAN_13,
    EAN_128,
    I2OF5,
    MAXI_CODE,
    PDF_417,
    QR,
    UPC_A,
    UPC_E
}
