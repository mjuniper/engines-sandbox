import buildRoutes from 'ember-engines/routes';
import DocumentsDocumentRoute from '../../../app/routes/documents/document';

export default buildRoutes(function() {
  this.route('dataset');
  this.route('document');
});
