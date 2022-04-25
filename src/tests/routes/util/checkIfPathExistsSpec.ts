import checkIfPathExists from "../../../routes/util/checkIfPathExists";

it("expects the path of the root folder to exist", () => {
    expect(checkIfPathExists("../../..")).toBe(true);
});
