export default class Ensure {
    static url() {
        const instance = new Ensure()
        instance.assertUrl = true
        return instance
    }

    static heading() {
        const instance = new Ensure()
        instance.assertHeading = true
        return instance
    }

    is(expected) {
        this.expected = expected
        return this
    }

    async perform() {
        if (this.assertUrl) {
            const doesActualUrlEndWithExpectedPath = await this.#pollForSuccess(async () => {
                const actualUrl = await browser.getUrl()
                return await actualUrl.endsWith(this.expected)
            })
            await expect(doesActualUrlEndWithExpectedPath).toBe(true)
        }

        if (this.assertHeading) {
            if (this.expected.indexOf("'") > -1) {
                this.expected = this.expected.substring(0, this.expected.indexOf("'"))
            }
            await expect($(`//h1[contains(text(),'${this.expected}')]`)).toBeDisplayed()
        }
    }

    async #pollForSuccess(predicate) {
        const pollingLimit = 10
        const pollingIntervalSeconds = 1

        for (let i = 0; i < pollingLimit; i++) {
            if (await predicate()) {
                return true
            }
            await new Promise((resolve) => setTimeout(resolve, pollingIntervalSeconds * 1000))
        }
        return false
    }
}
