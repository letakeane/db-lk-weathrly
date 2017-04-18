import { shallow, mount } from 'enzyme';
import objectCleanerHourly from '../lib/helpers/objectCleanerHourly'
import stubAPI from './stubAPI.json';

describe(' objectCleanerHourly', () => {
  it('should clean an object and have the following properties', () => {

    const cleanAPI = objectCleanerHourly(stubAPI);

    expect(cleanAPI[0].time).toBeTruthy();
    expect(cleanAPI[1].temp).toBeTruthy();
    expect(cleanAPI[2].conciseCondition).toBeTruthy();
    expect(cleanAPI[3].conditionImg).toBeTruthy();
    expect(cleanAPI[4].noMoreProperties).toBeFalsy();
  })
})
