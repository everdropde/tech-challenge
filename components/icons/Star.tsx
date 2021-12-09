export const Star = ({
  ...props
}: Record<string, string | number>): JSX.Element => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M10.15 25.924c-.516.264-1.1-.199-.995-.79l1.106-6.306-4.697-4.475c-.439-.418-.21-1.184.377-1.266l6.53-.928 2.913-5.77a.685.685 0 0 1 1.236 0l2.912 5.77 6.53.928c.588.082.816.848.377 1.266l-4.697 4.475 1.107 6.307c.104.59-.48 1.053-.994.789L16 22.916l-5.852 3.008h.001Z"
        fill="#EEBF46"
      />
    </svg>
  )
}

export default Star
