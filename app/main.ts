import { Router, SPAInitializer } from "@commonmodule/app";
import { SocialCompConfig } from "@commonmodule/social-components";
import { DeleteIcon, EditIcon, SendIcon } from "@commonmodule/svg-icons";
import ChatView from "./ChatView.js";

SocialCompConfig.EditMenuIcon = EditIcon;
SocialCompConfig.DeleteMenuIcon = DeleteIcon;
SocialCompConfig.SendMessageButtonIcon = SendIcon;

SocialCompConfig.showUserInfo = (author) => {
  const message = `Author Information:
-------------------
Name: ${author.name}
ID: ${author.id}
Avatar: ${author.avatarUrl}`;

  alert(message);
};

if (!(window as any).isDevMode) {
  Router.prefix = "/social-components-test";
}

Router.add("/chat", ChatView);

SPAInitializer.init();
