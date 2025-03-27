import { browser } from '@wdio/globals'

export default class EnsureUrl {
    is(expectation) {
        this.expectation = expectation
        return this
    }

    async perform() {
        const doesActualUrlEndWithExpectedPath = await this.#pollForSuccess(async () => {
            const actualUrl = await browser.getUrl()
            return await actualUrl.endsWith(this.expectation)
        })
        await expect(doesActualUrlEndWithExpectedPath).toBe(true)
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
