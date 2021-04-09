import fs from 'fs'
import {join} from "path"

export const getList = (path) => {
  const directory = join(process.cwd(), path);
  // process.cwd - zwraca dobrą sciezke do plikow na kazdym pc
  const files = fs.readdirSync(directory);

  return files;
}

