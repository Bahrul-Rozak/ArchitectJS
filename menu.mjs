import inquirer from "inquirer";

const showMenu = async () => {
  const architectures = [
    {
      name: "MVC",
      value: "mvc",
    },
    {
      name: "Microservices",
      value: "microservices",
    },
    {
      name: "Event-driven",
      value: "event-driven",
    },
  ];

  const answers = await inquirer.prompt({
    type: "list",
    name: "architecture",
    message: "Select architecture:",
    choices: architectures,
  });

  return answers.architecture;
};

export default showMenu;
