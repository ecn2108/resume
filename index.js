const fs = require('fs');
const pug = require('pug');
const vars = require('./resume.json');

function categorize(resume) {
  return {...resume, categories: resume.experience.reduce((acc, each) => {
    const {category} = each;
    if (acc[category] == null) {
      acc[category] = [];
    }
    acc[category].push(each);
    return acc;
  }, {})};
}

fs.writeFileSync('index.html', pug.renderFile('index.pug', categorize(vars)));
