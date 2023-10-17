import pact from '@pact-foundation/pact-node';
import { versionFromGitTag } from 'absolute-version';
import path from 'path';

const options = {
  pactFilesOrDirs: [path.resolve(__dirname, '../../pact/pacts')],
  pactBroker: 'https://gotreasa.pactflow.io/',
  pactBrokerToken: process.env.PACT_BROKER_TOKEN,
  consumerVersion: versionFromGitTag(),
  tags: ['dev'],
};

pact
  .publishPacts(options)
  .then(() => {
    console.log('Pact contract publishing complete!');
  })
  .catch((error: Error) => {
    console.log('Pact contract publishing failed: ', error);
  });
