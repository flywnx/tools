
import api from './api'
import config from './config'
class Main {
    constructor() {
        this.init()
    }
    public init(): void {
        api.setReq(config.PATH)

    }

}

new Main()
