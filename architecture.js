const shell = require("shelljs");

const generateMVC = async () => {
  shell.mkdir("-p", "mvc/controllers");
  shell.touch("mvc/controllers/homeController.js");
  shell.mkdir("-p", "mvc/models");
  shell.touch("mvc/models/homeModel.js");
  shell.mkdir("-p", "mvc/views");
  shell.touch("mvc/views/homeView.js");
};

const generateMicroservices = async () => {
  shell.mkdir("-p", "microservices/service1");
  shell.touch("microservices/service1/index.js");
  shell.mkdir("-p", "microservices/service2");
  shell.touch("microservices/service2/index.js");
};

const generateEventDriven = async () => {
  shell.mkdir("-p", "event-driven/handlers");
  shell.touch("event-driven/handlers/homeHandler.js");
  shell.mkdir("-p", "event-driven/events");
  shell.touch("event-driven/events/homeEvent.js");
  shell.mkdir("-p", "event-driven/listeners");
  shell.touch("event-driven/listeners/homeListener.js");
};

const generateArchitecture = async (architecture) => {
  switch (architecture) {
    case "mvc":
      await generateMVC();
      break;
    case "microservices":
      await generateMicroservices();
      break;
    case "event-driven":
      await generateEventDriven();
      break;
    default:
      throw new Error("Invalid architecture selected");
  }
};

module.exports = {
  generateArchitecture,
};
