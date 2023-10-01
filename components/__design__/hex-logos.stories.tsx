import type { Meta as MetaObj, StoryObj } from '@storybook/react';
import Image from 'next/image';

export const HexLogos: StoryObj = {};

export default {
  title: 'Design System/Hex Logos',
  component: () => {
    return (
      <div>
        <div>
          <Image
            src={`/static/images/logos/hex-white.svg`}
            alt="Node.js"
            width={64}
            height={64}
          />
        </div>
        <div>
          <Image
            src={`/static/images/logos/hex-black.svg`}
            alt="Node.js"
            width={64}
            height={64}
          />
        </div>
        <div>
          <Image
            src={`/static/images/logos/hex-green.svg`}
            alt="Node.js"
            width={64}
            height={64}
          />
        </div>
      </div>
    );
  },
} as MetaObj;
