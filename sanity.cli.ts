import {defineCliConfig} from 'sanity/cli'

// import env variables. Do not forget to add exclamtion marks (!) cause error is thrown without them
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;


export default defineCliConfig({
  api: {
    projectId,
    dataset
  }
})
