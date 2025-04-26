export default class Unselect {
    constructor(option) {
        this.option = option
    }

    static option(option) {
        return new Unselect(option)
    }

    async perform() {
        if (await $(`aria/${this.option}`).isSelected()) {
            await $(`aria/${this.option}`).click()
        }
    }
}
