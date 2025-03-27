import { browser } from '@wdio/globals'

export default class Navigate {
    constructor(url) {
        this.url = url
    }

    static to(url) {
        return new Navigate(url)
    }

    async perform() {
        await browser.url(this.url)
    }
}
