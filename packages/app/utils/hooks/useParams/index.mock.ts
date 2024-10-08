import { fn } from '@storybook/test'
import * as actual from './index'

export const useParams = fn(actual.useParams)
  .mockName('useParams')
  .mockReturnValue({ deviceId: '1', criteriaId: '1' })
