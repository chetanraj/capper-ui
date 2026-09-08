import { GradientText, Stack } from '@capper-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GradientText> = {
  title: 'Atoms/GradientText',
  component: GradientText,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GradientText>;

const sample = 'Shipping a design system in public';

export const Variants: Story = {
  render: () => (
    <Stack gap="lg">
      <GradientText as="h1" variant="ink" size="4xl">
        {sample}
      </GradientText>
      <GradientText as="h1" variant="accent" size="4xl">
        {sample}
      </GradientText>
      <GradientText as="h1" variant="warm" size="4xl">
        {sample}
      </GradientText>
      <GradientText as="h1" variant="soft" size="4xl">
        {sample}
      </GradientText>
    </Stack>
  ),
};

export const HeadingScale: Story = {
  render: () => (
    <Stack gap="md">
      <GradientText as="h1" variant="ink" size="4xl">
        Post title
      </GradientText>
      <GradientText as="h2" variant="ink" size="3xl">
        Section heading
      </GradientText>
      <GradientText as="h3" variant="ink" size="2xl" weight="semibold">
        Subsection
      </GradientText>
    </Stack>
  ),
};
