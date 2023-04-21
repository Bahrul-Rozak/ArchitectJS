const { showMenu } = require("./menu");
const { generateArchitecture } = require("./architecture");

const main = async () => {
  try {
    const architecture = await showMenu();
    await generateArchitecture(architecture);
    console.log("Project successfully generated!");
  } catch (error) {
    console.error(error.message);
  }
};

main();
