import path from 'node:path'
import { browser } from '@wdio/globals'
import { expect } from 'chai'

export default class EnsureSnapshot {
    ignoredLocators = []

    ignoring(locator) {
        this.ignoredLocators.push(locator)
        return this
    }

    async perform() {
        const pathSegments = (await browser.getUrl()).split('/')
        const screenName = pathSegments.pop()
        const grantCode = pathSegments.pop()

        for (const locator of this.ignoredLocators) {
            const wdioElement = await $(locator)
            await browser.execute((e) => { e.style.visibility = 'hidden' }, wdioElement)
        }

        const options = {
            actualFolder: path.join(process.cwd(), "test", "snapshots", "actual", grantCode),
            baselineFolder: path.join(process.cwd(), "test", "snapshots", "baseline", grantCode),
            diffFolder: path.join(process.cwd(), "test", "snapshots", "diff", grantCode),
        }

        const mismatchPercentage = await browser.checkFullPageScreen(screenName, options)
        expect(mismatchPercentage).to.be.lessThan(0.25, `mismatch percentage exceeds threshold for: ${screenName}`)
    }
}
