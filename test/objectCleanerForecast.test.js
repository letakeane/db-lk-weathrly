import React from 'react';
import { shallow, mount } from 'enzyme';
import objectCleanerHourly from '../lib/helpers/objectCleanerForecast'
import stubAPI from './stubAPI.json';

describe(' objectCleanerForecast', () => {
  it('should clean an object and have the following properties', () => {
    const cleanAPI = objectCleanerHourly(stubAPI);

    expect(cleanAPI[0].weekday).toBeTruthy();
    expect(cleanAPI[1].conciseCondition).toBeTruthy();
    expect(cleanAPI[2].highTemp).toBeTruthy();
    expect(cleanAPI[3].lowTemp).toBeTruthy();
    expect(cleanAPI[4].conditionImg).toBeTruthy();
    expect(cleanAPI[5].noMoreProperties).toBeFalsy();
  });
});
