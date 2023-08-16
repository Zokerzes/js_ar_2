import { src, dest } from 'gulp';

const
  SRC = './src/',
  DEST = './_dest/';

export function js() {
  return src(SRC + '*.js')
    .pipe(dest(DEST));
}