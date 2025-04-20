import Plans from "@/sections/Plans/index.js";
import PlansComparison from "@/sections/PlansComparison/index.js";

export const metadata = {
  title: 'Subscriptions',
}

export default () => {
  return (
    <>
      <Plans />
      <PlansComparison />
    </>
  )
}
