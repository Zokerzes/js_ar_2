import { src, dest, series, parallel } from 'gulp';
import pug from 'gulp-pug';
import stylus from 'gulp-stylus';
import clean from 'gulp-clean';


const
  SRC = './src/',
  DEST = './_dest/';

let
  minification = false;

export function html() {
  return src(SRC + '*.pug')
    .pipe(pug({ pretty: !minification }))
    .pipe(dest(DEST));
}

export function css() {
  return src(SRC + '*.styl')
    .pipe(stylus({ commpess: minification }))
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

async function setMinification() {
  minification = true;
}

async function cleanDir() {
  return src(DEST + '**/*.*', { read: false })
    .pipe(clean());
}

export const make = parallel(html, css, js);

export const prod = series(setMinification, cleanDir, make, upload);
export const dev = series(make, serv);
export default dev;

