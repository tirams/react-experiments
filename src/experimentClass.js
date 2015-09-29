class experimentClass {
  getParams(experimentName) {
    throw "IMPLEMENT getParams";
  }

  get(parameter) {
    throw "IMPLEMENT get";
  }

  logExposure(opts) {
    throw "IMPLEMENT logExposure";
  }

  getName() {
    throw "IMPLEMENT getName";
  }

  previouslyLogged() {
    throw "IMPLEMENT previouslyLogged";
  }

  shouldFetchExperimentParameter(name) {
    throw "IMPLEMENT shouldFetchExperimentParameter";
  }
};

export default experimentClass;
