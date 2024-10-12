import { Router } from "@common-module/app";
import ChatView from "./ChatView.js";
import { SocialCompConfig } from "@common-module/social-components";

SocialCompConfig.showAuthorInfo = (author) => {
  const message = `Author Information:
-------------------
Name: ${author.name}
ID: ${author.id}
Avatar: ${author.avatarUrl}`;

  alert(message);
};

Router.add("/chat", ChatView);
