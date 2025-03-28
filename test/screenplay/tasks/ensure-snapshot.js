import { browser } from '@wdio/globals'

export default class EnsureSnapshot {
    for(grantCode) {
        this.grantCode = grantCode
        return this
    }

    async perform() {
        const screenPath = (await browser.getUrl()).split('/').pop()
        await browser.checkFullPageScreen(`${this.grantCode}-${screenPath}`, {})
    }
}
