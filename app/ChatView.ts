import { BodyNode, el, View } from "@common-module/app";
import {
  ChatMessageForm,
  ChatMessageList,
} from "@common-module/social-components";
import testChatHistory from "./testChatHistory.js";

export default class ChatView extends View {
  constructor() {
    super();
    this.container = el(
      ".chat-view",
      el("main", new ChatMessageList(testChatHistory)),
      el("footer", new ChatMessageForm()),
    ).appendTo(BodyNode);
  }
}
