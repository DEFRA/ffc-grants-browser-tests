import { $ } from '@wdio/globals'

export default class Continue {
    static journey() {
        return new Continue()
    }

    async perform() {
        await $(`//button[contains(text(),'Continue')]`).click()
    }
}
