import { Confirm } from "@common-module/app-components";

(() => {
  console.log("Start Test");

  new Confirm({
    title: "Test",
    message: "This is a test",
    onConfirm: () => {
      console.log("Confirmed");
    },
  });
})();
