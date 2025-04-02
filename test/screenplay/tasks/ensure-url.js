import { expect } from 'chai'

export default class EnsureUrl {
    is(expectation) {
        this.expectation = expectation
        return this
    }

    async perform() {
        var actualUrl
        const doesActualUrlEndWithExpectedPath = await this.#pollForSuccess(async () => {
            actualUrl = await browser.getUrl()
            return await actualUrl.endsWith(this.expectation)
        })

        expect(doesActualUrlEndWithExpectedPath, `Expected URL to be: ${this.expectation} but was: ${actualUrl}`).to.be.true
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
