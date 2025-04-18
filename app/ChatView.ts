import { BodyNode, el, Router, View } from "@commonmodule/app";
import {
  ChatMessageForm,
  ChatMessageList,
} from "@commonmodule/social-components";
import getTestChatHistory from "./getTestChatHistory.js";

export default class ChatView extends View {
  private messageList: ChatMessageList;

  constructor() {
    super();
    this.container = el(
      ".chat-view",
      el(
        "main",
        this.messageList = new ChatMessageList(getTestChatHistory() /*, {
          onEdit: async (messageId, newMessage) => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            this.messageList.editMessage(messageId, newMessage);
          },
          onDelete: async (messageId) => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            this.messageList.deleteMessage(messageId);
          },
        }*/),
      ),
      el(
        "footer",
        new ChatMessageForm(async (newMessage) => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          this.messageList.addMessage({
            id: "user1",
            name: "Alice",
            avatarUrl: Router.prefix + "/avatars/alice.webp",
          }/*, { id: Date.now(), content: newMessage, reactions: [] }*/);
        }),
      ),
    ).appendTo(BodyNode);
  }
}
