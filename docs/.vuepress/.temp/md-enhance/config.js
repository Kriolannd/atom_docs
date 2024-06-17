import { defineClientConfig } from "vuepress/client";
import { useHintContainers } from "E:/atom_docs/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "E:/atom_docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";

export default defineClientConfig({
  enhance: ({ app }) => {

  },
  setup: () => {
useHintContainers();
  }
});
