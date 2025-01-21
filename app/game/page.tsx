type GameProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Game({
  searchParams,
}: GameProps
) {
  const gameParameters = await searchParams
  return Object.entries(gameParameters).map(([key, value]) => (
    <div key={key}>{key}: {value}</div>
  ))
}
