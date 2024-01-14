import React from 'react'
import Test from './Test.vue'
import Vue from 'vue'

export default () => (
  <div>
    <h1>Hello, I'm a react component.</h1>
    <h2>Vue version: {Vue.version}</h2>
    <div>
      <Test />
    </div>
  </div>
)