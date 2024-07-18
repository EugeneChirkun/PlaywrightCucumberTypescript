import { When } from "@cucumber/cucumber";
import CustomWorld from "../../support/world";

When('pause', async function (this: CustomWorld) {
    await this.page.pause();
});
