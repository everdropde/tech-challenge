const ArrowRight = ({
  ...props
}: Record<string, string | number>): JSX.Element => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        d="m8.5,5l7,7l-7,7"
      />
    </svg>
  )
}

export default ArrowRight
