// import express from "express";
import sharp from "sharp";
import path from "path";

// Basic function to resize the image using sharp https://sharp.pixelplumbing.com
async function imgResize(
    filename: string,
    width: string,
    height: string
): Promise<void> {
    const inputFile = path.join(__dirname, "../../..", "images/full", filename);

    const outputFile = path.join(
        __dirname,
        "../../..",
        "images/resized",
        `${width}x${height}${filename}`
    );
    try {
        await sharp(inputFile)
            .resize(parseInt(width), parseInt(height))
            .toFile(outputFile);
    } catch {
        console.log(
            "Error: Image can't be processed. Please enter the correct filename, width and height"
        );
    }
}
export default imgResize;
