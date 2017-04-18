import { expect } from 'chai'
import objectCleanerHourly from '../lib/helpers/objectCleanerHourly'
import stubAPI from './stubAPI.json';

describe(' objectCleanerHourly', () => {
  it('should clean an object and have the following properties', () => {

    const cleanAPI = objectCleanerHourly(stubAPI)[0];

    expect(cleanAPI).to.have.deep.property('time')
    expect(cleanAPI).to.have.deep.property('day')
    expect(cleanAPI).to.have.deep.property('temp')
    expect(cleanAPI).to.have.deep.property('conciseCondition')
    expect(cleanAPI).to.have.deep.property('conditionImg')
  })
})
