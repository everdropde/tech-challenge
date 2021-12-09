export const Verified = ({
  ...props
}: Record<string, string | number>): JSX.Element => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 13.333A5.333 5.333 0 1 0 8 2.667a5.333 5.333 0 0 0 0 10.666ZM6.49 10.4c.177.178.4.267.621.267a.878.878 0 0 0 .623-.267l3.555-3.556a.86.86 0 0 0 0-1.244.86.86 0 0 0-1.244 0L7.11 8.533 5.956 7.378c-.311-.356-.89-.356-1.245 0a.86.86 0 0 0 0 1.244L6.49 10.4Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Verified
