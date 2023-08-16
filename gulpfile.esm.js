import { src, dest, series, parallel } from 'gulp';
import pug from 'gulp-pug';
import stylus from 'gulp-stylus';



const
  SRC = './src/',
  DEST = './_dest/';

export function html() {
  return src(SRC + '*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(dest(DEST));
}

export function css() {
  return src(SRC + '*.styl')
    .pipe(stylus())
    .pipe(dest(DEST));
}

export function js() {
  return src(SRC + '*.js')
    .pipe(dest(DEST));
}

async function upload() {
  console.log('Load files on server');
}

async function serv() {
  console.log('dev server');
}
export const prod =
export const dev =

