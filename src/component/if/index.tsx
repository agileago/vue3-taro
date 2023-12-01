import type { SetupContext } from 'vue'

export interface IfProps {
  /*判断条件*/
  condition: any
}
export function If(props: IfProps, ctx: SetupContext) {
  if (!props.condition) return null
  return ctx.slots.default?.()
}
