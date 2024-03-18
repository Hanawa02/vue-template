<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useDocument, useCollection } from 'vuefire'
import { frameworkById, frameworks } from '../database/firebase'

const id = 'some-id'
const selectedFramework = useDocument(frameworkById(id))

const allFrameworks = useCollection(frameworks())
</script>

<template>
  <main>
    <TheWelcome />
    <section>
      <h2>Frameworks</h2>
      <p>Selected Framework: {{ selectedFramework.name }}</p>
      <ul>
        <li v-for="framework in allFrameworks" :key="framework.id">
          {{ framework.name }}
        </li>
      </ul>
    </section>
  </main>
</template>
