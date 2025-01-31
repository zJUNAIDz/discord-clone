export const publicEnv = (env: string) => {
  const value = process.env[`NEXT_PUBLIC_${env}`]
  if (!value) {
    return ""
  }
  return value
}