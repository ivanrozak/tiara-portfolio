export function useContactModal() {
  const isContactOpen = useState('contact-modal-open', () => false)

  const openContact = () => { isContactOpen.value = true }
  const closeContact = () => { isContactOpen.value = false }

  return { isContactOpen, openContact, closeContact }
}
