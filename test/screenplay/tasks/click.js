import { $ } from '@wdio/globals'

export default class Click {
    constructor(label) {
        this.label = label
    }

    static on(label) {
        return new Click(label)
    }

    async perform() {
        await $(`aria/${this.label}`).click()
    }
}
