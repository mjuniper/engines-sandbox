import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service content;

  model(params) {
    let model;
    if (params.dataset_id) {
      model = this.content.fetchDataset(params.dataset_id);
    }
    if (params.document_id) {
      model = this.content.fetchDocument(params.document_id)
    }
    return model;
  }

  renderTemplate(applicationController, model) {
    const template = model.type;
    const controller = this.controllerFor(model.type);
    this.render(template, {
      into: 'application',
      controller,
      model
    });
  }

}
