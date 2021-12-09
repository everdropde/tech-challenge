export const Check = ({
  ...props
}: Record<string, string | number>): JSX.Element => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        fill="#81A490"
        fillRule="evenodd"
        d="M10 16.78a6.667 6.667 0 100-13.332 6.667 6.667 0 000 13.333zm-1.89-3.666c.223.222.5.334.779.334.277 0 .555-.112.777-.334l4.445-4.444a1.074 1.074 0 000-1.556 1.074 1.074 0 00-1.556 0L8.89 10.781 7.444 9.336c-.389-.444-1.111-.444-1.556 0a1.074 1.074 0 000 1.556l2.223 2.222z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default Check
