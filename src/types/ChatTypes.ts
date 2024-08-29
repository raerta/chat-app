
export interface IMessage {
    text: string;
    isUser: boolean;
}
export interface IError {
    messages: string[];
    status: boolean;
}