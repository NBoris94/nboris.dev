import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const casesDirectory = path.join(process.cwd(), '/src/data/cases')

const getSortedCases = () => {
  const fileNames = fs.readdirSync(casesDirectory)
  const allCases = fileNames.map((fileName) => {
    const name = fileName.replace(/\.md$/, '')
    const fullPath = path.join(casesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      name,
      ...matterResult.data,
    }
  })

  return allCases.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

const getAllCasesNames = () => {
  const fileNames = fs.readdirSync(casesDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        name: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

const getCaseByName = async (name) => {
  const fullPath = path.join(casesDirectory, `${name}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    name,
    contentHtml,
    ...matterResult.data,
  };
}

export { getSortedCases, getAllCasesNames, getCaseByName }
