import showMenu from "./menu.mjs";
import generateArchitecture from "./architecture.mjs";

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
