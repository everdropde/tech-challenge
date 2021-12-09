const ArrowLeft = ({
  ...props
}: Record<string, string | number>): JSX.Element => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        transform="rotate(180 12 12)"
        id="svg_1"
        d="m8.5,5l7,7l-7,7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowLeft
