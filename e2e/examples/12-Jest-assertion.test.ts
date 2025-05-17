import{test, expect} from "@playwright/test"

test("assertion test demo", async () => {
    expect('apple').toBe('apple')
    expect(true).toBeTruthy()
    expect(false).toBeFalsy()
    expect("apple").toContain('app')
    expect(5).toEqual(6)

})
