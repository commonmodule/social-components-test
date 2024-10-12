import { Router } from "@common-module/app";
import ChatView from "./ChatView.js";

(() => {
  Router.add("/chat", ChatView);
})();
