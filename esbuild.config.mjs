import { build } from 'esbuild'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const config = {
  entryPoints: [path.resolve(__dirname, 'src/index.ts')],
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: path.resolve(__dirname, 'dist/bundle.js'),
  platform: 'browser',
  target: 'es2020',
  loader: {
    '.ts': 'ts',
    '.css': 'text',
    '.png': 'dataurl',
    '.svg': 'dataurl'
  },
  tsconfig: './tsconfig.json',
  absWorkingDir: __dirname,
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@/modules': path.resolve(__dirname, 'src/modules'),
    '@/subscreens': path.resolve(__dirname, 'src/subscreens')
  }
}

build(config).catch(() => process.exit(1))

if (process.argv.includes('--watch')) {
  const ctx = await build({
    ...config,
    watch: {
      onRebuild(error) {
        if (error) console.error('Watch build failed:', error)
        else console.log('Watch build succeeded')
      }
    }
  })
}
