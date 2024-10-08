import { StoryObj, Meta } from '@storybook/react';
import { DeleteModal } from "./delete"
import { useRouter } from '@sample/app/utils/hooks/useRouter.mock';
import { useParams } from '@sample/app/utils/hooks/useParams/index.mock';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Device/Modals/Delete',
    component: DeleteModal,
    beforeEach: () => {
      useParams.mockReturnValue({ deviceId: '1', criteriaId: '1' })
      // useRouter.mockReturnValue({ 
      //   back: () => null,
      //   push: () => null,
      //   replace: () => null,
      //   parseNextPath: () => '',
      // })
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['!autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { show: true, close: () => {} }
    // decorators: [BlockDecorator],
  } satisfies Meta<typeof DeleteModal>
  
  export default meta
  type Story = StoryObj<typeof meta>
  
  // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
  export const Primary: Story = {
    args: meta.args
  }
  