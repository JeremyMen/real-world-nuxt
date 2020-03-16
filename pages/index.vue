<template>
  <div>
    <h1>Events</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event">
      {{ event }}
    </EventCard>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EventCard from '@/components/EventCard.vue'

export default {
  components: {
    EventCard
  },
  // The fetch method is used to fill the store before rendering the page,
  // it's like the asyncData method except it doesn't set the component data.
  async fetch({ store, error }) {
    try {
      await store.dispatch('events/fetchEvents')
    } catch {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again'
      })
    }
  },
  computed: {
    ...mapState({
      events: (state) => state.events.events
    })
  },
  head() {
    return {
      title: 'Event Listing '
    }
  }
}
</script>
