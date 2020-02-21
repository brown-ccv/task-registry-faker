const faker = require("faker");
const yaml = require("yaml");
const fs = require("fs");

const taskName = () => faker.lorem.word();
const links = () => {
  return {
    deployment: faker.internet.url(),
    sourceCode: `https://github.com/${faker.lorem.word()}/${faker.lorem.word()}`
  };
};

const framework = () => {
  return {
    library: faker.lorem.slug(),
    language: faker.lorem.word()
  };
};
const lab = () => {
  return {
    name: `${faker.lorem.word()} Lab`,
    institution: faker.company.companyName(),
    principalInvestigator: `Dr. ${faker.name.firstName()} ${faker.name.lastName()}`,
    developers: [
      `${faker.name.firstName()} ${faker.name.lastName()}`,
      `${faker.name.firstName()} ${faker.name.lastName()}`
    ],
    website: faker.internet.url()
  };
};

const publication = () => {
  return {
    doi: `doi:${
      faker.random
        .uuid()
        .replace("-", "/")
        .replace("-", ".")
        .split("-")[0]
    }`,
    url: faker.internet.url()
  };
};
const features = () => {
  return {
    electron: faker.random.boolean(),
    browser: faker.random.boolean(),
    docker: faker.random.boolean(),
    eegTrigger: faker.random.boolean(),
    mturk: faker.random.boolean()
  };
};

const tags = () => {
  return [
    faker.lorem.word(),
    faker.lorem.word(),
    faker.lorem.word(),
    faker.lorem.word()
  ];
};

const platform = () => {
  return {
    desktop: {
      windows: faker.random.boolean(),
      linux: faker.random.boolean(),
      mac: faker.random.boolean()
    },
    mobile: {
      ios: faker.random.boolean(),
      android: faker.random.boolean()
    }
  };
};

const instance = () => {
  return {
    taskName: taskName(),
    links: links(),
    framework: framework(),
    lab: lab(),
    publication: publication(),
    platform: platform(),
    features: features(),
    tags: tags()
  };
};

for (i = 0; i < 17; i++) {
  fileObject = yaml.stringify(instance());
  fs.writeFile(`data/${faker.lorem.word()}-task.yml`, fileObject, function(
    err
  ) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}
