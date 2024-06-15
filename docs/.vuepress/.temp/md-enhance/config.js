import { defineClientConfig } from "vuepress/client";
import { useHintContainers } from "/Users/karelio/Projects/atom_docs/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "/Users/karelio/Projects/atom_docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";

export default defineClientConfig({
  enhance: ({ app }) => {

  },
  setup: () => {
useHintContainers();
  }
});
