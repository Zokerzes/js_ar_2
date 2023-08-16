import { src, dest } from 'gulp';
import pug from 'gulp-pug'

const
  SRC = './src/',
  DEST = './_dest/';

export function html() {
  return src(SRC + '*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(dest(DEST));
}

export function js() {
  return src(SRC + '*.js')
    .pipe(dest(DEST));
}

