import { defineConfig } from 'sanity'
import { structureTool } from "sanity/structure";
import { visionTool } from '@sanity/vision'
import { codeInput } from "@sanity/code-input";
import { table } from "@sanity/table";
import { schemaTypes } from './schemaTypes'
import { projectId, dataset } from "./lib/env.api";

export default defineConfig({
    name: 'default',
    title: 'dekoubrown.dev',
    projectId,
    dataset,
    basePath: "/studio",
    plugins: [structureTool(), visionTool(), codeInput(), table()],

    schema: {
        types: schemaTypes,
    },
})
