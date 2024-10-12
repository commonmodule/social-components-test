import { BodyNode, el, View } from "@common-module/app";
import { ChatMessageList } from "@common-module/social-components";
import testChatHistory from "./testChatHistory.js";

export default class ChatView extends View {
  constructor() {
    super();
    this.container = el(".chat-view", new ChatMessageList(testChatHistory))
      .appendTo(BodyNode);
  }
}
