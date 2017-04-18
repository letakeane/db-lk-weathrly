import { expect } from 'chai'
import objectCleanerHourly from '../lib/helpers/objectCleanerForecast'
import stubAPI from './stubAPI.json';

describe(' objectCleanerForecast', () => {
  it('should clean an object and have the following properties', () => {

    const cleanAPI = objectCleanerHourly(stubAPI)[0];

    expect(cleanAPI).to.have.deep.property('weekday')
    expect(cleanAPI).to.have.deep.property('conciseCondition')
    expect(cleanAPI).to.have.deep.property('highTemp')
    expect(cleanAPI).to.have.deep.property('lowTemp')
    expect(cleanAPI).to.have.deep.property('conditionImg')
  })
})
