import Route from '@ember/routing/route';
// import { inject as service } from '@ember/service';

export default class DatasetRoute extends Route {

  model () {
    return true;
  }

  // model(params, transition) {
  //   // return whatever model the transition has
  //   return Object.entries(transition.resolvedModels).reduce((acc, item) => {
  //     if (item[1]) { return item[1]; }
  //   }, {});
  // }

  // renderTemplate(applicationController, model) {
  //   const template = model.type;
  //   const controller = this.controllerFor(model.type);
  //   this.render(template, {
  //     into: 'application', // i have not figured out how to get it to render into the engine's application template
  //     controller,
  //     model
  //   });
  // }

}
