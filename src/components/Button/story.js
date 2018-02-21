import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from 'components/Button'

storiesOf('Button', module)
  .add('default', () => (
    <Button color='default' onClick={action('clicked')}>
      Button
    </Button>
  ))
  .add('green', () => (
    <Button color='green' onClick={action('clicked')}>
      Button
    </Button>
  ))
  .add('red', () => (
    <Button color='red' onClick={action('clicked')}>
      Button
    </Button>
  ))
