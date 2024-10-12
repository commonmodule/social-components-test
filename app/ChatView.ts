import { BodyNode, el, View } from "@common-module/app";

export default class ChatView extends View {
  constructor() {
    super();
    this.container = el(".chat-view", "chat").appendTo(BodyNode);
  }
}
