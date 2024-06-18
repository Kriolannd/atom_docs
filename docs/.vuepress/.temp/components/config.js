import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "/Users/karelio/Projects/atom_skills/atom_docs/node_modules/@vuepress/helper/lib/client/index.js";

import Badge from "/Users/karelio/Projects/atom_skills/atom_docs/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "/Users/karelio/Projects/atom_skills/atom_docs/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";

import "/Users/karelio/Projects/atom_skills/atom_docs/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
});
