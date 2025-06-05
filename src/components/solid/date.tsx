function DateNow() {
  const date = new Date()
  return <p class="text-sm">日期: {date.toLocaleDateString()}</p>
}

export default DateNow
