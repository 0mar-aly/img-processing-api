// Main processing function
import express from "express";
import path from "path";
import imgResize from "../util/resize";
import checkIfPathExists from "../util/checkIfPathExists";

const processor = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    const outPath = path.join(
        __dirname,
        "../../..",
        "images/resized",
        `${req.query.width}x${req.query.height}${req.query.filename}`
    );

    const inPath = path.join(
        __dirname,
        "../../..",
        "images/full",
        `${req.query.filename}`
    );

    const originalImgExists = checkIfPathExists(inPath);
    const resizedImgExists = checkIfPathExists(outPath);
    // Checking if the filename in the URL exists
    if (originalImgExists) {
        // Checking if an output with the same filename exists (cached)
        if (resizedImgExists) {
            res.sendFile(outPath);
        } else {
            await imgResize(
                req.query.filename as string,
                req.query.width as string,
                req.query.height as string
            );
            if (
                isNaN(parseInt(req.query.width as string)) ||
                isNaN(parseInt(req.query.height as string))
            ) {
                next("Error: Invalid width or height");
            } else res.sendFile(outPath);
        }
    } else {
        next("Error: File does not exist");
    }
};

export default processor;
