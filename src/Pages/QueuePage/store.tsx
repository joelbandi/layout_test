import { combine, createDomain } from "effector";

// This contains the entire business logic of the queue component
// TSX Markup tries to be as devoid of logic as possible so that we can skip react unit testing
const QueueDomain = createDomain('Queue Domain');

type Appointment = {
  id: number,
  reason: string,
}

const $appointments = QueueDomain.createStore<Appointment[]>([])
const $queueFilters = QueueDomain.createStore({
  selectedReason: ''
})

export const selectReason = QueueDomain.createEvent<string>()
export const fetchQueueItems = QueueDomain.createEffect(async () => {
  const data = await fakeApiRequest()
  return data
})

$queueFilters.on(selectReason, (_, reason) => ({ selectedReason: reason }))
$appointments.on(fetchQueueItems.doneData, (_, data) => data)

export const $filteredAppointments = combine(
  $appointments,
  $queueFilters,
  (appointments, queueFilters) => {
    if (!queueFilters.selectedReason) return appointments

    return appointments.filter(appoint => appoint.reason === queueFilters.selectedReason)
  }
)

const fakeApiRequest: () => Promise<Appointment[]> = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          reason: 'stroke'
        },
        {
          id: 2,
          reason: 'headache'
        },
        {
          id: 3,
          reason: 'stroke'
        },
        {
          id: 4,
          reason: 'fracture'
        },
      ])
    }, 500)
  })
}
