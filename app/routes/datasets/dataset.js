import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DatasetsDatasetRoute extends Route {
  @service content;

  async model(params) {
    return this.content.fetchDataset(params.dataset_id);
  }

}
