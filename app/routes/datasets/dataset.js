import Route from '@ember/routing/route';

export default class DatasetsDatasetRoute extends Route {

  async model(params) {
    return {
      id: params.dataset_id,
      title: 'this is the dataset title'
    }
  }

}
