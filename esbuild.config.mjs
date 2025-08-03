import { build } from 'esbuild'
import path from 'path'

await build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: 'dist/bundle.js',
  platform: 'browser',
  loader: {
    '.ts': 'ts',
    '.css': 'text',
    '.png': 'dataurl',
    '.svg': 'dataurl'
  },
  tsconfig: './tsconfig.json',
  absWorkingDir: process.cwd(),
  alias: {
    '@': path.resolve('src'),
    '@/modules': path.resolve('src/modules'),
    '@/subscreens': path.resolve('src/subscreens')
  }
})
