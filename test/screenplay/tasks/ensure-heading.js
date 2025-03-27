import { $ } from '@wdio/globals'

export default class EnsureHeading {
    is(expectation) {
        this.expectation = expectation
        return this
    }

    async perform() {
        if (this.expectation.indexOf("'") > -1) {
            this.expectation = this.expectation.substring(0, this.expected.indexOf("'"))
        }
        await expect($(`//h1[contains(text(),'${this.expectation}')]`)).toBeDisplayed()
    }
}
