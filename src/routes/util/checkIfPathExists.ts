import fs from "fs";

function checkIfPathExists(imgPath: string) {
    // Using fs.existsSync because fs.exists is deprecated https://nodejs.org/api/fs.html
    return fs.existsSync(imgPath);
}
export default checkIfPathExists;
