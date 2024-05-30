/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/pages/admin/[[...index]].jsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig, definePlugin } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import StudioNavbar from "./src/app/Components/StudioNavbar/StudioNavbar";

function MyCustomLogo() {
  return <img style={{ width: "225px" }} src="/Assets/Brand/logo.gif" alt="" />;
}

// Then we add another custom logo component as part of a plugin
const myLogoPlugin = definePlugin({
  name: "my-logo-plugin",
  studio: {
    components: {
      // navbar: StudioNavbar,
      logo: (props) => {
        return React.createElement(
          "div",
          { style: { border: "3px solid hotpink" } },
          props.renderDefault({ ...props, title: "my improved title" })
        );
      },
    },
  },
});

export default defineConfig({
  basePath: "/admin",
  projectId: "fixz215g",
  dataset: "production",
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  studio: {
    components: {
      logo: MyCustomLogo,
    },
  },
  plugins: [
    myLogoPlugin(),
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
