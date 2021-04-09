import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'

export const getList = (path) => {
  const directory = join(process.cwd(), path);
  // process.cwd - zwraca dobrą sciezke do plikow na kazdym pc
  const files = fs.readdirSync(directory);

  return files.map((file) => {
    const fullPath = join(directory, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8'); //czytanie pliku
    const { data } = matter(fileContents); // zczytanie zawartowsci pliku i zapisnie do zmiennej

    return {
      ...data,
      slug: file.replace('.md', ''),
      createdAt: data.date ? Number(new Date(data.date)) : null
    };
  });
};
