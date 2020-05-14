import Route from '@ember/routing/route';

export default class DocumentsDocumentRoute extends Route {

  async model(params) {
    return {
      id: params.document_id,
      title: 'this is the document title'
    }
  }

}
