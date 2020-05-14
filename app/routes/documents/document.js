import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DocumentsDocumentRoute extends Route {
  @service content;

  async model(params) {
    return this.content.fetchDocument(params.document_id);
  }

}
