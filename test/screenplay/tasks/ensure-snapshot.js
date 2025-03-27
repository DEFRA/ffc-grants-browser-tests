import { browser } from '@wdio/globals'

export default class EnsureSnapshot {
    async perform() {
        const screenPath = (await browser.getUrl()).split('/').pop()
        await browser.checkFullPageScreen(screenPath, {})
    }
}
