import imgResize from "../../../routes/util/resize";

it("expects the imgResize function with 3 VALID string arguments to be resolved", async () => {
    await expectAsync(imgResize("img", "100", "200")).toBeResolved();
});
