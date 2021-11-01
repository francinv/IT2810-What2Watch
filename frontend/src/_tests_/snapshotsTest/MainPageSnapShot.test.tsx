import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import MainPage from '../../App';
import { store } from '../../services/store';

// Testing snapshot-test. Just creates a snapshot if there is none saved from before. If snapshot of rendered component is equal to saved snapshot, test passes.
describe('App_snapshot_test', () => {
    it('should match snapshot', () => {
        const app = TestRenderer.create(<Provider store={store}><MainPage /></Provider>).toJSON();
        expect(app).toMatchSnapshot();

      
    });

});
