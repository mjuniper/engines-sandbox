import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('datasets', function() {
    this.route('dataset', { path: '/:dataset_id' });
  });
  this.route('documents', function() {
    this.route('document', { path: '/:document_id' });
  });
});
