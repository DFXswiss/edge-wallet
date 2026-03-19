import { asObject, asOptional, asString } from 'cleaners'

export const asInitOptions = asObject({
  apiUrl: asOptional(asString, 'https://api.dfx.swiss/v1'),
  webAppUrl: asOptional(asString, 'https://app.dfx.swiss')
})
