export default class Enter {
    constructor(value) {
        this.value = value
    }

    static value(value) {
        return new Enter(value)
    }

    for(label) {
        this.label = label
        return this
    }

    async perform() {
        const element = await $(`//label[contains(text(),'${this.label}')]/following::input[1]`)
        const tag = await element.getTagName()
        if (tag === 'select') {
          await element.selectByVisibleText(this.value)
        } else {
          await element.setValue(this.value)
        }
    }
}
