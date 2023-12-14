import { NativeStylesModule } from '@/types';

const styles = {
  wrap: 'flex flex-col items-center gap-[15]',

  helloWorld: 'text-2xl font-bold italic text-yellow-500',

  appName: 'text-xl text-white',

  features: {
    self: 'bg-purple-700 p-[20] rounded-2xl',

    label: 'text-2xl text-white',

    item: {
      self: 'bg-purple-600 p-[20] mt-[10] rounded-xl',

      text: 'text-white',
    },
  },
} satisfies NativeStylesModule;

export default styles;
