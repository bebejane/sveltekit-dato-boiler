import 'dotenv/config';

const config =  {
	dedupeOperationSuffix:true,
	dedupeFragments: true,
	pureMagicComment: false,
	exportFragmentSpreadSubTypes: true,
	namingConvention: "keep",
	maybeValue: "T"
}

module.exports = {
	schema: {
		"https://graphql.datocms.com": {
			headers: {
				Authorization: process.env.VITE_GRAPHQL_API_TOKEN,
				"X-Exclude-Invalid": true
			},
		},
	},
  documents: "src/lib/graphql/**/*.gql",
	extensions: {
		codegen: {
			overwrite: true,
			generates: {
				"src/@types/datocms.d.ts": {
					plugins: [
						"typescript",
						"typescript-operations",
					],
					config:{...config, noExport: true}
				},
        "src/lib/graphql/index.ts": {
          plugins: ["typed-document-node"],
					config
        },
        "src/@types/document-modules.d.ts": {
          plugins: ["typescript-graphql-files-modules"],
					config
        },
			},
		}
	},
};
