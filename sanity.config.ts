import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme';
import StudioNavbar from './components/StudioNavbar';
import Logo from './components/Logo';
import { getDefaultDoocumentNode } from './structure';

// import env variables. Do not forget to add exclamtion marks (!) cause error is thrown without them
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;




export default defineConfig({
  // add basePath so that you can access sanity studio on your website
  basePath:"/studio",
  name: 'MID_Visions_Blog',
  title: 'Mid-Blog',

  // change the below on sanity cli too
  projectId,
  dataset,

  plugins: [deskTool({
    defaultDocumentNode: getDefaultDoocumentNode
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
  // cutomising studio to add custom components
  studio:{
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    }
  },
  theme: myTheme,
})
