export default function () {
  const formatDateTime = (str: string): string => new Date(str).toLocaleString()
  const formatDate = (str: string): string => new Date(str).toLocaleDateString()

  return {
    formatDateTime,
    formatDate
  }
}
