import { Router, SPAInitializer } from "@common-module/app";
import ChatView from "./ChatView.js";
import { SocialCompConfig } from "@common-module/social-components";
import { MaterialIcon } from "@common-module/material-icons";

SocialCompConfig.editMenuIcon = new MaterialIcon("edit");
SocialCompConfig.deleteMenuIcon = new MaterialIcon("delete");
SocialCompConfig.sendButtonIcon = new MaterialIcon("arrow_upward");

SocialCompConfig.showAuthorInfo = (author) => {
  const message = `Author Information:
-------------------
Name: ${author.name}
ID: ${author.id}
Avatar: ${author.avatarUrl}`;

  alert(message);
};

Router.add("/chat", ChatView);

SPAInitializer.init();
