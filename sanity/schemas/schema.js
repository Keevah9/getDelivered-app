
import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'


import featured from './featured'
import category from './category'
import cloth from './cloth'
import clothing from './clothing'

export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([
    clothing, category, cloth, featured
  ]),
})
