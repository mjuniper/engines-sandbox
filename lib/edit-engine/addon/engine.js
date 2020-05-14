import Engine from 'ember-engines/engine';
import loadInitializers from 'ember-load-initializers';
import Resolver from './resolver';
import config from './config/environment';

const { modulePrefix } = config;

const hash = {
  modulePrefix,
  Resolver,
  dependencies: {
    services: [
      'content'
    ]
  }
};

const Eng = Engine.extend(hash);

loadInitializers(Eng, modulePrefix);

export default Eng;
