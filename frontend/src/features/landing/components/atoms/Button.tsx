export function Button({
  color,
  text,
  width,
  Icon,
  textColor = '',
}: {
  color: string
  text: string
  width: number
  Icon: JSX.Element | null
  textColor: string
}) {
  return (
    <button
      style={{ width: width, backgroundColor: color, color: textColor }}
      className="rounded-md p-3 border border-solid border-gray-500 flex justify-center gap-2"
    >
      <span className="text-2xl">{Icon}</span>
      <p>{text}</p>
    </button>
  )
}
