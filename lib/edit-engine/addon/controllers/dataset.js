import Controller from '@ember/controller';

export default class DatasetController extends Controller {

  get modelString() {
    return JSON.stringify(this.model, null, 2)
  }

}
