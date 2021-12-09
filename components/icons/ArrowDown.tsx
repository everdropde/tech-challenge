const ArrowDown = ({
  ...props
}: Record<string, string | number>): JSX.Element => {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" {...props}>
      <path
        d="M5.2 7.5c.2-.3.6-.3.9 0l3.9 3.9 3.9-4a.6.6 0 0 1 1 1l-4.4 4.3a.6.6 0 0 1-1 0L5.2 8.4a.6.6 0 0 1 0-1Z"
        fill="#3A3A3A"
      />
    </svg>
  )
}

export default ArrowDown
