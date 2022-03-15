import type { Hanlder } from 'vue3-oop'
import { createDecorator, getProtoMetadata, VueComponent } from 'vue3-oop'
import { useReady } from '@tarojs/taro'

export const MiniHook: MiniHookDecorator = createDecorator('MiniHook', true)

type LifeCycle = 'Ready'

interface MiniHookDecorator {
  (lifecycle: LifeCycle | LifeCycle[]): MethodDecorator
  MetadataKey: string | symbol
}

function handler(targetThis: any) {
  const list = getProtoMetadata<(LifeCycle | LifeCycle[])[]>(targetThis, MiniHook.MetadataKey)
  if (!list?.length) return
  for (const item of list) {
    let vueFn: any
    const doneLife: Record<string, true> = {}
    const options = item.options.slice()
    for (const option of options) {
      if (Array.isArray(option)) {
        options.push(...option)
        continue
      }
      if (doneLife[option]) continue
      switch (option) {
        case 'Ready':
          vueFn = useReady
          break
      }
      doneLife[option] = true
      vueFn(() => targetThis[item.key]())
    }
  }
}

const MiniHookHandler: Hanlder = {
  key: 'MiniHook',
  handler,
}

VueComponent.handler.push(MiniHookHandler)
