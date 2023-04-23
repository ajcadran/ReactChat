export class MessageModel {
    constructor(user: string, msg: string) {
        this.username = user;
        this.message = msg;
    }

    username: string;
    message: string;
}
