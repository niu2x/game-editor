class ViewActionHandler {
  constructor() {

  }

  onClickToolsMenu(toolIndex) {
    this.app.notifyClickTool(toolIndex)
  }

  setApp(app) {
    this.app = app;
  }
};

export default new ViewActionHandler;