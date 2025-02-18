import { DireflowComponent } from 'direflow-component';
import App from './direflow-components/test-component/App';
import StyledComponent from './direflow-components/test-component/StyledComponent';
import MatrialUI from './direflow-components/test-component/MaterialUI';

DireflowComponent.createAll([
  {
    component: App,
    configuration: {
      tagname: 'basic-test',
    },
  },
  {
    component: App,
    configuration: {
      tagname: 'props-test',
    },
  },
  {
    component: App,
    configuration: {
      tagname: 'event-test',
    },
  },
  {
    component: App,
    configuration: {
      tagname: 'slot-test',
    },
  },
  {
    component: App,
    configuration: {
      tagname: 'external-loader-test',
    },
    plugins: [
      {
        name: 'external-loader',
        options: {
          paths: [
            'https://code.jquery.com/jquery-3.3.1.slim.min.js',
            'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
            {
              src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js',
              async: true,
            },
          ],
        },
      },
    ],
  },
  {
    component: StyledComponent,
    configuration: {
      tagname: 'styled-components-test',
    },
    plugins: [
      {
        name: 'styled-components',
      },
    ],
  },
  {
    component: MatrialUI,
    configuration: {
      tagname: 'material-ui-test',
    },
    plugins: [
      {
        name: 'material-ui',
      },
    ],
  },
]);
