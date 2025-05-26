import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@components": "/src/components",
			"@pages": "/src/pages",
			"@layouts": "/src/layouts",
			"@assets": "/src/assets",
			"@test": "/test",
			"@utils": "/src/utils",
			"@userAssets": "/src/userAssets",
			"@hooks": "/src/hooks",
			"@types": "/src/types",
			"@contexts": "/src/contexts",
			"@services": "/src/services",
		},
	},
	preview: {
		port: 8080,
		strictPort: true,
	},
	server: {
		port: 8080,
		strictPort: true,
		host: true,
		origin: "http://localhost:8080",
	},
});
