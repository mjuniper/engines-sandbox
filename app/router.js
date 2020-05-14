import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('datasets', function() {
    this.route('dataset', { path: '/:dataset_id' }, function () {
      // this.mount('edit-engine', { path: '/edit' }); // if we do it this way we don't get params, we do get the resolved model but we are in the outlet of datasets.dataset
    });
    this.mount('edit-engine', { path: '/:dataset_id/edit' }); // if we do it this way we get params.dataset_id, but we do not get the resolved model, and we are not in our datasets.dataset outle
  });
  this.route('documents', function() {
    this.route('document', { path: '/:document_id' });
    this.mount('edit-engine', { path: '/:document_id/edit' });
  });
});
