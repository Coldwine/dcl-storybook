import { configure } from '@storybook/react'

const loadStories = () => {
  require('../src/components/Button/story.js')
}

configure(loadStories, module)
