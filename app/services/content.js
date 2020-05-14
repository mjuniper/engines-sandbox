import Service from '@ember/service';

export default class ContentService extends Service {

  fetchDataset (id) {
    return {
      id,
      title: `this is the title for dataset_id ${id}`,
      type: 'dataset'
    }
  }

  fetchDocument (id) {
    return {
      id,
      title: `this is the title for document_id ${id}`,
      type: 'document'
    }
  }

}
